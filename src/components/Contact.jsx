import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

// WhatsApp number (digits only, with country code)
const WHATSAPP_NUMBER = '919384908295'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Ramachandran! I saw your portfolio and would like to connect with you.")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'ramachandra.ramu001@gmail.com', href: 'mailto:ramachandra.ramu001@gmail.com', color: '#6c63ff' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Ramachandran-001', href: 'https://github.com/Ramachandran-001', color: '#06d6a0' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'rama-chandran-a93052335', href: 'https://www.linkedin.com/in/ramachandran-a-a93052335?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0077b5' },
  { icon: FiPhone, label: 'Phone', value: '+91 93849 08295', href: 'tel:+919384908295', color: '#f72585' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to Django / Python full stack opportunities — let's build something together!
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Left Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-desc">
              Whether you have a project in mind, want to collaborate on a web application, 
              or just want to say hello — reach out directly!
            </p>

            <div className="contact__info-list">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} className="contact__info-item glass-card">
                  <div className="contact__info-icon" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="contact__info-label">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="contact__info-value" style={{ color }}>
                        {value}
                      </a>
                    ) : (
                      <span className="contact__info-value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability tag */}
            <div className="contact__available glass-card">
              <span className="glow-dot" />
              <div>
                <div className="contact__available-title">Available for Work</div>
                <div className="contact__available-desc">Open to full-time / internship / freelance opportunities</div>
              </div>
            </div>
          </motion.div>

          {/* Right — WhatsApp CTA */}
          <motion.div
            className="contact__whatsapp-wrap glass-card"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Glow blob */}
            <div className="wa__blob" />

            <div className="wa__icon-wrap">
              <FaWhatsapp className="wa__icon" />
            </div>

            <h3 className="wa__title">Message on WhatsApp</h3>
            <p className="wa__desc">
              The fastest way to reach me! Click the button below to start a direct 
              WhatsApp conversation — I usually respond within a few hours.
            </p>

            <div className="wa__number">
              <FiPhone size={16} />
              +91 93849 08295
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="wa__btn"
              id="whatsapp-cta"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

            <div className="wa__badges">
              <span className="wa__badge">⚡ Instant Reply</span>
              <span className="wa__badge">🔒 Direct & Private</span>
              <span className="wa__badge">🌏 Available Anytime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
