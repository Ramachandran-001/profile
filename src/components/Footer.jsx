import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiCode, FiHeart } from 'react-icons/fi'
import './Footer.css'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const techStack = ['Python', 'Django', 'React', 'Three.js', 'Framer Motion']

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Ramachandran-001', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/rama-chandran-a93052335', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ramachandra.ramu001@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* Top border glow */}
      <div className="footer__glow-line" />

      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <FiCode size={22} className="footer__logo-icon" />
              <span>Rama<span className="footer__logo-accent">Dev</span></span>
            </div>
            <p className="footer__tagline">
              Python Full Stack Developer · Software Engineer at Inwinteck Pvt. Ltd · 
              B.E. CSE @ DMI Engineering College · Open to Work.
            </p>
            <div className="footer__socials">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer__social" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="footer__nav-section">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button className="footer__nav-link" onClick={() => scrollTo(link.id)}>
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="footer__tech-section">
            <h4 className="footer__nav-title">Built With</h4>
            <div className="footer__tech-list">
              {techStack.map(t => (
                <span key={t} className="footer__tech-tag">{t}</span>
              ))}
            </div>
            <div className="footer__available">
              <span className="glow-dot" />
              <span>Open to Work</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Ramachandran A. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart className="footer__heart" /> using Python, Django & React
          </p>
        </div>
      </div>
    </footer>
  )
}
