import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GitFork, Mail, Network, ShieldCheck } from "lucide-react";

const github = "https://github.com/abderrahmane-sohaib";
const email = "toubalseghir.abderrahmanesohaib@gmail.com";
const linkedin = "https://www.linkedin.com/in/abderrahmane-sohaib-toubal-seghir-374241422";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800/80 bg-[#07101c] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5 }}>
          <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300"><span className="h-px w-6 bg-teal-300/80" /> 06 / Contact</p>
          <h2 className="max-w-xl text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">Have a project in mind? Let&apos;s build something together.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">I am interested in web development opportunities, thoughtful software projects, and cybersecurity or AI research collaborations.</p>
          <a href={github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200"><GitFork size={17} /> Start on GitHub <ArrowUpRight size={16} /></a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }} className="glass rounded-2xl p-6 sm:p-7">
          <p className="mono text-xs uppercase tracking-[0.18em] text-slate-500">Connect</p>
          <a href={github} target="_blank" rel="noreferrer" className="mt-6 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/30 p-4 transition hover:border-teal-300/30 hover:bg-teal-300/[0.04]"><span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-300/10 text-teal-200"><GitFork size={18} /></span><span><span className="block text-xs text-slate-500">GitHub</span><span className="block text-sm font-medium text-slate-200">github.com/abderrahmane-sohaib</span></span><ArrowUpRight className="ml-auto text-slate-600" size={16} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/30 p-4 transition hover:border-teal-300/30 hover:bg-teal-300/[0.04]"><span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-300/10 text-teal-200"><Network size={18} /></span><span><span className="block text-xs text-slate-500">LinkedIn</span><span className="block text-sm font-medium text-slate-200">Abderrahmane Sohaib Toubal Seghir</span></span><ArrowUpRight className="ml-auto text-slate-600" size={16} /></a>
          <a href={`mailto:${email}`} className="mt-4 flex items-center gap-4 rounded-xl border border-blue-300/15 bg-blue-300/[0.06] p-4 transition hover:border-blue-300/35 hover:bg-blue-300/[0.1]"><span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-300/10 text-blue-200"><Mail size={18} /></span><span><span className="block text-xs text-slate-500">Email</span><span className="block break-all text-sm font-medium text-slate-200">{email}</span></span><ArrowUpRight className="ml-auto shrink-0 text-slate-600" size={16} /></a>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-teal-300/15 bg-teal-300/[0.045] p-4"><BriefcaseBusiness size={17} className="mt-0.5 shrink-0 text-teal-200" /><p className="text-sm leading-6 text-slate-400">Available for conversations about web development, software engineering, and secure digital solutions.</p></div>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><ShieldCheck size={14} className="text-teal-300" /> Professional contact information verified.</div>
        </motion.div>
      </div>
    </section>
  );
}
