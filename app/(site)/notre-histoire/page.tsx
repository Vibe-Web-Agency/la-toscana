import React from 'react'
import { NotreHistoireHero, Story, Values, ContactCTA } from '@/components/notre-histoire'

export const metadata = {
  title: 'Notre Histoire | La Toscana',
  description: 'Découvrez l\'histoire et les valeurs du restaurant La Toscana. Une passion pour la cuisine franco-italienne depuis des années.',
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
