import React from 'react'
import { PrivatisationHero, Services, EventTypes, QuoteForm } from '@/components/privatisation'

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