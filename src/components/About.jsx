import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiAward, FiBookOpen, FiCpu, FiBriefcase } from 'react-icons/fi'
import './About.css'

const stats = [
  { icon: FiCpu, value: '5+', label: 'Projects Built', color: '#6c63ff' },
  { icon: FiBriefcase, value: '2', label: 'Internship', color: '#06d6a0' },
  { icon: FiAward, value: '8.3', label: 'GPA Score', color: '#f72585' },
  { icon: FiBookOpen, value: '2026', label: 'Graduating', color: '#ffd60a' },
]

const timelineItems = [
  {
    year: '2026',
    title: 'B.E. Computer Science Engineering',
    org: 'DMI Engineering College',
    desc: 'Expected graduation Apr 2026 with GPA 8.3. Strong foundation in Data Structures, DBMS, OS, Networks, and full-stack web development.',
    color: '#6c63ff',
    icon: '🎓',
  },
  {
    year: '2025',
    title: 'Software Engineer Intern',
    org: 'Inwinteck Pvt. Ltd',
    desc: 'Jun 2025 – Dec 2025. Developed responsive front-end interfaces, collaborated with teams to build web applications, implemented UI components and optimised performance.',
    color: '#06d6a0',
    icon: '💼',
  },
  {
    year: '2025',
    title: 'Python Full Stack Development',
    org: 'Besant Technologies, Chennai',
    desc: 'Currently pursuing Python Full Stack Development certification — covering Python, Django, React, REST APIs, and database management.',
    color: '#f72585',
    icon: '📜',
  },
  {
    year: '2024',
    title: 'Trust Organisation Website',
    org: 'Independent Project',
    desc: 'Designed and developed a fully responsive website for a trust organisation, enhancing their online presence and community engagement.',
    color: '#ffd60a',
    icon: '🚀',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Python Full Stack Developer · Software Engineer Intern at Inwinteck</p>
        </motion.div>

        <div className="about__layout">
          {/* Left - Info */}
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__avatar-wrap">
              <div className="about__avatar">
                <span className="about__avatar-emoji">👨‍💻</span>
                <div className="about__avatar-ring about__avatar-ring--1" />
                <div className="about__avatar-ring about__avatar-ring--2" />
                <div className="about__avatar-ring about__avatar-ring--3" />
              </div>
            </div>

            <div className="about__bio glass-card">
              <h3 className="about__bio-title">Hi, I'm Ramachandran A! 👋</h3>
              <p className="about__bio-text">
                I'm a <strong>Python Full Stack Developer</strong> with a strong foundation in 
                <strong> Python, HTML, CSS, JavaScript, and React</strong>. Currently completing my 
                B.E. in Computer Science Engineering at <strong>DMI Engineering College</strong> (GPA: 8.3, Apr 2026).
              </p>
              <p className="about__bio-text">
                I gained hands-on industry experience as a <strong>Software Engineer Intern at Inwinteck Pvt. Ltd</strong> 
                (Jul–Dec 2025), where I developed responsive front-end interfaces, built web portal features, 
                and improved application speed and security.
              </p>
             <p className="about__bio-text">
               I completed a <strong>Python Full Stack Development certification</strong> at Besant Technologies, Chennai from January 25 to May 13, 2026. 
                 Passionate about writing clean, maintainable code and delivering great user experiences.
             </p>

              <div className="about__tags">
                {['Python 🐍', 'React ⚛️', 'Django 🎸', 'Bootstrap 🎨', 'SQL 🗄️', 'Git 🔀', 'JavaScript 💛', 'HTML/CSS 🌐'].map(t => (
                  <span key={t} className="about__tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats + Timeline */}
          <div className="about__right">
            {/* Stats */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="about__stat glass-card"
                  style={{ '--stat-color': stat.color }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                  <div className="about__stat-value" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="about__timeline">
              <h3 className="about__timeline-title">My Journey</h3>
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                >
                  <div className="timeline-item__dot" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}>
                    <span>{item.icon}</span>
                  </div>
                  <div className="timeline-item__year" style={{ color: item.color }}>{item.year}</div>
                  <div className="timeline-item__content glass-card">
                    <h4 className="timeline-item__title">{item.title}</h4>
                    <div className="timeline-item__org">{item.org}</div>
                    <p className="timeline-item__desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
