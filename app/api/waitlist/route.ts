import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sendGmail } from '@/lib/gmail-mailer';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;

        const recipients = process.env.ADMIN_EMAILS?.split(/\s*,\s*/).filter(Boolean) as string[];
        const subject = `New ${type} waitlist submission${data.email || data.firstName || data.lastName ? ' from ' + (((data.firstName || '') + ' ' + (data.lastName || '')).trim() || data.email) : ''}`;

        try {
            const WAITLIST_DIR = !!process.env.VERCEL ? '/tmp' : process.cwd();
            const WAITLIST_PATH = path.join(WAITLIST_DIR, 'waitlist.json');

            let submissions = [];
            try {
                const content = await fs.readFile(WAITLIST_PATH, 'utf8');
                submissions = JSON.parse(content);
            } catch (e) {
                // File doesn't exist, start fresh
            }
            submissions.push({
                type,
                ...data,
                timestamp: new Date().toISOString()
            });
            await fs.writeFile(WAITLIST_PATH, JSON.stringify(submissions, null, 2));
        } catch (storageError) {
            console.warn('Storage operation failed (this is expected on some read-only platforms):', storageError);
        }

        const formatKey = (key: string) => key.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)?.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ') || key;

        const formatValue = (val: any) => {
            if (!val) return '-';
            let str = String(val)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            str = str.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color: #234CD6; text-decoration: none;">$1</a>');
            str = str.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, (match, p1, offset, string) => {
                if (string.substring(Math.max(0, offset - 15), offset).includes('href=')) return match;
                return `<a href="mailto:${p1}" style="color: #234CD6; text-decoration: none;">${p1}</a>`;
            });
            str = str.replace(/\r?\n/g, '<br />');
            return str;
        };

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>${subject}</title>
                <style>
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 5px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    <div style="background: linear-gradient(135deg, #234CD6 0%, #8430E1 100%); padding: 32px 24px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">New Waitlist Submission</h1>
                        <span style="display: inline-block; padding: 4px 12px; background-color: rgba(255,255,255,0.2); color: #fff; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-top: 8px;">${type}</span>
                    </div>
                    <div style="padding: 32px 24px;">
                        <p style="color: #3f3f46; font-size: 16px; margin-top: 0; margin-bottom: 24px; line-height: 1.5;">A new submission has been received for the <strong>${type}</strong> waitlist. Here are the details:</p>
                        <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
                            <tbody>
                                ${Object.entries(data).map(([key, value], index) => `
                                    <tr>
                                        <td style="padding: 12px 16px 12px 0; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 40%; vertical-align: top;${index ? ' border-top: 1px solid #f4f4f5;' : ''}">${formatKey(key)}:</td>
                                        <td style="padding: 12px 0 12px 16px; color: #18181b; font-size: 15px; font-weight: 500; word-break: break-word;${index ? ' border-top: 1px solid #f4f4f5;' : ''}">${formatValue(value)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div style="text-align: center; padding: 24px; color: #a1a1aa; font-size: 13px; border-top: 1px solid #f4f4f5;">
                        This is an automated message from the Healthcare Creators Collective platform.
                    </div>
                </div>
            </body>
            </html>
        `;

        const textContent = `New ${type} waitlist submission:\n\n${Object.entries(data).map(([k, v]) => `${formatKey(k)}: ${v}`).join('\n')}`;

        if (process.env.NODE_ENV === 'production') {
            await sendGmail({
                sender: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
                recipient: recipients,
                replyTo: data.email,
                subject,
                text: textContent,
                html: htmlContent
            });
        } else {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure: process.env.SMTP_SECURE === 'true',
                auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                } : undefined
            });

            await transporter.sendMail({
                from: `"Form Submission" <${process.env.SMTP_USER || process.env.NEXT_PUBLIC_CONTACT_EMAIL}>`,
                replyTo: data.email,
                to: recipients,
                subject,
                text: textContent,
                html: htmlContent,
            });
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
