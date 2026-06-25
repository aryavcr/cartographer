import { JSX } from "react";
import type { QuestionCategory } from "./curated-questions";

export type DifficultyDisplay = "Moderate" | "Hard" | "Open";

export const DIFF_COLORS: Record<string, string> = {
  moderate: "oklch(0.720 0.130 165)",
  hard: "oklch(0.770 0.150 75)",
  "genuinely-uncertain": "oklch(0.760 0.135 350)",
};

export const DIFF_LABELS: Record<string, DifficultyDisplay> = {
  moderate: "Moderate",
  hard: "Hard",
  "genuinely-uncertain": "Open",
};

export interface QuestionMeta {
  qId: string;
  tag: string;
  altTint: string;
}

export const QUESTION_META: Record<string, QuestionMeta> = {
  microservices: { qId: "Q-018", tag: "TECH", altTint: "oklch(0.70 0.13 200)" },
  "remote-innovation": {
    qId: "Q-031",
    tag: "OPS",
    altTint: "oklch(0.70 0.16 35)",
  },
  ubi: { qId: "Q-044", tag: "ECON", altTint: "oklch(0.74 0.16 60)" },
  "trolley-ai": {
    qId: "Q-052",
    tag: "ETHICS",
    altTint: "oklch(0.65 0.18 320)",
  },
  consciousness: { qId: "Q-067", tag: "AI", altTint: "oklch(0.60 0.18 285)" },
  "open-source-ai": { qId: "Q-071", tag: "AI", altTint: "oklch(0.78 0.14 95)" },
  "junior-devs": { qId: "Q-079", tag: "WORK", altTint: "oklch(0.72 0.15 15)" },
  "nuclear-net-zero": {
    qId: "Q-084",
    tag: "ENVIR",
    altTint: "oklch(0.66 0.18 30)",
  },
  "crypto-mainstream": {
    qId: "Q-093",
    tag: "FIN",
    altTint: "oklch(0.78 0.13 90)",
  },
  "rust-go": { qId: "Q-102", tag: "TECH", altTint: "oklch(0.72 0.12 185)" },
  "sql-nosql": { qId: "Q-108", tag: "TECH", altTint: "oklch(0.74 0.13 145)" },
  "llm-finetuning": { qId: "Q-115", tag: "AI", altTint: "oklch(0.78 0.14 95)" },
  "four-day-week": {
    qId: "Q-121",
    tag: "WORK",
    altTint: "oklch(0.78 0.10 155)",
  },
  "social-media-democracy": {
    qId: "Q-128",
    tag: "SOC",
    altTint: "oklch(0.70 0.17 45)",
  },
  "college-roi": { qId: "Q-134", tag: "EDU", altTint: "oklch(0.74 0.13 195)" },
};

export const DOMAIN_TINTS: Record<
  QuestionCategory,
  { tint: string; altTint: string; index: string; abbr: string }
> = {
  strategy: {
    tint: "oklch(0.720 0.150 45)",
    altTint: "oklch(0.78 0.16 25)",
    index: "01",
    abbr: "STRATEGY",
  },
  ethics: {
    tint: "oklch(0.640 0.150 250)",
    altTint: "oklch(0.72 0.13 200)",
    index: "02",
    abbr: "ETHICS",
  },
  prediction: {
    tint: "oklch(0.640 0.140 305)",
    altTint: "oklch(0.70 0.16 340)",
    index: "03",
    abbr: "PREDICT",
  },
  technical: {
    tint: "oklch(0.680 0.115 175)",
    altTint: "oklch(0.74 0.14 195)",
    index: "04",
    abbr: "TECH",
  },
  analysis: {
    tint: "oklch(0.780 0.140 80)",
    altTint: "oklch(0.74 0.16 50)",
    index: "05",
    abbr: "ANALYSIS",
  },
};

interface IllustrationProps {
  color: string;
}

export function StrategyIllustration({ color }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <g stroke="white" strokeOpacity="0.18" strokeWidth="1">
        <path d="M40 150 L80 130 L80 90 L140 90 L140 50 L240 50 L240 30" />
        <path d="M40 150 L120 150 L120 110 L200 110 L200 70 L260 70" />
      </g>
      <g
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 150 L90 150 L90 110 L160 110 L160 70 L230 70 L230 40 L280 40" />
      </g>
      <g fill={color}>
        <circle cx="40" cy="150" r="4" />
        <circle cx="280" cy="40" r="6" />
      </g>
    </svg>
  );
}

