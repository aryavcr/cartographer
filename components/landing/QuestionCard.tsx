"use client";

import { motion } from "motion/react";
import type { CuratedQuestion } from "@/lib/data/curated-questions";
import {
  DIFF_COLORS,
  DIFF_LABELS,
  QUESTION_META,
  QUESTION_ILLUSTRATIONS,
} from "@/lib/data/illustrations";

interface QuestionCardProps {
  question: CuratedQuestion;
  isSelected: boolean;
  onSelect: () => void;
  large?: boolean;
  cardIndex?: number;
}

export function QuestionCard({
  question,
  isSelected,
  onSelect,
  large = false,
  cardIndex = 1,
}: QuestionCardProps) {
  const diffColor = DIFF_COLORS[question.difficulty];
  const diffLabel = DIFF_LABELS[question.difficulty];
  const meta = QUESTION_META[question.id];
  const qId = meta?.qId ?? "Q-000";
  const tag = meta?.tag ?? "MISC";
  const Illustration = QUESTION_ILLUSTRATIONS[question.id];
  const ghostNum = qId.replace("Q-0", "").replace("Q-", "");

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative flex flex-col text-left cursor-pointer rounded-xs overflow-hidden shrink-0 bg-black transition-colors duration-200 ${
        large ? "w-67.5 h-110" : "w-55 h-80"
      } ${isSelected ? "border border-white/40" : "border border-pink-300/10"}`}
    >
      {" "}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 20%, transparent 65%)",
        }}
      />
      {/*corner brackets*/}
      {(
        [
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ] as const
      ).map((pos) => (
        <div
          key={pos}
          className={`absolute w-2.5 h-2.5 pointer-events-none z-10 transition-colors duration-200 ${pos} ${isSelected ? "border-white" : "border-pink-300/80"}`}
        />
      ))}
      <div className="flex items-center justify-between shrink-0 pt-3 px-3.5">
        <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-white/35">
          {diffLabel}
        </span>
        <span className="font-mono text-[10px] font-medium tracking-widest text-white/25">
          {qId} · {tag}
        </span>
      </div>
      <div
        className={`shrink-0 flex items-center justify-center px-2.5 pb-1 ${large ? "h-42.5 pt-3" : "h-35 pt-3"}`}
        aria-hidden="true"
      >
        {Illustration ? (
          <Illustration color={diffColor} />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1 relative pt-3.5 px-3.5 pb-3.5 bg-black">
        <div className="absolute bottom-5 right-2 pointer-events-none select-none overflow-hidden">
          <span className="font-mono text-[72px] leading-none text-white/4 select-none">
            {ghostNum}
          </span>
        </div>
        <span className="font-mono text-[10px] font-medium tracking-widest text-white/25">
          [{qId}]
        </span>
        <h3
          className={`font-body tracking-wide uppercas font-medium leading-snug -mt-1 ${isSelected ? "text-white/90" : "text-"} transition-colors duration-200 ${large ? "text-[16px]" : "text-[12px]"}`}
        >
          {question.label}
        </h3>
        <div className="border-t border-white/8 my-0.5" />
        <p
          className={`font-body tracking-wide leading-relaxed text-white/40 ${large ? "text-[13px] line-clamp-5" : "text-[11px] line-clamp-3"}`}
        >
          {question.question}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {isSelected ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="font-mono font-medium text-[10px] uppercase tracking-widest py-0.5 px-1.5 rounded-xs border border-white/30 text-white/60"
            >
              [SELECTED]
            </motion.span>
          ) : (
            <span className="font-mono font-medium text-[10px] uppercase tracking-widest text-white/0 group-hover:text-white/40 transition-colors duration-200">
              SELECT →
            </span>
          )}
          <span className="font-mono font-medium text-[10px] tabular-nums text-white/20">
            {String(cardIndex).padStart(2, "0")} / 03
          </span>
        </div>
      </div>
    </motion.button>
  );
}
