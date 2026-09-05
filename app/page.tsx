import { ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react';


import { projects } from '@/lib/projects';
import { BrandLogo, SocialLinks, StructuredData } from '@/components/site-identity';
import { siteUrl, homeTitle, homeDescription } from '@/lib/seo';

export default function Home() {
  return (
    <div className="publication" id="top">
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': siteUrl + '/', url: siteUrl + '/', name: homeTitle, description: homeDescription, isPartOf: { '@id': siteUrl + '/#website' }, author: { '@id': siteUrl + '/#ashish' }, mainEntity: { '@type': 'ItemList', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.name, url: `${siteUrl}/projects/${project.slug}/` })) } }} />
      <a className="skip-link" href="#projects">Skip to projects</a>
      <header className="masthead">
        <div className="masthead-name" aria-label="Ship Until Dead">ShipUntilDead<span className="masthead-period">.</span></div>
        <div className="masthead-side">
          <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="https://github.com/Ashish-ReddyA" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a></nav>
          <div className="maker-mark"><BrandLogo /><span>Build.<br />Break.<br />Repeat.</span></div>
          <p className="yellow-note">Independent AI builder.<br />Publishing what I build.</p>
        </div>
      </header>
      <main>
        <div className="edition-line"><span><ArrowRight aria-hidden="true" /> Builds From the Underground</span><span>A personal collection by Ashish</span></div>
        <section className="project-spread" id="projects" aria-label="Introduction and selected projects">
          <div className="intro">
            <h1>Self-built.<br />Self-published.<br />Still shipping.</h1>
            <p>I’m Ashish Reddy, an independent AI builder. I build AI tools and experiments around the questions I can’t leave alone.</p>
            <p>A few have made it out into the world. The next one is probably on my desk.</p>
            <a className="intro-link" href="#collection">Meet the projects <ArrowRight size={19} aria-hidden="true" /></a>
            <div className="intro-bottom"><p className="black-note">An idea is a start.<br />A working thing is a story.</p><span className="stamp" aria-hidden="true">Always<Asterisk />building</span></div>
          </div>
          <div className="collection" id="collection">
            <div className="collection-label"><span>Selected projects</span><ArrowRight aria-hidden="true" /></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project ${project.className}`} key={project.name}>
                  <a className="cover-link" href={`/projects/${project.slug}`} aria-label={`Read about ${project.name}`}>
                    <img className="cover" src={project.image} alt={`${project.name} — illustrated independent zine cover`} width="680" height="1020" fetchPriority="high" />
                    <span className="cover-open"><ArrowRight aria-hidden="true" size={24} /></span>
                  </a>
                  <div className="project-copy"><p className="project-category">{project.category}</p><h2>{project.name}</h2><p>{project.description}</p><div className="project-actions"><a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`}>Visit project<ArrowUpRight size={16} aria-hidden="true" /></a><a className="details-link" href={`/projects/${project.slug}`} aria-label={`Details about ${project.name}`}>Details<ArrowRight size={16} aria-hidden="true" /></a></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about-section" id="about" aria-labelledby="about-heading">
          <div className="section-heading"><span className="yellow-note">The person behind the projects</span><span>Curiosity → Code → Something real</span></div>
          <div className="about-spread">
            <h2 id="about-heading">One person.<br />Many <span>what ifs.</span></h2>
            <div className="about-copy"><p>I’m Ashish Reddy, the builder behind ShipUntilDead. This is my collection of AI tools and experiments, with the story, workflow, and source links behind each project.</p><p>Give-AI-what-it-needs helps clarify image and video prompts. Agent Arena explores autonomous agents in controlled experiments. Agnys records agent activity for replay and review.</p><p>Some projects live on their own websites. Others are open repositories you can pull apart. Follow what I’m building or connect with me:</p><SocialLinks /></div>
            <aside className="manifesto"><span>A note to myself</span><p>Stay curious.<br />Make it work.<br />Put it out there.<br />Keep going.</p><span className="signature">— Ashish</span></aside>
          </div>
        </section>
      </main>
      <footer><a href="#top" className="footer-brand"><BrandLogo />ShipUntilDead</a><SocialLinks /><span>© {new Date().getFullYear()} Ashish Reddy</span></footer>
    </div>
  );
}
