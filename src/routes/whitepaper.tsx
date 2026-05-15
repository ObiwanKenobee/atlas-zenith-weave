import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SignupForm } from "@/components/SignupForm";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/whitepaper")({
  head: () => ({
    meta: [
      { title: "Whitepaper — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Download the Atlas Sanctum whitepaper: architectural pillars, planetary roadmap, and the Living Internet stack.",
      },
      { property: "og:title", content: "Atlas Sanctum Whitepaper" },
      {
        property: "og:description",
        content:
          "The architecture behind the Living Internet — mesh, community AI, and planetary resilience.",
      },
    ],
  }),
  component: WhitepaperPage,
});

function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />

      <section className="max-w-4xl mx-auto px-6 py-20 lg:py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">
          Document v0.1
        </p>
        <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
          Atlas Sanctum
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-200">
            Whitepaper
          </span>
        </h1>
        <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
          A blueprint for the Living Internet — civilization-scale infrastructure
          combining offline-first mesh networks, community-owned AI, and adaptive
          systems for planetary resilience.
        </p>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <div className="flex items-start gap-5">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 flex items-center justify-center shrink-0">
              <FileText className="text-black" size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Living Internet Whitepaper</h2>
              <p className="text-zinc-400 mt-1 text-sm">
                PDF · ~3 KB · English
              </p>
            </div>
          </div>

          <ul className="mt-8 space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-emerald-300">›</span>
              <span><strong className="text-white">Living Infrastructure</strong> — offline-first mesh and solar edge nodes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-300">›</span>
              <span><strong className="text-white">Community Intelligence</strong> — native-language voice & USSD AI.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-300">›</span>
              <span><strong className="text-white">Planetary Resilience</strong> — humanitarian coordination at scale.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-300">›</span>
              <span><strong className="text-white">Roadmap</strong> — from community nodes to civilization networks.</span>
            </li>
          </ul>

          <a
            href="/atlas-sanctum-whitepaper.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-400 text-black font-semibold hover:scale-105 transition-transform"
          >
            <Download size={18} /> Download Whitepaper (PDF)
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <SignupForm />
        </div>
      </footer>
    </div>
  );
}
