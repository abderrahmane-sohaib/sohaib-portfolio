import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Mail,
  ShieldCheck,
  BrainCircuit,
  Binary,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 sm:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.16),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.16),transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/[0.07] px-3 py-1.5 text-xs font-medium text-teal-100">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_9px_#5eead4]" />
            Open to web development, software engineering, and security opportunities
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.065em] text-slate-100 sm:text-5xl lg:text-7xl">
            Full-Stack Web Developer{" "}
            <span className="text-transparent [background:linear-gradient(120deg,#c9fff7_5%,#5eead4_53%,#60a5fa_100%)] bg-clip-text">
              | Cybersecurity Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Building modern web applications and secure digital solutions,
            combining software engineering, web development, and cybersecurity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            >
              View my work <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-teal-300/50 hover:bg-slate-800"
            >
              <Mail size={16} /> Contact me
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-800 pt-6">
            {[
              ["05", "Selected projects"],
              ["03", "Professional dimensions"],
              ["96.20%", "Malware accuracy"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-lg font-semibold text-teal-200">{value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.18),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.14),transparent_28%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Professional profile
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-100">
                    Build. Secure. Explain.
                  </h2>
                </div>
                <div className="rounded-full border border-teal-300/30 bg-teal-300/10 p-2 text-teal-200">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
                  <div className="flex items-center gap-2 text-teal-200">
                    <BrainCircuit size={18} />
                    <span className="text-sm font-semibold">AI research</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Explainable AI, malware detection, and graph-based learning.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4">
                  <div className="flex items-center gap-2 text-blue-200">
                    <Binary size={18} />
                    <span className="text-sm font-semibold">Engineering</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Full-stack web apps, dashboards, and practical software.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-teal-300/15 bg-teal-300/[0.05] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">
                    Current focus
                  </span>
                  <span className="rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-teal-200">
                    Active
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Developing useful digital products while bringing a security
                  and AI research perspective to every engineering challenge.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
