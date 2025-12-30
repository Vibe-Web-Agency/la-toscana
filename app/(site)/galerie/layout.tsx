import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galerie | La Toscana",
    description:
        "Découvrez notre galerie photos et vidéos : nos plats, l'ambiance chaleureuse de notre restaurant franco-italien et notre équipe passionnée.",
    keywords: ["galerie", "photos", "restaurant", "La Toscana", "pizzeria", "ambiance"],
    openGraph: {
        title: "Galerie | La Toscana",
        description:
            "Découvrez notre galerie photos et vidéos : nos plats, l'ambiance chaleureuse de notre restaurant franco-italien et notre équipe passionnée.",
    },
};

export default function GalerieLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
