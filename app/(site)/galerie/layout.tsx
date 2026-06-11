import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galerie Photos",
    description: "Découvrez la galerie photos du restaurant La Toscana : nos plats, pizzas, l'ambiance chaleureuse de la salle et notre cuisine franco-italienne en images.",
    alternates: { canonical: 'https://latoscanaparis.fr/galerie' },
    keywords: ["galerie photos restaurant", "photos pizzas", "ambiance restaurant Paris 12", "La Toscana"],
    openGraph: {
        url: 'https://latoscanaparis.fr/galerie',
        title: "Galerie Photos | La Toscana",
        description: "Nos plats, pizzas et l'ambiance de notre restaurant franco-italien en images.",
        images: [{ url: 'https://latoscanaparis.fr/images/salleprincipale.jpg', width: 1200, height: 630, alt: 'La Toscana - Galerie' }],
    },
};

export default function GalerieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
