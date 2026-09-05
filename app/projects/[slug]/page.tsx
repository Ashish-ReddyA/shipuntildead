import type { Metadata } from 'next';

import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getProject, projects } from '@/lib/projects';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: `${project.name} — ShipUntilDead`, description: project.introduction } : { title: 'Project not found — ShipUntilDead' };
}
export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className={`publication project-publication ${project.className}`} id="top">
      <a className="skip-link" href="#project-story">Skip to project details</a>
      <header className="detail-header">
        <a href="/" className="detail-brand">ShipUntilDead<span>.</span></a>
        <nav aria-label="Main navigation"><a href="/#projects">Projects</a><a href="/#about">About</a><a href="https://github.com/Ashish-ReddyA" target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={15} /></a></nav>
      </header>
      <main id="project-story">
        <div className="detail-breadcrumb"><a href="/#projects"><ArrowLeft size={16} />All projects</a><span>Builds From the Underground</span></div>
        <section className="detail-hero" aria-labelledby="project-title">
          <div className="detail-cover"><img src={project.image} alt={`${project.name} zine cover`} width="200" height="300" /><span className="yellow-note">Inside the project</span></div>
          <div className="detail-intro"><p className="detail-kicker">{project.category}</p><h1 id="project-title">{project.name}</h1><p className="detail-deck">{project.introduction}</p><a className="visit-button" href={project.href} target="_blank" rel="noopener noreferrer">Visit project<ArrowUpRight size={19} aria-hidden="true" /></a></div>
        </section>
        {project.slug === 'give-ai-what-it-needs' && (
          <section className="example-spread" id="before-and-after" aria-labelledby="example-title">
            <div className="example-heading"><div><p className="section-marker">An example from my own workflow</p><h2 id="example-title">Same idea. A clearer direction.</h2></div><span className="yellow-note">Before / After</span></div>
            <p className="example-intro">The first image came from my initial prompt. After using the tool to refine the prompt, I generated the anime-style result. The setting, lighting, character styling, and mood now follow a much more specific direction.</p>
            <div className="example-images">
              <figure><a href="/images/give-ai-before.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the initial result at full size"><img src="/images/give-ai-before.jpg" alt="Initial result: a child in a green sweater holding a large gold coin on a sunlit forest path, rendered in a photographic style." width="1408" height="768" loading="lazy" /></a><figcaption><span className="example-label">Before the tool</span><h3>The initial result</h3><p>A daylight forest, photographic styling, and a large coin as the focal point.</p></figcaption></figure>
              <figure><a href="/images/give-ai-after.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open the refined anime-style result at full size"><img src="/images/give-ai-after.jpg" alt="Refined result: an anime-style girl holding a glowing coin on a misty forest path beneath a crescent moon, with mountains in the distance." width="1408" height="768" loading="lazy" /></a><figcaption><span className="example-label">After the tool</span><h3>The refined result</h3><p>Anime styling, a moonlit forest, distant mountains, and a small glowing coin.</p></figcaption></figure>
            </div>
            <p className="example-note">The tool helps clarify the prompt; the images are generated separately. Select either image to see it at full size.</p>
          </section>
        )}
        <div className="story-layout">
          <aside className="story-index">
            <p className="index-heading">In this edition</p>
            <nav aria-label="Project sections">{project.slug === 'give-ai-what-it-needs' && <a href="#before-and-after">Before / After</a>}<a href="#the-idea">The idea</a><a href="#what-it-does">What it does</a><a href="#how-it-works">How it works</a><a href="#in-practice">In practice</a><a href="#sources">Go deeper</a></nav>
            <dl>{project.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
          </aside>
          <div className="story-content">
            <section id="the-idea"><p className="section-marker">The idea</p><h2>{project.headline}</h2><p>{project.problem}</p></section>
            <section id="what-it-does"><p className="section-marker">What it does</p><h2>The moving parts.</h2><div className="feature-list">{project.features.map((feature) => <div className="feature" key={feature.title}><h3>{feature.title}</h3><p>{feature.text}</p></div>)}</div></section>
            <section id="how-it-works"><p className="section-marker">How it works</p><h2>From idea to action.</h2><ol className="workflow">{project.workflow.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>
            <section id="in-practice"><p className="section-marker">In practice</p><h2>Before you dive in.</h2>{project.notes.map((note) => <p key={note}>{note}</p>)}</section>
            <section id="sources" className="source-section"><p className="section-marker">Go deeper</p><h2>Straight from the source.</h2><p>Explore the original documentation for setup instructions and the latest changes.</p><div className="source-links">{project.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</div></section>
          </div>
        </div>
        <div className="next-project"><span>Next on the shelf</span><a href={`/projects/${nextProject.slug}`}>{nextProject.name}<ArrowRight aria-hidden="true" /></a><a href="/#projects" className="back-to-collection">Back to the collection</a></div>
      </main>
      <footer><a href="/" className="footer-brand">ShipUntilDead<ArrowUpRight size={19} aria-hidden="true" /></a><p>Built with curiosity. Published with intent.</p><span>© {new Date().getFullYear()} Ashish</span></footer>
    </div>
  );
}

