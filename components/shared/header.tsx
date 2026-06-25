"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { usePaletteStore } from "@/stores/ui-store";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const togglePalette = usePaletteStore((s) => s.toggle);

  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | Document;
      const top =
        target === document || target === document.documentElement
          ? window.scrollY
          : (target as HTMLElement).scrollTop;
      setScrolled(top > 10);
    };
    document.addEventListener("scroll", handler, {
      passive: true,
      capture: true,
    });
    return () =>
      document.removeEventListener("scroll", handler, { capture: true });
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center px-5 h-10 gap-4 transition-all duration-300 border-b border-border ${
        scrolled ? "backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        <Link
          href="/"
          className="text-[14px] text-pink-300 font-[Homemade_Apple] tracking-widest leading-none shrink-0"
        >
          Cartographer
        </Link>
      </div>

      <div className="justify-self-center">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={togglePalette}
          className="flex items-center gap-1.5 text-[10px] font-mono text-foreground/30 border border-border px-2 py-1 hover:text-foreground/60 hover:border-border-active transition-colors duration-150"
        >
          <span className="uppercase tracking-widest ml-0.5">search</span>
        </motion.button>
      </div>
    </header>
  );
}
