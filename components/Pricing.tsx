import { pricingTiers } from "@/lib/content";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28"
    >
      <div className="absolute -top-32 left-1/2 z-[-1] h-64 w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="flex flex-col gap-4 text-center">
        <span className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Pricing
        </span>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Start free. Scale seamlessly as your productions grow.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/70">
          Every plan includes unlimited projects, brand kits, and access to the
          latest Sora 2 model updates the moment they land.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`flex flex-col justify-between gap-8 rounded-3xl border ${
              tier.highlighted
                ? "border-indigo-400/40 bg-indigo-400/10 shadow-lg shadow-indigo-500/40"
                : "border-white/10 bg-white/[0.03]"
            } p-8`}
          >
            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                    Most popular
                  </span>
                )}
              </div>
              <p className="text-sm text-white/60">{tier.description}</p>
              <div className="flex items-baseline gap-1 font-display text-4xl text-white">
                {tier.price}
                <span className="text-sm font-normal text-white/60">
                  {tier.cadence}
                </span>
              </div>
              <ul className="space-y-3 text-sm text-white/70">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                tier.highlighted
                  ? "border-white/40 bg-white/90 text-slate-900 hover:bg-white"
                  : "border-white/20 text-white/80 hover:border-white/40 hover:text-white"
              }`}
            >
              {tier.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
