import { showcaseReels } from "@/lib/content";

export default function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div className="flex flex-col gap-4 text-center">
        <span className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
          Showcase
        </span>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Featured reels crafted with Sora 2
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70">
          Explore how creators blend references, prompt context, and cinematic
          controls to ship polished visuals in minutes.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {showcaseReels.map((reel) => (
          <article
            key={reel.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/60 via-purple-500/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.6),_transparent_65%)] opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center font-display text-2xl text-white/80">
                {reel.title}
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                {reel.duration}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 p-6">
              <p className="text-sm leading-relaxed text-white/70">
                {reel.prompt}
              </p>
              <button className="w-full rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white">
                Play prompt preview
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
