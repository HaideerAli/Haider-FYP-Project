import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Clock, Trash2, ChevronRight, ClipboardList } from 'lucide-react'
import CategoryBadge from '../components/CategoryBadge'

const EMERGENCY_BADGE = {
  critical: 'bg-rose-500/15 text-rose-400',
  high: 'bg-amber-500/15 text-amber-400',
  medium: 'bg-yellow-500/15 text-yellow-400',
  low: 'bg-emerald/10 text-emeraldlight',
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  } catch {
    return iso
  }
}

export default function HistoryPage() {
  const [history, setHistory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('medirec_history') || '[]')
      setHistory(saved)
    } catch {
      setHistory([])
    }
  }, [])

  function clearHistory() {
    if (!window.confirm('Clear all diagnosis history? This cannot be undone.')) return
    localStorage.removeItem('medirec_history')
    setHistory([])
    toast.success('History cleared')
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emeraldlight">
            <Clock className="h-3.5 w-3.5" />
            Diagnosis History
          </div>
          <h1 className="text-5xl font-semibold text-white">Recent Diagnoses</h1>
          <p className="mt-3 text-slate-400">Your last {history.length} saved recommendation{history.length !== 1 ? 's' : ''}</p>
        </div>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/30 px-4 py-2 text-sm text-rose-400 transition hover:border-rose-500/50 hover:bg-rose-950/50"
          >
            <Trash2 className="h-4 w-4" />
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="mt-20 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900">
            <ClipboardList className="h-10 w-10 text-slate-600" />
          </div>
          <h2 className="text-2xl font-semibold text-white">No diagnoses yet</h2>
          <p className="mt-3 max-w-sm text-slate-400">
            Your diagnosis history will appear here after you run your first recommendation.
          </p>
          <button
            onClick={() => navigate('/diagnose')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/20 hover:brightness-110 transition"
          >
            Start a Diagnosis
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((entry, i) => (
            <motion.div
              key={entry.timestamp ?? i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {entry.emergency_level && (
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${EMERGENCY_BADGE[entry.emergency_level] ?? 'bg-slate-700 text-slate-300'}`}>
                        {entry.emergency_level}
                      </span>
                    )}
                    <CategoryBadge category={entry.category} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{entry.predicted_disease}</h3>
                  {entry.description && (
                    <p className="mt-1.5 text-sm leading-6 text-slate-400 line-clamp-2">{entry.description}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.matched_symptoms && entry.matched_symptoms.slice(0, 5).map((s) => (
                      <span key={s} className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-300">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                  <div className="rounded-2xl bg-emerald/10 px-4 py-2 text-center">
                    <p className="text-xs text-slate-400">Confidence</p>
                    <p className="text-2xl font-semibold text-emeraldlight">{entry.confidence != null ? `${entry.confidence}%` : '—'}</p>
                  </div>
                  {entry.timestamp && (
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatDate(entry.timestamp)}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => navigate('/diagnose')}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  New Diagnosis
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </main>
  )
}