export function EthicsIllustration({ color }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <g stroke={color} strokeWidth="2" fill="none">
        <circle cx="130" cy="90" r="56" />
        <circle cx="200" cy="90" r="56" />
      </g>
      <path
        d="M165 50 A56 56 0 0 1 165 130 A56 56 0 0 1 165 50 Z"
        fill={color}
        fillOpacity="0.2"
      />
    </svg>
  );
}

export function PredictionIllustration({ color }: IllustrationProps) {
  const gradId = "fcst-pred";
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="1" stopColor={color} stopOpacity="0.45" />
        </linearGradient>
      </defs>
      <path
        d="M150 80 Q230 30 320 0 L320 180 Q230 150 150 80 Z"
        fill={`url(#${gradId})`}
      />
      <path
        d="M0 120 Q70 110 110 100 T150 80"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M150 80 Q220 50 310 30"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M150 80 Q220 110 310 130"
        fill="none"
        stroke={color}
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <circle cx="150" cy="80" r="5" fill={color} />
      <line
        x1="150"
        y1="0"
        x2="150"
        y2="180"
        stroke="white"
        strokeOpacity="0.18"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function TechnicalIllustration({ color }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <g stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round">
        <path d="M100 60 L160 30 L220 60 L160 90 Z" opacity="0.5" />
        <path d="M100 60 L100 110 L160 140 L160 90 Z" opacity="0.5" />
        <path d="M220 60 L220 110 L160 140 L160 90 Z" opacity="0.5" />
        <path d="M80 90 L140 60 L200 90 L140 120 Z" />
        <path d="M80 90 L80 140 L140 170 L140 120 Z" />
        <path d="M200 90 L200 140 L140 170 L140 120 Z" />
      </g>
    </svg>
  );
}

export function AnalysisIllustration({ color }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
    >
      <line
        x1="40"
        y1="135"
        x2="290"
        y2="40"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <g fill={color}>
        <circle cx="55" cy="140" r="3" />
        <circle cx="85" cy="120" r="3" />
        <circle cx="115" cy="125" r="3" />
        <circle cx="145" cy="105" r="3" />
        <circle cx="175" cy="90" r="3" />
        <circle cx="205" cy="80" r="3" />
        <circle cx="235" cy="65" r="3" />
        <circle cx="270" cy="50" r="3" />
      </g>
      <circle
        cx="175"
        cy="90"
        r="9"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export const DOMAIN_ILLUSTRATIONS: Record<
  QuestionCategory,
  (props: IllustrationProps) => JSX.Element
> = {
  strategy: StrategyIllustration,
  ethics: EthicsIllustration,
  prediction: PredictionIllustration,
  technical: TechnicalIllustration,
  analysis: AnalysisIllustration,
};

export function MicroservicesIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g>
        <rect
          x="20"
          y="20"
          width="100"
          height="100"
          rx="10"
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        <rect
          x="32"
          y="32"
          width="76"
          height="76"
          rx="6"
          fill={color}
          fillOpacity="0.18"
        />
        <text
          x="70"
          y="74"
          textAnchor="middle"
          className="font-body lowercase font-normal "
          letterSpacing="0.5"
          fontSize="10"
          fontWeight="400"
          fill="white"
          opacity="0.8"
        >
          MONO
        </text>
        <text
          x="70"
          y="135"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          1 unit
        </text>
      </g>
      <text
        x="150"
        y="78"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(180 20)">
        <g fill="none" stroke={color} strokeWidth="1.5">
          <rect x="0" y="0" width="28" height="28" rx="4" />
          <rect x="36" y="0" width="28" height="28" rx="4" />
          <rect x="72" y="0" width="28" height="28" rx="4" />
          <rect x="0" y="36" width="28" height="28" rx="4" />
          <rect x="36" y="36" width="28" height="28" rx="4" />
          <rect x="72" y="36" width="28" height="28" rx="4" />
          <rect x="0" y="72" width="28" height="28" rx="4" />
          <rect x="36" y="72" width="28" height="28" rx="4" />
          <rect x="72" y="72" width="28" height="28" rx="4" />
        </g>
        <g stroke={color} strokeWidth="1" strokeOpacity="0.5">
          <line x1="28" y1="14" x2="36" y2="14" />
          <line x1="64" y1="14" x2="72" y2="14" />
          <line x1="14" y1="28" x2="14" y2="36" />
          <line x1="50" y1="28" x2="50" y2="36" />
          <line x1="86" y1="28" x2="86" y2="36" />
          <line x1="28" y1="50" x2="36" y2="50" />
          <line x1="64" y1="50" x2="72" y2="50" />
          <line x1="14" y1="64" x2="14" y2="72" />
          <line x1="50" y1="64" x2="50" y2="72" />
          <line x1="86" y1="64" x2="86" y2="72" />
          <line x1="28" y1="86" x2="36" y2="86" />
          <line x1="64" y1="86" x2="72" y2="86" />
        </g>
        <rect
          x="36"
          y="36"
          width="28"
          height="28"
          rx="4"
          fill={color}
          fillOpacity="0.18"
        />
        <text
          x="50"
          y="115"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          9 svcs
        </text>
      </g>
    </svg>
  );
}

