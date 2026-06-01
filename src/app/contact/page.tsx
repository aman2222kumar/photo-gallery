"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Clock, Sparkles } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@lumiere.gallery",
    sub: "We reply within 24 hours",
    color: "text-brand-400",
    bg: "bg-brand-500/10 border-brand-500/20",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "340 Pine Street, Suite 800",
    sub: "San Francisco, CA 94104",
    color: "text-accent-400",
    bg: "bg-accent-500/10 border-accent-500/20",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (415) 555-0182",
    sub: "Mon – Fri, 9am – 6pm PST",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const FAQ = [
  { q: "How are photos sourced?", a: "All photos come from JSONPlaceholder, a free online REST API for testing and prototyping." },
  { q: "Is there a download limit?", a: "Lumière Gallery is for viewing and discovery only. Downloads aren't supported to respect photo licensing." },
  { q: "Can I submit my own photos?", a: "We're working on a submission portal. Sign up for our newsletter to be notified when it launches." },
  { q: "How does infinite scroll work?", a: "We use the browser's IntersectionObserver API with TanStack Query's useInfiniteQuery to load 20 photos at a time." },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-body font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          Get in Touch
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold">
          <span className="text-surface-900">Let&apos;s</span>{" "}
          <span className="text-gradient-brand">Connect</span>
        </h1>
        <p className="text-surface-500 font-body text-lg max-w-xl mx-auto leading-relaxed">
          Have a question, a collaboration idea, or just want to say hello?
          We&apos;d love to hear from you.
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        {CONTACT_INFO.map((info, i) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            className="rounded-2xl bg-surface-100 border border-white/6 p-5 space-y-3 hover:border-white/12 transition-all duration-300"
          >
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${info.bg}`}>
              <info.icon className={`w-5 h-5 ${info.color}`} />
            </div>
            <div>
              <p className="text-xs font-body font-semibold uppercase tracking-widest text-surface-500">{info.label}</p>
              <p className="text-sm font-body font-semibold text-surface-800 mt-1">{info.value}</p>
              <p className="text-xs font-body text-surface-500 mt-0.5">{info.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full rounded-3xl bg-surface-100 border border-white/6 flex flex-col items-center justify-center p-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-display text-2xl font-bold text-surface-900">Message Sent!</h3>
              <p className="text-sm font-body text-surface-500 leading-relaxed">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }}
                className="text-xs font-body font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                Send another message →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl bg-surface-100 border border-white/6 p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold text-surface-900">Send a Message</h2>
                <p className="text-xs font-body text-surface-500">All fields are required</p>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
                  { id: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="text-xs font-body font-semibold text-surface-600 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formState[field.id as keyof typeof formState]}
                      onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                      className="w-full bg-surface-200 border border-white/6 rounded-xl px-4 py-2.5 text-sm font-body text-surface-900 placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-body font-semibold text-surface-600 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                  className="w-full bg-surface-200 border border-white/6 rounded-xl px-4 py-2.5 text-sm font-body text-surface-900 placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-body font-semibold text-surface-600 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more…"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className="w-full bg-surface-200 border border-white/6 rounded-xl px-4 py-2.5 text-sm font-body text-surface-900 placeholder-surface-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 text-white text-sm font-body font-semibold hover:from-brand-500 hover:to-brand-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-glow-brand hover:shadow-[0_0_30px_rgba(101,96,243,0.5)]"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* FAQ + hours */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-5"
        >
          {/* Hours */}
          <div className="rounded-2xl bg-surface-100 border border-white/6 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-400" />
              <h3 className="text-sm font-body font-semibold text-surface-800">Support Hours</h3>
            </div>
            {[
              { day: "Monday – Friday", time: "9:00 AM – 6:00 PM PST" },
              { day: "Saturday", time: "10:00 AM – 4:00 PM PST" },
              { day: "Sunday", time: "Closed" },
            ].map((row) => (
              <div key={row.day} className="flex justify-between text-xs font-body">
                <span className="text-surface-500">{row.day}</span>
                <span className={row.time === "Closed" ? "text-error" : "text-surface-700"}>{row.time}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="rounded-2xl bg-surface-100 border border-white/6 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <h3 className="text-sm font-body font-semibold text-surface-800">Frequently Asked</h3>
            </div>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="space-y-1.5 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <p className="text-xs font-body font-semibold text-surface-700">{item.q}</p>
                  <p className="text-xs font-body text-surface-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
