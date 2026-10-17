import { IconPin as Pin, IconRelogio as Relogio, IconEmail as Email, IconInstagram as Insta, IconWhatsApp as Zap } from "@/components/Icones";
import { CRO, ENDERECO, HORARIOS, WHATSAPP_EXIBICAO, EMAIL, INSTAGRAM, waLink } from "@/lib/config";

const links = [["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Resultados", "#resultados"], ["Contato", "#contato"]];
const lk = "transition-colors hover:text-white";
const dourado = "text-[#c4a574]";

const social = [
  { rotulo: "WhatsApp", href: waLink(), Icone: Zap, externo: true },
  { rotulo: "Instagram", href: `https://instagram.com/${INSTAGRAM}`, Icone: Insta, externo: true },
  { rotulo: "E-mail", href: `mailto:${EMAIL}`, Icone: Email, externo: false },
];

export default function Footer() {
  return (
    <footer className="bg-grafite text-prata-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src="/images/logo-ca.png" alt="" className="mb-4 h-12 w-auto" />
          <p className="font-serif text-2xl text-base">Dra. Camila Andrade</p>
          <p className="mt-1 text-sm">Cirurgiã-dentista, {CRO}</p>
          <div className="mt-6 flex gap-3">
            {social.map(({ rotulo, href, Icone, externo }) => (
              <a key={rotulo} href={href} aria-label={rotulo} {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                 className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:border-[#c4a574] hover:text-white">
                <Icone size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm text-white">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><span className={`mt-0.5 ${dourado}`}><Pin /></span><span>{ENDERECO}</span></li>
            <li className="flex gap-3"><span className={`mt-0.5 ${dourado}`}><Zap /></span>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className={lk}>{WHATSAPP_EXIBICAO}</a></li>
            <li className="flex gap-3"><span className={`mt-0.5 ${dourado}`}><Email /></span>
              <a href={`mailto:${EMAIL}`} className={`${lk} break-all`}>{EMAIL}</a></li>
            <li className="flex gap-3"><span className={`mt-0.5 ${dourado}`}><Insta /></span>
              <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className={lk}>@{INSTAGRAM}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm text-white">Atendimento</h3>
          <p className="flex gap-3 text-sm"><span className={`mt-0.5 ${dourado}`}><Relogio /></span>{HORARIOS}</p>
          <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm" aria-label="Rodapé">
            {links.map(([l, h]) => <a key={h} href={h} className={`py-1 ${lk}`}>{l}</a>)}
          </nav>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-5 pr-24 text-xs md:pr-5 md:text-center">
        © {new Date().getFullYear()} Dra. Camila Andrade. Todos os direitos reservados.
      </p>
    </footer>
  );
}
