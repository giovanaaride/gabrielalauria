import heroBg from "@/assets/hero-bg.jpg";
import { Instagram, Mail, Phone } from "lucide-react";

const Hero = () => (
  <section
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-preto"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-50"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-preto/40 via-preto/60 to-preto" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-bege animate-fade-in-up">
        Social Media &amp; Criadora de Conteúdo
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gelo animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Gabriela Lauria
      </h1>
      <p className="mx-auto mt-6 max-w-xl font-body text-base md:text-lg text-bege/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Transformo presença digital em construção de marca.
        <br />
        Mais do que estética. <span className="text-primary font-medium">Comunicação com propósito.</span>
      </p>

      {/* Social links */}
      <div className="mt-6 flex items-center justify-center gap-5 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <a href="https://www.instagram.com/gabiilauria_/" target="_blank" rel="noopener noreferrer" className="text-bege/70 hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://wa.me/5521994319292" target="_blank" rel="noopener noreferrer" className="text-bege/70 hover:text-primary transition-colors" aria-label="WhatsApp">
          <Phone size={20} />
        </a>
        <a href="mailto:gabiilauriafc@gmail.com" className="text-bege/70 hover:text-primary transition-colors" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <a
          href="#portfolio"
          className="inline-block rounded-sm bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:brightness-110 transition"
        >
          Ver Portfólio
        </a>
        <a
          href="#contato"
          className="inline-block rounded-sm border border-gelo/30 px-8 py-3 font-body text-sm font-semibold text-gelo uppercase tracking-wider hover:border-primary hover:text-primary transition"
        >
          Falar Comigo
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
