import { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronDown, ChevronUp, AlertTriangle, RefreshCw } from 'lucide-react'
import CategoryBadge from '../components/CategoryBadge'
import { api } from '../config/api'

const EMERGENCY_COLORS = {
  critical: 'bg-rose-500',
  high: 'bg-amber-500',
  medium: 'bg-yellow-400',
  low: 'bg-emerald',
}

const EMERGENCY_LABELS = {
  critical: 'Critical',
  high: 'Urgent',
  medium: 'Moderate',
  low: 'Routine',
}

function DiseaseCard({ disease }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 hover:border-white/20 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-block h-2 w-2 rounded-full shrink-0 ${EMERGENCY_COLORS[disease.emergency_level] ?? 'bg-slate-500'}`} />
            <CategoryBadge category={disease.category} />
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight">{disease.name}</h3>
          {disease.icd_code && (
            <span className="mt-1 inline-block rounded border border-slate-700 px-2 py-0.5 font-mono text-xs text-slate-500">
              ICD: {disease.icd_code}
            </span>
          )}
        </div>
        <div className="shrink-0 text-right">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            disease.emergency_level === 'critical' ? 'bg-rose-500/15 text-rose-400' :
            disease.emergency_level === 'high' ? 'bg-amber-500/15 text-amber-400' :
            disease.emergency_level === 'medium' ? 'bg-yellow-500/15 text-yellow-400' :
            'bg-emerald/10 text-emeraldlight'
          }`}>
            {EMERGENCY_LABELS[disease.emergency_level] ?? 'Routine'}
          </span>
        </div>
      </div>

      {disease.specialist && (
        <p className="mt-3 text-xs text-slate-400">
          <span className="text-slate-500">Specialist: </span>{disease.specialist}
        </p>
      )}

      {disease.symptoms && disease.symptoms.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {disease.symptoms.slice(0, expanded ? undefined : 3).map((s) => (
            <span key={s} className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-300">{s}</span>
          ))}
          {!expanded && disease.symptoms.length > 3 && (
            <span className="rounded-full bg-slate-800/50 px-2.5 py-0.5 text-xs text-slate-500">
              +{disease.symptoms.length - 3} more
            </span>
          )}
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 flex items-center gap-1 text-xs text-emeraldlight hover:text-white transition-colors"
      >
        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        {expanded ? 'Show less' : 'Show all symptoms'}
      </button>
    </motion.div>
  )
}

export default function DiseasePage() {
  const [diseases, setDiseases] = useState([])
  const [categories, setCategories] = useState({})
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const debounceRef = useRef(null)

  function fetchData() {
    setLoading(true)
    setError(null)
    Promise.all([
      api.get('/api/diseases'),
      api.get('/api/categories'),
    ]).then(([d, c]) => {
      setDiseases(d.data)
      setCategories(c.data)
    }).catch(() => {
      setError('Unable to load disease data. Please check that the backend is running.')
    }).finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData()
    return () => clearTimeout(debounceRef.current)
  }, [])

  const handleSearchChange = useCallback((e) => {
    const val = e.target.value
    setSearch(val)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedSearch(val), 300)
  }, [])

  const filtered = useMemo(() => {
    const q = debouncedSearch.toLowerCase()
    return diseases.filter((d) => {
      const matchCat = activeCategory === 'All' || d.category === activeCategory
      const matchSearch = !q || d.name.toLowerCase().includes(q) || (d.specialist && d.specialist.toLowerCase().includes(q)) || (d.category && d.category.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [diseases, debouncedSearch, activeCategory])

  const categoryNames = ['All', ...Object.keys(categories)]

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emeraldlight">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
          Disease Catalog
        </div>
        <h1 className="text-5xl font-semibold text-white">Browse All Conditions</h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Explore our clinical knowledge base of {diseases.length} conditions with ICD codes, specialist guidance, and detailed treatment information.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="search"
          placeholder="Search diseases, specialists, categories…"
          value={search}
          onChange={handleSearchChange}
          aria-label="Search the disease catalog"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 py-3.5 pl-11 pr-5 text-sm text-white placeholder-slate-500 focus:border-emerald/40 focus:outline-none"
        />
      </div>

      {/* Category pills */}
      <div className="mb-8 flex flex-wrap gap-2 overflow-x-auto pb-1">
        {categoryNames.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-emerald text-white'
                : 'border border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat}
            {cat !== 'All' && categories[cat] && (
              <span className="ml-1.5 opacity-60">({categories[cat].count})</span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-44 animate-pulse rounded-3xl bg-slate-800/40" />
          ))}
        </div>
      ) : error ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <AlertTriangle className="h-12 w-12 text-rose-400 mb-4" />
          <p className="text-lg text-slate-300">{error}</p>
          <button
            onClick={fetchData}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-5 py-2.5 text-sm font-medium text-emeraldlight transition hover:border-emerald/50 hover:bg-emerald/20"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-16 text-center text-slate-400">
          <p className="text-lg">No diseases match your search.</p>
          <button onClick={() => { setSearch(''); setDebouncedSearch(''); setActiveCategory('All') }} className="mt-4 text-emeraldlight hover:underline text-sm">
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4 text-sm text-slate-500">Showing {filtered.length} of {diseases.length} conditions</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((disease) => (
              <DiseaseCard key={disease.name} disease={disease} />
            ))}
          </div>
        </>
      )}

      {/* Emergency legend */}
      <div className="mt-12 flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4 text-xs text-slate-400">
        <span className="font-medium text-slate-300">Emergency Level:</span>
        {Object.entries(EMERGENCY_COLORS).map(([level, color]) => (
          <span key={level} className="flex items-center gap-1.5 capitalize">
            <span className={`h-2 w-2 rounded-full ${color}`} />
            {EMERGENCY_LABELS[level]}
          </span>
        ))}
      </div>
    </main>
  )
}
