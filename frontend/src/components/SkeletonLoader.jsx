function SkeletonBlock({ className = '' }) {
  return <div className={`animate-pulse rounded-xl bg-slate-800/60 ${className}`} />
}

export default function SkeletonLoader({ variant = 'card', count = 1 }) {
  if (variant === 'medicine') {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <SkeletonBlock className="h-5 w-36" />
              <SkeletonBlock className="h-6 w-20 rounded-full" />
            </div>
            <SkeletonBlock className="mt-3 h-4 w-64" />
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'chart') {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
        <SkeletonBlock className="mb-4 h-4 w-24" />
        <SkeletonBlock className="h-40 w-full rounded-2xl" />
      </div>
    )
  }

  // Default 'card' variant
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1 space-y-3">
          <SkeletonBlock className="h-3 w-20" />
          <SkeletonBlock className="h-9 w-64" />
          <SkeletonBlock className="h-4 w-full max-w-lg" />
          <SkeletonBlock className="h-4 w-3/4 max-w-md" />
        </div>
        <SkeletonBlock className="h-20 w-28 rounded-3xl" />
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <SkeletonBlock className="h-24 rounded-3xl" />
        <SkeletonBlock className="h-24 rounded-3xl" />
        <SkeletonBlock className="h-24 rounded-3xl" />
      </div>
    </div>
  )
}
