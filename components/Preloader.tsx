"use client";
import { useEffect, useRef } from "react";

// Abertura curta: a logo aparece, um sorriso é desenhado e a cortina sobe.
// Enquanto ela roda, a rolagem da página fica travada.
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (getComputedStyle(el).visibility === "hidden") return; // a cortina já terminou

    const html = document.documentElement;
    const trava = (on: boolean) => {
      html.style.overflow = on ? "hidden" : "";
      html.style.scrollbarGutter = on ? "stable" : ""; // evita o "pulo" quando a barra de rolagem some
      document.body.style.overflow = on ? "hidden" : "";
    };
    trava(true);

    const fim = (e: AnimationEvent) => { if (e.animationName === "cortina") trava(false); };
    el.addEventListener("animationend", fim);
    const seguranca = setTimeout(() => trava(false), 3000); // garante o destravamento

    return () => { el.removeEventListener("animationend", fim); clearTimeout(seguranca); trava(false); };
  }, []);

  return (
    <div ref={ref} className="pre fixed inset-0 z-[100] grid touch-none place-items-center bg-grafite" aria-hidden="true">
      <div className="flex flex-col items-center gap-6">
        <img src="/images/logo-ca.png" alt="" className="pre-logo h-24 w-auto" />
        <svg width="160" height="40" viewBox="0 0 160 40" fill="none">
          <path className="pre-sorriso" d="M10 8 Q80 44 150 8" stroke="#c4a574" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
