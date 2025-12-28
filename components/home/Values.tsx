import React from 'react'
import Link from 'next/link'

export default function Values() {
    return (
        <section className="values-section">
            <div className="container">
                <div className="values-header">
                    <span className="section-badge">Nos Valeurs</span>
                    <h2>Ce qui fait notre différence</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                                <line x1="6" y1="17" x2="18" y2="17" />
                            </svg>
                        </div>
                        <h3>Des Produits d'Exception</h3>
                        <p>
                            Nous sélectionnons avec soin les meilleurs produits, frais et de saison,
                            pour vous offrir une cuisine authentique et savoureuse.
                        </p>
                        <Link href="/notre-histoire" className="btn btn-about">
                            En savoir plus
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </div>
                        <h3>Une Équipe Adorable</h3>
                        <p>
                            Notre équipe passionnée vous accueille avec le sourire et vous fait vivre
                            une expérience culinaire inoubliable, comme en famille.
                        </p>
                        <Link href="/notre-histoire" className="btn btn-about">
                            En savoir plus
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                        </div>
                        <h3>Ambiance Cantine</h3>
                        <p>
                            Retrouvez la chaleur d'une vraie cantine, où l'on partage, où l'on rit,
                            et où chaque repas est un moment de convivialité.
                        </p>
                        <Link href="/notre-histoire" className="btn btn-about">
                            En savoir plus
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
