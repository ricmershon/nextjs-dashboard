import { Metadata } from 'next';

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
    title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard'
    },
    description: 'Built with App Router',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
);

export default RootLayout;