"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchPhotos } from "@/lib/api";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PhotoCard } from "./PhotoCard";
import { GridSkeleton } from "./PhotoCardSkeleton";
import { Loader2, ImageOff, CheckCircle2 } from "lucide-react";

export function InfinitePhotoGrid() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: ({ pageParam }) => fetchPhotos(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const allPhotos = data?.pages.flatMap((p) => p.photos) ?? [];
  const totalLoaded = allPhotos.length;

  const handleIntersect = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const sentinelRef = useIntersectionObserver({
    onIntersect: handleIntersect,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  if (isError) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-32 gap-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-error/10 border border-error/20 flex items-center justify-center">
          <ImageOff className="w-8 h-8 text-error" />
        </div>
        <div className="text-center">
          <p className="text-surface-800 font-body font-semibold">Failed to load photos</p>
          <p className="text-surface-500 text-sm mt-1">{(error as Error)?.message}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats bar */}
      <AnimatePresence>
        {totalLoaded > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between px-1"
          >
            <p className="text-sm font-body text-surface-500">
              Showing{" "}
              <span className="text-brand-400 font-semibold">{totalLoaded.toLocaleString()}</span>
              {" "}of{" "}
              <span className="text-surface-700 font-semibold">5,000</span> photos
            </p>
            {/* Progress bar */}
            <div className="flex items-center gap-3">
              <div className="w-32 h-1.5 rounded-full bg-surface-200 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(totalLoaded / 5000) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs font-mono text-surface-500">
                {((totalLoaded / 5000) * 100).toFixed(1)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {isLoading ? (
          <GridSkeleton count={20} />
        ) : (
          allPhotos.map((photo, i) => (
            <PhotoCard key={photo.id} photo={photo} index={i} />
          ))
        )}

        {/* Skeleton loaders for next page */}
        {isFetchingNextPage && <GridSkeleton count={20} />}
      </div>

      {/* Sentinel / Load trigger */}
      <div ref={sentinelRef} className="h-4" />

      {/* Bottom state indicators */}
      <AnimatePresence mode="wait">
        {isFetchingNextPage && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-center py-8"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-surface-100 border border-white/8">
              <Loader2 className="w-4 h-4 text-brand-400 animate-spin" />
              <span className="text-sm font-body text-surface-600">Loading more photos…</span>
            </div>
          </motion.div>
        )}

        {!hasNextPage && !isLoading && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center py-12"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <div className="text-center">
                <p className="text-sm font-body font-semibold text-surface-700">
                  All {totalLoaded.toLocaleString()} photos loaded
                </p>
                <p className="text-xs font-body text-surface-500 mt-0.5">
                  You&apos;ve reached the end of the gallery
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
