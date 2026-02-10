import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Health Care Creators Collective - Creator',
};

export default function CreatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
