import type { Metadata } from 'next';
import type { Project } from './projects';

export const siteUrl = 'https://shipuntildead.com';
export const socialProfiles = [
  { name: 'GitHub', url: 'https://github.com/Ashish-ReddyA' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashish-reddy0/' },
  { name: 'X', url: 'https://x.com/Matarisva/' },
];
export const homeTitle = 'Ashish Reddy — AI Builder & Projects | ShipUntilDead';
export const homeDescription = 'Explore AI tools and experiments by Ashish Reddy: Give-AI-what-it-needs, Agent Arena, and Agnys. Independent projects, demos, and the stories behind each build.';
const projectSearch: Record<string, { title: string; description: string }> = {
  'give-ai-what-it-needs': {
    title: 'Give-AI-what-it-needs: AI Prompt Builder | ShipUntilDead',
    description: 'Turn an image or video idea into a clearer AI prompt. Explore the requirement elicitation tool, supported platforms, and a real before-and-after example.',
  },
  'agent-arena': {
    title: 'Agent Arena: Autonomous AI Experiments | ShipUntilDead',
    description: 'Explore Agent Arena by Ashish Reddy: a dashboard for autonomous AI duels, solo sandboxes, builder challenges, and societies with local Docker execution.',
  },
  agnys: {
    title: 'Agnys: The Flight Recorder for AI Agents | ShipUntilDead',
    description: 'Discover Agnys, a flight recorder for AI agents. Capture agent activity, replay sessions, and export reviewable evidence. Read the project story and visit Agnys.',
  },
};

export function pageMetadata(title: string, description: string, pathname = '/', image = '/images/social-home.png'): Metadata {
  return {
    title, description,
    alternates: { canonical: siteUrl + pathname },
    openGraph: { type: 'website', locale: 'en_US', siteName: 'ShipUntilDead', title, description, url: siteUrl + pathname,
      images: [{ url: siteUrl + image, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', creator: '@Matarisva', title, description, images: [siteUrl + image] },
  };
}
export function projectMetadata(project: Project) {
  const { title, description } = projectSearch[project.slug];
  return pageMetadata(title, description, `/projects/${project.slug}/`, `/images/social-${project.slug}.png`);
}
export const identityGraph = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'Person', '@id': `${siteUrl}/#ashish`, name: 'Ashish Reddy', url: `${siteUrl}/#about`,
      jobTitle: 'Independent AI builder', description: 'Builder of AI tools and autonomous agent experiments, including Give-AI-what-it-needs, Agent Arena, and Agnys.',
      sameAs: socialProfiles.map(profile => profile.url) },
    { '@type': 'ImageObject', '@id': `${siteUrl}/#logo`, url: `${siteUrl}/images/logo-512.png`, width: 512, height: 512, caption: 'ShipUntilDead logo' },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'ShipUntilDead', alternateName: 'Ship Until Dead',
      url: `${siteUrl}/`, description: homeDescription, inLanguage: 'en', author: { '@id': `${siteUrl}/#ashish` }, image: { '@id': `${siteUrl}/#logo` } },
  ],
};
export function projectGraph(project: Project) {
  const url = `${siteUrl}/projects/${project.slug}/`;
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': url, url, name: projectSearch[project.slug].title, description: projectSearch[project.slug].description,
      isPartOf: { '@id': `${siteUrl}/#website` }, author: { '@id': `${siteUrl}/#ashish` }, mainEntity: { '@id': `${url}#project` },
      breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'CreativeWork', '@id': `${url}#project`, name: project.name, description: project.introduction,
      url: project.href, image: siteUrl + project.image, creator: { '@id': `${siteUrl}/#ashish` }, mainEntityOfPage: { '@id': url } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ShipUntilDead', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: project.name, item: url },
    ] },
  ] };
}
