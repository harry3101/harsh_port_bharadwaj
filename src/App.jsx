import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import RobotScene from './RobotScene.jsx';

const skillGroups = {
  Programming: ['JavaScript', 'Python', 'Java', 'C++', 'SQL'],
  'Web development': ['React', 'HTML5', 'CSS3', 'REST APIs', 'Accessibility'],
  'Tools & platforms': ['Git & GitHub', 'VS Code', 'Node.js', 'Figma', 'Command line'],
  Interests: ['Frontend engineering', 'UI/UX', 'Open source', 'Web performance', 'Creative coding'],
};
const projects = [
  { type: 'WEB DEVELOPMENT', year: '2025', title: 'Portfolio Website', text: 'A responsive home for my work, process, and the ideas I am currently exploring.', tags: ['React', 'Three.js', 'Design'] },
  { type: 'PRODUCTIVITY', year: '2025', title: 'Taskflow', text: 'A focused task planner with quick capture, useful filters, and persistent local data.', tags: ['JavaScript', 'Local storage', 'UI design'] },
  { type: 'DATA & APIS', year: '2024', title: 'Weather Window', text: 'A compact weather dashboard that turns live forecast data into a readable snapshot.', tags: ['API integration', 'JavaScript', 'CSS'] },
  { type: 'BACKEND', year: '2024', title: 'Notes API', text: 'A straightforward REST service for creating, organizing, and retrieving notes.', tags: ['Node.js', 'REST API', 'Backend'] },
  { type: 'CREATIVE CODING', year: '2024', title: 'Color Study', text: 'An interactive color playground for experimenting with balanced, accessible palettes.', tags: ['Design systems', 'JavaScript', 'Accessibility'] },
  { type: 'DEVELOPER UTILITY', year: '2023', title: 'CLI Journal', text: 'A minimal command-line journal for capturing daily notes without breaking focus.', tags: ['Python', 'CLI', 'File I/O'] },
];
const milestones = [
  ['PROJECT MILESTONE', 'First complete portfolio', 'Designed and shipped a full personal website, bringing projects and learning into one place.'],
  ['LEARNING MILESTONE', 'A year of building', 'Kept a steady practice of learning by making small projects and improving them through feedback.'],
  ['COMMUNITY', 'Open source contributor', 'Started exploring the open-source community and learning how collaborative software gets made.'],
  ['NEXT CHAPTER', 'Always in progress', 'The best part of the journey is the next problem to solve and the next useful thing to build.'],
];
const terminalResponses = { help: 'Available: help, whoami, about, skills, projects, contact, clear', whoami: 'Harsh | Software Developer | Curious builder.', about: 'I build thoughtful digital experiences and dependable software.', skills: 'JavaScript · Python · Java · React · Three.js · Git · Node.js', projects: 'Portfolio Website · Taskflow · Weather Window · Notes API · Color Study · CLI Journal', contact: 'Email: hello@harsh.dev' };

function SectionHeading({ label, children }) {
  return <div className="section-heading"><span className="section-label">// {label}</span><h2>{children}</h2></div>;
}