export function RemoteInnovationIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(60 70)">
        <circle
          r="44"
          fill="none"
          stroke="white"
          strokeOpacity="0.15"
          strokeDasharray="2 3"
        />
        <g stroke={color} strokeWidth="1" strokeOpacity="0.6">
          <line x1="0" y1="0" x2="-22" y2="-12" />
          <line x1="0" y1="0" x2="20" y2="-16" />
          <line x1="0" y1="0" x2="-18" y2="18" />
          <line x1="0" y1="0" x2="24" y2="10" />
          <line x1="0" y1="0" x2="0" y2="-26" />
          <line x1="-22" y1="-12" x2="0" y2="-26" />
          <line x1="20" y1="-16" x2="0" y2="-26" />
          <line x1="24" y1="10" x2="-18" y2="18" />
        </g>
        <g fill={color}>
          <circle r="4" />
          <circle cx="-22" cy="-12" r="3" />
          <circle cx="20" cy="-16" r="3" />
          <circle cx="-18" cy="18" r="3" />
          <circle cx="24" cy="10" r="3" />
          <circle cx="0" cy="-26" r="3" />
        </g>
        <text
          x="0"
          y="62"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          in-office
        </text>
      </g>
      <text
        x="150"
        y="78"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(240 70)">
        <g
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="2 3"
        >
          <line x1="-40" y1="-30" x2="40" y2="-26" />
          <line x1="-40" y1="-30" x2="-30" y2="30" />
          <line x1="40" y1="-26" x2="36" y2="28" />
          <line x1="-30" y1="30" x2="36" y2="28" />
          <line x1="-40" y1="-30" x2="0" y2="-2" />
          <line x1="40" y1="-26" x2="0" y2="-2" />
          <line x1="-30" y1="30" x2="0" y2="-2" />
          <line x1="36" y1="28" x2="0" y2="-2" />
        </g>
        <g fill={color}>
          <circle cx="-40" cy="-30" r="3" />
          <circle cx="40" cy="-26" r="3" />
          <circle cx="-30" cy="30" r="3" />
          <circle cx="36" cy="28" r="3" />
          <circle cx="0" cy="-2" r="3" />
        </g>
        <text
          x="0"
          y="62"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          remote
        </text>
      </g>
    </svg>
  );
}

export function UBIIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <line
        x1="20"
        y1="110"
        x2="280"
        y2="110"
        stroke="white"
        strokeOpacity="0.2"
      />
      <g fill={color} fillOpacity="0.85">
        <rect x="30" y="92" width="14" height="18" />
        <rect x="50" y="80" width="14" height="30" />
        <rect x="70" y="62" width="14" height="48" />
        <rect x="90" y="44" width="14" height="66" />
        <rect x="110" y="34" width="14" height="76" />
        <rect x="130" y="40" width="14" height="70" />
        <rect x="150" y="58" width="14" height="52" />
        <rect x="170" y="76" width="14" height="34" />
        <rect x="190" y="88" width="14" height="22" />
        <rect x="210" y="98" width="14" height="12" />
        <rect x="230" y="102" width="14" height="8" />
        <rect x="250" y="105" width="14" height="5" />
      </g>
      <line
        x1="117"
        y1="20"
        x2="117"
        y2="110"
        stroke="white"
        strokeOpacity="0.5"
        strokeDasharray="3 3"
      />
      <text
        x="120"
        y="26"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.7"
      >
        $1,000
      </text>
      <g stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M120 16 L240 16" />
        <polyline points="234 12 240 16 234 20" />
      </g>
      <text
        x="244"
        y="20"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.6"
      >
        shift?
      </text>
    </svg>
  );
}

