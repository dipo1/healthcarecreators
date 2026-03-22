# Healthcare Creators Collective (HCC)

A modern Next.js platform designed for the Healthcare Creators Collective. This application features a robust lead management system with integrated Google OAuth for email delivery.

## 🚀 Features

- **Lead Management**: Waitlist data is dual-persisted to a local `waitlist.json` and sent via email.
- **Dynamic Mailer**: Supports both SMTP (local/production) and Gmail API (OAuth2) for high deliverability.
- **Google OAuth Integration**: Securely authenticate and send mail using official Google APIs.
- **Privacy First**: Support for `recipientPrivacy` (BCC) on all bulk emails.
- **Mobile Responsive**: Built with standard Next.js components and Tailwind CSS.
- **Vercel Optimized**: Resilient filesystem handling for serverless environments.

---

## 🛠 Setup & Environment

Create a `.env.local` file in the root directory with the following variables:

### Core Configuration
- `NEXT_PUBLIC_BASE_URL`: The base URL of your application (e.g., `http://localhost:3000`).
- `ADMIN_EMAILS`: Comma-separated list of admin email addresses for notifications.

### SMTP (Used in Production)
- `SMTP_HOST`: Your SMTP server hostname (or `127.0.0.1` for local testing).
- `SMTP_PORT`: Port (e.g., `1025` for MailHog, `587` for secure).
- `SMTP_SECURE`: `true` or `false`.
- `SMTP_USER`: SMTP username.
- `SMTP_PASS`: SMTP password.

### Google OAuth2 (Used in Development)
- `GOOGLE_CLIENT_ID`: From Google Cloud Console.
- `GOOGLE_CLIENT_SECRET`: From Google Cloud Console.
- `GOOGLE_REDIRECT_URI`: Usually `http://localhost:3000/api/auth/google`.
- `GOOGLE_TOKEN_PATH`: Path to save the token (`google-token.json`).
- `GOOGLE_EMAIL`: The authenticated gmail address.

### Branding & Socials
- `NEXT_PUBLIC_CONTACT_EMAIL`: The main contact email displayed in the footer.
- `NEXT_PUBLIC_INSTAGRAM_LINK`: URL to Instagram profile.
- `NEXT_PUBLIC_TIKTOK_LINK`: URL to TikTok profile.
- `NEXT_PUBLIC_LINKEDIN_LINK`: URL to LinkedIn company page.

---

## 🔐 Google API Authentication

To enable the Gmail API mailer, you must authenticate once:

1.  Start the development server (`npm run dev`).
2.  Navigate to: `http://localhost:3000/api/auth/google?secret=secret`
3.  Sign in with your Google account and grant permissions.
4.  A `google-token.json` file will be generated automatically in your root folder.

---

## 📂 Data Storage

- **Local Storage**: Waitlist signups are appended to `waitlist.json` in the root (for dev) or `/tmp/waitlist.json` (for Vercel).
- **Mailing Logic**:
  - In **Development**: Uses the Gmail API for high-fidelity testing.
  - In **Production**: Uses standard SMTP for stable bulk delivery.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Email**: [Nodemailer](https://nodemailer.com) & [Google APIs](https://www.npmjs.com/package/googleapis)
- **Styling**: Tailwind CSS
- **Deployment**: [Vercel](https://vercel.com)
