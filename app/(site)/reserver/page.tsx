import React from 'react'
import { ReserverHero, ReservationForm } from '@/components/reserver'

export const metadata = {
  title: 'Réserver une table',
  description: 'Réservez votre table au restaurant La Toscana, 94 boulevard Diderot, Paris 12ème. Réservation en ligne rapide — disponible 7j/7, service midi et soir.',
  alternates: { canonical: 'https://latoscanaparis.fr/reserver' },
  openGraph: {
    url: 'https://latoscanaparis.fr/reserver',
    images: [{ url: 'https://latoscanaparis.fr/images/salleprincipale.jpg', width: 1200, height: 630, alt: 'La Toscana - Réserver une table' }],
  },
}
export default function Reserver() {
  return (
    <>
      <ReserverHero />
      <ReservationForm />
    </>
  )
}
