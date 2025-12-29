import { NextRequest, NextResponse } from 'next/server';
import resend from '@/lib/resend';
import {
    quoteConfirmationTemplate,
    quoteAdminTemplate,
} from '@/lib/emailTemplates';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            customerName,
            customerEmail,
            customerPhone,
            eventType,
            guests,
            preferredDate,
            message,
        } = body;

        // Validation
        if (!customerName || !customerEmail || !customerPhone || !eventType || !guests) {
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

        // Formater la date si présente
        const formattedDate = preferredDate
            ? new Date(preferredDate).toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            : undefined;

        // Email de confirmation au client
        await resend.emails.send({
            from: 'La Toscana <noreply@latoscanaparis.fr>',
            to: customerEmail,
            subject: `Demande de devis reçue - La Toscana`,
            html: quoteConfirmationTemplate({
                customerName,
                eventType,
                guests,
                preferredDate: formattedDate,
            }),
        });

        // Email de notification à l'admin
        await resend.emails.send({
            from: 'La Toscana <noreply@vibewebagency.fr>',
            to: adminEmail,
            subject: `🎉 Demande de devis - ${eventType} (${guests} pers.)`,
            html: quoteAdminTemplate({
                customerName,
                customerPhone,
                customerEmail,
                eventType,
                guests,
                preferredDate: formattedDate,
                message,
            }),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erreur envoi email devis:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi des emails' },
            { status: 500 }
        );
    }
}
