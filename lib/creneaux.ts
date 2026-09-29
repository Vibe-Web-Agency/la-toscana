/**
 * Les créneaux de service et la capacité, partagés entre le navigateur et
 * le serveur.
 *
 * Ils vivaient dans le composant du formulaire. Le serveur doit pourtant
 * appliquer EXACTEMENT les mêmes règles : une vérification de capacité faite
 * uniquement dans le navigateur se contourne avec la console du navigateur,
 * ou simplement en appelant l'API directement.
 */

function genererCreneaux(): string[] {
  const creneaux: string[] = [];

  // Midi : 11h30 à 14h30.
  for (let heure = 11; heure <= 14; heure++) {
    for (let min = 0; min < 60; min += 15) {
      if (heure === 11 && min < 30) continue;
      if (heure === 14 && min > 30) continue;
      creneaux.push(`${String(heure).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
    }
  }

  // Soir : 18h30 à 23h00.
  for (let heure = 18; heure <= 23; heure++) {
    for (let min = 0; min < 60; min += 15) {
      if (heure === 18 && min < 30) continue;
      if (heure === 23 && min > 0) continue;
      creneaux.push(`${String(heure).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
    }
  }

  return creneaux;
}

export const CRENEAUX = genererCreneaux();
export const MAX_PAR_CRENEAU = 20;

/** `true` si l'heure fait partie des créneaux de service. */
export function creneauValide(heure: string): boolean {
  return CRENEAUX.includes(heure);
}

/**
 * Compte les réservations par créneau, à partir de leurs seules dates.
 *
 * Volontairement séparé de la requête : c'est la partie qu'on veut pouvoir
 * relire et tester sans base, et elle ne voit jamais autre chose qu'une
 * liste de dates — aucun nom, aucun téléphone.
 */
export function compterParCreneau(dates: string[], fuseau = "Europe/Paris"): Record<string, number> {
  const comptes: Record<string, number> = {};
  for (const c of CRENEAUX) comptes[c] = 0;

  for (const iso of dates) {
    // L'heure du créneau est celle du restaurant, pas celle du serveur qui
    // exécute le code — Vercel tourne en UTC.
    const heure = new Intl.DateTimeFormat("fr-FR", {
      timeZone: fuseau,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
      .format(new Date(iso))
      .replace("h", ":");

    if (comptes[heure] !== undefined) comptes[heure]++;
  }

  return comptes;
}

/** Le jour parisien d'une date `AAAA-MM-JJ`, en bornes UTC. */
export function bornesDuJour(jour: string, fuseau = "Europe/Paris"): { debut: string; fin: string } {
  const versUtc = (local: string) => {
    const naif = new Date(`${local}Z`);
    const enFuseau = new Date(
      new Intl.DateTimeFormat("sv-SE", {
        timeZone: fuseau,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
        .format(naif)
        .replace(" ", "T") + "Z",
    );
    // Deux fois l'instant naïf moins sa lecture dans le fuseau : c'est la
    // conversion inverse. Passer par `Intl` plutôt que par un décalage codé
    // en dur évite de se tromper six mois par an.
    return new Date(naif.getTime() * 2 - enFuseau.getTime()).toISOString();
  };

  return { debut: versUtc(`${jour}T00:00:00`), fin: versUtc(`${jour}T23:59:59.999`) };
}
