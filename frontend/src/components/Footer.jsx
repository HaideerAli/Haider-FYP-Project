import { NavLink } from 'react-router-dom'
import { Activity, Github } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/diagnose', label: 'Diagnose' },
  { to: '/diseases', label: 'Diseases' },
  { to: '/history', label: 'History' },
  { to: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="no-print mt-16 border-t border-white/10 bg-ink/80">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald to-emeraldlight">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                Medi<span className="text-emeraldlight">Rec</span>
              </span>
            </div>
            <p className="text-xs leading-6 text-slate-500">
              An AI-powered medicine recommendation system built as a Final Year Project. Not a licensed medical device.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? 'text-emeraldlight' : 'text-slate-400 hover:text-white'}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Tech Stack</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>FastAPI · Python 3.12</li>
              <li>React 18 · Vite · Tailwind CSS</li>
              <li>scikit-learn · XGBoost</li>
              <li>Docker · Recharts</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} MediRec — Final Year Project. For academic demonstration only.
          </p>
          <p className="text-xs text-slate-600">
            Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
