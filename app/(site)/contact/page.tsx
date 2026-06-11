import React from 'react'
import { ContactHero, ContactInfo } from '@/components/contact'

export const metadata = {
  title: 'Contact',
  description: 'Contactez La Toscana au 01 43 46 88 07. Restaurant au 94 boulevard Diderot, Paris 12ème. Horaires, adresse et formulaire de contact. Ouvert 7j/7.',
  alternates: { canonical: 'https://latoscanaparis.fr/contact' },
  openGraph: {
    url: 'https://latoscanaparis.fr/contact',
    images: [{ url: 'https://latoscanaparis.fr/images/salleprincipale.jpg', width: 1200, height: 630, alt: 'La Toscana - Contact' }],
  },
}
export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  )
}
