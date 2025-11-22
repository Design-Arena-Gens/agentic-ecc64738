export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-sora-radial" />
      <div className="pointer-events-none absolute inset-x-0 top-20 h-[32rem] bg-sora-linear blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center md:gap-12 md:pb-32 md:pt-28">
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-wide text-white/80">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Now launching the free Creator tier
          </div>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Bring your stories to life with Sora 2&apos;s cinematic AI video
            engine.
          </h1>
          <p className="text-lg leading-relaxed text-white/70">
            Generate production-ready footage from simple prompts, collaborate
            with your team in real-time, and refine every frame with intuitive
            controls — all in your browser and free to start.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/40 transition-transform hover:-translate-y-0.5"
              href="#demo"
            >
              Launch free workspace
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white/80 transition-colors hover:border-white/40 hover:text-white"
              href="#workflow"
            >
              Watch how it works
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-6 pt-6 text-sm text-white/60 sm:grid-cols-3">
            <div>
              <dt className="font-display text-3xl text-white">1.8M+</dt>
              <dd>clips generated in the last 30 days</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-white">45s</dt>
              <dd>average render time per prompt</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-white">98%</dt>
              <dd>creator satisfaction score</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex flex-1 justify-center md:justify-end">
          <div className="relative h-[24rem] w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur">
            <div className="absolute -right-16 top-8 hidden h-32 w-32 rounded-full bg-blue-500/40 blur-3xl md:inline" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <span className="text-xs uppercase tracking-wide text-white/60">
                    Prompt preview
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                    45 sec · 4K ready
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                  <p className="text-base font-medium text-white">
                    &ldquo;Close-up of a dancer performing in zero gravity,
                    cosmic dust swirling around in vibrant colors, cinematic
                    lighting.&rdquo;
                  </p>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    Render completed · preview generated at 4K
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-white/60">
                  <span>Auto camera tracking</span>
                  <span>Depth-aware VFX</span>
                  <span>Temporal super-res</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
