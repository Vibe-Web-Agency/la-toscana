import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <Image
                src="/images/hero.png"
                alt="Restaurant La Toscana - Ambiance chaleureuse"
                fill
                className="hero-image"
                priority
            />
            <div className="hero-content">
                <span className="hero-badge">Restaurant Franco-Italien</span>
                <h1>La Toscana</h1>
                <p className="hero-subtitle">
                    Un voyage culinaire entre la France et l'Italie, dans une ambiance de cantine chaleureuse
                    <br />Tous nos plats sont disponibles à emporter.
                    Commandez par téléphone et récupérez votre commande au restaurant.</p>
                <div className="hero-buttons">
                    <Link href="/menu" className="btn btn-hero-secondary">Découvrir le Menu</Link>
                    <Link href="/reserver" className="btn btn-hero-primary">Réserver une Table</Link>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}
