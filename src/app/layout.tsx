import './globals.css';

import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import CookieBanner from '@/components/layout/cookie-banner';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { StyleGlideProvider } from '@/components/styleglide-provider';
import { ThemeProvider } from '@/components/theme-provider';
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://avorasoft.hu'),
  title: {
    default: 'Avorasoft CRM - Adatvezérelt CRM modern csapatok számára',
    template: '%s | Avorasoft CRM',
  },
  description:
    'Az Avorasoft CRM egy felhő alapú CRM szoftver. A modulokat céged igényei szerint alakítjuk és egyedi modulok fejlesztésével támogatjuk munkafolyamataid leegyszerűsítését.',
  keywords: [
    'CRM',
    'ügyfélkapcsolat-kezelés',
    'felhő alapú',
    'feladatkezelés',
    'KanBan',
    'projektmenedzsment',
    'Avorasoft',
  ],
  authors: [{ name: 'Avorasoft' }],
  creator: 'Avorasoft',
  publisher: 'Avorasoft',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Avorasoft CRM - Adatvezérelt CRM modern csapatok számára',
    description:
      'Az Avorasoft CRM egy felhő alapú CRM szoftver. A modulokat céged igényei szerint alakítjuk.',
    siteName: 'Avorasoft CRM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Avorasoft CRM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avorasoft CRM - Adatvezérelt CRM modern csapatok számára',
    description:
      'Az Avorasoft CRM egy felhő alapú CRM szoftver a vállalkozásod számára.',
    images: ['/og-image.png'],
    creator: '@avorasoft',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <RootProvider
            search={{
              options: {
                type: 'static',
              },
            }}
          >
            <StyleGlideProvider />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
