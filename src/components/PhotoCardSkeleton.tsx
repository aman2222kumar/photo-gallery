"use client";

import { motion } from "framer-motion";

export function PhotoCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/6 bg-surface-100 shadow-card">
      {/* Thumbnail skeleton */}
      <div className="aspect-square bg-surface-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/4 to-transparent animate-shimmer bg-[length:200%_100%]" />
      </div>
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-16 rounded-md bg-surface-200 animate-pulse" />
        <div className="space-y-1.5">
          <div className="h-3.5 w-full rounded bg-surface-200 animate-pulse" />
          <div className="h-3.5 w-3/4 rounded bg-surface-200 animate-pulse" />
        </div>
        <div className="pt-2 border-t border-white/5 flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-surface-200 animate-pulse" />
          <div className="h-3 w-8 rounded bg-surface-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 20 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.03, duration: 0.3 }}
        >
          <PhotoCardSkeleton />
        </motion.div>
      ))}
    </>
  );
}
