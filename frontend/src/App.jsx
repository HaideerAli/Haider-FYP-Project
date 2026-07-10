import { Component } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import DiagnosisPage from './pages/DiagnosisPage'
import DiseasePage from './pages/DiseasePage'
import HistoryPage from './pages/HistoryPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const PAGE_TITLES = {
  '/': 'MediRec — AI Medicine Recommendation',
  '/diagnose': 'Diagnose — MediRec',
  '/diseases': 'Disease Catalog — MediRec',
  '/history': 'Diagnosis History — MediRec',
  '/about': 'About — MediRec',
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function TitleUpdater() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'MediRec'
  }, [pathname])
  return null
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
          <h1 className="text-3xl font-semibold text-white">Something went wrong</h1>
          <p className="mt-3 max-w-sm text-slate-400">
            An unexpected error occurred. Please refresh the page.
          </p>
          <pre className="mt-4 max-w-xl overflow-auto rounded-2xl bg-slate-900 p-4 text-left text-xs text-rose-300">
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <div className="flex min-h-screen flex-col bg-ink font-sans text-white">
        <ScrollToTop />
        <TitleUpdater />
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: '#0f172a', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.1)' },
          }}
        />
        <Navbar />
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><LandingPage /></AnimatedPage>} />
              <Route path="/diagnose" element={<AnimatedPage><DiagnosisPage /></AnimatedPage>} />
              <Route path="/diseases" element={<AnimatedPage><DiseasePage /></AnimatedPage>} />
              <Route path="/history" element={<AnimatedPage><HistoryPage /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
