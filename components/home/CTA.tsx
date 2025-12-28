'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-grid">
                    {/* Image côté */}
                    <AnimatedSection animation="fadeInLeft">
                        <div className="cta-image-container">
                            <Image
                                src="/images/logo.png"
                                alt="Ambiance La Toscana"
                                width={600}
                                height={500}
                                className="cta-image"
                            />
                            <div className="cta-image-overlay"></div>
                        </div>
                    </AnimatedSection>

                    {/* Contenu */}
                    <AnimatedSection animation="fadeInRight">
                        <div className="cta-content">
                            <span className="section-badge">Réservation</span>
                            <h2>Réservez votre table</h2>
                            <p>
                                Venez vivre l'expérience La Toscana. Une cuisine généreuse,
                                une ambiance chaleureuse et des moments inoubliables vous attendent.
                            </p>

                            {/* Informations pratiques */}
                            <div className="cta-info">
                                <div className="cta-info-item">
                                    <div className="cta-info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="cta-info-text">
                                        <span className="cta-info-label">Horaires</span>
                                        <span className="cta-info-value">Lundi - Dim : 11h30 - 15h30 / 18h30 - 23h30</span>
                                    </div>
                                </div>

                                <div className="cta-info-item">
                                    <div className="cta-info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div className="cta-info-text">
                                        <span className="cta-info-label">Téléphone</span>
                                        <span className="cta-info-value"><a href="tel:0143468807" className="cta-info-value">01 43 46 88 07</a></span>
                                    </div>
                                </div>

                                <div className="cta-info-item">
                                    <div className="cta-info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="cta-info-text">
                                        <span className="cta-info-label">Adresse</span>
                                        <span className="cta-info-value"><a href="https://www.google.com/maps/place/La+Toscana/@48.8469275,2.3846835,17z" target="_blank" className='cta-info-value'>94 Boulevard Diderot, 75012 Paris</a></span>
                                    </div>
                                </div>
                            </div>

                            <div className="cta-buttons">
                                <Link href="/reserver" className="btn btn-cta-primary">
                                    Réserver Maintenant
                                </Link>
                                <Link href="/contact" className="btn btn-cta-secondary">
                                    Nous Contacter
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
