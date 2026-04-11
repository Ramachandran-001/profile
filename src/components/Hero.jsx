import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload, FiPhone } from 'react-icons/fi'
import HeroCanvas from './HeroCanvas'
import './Hero.css'

const roles = ['Python Full Stack Developer', 'Django & React Developer', 'Frontend UI Builder', 'REST API Engineer', 'Software Engineer']

function TypewriterText() {
  const [roleIndex, setRoleIndex] = React.useState(0)
  const [displayed, setDisplayed] = React.useState('')
  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <span className="hero__typewriter">
      {displayed}
      <span className="hero__cursor">|</span>
    </span>
  )
}

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Ramachandran-001', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ramachandran-a-a93052335?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ramachandra.ramu001@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:+919384908295', label: 'Phone' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* 3D Canvas Background */}
      <div className="hero__canvas">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Gradient Overlays */}
      <div className="hero__overlay-left" />
      <div className="hero__overlay-bottom" />

      {/* Content */}
      <div className="hero__layout-wrapper container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image Section */}
          <motion.div className="hero__image-wrap" variants={itemVariants}>
            <div className="hero__image-glow" />
            <img 
              src="/public/image/ram1.png" 
              alt="Ramachandran A" 
              className="hero__profile-image" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://ui-avatars.com/api/?name=Ramachandran+A&size=300&background=6c63ff&color=fff";
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="hero__text-content">
            <motion.div className="hero__badge" variants={itemVariants}>
              <span className="glow-dot" />
              &nbsp; Open to Work — Available Now
            </motion.div>

        <motion.h1 className="hero__name" variants={itemVariants}>
          Hi, I'm <br />
          <span className="hero__name-highlight">Ramachandran A</span>
        </motion.h1>

        <motion.div className="hero__role" variants={itemVariants}>
          <span className="hero__role-prefix">I am a </span>
          <TypewriterText />
        </motion.div>

        <motion.p className="hero__desc" variants={itemVariants}>
          Full Stack Developer with strong foundation in <strong>Python, HTML, CSS, and JavaScript</strong>. 
          Experienced in developing responsive web applications at <strong>Inwinteck Pvt. Ltd</strong>. 
          Passionate about building scalable applications, improving user experience, and writing clean, maintainable code.
        </motion.p>

        {/* Tech Pills */}
        <motion.div className="hero__pills" variants={itemVariants}>
          {['Python', 'React', 'Django', 'JavaScript', 'Bootstrap', 'SQL'].map(tech => (
            <span key={tech} className="hero__pill">{tech}</span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div className="hero__actions" variants={itemVariants}>
          <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <FiMail /> Contact Me
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div className="hero__socials" variants={itemVariants}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="hero__social-btn" aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

          {/* Contact quick info */}
          <motion.div className="hero__contact-row" variants={itemVariants}>
            <span className="hero__contact-item">📧 ramachandra.ramu001@gmail.com</span>
            <span className="hero__contact-item">📞 +91 93849 08295</span>
          </motion.div>
        </div>
      </motion.div>
    </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      >
        <FiArrowDown size={20} />
        <span>Scroll down</span>
      </motion.div>
    </section>
  )
}
