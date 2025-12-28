'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactCTA() {
    return (
        <section className="story-cta">
            <div className="container">
                <AnimatedSection animation="fadeInUp">
                    <div className="story-cta-content">
                        <h2>Venez nous rencontrer</h2>
                        <p>
                            Nous serions ravis de vous accueillir à La Toscana et de partager
                            avec vous notre passion pour la cuisine franco-italienne.
                        </p>
                        <div className="story-cta-buttons">
                            <Link href="/reserver" className="btn btn-cta-primary">
                                Réserver une table
                            </Link>
                            <Link href="/contact" className="btn btn-cta-secondary">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
