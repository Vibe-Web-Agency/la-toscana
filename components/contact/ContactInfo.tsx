'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactInfo() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Informations de contact */}
                    <AnimatedSection animation="fadeInLeft">
                        <div className="contact-info-card">
                            <h2>Nos coordonnées</h2>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <strong>Adresse</strong>
                                    <a href="https://www.google.com/maps/place/La+Toscana/@48.8469275,2.3846835,17z" target="_blank" rel="noopener noreferrer">
                                        94 Boulevard Diderot<br />75012 Paris
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <strong>Téléphone</strong>
                                    <a href="tel:0143468807">01 43 46 88 07</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <strong>Horaires</strong>
                                    <span>Lundi - Dimanche</span>
                                    <span>11h30 - 15h30 / 18h30 - 23h30</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Services disponibles */}
                    <AnimatedSection animation="fadeInRight">
                        <div className="contact-services">
                            <h2>Nos services</h2>

                            <div className="service-card">
                                <div className="service-icon takeaway">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Commande à emporter</h3>
                                    <p>
                                        Tous nos plats sont disponibles à emporter ! Appelez-nous au
                                        <a href="tel:0143468807"> 01 43 46 88 07</a> pour passer commande
                                        et venez récupérer votre repas directement au restaurant.
                                    </p>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon reservation">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Réservation de table</h3>
                                    <p>
                                        Réservez votre table en ligne pour être sûr d'avoir une place
                                        à l'heure qui vous convient.
                                    </p>
                                    <Link href="/reserver" className="btn btn-service">
                                        Réserver une table →
                                    </Link>
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon privatisation">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3>Privatisation</h3>
                                    <p>
                                        Envie d'organiser un événement privé ? Anniversaires, repas d'affaires,
                                        fêtes de famille... Privatisez La Toscana jusqu'à 50 personnes.
                                    </p>
                                    <Link href="/privatisation" className="btn btn-service">
                                        Demander un devis →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