export function TrolleyAIIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 20 300 140" width="100%" height="100%">
      <g transform="translate(150 28)">
        <rect
          x="-22"
          y="-10"
          width="44"
          height="20"
          rx="6"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
        />
        <rect
          x="-14"
          y="-6"
          width="28"
          height="9"
          rx="2"
          fill={color}
          fillOpacity="0.25"
        />
        <circle cx="-12" cy="10" r="3" fill={color} />
        <circle cx="12" cy="10" r="3" fill={color} />
      </g>
      <path
        d="M150 48 L60 120"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="14"
      />
      <path
        d="M150 48 L240 120"
        stroke="white"
        strokeOpacity="0.14"
        strokeWidth="14"
      />
      <path
        d="M150 48 L60 120"
        stroke={color}
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
      <path
        d="M150 48 L240 120"
        stroke={color}
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
      <g
        transform="translate(50 110)"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      >
        <circle cx="0" cy="-14" r="4" />
        <line x1="0" y1="-10" x2="0" y2="0" />
        <line x1="0" y1="-6" x2="-5" y2="-2" />
        <line x1="0" y1="-6" x2="5" y2="-2" />
        <line x1="0" y1="0" x2="-4" y2="8" />
        <line x1="0" y1="0" x2="4" y2="8" />
      </g>
      <g transform="translate(248 108)" stroke={color} strokeWidth="1.6">
        <line x1="-12" y1="0" x2="12" y2="0" />
        <line x1="-10" y1="0" x2="-14" y2="10" />
        <line x1="-4" y1="0" x2="-8" y2="10" />
        <line x1="2" y1="0" x2="-2" y2="10" />
        <line x1="8" y1="0" x2="4" y2="10" />
        <line x1="14" y1="0" x2="10" y2="10" />
      </g>
      <text
        x="50"
        y="134"
        textAnchor="middle"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        PEDESTRIAN
      </text>
      <text
        x="248"
        y="134"
        textAnchor="middle"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        BARRIER
      </text>
    </svg>
  );
}

export function ConsciousnessIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <rect
        x="50"
        y="22"
        width="160"
        height="96"
        rx="10"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <rect
        x="58"
        y="30"
        width="144"
        height="80"
        rx="6"
        fill={color}
        fillOpacity="0.07"
      />
      <g stroke={color} strokeOpacity="0.5" strokeWidth="0.8">
        <line x1="74" y1="50" x2="120" y2="55" />
        <line x1="74" y1="50" x2="120" y2="72" />
        <line x1="74" y1="50" x2="120" y2="89" />
        <line x1="74" y1="72" x2="120" y2="55" />
        <line x1="74" y1="72" x2="120" y2="72" />
        <line x1="74" y1="72" x2="120" y2="89" />
        <line x1="74" y1="94" x2="120" y2="55" />
        <line x1="74" y1="94" x2="120" y2="72" />
        <line x1="74" y1="94" x2="120" y2="89" />
        <line x1="120" y1="55" x2="180" y2="72" />
        <line x1="120" y1="72" x2="180" y2="72" />
        <line x1="120" y1="89" x2="180" y2="72" />
      </g>
      <g fill={color}>
        <circle cx="74" cy="50" r="2.5" />
        <circle cx="74" cy="72" r="2.5" />
        <circle cx="74" cy="94" r="2.5" />
        <circle cx="120" cy="55" r="2.5" />
        <circle cx="120" cy="72" r="2.5" />
        <circle cx="120" cy="89" r="2.5" />
        <circle cx="180" cy="72" r="3" />
      </g>
      <text
        x="221"
        y="88"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="49"
        fontWeight="400"
        letterSpacing="0.5"
        fill={color}
        fillOpacity="0.9"
      >
        ?
      </text>
      <text
        x="58"
        y="18"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        BLACK BOX
      </text>
      <text
        x="220"
        y="20"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        AWARE?
      </text>
    </svg>
  );
}

export function OpenSourceAIIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(150 78)">
        <rect
          x="-30"
          y="-22"
          width="60"
          height="44"
          rx="6"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
        />
        <rect
          x="-24"
          y="-16"
          width="48"
          height="32"
          rx="3"
          fill={color}
          fillOpacity="0.22"
        />
        <text
          x="0"
          y="3"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="10"
          fontWeight="400"
          fill="white"
          opacity="0.85"
        >
          WEIGHTS
        </text>
      </g>
      <g
        transform="translate(150 36)"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      >
        <path d="M-6 -2 A6 6 0 0 1 6 -2 L6 6 L-6 6 L-6 -2 Z M-6 -2 V-6" />
        <line x1="-11" y1="-9" x2="11" y2="1" strokeOpacity="0.85" />
      </g>
      <g
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeOpacity="0.65"
        strokeDasharray="2 3"
      >
        <path d="M118 62 L42 38" />
        <path d="M118 94 L42 110" />
        <path d="M182 62 L258 38" />
        <path d="M182 94 L258 110" />
      </g>
      <g fill={color}>
        <circle cx="32" cy="35" r="4" />
        <circle cx="32" cy="113" r="4" />
        <circle cx="268" cy="35" r="4" />
        <circle cx="268" cy="113" r="4" />
      </g>
      <text
        x="18"
        y="22"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        UNLOCKED
      </text>
      <text
        x="218"
        y="135"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.5"
      >
        → ANYONE
      </text>
    </svg>
  );
}

