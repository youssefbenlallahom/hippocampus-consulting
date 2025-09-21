import { NextRequest, NextResponse } from 'next/server'
import * as brevo from '@getbrevo/brevo'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nom, email et message sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Configuration Brevo
    const apiInstance = new brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!)

    // Configuration de l'email
    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.sender = { name: name, email: email }
    sendSmtpEmail.to = [{ email: 'hippocampusconsultingtunisia@gmail.com', name: 'Hippocampus Consulting' }]
    sendSmtpEmail.subject = `Demande de consultation - ${name}`
    sendSmtpEmail.textContent = `${message}\n\nCordialement,\n${name}${company ? `\nEntreprise: ${company}` : ''}`
    sendSmtpEmail.htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="border-bottom: 3px solid #007bff; padding-bottom: 20px; margin-bottom: 30px;">
            <h2 style="color: #333; margin: 0;">Nouvelle demande de consultation</h2>
            <p style="color: #666; margin: 5px 0 0 0;">📧 Message reçu de <strong>${email}</strong> via le site web</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">Message du client :</h3>
            <p style="margin: 10px 0; white-space: pre-line; line-height: 1.6; color: #444;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #ffffff; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0; margin-bottom: 15px;">Informations du contact :</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Nom :</td>
                <td style="padding: 8px 0; color: #444;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email :</td>
                <td style="padding: 8px 0; color: #444;">
                  <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Entreprise :</td>
                <td style="padding: 8px 0; color: #444;">${company}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-radius: 8px; border: 1px solid #b8daff;">
            <p style="margin: 0; color: #0056b3; font-size: 14px;">
              💡 <strong>Tip :</strong> Vous pouvez répondre directement à cet email pour contacter le client.
            </p>
          </div>
        </div>
      `

    // Envoi de l'email
    await apiInstance.sendTransacEmail(sendSmtpEmail)

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}