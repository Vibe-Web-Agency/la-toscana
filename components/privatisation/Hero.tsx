import React from 'react'
import Image from 'next/image'

export default function PrivatisationHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/hero.png"
                alt="Privatisation La Toscana"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>Événements Privés</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Privatisez La Toscana</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Offrez à vos invités une expérience culinaire unique dans un cadre chaleureux et authentique
                </p>
            </div>
        </section>
    )
}
