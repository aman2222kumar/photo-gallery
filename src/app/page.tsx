import { InfinitePhotoGrid } from "@/components/InfinitePhotoGrid";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero header */}
      <div className="mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-body font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          5,000 curated photos
        </div>

        <h1 className="font-display text-5xl sm:text-6xl font-bold leading-none">
          <span className="text-gradient-brand">Infinite</span>
          <br />
          <span className="text-surface-900">Gallery</span>
        </h1>

        <p className="text-surface-500 font-body text-lg max-w-xl leading-relaxed">
          Scroll through thousands of photos. New images load automatically as you
          explore — powered by TanStack Query & IntersectionObserver.
        </p>

        {/* Decorative line */}
        <div className="flex items-center gap-3 pt-2">
          <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-brand-500 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
        </div>
      </div>

      {/* Infinite photo grid */}
      <InfinitePhotoGrid />
    </div>
  );
}
