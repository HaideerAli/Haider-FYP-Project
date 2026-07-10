import { Printer } from 'lucide-react'

export default function PrintReport() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:text-white"
    >
      <Printer className="h-4 w-4" />
      Print Report
    </button>
  )
}
