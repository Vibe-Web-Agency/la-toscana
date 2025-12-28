'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Products() {
    return (
        <section className="products-section">
            <div className="container">
                <div className="products-grid">
                    <AnimatedSection animation="fadeInLeft">
                        <div className="products-content">
                            <span className="section-badge">Nos Produits</span>
                            <h2>Le meilleur de l'Italie et de la France</h2>
                            <p>
                                De la mozzarella di bufala aux fromages français, en passant par nos pâtes
                                fraîches maison et notre charcuterie artisanale, chaque ingrédient est
                                sélectionné pour vous offrir le meilleur.
                            </p>
                            <ul className="products-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    Produits frais et de saison
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    Vins italiens et français soigneusement choisis
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    Desserts gourmands et authentiques
                                </li>
                            </ul>
                            <Link href="/menu" className="btn btn-products">
                                Voir le Menu Complet
                            </Link>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInRight">
                        <div className="products-image-container">
                            <Image
                                src="/images/ingredients.png"
                                alt="Produits frais italiens"
                                width={500}
                                height={400}
                                className="products-image"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
