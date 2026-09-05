import { socialProfiles } from '@/lib/seo';

export function StructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
export function SocialLinks() {
  return <nav className="social-links" aria-label="Ashish Reddy on social media">{socialProfiles.map(profile => <a key={profile.name} href={profile.url} target="_blank" rel="me noopener noreferrer">{profile.name}<span aria-hidden="true">↗</span></a>)}</nav>;
}
export function BrandLogo() {
  return <img className="brand-logo" src="/images/logo.svg" width="40" height="40" alt="ShipUntilDead logo" />;
}
