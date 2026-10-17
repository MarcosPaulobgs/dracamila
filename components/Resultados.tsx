import AntesDepois from "./AntesDepois";

// DADOS FICTÍCIOS para demonstração. Troque por casos e depoimentos reais, com autorização por escrito de cada paciente.
// Fotos: coloque em public/images/antes-1.jpg, depois-1.jpg, antes-2.jpg, depois-2.jpg.
const casos = [
  { titulo: "Clareamento dental", antes: "/images/antes-1.jpg", depois: "/images/depois-1.jpg" },
  { titulo: "Estética do sorriso", antes: "/images/antes-2.jpg", depois: "/images/depois-2.jpg" },
];

const depoimentos = [
  { texto: "Saí da primeira consulta entendendo exatamente o que seria feito. Nunca tinha visto meus dentes ampliados na tela.", nome: "Mariana S." },
  { texto: "Treino todos os dias e finalmente tenho alguém que cuida da minha boca pensando na minha rotina.", nome: "Rafael T." },
  { texto: "Atendimento calmo, planejado e sem pressa. Meu sorriso ficou natural, do jeito que eu queria.", nome: "Luciana P." },
];

export default function Resultados() {
  return (
    <section id="resultados" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <h2 className="max-w-[16ch] font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
        Resultados que parecem você.
      </h2>
      <p className="mt-4 text-sm text-prata-500">Imagens e depoimentos ilustrativos, apenas para demonstração.</p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {casos.map((c) => <AntesDepois key={c.titulo} {...c} />)}
      </div>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
        {depoimentos.map((d) => (
          <figure key={d.nome} className="border-t border-taupe pt-6">
            <blockquote className="font-serif text-2xl leading-snug">{d.texto}</blockquote>
            <figcaption className="mt-5 text-sm text-prata-500">{d.nome}, paciente</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
