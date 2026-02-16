import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Health Care Creators Collective',
};

export default function Home() {
  return <HomeClient />;
}
