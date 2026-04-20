import type { Metadata, Viewport } from 'next';
import './globals.css';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Script from 'next/script';

/* ─── Constants ──────────────────────────────────────────────── */
const SITE_URL = 'https://globalniryat.com';
const SITE_NAME = 'Global Niryat';
const OG_TITLE = 'Global Niryat — Exporting Products & Services Globally';
const OG_DESCRIPTION =
  'AI-powered software development, enterprise LMS, WantNow dropshipping, and global e-commerce solutions — all under one roof. Bridging India to the World.';

/* ─── Viewport ────────────────────────────────────────────────── */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0F1A',
};

/* ─── Metadata ────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: OG_DESCRIPTION,
  keywords: [
    'Global Niryat',
    'AI software development India',
    'enterprise LMS',
    'white label LMS',
    'WantNow dropshipping',
    'dropshipping India',
    'e-commerce India',
    'import export India',
    'web development India',
    'mobile app development',
    'Next.js development',
    'React development',
    'Shopify store India',
    'global sourcing India',
    'CRM ERP India',
    'AI ML systems India',
    'technology company India',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Technology',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Global Niryat — Exporting Products & Services Globally',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@globalniryat',
    creator: '@globalniryat',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'apfcHGz5hRzehMnrkUYUSjFQXlE0W2Ih2406oFx72fg',  // Add when available

  },
};

/* ─── JSON-LD Structured Data ─────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 120,
        height: 64,
      },
      description: OG_DESCRIPTION,
      email: 'globalniryatbusiness@gmail.com',
      telephone: '+918530084845',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/globalniryatbusiness',
        'https://linkedin.com/company/globalniryat',
        'https://twitter.com/globalniryat',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: OG_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: OG_TITLE,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      description: OG_DESCRIPTION,
      inLanguage: 'en-IN',
    },
  ],
};

/* ─── Root Layout ─────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="bg-dark text-white">
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <LoadingScreen />
        <ScrollProgress />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
