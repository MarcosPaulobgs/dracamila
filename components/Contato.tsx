import { ENDERECO, HORARIOS, WHATSAPP_EXIBICAO, EMAIL, INSTAGRAM, MAPA, waLink } from "@/lib/config";

const lk = "border-b border-taupe hover:text-taupe";
const dados = [
  { rotulo: "Endereço", valor: <>{ENDERECO}</> },
  { rotulo: "Horários", valor: <>{HORARIOS}</> },
  { rotulo: "WhatsApp", valor: <a href={waLink()} target="_blank" rel="noopener noreferrer" className={lk}>{WHATSAPP_EXIBICAO}</a> },
  { rotulo: "E-mail", valor: <a href={`mailto:${EMAIL}`} className={lk}>{EMAIL}</a> },
  { rotulo: "Instagram", valor: <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className={lk}>@{INSTAGRAM}</a> },
];

export default function Contato() {
  return (
    <section id="contato" className="bg-prata-100/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="max-w-[14ch] font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Agende sua avaliação.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-prata-500">
            Conte o que você precisa pelo WhatsApp e a gente encontra o melhor horário.
          </p>
          <dl className="mt-10 space-y-5">
            {dados.map((d) => (
              <div key={d.rotulo}>
                <dt className="text-sm text-prata-500">{d.rotulo}</dt>
                <dd className="break-words text-lg">{d.valor}</dd>
              </div>
            ))}
          </dl>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="mt-10 block w-full rounded-full bg-grafite px-7 py-3.5 text-center text-white transition-colors hover:bg-[#2b262c] sm:inline-block sm:w-auto">
            Agendar avaliação
          </a>
        </div>

        <iframe title="Mapa com a localização do consultório" src={MAPA} loading="lazy"
                className="h-80 w-full rounded-3xl border-0 md:h-full md:min-h-[340px]" />
      </div>
    </section>
  );
}
