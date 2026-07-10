import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Clock, ChevronRight, ShieldAlert, Brain } from 'lucide-react'

function useCountUp(target, duration = 1500, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, active])
  return count
}

function StatCard({ value, suffix = '', label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCountUp(value, 1200, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-center"
    >
      <p className="text-5xl font-semibold text-white">
        {count}{suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold">{label}</p>
    </motion.div>
  )
}

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Diagnosis',
    desc: 'Dual-engine intelligence combining a trained ML classifier and a rule-based Jaccard scoring fallback for robust predictions.',
  },
  {
    icon: ShieldAlert,
    title: 'Emergency Detection',
    desc: 'Automatically flags critical, high-risk, and urgent conditions so you know when immediate care is essential.',
  },
  {
    icon: BookOpen,
    title: 'Disease Catalog',
    desc: 'Browse 50+ conditions with ICD codes, specialist recommendations, symptoms, medicines, and diet advice.',
  },
  {
    icon: Clock,
    title: 'Diagnosis History',
    desc: 'Your last 10 diagnoses are saved locally so you can review previous recommendations anytime.',
  },
]

const steps = [
  { number: '01', title: 'Select Symptoms', desc: 'Choose from 130+ categorized symptoms using our intelligent multi-select interface.' },
  { number: '02', title: 'AI Analysis', desc: 'Our system runs both a trained ML model and a rule-based scoring engine for maximum accuracy.' },
  { number: '03', title: 'Get Recommendations', desc: 'Receive a detailed report with diagnosis, medicines, precautions, diet advice, and specialist guidance.' },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 py-20 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/5 blur-[120px]" />
          <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald/20 bg-emerald/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-emeraldlight">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emeraldlight" />
            Advanced Medical AI · Final Year Project
          </div>

          <h1 className="mb-6 text-6xl font-semibold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Smart{' '}
            <span className="bg-gradient-to-r from-emeraldlight to-gold bg-clip-text text-transparent">
              Medicine
            </span>
            <br />Recommendations
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            Select your symptoms and receive AI-powered disease predictions with detailed medicine, diet, and precaution guidance — backed by a clinical knowledge base of 50+ conditions.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate('/diagnose')}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald/25 transition hover:brightness-110"
            >
              Start Diagnosis
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/diseases')}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-8 py-4 text-base font-medium text-gold transition hover:border-gold/50 hover:bg-gold/10"
            >
              Browse Diseases
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard value={50} suffix="+" label="Conditions Covered" delay={0} />
          <StatCard value={130} suffix="+" label="Symptom Features" delay={0.1} />
          <StatCard value={2000} suffix="+" label="Training Samples" delay={0.2} />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white">Why MediRec?</h2>
          <p className="mt-4 text-slate-400">Built for accuracy, safety, and clinical clarity</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-slate-950/60 p-7 hover:border-emerald/20 hover:bg-slate-950/80 transition-colors"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald/10">
                <Icon className="h-5 w-5 text-emeraldlight" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white">How It Works</h2>
          <p className="mt-4 text-slate-400">Three steps from symptoms to clinical guidance</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-slate-950/60 p-8"
            >
              <div className="mb-5 text-5xl font-bold text-white/5">{number}</div>
              <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 sm:block">
                  <ChevronRight className="h-6 w-6 text-slate-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/diagnose')}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emeraldlight px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald/25 transition hover:brightness-110"
          >
            Try It Now
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-sm text-slate-400">
          <span className="font-semibold text-slate-300">Medical Disclaimer: </span>
          MediRec is an academic demonstration system. It is not a licensed medical device and should not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.
        </div>
      </section>
    </div>
  )
}
