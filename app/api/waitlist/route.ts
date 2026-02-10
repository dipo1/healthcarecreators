import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...data } = body;

        const contactEmail = process.env.CONTACT_EMAIL;

        console.log(`Sending ${type} waitlist submission to ${contactEmail}:`, data);

        // In a real implementation, you would use a service like Resend, SendGrid, or Nodemailer here.
        // Example with a hypothetical email service:
        /*
        await resend.emails.send({
          from: 'HCC Waitlist <onboarding@resend.dev>',
          to: contactEmail,
          subject: `New ${type} Waitlist Submission`,
          text: JSON.stringify(data, null, 2),
        });
        */

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
