import React from 'react'
import { PrivatisationHero, Services, EventTypes, QuoteForm } from '@/components/privatisation'

export const metadata = {
  title: 'Privatisation | La Toscana',
  description: 'Privatisez le restaurant La Toscana pour vos événements : anniversaires, mariages, réunions d\'entreprise. Devis personnalisé sur demande.',
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