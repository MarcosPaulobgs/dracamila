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
// Mapa embutido: pino nas coordenadas exatas do consultório (do perfil dela no Google Maps).
export const MAPA = "https://www.google.com/maps?q=-12.9971913,-38.4652627&z=17&output=embed";
// Link do perfil dela no Google Maps (abre o app no celular).
export const MAPA_LINK = "https://www.google.com/maps/place/Dentista+em+Salvador+%7C+Dra.+Camila+Andrade/@-12.9971913,-38.467843,1204m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7161b02f14b5969:0x32e2bdcccee7ed8c!8m2!3d-12.9971913!4d-38.4652627!16s%2Fg%2F11nhhymsjh";

// Endereço do site publicado (usado nas prévias de link). Troque pelo domínio real.
export const SITE_URL = "https://www.dracamilaandrade.com.br";

// Vídeo de fundo do hero, hospedado no Cloudinary.
// A foto abaixo aparece enquanto o vídeo carrega (ou se ele falhar).
export const HERO_VIDEO = "https://res.cloudinary.com/gfbljogf/video/upload/v1792197336/background-doutoracamila.mp4";
export const HERO_POSTER = "/images/hero.jpg";

export const EMAIL = "dracamilacandrade@gmail.com";
