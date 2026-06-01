"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Camera } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 mx-auto max-w-5xl rounded-2xl border border-white/8 bg-surface-100/80 backdrop-blur-xl shadow-nav flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-brand group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-surface-950 dark:text-surface-900 tracking-tight">
              Lumière
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-1.5 rounded-lg text-sm font-body font-medium transition-colors duration-200",
                    isActive
                      ? "text-brand-400"
                      : "text-surface-600 hover:text-surface-800 dark:text-surface-600 dark:hover:text-surface-900"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-brand-500/12 border border-brand-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-lg border border-white/8 bg-surface-200/60 hover:bg-surface-300/60 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent-400" />
            ) : (
              <Moon className="w-4 h-4 text-brand-400" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
