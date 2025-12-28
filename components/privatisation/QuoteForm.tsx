'use client'

import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import AnimatedSection from '@/components/ui/AnimatedSection'

interface FormData {
    customer_name: string
    customer_email: string
    customer_phone: string
    message: string
    event_type: string
    guests: string
    preferred_date: string
}

export default function QuoteForm() {
    const [formData, setFormData] = useState<FormData>({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        message: '',
        event_type: '',
        guests: '',
        preferred_date: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            // Construire le message avec les détails
            const fullMessage = `
Type d'événement: ${formData.event_type}
Nombre de personnes: ${formData.guests}
Date souhaitée: ${formData.preferred_date}

Message:
${formData.message}
            `.trim()

            const { error: insertError } = await supabase
                .from('quotes')
                .insert({
                    user_id: process.env.NEXT_PUBLIC_BUSINESS_ID,
                    customer_name: formData.customer_name,
                    customer_email: formData.customer_email,
                    customer_phone: formData.customer_phone,
                    message: fullMessage,
                    service: 'Privatisation - ' + formData.event_type,
                    status: 'pending'
                })

            if (insertError) throw insertError

            setSuccess(true)
            setFormData({
                customer_name: '',
                customer_email: '',
                customer_phone: '',
                message: '',
                event_type: '',
                guests: '',
                preferred_date: ''
            })
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="quote-section">
            <div className="container">
                <AnimatedSection animation="fadeInUp">
                    <div className="quote-wrapper">
                        <div className="quote-info">
                            <span className="section-badge">Demande de Devis</span>
                            <h2>Privatisez La Toscana</h2>
                            <p>
                                Vous souhaitez organiser un événement privé ? Remplissez ce formulaire
                                et nous vous recontacterons rapidement avec une proposition personnalisée.
                            </p>
                            <ul className="quote-features">
                                <li>✓ Réponse sous 24h</li>
                                <li>✓ Devis personnalisé</li>
                                <li>✓ Menu sur-mesure</li>
                                <li>✓ Jusqu'à 50 personnes</li>
                            </ul>
                        </div>

                        {success ? (
                            <div className="reservation-success">
                                <div className="success-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h2>Demande envoyée !</h2>
                                <p>
                                    Merci pour votre demande de devis. Notre équipe vous recontactera
                                    dans les plus brefs délais pour discuter de votre projet.
                                </p>
                                <button
                                    className="btn btn-cta-primary"
                                    onClick={() => setSuccess(false)}
                                >
                                    Faire une nouvelle demande
                                </button>
                            </div>
                        ) : (
                            <form className="reservation-form" onSubmit={handleSubmit}>
                                <h2>Votre demande</h2>

                                {error && (
                                    <div className="form-error">
                                        ✗ {error}
                                    </div>
                                )}

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="customer_name">Nom complet *</label>
                                        <input
                                            type="text"
                                            id="customer_name"
                                            name="customer_name"
                                            value={formData.customer_name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="event_type">Type d'événement *</label>
                                        <select
                                            id="event_type"
                                            name="event_type"
                                            value={formData.event_type}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Sélectionnez...</option>
                                            <option value="Anniversaire">Anniversaire</option>
                                            <option value="Repas d'affaires">Repas d'affaires</option>
                                            <option value="Fête de famille">Fête de famille</option>
                                            <option value="Baptême / Communion">Baptême / Communion</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="customer_phone">Téléphone *</label>
                                        <input
                                            type="tel"
                                            id="customer_phone"
                                            name="customer_phone"
                                            value={formData.customer_phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="06 00 00 00 00"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customer_email">Email *</label>
                                        <input
                                            type="email"
                                            id="customer_email"
                                            name="customer_email"
                                            value={formData.customer_email}
                                            onChange={handleChange}
                                            required
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="guests">Nombre de personnes *</label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Sélectionnez...</option>
                                            <option value="10-15">10 - 15 personnes</option>
                                            <option value="15-25">15 - 25 personnes</option>
                                            <option value="25-35">25 - 35 personnes</option>
                                            <option value="35-50">35 - 50 personnes</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="preferred_date">Date souhaitée</label>
                                        <input
                                            type="date"
                                            id="preferred_date"
                                            name="preferred_date"
                                            value={formData.preferred_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message / Détails de votre événement</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Décrivez votre événement, vos souhaits, préférences culinaires..."
                                        rows={4}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-cta-primary btn-submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Envoi en cours...' : 'Demander un devis'}
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
