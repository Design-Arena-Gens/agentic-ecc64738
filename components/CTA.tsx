export default function CTA() {
  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-indigo-400/30 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/20 p-10 text-center shadow-2xl shadow-indigo-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_70%)]" />
      <div className="relative space-y-6">
        <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
          Ready to create?
        </span>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Launch your free Sora 2 workspace today
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80">
          Sign in with your email, invite collaborators, and start generating
          cinematic footage instantly. No credit card required.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            href="https://agentic-ecc64738.vercel.app"
          >
            Enter the studio
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white hover:text-white"
            href="#features"
          >
            Explore capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
