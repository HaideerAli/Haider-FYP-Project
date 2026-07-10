import { motion } from 'framer-motion'
import { AlertTriangle, AlertCircle, Info } from 'lucide-react'

const LEVELS = {
  critical: {
    bg: 'bg-rose-950/90 border-rose-500',
    text: 'text-rose-200',
    icon: AlertTriangle,
    title: 'EMERGENCY — Seek Immediate Care',
    message: 'This condition is life-threatening. Call emergency services (115 / 1122) or go to the nearest emergency room immediately. Do NOT delay.',
    pulse: true,
  },
  high: {
    bg: 'bg-amber-950/80 border-amber-500',
    text: 'text-amber-200',
    icon: AlertCircle,
    title: 'Urgent Medical Attention Required',
    message: 'This condition requires prompt evaluation by a doctor within 24 hours. Please do not wait.',
    pulse: false,
  },
  medium: {
    bg: 'bg-yellow-950/60 border-yellow-600',
    text: 'text-yellow-200',
    icon: Info,
    title: 'Medical Consultation Advised',
    message: 'Consult a qualified healthcare provider within the next few days for proper evaluation and treatment.',
    pulse: false,
  },
}

export default function EmergencyBanner({ emergency_level }) {
  const level = LEVELS[emergency_level]
  if (!level) return null

  const Icon = level.icon

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.8 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.3 }}
      className={`mb-6 flex items-start gap-4 rounded-2xl border-2 p-5 ${level.bg} ${level.pulse ? 'animate-emergency-pulse' : ''}`}
    >
      <Icon className={`mt-0.5 h-6 w-6 shrink-0 ${level.text}`} />
      <div>
        <p className={`text-sm font-bold uppercase tracking-wide ${level.text}`}>{level.title}</p>
        <p className={`mt-1 text-sm leading-6 ${level.text} opacity-90`}>{level.message}</p>
      </div>
    </motion.div>
  )
}
