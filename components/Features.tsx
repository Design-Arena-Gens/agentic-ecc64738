import { features } from "@/lib/content";

export default function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
    >
      <div className="absolute inset-x-10 -top-20 -z-10 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300">
            Built for visionaries
          </span>
          <h2 className="max-w-lg font-display text-3xl text-white sm:text-4xl">
            Sora 2 gives you the tools to direct, iterate, and ship cinematic
            stories without limits.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/70">
            Combine precision camera controls with adaptive lighting, physics,
            and motion understanding. Whether you&apos;re storyboarding a short
            film or producing social content, Sora 2 keeps up with your ideas.
          </p>
        </div>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-white/20 hover:bg-white/[0.08]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-indigo-300/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200/80">
                {feature.highlight}
              </span>
              <h3 className="font-display text-2xl text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
