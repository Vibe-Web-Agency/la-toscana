'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ContactCTA() {
    return (
        <AnimatedSection animation="fadeInUp">
            <section className="privatisation-cta">
                <div className="container">
                    <div className="privatisation-cta-content">
                        <h2>Prêt à organiser votre événement ?</h2>
                        <p>
                            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé.
                            Notre équipe se fera un plaisir de vous accompagner dans l'organisation de votre événement.
                        </p>
                        <div className="privatisation-cta-buttons">
                            <Link href="/contact" className="btn btn-cta-primary">
                                Demander un devis
                            </Link>
                            <a href="tel:0143468807" className="btn btn-cta-secondary">
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}
