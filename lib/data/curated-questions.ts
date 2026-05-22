export type QuestionCategory =
  | "strategy"
  | "ethics"
  | "prediction"
  | "technical"
  | "analysis";

export interface CuratedQuestion {
  id: string;
  question: string;
  label: string;
  category: QuestionCategory;
  difficulty: "moderate" | "hard" | "genuinely-uncertain";
  whyInteresting: string;
}

export const CATEGORIES: Record<
  QuestionCategory,
  { label: string; description: string }
> = {
  strategy: {
    label: "Strategy",
    description: "Business & organizational decisions",
  },
  ethics: {
    label: "Ethics",
    description: "Moral reasoning & value conflicts",
  },
  prediction: {
    label: "Prediction",
    description: "Forecasting uncertain futures",
  },
  technical: {
    label: "Technical",
    description: "Engineering & architecture choices",
  },
  analysis: {
    label: "Analysis",
    description: "Evaluating complex systems and claims",
  },
};

export const DOMAIN_COLORS: Record<
  QuestionCategory,
  {
    accent: string;
    accentMuted: string;
    accentSubtle: string;
    border: string;
  }
> = {
  strategy: {
    accent: "oklch(0.68 0.14 240)", // Steel blue
    accentMuted: "oklch(0.68 0.14 240 / 0.15)",
    accentSubtle: "oklch(0.68 0.14 240 / 0.06)",
    border: "oklch(0.68 0.14 240 / 0.25)",
  },
  ethics: {
    accent: "oklch(0.75 0.14 55)", // Warm amber
    accentMuted: "oklch(0.75 0.14 55 / 0.15)",
    accentSubtle: "oklch(0.75 0.14 55 / 0.06)",
    border: "oklch(0.75 0.14 55 / 0.25)",
  },
  prediction: {
    accent: "oklch(0.70 0.15 300)", // Violet
    accentMuted: "oklch(0.70 0.15 300 / 0.15)",
    accentSubtle: "oklch(0.70 0.15 300 / 0.06)",
    border: "oklch(0.70 0.15 300 / 0.25)",
  },
  technical: {
    accent: "oklch(0.72 0.15 165)", // Teal
    accentMuted: "oklch(0.72 0.15 165 / 0.15)",
    accentSubtle: "oklch(0.72 0.15 165 / 0.06)",
    border: "oklch(0.72 0.15 165 / 0.25)",
  },
  analysis: {
    accent: "oklch(0.70 0.14 350)", // Rose
    accentMuted: "oklch(0.70 0.14 350 / 0.15)",
    accentSubtle: "oklch(0.70 0.14 350 / 0.06)",
    border: "oklch(0.70 0.14 350 / 0.25)",
  },
};