export function JuniorDevsIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(75 72)">
        <circle
          cx="0"
          cy="-22"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
        />
        <path
          d="M-20 24 Q-20 -2 0 -10 Q20 -2 20 24 Z"
          fill={color}
          fillOpacity="0.18"
          stroke={color}
          strokeWidth="1.6"
        />
        <text
          x="0"
          y="48"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          JR DEV
        </text>
      </g>
      <text
        x="150"
        y="80"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(225 72)">
        <line
          x1="0"
          y1="-44"
          x2="0"
          y2="-38"
          stroke={color}
          strokeWidth="1.4"
        />
        <circle cx="0" cy="-46" r="2" fill={color} />
        <rect
          x="-13"
          y="-38"
          width="26"
          height="22"
          rx="4"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
        />
        <circle cx="-5" cy="-28" r="2" fill={color} />
        <circle cx="5" cy="-28" r="2" fill={color} />
        <rect
          x="-16"
          y="-14"
          width="32"
          height="28"
          rx="3"
          fill={color}
          fillOpacity="0.18"
          stroke={color}
          strokeWidth="1.6"
        />
        <line x1="-9" y1="-6" x2="9" y2="-6" stroke={color} strokeWidth="1" />
        <line x1="-9" y1="0" x2="9" y2="0" stroke={color} strokeWidth="1" />
        <line x1="-9" y1="6" x2="5" y2="6" stroke={color} strokeWidth="1" />
        <text
          x="0"
          y="38"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          AI
        </text>
      </g>
      <text
        x="75"
        y="22"
        textAnchor="middle"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="10"
        fontWeight="400"
        fill="white"
        opacity="0.4"
      >
        {"</>"}
      </text>
      <text
        x="225"
        y="22"
        textAnchor="middle"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="10"
        fontWeight="400"
        fill="white"
        opacity="0.4"
      >
        {"</>"}
      </text>
    </svg>
  );
}

export function NuclearNetZeroIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(60 70)">
        <circle
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />
        <circle r="6" fill={color} />
        <g fill={color} fillOpacity="0.85">
          <path d="M0 -10 A26 26 0 0 1 22.5 13 L13 7.5 A15 15 0 0 0 0 0 Z" />
          <g transform="rotate(120)">
            <path d="M0 -10 A26 26 0 0 1 22.5 13 L13 7.5 A15 15 0 0 0 0 0 Z" />
          </g>
          <g transform="rotate(240)">
            <path d="M0 -10 A26 26 0 0 1 22.5 13 L13 7.5 A15 15 0 0 0 0 0 Z" />
          </g>
        </g>
        <text
          x="0"
          y="55"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          NUCLEAR
        </text>
      </g>
      <g stroke="white" strokeOpacity="0.4" strokeWidth="1.2" fill="none">
        <path d="M104 70 L132 70" />
        <polyline points="127 66 132 70 127 74" />
      </g>
      <g transform="translate(140 24)">
        <line
          x1="0"
          y1="86"
          x2="145"
          y2="86"
          stroke="white"
          strokeOpacity="0.2"
        />
        <line x1="0" y1="6" x2="0" y2="86" stroke="white" strokeOpacity="0.2" />
        <path
          d="M5 18 Q40 30 75 56 T145 84"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="5" cy="18" r="3" fill={color} />
        <circle
          cx="145"
          cy="84"
          r="4"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <line
          x1="0"
          y1="84"
          x2="145"
          y2="84"
          stroke={color}
          strokeOpacity="0.3"
          strokeDasharray="2 3"
        />
        <text
          x="8"
          y="14"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          CO₂
        </text>
        <text
          x="120"
          y="100"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          2050
        </text>
      </g>
    </svg>
  );
}

