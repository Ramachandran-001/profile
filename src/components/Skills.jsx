import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiServer, FiGlobe } from 'react-icons/fi'
import './Skills.css'

const skillCategories = [
  {
    icon: FiServer,
    label: 'Backend',
    color: '#3776ab',
    colorLight: '#7eb8e8',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Django', level: 75, icon: '🎸' },
      { name: 'Django REST Framework', level: 70, icon: '⚡' },
      { name: 'Backend Logic Development', level: 80, icon: '🔧' },
      { name: 'REST API Design', level: 72, icon: '🔗' },
    ]
  },
  {
    icon: FiGlobe,
    label: 'Frontend',
    color: '#06d6a0',
    colorLight: '#34d399',
    skills: [
      { name: 'HTML5', level: 90, icon: '🌐' },
      { name: 'CSS3', level: 88, icon: '🎨' },
      { name: 'JavaScript (ES6+)', level: 80, icon: '💛' },
      { name: 'React.js', level: 75, icon: '⚛️' },
      { name: 'Bootstrap', level: 82, icon: '📦' },
    ]
  },
  {
    icon: FiDatabase,
    label: 'Database',
    color: '#f72585',
    colorLight: '#f472b6',
    skills: [
      { name: 'SQL', level: 78, icon: '🗄️' },
      { name: 'MySQL', level: 75, icon: '🐬' },
      { name: 'Database Optimization', level: 70, icon: '⚙️' },
    ]
  },
  {
    icon: FiCode,
    label: 'Tools & Core Skills',
    color: '#ffd60a',
    colorLight: '#fde68a',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: '🔀' },
      { name: 'VS Code', level: 92, icon: '💻' },
      { name: 'Responsive Web Dev', level: 88, icon: '📱' },
      { name: 'UI Implementation', level: 82, icon: '🖼️' },
      { name: 'Team Collaboration', level: 85, icon: '🤝' },
    ]
  },
]

function SkillBar({ name, level, icon, color, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="skill-item__header">
        <span className="skill-item__name">
          <span className="skill-item__icon">{icon}</span>
          {name}
        </span>
        <span className="skill-item__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-item__bar-bg">
        <motion.div
          className="skill-item__bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function CategoryCard({ cat, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = cat.icon

  return (
    <motion.div
      ref={ref}
      className="skill-card glass-card"
      style={{ '--card-accent': cat.color }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="skill-card__header">
        <div className="skill-card__icon-wrap" style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}44` }}>
          <Icon size={22} style={{ color: cat.color }} />
        </div>
        <h3 className="skill-card__title" style={{ color: cat.colorLight }}>{cat.label}</h3>
      </div>
      <div className="skill-card__skills">
        {cat.skills.map((sk, i) => (
          <SkillBar key={sk.name} {...sk} color={cat.color} delay={index * 0.15 + i * 0.1} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Python · React · Django · Bootstrap · SQL · Git — building full-stack solutions end to end
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
