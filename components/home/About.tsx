'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <AnimatedSection animation="fadeInLeft" className="about-image-wrapper">
                        <div className="about-image-container">
                            <Image
                                src="/images/salleprincipale.jpg"
                                alt="L'équipe de La Toscana"
                                width={500}
                                height={400}
                                className="about-image"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInRight">
                        <div className="about-content">
                            <span className="section-badge">Notre Histoire</span>
                            <h2>Une équipe passionnée à votre service</h2>
                            <p>
                                Bienvenue chez <strong>La Toscana</strong>, là où la convivialité française rencontre
                                la chaleur italienne. Notre équipe adorable vous accueille dans une ambiance
                                de cantine authentique, où chaque repas devient un moment de partage.
                            </p>
                            <p>
                                Ici, pas de chichis : des sourires sincères, des plats généreux et une atmosphère
                                qui vous fait vous sentir comme à la maison. Venez découvrir notre passion pour
                                la cuisine franco-italienne !
                            </p>
                            <Link href="/notre-histoire" className="btn btn-about">
                                En savoir plus
                                <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
