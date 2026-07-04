"use client";

import Image from "next/image";
import type { WorkSample } from "@/lib/work";

/**
 * Renders the visual preview inside a work sample card.
 * - If the sample has a real screenshot (hasScreenshot: true + image path set),
 *   it renders the actual image.
 * - Otherwise it renders a stylized "browser mockup" placeholder using the
 *   sample's accent color, so the grid still looks intentional and on-brand
 *   while real screenshots are pending.
 */
export default function WorkMockupPreview({ sample }: { sample: WorkSample }) {
  const displayUrl = sample.url.replace(/^https?:\/\//, "");

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-inner">
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 border-b border-white/10 bg-zinc-900/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
        </div>
        <div className="flex-1 mx-2 sm:mx-3 px-2.5 py-1 rounded-md bg-zinc-950/80 border border-white/5 text-[9px] sm:text-[10px] text-zinc-500 font-mono truncate text-center">
          {displayUrl}
        </div>
      </div>

      {/* Content area */}
      {sample.hasScreenshot && sample.image ? (
        <div className="relative w-full h-[calc(100%-37px)]">
          <Image
            src={sample.image}
            alt={`${sample.name} website screenshot`}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div
          className={`relative w-full h-[calc(100%-37px)] p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 bg-gradient-to-br ${sample.color} bg-opacity-10`}
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0)), radial-gradient(circle at 20% 10%, ${sample.glowColor}, transparent 60%)`,
          }}
        >
          {/* Fake nav skeleton */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className={`w-4 h-4 rounded bg-gradient-to-tr ${sample.color}`} />
              <div className="w-14 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1.5 rounded-full bg-white/10" />
              <div className="w-8 h-1.5 rounded-full bg-white/10" />
              <div className="w-8 h-1.5 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Fake hero skeleton */}
          <div className="flex-1 flex flex-col justify-center gap-2.5 max-w-[80%]">
            <div className="w-2/3 h-2.5 sm:h-3 rounded-full bg-white/25" />
            <div className="w-1/2 h-2.5 sm:h-3 rounded-full bg-white/25" />
            <div className="w-full h-1.5 rounded-full bg-white/10 mt-1" />
            <div className="w-4/5 h-1.5 rounded-full bg-white/10" />
            <div
              className={`mt-2 w-20 sm:w-24 h-5 sm:h-6 rounded-md bg-gradient-to-r ${sample.color} opacity-90`}
            />
          </div>

          {/* Fake feature blocks */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 sm:h-10 rounded-md bg-white/5 border border-white/10"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
