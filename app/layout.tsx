import type { Metadata } from 'next';
import { Anton, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { homeTitle, homeDescription, pageMetadata, identityGraph, siteUrl } from '@/lib/seo';
import { StructuredData } from '@/components/site-identity';
const display = Anton({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const body = IBM_Plex_Mono({ variable: '--font-body', weight: ['400', '600'], subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata(homeTitle, homeDescription),
  applicationName: 'ShipUntilDead',
  authors: [{ name: 'Ashish Reddy', url: siteUrl + '/#about' }],
  creator: 'Ashish Reddy',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-96.png', type: 'image/png', sizes: '96x96' }], apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} antialiased`}><StructuredData data={identityGraph} />{children}</body></html>;
}