export const CURATED_QUESTIONS: CuratedQuestion[] = [
  //strategy
  {
    id: "microservices",
    question:
      "Should a 6-person startup with a single product and $2M in runway adopt microservices or stay monolithic?",
    label: "Micro vs Monolith",
    category: "strategy",
    difficulty: "moderate",
    whyInteresting:
      "Has clear decomposable sub-questions but also value judgments that chains may disagree on.",
  },
  {
    id: "remote-innovation",
    question:
      "Does fully remote work decrease a company's rate of breakthrough innovation compared to in-office work?",
    label: "Remote vs Innovation",
    category: "strategy",
    difficulty: "hard",
    whyInteresting:
      "Has empirical sub-questions and value judgments. Verification will catch claims about studies.",
  },
  {
    id: "ubi",
    question:
      "Would implementing universal basic income of $1,000/month in the United States reduce or increase total employment?",
    label: "UBI & Employment",
    category: "strategy",
    difficulty: "hard",
    whyInteresting:
      "Has both empirical claims and theoretical claims. Verification can check the empirical ones.",
  },
  //ethics
  {
    id: "trolley-ai",
    question:
      "If an autonomous vehicle must choose between hitting one elderly pedestrian or swerving into a barrier that would injure its three passengers, what should it do?",
    label: "Autonomous Vehicles",
    category: "ethics",
    difficulty: "genuinely-uncertain",
    whyInteresting:
      "Ethical reasoning that resists decomposition. Self-consistency will show how different ethical frameworks lead to different answers.",
  },
  {
    id: "consciousness",
    question:
      "Could a sufficiently advanced large language model be conscious, and how would we know?",
    label: "LLM Consciousness",
    category: "ethics",
    difficulty: "genuinely-uncertain",
    whyInteresting:
      "Tests limits of all techniques. Triangulation will produce honest large gaps. Beautiful failure showcase.",
  },
  {
    id: "open-source-ai",
    question:
      "Should frontier AI models be open-sourced, given both the democratization benefits and the potential misuse risks?",
    label: "Open Source AI",
    category: "ethics",
    difficulty: "hard",
    whyInteresting:
      "Value conflict with defensible positions on both sides. Techniques will reach different conclusions.",
  },
  //prediction
  {
    id: "junior-devs",
    question:
      "Will AI coding assistants make junior developer roles obsolete within 5 years?",
    label: "AI vs Junior Devs",
    category: "prediction",
    difficulty: "genuinely-uncertain",
    whyInteresting:
      "Genuinely uncertain. Self-consistency will show high divergence. Triangulation will produce large gaps.",
  },
  {
    id: "nuclear-net-zero",
    question:
      "Is investing in new nuclear power plants the most effective path to achieving net-zero emissions by 2050?",
    label: "Nuclear for Net Zero",
    category: "prediction",
    difficulty: "hard",
    whyInteresting:
      "Multi-faceted: economic, technical, political, timeline factors. Each technique highlights different aspects.",
  },
  {
    id: "crypto-mainstream",
    question:
      "Will cryptocurrency replace or significantly displace traditional banking for everyday transactions within a decade?",
    label: "Crypto vs Banking",
    category: "prediction",
    difficulty: "hard",
    whyInteresting:
      "Requires predicting regulatory, technical, and social factors. Chains will diverge on which factors dominate.",
  },
  //technical
  {
    id: "rust-go",
    question:
      "For a new high-traffic web API expected to handle 100k requests/second, should a team of 4 mid-level engineers choose Rust or Go?",
    label: "Rust vs Go",
    category: "technical",
    difficulty: "moderate",
    whyInteresting:
      "Technical with clear decomposable criteria but subjective weighting. Forward/backward may derive different priorities.",
  },
  {
    id: "sql-nosql",
    question:
      "For a social platform expecting 10 million users with complex social graphs, should the team use PostgreSQL or a graph database like Neo4j?",
    label: "SQL vs Graph DB",
    category: "technical",
    difficulty: "moderate",
    whyInteresting:
      "Has verifiable technical claims and judgment calls. Verification will challenge performance assumptions.",
  },
  {
    id: "llm-finetuning",
    question:
      "For a company wanting to build a customer support chatbot, is fine-tuning a smaller model better than using a large foundation model with RAG?",
    label: "Fine-tuning vs RAG",
    category: "technical",
    difficulty: "hard",
    whyInteresting:
      "Depends on unstated factors. Least-to-Most will reveal the hidden sub-questions. Techniques may disagree on defaults.",
  },
  //analysis
  {
    id: "four-day-week",
    question:
      "Does a 4-day work week improve or decrease overall team productivity in software engineering teams?",
    label: "4-Day Work Week",
    category: "analysis",
    difficulty: "moderate",
    whyInteresting:
      "Has empirical data to verify but also depends on how productivity is measured. Good verification target.",
  },
  {
    id: "social-media-democracy",
    question:
      "Has social media been a net positive or net negative for democratic institutions over the past decade?",
    label: "Social Media & Democracy",
    category: "analysis",
    difficulty: "hard",
    whyInteresting:
      "Requires synthesizing political science, sociology, and empirical data. Skeptic will find many weak assumptions.",
  },
  {
    id: "college-roi",
    question:
      "For a high-achieving 18-year-old in the US interested in software engineering, is a 4-year computer science degree still worth the cost?",
    label: "CS Degree ROI",
    category: "analysis",
    difficulty: "moderate",
    whyInteresting:
      "Personal decision framed as analysis. Decomposition will reveal hidden sub-questions about individual circumstances.",
  },
];

export function getQuestionsByCategory(
  category: QuestionCategory,
): CuratedQuestion[] {
  return CURATED_QUESTIONS.filter((q) => q.category === category);
}
