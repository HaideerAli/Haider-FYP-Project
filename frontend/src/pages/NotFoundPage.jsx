import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-8xl font-bold text-white/5">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">The page you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald/20 hover:brightness-110 transition"
        >
          Back to Home
        </button>
      </motion.div>
    </main>
  )
}
