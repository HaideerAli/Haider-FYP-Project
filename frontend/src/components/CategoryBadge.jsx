const CATEGORY_COLORS = {
  Cardiology: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
  Neurology: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  Pulmonology: 'bg-sky-500/15 text-sky-400 border-sky-500/20',
  Endocrinology: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Dermatology: 'bg-pink-500/15 text-pink-400 border-pink-500/20',
  Ophthalmology: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  ENT: 'bg-teal-500/15 text-teal-400 border-teal-500/20',
  Nephrology: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  Urology: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
  Psychiatry: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  Rheumatology: 'bg-orange-500/15 text-orange-400 border-orange-500/20',
  Gynecology: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/20',
  Hematology: 'bg-red-500/15 text-red-400 border-red-500/20',
  'Infectious Disease': 'bg-lime-500/15 text-lime-400 border-lime-500/20',
  'Emergency Medicine': 'bg-rose-600/20 text-rose-300 border-rose-600/30',
  Gastroenterology: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
}

export default function CategoryBadge({ category, className = '' }) {
  if (!category) return null
  const colors = CATEGORY_COLORS[category] ?? 'bg-slate-500/15 text-slate-400 border-slate-500/20'
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors} ${className}`}>
      {category}
    </span>
  )
}
