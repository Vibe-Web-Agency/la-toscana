import React from 'react'
import { ContactHero, ContactInfo } from '@/components/contact'

export const metadata = {
  title: 'Contact | La Toscana',
  description: 'Contactez le restaurant La Toscana à Paris 12ème. Téléphone, adresse, horaires et formulaire de contact pour réserver ou poser vos questions.',
}
export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  )
}
