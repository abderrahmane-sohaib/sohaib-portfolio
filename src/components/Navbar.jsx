import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-3 mt-3 rounded-2xl border border-slate-800/80 bg-[#07111d]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mx-6 lg:mx-auto lg:max-w-7xl lg:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-teal-300/40 bg-teal-300/10 text-sm font-semibold text-teal-200">
              ST
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-100 sm:block">
              Sohaib Toubal
            </span>
          </a>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-teal-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-teal-300/40 px-3 py-2 text-xs font-semibold text-teal-200 transition hover:bg-teal-300/10 sm:flex"
          >
            Let&apos;s connect
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700 text-slate-200 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 grid gap-1 rounded-xl border border-slate-800 bg-[#07111d]/95 p-3 lg:hidden">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-teal-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
