import React from 'react'

export const metadata = {
    title: 'Conditions Générales d\'Utilisation | La Toscana',
    description: 'Consultez les conditions générales d\'utilisation du site La Toscana.',
}

export default function CGUPage() {
    return (
        <main className="legal-page">
            <div className="container">
                <h1>Conditions Générales d&apos;Utilisation</h1>

                <section className="legal-section">
                    <h2>1. Objet</h2>
                    <p>
                        Les présentes conditions générales d&apos;utilisation (CGU) ont pour objet de définir
                        les modalités et conditions d&apos;utilisation du site internet La Toscana,
                        ainsi que les droits et obligations des utilisateurs.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Acceptation des conditions</h2>
                    <p>
                        L&apos;accès et l&apos;utilisation du site impliquent l&apos;acceptation sans réserve
                        des présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas
                        utiliser ce site.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Accès au site</h2>
                    <p>
                        Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès
                        à internet. Tous les coûts afférents à l&apos;accès au site, que ce soient les
                        frais matériels, logiciels ou d&apos;accès à internet sont exclusivement à la
                        charge de l&apos;utilisateur.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Services proposés</h2>
                    <p>
                        Le site La Toscana propose les services suivants :
                    </p>
                    <ul>
                        <li>Présentation du restaurant et de ses services</li>
                        <li>Consultation du menu</li>
                        <li>Réservation de tables en ligne</li>
                        <li>Demande de devis pour privatisation</li>
                        <li>Formulaire de contact</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. Réservations</h2>
                    <p>
                        Les réservations effectuées via le site sont soumises à disponibilité.
                        Le restaurant se réserve le droit de refuser ou d&apos;annuler une réservation
                        en cas de circonstances exceptionnelles. Une confirmation par email sera
                        envoyée pour valider votre réservation.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Propriété intellectuelle</h2>
                    <p>
                        L&apos;ensemble des éléments du site (textes, images, logos, photos, vidéos)
                        est protégé par le droit de la propriété intellectuelle. Toute reproduction,
                        représentation ou exploitation non autorisée est interdite.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Protection des données personnelles</h2>
                    <p>
                        Les données personnelles collectées sur le site sont traitées conformément
                        à notre politique de confidentialité et au Règlement Général sur la Protection
                        des Données (RGPD). Pour plus d&apos;informations, consultez nos mentions légales.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Responsabilité</h2>
                    <p>
                        Le restaurant La Toscana s&apos;efforce d&apos;assurer l&apos;exactitude des informations
                        diffusées sur le site. Toutefois, il ne peut être tenu responsable des omissions,
                        inexactitudes ou carences dans la mise à jour de ces informations.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Modification des CGU</h2>
                    <p>
                        La Toscana se réserve le droit de modifier les présentes CGU à tout moment.
                        Les utilisateurs sont invités à consulter régulièrement cette page.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Droit applicable</h2>
                    <p>
                        Les présentes CGU sont régies par le droit français. En cas de litige,
                        les tribunaux français seront seuls compétents.
                    </p>
                </section>

                <p className="legal-date">
                    Dernière mise à jour : Décembre 2024
                </p>
            </div>
        </main>
    )
}
