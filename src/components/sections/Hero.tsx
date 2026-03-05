import heroBg from "@/assets/hero-bg.jpg";
import { Instagram, Mail, Phone, ArrowDown } from "lucide-react";

const Hero = () => (
  <section
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-preto"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-preto/20 via-preto/80 to-preto" />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full animate-fade-in-up">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <p className="font-body text-[10px] sm:text-xs uppercase tracking-[0.3em] text-bege">
          Social Media &amp; Estrategista de Conteúdo
        </p>
      </div>
      
      <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        Gabriela <span className="text-primary">Lauria</span>
      </h1>
      
      <p className="mx-auto max-w-2xl font-body text-lg md:text-2xl text-bege/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Transformo presença digital em <span className="text-white font-semibold">construção de marca</span>.
        Mais do que estética, criamos comunicação com propósito e foco em resultados.
      </p>

      {/* Social links */}
      <div className="mt-8 flex items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <a href="https://www.instagram.com/gabiilauria_/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-bege/70 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="https://wa.me/5521994319292" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-bege/70 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110" aria-label="WhatsApp">
          <Phone size={20} />
        </a>
        <a href="mailto:gabiilauriafc@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-bege/70 hover:text-primary hover:border-primary transition-all duration-300 transform hover:scale-110" aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <a
          href="#portfolio"
          className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-body text-sm font-bold text-white uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-primary/20"
        >
          Ver Portfólio
          <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
        </a>
        <a
          href="#contato"
          className="inline-block rounded-full border border-white/20 px-10 py-4 font-body text-sm font-bold text-white uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
        >
          Falar Comigo
        </a>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
      <ArrowDown size={24} />
    </div>
  </section>
);

export default Hero;
