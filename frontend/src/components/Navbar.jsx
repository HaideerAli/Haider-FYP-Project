import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Activity } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/diagnose', label: 'Diagnose' },
  { to: '/diseases', label: 'Diseases' },
  { to: '/history', label: 'History' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald to-emeraldlight shadow-lg shadow-emerald/30">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Medi<span className="text-emeraldlight">Rec</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald/10 text-emeraldlight'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/diagnose')}
            className="hidden rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald/20 transition hover:brightness-110 md:block"
          >
            Start Diagnosis
          </button>
          <button
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald/10 text-emeraldlight'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => { setOpen(false); navigate('/diagnose') }}
                className="mt-2 rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-5 py-2.5 text-sm font-semibold text-white"
              >
                Start Diagnosis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
