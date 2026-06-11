import React from 'react'
import { PrivatisationHero, Services, EventTypes, QuoteForm } from '@/components/privatisation'

export const metadata = {
  title: 'Privatisation',
  description: 'Privatisez le restaurant La Toscana à Paris 12ème pour vos événements : anniversaires, mariages, soirées d\'entreprise. Jusqu\'à 50 personnes. Devis personnalisé sur demande.',
  alternates: { canonical: 'https://latoscanaparis.fr/privatisation' },
  openGraph: {
    url: 'https://latoscanaparis.fr/privatisation',
    images: [{ url: 'https://latoscanaparis.fr/images/salleprincipale.jpg', width: 1200, height: 630, alt: 'La Toscana - Privatisation' }],
  },
}

export default function PrivatisationPage() {
  return (
    <>
      <PrivatisationHero />
      <Services />
      <EventTypes />
      <QuoteForm />
    </>
  )
}
