export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-lg font-bold">
            S2
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg">Sora 2 Studio</span>
            <span className="text-xs text-white/60">
              Cinematic AI Video Engine
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-white/80 md:flex">
          <a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="hover:text-white transition-colors" href="#workflow">
            Workflow
          </a>
          <a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/20 px-4 py-2 text-white/80 transition-all hover:border-white/40 hover:text-white md:inline-flex"
            href="#demo"
          >
            Launch Studio
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-4 py-2 font-medium text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-0.5"
            href="#pricing"
          >
            Try it free
          </a>
        </div>
      </div>
    </header>
  );
}
