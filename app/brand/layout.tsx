import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Health Care Creators Collective - Brand',
};

export default function BrandLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
