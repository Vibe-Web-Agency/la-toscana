import React from 'react'
import Image from 'next/image'

export default function ContactHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/hero.png"
                alt="Contactez La Toscana"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>Contact</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Contactez-nous</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Nous sommes à votre écoute pour toute question ou demande
                </p>
            </div>
        </section>
    )
}
