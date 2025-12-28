import React from 'react'
import { Hero, About, Values, MenuHighlights, Products, Privatisation, CTA } from '@/components/home'

export default function Home() {
  return (
    <>
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