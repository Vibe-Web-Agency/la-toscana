'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const events = [
    {
        title: "Anniversaires",
        description: "Célébrez votre anniversaire dans une ambiance unique avec vos proches.",
        image: "/images/team.png"
    },
    {
        title: "Repas d'affaires",
        description: "Impressionnez vos clients et partenaires dans un cadre élégant.",
        image: "/images/team.png"
    },
    {
        title: "Fêtes de famille",
        description: "Réunions de famille, baptêmes, communions... dans une atmosphère conviviale.",
        image: "/images/team.png"
    }
]

export default function EventTypes() {
    return (
        <AnimatedSection animation="fadeInUp">
            <section className="event-types">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Types d'événements</span>
                        <h2>Pour toutes vos occasions</h2>
                    </div>
                    <div className="events-grid">
                        {events.map((event, index) => (
                            <div className="event-card" key={index}>
                                <div className="event-card-image">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="event-card-content">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}
