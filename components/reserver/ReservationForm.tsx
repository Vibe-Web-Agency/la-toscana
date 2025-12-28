'use client'

import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import AnimatedSection from '@/components/ui/AnimatedSection'

// Générer les créneaux horaires
const generateTimeSlots = () => {
    const slots: string[] = []

    // Midi : 11h30 à 14h30
    for (let hour = 11; hour <= 14; hour++) {
        for (let min = 0; min < 60; min += 15) {
            if (hour === 11 && min < 30) continue
            if (hour === 14 && min > 30) continue
            const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
            slots.push(time)
        }
    }

    // Soir : 18h30 à 23h00
    for (let hour = 18; hour <= 23; hour++) {
        for (let min = 0; min < 60; min += 15) {
            if (hour === 18 && min < 30) continue
            if (hour === 23 && min > 0) continue
            const time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
            slots.push(time)
        }
    }

    return slots
}

const TIME_SLOTS = generateTimeSlots()
const MAX_RESERVATIONS_PER_SLOT = 20

interface FormData {
    customer_name: string
    customer_phone: string
    customer_mail: string
    date: string
    time: string
    guests: number
    message: string
}

export default function ReservationForm() {
    const [formData, setFormData] = useState<FormData>({
        customer_name: '',
        customer_phone: '',
        customer_mail: '',
        date: '',
        time: '',
        guests: 2,
        message: ''
    })
    const [availableSlots, setAvailableSlots] = useState<{ [key: string]: number }>({})
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    // Obtenir la date minimum (aujourd'hui)
    const getMinDate = () => {
        const today = new Date()
        return today.toISOString().split('T')[0]
    }

    // Charger les créneaux disponibles quand la date change
    useEffect(() => {
        if (formData.date) {
            loadAvailableSlots(formData.date)
        }
    }, [formData.date])

    const loadAvailableSlots = async (date: string) => {
        try {
            const startOfDay = new Date(date)
            startOfDay.setHours(0, 0, 0, 0)

            const endOfDay = new Date(date)
            endOfDay.setHours(23, 59, 59, 999)

            const { data, error } = await supabase
                .from('reservations')
                .select('date')
                .gte('date', startOfDay.toISOString())
                .lte('date', endOfDay.toISOString())
                .eq('status', 'scheduled')

            if (error) throw error

            // Compter les réservations par créneau
            const slotCounts: { [key: string]: number } = {}
            TIME_SLOTS.forEach(slot => {
                slotCounts[slot] = 0
            })

            data?.forEach(reservation => {
                const resDate = new Date(reservation.date)
                const time = `${resDate.getHours().toString().padStart(2, '0')}:${resDate.getMinutes().toString().padStart(2, '0')}`
                if (slotCounts[time] !== undefined) {
                    slotCounts[time]++
                }
            })

            setAvailableSlots(slotCounts)
        } catch (err) {
            console.error('Erreur lors du chargement des créneaux:', err)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: name === 'guests' ? parseInt(value) : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            // Créer la date avec l'heure
            const [hours, minutes] = formData.time.split(':').map(Number)
            const reservationDate = new Date(formData.date)
            reservationDate.setHours(hours, minutes, 0, 0)

            // Vérifier la disponibilité
            if (availableSlots[formData.time] >= MAX_RESERVATIONS_PER_SLOT) {
                throw new Error('Ce créneau est complet. Veuillez en choisir un autre.')
            }

            // Insérer la réservation
            const { error: insertError } = await supabase
                .from('reservations')
                .insert({
                    user_id: process.env.NEXT_PUBLIC_BUSINESS_ID,
                    customer_name: formData.customer_name,
                    customer_phone: formData.customer_phone,
                    customer_mail: formData.customer_mail,
                    date: reservationDate.toISOString(),
                    message: formData.message || null,
                    status: 'scheduled',
                    attended: null
                })

            if (insertError) throw insertError

            setSuccess(true)
            setFormData({
                customer_name: '',
                customer_phone: '',
                customer_mail: '',
                date: '',
                time: '',
                guests: 2,
                message: ''
            })
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setLoading(false)
        }
    }

    const isSlotAvailable = (slot: string) => {
        return (availableSlots[slot] || 0) < MAX_RESERVATIONS_PER_SLOT
    }

    return (
        <section className="reservation-section">
            <div className="container">
                <AnimatedSection animation="fadeInUp">
                    <div className="reservation-wrapper">
                        <div className="reservation-info">
                            <h2>Informations pratiques</h2>
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <strong>Horaires</strong>
                                    <span>Midi : 11h30 - 14h30</span>
                                    <span>Soir : 18h30 - 23h00</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <strong>Téléphone</strong>
                                    <a href="tel:0143468807">01 43 46 88 07</a>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="info-text">
                                    <strong>Adresse</strong>
                                    <span>94 Boulevard Diderot</span>
                                    <span>75012 Paris</span>
                                </div>
                            </div>
                        </div>

                        {success ? (
                            <div className="reservation-success">
                                <div className="success-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h2>Réservation confirmée !</h2>
                                <p>
                                    Merci pour votre réservation. Nous avons hâte de vous accueillir
                                    chez La Toscana pour vous faire découvrir notre cuisine franco-italienne.
                                </p>
                                <p className="success-note">
                                    Un email de confirmation vous sera envoyé prochainement.
                                </p>
                                <button
                                    className="btn btn-cta-primary"
                                    onClick={() => setSuccess(false)}
                                >
                                    Faire une nouvelle réservation
                                </button>
                            </div>
                        ) : (
                            <form className="reservation-form" onSubmit={handleSubmit}>
                                <h2>Réserver une table</h2>

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
                                        <label htmlFor="guests">Nombre de personnes *</label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            required
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>
                                            ))}
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
                                        <label htmlFor="customer_mail">Email *</label>
                                        <input
                                            type="email"
                                            id="customer_mail"
                                            name="customer_mail"
                                            value={formData.customer_mail}
                                            onChange={handleChange}
                                            required
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="date">Date *</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            min={getMinDate()}
                                            required
                                        />
                                    </div>
                                </div>

                                {formData.date && (
                                    <div className="form-group time-slots-group">
                                        <label>Choisir un créneau *</label>
                                        <div className="time-slots-container">
                                            <div className="time-slots-section">
                                                <h4>Midi</h4>
                                                <div className="time-slots">
                                                    {TIME_SLOTS.filter(slot => {
                                                        const hour = parseInt(slot.split(':')[0])
                                                        return hour < 15
                                                    }).map(slot => (
                                                        <button
                                                            key={slot}
                                                            type="button"
                                                            className={`time-slot ${formData.time === slot ? 'selected' : ''} ${!isSlotAvailable(slot) ? 'unavailable' : ''}`}
                                                            onClick={() => isSlotAvailable(slot) && setFormData(prev => ({ ...prev, time: slot }))}
                                                            disabled={!isSlotAvailable(slot)}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="time-slots-section">
                                                <h4>Soir</h4>
                                                <div className="time-slots">
                                                    {TIME_SLOTS.filter(slot => {
                                                        const hour = parseInt(slot.split(':')[0])
                                                        return hour >= 18
                                                    }).map(slot => (
                                                        <button
                                                            key={slot}
                                                            type="button"
                                                            className={`time-slot ${formData.time === slot ? 'selected' : ''} ${!isSlotAvailable(slot) ? 'unavailable' : ''}`}
                                                            onClick={() => isSlotAvailable(slot) && setFormData(prev => ({ ...prev, time: slot }))}
                                                            disabled={!isSlotAvailable(slot)}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="message">Message (optionnel)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Allergies, demandes spéciales..."
                                        rows={3}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-cta-primary btn-submit"
                                    disabled={loading || !formData.time}
                                >
                                    {loading ? 'Envoi en cours...' : 'Confirmer la réservation'}
                                </button>
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
