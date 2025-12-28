import React from 'react'
import Image from 'next/image'

export default function ReserverHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/hero.png"
                alt="Réserver une table"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>Réservation</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Réservez votre table</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Venez partager un moment convivial autour de nos spécialités franco-italiennes
                </p>
            </div>
        </section>
    )
}
