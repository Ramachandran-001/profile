import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

// Animated loader
function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onDone, 300); return 100 }
        return p + Math.random() * 15
      })
    }, 120)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div className="loader">
      <div className="loader__inner">
        <div className="loader__orb" />
        <div className="loader__logo">RamaDev</div>
        <div className="loader__role">Python Django Full Stack Developer</div>
        <div className="loader__bar-wrap">
          <div className="loader__bar" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
        <div className="loader__pct">{Math.min(Math.round(progress), 100)}%</div>
      </div>
    </div>
  )
}

// Back to top button
function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <button
      className={`back-top ${visible ? 'back-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

// Section divider component
function Divider({ flip = false }) {
  return (
    <div className={`section-divider ${flip ? 'section-divider--flip' : ''}`}>
      <div className="section-divider__line" />
      <div className="section-divider__dot" />
      <div className="section-divider__line" />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <div className="app">
          <div className="noise-overlay" />

          {/* Fixed background grid */}
          <div className="app__grid-bg" />

          <Navbar />

          <main>
            <Hero />
            <Divider />
            <About />
            <Divider flip />
            <Skills />
            <Divider />
            <Projects />
            <Divider flip />
            <Experience />
            <Divider />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  )
}
