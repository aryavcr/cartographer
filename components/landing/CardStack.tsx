"use client";

import { motion } from "motion/react";
import type {
  CuratedQuestion,
  QuestionCategory,
} from "@/lib/data/curated-questions";
import { DOMAIN_TINTS, DOMAIN_ILLUSTRATIONS } from "@/lib/data/illustrations";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  useMorphingDialog,
} from "@/components/morphing-dialog";
import { QuestionCard } from "./QuestionCard";
import { IconPointer2 } from "@tabler/icons-react";

const DOMAIN_TAGS: Record<QuestionCategory, string[]> = {
  strategy: ["TRADEOFF", "MARKET", "GROWTH"],
  ethics: ["BIAS", "FAIRNESS", "HARM"],
  prediction: ["FORECAST", "SIGNAL", "RISK"],
  technical: ["PERF", "SCALE", "INFRA"],
  analysis: ["TREND", "SIGNAL", "DATA"],
};

/*dialog content is a child component so it can access MorphingDialog context*/
function CardDialogContent({
  questions,
  selectedId,
  onSelect,
}: {
  questions: CuratedQuestion[];
  selectedId: string | null;
  onSelect: (q: CuratedQuestion) => void;
}) {
  const { setIsOpen } = useMorphingDialog();

  return (
    <div className="flex items-stretch gap-10 p-5">
      {questions.slice(0, 3).map((q, i) => (
        <motion.div
          key={q.id}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                delay: 0.18 + i * 0.05,
                duration: 0.18,
                ease: [0.23, 1, 0.32, 1],
              },
            },
            exit: { opacity: 0, transition: { duration: 0.08 } },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <QuestionCard
            question={q}
            isSelected={selectedId === q.id}
            onSelect={() => {
              onSelect(q);
              setIsOpen(false);
            }}
            large
            cardIndex={i + 1}
          />
        </motion.div>
      ))}
    </div>
  );
}

interface CardStackProps {
  category: QuestionCategory;
  questions: CuratedQuestion[];
  isDimmed: boolean;
  isActive: boolean;
  selectedId: string | null;
  onExpand: () => void;
  onSelect: (q: CuratedQuestion) => void;
}

/**parse the H channel out of an oklch color string for using in canvas*/
function oklchHue(color: string): number {
  const m = color.match(/oklch\(\s*[\d.]+\s+[\d.]+\s+([\d.]+)/);
  return m ? parseFloat(m[1]) : 180;
}

export function CardStack({
  category,
  questions,
  isDimmed,
  isActive,
  selectedId,
  onExpand,
  onSelect,
}: CardStackProps) {
  const { tint, index, abbr } = DOMAIN_TINTS[category];
  const hasSelected = questions.some((q) => q.id === selectedId);
  const Illustration = DOMAIN_ILLUSTRATIONS[category];
  const tintHue = oklchHue(tint);

  /*ripple from card center*/
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent("card-ripple", {
        detail: {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          hue: tintHue,
        },
      }),
    );
  };

  return (
    <MorphingDialog>
      <motion.div
        onMouseDown={handleMouseDown}
        animate={{ opacity: isDimmed ? 0.3 : 1, scale: isDimmed ? 0.95 : 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col items-center gap-10 transform-3d"
      >
        <MorphingDialogTrigger
          className="w-70 h-100 bg-black rounded-xs transform-3d"
          whileHover="hover"
          initial="rest"
          animate="rest"
          onClick={
            !isActive
              ? (e) => {
                  e.stopPropagation();
                  onExpand();
                }
              : undefined
          }
        >
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            variants={{
              rest: { y: 0, scale: 1 },
              hover: {
                y: -20,
                scale: 1.02,
                transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/50" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/50" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/50" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/50" />
          </motion.div>

          <motion.div
            className="absolute inset-0 z-3 rounded-xs overflow-hidden flex flex-col border border-white/20"
            variants={{
              rest: { rotate: 0, x: 0, y: 0 },
              hover: {
                y: -20,
                scale: 1.02,
                transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
              },
            }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="relative overflow-hidden shrink-0 h-50">
              <div className="absolute p-1 inset-0">
                <Illustration color={tint} />
              </div>
              <div
                className="absolute flex w-full justify-between pr-4 top-4 left-5 italic text-[52px] leading-[0.9] mix-blend-screen opacity-[0.95] tracking-[-0.04em]"
                style={{
                  color: `color-mix(in oklch, ${tint} 80%, white 0%)`,
                  fontFamily: '"Instrument Serif", Georgia, serif',
                }}
              >
                {index}
                <sup className="font-mono not-italic mx-auto text-[10px] tracking-[0.18em] text-white/80 align-top relative top-1 left-3">
                  {abbr}
                </sup>
              </div>
            </div>

            <div
              className="flex flex-col gap-2 flex-1 bg-[black] pt-3.5 px-4 pb-4 relative"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {/*big index watermark*/}
              <div className="absolute bottom-8 right-2 pointer-events-none select-none overflow-hidden">
                <span className="font-mono text-[96px] leading-none text-white/4 select-none">
                  {index}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  {DOMAIN_TAGS[category].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-widest uppercase text-white/50"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
                {isActive && (
                  <motion.span
                    className="font-mono text-[10px] text-white/50 select-none"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      ease: "linear",
                      times: [0, 0.45, 0.5, 0.95],
                    }}
                  >
                    ▋
                  </motion.span>
                )}
              </div>

              {/*questions*/}
              <div className="flex flex-col gap-1.5 mt-1">
                {questions.slice(0, 3).map((q, i) => (
                  <div
                    key={q.id}
                    className="flex items-baseline tracking-wide gap-2 min-w-0"
                  >
                    <span
                      className={`font-mono text-[11px] shrink-0 tabular-nums ${q.id === selectedId ? "text-yellow-200/90" : "text-white/50"}`}
                    >
                      {String(i + 1)}.
                    </span>
                    <span
                      className={`font-body text-[13px] truncate leading-tight transition-colors duration-200 ${q.id === selectedId ? "text-yellow-200/90" : "text-white/70"}`}
                    >
                      {q.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="inline-flex font-mono font-medium uppercase text-[10px] text-yellow-200/90 tracking-widest items-center gap-2 self-start mt-auto py-0.5 px-1">
                <IconPointer2 size={10} stroke={3} />
                {hasSelected
                  ? "1 selected"
                  : `${questions.slice(0, 3).length} questions`}
              </div>
            </div>
          </motion.div>
        </MorphingDialogTrigger>
      </motion.div>

      <MorphingDialogContainer>
        <MorphingDialogContent className="bg-black rounded-xs pointer-events-auto">
          <CardDialogContent
            questions={questions}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        </MorphingDialogContent>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.48, duration: 0.2 }}
          className="font-mono text-xs font-medium text-(--foreground-dim) tracking-[0.08em] pointer-events-none"
        >
          Click outside or press Esc to close
        </motion.p>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
