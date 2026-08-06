import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  MonitorPlay,
  BookOpenText,
} from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300">
          <span className="h-px w-6 bg-teal-300/80" /> 03 / Selected work
        </p>
        <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
          Research and development with measurable impact.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
          A selection of work spanning interpretable AI systems and polished
          frontend applications for service management.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass overflow-hidden rounded-[1.5rem]"
        >
          <div className={`h-56 bg-gradient-to-br ${activeProject.accent} p-6`}>
            <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-[#08111d]/80 p-5">
              <div className="w-full max-w-md rounded-2xl border border-slate-700/60 bg-slate-950/70 p-5 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-slate-700" />
                  <div className="h-3 w-full rounded bg-slate-800" />
                  <div className="h-3 w-5/6 rounded bg-slate-800" />
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="h-16 rounded-xl border border-teal-300/20 bg-teal-300/10" />
                    <div className="h-16 rounded-xl border border-blue-300/20 bg-blue-300/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="mono text-xs font-medium uppercase tracking-[0.2em] text-teal-300">
                {activeProject.type}
              </span>
              <div className="flex gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-teal-300" : "bg-slate-700"}`}
                    aria-label={`Show ${project.title}`}
                  />
                ))}
              </div>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-100">
              {activeProject.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              {activeProject.longDescription}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={project.id}
                className={`glass rounded-[1.4rem] p-5 transition ${isActive ? "border-teal-300/25" : "border-slate-800"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-teal-300">
                      Project 0{project.id}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-100">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
                    aria-label={`Preview ${project.title}`}
                  >
                    <ExternalLink size={16} />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-slate-200">
                    Features
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.results && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-teal-300/10 bg-teal-300/[0.045] p-3"
                      >
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          {result.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-teal-200">
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-200"
                  >
                    <MonitorPlay size={15} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-200"
                  >
                    <GitBranch size={15} /> GitHub
                  </a>
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-3.5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-200"
                    >
                      <BookOpenText size={15} /> Research Paper
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
