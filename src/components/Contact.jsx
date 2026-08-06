import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Network,
  GitFork,
  Send,
  ServerCog,
  ArrowUpRight,
} from "lucide-react";

const CONTACT = {
  email: "your.email@example.com",
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-profile",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name || "a visitor"}`,
    );
    const message = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${message}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800/80 bg-[#07101c] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-teal-300">
            <span className="h-px w-6 bg-teal-300/80" /> 05 / Contact
          </p>
          <h2 className="text-3xl font-bold tracking-[-0.045em] text-slate-100 sm:text-4xl">
            Let&apos;s work on the next security challenge.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Open to research collaborations, cybersecurity engineering roles,
            and carefully scoped freelance projects.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <p className="mono text-xs uppercase tracking-[0.18em] text-slate-500">
                Reach out
              </p>
              <div className="mt-7 space-y-3">
                {[
                  [Mail, "Email", CONTACT.email, `mailto:${CONTACT.email}`],
                  [
                    Network,
                    "LinkedIn",
                    "linkedin.com/in/your-profile",
                    CONTACT.linkedin,
                  ],
                  [GitFork, "GitHub", "github.com/your-handle", CONTACT.github],
                ].map(([Icon, label, value, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/30 p-4 transition hover:border-teal-300/30 hover:bg-teal-300/[0.04]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-300/10 text-teal-200">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-slate-200">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto text-slate-600"
                      size={16}
                    />
                  </a>
                ))}
              </div>

              <div className="mt-7 rounded-xl border border-blue-300/15 bg-blue-300/[0.06] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                  <ServerCog size={16} /> Collaboration status
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Available for conversations about research, security
                  engineering, and web development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <form onSubmit={onSubmit} className="glass rounded-2xl p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="Your name"
                    className="rounded-lg border border-slate-700 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300/60 focus:ring-2 focus:ring-teal-300/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-300">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="you@example.com"
                    className="rounded-lg border border-slate-700 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300/60 focus:ring-2 focus:ring-teal-300/10"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-300">
                Project or research enquiry
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  placeholder="Tell me a little about your opportunity..."
                  className="resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3.5 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-300/60 focus:ring-2 focus:ring-teal-300/10"
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200"
              >
                <Send size={16} /> Start a conversation
              </button>

              {sent && (
                <p className="mt-3 text-xs text-teal-200">
                  Your email application should now be open. Replace the contact
                  email in the source before deployment.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
