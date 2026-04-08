import fs from 'fs/promises';
import path from 'path';
import WaitlistClient from './WaitlistClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Waitlist | HCC',
  description: 'Administrative view for waitlist submissions.',
};

export default async function AdminWaitlistPage() {
  let submissions = [];
  const adminPassword = process.env.ADMIN_PASSWORD || 'hcc-admin-access';
  
  try {
    const WAITLIST_DIR = !!process.env.VERCEL ? '/tmp' : process.cwd();
    const WAITLIST_PATH = path.join(WAITLIST_DIR, 'waitlist.json');
    const content = await fs.readFile(WAITLIST_PATH, 'utf8');
    submissions = JSON.parse(content);
    
    // Sort by timestamp descending (newest first)
    submissions.sort((a: any, b: any) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  } catch (error) {
    console.error('Error reading waitlist.json:', error);
  }

  return (
    <main>
      <WaitlistClient data={submissions} adminPassword={adminPassword} />
    </main>
  );
}
