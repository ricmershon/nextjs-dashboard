import '@/app/ui/global.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;