export function CryptoBankingIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g
        transform="translate(70 72)"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
      >
        <polygon
          points="-32,-14 32,-14 0,-30"
          strokeLinejoin="round"
          fill={color}
          fillOpacity="0.18"
        />
        <line x1="-24" y1="-14" x2="-24" y2="22" />
        <line x1="-10" y1="-14" x2="-10" y2="22" />
        <line x1="10" y1="-14" x2="10" y2="22" />
        <line x1="24" y1="-14" x2="24" y2="22" />
        <line x1="-32" y1="22" x2="32" y2="22" />
        <line x1="-36" y1="28" x2="36" y2="28" />
        <text
          x="0"
          y="46"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
          stroke="none"
        >
          BANK
        </text>
      </g>
      <text
        x="150"
        y="78"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(230 72)">
        <g stroke={color} strokeWidth="1" strokeOpacity="0.55">
          <line x1="-26" y1="-22" x2="26" y2="-22" />
          <line x1="26" y1="-22" x2="32" y2="14" />
          <line x1="32" y1="14" x2="0" y2="28" />
          <line x1="0" y1="28" x2="-32" y2="14" />
          <line x1="-32" y1="14" x2="-26" y2="-22" />
          <line x1="-26" y1="-22" x2="32" y2="14" />
          <line x1="26" y1="-22" x2="-32" y2="14" />
          <line x1="-26" y1="-22" x2="0" y2="28" />
          <line x1="26" y1="-22" x2="0" y2="28" />
        </g>
        <g fill={color}>
          <circle cx="-26" cy="-22" r="4" />
          <circle cx="26" cy="-22" r="4" />
          <circle cx="32" cy="14" r="4" />
          <circle cx="-32" cy="14" r="4" />
          <circle cx="0" cy="28" r="4" />
        </g>
        <text
          x="0"
          y="46"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          CRYPTO
        </text>
      </g>
    </svg>
  );
}

export function RustGoIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(78 84)">
        <path
          d="M-32 0 A32 32 0 0 1 32 0"
          fill="none"
          stroke="white"
          strokeOpacity="0.18"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-32 0 A32 32 0 0 1 26 -19"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="22"
          y2="-19"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle r="3.5" fill={color} />
        <text
          x="0"
          y="22"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          fontSize="14"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          RUST
        </text>
        <text
          x="0"
          y="-40"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          110k rps
        </text>
      </g>
      <text
        x="150"
        y="84"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(222 84)">
        <path
          d="M-32 0 A32 32 0 0 1 32 0"
          fill="none"
          stroke="white"
          strokeOpacity="0.18"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-32 0 A32 32 0 0 1 18 -26"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="0"
          x2="14"
          y2="-22"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle r="3.5" fill={color} />
        <text
          x="0"
          y="22"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="14"
          fontWeight="400"
          fill="white"
          opacity="0.5"
        >
          GO
        </text>
        <text
          x="0"
          y="-40"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          88k rps
        </text>
      </g>
    </svg>
  );
}

export function SQLGraphIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g
        transform="translate(20 30)"
        stroke={color}
        strokeWidth="1.4"
        fill="none"
      >
        <rect x="0" y="0" width="100" height="80" rx="3" />
        <rect
          x="0"
          y="0"
          width="100"
          height="18"
          fill={color}
          fillOpacity="0.25"
          stroke="none"
        />
        <line x1="0" y1="18" x2="100" y2="18" />
        <line x1="0" y1="38" x2="100" y2="38" />
        <line x1="0" y1="58" x2="100" y2="58" />
        <line x1="33" y1="0" x2="33" y2="80" />
        <line x1="66" y1="0" x2="66" y2="80" />
      </g>
      <text
        x="72"
        y="135"
        textAnchor="middle"
        className="font-body lowercase font-normal mt"
        letterSpacing="0.5"
        fontSize="15"
        fontWeight="400"
        fill="white"
        opacity="0.55"
      >
        RELATIONAL
      </text>
      <text
        x="150"
        y="78"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(230 68)">
        <g stroke={color} strokeWidth="1.2" strokeOpacity="0.55">
          <line x1="0" y1="-28" x2="-26" y2="-8" />
          <line x1="0" y1="-28" x2="26" y2="-8" />
          <line x1="-26" y1="-8" x2="-14" y2="20" />
          <line x1="26" y1="-8" x2="14" y2="20" />
          <line x1="-14" y1="20" x2="14" y2="20" />
          <line x1="0" y1="-28" x2="0" y2="6" />
          <line x1="-26" y1="-8" x2="0" y2="6" />
          <line x1="26" y1="-8" x2="0" y2="6" />
        </g>
        <g fill={color}>
          <circle cx="0" cy="-28" r="4" />
          <circle cx="-26" cy="-8" r="3.5" />
          <circle cx="26" cy="-8" r="3.5" />
          <circle cx="0" cy="6" r="3.5" />
          <circle cx="-14" cy="20" r="3.5" />
          <circle cx="14" cy="20" r="3.5" />
        </g>
        <text
          x="0"
          y="57"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          GRAPH
        </text>
      </g>
    </svg>
  );
}

