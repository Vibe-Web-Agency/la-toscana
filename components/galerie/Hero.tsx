import React from 'react'
import Image from 'next/image'

export default function GalerieHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/salleprincipale.jpg"
                alt="Galerie La Toscana"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>Notre Galerie</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Découvrez La Toscana</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Plongez dans l&apos;univers chaleureux de notre restaurant à travers nos photos et vidéos
                </p>
            </div>
        </section>
    )
}
