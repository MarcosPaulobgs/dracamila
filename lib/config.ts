// Dados da clínica: troque pelos reais quando a Dra. Camila enviar.
export const WHATSAPP = "5571981121661";
export const CRO = "CRO-BA 31316";
export const waLink = (msg = "Olá, Dra. Camila! Gostaria de agendar uma avaliação.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Contato: endereço real; confirme horários e e-mail com a Dra. Camila.
export const ENDERECO = "Av. Antônio Carlos Magalhães, 771 - Itaigara, Salvador - BA, 41830-910";
export const HORARIOS = "Segunda a sexta, das 8h às 18h";
export const WHATSAPP_EXIBICAO = "(71) 98112-1661";
export const INSTAGRAM = "dracamilacandrade";
export const MAPA = "https://www.google.com/maps?q=Av.+Ant%C3%B4nio+Carlos+Magalh%C3%A3es%2C+771+-+Itaigara%2C+Salvador+-+BA%2C+41830-910&output=embed";

// Endereço do site publicado (usado nas prévias de link). Troque pelo domínio real.
export const SITE_URL = "https://www.dracamilaandrade.com.br";

// Vídeo de fundo do hero, hospedado no Cloudinary.
// A foto abaixo aparece enquanto o vídeo carrega (ou se ele falhar).
export const HERO_VIDEO = "https://res.cloudinary.com/gfbljogf/video/upload/v1792197336/background-doutoracamila.mp4";
export const HERO_POSTER = "/images/hero.jpg";

export const EMAIL = "dracamilacandrade@gmail.com";
