"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// Rolagem suave com inércia no site inteiro (mouse e trackpad).
// No celular a rolagem continua nativa.
// O tipo de window.__lenis fica em lenis-global.d.ts.

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Só PC (mouse e trackpad). No celular o toque fica 100% nativo, sem interferência.
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true, syncTouch: false, autoRaf: true });
    window.__lenis = lenis;

    // Durante a abertura (Preloader) a página está travada: o Lenis espera ela terminar.
    const html = document.documentElement;
    const travada = () => html.style.overflow === "hidden";
    if (travada()) {
      lenis.stop();
      const mo = new MutationObserver(() => { if (!travada()) { lenis.start(); mo.disconnect(); } });
      mo.observe(html, { attributes: true, attributeFilter: ["style"] });
      setTimeout(() => { mo.disconnect(); lenis.start(); }, 4000); // segurança
    }

    return () => { lenis.destroy(); delete window.__lenis; };
  }, []);
  return null;
}