export function FinetuningRAGIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(75 72)">
        <circle r="32" fill="none" stroke={color} strokeWidth="1.6" />
        <circle
          r="22"
          fill={color}
          fillOpacity="0.15"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <g stroke={color} strokeOpacity="0.5" strokeWidth="1">
          {[0, 45, 90, 135, -45, -90, -135].map((deg, i) => (
            <line
              key={i}
              x1="0"
              y1="-33"
              x2="0"
              y2="-38"
              transform={`rotate(${deg})`}
            />
          ))}
        </g>
        <g transform="rotate(40)">
          <line
            x1="0"
            y1="-3"
            x2="0"
            y2="-22"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
        <circle r="3" fill={color} />
        <text
          x="0"
          y="50"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="1"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          FINE-TUNE
        </text>
      </g>
      <text
        x="150"
        y="80"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(220 72)">
        <g stroke={color} strokeWidth="1.3" fill="none">
          <rect
            x="-34"
            y="-28"
            width="22"
            height="28"
            rx="2"
            fill={color}
            fillOpacity="0.08"
          />
          <rect
            x="-24"
            y="-24"
            width="22"
            height="28"
            rx="2"
            fill={color}
            fillOpacity="0.12"
          />
          <rect
            x="-14"
            y="-20"
            width="22"
            height="28"
            rx="2"
            fill={color}
            fillOpacity="0.2"
          />
          <line x1="-10" y1="-14" x2="4" y2="-14" strokeOpacity="0.6" />
          <line x1="-10" y1="-8" x2="4" y2="-8" strokeOpacity="0.6" />
          <line x1="-10" y1="-2" x2="0" y2="-2" strokeOpacity="0.6" />
        </g>
        <g stroke={color} strokeWidth="1.5" fill="none">
          <path d="M14 -6 L30 -6" />
          <polyline points="26 -9 30 -6 26 -3" />
        </g>
        <rect
          x="30"
          y="-16"
          width="18"
          height="22"
          rx="3"
          fill={color}
          fillOpacity="0.32"
          stroke={color}
          strokeWidth="1.4"
        />
        <text
          x="0"
          y="34"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          RAG
        </text>
      </g>
    </svg>
  );
}

export function FourDayWeekIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(28 50)">
        <g stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.2">
          <rect x="0" y="0" width="16" height="44" rx="2" />
          <rect x="20" y="0" width="16" height="44" rx="2" />
          <rect x="40" y="0" width="16" height="44" rx="2" />
          <rect x="60" y="0" width="16" height="44" rx="2" />
          <rect x="80" y="0" width="16" height="44" rx="2" />
        </g>
        <text
          x="48"
          y="60"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          5 DAYS
        </text>
      </g>
      <text
        x="150"
        y="74"
        textAnchor="middle"
        fontFamily="Instrument Serif"
        fontStyle="italic"
        fontSize="23"
        fontWeight="400"
        letterSpacing="0.5"
        fill="white"
        opacity="0.5"
      >
        vs
      </text>
      <g transform="translate(180 50)">
        <g stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.4">
          <rect x="0" y="0" width="16" height="44" rx="2" />
          <rect x="20" y="0" width="16" height="44" rx="2" />
          <rect x="40" y="0" width="16" height="44" rx="2" />
          <rect x="60" y="0" width="16" height="44" rx="2" />
        </g>
        <rect
          x="80"
          y="0"
          width="16"
          height="44"
          rx="2"
          fill="none"
          stroke="white"
          strokeOpacity="0.22"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />
        <text
          x="48"
          y="60"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          4 DAYS
        </text>
      </g>
      <g>
        <path
          d="M28 26 Q150 18 272 22"
          fill="none"
          stroke={color}
          strokeWidth="1.3"
          strokeDasharray="2 3"
          strokeOpacity="0.7"
        />
        <circle cx="76" cy="22" r="2" fill={color} opacity="0.8" />
        <circle cx="228" cy="20" r="2.5" fill={color} />
        <text
          x="118"
          y="14"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          PRODUCTIVITY ↑
        </text>
      </g>
    </svg>
  );
}

