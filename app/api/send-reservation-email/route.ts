import { NextRequest, NextResponse } from 'next/server';
import resend from '@/lib/resend';
import {
    reservationConfirmationTemplate,
    reservationAdminTemplate,
} from '@/lib/emailTemplates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            customerName,
            customerEmail,
            customerPhone,
            date,
            time,
            guests,
            message,
        } = body;

        // Validation
        if (!customerName || !customerEmail || !date || !time || !guests) {
            return NextResponse.json(
                { error: 'Données manquantes' },
                { status: 400 }
            );
        }

        const adminEmail = process.env.ADMIN_MAIL;
        if (!adminEmail) {
            console.error('ADMIN_MAIL not configured');
            return NextResponse.json(
                { error: 'Configuration email manquante' },
                { status: 500 }
            );
        }

        // Formater la date pour l'affichage
        const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        // Email de confirmation au client
        await resend.emails.send({
            from: 'La Toscana <noreply@vibewebagency.fr>',
            to: customerEmail,
            subject: `Confirmation de réservation - La Toscana`,
            html: reservationConfirmationTemplate({
                customerName,
                date: formattedDate,
                time,
                guests,
                message,
            }),
        });

        // Email de notification à l'admin
        await resend.emails.send({
            from: 'La Toscana <noreply@vibewebagency.fr>',
            to: adminEmail,
            subject: `🍝 Nouvelle réservation - ${customerName} (${formattedDate})`,
            html: reservationAdminTemplate({
                customerName,
                customerPhone,
                customerEmail,
                date: formattedDate,
                time,
                guests,
                message,
            }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erreur envoi email réservation:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi des emails' },
            { status: 500 }
        );
    }
}
