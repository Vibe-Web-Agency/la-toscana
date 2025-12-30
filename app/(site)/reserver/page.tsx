import React from 'react'
import { ReserverHero, ReservationForm } from '@/components/reserver'

export const metadata = {
  title: 'Réserver | La Toscana',
  description: 'Réservez votre table au restaurant La Toscana à Paris 12ème. Réservation en ligne simple et rapide.',
}
export default function Reserver() {
  return (
    <>
      <ReserverHero />
      <ReservationForm />
    </>
  )
}
