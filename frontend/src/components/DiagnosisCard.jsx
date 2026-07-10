import { motion } from 'framer-motion'
import { Stethoscope } from 'lucide-react'
import EmergencyBanner from './EmergencyBanner'
import CategoryBadge from './CategoryBadge'

const CONFIDENCE_STYLE = {
  critical: 'bg-rose-500/15 text-rose-400',
  high: 'bg-amber-500/15 text-amber-400',
  medium: 'bg-yellow-500/15 text-yellow-400',
  low: 'bg-emerald/10 text-emeraldlight',
}

export default function DiagnosisCard({ result }) {
  if (!result || !result.predicted_disease) return null

  const confStyle = CONFIDENCE_STYLE[result.emergency_level] ?? 'bg-emerald/10 text-emeraldlight'

  return (
    <div>
      <EmergencyBanner emergency_level={result.emergency_level} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-black/40 print-report"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-sm uppercase tracking-[0.3em] text-gold">Diagnosis</div>
              <CategoryBadge category={result.category} />
              {result.icd_code && (
                <span className="rounded border border-slate-700 px-2 py-0.5 font-mono text-xs text-slate-500">
                  ICD: {result.icd_code}
                </span>
              )}
            </div>
            <h2 className="mt-3 text-4xl font-semibold text-white">{result.predicted_disease}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              {result.description || 'Detailed condition insights from the model and medical knowledge base.'}
            </p>
          </div>
          <div className={`shrink-0 rounded-3xl px-5 py-3 text-center font-semibold ${confStyle}`}>
            <div className="text-xs uppercase tracking-[0.32em] text-slate-400">Confidence</div>
            <div className="mt-2 text-4xl">{result.confidence}%</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Model used */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="text-xs uppercase tracking-[0.32em] text-gold">Model</div>
            <p className="mt-3 text-lg font-semibold text-white">{result.model_name || 'Rule-based'}</p>
          </div>

          {/* Matched symptoms */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="text-xs uppercase tracking-[0.32em] text-gold">Matched Symptoms</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.matched_symptoms && result.matched_symptoms.length > 0 ? (
                result.matched_symptoms.map((item) => (
                  <span key={item} className="rounded-full bg-emerald/10 px-2.5 py-1 text-xs text-emeraldlight">
                    {item}
                  </span>
                ))
              ) : (
                <span className="text-sm text-slate-400">No exact match found.</span>
              )}
            </div>
          </div>

          {/* Specialist — always rendered */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="text-xs uppercase tracking-[0.32em] text-gold">Recommended Specialist</div>
            {result.specialist ? (
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald/10">
                  <Stethoscope className="h-5 w-5 text-emeraldlight" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{result.specialist}</p>
                  <p className="text-xs text-slate-400">Book an appointment for evaluation</p>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-500">Consult your general practitioner for a referral.</p>
            )}
          </div>

          {/* Risk factors */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="text-xs uppercase tracking-[0.32em] text-gold">Risk Factors</div>
            <ul className="mt-3 space-y-1">
              {result.risk_factors && result.risk_factors.length > 0 ? (
                result.risk_factors.slice(0, 4).map((rf) => (
                  <li key={rf} className="text-xs text-slate-400">• {rf}</li>
                ))
              ) : (
                <li className="text-xs text-slate-500">No specific risk factors listed.</li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
