import React from 'react'
import { Hero, About, Values, MenuHighlights, Products, Privatisation, CTA } from '@/components/home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Toscana | Restaurant Franco-Italien Paris 12ème',
  description: 'Découvrez La Toscana, restaurant franco-italien au 94 boulevard Diderot, Paris 12ème. Pizzas artisanales, pâtes fraîches et spécialités italiennes dans une ambiance chaleureuse. Ouvert 7j/7.',
  alternates: { canonical: 'https://latoscanaparis.fr' },
  openGraph: {
    url: 'https://latoscanaparis.fr',
    title: 'La Toscana | Restaurant Franco-Italien Paris 12ème',
    description: 'Pizzas artisanales, pâtes fraîches et spécialités italiennes au cœur du 12ème arrondissement. Ouvert 7j/7, 11h30-15h30 et 18h30-23h30.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'La Toscana',
  description: 'Restaurant franco-italien proposant pizzas artisanales, pâtes fraîches et spécialités italiennes dans une ambiance chaleureuse.',
  url: 'https://latoscanaparis.fr',
  telephone: '+33143468807',
  image: 'https://latoscanaparis.fr/images/salleprincipale.jpg',
  logo: 'https://latoscanaparis.fr/images/logo.png',
  servesCuisine: ['Cuisine italienne', 'Cuisine française', 'Pizzas', 'Pâtes'],
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '94 Boulevard Diderot',
    addressLocality: 'Paris',
    postalCode: '75012',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8469444,
    longitude: 2.3847222,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '11:30',
      closes: '15:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '18:30',
      closes: '23:30',
    },
  ],
  hasMap: 'https://www.google.com/maps/place/La+Toscana/@48.8469275,2.3846835,17z',
  acceptsReservations: true,
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <MenuHighlights />
      {/* <Values /> */}
      <Products />
      <Privatisation />
      <CTA />
    </>
  )
}
