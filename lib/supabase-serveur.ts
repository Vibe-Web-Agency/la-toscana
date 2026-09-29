import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase **serveur uniquement**.
 *
 * Remplace `lib/supabase.ts`, qui construisait un client avec
 * `NEXT_PUBLIC_SUPABASE_ANON_KEY` et était importé par des composants
 * `"use client"` : la clé partait donc dans le navigateur de chaque
 * visiteur. Avec elle, on pouvait lire la table `reservations` en entier —
 * noms, téléphones et e-mails de tous les commerces du projet, pas
 * seulement ceux de Toscana.
 *
 * Aucun préfixe `NEXT_PUBLIC_` ici : ce qui porte ce préfixe est inclus
 * dans le paquet envoyé au navigateur, par construction. Tous les accès
 * passent désormais par les routes d'API, qui ne renvoient que des
 * comptages.
 *
 * Même approche que le site de FiFi, qui partage ce projet Supabase.
 */

export const BUSINESS_ID = process.env.BUSINESS_ID ?? "";

function cle(): string {
  // La clé de service contourne les politiques RLS — c'est voulu côté
  // serveur, et c'est aussi pourquoi elle ne doit jamais en sortir. La clé
  // anon est acceptée en repli, pour le cas où les politiques suffisent.
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";
}

export const configure = Boolean(process.env.SUPABASE_URL && cle() && BUSINESS_ID);

export function client() {
  if (!configure) {
    throw new Error(
      "Supabase n'est pas configuré : il faut SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY et BUSINESS_ID.",
    );
  }
  return createClient(process.env.SUPABASE_URL!, cle(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
