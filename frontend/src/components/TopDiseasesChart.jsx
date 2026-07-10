import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'

const BAR_COLORS = ['#0D7A5F', '#C9A84C', '#64748b']

function truncate(str, n = 16) {
  return str && str.length > n ? str.slice(0, n) + '…' : str
}

export default function TopDiseasesChart({ top_3_with_scores }) {
  if (!top_3_with_scores || top_3_with_scores.length === 0) return null

  const data = top_3_with_scores.map((item) => ({
    name: truncate(item.disease, 18),
    confidence: item.confidence,
  }))

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
      <div className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">Top Differential Diagnoses</div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            tickFormatter={(v) => `${v}%`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: '#cbd5e1', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={110}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#f1f5f9' }}
            formatter={(value) => [`${value}%`, 'Confidence']}
          />
          <Bar dataKey="confidence" radius={[0, 6, 6, 0]} maxBarSize={28}>
            {data.map((_, index) => (
              <Cell key={index} fill={BAR_COLORS[index] ?? '#64748b'} />
            ))}
            <LabelList dataKey="confidence" position="right" formatter={(v) => `${v}%`} style={{ fill: '#94a3b8', fontSize: 11 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
