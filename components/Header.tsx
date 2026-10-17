"use client";
import { useState } from "react";
import { waLink } from "@/lib/config";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-prata-300/40 bg-base/95 transform-gpu">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight sm:gap-3 sm:text-xl">
          <img src="/images/logo-ca.png" alt="" className="h-8 w-auto sm:h-9" />
          Dra. Camila Andrade
        </a>

        <nav className="hidden items-center gap-8 text-[0.95rem] md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-medium text-grafite/85 underline-offset-8 transition-colors hover:text-grafite hover:underline hover:decoration-taupe">{l.label}</a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-grafite px-5 py-2 text-base text-white transition-colors hover:bg-[#2b262c]">
            Agendar avaliação
          </a>
        </nav>

        <button className="-mr-2 p-3 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-movel" aria-label="Abrir menu">
          <span className="block h-0.5 w-6 bg-grafite" />
          <span className="mt-1.5 block h-0.5 w-6 bg-grafite" />
        </button>
      </div>

      {open && (
        <nav id="menu-movel" className="border-t border-prata-300/40 bg-base px-5 py-4 md:hidden" aria-label="Menu móvel">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-grafite">{l.label}</a>
          ))}
          <a href={waLink()} className="mt-2 block rounded-full bg-grafite py-3 text-center text-white">Agendar avaliação</a>
        </nav>
      )}
    </header>
  );
}