export function SocialMediaDemocracyIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(70 56)">
        <path
          d="M-22 -14 H22 A4 4 0 0 1 26 -10 V8 A4 4 0 0 1 22 12 H-10 L-18 22 L-16 12 H-22 A4 4 0 0 1 -26 8 V-10 A4 4 0 0 1 -22 -14 Z"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="1.5"
        />
        <circle cx="-8" cy="0" r="2" fill={color} />
        <circle cx="0" cy="0" r="2" fill={color} />
        <circle cx="8" cy="0" r="2" fill={color} />
        <text
          x="0"
          y="42"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          FEED
        </text>
      </g>
      <g
        stroke={color}
        strokeWidth="1.1"
        fill="none"
        strokeOpacity="0.65"
        strokeDasharray="2 3"
      >
        <path d="M112 38 L168 28" />
        <path d="M112 56 L168 56" />
        <path d="M112 70 L168 84" />
      </g>
      <g fill={color} fillOpacity="0.85">
        <circle cx="174" cy="28" r="5" />
        <circle cx="174" cy="56" r="5" />
        <circle cx="174" cy="84" r="5" />
        <circle cx="202" cy="42" r="3" />
        <circle cx="208" cy="70" r="3" />
        <circle cx="202" cy="96" r="3" />
      </g>
      <g
        transform="translate(258 76)"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      >
        <rect
          x="-20"
          y="-12"
          width="40"
          height="30"
          rx="2"
          fill={color}
          fillOpacity="0.18"
        />
        <line x1="-10" y1="-12" x2="10" y2="-12" strokeWidth="3" />
        <line x1="-8" y1="-18" x2="8" y2="-18" />
        <text
          x="0"
          y="8"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="12"
          fontWeight="400"
          fill="white"
          opacity="0.9"
          stroke="none"
        >
          ✓
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
          stroke="none"
        >
          VOTE
        </text>
      </g>
    </svg>
  );
}

export function CollegeROIIllustration({ color }: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 140" width="100%" height="100%">
      <g transform="translate(58 58)">
        <polygon
          points="-28,-2 0,-14 28,-2 0,10"
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="1.5"
        />
        <line x1="0" y1="10" x2="0" y2="22" stroke={color} strokeWidth="1.4" />
        <path
          d="M-13 6 V18 Q0 24 13 18 V6"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
        />
        <circle cx="0" cy="24" r="2" fill={color} />
        <text
          x="0"
          y="46"
          textAnchor="middle"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          4-YR CS
        </text>
      </g>
      <g transform="translate(120 18)">
        <line
          x1="0"
          y1="92"
          x2="160"
          y2="92"
          stroke="white"
          strokeOpacity="0.2"
        />
        <line
          x1="0"
          y1="92"
          x2="0"
          y2="14"
          stroke="white"
          strokeOpacity="0.2"
        />
        <path
          d="M0 70 L20 88 Q40 86 60 68 Q90 42 120 24 L158 18"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M0 58 Q60 50 158 42"
          fill="none"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <circle cx="20" cy="88" r="3" fill={color} />
        <circle cx="158" cy="18" r="4" fill={color} />
        <text
          x="24"
          y="102"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.55"
        >
          DEBT
        </text>
        <text
          x="130"
          y="14"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.6"
        >
          $$$
        </text>
        <text
          x="64"
          y="46"
          className="font-body lowercase font-normal mt"
          letterSpacing="0.5"
          fontSize="15"
          fontWeight="400"
          fill="white"
          opacity="0.45"
        >
          self-taught
        </text>
      </g>
    </svg>
  );
}

export const QUESTION_ILLUSTRATIONS: Record<
  string,
  (props: IllustrationProps) => JSX.Element
> = {
  microservices: MicroservicesIllustration,
  "remote-innovation": RemoteInnovationIllustration,
  ubi: UBIIllustration,
  "trolley-ai": TrolleyAIIllustration,
  consciousness: ConsciousnessIllustration,
  "open-source-ai": OpenSourceAIIllustration,
  "junior-devs": JuniorDevsIllustration,
  "nuclear-net-zero": NuclearNetZeroIllustration,
  "crypto-mainstream": CryptoBankingIllustration,
  "rust-go": RustGoIllustration,
  "sql-nosql": SQLGraphIllustration,
  "llm-finetuning": FinetuningRAGIllustration,
  "four-day-week": FourDayWeekIllustration,
  "social-media-democracy": SocialMediaDemocracyIllustration,
  "college-roi": CollegeROIIllustration,
};
