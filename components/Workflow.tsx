import { workflowSteps } from "@/lib/content";

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-24 sm:px-12 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_65%)]" />
      <div className="relative space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <span className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Workflow
          </span>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            From idea to finished video in three intuitive steps.
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70">
            Sora 2 combines prompt engineering assistance with adaptive edits,
            so you stay focused on creative direction instead of technical
            hurdles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-12 top-10 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-display text-lg text-white">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div
          id="demo"
          className="relative flex flex-col gap-6 rounded-3xl border border-white/15 bg-slate-950/60 p-6 text-left sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl text-white">
                Instant storyboard preview
              </h3>
              <p className="text-sm text-white/60">
                Drag and drop reference images to generate matched camera moves
                and lighting cues.
              </p>
            </div>
            <a
              href="https://agentic-ecc64738.vercel.app"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-white/40"
            >
              Open live workspace
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-4 text-sm text-white/70">
              <p className="font-medium text-white/80">Prompt Assist</p>
              <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-black/40 p-4 text-xs leading-6 text-emerald-100">
                {`Scene: Interior · dusk blue hour
Shot: Slow dolly, 35mm prime
Subject: Young composer at a grand piano, warm lamp glow
Detail: Dust particles drifting, shallow depth of field`}
              </pre>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 p-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-wide text-white/50">
                  Real-time approval feed
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    Director approved color palette tweak
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
                    VFX artist suggested adding volumetric fog
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-300" />
                    Client requested alternative ending shot
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
