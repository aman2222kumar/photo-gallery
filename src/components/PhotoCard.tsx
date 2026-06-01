"use client";

import { motion } from "framer-motion";
import { Photo } from "@/types/photo";
import { Bookmark, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface PhotoCardProps {
  photo: Photo;
  index: number;
}

// Color palette for album badges
const ALBUM_COLORS = [
  "from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300",
  "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
  "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
  "from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300",
  "from-cyan-500/20 to-sky-500/20 border-cyan-500/30 text-cyan-300",
  "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300",
];

export function PhotoCard({ photo, index }: PhotoCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [imgError, setImgError] = useState(false);

  const albumColor = ALBUM_COLORS[photo.albumId % ALBUM_COLORS.length];
  const likeCount = ((photo.id * 7) % 120) + 12;
  const colorHex = photo.thumbnailUrl.split("/").pop() || "92c952";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: (index % 20) * 0.04,
        ease: [0.2, 0, 0, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden border border-white/6 bg-surface-100 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-surface-200">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          /* Fallback color swatch when placeholder fails */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `#${colorHex.slice(0, 6)}` }}
          >
            <span className="text-white/60 text-xs font-mono">#{colorHex.slice(0, 6)}</span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-0/90 via-surface-0/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setLiked((v) => !v)}
            className={clsx(
              "w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm border transition-all duration-200",
              liked
                ? "bg-rose-500/90 border-rose-400/50 text-white"
                : "bg-surface-100/80 border-white/10 text-surface-700 hover:text-rose-400"
            )}
          >
            <Heart className={clsx("w-3.5 h-3.5", liked && "fill-current")} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setBookmarked((v) => !v)}
            className={clsx(
              "w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm border transition-all duration-200",
              bookmarked
                ? "bg-brand-500/90 border-brand-400/50 text-white"
                : "bg-surface-100/80 border-white/10 text-surface-700 hover:text-brand-400"
            )}
          >
            <Bookmark className={clsx("w-3.5 h-3.5", bookmarked && "fill-current")} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm bg-surface-100/80 border border-white/10 text-surface-700 hover:text-accent-400 transition-all duration-200"
          >
            <Share2 className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Photo ID badge */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-2xs font-mono text-white/60 bg-surface-0/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/8">
            #{photo.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Album badge */}
        <div className={clsx("inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-2xs font-body font-semibold border bg-gradient-to-r mb-2", albumColor)}>
          Album {photo.albumId}
        </div>

        {/* Title */}
        <h3 className="text-sm font-body font-medium text-surface-800 dark:text-surface-800 leading-snug line-clamp-2 capitalize">
          {photo.title}
        </h3>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div
              className="w-4 h-4 rounded-full ring-1 ring-white/10"
              style={{ backgroundColor: `#${colorHex.slice(0, 6)}` }}
            />
            <span className="text-2xs font-mono text-surface-500">
              {colorHex.slice(0, 6).toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-1 text-surface-500">
            <Heart className="w-3 h-3" />
            <span className="text-2xs font-body">{likeCount + (liked ? 1 : 0)}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
