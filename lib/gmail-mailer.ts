import { gmail } from '@googleapis/gmail';
import { getAuthenticatedClient } from './google-auth';

interface SendGmailOptions {
    sender?: string;
    recipient: string | string[];
    replyTo?: string;
    subject: string;
    html: string;
    text?: string;
    recipientPrivacy?: boolean;
}

export async function sendGmail({ sender, recipient, subject, html, text, recipientPrivacy, replyTo }: SendGmailOptions) {
    const auth = await getAuthenticatedClient();
    const gmailClient = gmail({ version: 'v1', auth });

    sender ??= process.env.GOOGLE_EMAIL;
    const from = `HCC <${sender}>`;
    const to = Array.isArray(recipient) ? recipient.join(', ') : recipient;

    const boundary = `----=_Part_${Math.random().toString(36).substring(2)}`;

    // Initial headers
    let message = `From: ${from}\r\n`;
    if (replyTo) {
        message += `Reply-To: ${replyTo}\r\n`;
    }

    if (recipientPrivacy && Array.isArray(recipient) && recipient.length > 1) {
        const bcc = recipient.filter((email) => email !== sender).join(', ');
        message += `To: ${sender}\r\n`;
        message += `Bcc: ${bcc}\r\n`;
    } else {
        message += `To: ${to}\r\n`;
    }

    message += `Subject: ${subject}\r\n`;
    message += `MIME-Version: 1.0\r\n`;
    message += `Content-Type: multipart/alternative; boundary="${boundary}"\r\n\r\n`;

    // Plain text section
    if (text) {
        message += `--${boundary}\r\n`;
        message += `Content-Type: text/plain; charset=UTF-8\r\n\r\n`;
        message += `${text.replace(/\r?\n/g, '\r\n')}\r\n\r\n`;
    }

    // HTML section
    message += `--${boundary}\r\n`;
    message += `Content-Type: text/html; charset=UTF-8\r\n\r\n`;
    message += `${html.replace(/\r?\n/g, '\r\n')}\r\n\r\n`;
    
    // Closing boundary
    message += `--${boundary}--`;

    const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    try {
        const response = await gmailClient.users.messages.send({
            userId: 'me',
            requestBody: {
                raw: encodedMessage,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('Gmail send error:', error.response?.data || error.message);
        throw error;
    }
}

