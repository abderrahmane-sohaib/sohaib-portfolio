import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Code2 } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Research oriented",
    text: "Exploring transparent AI systems for real cybersecurity contexts.",
  },
  {
    icon: ShieldCheck,
    title: "Security conscious",
    text: "Bringing defensive thinking to web and software development.",
  },
  {
    icon: Code2,
    title: "Builder mindset",
    text: "Turning ideas into practical web applications and polished interfaces.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300">
            <span className="h-px w-6 bg-teal-300/80" /> 01 / About
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
            A software builder with a security research foundation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="text-xl leading-9 tracking-[-0.02em] text-slate-300">
            I am completing a Master&apos;s degree in Information Systems Security
            (M2 SSI) at Saad Dahlab University of Blida 1, Algeria (2024–2026),
            following a Bachelor&apos;s degree in Information Systems (2021–2024).
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-slate-500">
            My work connects full-stack development, software engineering, and
            cybersecurity. My Master&apos;s research focuses on Explainable AI and
            Deep Learning for malware detection, while my practical projects
            include web applications, database-backed platforms, and interfaces
            for real operational workflows.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-teal-200">
                    <Icon size={16} />
                    <h3 className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
