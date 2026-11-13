import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Code2, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Web Development",
    icon: Code2,
    summary: "Responsive interfaces and practical full-stack applications.",
    skills: [
      "HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Responsive UI",
    ],
  },
  {
    title: "Backend & Data",
    icon: BrainCircuit,
    summary: "Server-side workflows, databases, and application integration.",
    skills: [
      "PHP", "Laravel", "Java EE", "MySQL", "REST APIs", "AJAX / Fetch",
    ],
  },
  {
    title: "Cybersecurity & AI",
    icon: ShieldCheck,
    summary: "Security research and explainable machine-learning methods.",
    skills: ["Information Systems Security", "Network Security", "Deep Learning", "Explainable AI", "Malware Detection", "Graph Neural Networks", "SHAP & LIME"],
  },
  {
    title: "Engineering Practice",
    icon: Terminal,
    summary: "Foundations for reliable, collaborative software delivery.",
    skills: ["Java", "Python", "C", "C++", "Git & GitHub", "Database-backed apps", "Collaborative development", "Interface design"],
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
            Core technologies and areas of practice.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A focused stack for building modern web applications, supported by
            software-engineering foundations and cybersecurity research.
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
                <p className="mt-2 text-sm leading-6 text-slate-500">{group.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-teal-300/60 hover:bg-teal-50"
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
