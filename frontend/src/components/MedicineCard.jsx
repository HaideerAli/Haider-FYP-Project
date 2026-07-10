import { Pill } from 'lucide-react'

const TYPE_COLORS = {
  Antibiotic: 'bg-sky-500/15 text-sky-400',
  Antiviral: 'bg-violet-500/15 text-violet-400',
  Antifungal: 'bg-amber-500/15 text-amber-400',
  Antimalarial: 'bg-lime-500/15 text-lime-400',
  Antituberculous: 'bg-orange-500/15 text-orange-400',
  Antidiabetic: 'bg-cyan-500/15 text-cyan-400',
  Insulin: 'bg-blue-500/15 text-blue-400',
  NSAID: 'bg-rose-500/15 text-rose-400',
  'Analgesic/Antipyretic': 'bg-yellow-500/15 text-yellow-400',
  Analgesic: 'bg-yellow-500/15 text-yellow-400',
  Corticosteroid: 'bg-purple-500/15 text-purple-400',
  Antihistamine: 'bg-teal-500/15 text-teal-400',
  Bronchodilator: 'bg-sky-500/15 text-sky-400',
  Statin: 'bg-emerald-500/15 text-emerald-400',
  SSRI: 'bg-pink-500/15 text-pink-400',
  DMARD: 'bg-fuchsia-500/15 text-fuchsia-400',
  Triptan: 'bg-indigo-500/15 text-indigo-400',
  'ACE inhibitor': 'bg-green-500/15 text-green-400',
  Vasodilator: 'bg-red-500/15 text-red-400',
  Thrombolytic: 'bg-rose-600/20 text-rose-300',
  Anticonvulsant: 'bg-violet-600/20 text-violet-300',
  Dopaminergic: 'bg-amber-600/20 text-amber-300',
  Antiplatelet: 'bg-orange-500/15 text-orange-400',
  Biologic: 'bg-fuchsia-600/20 text-fuchsia-300',
}

export default function MedicineCard({ medicine }) {
  const typeColor = TYPE_COLORS[medicine.type] ?? 'bg-goldlight/15 text-gold'

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-black/20 transition-colors hover:border-white/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800/80">
            <Pill className="h-4 w-4 text-slate-400" />
          </div>
          <h3 className="text-sm font-semibold leading-snug text-white">{medicine.name}</h3>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${typeColor}`}>
          {medicine.type}
        </span>
      </div>
      <p className="mt-3 pl-12 text-xs leading-6 text-slate-400">{medicine.dosage || 'Dosage as directed by physician'}</p>
    </div>
  )
}
