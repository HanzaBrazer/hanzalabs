"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "@/components/ui/icons";

const fieldBase =
  "h-[54px] w-full rounded-xl border border-ink/12 bg-white px-4 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-[14px] text-ink/70">{children}</label>;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>First Name</Label>
          <input className={fieldBase} placeholder="First Name" required />
        </div>
        <div>
          <Label>Last Name</Label>
          <input className={fieldBase} placeholder="Last Name" required />
        </div>
        <div>
          <Label>Email</Label>
          <input type="email" className={fieldBase} placeholder="hello@company.co" required />
        </div>
        <div>
          <Label>Phone Number</Label>
          <input className={fieldBase} placeholder="+971 4 221 6791" />
        </div>
      </div>

      <div className="mt-5">
        <Label>Budget</Label>
        <div className="relative">
          <select
            defaultValue=""
            className={`${fieldBase} appearance-none pr-12 text-ink/70`}
          >
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
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 500))}
            placeholder="Tell us about your project..."
            rows={5}
            className="w-full resize-none rounded-xl border border-ink/12 bg-white p-4 text-[15px] outline-none transition-colors placeholder:text-ink/35 focus:border-ink/40"
          />
          <span className="absolute bottom-3 right-4 text-[12px] text-ink/40">
            {message.length}/500
          </span>
        </div>
      </div>

      <button
        type="submit"
        data-cursor="hover"
        className="group mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-ink text-[15px] font-medium text-white transition-colors hover:bg-ink/90"
      >
        {sent ? "Message sent ✓" : "Send Message"}
        {!sent && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>

      <AnimatePresence>
        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-[14px] text-ink/60"
          >
            Thanks — we&apos;ll be in touch within 24 hours.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
