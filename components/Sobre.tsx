import { CRO } from "@/lib/config";

export default function Sobre() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:gap-14 md:py-24 md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-prata-100 md:max-w-none">
        <div role="img" aria-label="Dra. Camila Andrade de jaleco, sentada em uma cadeira branca"
             className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/sobre.jpg')", backgroundPosition: "center 30%" }} />
      </div>

      <div>
        <h2 className="max-w-[16ch] font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Planejamento, individualidade e ciência.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-prata-500">
          Cada paciente é planejado de forma personalizada, com foco em previsibilidade e excelência. Atendo em clínica geral,
          estética dental e odontologia do esporte, sempre com prevenção e saúde como ponto de partida.
        </p>
        <blockquote className="mt-10 max-w-lg border-l-2 border-taupe pl-6 font-serif text-2xl leading-snug">
          Não é só estética. É saúde, cuidado e escolhas diárias que fazem seu sorriso envelhecer bem.
        </blockquote>
        <p className="mt-8 text-sm text-prata-500">Dra. Camila Andrade, cirurgiã-dentista, {CRO}</p>
      </div>
    </section>
  );
}
