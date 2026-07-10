import { Stethoscope } from 'lucide-react'

export default function SpecialistCard({ specialist }) {
  if (!specialist) return null

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
      <div className="text-xs uppercase tracking-[0.32em] text-gold">Recommended Specialist</div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald/10">
          <Stethoscope className="h-5 w-5 text-emeraldlight" />
        </div>
        <div>
          <p className="text-base font-semibold text-white">{specialist}</p>
          <p className="text-xs text-slate-400">Book an appointment for proper evaluation</p>
        </div>
      </div>
    </div>
  )
}
