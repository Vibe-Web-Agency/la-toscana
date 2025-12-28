import React from 'react'
import Image from 'next/image'

export default function NotreHistoireHero() {
    return (
        <section className="page-hero">
            <div className="page-hero-overlay"></div>
            <Image
                src="/images/team.png"
                alt="L'équipe La Toscana"
                fill
                className="page-hero-image"
                priority
            />
            <div className="page-hero-content">
                <span className="hero-badge hero-animate" style={{ animationDelay: '0.2s' }}>Notre Histoire</span>
                <h1 className="hero-animate" style={{ animationDelay: '0.4s' }}>Une passion familiale</h1>
                <p className="page-hero-subtitle hero-animate" style={{ animationDelay: '0.6s' }}>
                    Découvrez l'histoire de La Toscana, un restaurant né de l'amour de la cuisine franco-italienne
                </p>
            </div>
        </section>
    )
}
