import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-white/[0.04] px-6 py-20 sm:px-12 sm:py-24"
    >
      <div className="flex flex-col gap-4 text-center">
        <span className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
          FAQ
        </span>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Everything you need to know
        </h2>
      </div>
      <dl className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-white/10 bg-black/30 p-6 text-left transition hover:border-white/20"
          >
            <dt className="font-display text-xl text-white">{faq.question}</dt>
            <dd className="mt-3 text-sm leading-relaxed text-white/70">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
