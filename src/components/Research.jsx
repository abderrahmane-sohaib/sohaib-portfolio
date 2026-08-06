import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const researchInterests = [
  "Explainable Artificial Intelligence",
  "AI for Cybersecurity",
  "Malware Detection",
  "Robust Machine Learning",
  "Graph Neural Networks",
];

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden border-y border-slate-800/80 bg-[#07101c] py-24 sm:py-32"
    >
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300">
            <span className="h-px w-6 bg-teal-300/80" /> 04 / Research focus
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
            Making AI in security more interpretable, resilient, and useful.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            I am drawn to the space where robust learning meets the operational
            realities of cybersecurity.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <div className="glass flex min-h-24 items-center justify-between rounded-xl px-5 py-4 transition hover:bg-teal-300/[0.06]">
                <span className="text-base font-semibold text-slate-200">
                  {interest}
                </span>
                <ArrowUpRight size={18} className="text-teal-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
