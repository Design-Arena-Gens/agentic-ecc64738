export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">Sora 2 Studio</p>
          <p className="mt-1 text-xs text-white/40">
            Crafted for directors, agencies, and dreamers worldwide.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-white/50">
          <a className="hover:text-white/80 transition" href="#features">
            Features
          </a>
          <a className="hover:text-white/80 transition" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-white/80 transition" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white/80 transition" href="#faq">
            FAQ
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Sora 2 Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
