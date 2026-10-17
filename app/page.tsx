import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollFX from "@/components/ScrollFX";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Resultados from "@/components/Resultados";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <ScrollFX />
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Resultados />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
