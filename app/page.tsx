import { ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react';


import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <div className="publication" id="top">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <header className="masthead">
        <div className="masthead-name" aria-label="Ship Until Dead">ShipUntilDead<span className="masthead-period">.</span></div>
        <div className="masthead-side">
          <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="https://github.com/Ashish-ReddyA" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a></nav>
          <div className="maker-mark" aria-hidden="true"><Asterisk strokeWidth={1.2} /><span>Build.<br />Break.<br />Repeat.</span></div>
          <p className="yellow-note">Independent AI builder.<br />Publishing what I build.</p>
        </div>
      </header>
      <main>
        <div className="edition-line"><span><ArrowRight aria-hidden="true" /> Builds From the Underground</span><span>A personal collection by Ashish</span></div>
        <section className="project-spread" id="projects" aria-label="Introduction and selected projects">
          <div className="intro">
            <h1>Self-built.<br />Self-published.<br />Still shipping.</h1>
            <p>I’m Ashish. I build AI tools and experiments around the questions I can’t leave alone.</p>
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
            <div className="about-copy"><p>This is my corner of the internet: a home for the things I’m building with AI, from asking better questions to understanding what autonomous agents actually do.</p><p>Some projects live on their own websites. Others are open repositories you can pull apart. They all belong here.</p><a className="project-link" href="https://github.com/Ashish-ReddyA" target="_blank" rel="noopener noreferrer">Follow the work on GitHub<ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <aside className="manifesto"><span>A note to myself</span><p>Stay curious.<br />Make it work.<br />Put it out there.<br />Keep going.</p><span className="signature">— Ashish</span></aside>
          </div>
        </section>
      </main>
      <footer><a href="#top" className="footer-brand">ShipUntilDead <ArrowUpRight size={19} aria-hidden="true" /></a><p>Built with curiosity. Published with intent.</p><span>© {new Date().getFullYear()} Ashish</span></footer>
    </div>
  );
}
