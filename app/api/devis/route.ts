import { NextResponse } from "next/server";
import { BUSINESS_ID, client, configure } from "@/lib/supabase-serveur";
import { adresse, tropDeRequetes } from "@/lib/limite-debit";

/**
 * Enregistre une demande de privatisation.
 *
 * Même raison d'être que la route des réservations : le `business_id` vient
 * du serveur, et le formulaire ne porte plus de clé Supabase.
 */
export const dynamic = "force-dynamic";

export async function POST(requete: Request) {
  if (!configure) {
    return NextResponse.json({ erreur: "Service indisponible" }, { status: 503 });
  }

  // Limite large à l'entrée : elle compte tout et arrête le martèlement.
  // La limite stricte est posée plus bas, après la validation, pour ne pas
  // pénaliser quelqu'un qui corrige une faute de frappe.
  const ip = adresse(requete);
  if (tropDeRequetes(`devis-brut:${ip}`, 20, 60_000)) {
    return NextResponse.json(
      { erreur: "Trop de tentatives. Merci de patienter une minute." },
      { status: 429 },
    );
  }

  let corps: {
    customer_name?: string;
    customer_email?: string;
    customer_phone?: string;
    message?: string;
    service?: string;
  };
  try {
    corps = await requete.json();
  } catch {
    return NextResponse.json({ erreur: "Requête illisible" }, { status: 400 });
  }

  const nom = (corps.customer_name ?? "").trim();
  const email = (corps.customer_email ?? "").trim();
  const message = (corps.message ?? "").trim();

  if (!nom || nom.length > 120) {
    return NextResponse.json({ erreur: "Merci d'indiquer votre nom." }, { status: 400 });
  }
  if (!email || !email.includes("@") || email.length > 200) {
    return NextResponse.json({ erreur: "Merci d'indiquer un e-mail valide." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ erreur: "Message trop long." }, { status: 400 });
  }

  if (tropDeRequetes(`devis:${ip}`, 2, 60_000) || tropDeRequetes(`devis-h:${ip}`, 5, 3_600_000)) {
    return NextResponse.json(
      { erreur: "Vous avez déjà envoyé une demande. Nous vous répondons vite." },
      { status: 429 },
    );
  }

  const { error } = await client().from("quotes").insert({
    business_id: BUSINESS_ID,
    customer_name: nom,
    customer_email: email,
    customer_phone: (corps.customer_phone ?? "").trim() || null,
    message,
    service: (corps.service ?? "").trim().slice(0, 200) || null,
    status: "pending",
  });

  if (error) {
    console.error("[devis] insertion :", error.message);
    return NextResponse.json({ erreur: "Enregistrement impossible" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
