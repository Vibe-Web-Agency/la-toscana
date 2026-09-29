import { NextResponse } from "next/server";
import { BUSINESS_ID, client, configure } from "@/lib/supabase-serveur";
import { bornesDuJour, compterParCreneau } from "@/lib/creneaux";

/**
 * Les créneaux occupés d'une journée.
 *
 * Ne renvoie que des COMPTAGES. Le navigateur n'a jamais besoin de savoir
 * qui a réservé pour afficher « complet » : il lui faut un nombre. La
 * version précédente lisait la table depuis le navigateur et en ramenait
 * les lignes — avec, au passage, celles de tous les autres commerces, faute
 * de filtre sur `business_id`.
 */
export const dynamic = "force-dynamic";

export async function GET(requete: Request) {
  if (!configure) {
    return NextResponse.json({ erreur: "Service indisponible" }, { status: 503 });
  }

  const jour = new URL(requete.url).searchParams.get("date") ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(jour)) {
    return NextResponse.json({ erreur: "Date attendue au format AAAA-MM-JJ" }, { status: 400 });
  }

  const { debut, fin } = bornesDuJour(jour);

  const { data, error } = await client()
    .from("reservations")
    .select("date")
    // LE filtre qui manquait. Sans lui, Toscana calculait ses
    // disponibilités à partir des réservations des autres restaurants.
    .eq("business_id", BUSINESS_ID)
    .eq("status", "scheduled")
    .gte("date", debut)
    .lte("date", fin);

  if (error) {
    console.error("[disponibilites]", error.message);
    return NextResponse.json({ erreur: "Lecture impossible" }, { status: 500 });
  }

  return NextResponse.json({
    creneaux: compterParCreneau((data ?? []).map((r) => r.date as string)),
  });
}
