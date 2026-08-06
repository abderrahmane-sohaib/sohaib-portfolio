import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Code2, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    skills: [
      "Malware Analysis",
      "Threat Detection",
      "Network Security",
      "Information Systems Security",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      "Python",
      "Deep Learning",
      "Neural Networks",
      "Graph Neural Networks",
      "Explainable AI",
      "SHAP",
      "LIME",
      "GNNExplainer",
    ],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "Tooling & Systems",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-800/80 bg-[#08101b]/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300">
            <span className="h-px w-6 bg-teal-300/80" /> 02 / Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
            A layered technical foundation.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Research depth for emerging threats, paired with the engineering
            range to build reliable tools and polished interfaces.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/15 bg-teal-300/10 text-teal-200">
                    <Icon size={20} />
                  </div>
                  <span className="mono text-[10px] tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
