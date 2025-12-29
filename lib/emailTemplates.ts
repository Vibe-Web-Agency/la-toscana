// Styles communs pour les emails
export const emailStyles = `
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2d2a26;
    margin: 0;
    padding: 0;
    background-color: #f5f0e8;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .header {
    background: linear-gradient(135deg, #a63d2f, #8a3226);
    color: white;
    padding: 30px;
    text-align: center;
    border-radius: 12px 12px 0 0;
  }
  .header h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 600;
  }
  .header p {
    margin: 10px 0 0;
    opacity: 0.9;
  }
  .content {
    background: white;
    padding: 30px;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  .info-box {
    background: #faf7f2;
    border-left: 4px solid #a63d2f;
    padding: 15px 20px;
    margin: 20px 0;
    border-radius: 0 8px 8px 0;
  }
  .info-box h3 {
    margin: 0 0 10px;
    color: #a63d2f;
    font-size: 16px;
  }
  .info-box p {
    margin: 5px 0;
    color: #5c5651;
  }
  .footer {
    text-align: center;
    padding: 20px;
    color: #8a847d;
    font-size: 14px;
  }
  .footer a {
    color: #a63d2f;
    text-decoration: none;
  }
  .highlight {
    color: #a63d2f;
    font-weight: 600;
  }
`;

// Template de confirmation de réservation pour le client
export const reservationConfirmationTemplate = (data: {
    customerName: string;
    date: string;
    time: string;
    guests: number;
    message?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍝 La Toscana</h1>
      <p>Réservation confirmée</p>
    </div>
    <div class="content">
      <p>Bonjour <strong>${data.customerName}</strong>,</p>
      <p>Nous avons bien reçu votre réservation et nous avons hâte de vous accueillir !</p>
      
      <div class="info-box">
        <h3>📅 Détails de votre réservation</h3>
        <p><strong>Date :</strong> ${data.date}</p>
        <p><strong>Heure :</strong> ${data.time}</p>
        <p><strong>Nombre de personnes :</strong> ${data.guests}</p>
        ${data.message ? `<p><strong>Note :</strong> ${data.message}</p>` : ''}
      </div>

      <p>En cas d'empêchement, merci de nous prévenir au plus tôt au <span class="highlight">01 43 46 88 07</span>.</p>
      
      <p>À très bientôt chez La Toscana !</p>
      <p><em>L'équipe La Toscana</em></p>
    </div>
    <div class="footer">
      <p>La Toscana - 94 Boulevard Diderot, 75012 Paris</p>
      <p><a href="tel:0143468807">01 43 46 88 07</a></p>
    </div>
  </div>
</body>
</html>
`;

// Template de notification admin pour les réservations
export const reservationAdminTemplate = (data: {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    date: string;
    time: string;
    guests: number;
    message?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 Nouvelle Réservation</h1>
      <p>Via le site La Toscana</p>
    </div>
    <div class="content">
      <p>Une nouvelle réservation a été effectuée :</p>
      
      <div class="info-box">
        <h3>👤 Client</h3>
        <p><strong>Nom :</strong> ${data.customerName}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${data.customerPhone}">${data.customerPhone}</a></p>
        <p><strong>Email :</strong> <a href="mailto:${data.customerEmail}">${data.customerEmail}</a></p>
      </div>

      <div class="info-box">
        <h3>📅 Réservation</h3>
        <p><strong>Date :</strong> ${data.date}</p>
        <p><strong>Heure :</strong> ${data.time}</p>
        <p><strong>Couverts :</strong> ${data.guests}</p>
        ${data.message ? `<p><strong>Message :</strong> ${data.message}</p>` : ''}
      </div>
    </div>
    <div class="footer">
      <p>Email automatique - Ne pas répondre directement</p>
    </div>
  </div>
</body>
</html>
`;

// Template de confirmation de demande de devis pour le client
export const quoteConfirmationTemplate = (data: {
    customerName: string;
    eventType: string;
    guests: string;
    preferredDate?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🍝 La Toscana</h1>
      <p>Demande de devis reçue</p>
    </div>
    <div class="content">
      <p>Bonjour <strong>${data.customerName}</strong>,</p>
      <p>Nous avons bien reçu votre demande de devis pour la privatisation de notre restaurant.</p>
      
      <div class="info-box">
        <h3>📋 Récapitulatif de votre demande</h3>
        <p><strong>Type d'événement :</strong> ${data.eventType}</p>
        <p><strong>Nombre de personnes :</strong> ${data.guests}</p>
        ${data.preferredDate ? `<p><strong>Date souhaitée :</strong> ${data.preferredDate}</p>` : ''}
      </div>

      <p>Notre équipe étudie votre demande et vous recontactera <strong>sous 24 à 48 heures</strong> avec une proposition personnalisée.</p>
      
      <p>Pour toute question urgente, n'hésitez pas à nous appeler au <span class="highlight">01 43 46 88 07</span>.</p>
      
      <p>À très bientôt !</p>
      <p><em>L'équipe La Toscana</em></p>
    </div>
    <div class="footer">
      <p>La Toscana - 94 Boulevard Diderot, 75012 Paris</p>
      <p><a href="tel:0143468807">01 43 46 88 07</a></p>
    </div>
  </div>
</body>
</html>
`;

// Template de notification admin pour les demandes de devis
export const quoteAdminTemplate = (data: {
    customerName: string;
    customerPhone: string;
    customerEmail: string;
    eventType: string;
    guests: string;
    preferredDate?: string;
    message?: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${emailStyles}</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 Nouvelle Demande de Devis</h1>
      <p>Privatisation - Via le site La Toscana</p>
    </div>
    <div class="content">
      <p>Une nouvelle demande de devis a été soumise :</p>
      
      <div class="info-box">
        <h3>👤 Client</h3>
        <p><strong>Nom :</strong> ${data.customerName}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${data.customerPhone}">${data.customerPhone}</a></p>
        <p><strong>Email :</strong> <a href="mailto:${data.customerEmail}">${data.customerEmail}</a></p>
      </div>

      <div class="info-box">
        <h3>🎉 Événement</h3>
        <p><strong>Type :</strong> ${data.eventType}</p>
        <p><strong>Nombre de personnes :</strong> ${data.guests}</p>
        ${data.preferredDate ? `<p><strong>Date souhaitée :</strong> ${data.preferredDate}</p>` : ''}
      </div>

      ${data.message ? `
      <div class="info-box">
        <h3>💬 Message du client</h3>
        <p>${data.message}</p>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>Email automatique - Ne pas répondre directement</p>
    </div>
  </div>
</body>
</html>
`;
