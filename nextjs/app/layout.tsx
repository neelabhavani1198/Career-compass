import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Career Compass - AI-Powered Career Guidance for 10th & 12th Students',
  description: 'Discover Your Interests. Explore Your Future. AI-driven career guidance platform built with Next.js.',
  icons: {
    icon: '/assets/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#F5F9FF] text-[#14213D]">
        {children}
      </body>
    </html>
  );
}
