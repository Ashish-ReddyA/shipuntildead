import type { Metadata } from 'next';
import { Anton, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const display = Anton({ variable: '--font-display', weight: '400', subsets: ['latin'] });
const body = IBM_Plex_Mono({ variable: '--font-body', weight: ['400', '600'], subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'ShipUntilDead — Builds From the Underground',
  description: 'Independent AI projects by Ashish. Explore Give-AI-what-it-needs, Agent Arena, and Agnys. Self-built. Self-published. Still shipping.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} antialiased`}>{children}</body></html>;
}
