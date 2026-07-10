import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ChevronRight } from 'lucide-react'
import SymptomSelector from '../components/SymptomSelector'
import DiagnosisCard from '../components/DiagnosisCard'
import MedicineCard from '../components/MedicineCard'
import ConfidenceChart from '../components/ConfidenceChart'
import SkeletonLoader from '../components/SkeletonLoader'
import PrintReport from '../components/PrintReport'
import { api } from '../config/api'

function saveToHistory(result) {
  try {
    const entry = { ...result, timestamp: new Date().toISOString() }
    const prev = JSON.parse(localStorage.getItem('medirec_history') || '[]')
    localStorage.setItem('medirec_history', JSON.stringify([entry, ...prev].slice(0, 10)))
  } catch (_) {}
}

export default function DiagnosisPage() {
  const [symptoms, setSymptoms] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/api/symptoms')
      .then((r) => setSymptoms(Array.isArray(r.data) ? r.data : r.data.symptoms || []))
      .catch(() => toast.error('Unable to load symptoms from backend'))
  }, [])

  async function handleAnalyze() {
    if (selected.length === 0) {
      toast.error('Please select at least one symptom')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const response = await api.post('/api/predict', {
        symptoms: selected.map((item) => item.value),
      })
      setResult(response.data)
      saveToHistory(response.data)
      toast.success('Recommendation generated')
    } catch {
      setError('Failed to analyze symptoms')
      toast.error('Prediction request failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero / input card */}
      <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-ink p-8 shadow-[0_45px_120px_-40px_rgba(0,0,0,0.75)] sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-emerald/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emeraldlight">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" />
              AI Health Concierge
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Medicine recommendation reimagined for modern healthcare.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Experience an advanced symptom-driven system that evaluates your condition, ranks likely diagnoses, and
                delivers medicine, diet, and precaution recommendations with clinical-grade clarity.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { label: 'Conditions', value: '50+' },
                { label: 'Symptom features', value: '130+' },
                { label: 'Training samples', value: '2000+' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-gold">{label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/40">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Selected symptoms</p>
                <p className="mt-2 text-4xl font-semibold text-white">{selected.length}</p>
              </div>
              <ChevronRight className="h-10 w-10 text-emeraldlight" />
            </div>
            <SymptomSelector symptoms={symptoms} value={selected} onChange={setSelected} />
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={loading}
              aria-label={loading ? 'Analyzing symptoms, please wait' : 'Generate medicine recommendation based on selected symptoms'}
              className="mt-8 inline-flex h-16 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald to-gold px-8 text-base font-semibold text-ink shadow-2xl shadow-emerald/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Analyzing symptoms…' : 'Generate Recommendation'}
            </button>
          </div>
        </div>
      </section>

      {/* Loading skeletons */}
      {loading && (
        <section className="mt-10 space-y-6">
          <SkeletonLoader variant="card" />
          <div className="grid gap-6 md:grid-cols-2">
            <SkeletonLoader variant="medicine" count={3} />
            <SkeletonLoader variant="chart" />
          </div>
        </section>
      )}

      {/* Results */}
      {!loading && result && result.predicted_disease && (
        <section className="mt-10 space-y-10">
          <div className="no-print flex items-center justify-end">
            <PrintReport />
          </div>

          <DiagnosisCard result={result} />

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-black/20 print-report">
                <h3 className="text-sm uppercase tracking-[0.25em] text-gold">Medicines</h3>
                <div className="mt-6 grid gap-4">
                  {(result.medicines ?? []).map((medicine) => (
                    <MedicineCard key={medicine.name} medicine={medicine} />
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-black/20 print-report">
                <h3 className="text-sm uppercase tracking-[0.25em] text-gold">Precautions</h3>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-slate-300">
                  {(result.precautions ?? []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-black/20 print-report">
                <h3 className="text-sm uppercase tracking-[0.25em] text-gold">Diet Advice</h3>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-slate-300">
                  {result.diet.length
                    ? result.diet.map((item) => <li key={item}>{item}</li>)
                    : <li>Stay hydrated and consume light, balanced meals.</li>}
                </ul>
              </div>
              <ConfidenceChart confidence={result.confidence} top_3_with_scores={result.top_3_with_scores} />
            </div>
          </div>
        </section>
      )}

      {/* Error */}
      {!loading && error && (
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-rose-950/80 p-8 text-slate-200 shadow-xl shadow-black/20">
          <h2 className="text-2xl font-semibold text-white">Unable to generate recommendation</h2>
          <p className="mt-3 text-slate-300">Try again with a different symptom set or verify that the backend API is online.</p>
        </section>
      )}

      {/* Disclaimer */}
      <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-sm text-slate-300 shadow-inner shadow-black/20">
        <p className="font-semibold text-white">Disclaimer</p>
        <p className="mt-3">
          This project is a demo recommendation system and is not a substitute for professional medical advice. Always
          consult a qualified healthcare provider before starting any medication or treatment.
        </p>
      </section>
    </main>
  )
}
