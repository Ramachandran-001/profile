import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiStar } from 'react-icons/fi'
import './Experience.css'

const experiences = [
  {
    type: 'internship',
    icon: '💼',
    title: 'Software Engineer',
    company: 'Inwinteck Pvt. Ltd',
    period: 'Jun 2025 – Dec 2025',
    color: '#06d6a0',
    points: [
      'Developed responsive front-end interfaces using HTML, CSS, JavaScript, and React',
      'Collaborated with cross-functional teams to build and deliver web applications on schedule',
      'Implemented UI components and optimised application performance for better user experience',
      'Built and enhanced Inwinteck Web Portal features improving portal speed and security measures',
    ]
  },
  {
    type: 'education',
    icon: '🎓',
    title: 'B.E. Computer Science Engineering',
    company: 'DMI Engineering College',
    period: '2022 – Apr 2026',
    color: '#6c63ff',
    points: [
      'GPA: 8.3 — Strong performance across Data Structures, DBMS, OS, and Networking courses',
      'Developed full-stack web projects using Python, Django, React, and Bootstrap',
      'Participated in hackathons, coding contests, and collaborative team projects',
      'Core Skills: Responsive Web Development, UI Implementation, Backend Logic, Database Optimization',
    ]
  },
  {
    type: 'certification',
    icon: '📜',
    title: 'Python Full Stack Development',
    company: 'Besant Technologies, Chennai',
    period: '2025 – Present (In Progress)',
    color: '#f72585',
    points: [
      'Comprehensive training in Python fundamentals to advanced OOP and Django framework',
      'Hands-on projects building REST APIs with Django REST Framework and React frontends',
      'Database design and optimization with SQL, PostgreSQL, and ORM techniques',
      'Version control with Git & GitHub, and deployment best practices',
    ]
  },
]

const techHighlights = [
  { label: 'Python', color: '#3776ab', emoji: '🐍' },
  { label: 'Django', color: '#092e20', emoji: '🎸' },
  { label: 'React', color: '#61dafb', emoji: '⚛️' },
  { label: 'JavaScript', color: '#f7df1e', emoji: '💛' },
  { label: 'Bootstrap', color: '#7952b3', emoji: '🎨' },
  { label: 'SQL', color: '#f29111', emoji: '🗄️' },
  { label: 'HTML/CSS', color: '#e34f26', emoji: '🌐' },
  { label: 'Git', color: '#f05032', emoji: '🔀' },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">Software Engineer Intern · B.E. CSE · Besant Technologies Certification</p>
        </motion.div>

        <div className="experience__layout">
          {/* Timeline */}
          <div className="experience__timeline">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>

          {/* Tech Cloud */}
          <motion.div
            className="experience__right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="tech-cloud glass-card">
              <h3 className="tech-cloud__title">
                <FiCode size={18} /> Core Technologies
              </h3>
              <div className="tech-cloud__items">
                {techHighlights.map((t, i) => (
                  <motion.div
                    key={t.label}
                    className="tech-cloud__item"
                    style={{ '--tech-color': t.color }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                    whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
                  >
                    <span className="tech-cloud__emoji">{t.emoji}</span>
                    <span className="tech-cloud__label">{t.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internship highlight card */}
            <div className="dev-quote glass-card">
              <div style={{ fontSize: '1.5rem' }}>🏢</div>
              <blockquote className="dev-quote__text">
                Software Engineer Intern at <strong style={{ color: '#06d6a0' }}>Inwinteck Pvt. Ltd</strong>
                <br />Jun 2025 – Dec 2025
              </blockquote>
              <cite className="dev-quote__author">Frontend · Backend · Web Applications</cite>
            </div>

            {/* Quote */}
            <div className="dev-quote glass-card" style={{ marginTop: '1rem' }}>
              <FiStar size={20} style={{ color: '#ffd60a' }} />
              <blockquote className="dev-quote__text">
                "First, solve the problem. Then, write the code."
              </blockquote>
              <cite className="dev-quote__author">— John Johnson</cite>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index, inView }) {
  return (
    <motion.div
      className="exp-card"
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="exp-card__timeline-dot" style={{ background: exp.color, boxShadow: `0 0 15px ${exp.color}` }}>
        <span>{exp.icon}</span>
      </div>
      {index < 2 && <div className="exp-card__timeline-line" style={{ background: `linear-gradient(to bottom, ${exp.color}50, transparent)` }} />}

      <div className="exp-card__content glass-card" style={{ '--exp-color': exp.color }}>
        <div className="exp-card__header">
          <div>
            <h3 className="exp-card__title">{exp.title}</h3>
            <div className="exp-card__company">{exp.company}</div>
          </div>
          <span className="exp-card__period" style={{ color: exp.color }}>{exp.period}</span>
        </div>
        <ul className="exp-card__points">
          {exp.points.map((pt, i) => (
            <li key={i} className="exp-card__point">
              <span className="exp-card__bullet" style={{ background: exp.color }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
