import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />
      <main className="flex-1 space-y-24 pb-24 pt-16">
        <Hero />
        <Features />
        <Workflow />
        <Showcase />
        <Pricing />
        <FAQ />
        <div className="px-6">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
