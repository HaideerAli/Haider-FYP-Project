import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'

const BAR_COLORS = ['#0D7A5F', '#C9A84C', '#64748b']

function truncate(str, n = 14) {
  return str && str.length > n ? str.slice(0, n) + '…' : str
}

export default function ConfidenceChart({ confidence, top_3_with_scores }) {
  const radialData = [{ name: 'Confidence', value: confidence, fill: '#0D7A5F' }]

  const hasScores = Array.isArray(top_3_with_scores) && top_3_with_scores.length > 0
  const barData = hasScores
    ? top_3_with_scores.map((item) => ({ name: truncate(item.disease, 14), confidence: item.confidence }))
    : []

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 h-64">
      <div className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">Confidence Analysis</div>
      <div className={`grid h-[calc(100%-2rem)] ${hasScores ? 'grid-cols-2 gap-3' : 'grid-cols-1'}`}>
        {/* Radial gauge */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="55%" outerRadius="90%" data={radialData} startAngle={90} endAngle={-270}>
            <RadialBar minAngle={15} clockWise dataKey="value" cornerRadius={20} />
            <Legend content={() => <div className="text-center text-white text-2xl font-semibold">{confidence}%</div>} />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Comparison bars */}
        {hasScores && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 32, left: 0, bottom: 0 }}>
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 9 }} axisLine={false} tickLine={false} width={60} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 8, color: '#f1f5f9', fontSize: 11 }}
                formatter={(v) => [`${v}%`, 'Confidence']}
              />
              <Bar dataKey="confidence" radius={[0, 4, 4, 0]} maxBarSize={18}>
                {barData.map((_, i) => <Cell key={i} fill={BAR_COLORS[i] ?? '#64748b'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}
