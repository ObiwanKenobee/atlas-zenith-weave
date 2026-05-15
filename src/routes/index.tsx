import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SignupForm } from "@/components/SignupForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas Sanctum — Building The Living Internet" },
      {
        name: "description",
        content:
          "Civilization-scale infrastructure for decentralized intelligence, resilient communities, and human flourishing across the Global South.",
      },
      { property: "og:title", content: "Atlas Sanctum — Building The Living Internet" },
      {
        property: "og:description",
        content:
          "Planetary systems architecture: mesh networks, community AI, and adaptive infrastructure.",
      },
    ],
  }),
  component: AtlasSanctumPrototype,
});

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function AtlasSanctumPrototype() {
  const navigate = useNavigate();

  const pillars = [
    {
      title: "Living Infrastructure",
      description:
        "Offline-first mesh systems designed for resilient communities, decentralized intelligence, and human-centered coordination.",
    },
    {
      title: "Community Intelligence",
      description:
        "Localized AI systems operating in native languages through voice, USSD, edge computing, and cooperative ownership.",
    },
    {
      title: "Planetary Resilience",
      description:
        "A civilization-scale framework for sustainability, humanitarian coordination, distributed education, and adaptive economies.",
    },
  ];

  const roadmap = [
    "Seed Network Communities",
    "Mesh Connectivity Infrastructure",
    "Voice & AI Accessibility",
    "Regional Intelligence Federations",
    "Community-Owned AI Economies",
    "Planetary Coordination Systems",
  ];

  const systems = [
    "Offline Mesh Networks",
    "Solar Edge Nodes",
    "AI Knowledge Systems",
    "Voice & USSD Intelligence",
    "Distributed Governance",
    "Humanitarian Infrastructure",
    "Community Cloud Systems",
    "Educational Intelligence Networks",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <SiteNav />

      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-yellow-500/10" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 mb-8">
                Atlas Sanctum • Planetary Systems Architecture
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Building The
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-200">
                  Living Internet
                </span>
              </h1>
              <p className="mt-8 text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                A civilization-scale infrastructure platform designed for
                decentralized intelligence, resilient communities, and human
                flourishing across the Global South.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToId("vision")}
                  className="px-6 py-3 rounded-2xl bg-emerald-400 text-black font-semibold hover:scale-105 transition-transform"
                >
                  Explore The Vision
                </button>
                <button
                  onClick={() => scrollToId("systems")}
                  className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/5 transition-colors"
                >
                  View Architecture
                </button>
              </div>
            </div>
            <div id="systems" className="relative scroll-mt-20">
              <div className="absolute inset-0 blur-3xl bg-cyan-400/20 rounded-full" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                      Systems Overview
                    </p>
                    <h2 className="text-2xl font-bold mt-2">
                      Civilization Infrastructure Stack
                    </h2>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400" />
                </div>
                <div className="space-y-4">
                  {systems.map((system, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4"
                    >
                      <span className="text-zinc-200">{system}</span>
                      <div className="h-3 w-3 rounded-full bg-emerald-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-4">
            Core Philosophy
          </p>
          <h2 className="text-4xl lg:text-5xl font-black leading-tight">
            Designing Infrastructure
            <span className="block text-zinc-400">
              For Humanity & Eternity
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition-colors"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-emerald-300/40 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="border-y border-white/10 bg-gradient-to-b from-zinc-950 to-black scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
                Planetary Roadmap
              </p>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">
                From Community Nodes
                <span className="block text-zinc-400">
                  To Civilization Networks
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Atlas Sanctum is architecting an adaptive intelligence layer
                capable of connecting underserved communities through
                decentralized infrastructure, AI coordination, and resilient
                systems design.
              </p>
            </div>
            <div className="space-y-5">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 hover:border-emerald-300/30 transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-300 to-cyan-300 text-black flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-emerald-200 transition-colors">
                        {item}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-yellow-200/10 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-200 mb-4">
              Atlas Sanctum Mission
            </p>
            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              Building Adaptive Systems
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200">
                For The Future Of Humanity
              </span>
            </h2>
            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-3xl">
              We envision a future where every community can access knowledge,
              intelligence, coordination, education, healthcare, and economic
              opportunity through resilient decentralized infrastructure.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
              >
                Join The Mission
              </button>
              <Link
                to="/whitepaper"
                className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition-colors"
              >
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer id="signup" className="border-t border-white/10 py-16 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-black">Atlas Sanctum</h3>
            <p className="text-zinc-500 mt-2 max-w-md">
              Chief Architects of Planetary Systems & Distributed Intelligence.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-400 text-sm mt-8">
              <button onClick={() => scrollToId("vision")} className="hover:text-emerald-300">Vision</button>
              <button onClick={() => scrollToId("systems")} className="hover:text-emerald-300">Systems</button>
              <button onClick={() => scrollToId("roadmap")} className="hover:text-emerald-300">Roadmap</button>
              <button onClick={() => scrollToId("mission")} className="hover:text-emerald-300">Mission</button>
              <button onClick={() => navigate({ to: "/whitepaper" })} className="hover:text-emerald-300">Whitepaper</button>
            </div>
          </div>
          <div className="flex lg:justify-end">
            <SignupForm />
          </div>
        </div>
      </footer>
    </div>
  );
}
