import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
            auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            } : undefined
        });

        const formatValue = (val: any) => {
            if (!val) return '-';
            let str = String(val)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            str = str.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
            str = str.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, (match, p1, offset, string) => {
                if (string.substring(Math.max(0, offset - 15), offset).includes('href=')) return match;
                return `<a href="mailto:${p1}">${p1}</a>`;
            });
            str = str.replace(/\r?\n/g, '<br />');
            return str;
        };

        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 0; }
                    a { color: #234CD6; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                    .header { background: linear-gradient(135deg, #234CD6 0%, #8430E1 100%); padding: 32px 24px; text-align: center; }
                    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
                    .content { padding: 32px 24px; }
                    .greeting { color: #3f3f46; font-size: 16px; margin-top: 0; margin-bottom: 24px; line-height: 1.5; }
                    .data-table { width: 100%; border-collapse: separate; border-spacing: 0; }
                    .data-table tr:not(:last-child) td { border-bottom: 1px solid #e4e4e7; }
                    .data-label { padding: 12px 16px 12px 0; color: #71717a; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 40%; vertical-align: top; }
                    .data-value { padding: 12px 0 12px 16px; color: #18181b; font-size: 15px; font-weight: 500; word-break: break-word; }
                    .footer { text-align: center; padding: 24px; color: #a1a1aa; font-size: 13px; border-top: 1px solid #f4f4f5; }
                    .badge { display: inline-block; padding: 4px 12px; background-color: rgba(255,255,255,0.2); color: #fff; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-top: 8px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>New Waitlist Submission</h1>
                        <span class="badge">${type}</span>
                    </div>
                    <div class="content">
                        <p class="greeting">A new submission has been received for the <strong>${type}</strong> waitlist. Here are the details:</p>
                        <table class="data-table">
                            <tbody>
                                ${Object.entries(data).map(([key, value]) => `
                                    <tr>
                                        <td class="data-label">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
                                        <td class="data-value">${formatValue(value)}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="footer">
                        This is an automated message from the Healthcare Creators Collective platform.
                    </div>
                </div>
            </body>
            </html>
        `;

        const mailOptions = {
            from: `"Form Submission" <${process.env.SMTP_USER}>`,
            replyTo: data.email,
            to: process.env.CONTACT_EMAIL,
            subject: `New ${type} waitlist submission`,
            text: `New ${type} waitlist submission:\n\n${Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n')}`,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
