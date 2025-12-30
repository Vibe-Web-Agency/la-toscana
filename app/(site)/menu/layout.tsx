import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Menu | La Toscana',
    description: 'Découvrez la carte du restaurant La Toscana : pizzas, pâtes, viandes, poissons, desserts et vins. Cuisine franco-italienne authentique à Paris 12ème.',
    keywords: ['menu', 'carte', 'pizzas', 'pâtes', 'restaurant italien', 'La Toscana'],
    openGraph: {
        title: 'Menu | La Toscana',
        description: 'Découvrez la carte du restaurant La Toscana : pizzas, pâtes, viandes, poissons, desserts et vins.',
    },
}

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
