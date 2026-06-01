"use client";

import { motion } from "framer-motion";
import { Camera, Code2, Zap, Shield, Globe, Award } from "lucide-react";

const TEAM = [
  {
    name: "Aria Chen",
    role: "Creative Director",
    bio: "Passionate about the intersection of art and technology. Former lead designer at Unsplash.",
    initials: "AC",
    color: "from-purple-500 to-blue-600",
  },
  {
    name: "Marco Ricci",
    role: "Lead Engineer",
    bio: "Full-stack developer with a love for performance and beautiful UIs. Open source contributor.",
    initials: "MR",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Zoe Nakamura",
    role: "Photography Curator",
    bio: "Award-winning photographer who now curates digital collections for major galleries worldwide.",
    initials: "ZN",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Luca Bertrand",
    role: "UX Researcher",
    bio: "Obsessed with making complex interfaces feel effortless. Speaker at UX conferences globally.",
    initials: "LB",
    color: "from-rose-500 to-pink-600",
  },
];

const STATS = [
  { value: "5,000+", label: "Photos Curated" },
  { value: "100", label: "Albums Organized" },
  { value: "∞", label: "Scroll Distance" },
  { value: "< 100ms", label: "Load Time" },
];

const TECH = [
  { icon: Code2, title: "Next.js 15", desc: "App Router with RSC for lightning-fast pages" },
  { icon: Zap, title: "TanStack Query", desc: "Infinite queries with smart caching and deduplication" },
  { icon: Shield, title: "TypeScript", desc: "Fully typed codebase for reliability and DX" },
  { icon: Globe, title: "IntersectionObserver", desc: "Native browser API for smooth infinite scrolling" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className="text-center space-y-6 pt-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-body font-semibold mx-auto">
          <Award className="w-3.5 h-3.5" />
          Our Story
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold">
          <span className="text-surface-900">About</span>{" "}
          <span className="text-gradient-brand">Lumière</span>
        </h1>
        <p className="text-surface-500 font-body text-lg max-w-2xl mx-auto leading-relaxed">
          Lumière was born from a simple belief: beautiful photography deserves a beautiful home.
          We built a gallery experience that gets out of the way and lets art speak for itself.
        </p>
      </motion.section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl bg-surface-100 border border-white/6 p-6 text-center space-y-2"
          >
            <p className="font-display text-4xl font-bold text-gradient-brand">{stat.value}</p>
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-surface-500">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-5">
          <h2 className="font-display text-4xl font-bold text-surface-900">
            Our Mission
          </h2>
          <p className="font-body text-surface-500 leading-relaxed">
            We set out to prove that performance and beauty aren&apos;t mutually exclusive.
            Lumière loads thousands of images seamlessly without ever making you wait — or notice the work happening behind the scenes.
          </p>
          <p className="font-body text-surface-500 leading-relaxed">
            Every interaction, from the subtle hover effects to the way new photos fade in as you scroll, is crafted to feel natural and delightful.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-brand">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-body font-semibold text-surface-800">Lumière Gallery</p>
              <p className="text-xs font-body text-surface-500">Est. 2024 · San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Decorative visual */}
        <div className="relative h-64 rounded-3xl overflow-hidden bg-surface-100 border border-white/6">
          <div className="absolute inset-0 bg-gradient-radial from-brand-600/20 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {[80, 56, 32].map((size, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-brand-500/20 animate-pulse-slow"
                  style={{
                    width: size * 2,
                    height: size * 2,
                    top: -size,
                    left: -size,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-brand animate-float">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl font-bold text-surface-900">Tech Stack</h2>
          <p className="text-surface-500 font-body">Built with the best tools in the ecosystem</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {TECH.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl bg-surface-100 border border-white/6 p-5 flex gap-4 hover:border-brand-500/20 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-surface-800 text-sm">{item.title}</h3>
                <p className="text-xs font-body text-surface-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="space-y-8 pb-8">
        <div className="text-center space-y-2">
          <h2 className="font-display text-4xl font-bold text-surface-900">Meet the Team</h2>
          <p className="text-surface-500 font-body">The people behind Lumière</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl bg-surface-100 border border-white/6 p-5 flex gap-4 hover:border-white/12 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 text-white font-display font-bold text-sm shadow-lg`}>
                {member.initials}
              </div>
              <div>
                <h3 className="font-body font-semibold text-surface-800 text-sm">{member.name}</h3>
                <p className="text-xs font-body text-brand-400 font-medium mb-1">{member.role}</p>
                <p className="text-xs font-body text-surface-500 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
