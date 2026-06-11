import React from 'react'
import { NotreHistoireHero, Story, Values, ContactCTA } from '@/components/notre-histoire'

export const metadata = {
  title: 'Notre Histoire',
  description: 'Découvrez l\'histoire et les valeurs du restaurant La Toscana, né d\'une passion pour la cuisine franco-italienne authentique au cœur du 12ème arrondissement de Paris.',
  alternates: { canonical: 'https://latoscanaparis.fr/notre-histoire' },
  openGraph: {
    url: 'https://latoscanaparis.fr/notre-histoire',
    images: [{ url: 'https://latoscanaparis.fr/images/salleprincipale.jpg', width: 1200, height: 630, alt: 'La Toscana - Notre histoire' }],
  },
}
export default function NotreHistoire() {
  return (
    <>
      <NotreHistoireHero />
      <Story />
      <Values />
      <ContactCTA />
    </>
  )
}
