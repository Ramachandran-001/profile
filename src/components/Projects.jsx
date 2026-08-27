import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Trust Organisation Website',
    description: 'Designed and developed a fully responsive website for a trust organisation to enhance their online presence and community engagement. Implemented user-friendly navigation and integrated contact forms to facilitate communication between the trust and its stakeholders.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    category: 'frontend',
    github: 'https://github.com/Ramachandran-001',
    live: 'https://www.kvbct.in/',
    gradient: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
    icon: '🏛️',
    featured: true,
    period: 'Aug 2024',
  },
  {
    id: 2,
    title: 'Inwinteck Web Portal',
    description: 'Built and enhanced web portal features using frontend and backend technologies during internship at Inwinteck Pvt. Ltd. Worked with teams to create responsive, user-friendly web pages and improved portal speed and security measures.',
    tech: ['Python', 'React', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    category: 'fullstack',
    github: 'https://github.com/Ramachandran-001',
    live: 'https://inwinteck.com/',
    gradient: 'linear-gradient(135deg, #06d6a0, #00f5ff)',
    icon: '🌐',
    featured: true,
    period: 'Aug 2025',
  },
  {
    id: 3,
    title: 'Digital Wedding Invitation',
    description: 'Animated React wedding invitation with parallax scrolling, countdown timer, photo gallery, Google Maps integration, and music player for a complete digital experience.',
    tech: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/Ramachandran-001',
    live: 'https://wedding-invitation-yimo.vercel.app/',
    gradient: 'linear-gradient(135deg, #f72585, #ff6b35)',
    icon: '💍',
    featured: false,
    period: '2026',
  },
  {
    id: 4,
    title: 'Multi-Factor Auth System',
    description: 'Secure Django MFA implementation with TOTP (Google Authenticator), email-based OTP verification, and rate limiting using Celery and Redis for enhanced security.',
    tech: ['Python', 'Django', 'Celery', 'Redis', 'TOTP', 'PostgreSQL'],
    category: 'backend',
    github: 'https://github.com/Ramachandran-001',
    live: '#',
    gradient: 'linear-gradient(135deg, #ffd60a, #f72585)',
    icon: '🔐',
    featured: false,
    period: '2026',
  },
  {
    id: 5,
    title: 'Real Estate Platform',
    description: 'Property listing platform with Django backend, client interest tracking, admin dashboard, and interactive React frontend with map integration and secure authentication.',
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'REST API', 'Maps'],
    category: 'fullstack',
    github: 'https://github.com/Ramachandran-001',
    live: 'https://ramachandran-001.github.io/Realestate-ragavi/' ,
    gradient: 'linear-gradient(135deg, #a78bfa, #f72585)',
    icon: '🏠',
    featured: false,
    period: '2026',
  },
]

const filters = ['all', 'fullstack', 'frontend', 'backend']

export default function Projects() {
  const [active, setActive] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Real-world applications built with Python, React & Django</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="projects__filters">
          <FiFilter size={16} style={{ color: 'var(--clr-text-dim)' }} />
          {filters.map(f => (
            <button
              key={f}
              className={`projects__filter-btn ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="projects__grid" layout>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Top accent bar */}
      <div className="project-card__accent" style={{ background: project.gradient }} />

      {/* Icon */}
      <div className="project-card__icon-wrap" style={{ background: project.gradient }}>
        <span className="project-card__icon">{project.icon}</span>
      </div>

      {project.featured && <span className="project-card__badge">Featured</span>}

      <h3 className="project-card__title">{project.title}</h3>
      <div className="project-card__period">{project.period}</div>
      <p className="project-card__desc">{project.description}</p>

      {/* Tech tags */}
      <div className="project-card__tags">
        {project.tech.map(t => (
          <span key={t} className="project-card__tag">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
          <FiGithub size={16} /> Code
        </a>
        <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link project-card__link--live">
          <FiExternalLink size={16} /> Live
        </a>
      </div>
    </motion.div>
  )
}
