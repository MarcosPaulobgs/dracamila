# Site Dra. Camila Andrade: linha de criação

Stack: Next.js 14 (App Router) + Tailwind + TypeScript. Rodar: `npm install && npm run dev`.
Paleta (tailwind.config.ts): base #f4f4f5, prata 100/300/500, grafite #151216, champagne #ddd5c5, taupe #9a7b5a (cor da marca nos posts dela).
Tipografia: Cormorant Garamond (títulos) + Figtree (texto). Marca visual: foto em arco (classe `.arco`).
Regras: sem caixa-alta em rótulos, sem animação em todas as seções, botão principal grafite.

## Etapas
- [x] 1. Base do projeto, header fixo translúcido, hero (texto + foto em arco)
- [x] 2. Sobre a Dra. Camila (foto de jaleco, texto dela, frase 'Não é só estética', CRO)
- [x] 3. Serviços (3 blocos alternados foto/texto em components/Servicos.tsx; textos sugeridos, confirmar com a cliente)

- [x] 4. Resultados: sliders antes/depois (AntesDepois.tsx) e 3 depoimentos, DADOS FICTÍCIOS marcados como ilustrativos; trocar por casos reais com autorização do paciente e remover o aviso
- [x] 5. Contato + mapa + rodapé (dados fictícios em lib/config.ts)
- [x] 6. Logo real (header, rodapé, favicon), imagem Open Graph, metadados, botão fixo de WhatsApp. SITE FINALIZADO, restam só os dados reais

- [x] 7. Revisão mobile: hero sem altura forçada no celular, botões em largura total, espaçamentos menores, slider com alça visível, mapa e rodapé ajustados
- [x] 8. Hero com vídeo de fundo (HeroVideo.tsx): autoplay mudo em loop, véu escuro, foto hero.jpg como reserva
- [x] 9. Animações: abertura com logo e sorriso desenhado (Preloader.tsx), hero em sequência, seções entrando ao rolar (ScrollFX.tsx), imagens que se revelam, linha sob os títulos. Ajuste: --inicio em globals.css (0.2s sem abertura)
- [x] 10. Correção: fotos não apareciam (o observer não dispara em elemento 100% recortado por clip-path; agora observa o bloco pai). Rodapé e Contato com endereço, WhatsApp, e-mail (fictício), Instagram e horários

## Vídeo do hero
Arquivo: public/videos/hero.mp4 (caminho em lib/config.ts, HERO_VIDEO). Ideal: 10 a 20 s em loop, sem áudio, 1080p, até uns 6 MB, H.264.
Comprimir: ffmpeg -i entrada.mp4 -an -vf "scale=1920:-2" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/videos/hero.mp4
Sem o arquivo, o hero mostra a foto. Com "reduzir movimento" ativo no aparelho, mostra só a foto.
O arco da foto saiu do hero (o vídeo ocupa esse papel).

## Imagens em public/images
hero.jpg (retrato), sobre.jpg (jaleco), consulta.jpg, odonto-esporte.jpg, clareamento.jpg, logo-ca.png (logo dourada real, fundo transparente). Foto de praia enviada não deve ser usada no site.

## Pendências do cliente
- Casos reais antes/depois (public/images/antes-N.jpg, depois-N.jpg) e depoimentos autorizados; conferir regras do CFO para publicidade.
- Endereço, horários, WhatsApp e mapa reais (lib/config.ts). WhatsApp real (lib/config.ts), endereço, horários, textos dos serviços; trocar SITE_URL pelo domínio real.
