import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Code2 } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Research oriented",
    text: "Focused on transparent, high-impact AI systems for security contexts.",
  },
  {
    icon: ShieldCheck,
    title: "Security conscious",
    text: "Designing solutions with defensive thinking and operational reliability.",
  },
  {
    icon: Code2,
    title: "Builder mindset",
    text: "Turning ideas into polished interfaces and practical engineering workflows.",
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
            Security-first thinking, built for intelligent systems.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <p className="text-xl leading-9 tracking-[-0.02em] text-slate-300">
            Graduate in Information Systems Security with a strong interest in
            applying Artificial Intelligence and Machine Learning to
            cybersecurity challenges, especially malware detection and
            explainable AI.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-slate-500">
            My work bridges defensive security, research rigor, and practical
            software engineering—turning complex data into transparent,
            trustworthy systems that support better security decisions.
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
