import { waLink } from "@/lib/config";

// Textos sugeridos: confirme com a Dra. Camila e ajuste aqui.
const servicos = [
  {
    titulo: "Estética dental e clareamento",
    texto: "Clareamento e procedimentos estéticos planejados caso a caso, para um sorriso bonito que respeita a saúde dos seus dentes.",
    foto: "/images/clareamento.jpg", pos: "center 60%",
    alt: "Close dos lábios e dos dentes de uma paciente sorrindo",
  },
  {
    titulo: "Odontologia do esporte",
    texto: "Cuidado com a saúde bucal de quem treina, para proteger seu sorriso e manter o desempenho em dia.",
    foto: "/images/odonto-esporte.jpg", pos: "center 25%",
    alt: "Dra. Camila Andrade sorrindo durante uma aula de ginástica em grupo",
  },
  {
    titulo: "Diagnóstico que você enxerga",
    texto: "Imagens ampliadas feitas com câmera intraoral mostram o que está acontecendo e ajudam você a entender o motivo de cada tratamento.",
    foto: "/images/consulta.jpg", pos: "center 40%",
    alt: "Dra. Camila apontando um dente ampliado na tela de um tablet",
  },
];

const procedimentos = [
  "Profilaxia dentária (limpeza profissional)", "Restaurações", "Clareamento dental", "Extrações dentárias",
  "Atendimento infantil", "Urgência odontológica (dor de dente)", "Tratamento de canal", "Implantes",
  "Próteses dentárias", "Placa de bruxismo", "Odontologia do esporte",
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-prata-100/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-[18ch] font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Do check-up ao sorriso dos sonhos.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-prata-500">
          Clínica geral e prevenção são a base de todo tratamento. A partir de uma avaliação completa, você escolhe o cuidado certo para o seu momento.
        </p>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {servicos.map((s, i) => (
            <article key={s.titulo} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-prata-300 ${i % 2 ? "md:order-2" : ""}`}>
                <div role="img" aria-label={s.alt} className="absolute inset-0 bg-cover"
                     style={{ backgroundImage: `url('${s.foto}')`, backgroundPosition: s.pos }} />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">{s.titulo}</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-prata-500">{s.texto}</p>
                <a href={waLink(`Olá, Dra. Camila! Gostaria de saber mais sobre ${s.titulo.toLowerCase()}.`)}
                   target="_blank" rel="noopener noreferrer"
                   className="mt-5 inline-block border-b border-taupe py-2 transition-colors hover:text-taupe">
                  Agendar avaliação
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-prata-300/60 pt-10">
          <h3 className="font-serif text-3xl font-medium sm:text-4xl">Procedimentos</h3>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {procedimentos.map((p) => (
              <li key={p} className="border-b border-prata-300/50 py-3 text-lg">{p}</li>
            ))}
          </ul>
          <a href={waLink("Olá, Dra. Camila! Gostaria de agendar uma consulta.")} target="_blank" rel="noopener noreferrer"
             className="mt-8 inline-block border-b border-taupe py-2 transition-colors hover:text-taupe">
            Agende já a sua consulta
          </a>
        </div>
      </div>
    </section>
  );
}
