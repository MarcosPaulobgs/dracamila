"use client";
import { useEffect, useRef } from "react";

// Garante o autoplay no celular (iOS e Android exigem vídeo mudo e inline).
export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (v) { v.muted = true; v.play().catch(() => {}); }
  }, []);
  return (
    <video ref={ref} src={src} autoPlay muted loop playsInline preload="auto" aria-hidden="true"
           className="hero-video absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] max-w-none object-cover blur-[2px] transform-gpu" />
  );
}
