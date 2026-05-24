"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-14 transition-all duration-300 border-b ${scrolled ? "bg-[oklch(0.13_0.015_250/0.85)] backdrop-blur-md border-(--border-active)" : "bg-transparent border-transparent"}`}>
      <Link href="/" className="text-base text-white/80 font-[Homemade_Apple] tracking-wider font-semibold">
        Cartographer
      </Link>
    </header>
  );
}
