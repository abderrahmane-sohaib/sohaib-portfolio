import { motion } from "framer-motion";
import { Blocks, Database, LayoutDashboard, ShieldCheck, ShoppingBag, Workflow } from "lucide-react";

const services = [
  [Blocks, "Custom Website Development", "Responsive, focused websites built around your goals and content."],
  [Workflow, "Full-Stack Web Applications", "Structured web applications with thoughtful interfaces and server-side workflows."],
  [LayoutDashboard, "Business Web Applications", "Clear administrative interfaces for service, request, and operational processes."],
  [ShoppingBag, "E-Commerce Interfaces", "Modern storefront and product experiences designed for confident browsing."],
  [Database, "Database Design & Integration", "Organized data models and integrations that support useful, maintainable applications."],
  [ShieldCheck, "Website Security Fundamentals", "Security-conscious web development practices integrated from the start."],
];

export default function Services() {
  return (
    <section id="services" className="border-y border-slate-800/80 bg-[#08101b]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300"><span className="h-px w-6 bg-teal-300/80" /> 04 / Services</p>
        <h2 className="max-w-3xl text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">Web solutions with an engineering and security mindset.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">Available for clearly scoped development projects, from a polished website to an operational web application.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map(([Icon, title, text], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/15 bg-teal-300/10 text-teal-200"><Icon size={20} /></div>
              <h3 className="mt-5 text-lg font-bold text-slate-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
