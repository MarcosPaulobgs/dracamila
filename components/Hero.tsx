import { waLink, CRO, HERO_VIDEO, HERO_POSTER } from "@/lib/config";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden md:items-center">
      {/* Fundo: foto (aparece se o vídeo faltar ou com "reduzir movimento"), vídeo por cima e véu escuro para o texto ler bem */}
      <div className="absolute inset-0 -z-10 bg-grafite">
        <div className="absolute -inset-4 bg-cover blur-[3px] will-change-transform" style={{ backgroundImage: `url('${HERO_POSTER}')`, backgroundPosition: "center 20%" }} />
        <HeroVideo src={HERO_VIDEO} />
        <div className="absolute inset-0 bg-grafite/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafite/90 via-grafite/55 to-grafite/30 md:bg-gradient-to-r md:from-grafite/85 md:via-grafite/55 md:to-grafite/15" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-28 md:pb-16">
        <p className="mb-5 max-w-sm text-sm text-prata-100/90 sm:max-w-none">Clínica geral, estética dental e odontologia do esporte</p>
        <h1 className="max-w-[14ch] font-serif text-[2.75rem] font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Sorrisos bem cuidados são construídos.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-prata-100/90">
          Atendimento próximo e planejado para o seu sorriso, com a Dra. Camila Andrade, em Salvador.
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-9 sm:flex-row sm:items-center">
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="rounded-full bg-white px-7 py-3.5 text-center text-grafite transition-colors hover:bg-champagne">
            Agendar avaliação
          </a>
          <a href="#servicos" className="self-center border-b border-taupe py-2 text-white transition-colors hover:text-champagne sm:self-auto">Ver serviços</a>
        </div>
        <p className="mt-8 text-sm text-prata-300 sm:mt-10">{CRO}</p>
      </div>
    </section>
  );
}
