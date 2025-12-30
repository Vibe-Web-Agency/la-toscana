import React from 'react'

export const metadata = {
    title: 'Mentions Légales | La Toscana',
    description: 'Consultez les mentions légales du site La Toscana.',
}

export default function MentionsLegalesPage() {
    return (
        <main className="legal-page">
            <div className="container">
                <h1>Mentions Légales</h1>

                <section className="legal-section">
                    <h2>1. Éditeur du site</h2>
                    <p>
                        <strong>Restaurant La Toscana</strong><br />
                        94 Boulevard Diderot<br />
                        75012 Paris, France<br />
                        Téléphone : 01 43 46 88 07
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Directeur de la publication</h2>
                    <p>
                        Le directeur de la publication est le gérant du restaurant La Toscana.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Hébergement</h2>
                    <p>
                        Ce site est hébergé par :<br />
                        <strong>Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, États-Unis
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Conception et développement</h2>
                    <p>
                        Site conçu et développé par :<br />
                        <strong>Vibe Web Agency</strong><br />
                        <a href="https://www.vibewebagency.fr" target="_blank" rel="noopener noreferrer">
                            www.vibewebagency.fr
                        </a>
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Propriété intellectuelle</h2>
                    <p>
                        L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes,
                        sons, logiciels, etc.) est la propriété exclusive de La Toscana ou de ses
                        partenaires et est protégé par les lois françaises et internationales
                        relatives à la propriété intellectuelle.
                    </p>
                    <p>
                        Toute reproduction, représentation, modification, publication, adaptation
                        de tout ou partie des éléments du site, quel que soit le moyen ou le procédé
                        utilisé, est interdite, sauf autorisation écrite préalable.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. Protection des données personnelles</h2>
                    <p>
                        Conformément au Règlement Général sur la Protection des Données (RGPD)
                        et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
                        de rectification, de suppression et d&apos;opposition aux données personnelles
                        vous concernant.
                    </p>
                    <p>
                        Les données collectées via les formulaires du site (réservation, contact,
                        demande de devis) sont utilisées uniquement pour traiter vos demandes et
                        ne sont jamais transmises à des tiers à des fins commerciales.
                    </p>
                    <p>
                        Pour exercer vos droits ou pour toute question relative à vos données
                        personnelles, vous pouvez nous contacter par téléphone au 01 43 46 88 07
                        ou via notre formulaire de contact.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. Cookies</h2>
                    <p>
                        Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur
                        et analyser le trafic. En poursuivant votre navigation sur ce site, vous
                        acceptez l&apos;utilisation de cookies conformément à notre politique de cookies.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. Limitation de responsabilité</h2>
                    <p>
                        Le restaurant La Toscana s&apos;efforce de fournir des informations aussi
                        précises que possible. Toutefois, il ne pourra être tenu responsable des
                        omissions, inexactitudes et carences dans la mise à jour, qu&apos;elles soient
                        de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. Liens hypertextes</h2>
                    <p>
                        Le site peut contenir des liens vers d&apos;autres sites. La Toscana n&apos;exerce
                        aucun contrôle sur ces sites et décline toute responsabilité quant à leur
                        contenu ou leurs pratiques en matière de protection des données.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. Droit applicable</h2>
                    <p>
                        Les présentes mentions légales sont régies par le droit français.
                        En cas de litige, les tribunaux français seront seuls compétents.
                    </p>
                </section>

                <p className="legal-date">
                    Dernière mise à jour : Décembre 2024
                </p>
            </div>
        </main>
    )
}
