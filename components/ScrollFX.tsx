"use client";
import { useEffect } from "react";

// Faz os blocos das seções entrarem suavemente ao rolar (fade, subida e imagens que se revelam).
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const grupos = new Map<Element, HTMLElement[]>(); // elemento observado -> blocos que ele libera
    document.querySelectorAll("main > section:not(:first-child)").forEach((sec) => {
      sec.querySelectorAll<HTMLElement>("[role=img], h2, h3, p, dl, iframe, figure, blockquote, a.inline-block, a.block").forEach((el) => {
        const imagem = el.getAttribute("role") === "img";
        const alvo = imagem ? (el.parentElement as HTMLElement) : el;
        if (alvo.parentElement?.closest(".reveal, .reveal-img")) return;
        alvo.classList.add(imagem ? "reveal-img" : "reveal");
        // Foto recortada (clip-path) não dispara o observer: quem observa é o bloco pai dela.
        const obs = imagem ? (alvo.parentElement as HTMLElement) : alvo;
        grupos.set(obs, [...(grupos.get(obs) ?? []), alvo]);
      });
    });
    const io = new IntersectionObserver((entradas) => {
      let i = 0;
      entradas.filter((e) => e.isIntersecting).forEach((e) => {
        io.unobserve(e.target);
        (grupos.get(e.target) ?? []).forEach((el) => {
          el.style.transitionDelay = `${Math.min(i++ * 90, 360)}ms`;
          el.classList.add("is-in");
          // devolve os estilos originais (hover etc.) depois da animação
          setTimeout(() => { el.classList.remove("reveal", "reveal-img", "is-in"); el.style.transitionDelay = ""; }, 2400);
        });
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    grupos.forEach((_, el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  // Links internos (#sobre etc.) rolam suavemente sem escrever o #seção na barra de endereço.
  useEffect(() => {
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    const aoClicar = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest("a[href^='#']");
      if (!a) return;
      const id = (a.getAttribute("href") as string).slice(1);
      const alvo = id ? document.getElementById(id) : null;
      if (id && !alvo) return;
      e.preventDefault();
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(alvo ?? 0, { duration: 1.3 }); // o desconto do header vem do scroll-padding-top do CSS
      else if (alvo) alvo.scrollIntoView({ behavior, block: "start" });
      else window.scrollTo({ top: 0, behavior });
    };
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);
  return null;
}
