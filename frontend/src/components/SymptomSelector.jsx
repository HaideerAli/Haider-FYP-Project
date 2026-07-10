import React from 'react'
import Select from 'react-select'

const SYMPTOM_GROUPS = {
  'Respiratory': ['cough', 'shortness of breath', 'wheezing', 'chest tightness', 'mucus production', 'yellow sputum', 'blood in sputum', 'runny nose', 'sneezing', 'congestion', 'post-nasal drip', 'persistent cough'],
  'Neurological': ['severe headache', 'headache', 'visual aura', 'sensitivity to light', 'sensitivity to light and sound', 'dizziness', 'confusion', 'seizures', 'tremors', 'stiffness', 'slow movement', 'balance problems', 'numbness or tingling', 'speech difficulty', 'sudden facial drooping', 'arm weakness', 'vision loss', 'staring spells', 'jerking movements', 'loss of consciousness', 'fear or anxiety before seizure', 'temporary confusion', 'writing changes', 'speech changes', 'cognitive problems', 'vision problems'],
  'Gastrointestinal': ['nausea', 'vomiting', 'diarrhea', 'stomach pain', 'loss of appetite', 'bloating', 'abdominal pain'],
  'Cardiovascular': ['chest pain', 'chest pain or pressure', 'crushing chest pain', 'pain radiating to arm', 'irregular heartbeat', 'rapid heartbeat', 'palpitations', 'swelling in legs', 'low blood pressure'],
  'Musculoskeletal': ['joint pain', 'joint pain and swelling', 'muscle ache', 'morning stiffness', 'swelling', 'back pain', 'reduced range of motion', 'grinding sensation', 'sudden severe joint pain', 'pelvic pain'],
  'Dermatological': ['rash', 'itching', 'dry skin', 'skin redness', 'scaly patches', 'skin inflammation', 'skin thickening', 'weeping blisters', 'pimples', 'blackheads', 'whiteheads', 'oily skin', 'skin scarring', 'facial redness', 'nail changes', 'dry cracked skin', 'warmth', 'tenderness', 'red streaks'],
  'Ocular': ['red eyes', 'eye discharge', 'itchy eyes', 'watery eyes', 'eye pain', 'blurred vision', 'halos around lights', 'gradual vision loss', 'seeing halos', 'faded colors', 'poor night vision', 'double vision'],
  'Systemic / General': ['fever', 'high fever', 'fatigue', 'weakness', 'weight loss', 'night sweats', 'chills', 'sweating', 'extreme fatigue', 'unintended weight loss', 'weight gain', 'cold intolerance', 'temperature intolerance', 'hair loss', 'mood changes'],
  'Urological': ['dysuria', 'frequent urination', 'cloudy urine', 'blood in urine', 'lower abdominal pain', 'decreased urination', 'pain during urination', 'weak urine stream', 'difficulty starting urination', 'incomplete bladder emptying', 'nocturia', 'urinary urgency', 'severe flank pain'],
  'Mental Health': ['excessive worry', 'nervousness', 'trembling', 'difficulty concentrating', 'persistent sadness', 'loss of interest', 'sleep changes', 'guilt', 'suicidal thoughts', 'anxiety'],
  'ENT': ['sore throat', 'ear pain', 'hearing difficulty', 'ear drainage', 'difficulty swallowing', 'swollen tonsils', 'bad breath', 'facial pain', 'nasal congestion'],
  'Reproductive / Hormonal': ['irregular periods', 'excess hair growth', 'acne', 'painful periods', 'pain during intercourse', 'heavy menstrual bleeding', 'infertility', 'difficulty conceiving', 'fruity breath odor'],
}

function buildGroupedOptions(symptoms) {
  const assigned = new Set()
  const groups = []

  for (const [group, keywords] of Object.entries(SYMPTOM_GROUPS)) {
    const members = symptoms.filter((s) => {
      const sl = s.toLowerCase()
      return keywords.some((kw) => sl === kw || sl.includes(kw) || kw.includes(sl))
    })
    if (members.length > 0) {
      members.forEach((m) => assigned.add(m))
      groups.push({ label: group, options: members.map((m) => ({ value: m, label: m })) })
    }
  }

  const others = symptoms.filter((s) => !assigned.has(s))
  if (others.length > 0) {
    groups.push({ label: 'Other', options: others.map((m) => ({ value: m, label: m })) })
  }

  return groups
}

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#11212b',
    borderColor: '#2d4d4a',
    color: '#e2ebf4',
    minHeight: '44px',
  }),
  menu: (styles) => ({ ...styles, backgroundColor: '#0a1320', borderColor: '#2d4d4a' }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? '#0d7a5f' : isFocused ? '#143439' : '#0a1320',
    color: '#e2ebf4',
  }),
  multiValue: (styles) => ({ ...styles, backgroundColor: '#0d7a5f' }),
  multiValueLabel: (styles) => ({ ...styles, color: '#f8f6eb' }),
  groupHeading: (styles) => ({
    ...styles,
    color: '#C9A84C',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    paddingTop: '8px',
  }),
}

export default function SymptomSelector({ symptoms, value, onChange }) {
  const groupedOptions = buildGroupedOptions(symptoms)

  return (
    <div>
      <label className="mb-2 block text-sm uppercase tracking-[0.16em] text-gold">Select symptoms</label>
      <Select
        styles={customStyles}
        options={groupedOptions}
        value={value}
        onChange={onChange}
        isMulti
        placeholder={symptoms.length === 0 ? 'Loading symptoms…' : 'Type and select symptoms…'}
        className="text-white"
        classNamePrefix="medirec"
      />
    </div>
  )
}
