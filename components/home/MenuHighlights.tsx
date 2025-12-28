'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

const menuItems = [
    {
        image: "/images/entree.png",
        alt: "Entrée - Bruschetta",
        tag: "Entrée",
        title: "Bruschetta Toscana",
        description: "Tomates fraîches, basilic, huile d'olive extra vierge sur pain croustillant"
    },
    {
        image: "/images/plat.png",
        alt: "Plat - Tagliatelle",
        tag: "Plat",
        title: "Tagliatelle alla Bolognese",
        description: "Pâtes fraîches maison, sauce bolognaise mijotée, parmesan affiné",
        featured: true
    },
    {
        image: "/images/dessert.png",
        alt: "Dessert - Tiramisu",
        tag: "Dessert",
        title: "Tiramisu Maison",
        description: "Mascarpone onctueux, café italien, cacao amer"
    }
]

export default function MenuHighlights() {
    return (
        <section className="menu-highlights">
            <div className="container">
                <AnimatedSection animation="fadeInUp">
                    <div className="menu-header">
                        <span className="section-badge">Notre Carte</span>
                        <h2>Un avant-goût de nos spécialités</h2>
                    </div>
                    <div className="menu-grid">
                        {menuItems.map((item, index) => (
                            <div key={index} className={`menu-card ${item.featured ? 'featured' : ''}`}>
                                <div className="menu-card-image">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={400}
                                        height={300}
                                    />
                                    <span className="menu-card-tag">{item.tag}</span>
                                </div>
                                <div className="menu-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-cta">
                        <Link href="/menu" className="btn btn-hero-secondary">Découvrir toute la carte</Link>
                        <Link href="/reserver" className="btn btn-privatisation">Réserver une table</Link>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
