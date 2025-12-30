import React from 'react'
import Image from 'next/image'

export default function MenuHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/IMG_5950.jpg"
                alt="Notre Menu La Toscana"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>La Carte</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Notre Menu</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Découvrez notre sélection de spécialités franco-italiennes, préparées avec passion et des produits frais
                </p>
            </div>
        </section>
    )
}
