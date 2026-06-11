import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Menu & Carte',
    description: 'Découvrez la carte complète du restaurant La Toscana : pizzas artisanales, pâtes fraîches, viandes, poissons, desserts maison et vins italiens. Paris 12ème.',
    alternates: { canonical: 'https://latoscanaparis.fr/menu' },
    keywords: ['menu restaurant', 'carte pizzas Paris', 'pâtes fraîches Paris 12', 'restaurant italien menu'],
    openGraph: {
        url: 'https://latoscanaparis.fr/menu',
        title: 'Menu & Carte | La Toscana',
        description: 'Pizzas artisanales, pâtes fraîches, viandes, poissons et desserts maison. Découvrez toute notre carte.',
        images: [{ url: 'https://latoscanaparis.fr/images/pizza_burrata.webp', width: 1200, height: 630, alt: 'La Toscana - Menu' }],
    },
}

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