export default function App() {
  const [activeSkill, setActiveSkill] = useState('Programming');
  const [activeProject, setActiveProject] = useState(null);
  const [milestoneIndex, setMilestoneIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');

  function runCommand(event) {
    event.preventDefault();
    const value = command.trim().toLowerCase();
    if (value === 'clear') setTerminalOutput('');
    else setTerminalOutput(`> ${value}\n${terminalResponses[value] ?? 'Command not found. Type help to see available commands.'}`);
    setCommand('');
  }

  return <>
    <nav className="topbar" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">H</span><span>HARSH<span className="brand-period">.</span></span></a>
      <div className={`nav-links${menuOpen ? ' open' : ''}`}>{[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
      <a className="nav-availability" href="#contact"><span /> OPEN TO WORK</a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </nav>
    <main>
      <header className="hero wrap" id="home">
        <div className="hero-copy"><div className="hero-kicker"><span className="status-dot" /> SOFTWARE / WEB / CURIOSITY</div><h1>Building<br /><span>what's next.</span></h1><p className="hero-summary">I’m Harsh, a software developer turning thoughtful ideas into useful digital experiences. Curious by default, focused on clean code and the details that make products feel right.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a><a className="button button-quiet" href="mailto:hello@harsh.dev?subject=Resume%20request">Request resume <ArrowDown size={16} /></a></div><div className="hero-socials"><a aria-label="GitHub profile" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /></a><a aria-label="LinkedIn profile" href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a><a aria-label="Email Harsh" href="mailto:hello@harsh.dev"><Mail size={17} /></a><span>BASED ON EARTH · AVAILABLE WORLDWIDE</span></div></div>
        <div className="hero-visual"><RobotScene /><div className="hero-caption"><span>01 / DIGITAL CREATURES</span><span>MOVE YOUR CURSOR TO INTERACT</span></div></div><a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </header>
      <section className="section wrap" id="about"><SectionHeading label="PROFILE OVERVIEW">About me</SectionHeading><div className="about-grid"><article className="about-copy"><p>I’m a developer who enjoys the space where thoughtful design meets dependable engineering. I like taking complex ideas, finding the simple core, and building a polished experience around it.</p><h3>Academic journey</h3><div className="education"><div className="edu-row"><div><strong>Computer Science & Engineering</strong><span>University Name · Your City</span></div><time>2022 — PRESENT</time></div><div className="edu-row"><div><strong>Senior Secondary Education</strong><span>School Name · Your City</span></div><time>2020 — 2022</time></div></div></article><div className="stats-grid"><div className="stat"><strong>06</strong><span>Featured projects</span></div><div className="stat"><strong>08<span>+</span></strong><span>Technologies</span></div><div className="stat"><strong>02</strong><span>Years learning</span></div><div className="stat"><strong>∞</strong><span>Curiosity</span></div></div></div></section>
      <section className="section wrap" id="skills"><SectionHeading label="DEVELOPER TOOLKIT">Skills & tools</SectionHeading><div className="skills-panel"><div className="skill-tabs" role="tablist" aria-label="Skill categories">{Object.keys(skillGroups).map((group) => <button key={group} role="tab" aria-selected={activeSkill === group} onClick={() => setActiveSkill(group)}>{group}</button>)}</div><div className="skill-list" role="tabpanel" aria-live="polite">{skillGroups[activeSkill].map((skill, index) => <span className="skill" key={skill}><i>{String(index + 1).padStart(2, '0')}</i>{skill}</span>)}</div></div></section>
      <section className="section wrap" id="projects"><div className="section-title-row"><SectionHeading label="SELECTED BUILDS">Featured projects</SectionHeading><span className="project-count">06 / 06 SELECTED</span></div><div className="projects-grid">{projects.map((project, index) => <button className="project" key={project.title} onClick={() => setActiveProject(project)}><span className="project-index">0{index + 1}</span><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><span className="project-link">EXPLORE SPECIFICATIONS <ArrowUpRight size={15} /></span></button>)}</div></section>
      <section className="section wrap" id="experience"><SectionHeading label="LOG MILESTONES">Experience</SectionHeading><div className="timeline"><article className="job"><span className="job-index">01</span><div><div className="job-heading"><h3>Software Developer Intern</h3><time>SUMMER 2025</time></div><span className="company">Company Name · Your City</span><ul><li>Contributed to user-facing features and collaborated through an iterative development workflow.</li><li>Worked with the team to improve code quality, usability, and delivery confidence.</li></ul></div></article><article className="job"><span className="job-index">02</span><div><div className="job-heading"><h3>Independent Projects</h3><time>2023 — PRESENT</time></div><span className="company">Personal development</span><ul><li>Designed and built small web apps to practice frontend, API, and programming fundamentals.</li><li>Learned to take projects from an initial sketch through implementation and refinement.</li></ul></div></article></div></section>
      <section className="section wrap" id="credentials"><SectionHeading label="VERIFIED LEARNING">Credentials & workshops</SectionHeading><div className="credentials-grid"><article className="credential-column"><h3>Certifications</h3>{[['Responsive Web Design', 'freeCodeCamp'], ['JavaScript Algorithms & Data Structures', 'freeCodeCamp'], ['Git & GitHub Foundations', 'Online coursework'], ['Web Development Fundamentals', 'Online coursework']].map(([name, source]) => <div className="credential" key={name}><span>{name}<small>{source}</small></span><span className="credential-mark">↗</span></div>)}</article><article className="credential-column"><h3>Workshops & learning</h3>{[['Modern Frontend Development', 'Community workshop · 2025'], ['Introduction to Open Source', 'Developer community · 2025'], ['Designing for the Web', 'Community workshop · 2024']].map(([name, source]) => <div className="credential" key={name}><span>{name}<small>{source}</small></span><span className="credential-mark">↗</span></div>)}</article></div></section>
      <section className="section wrap" id="highlights"><SectionHeading label="SMALL WINS">Highlights</SectionHeading><div className="highlight"><span className="highlight-label">{milestones[milestoneIndex][0]}</span><h3>{milestones[milestoneIndex][1]}</h3><p>{milestones[milestoneIndex][2]}</p><div className="highlight-controls"><span>{String(milestoneIndex + 1).padStart(2, '0')} <i>/</i> {String(milestones.length).padStart(2, '0')}</span><button aria-label="Previous highlight" onClick={() => setMilestoneIndex((milestoneIndex + milestones.length - 1) % milestones.length)}>←</button><button aria-label="Next highlight" onClick={() => setMilestoneIndex((milestoneIndex + 1) % milestones.length)}>→</button></div></div></section>
      <section className="section wrap" id="terminal"><SectionHeading label="CLI DIAGNOSTICS ACCESS">Developer console</SectionHeading><p className="terminal-intro">A little command-line window into this portfolio. Try <code>help</code>.</p><div className="terminal"><div className="terminal-top"><span>PORTFOLIO_TERMINAL_V1.0</span><span>HARSH@WEB <i /></span></div><div className="terminal-output">SYSTEM READY. TYPE 'help' TO VIEW AVAILABLE COMMANDS.{terminalOutput && <pre>{terminalOutput}</pre>}</div><form className="terminal-form" onSubmit={runCommand}><label htmlFor="terminal-command">guest@harsh:~$</label><input id="terminal-command" value={command} onChange={(event) => setCommand(event.target.value)} aria-label="Terminal command" autoComplete="off" placeholder="help, about, skills, projects, contact" /><button type="submit">RUN <ArrowUpRight size={14} /></button></form></div></section>
      <section className="section wrap contact-section" id="contact"><div><SectionHeading label="GET IN TOUCH">Let’s connect</SectionHeading><p className="contact-copy">Have a project in mind, want to trade ideas, or just want to say hello? My inbox is open. I’m always glad to meet people who care about making useful things.</p><a className="email-link" href="mailto:hello@harsh.dev"><Mail size={17} /> hello@harsh.dev <ArrowUpRight size={15} /></a></div><div className="connect-links"><span className="section-label">FIND ME ELSEWHERE</span><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={16} /></a><a href="mailto:hello@harsh.dev">Send an email <ArrowUpRight size={16} /></a></div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">H</span><span>HARSH<span className="brand-period">.</span></span></a><span>SOFTWARE · WEB · CURIOSITY</span><span>© 2026 HARSH · BUILT WITH CARE</span></div></footer>
    {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close project details" onClick={() => setActiveProject(null)}><X size={20} /></button><span className="section-label">PROJECT SPECIFICATION</span><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.text}</p><div className="tag-list">{activeProject.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></section></div>}
  </>;
}