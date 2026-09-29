import { NextResponse } from "next/server";
import { BUSINESS_ID, client, configure } from "@/lib/supabase-serveur";
import { MAX_PAR_CRENEAU, bornesDuJour, compterParCreneau, creneauValide } from "@/lib/creneaux";
import { adresse, tropDeRequetes } from "@/lib/limite-debit";

/**
 * Enregistre une réservation.
 *
 * Tout ce qui décide est ici, côté serveur. Avant, le navigateur insérait
 * directement en base : il choisissait donc son `business_id` (lu dans une
 * variable publique), et la vérification « ce créneau est complet » se
 * faisait dans le composant — donc se contournait avec la console du
 * navigateur, ou en appelant la base sans passer par le formulaire.
 */
export const dynamic = "force-dynamic";

type Corps = {
  customer_name?: string;
  customer_phone?: string;
  customer_mail?: string;
  date?: string;
  time?: string;
  guests?: number;
  message?: string;
};

export async function POST(requete: Request) {
  if (!configure) {
    return NextResponse.json({ erreur: "Service indisponible" }, { status: 503 });
  }

  /*
   * Deux limites, et l'ordre compte.
   *
   * Une limite large à l'entrée, qui compte TOUTES les requêtes : elle
   * arrête le martèlement. Une limite stricte juste avant l'écriture, qui
   * ne compte que les demandes valides : sans cette séparation, quelqu'un
   * qui se trompe deux fois dans le formulaire épuise son quota et se voit
   * refuser sa réservation correcte. C'est le test qui l'a montré.
   */
  const ip = adresse(requete);
  if (tropDeRequetes(`resa-brut:${ip}`, 30, 60_000)) {
    return NextResponse.json(
      { erreur: "Trop de tentatives. Merci de patienter une minute." },
      { status: 429 },
    );
  }

  let corps: Corps;
  try {
    corps = await requete.json();
  } catch {
    return NextResponse.json({ erreur: "Requête illisible" }, { status: 400 });
  }

  const nom = (corps.customer_name ?? "").trim();
  const telephone = (corps.customer_phone ?? "").trim();
  const email = (corps.customer_mail ?? "").trim();
  const jour = (corps.date ?? "").trim();
  const heure = (corps.time ?? "").trim();
  const couverts = Number(corps.guests);

  if (!nom || nom.length > 120) {
    return NextResponse.json({ erreur: "Merci d'indiquer votre nom." }, { status: 400 });
  }
  if (!telephone || telephone.length > 40) {
    return NextResponse.json({ erreur: "Merci d'indiquer un téléphone." }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(jour) || !creneauValide(heure)) {
    return NextResponse.json({ erreur: "Créneau invalide." }, { status: 400 });
  }
  if (!Number.isInteger(couverts) || couverts < 1 || couverts > 30) {
    return NextResponse.json({ erreur: "Nombre de convives invalide." }, { status: 400 });
  }

  // L'heure choisie est celle du restaurant. Construire la date avec le
  // fuseau du serveur — Vercel tourne en UTC — décalerait la réservation.
  const { debut, fin } = bornesDuJour(jour);
  const quandIso = new Date(
    new Date(debut).getTime() +
      (Number(heure.slice(0, 2)) * 60 + Number(heure.slice(3, 5))) * 60_000,
  ).toISOString();

  if (new Date(quandIso).getTime() < Date.now()) {
    return NextResponse.json({ erreur: "Ce créneau est déjà passé." }, { status: 400 });
  }

  if (tropDeRequetes(`resa:${ip}`, 3, 60_000) || tropDeRequetes(`resa-h:${ip}`, 10, 3_600_000)) {
    return NextResponse.json(
      { erreur: "Vous avez déjà réservé plusieurs fois. Merci de nous appeler." },
      { status: 429 },
    );
  }

  const sb = client();

  // La capacité est revérifiée ICI, au moment d'écrire. Le contrôle du
  // navigateur reste utile pour l'affichage, il ne protège rien.
  const { data: dejaPrises, error: erreurLecture } = await sb
    .from("reservations")
    .select("date")
    .eq("business_id", BUSINESS_ID)
    .eq("status", "scheduled")
    .gte("date", debut)
    .lte("date", fin);

  if (erreurLecture) {
    console.error("[reservations] lecture :", erreurLecture.message);
    return NextResponse.json({ erreur: "Enregistrement impossible" }, { status: 500 });
  }

  const comptes = compterParCreneau((dejaPrises ?? []).map((r) => r.date as string));
  if ((comptes[heure] ?? 0) >= MAX_PAR_CRENEAU) {
    return NextResponse.json(
      { erreur: "Ce créneau est complet. Merci d'en choisir un autre." },
      { status: 409 },
    );
  }

  const { error } = await sb.from("reservations").insert({
    // Jamais celui envoyé par le client : il vient de l'environnement du
    // serveur, donc il n'est pas négociable.
    business_id: BUSINESS_ID,
    customer_name: nom,
    customer_phone: telephone,
    customer_mail: email || null,
    date: quandIso,
    guests: couverts,
    message: (corps.message ?? "").trim() || null,
    status: "scheduled",
    attended: null,
  });

  if (error) {
    console.error("[reservations] insertion :", error.message);
    return NextResponse.json({ erreur: "Enregistrement impossible" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
