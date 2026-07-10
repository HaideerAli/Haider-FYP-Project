import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const pipeline = [
  { step: '01', title: 'Data Collection', desc: '50 diseases × 40 synthetic samples each, generated from the clinical knowledge base.' },
  { step: '02', title: 'Preprocessing', desc: 'MultiLabelBinarizer encodes symptom lists into binary feature vectors.' },
  { step: '03', title: 'SMOTE Balancing', desc: 'Synthetic Minority Over-sampling ensures balanced class distribution.' },
  { step: '04', title: 'Model Training', desc: 'RandomForestClassifier + XGBClassifier trained with GridSearchCV hyperparameter tuning.' },
  { step: '05', title: 'Best Model Selection', desc: 'Models compared by accuracy and F1-score; the top performer is saved to disk.' },
  { step: '06', title: 'Rule-Based Fallback', desc: 'Jaccard similarity scoring ensures predictions even if the ML model is unavailable.' },
]

const techStack = [
  { name: 'FastAPI', color: 'text-emeraldlight', desc: 'Python REST API framework' },
  { name: 'React 18', color: 'text-sky-400', desc: 'Frontend UI library' },
  { name: 'Tailwind CSS', color: 'text-cyan-400', desc: 'Utility-first styling' },
  { name: 'scikit-learn', color: 'text-amber-400', desc: 'ML pipeline & RandomForest' },
  { name: 'XGBoost', color: 'text-orange-400', desc: 'Gradient boosted classifier' },
  { name: 'Docker', color: 'text-blue-400', desc: 'Containerized deployment' },
  { name: 'Recharts', color: 'text-violet-400', desc: 'Data visualizations' },
  { name: 'Framer Motion', color: 'text-pink-400', desc: 'Smooth animations' },
]

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <motion.div {...fade()} className="mb-14 max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-emeraldlight">
          About MediRec
        </div>
        <h1 className="text-5xl font-semibold text-white">Project Overview</h1>
        <p className="mt-5 text-lg leading-8 text-slate-400">
          MediRec is a Final Year Project (FYP) demonstrating full-stack development, machine learning engineering, and clinical knowledge design — all integrated into a production-ready medical recommendation platform.
        </p>
      </motion.div>

      {/* ML Pipeline */}
      <section className="mb-16">
        <motion.h2 {...fade()} className="mb-8 text-3xl font-semibold text-white">
          ML Pipeline
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.map(({ step, title, desc }, i) => (
            <motion.div
              key={step}
              {...fade(i * 0.06)}
              className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6"
            >
              <div className="mb-4 text-4xl font-bold text-white/5">{step}</div>
              <div className="mb-3 flex items-center gap-2">
                {i < pipeline.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-700" />
                )}
                <span className="rounded-full bg-emerald/10 px-3 py-1 text-xs font-medium text-emeraldlight">
                  Step {step}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-16">
        <motion.h2 {...fade()} className="mb-8 text-3xl font-semibold text-white">
          Prediction Methodology
        </motion.h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...fade(0.05)} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-3 py-1 text-xs font-medium text-emeraldlight">
                Primary Engine
              </span>
              <span className="rounded-full bg-emerald/20 px-2.5 py-0.5 text-xs font-semibold text-emeraldlight">
                XGBoost: 99% accuracy
              </span>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400">
                RandomForest: 98.75%
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Machine Learning Classifier</h3>
            <p className="text-sm leading-7 text-slate-400">
              A RandomForestClassifier (200 estimators) and XGBClassifier are trained on 1,600 SMOTE-balanced training samples (clean 400-sample test set) across 50 diseases and 183 symptom features. GridSearchCV with 3-fold cross-validation selects the best hyperparameters. The top-performing model (XGBoost, 99% test accuracy) is serialized to disk and loaded at API startup. Predictions produce class probabilities for the top 3 differential diagnoses.
            </p>
          </motion.div>
          <motion.div {...fade(0.1)} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                Fallback Engine
              </span>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400">
                Always available
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">Rule-Based Jaccard Scoring</h3>
            <p className="text-sm leading-7 text-slate-400">
              When the ML model is unavailable, a rule-based system computes Jaccard similarity between the submitted symptom set and each disease profile in the knowledge base. The score is the ratio of matched symptoms to total disease symptoms. Top-3 candidates are returned with confidence percentages, ensuring zero-downtime predictions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <motion.h2 {...fade()} className="mb-8 text-3xl font-semibold text-white">
          Tech Stack
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ name, color, desc }, i) => (
            <motion.div
              key={name}
              {...fade(i * 0.05)}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 hover:border-white/20 transition-colors"
            >
              <p className={`text-lg font-semibold ${color}`}>{name}</p>
              <p className="mt-1 text-xs text-slate-500">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Knowledge Base Stats */}
      <section className="mb-16">
        <motion.h2 {...fade()} className="mb-8 text-3xl font-semibold text-white">
          Knowledge Base
        </motion.h2>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Diseases', value: '50+' },
            { label: 'Symptom Features', value: '130+' },
            { label: 'Training Samples', value: '2,000+' },
            { label: 'Medical Categories', value: '15+' },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              {...fade()}
              className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-center"
            >
              <p className="text-4xl font-semibold text-white">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <motion.section {...fade()} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-sm text-slate-400">
        <p className="font-semibold text-slate-300 mb-2">Academic Disclaimer</p>
        <p>
          This system is developed as an academic Final Year Project demonstration. It is not a licensed medical device and has not been clinically validated. The knowledge base was curated from publicly available medical reference materials for educational purposes only. Do not make medical decisions based solely on this system's output.
        </p>
      </motion.section>
    </main>
  )
}
