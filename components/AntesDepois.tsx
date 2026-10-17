"use client";
import { useState } from "react";

function Camada({ src, label, lado, tom }: { src: string; label: string; lado: string; tom: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${tom}`}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
      <span className={`absolute top-4 rounded-full bg-grafite/70 px-3 py-1 text-sm text-white ${lado}`}>{label}</span>
    </div>
  );
}

export default function AntesDepois({ antes, depois, titulo }: { antes: string; depois: string; titulo: string }) {
  const [v, setV] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-3xl bg-prata-300 focus-within:ring-2 focus-within:ring-taupe">
        <Camada src={depois} label="Depois" lado="right-4" tom="from-prata-100 to-champagne" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}>
          <Camada src={antes} label="Antes" lado="left-4" tom="from-prata-500 to-prata-300" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${v}%` }} />
        <div className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-grafite shadow-md" style={{ left: `${v}%` }} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
        </div>
        <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))}
               aria-label={`Comparar antes e depois: ${titulo}`}
               className="absolute inset-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0" />
      </div>
      <figcaption className="mt-3 text-sm text-prata-500">{titulo}, arraste para comparar</figcaption>
    </figure>
  );
}
