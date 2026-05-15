import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "vision", label: "Vision" },
  { id: "systems", label: "Systems" },
  { id: "roadmap", label: "Roadmap" },
  { id: "mission", label: "Mission" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  const goToSection = (id: string) => {
    setOpen(false);
    if (onHome) {
      history.replaceState(null, "", `#${id}`);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/", hash: id });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-black tracking-tight text-white">
          Atlas Sanctum
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => goToSection(s.id)}
              className="hover:text-emerald-300 transition-colors"
            >
              {s.label}
            </button>
          ))}
          <Link
            to="/whitepaper"
            className="hover:text-emerald-300 transition-colors"
            activeProps={{ className: "text-emerald-300" }}
          >
            Whitepaper
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 text-zinc-200">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => goToSection(s.id)}
                className="text-left py-1 hover:text-emerald-300"
              >
                {s.label}
              </button>
            ))}
            <Link
              to="/whitepaper"
              onClick={() => setOpen(false)}
              className="py-1 hover:text-emerald-300"
            >
              Whitepaper
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
