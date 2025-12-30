import React from 'react'
import { Hero, About, Values, MenuHighlights, Products, Privatisation, CTA } from '@/components/home'

export const metadata = {
  title: 'La Toscana | Restaurant Franco-Italien à Paris 12ème',
  description: 'Découvrez La Toscana, restaurant franco-italien au cœur de Paris 12ème. Cuisine authentique, pizzas, pâtes fraîches et spécialités italiennes dans une ambiance chaleureuse.',
}
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