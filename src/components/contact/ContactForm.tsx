"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";

const fieldBase =
  "h-[54px] w-full rounded-xl border border-ink/12 bg-white px-4 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-[14px] text-ink/70">{children}</label>;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Could not send your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[420px] flex-col items-center justify-center text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-ink">
          <svg viewBox="0 0 24 24" className="h-8 w-8">
            <path d="M5 12.5 10 17.5 19 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-h4">Message sent</h3>
        <p className="mt-3 max-w-[360px] text-[15px] text-ink/60">
          Thanks, {form.firstName || "there"} — your message is on its way.
          We&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>First Name</Label>
          <input value={form.firstName} onChange={set("firstName")} className={fieldBase} placeholder="First Name" required />
        </div>
        <div>
          <Label>Last Name</Label>
          <input value={form.lastName} onChange={set("lastName")} className={fieldBase} placeholder="Last Name" required />
        </div>
        <div>
          <Label>Email</Label>
          <input value={form.email} onChange={set("email")} type="email" className={fieldBase} placeholder="hello@company.co" required />
        </div>
        <div>
          <Label>Phone Number</Label>
          <input value={form.phone} onChange={set("phone")} className={fieldBase} placeholder="+971 4 221 6791" />
        </div>
      </div>

      <div className="mt-5">
        <Label>Budget</Label>
        <div className="relative">
          <select value={form.budget} onChange={set("budget")} className={`${fieldBase} appearance-none pr-12 ${form.budget ? "text-ink" : "text-ink/40"}`}>
            <option value="" disabled>
              What&apos;s your budget
            </option>
            <option>$2k – $5k</option>
            <option>$5k – $10k</option>
            <option>$10k – $25k</option>
            <option>$25k+</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/50" />
        </div>
      </div>

      <div className="mt-5">
        <Label>Message</Label>
        <div className="relative">
          <textarea
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value.slice(0, 500) }))}
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-ink/12 bg-white p-4 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40"
          />
          <span className="absolute bottom-3 right-4 text-[12px] text-ink/40">
            {form.message.length}/500
          </span>
        </div>
      </div>

      <button
        type="submit"
        data-cursor="hover"
        disabled={status === "sending"}
        className="group mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-ink text-[15px] font-medium text-white transition-colors hover:bg-ink/90 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-[14px] text-red-600"
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
