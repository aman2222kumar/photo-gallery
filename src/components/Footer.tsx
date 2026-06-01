"use client";

import Link from "next/link";
import { Camera, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-surface-50/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-surface-900">Lumière</span>
            </div>
            <p className="text-sm font-body text-surface-500 leading-relaxed">
              A curated gallery experience built with Next.js, TanStack Query, and infinite scroll.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-surface-200 border border-white/6 flex items-center justify-center text-surface-500 hover:text-brand-400 hover:border-brand-500/30 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-surface-500">Navigation</h4>
            {[{ href: "/", label: "Gallery" }, { href: "/about", label: "About Us" }, { href: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-body text-surface-600 hover:text-brand-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Tech stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-surface-500">Built With</h4>
            {["Next.js 15", "TanStack Query v5", "Framer Motion", "Tailwind CSS", "TypeScript"].map((tech) => (
              <p key={tech} className="text-sm font-body text-surface-600">{tech}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-surface-500">
            © {new Date().getFullYear()} Lumière Gallery. Data from JSONPlaceholder.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-mono text-surface-500">API Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
