import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowRight } from "lucide-react";

// IMAGES
import bfrNavalha from "@/assets/bfr-navalha.png";
import aftNavalha from "@/assets/aft-navalha.png";
import bfrValDutra from "@/assets/bfr-valdutrapodologa.png";
import aftValDutra from "@/assets/aft-valdutrapodologa.png";

const comparisons = [
  {
    label: "Val Dutra Podóloga",
    description: "Reposicionamento estratégico focado em autoridade e clareza visual.",
    result: "Perfil reposicionado com nova estratégia de conteúdo, identidade visual e estrutura de posts focada em engajamento.",
    beforeImg: bfrValDutra,
    afterImg: aftValDutra,
  },
  {
    label: "Malandramente Navalha",
    description: "Modernização da presença digital e alinhamento com o público-alvo.",
    result: "Nova identidade visual aplicada ao feed, gerando maior conexão emocional e profissionalismo percebido.",
    beforeImg: bfrNavalha,
    afterImg: aftNavalha,
  },
];

const BeforeAfter = () => (
  <section id="portfolio-cases" className="relative bg-white py-24 overflow-hidden border-t border-primary/10">
    {/* Decorative Background Accents */}
    <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 translate-x-1/3 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
    
    <Container className="relative z-10">
      <SectionTitle
        title="Resultados / Transformação de Perfis"
        subtitle="A prova real da evolução estratégica"
      />

      <div className="mx-auto max-w-5xl space-y-32 mt-16">
        {comparisons.map((c) => (
          <div key={c.label} className="group">
            <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
              
              {/* ANTES */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-2 px-2">
                   <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                   <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">Antes</span>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-border/50">
                  <div className="aspect-[4/5]">
                    <img
                      src={c.beforeImg}
                      alt={`Antes - ${c.label}`}
                      className="h-full w-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* SETA/TRANSFORMACAO */}
              <div className="md:col-span-1 flex flex-col items-center justify-center py-4 md:py-0">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 animate-pulse-slow rotate-90 md:rotate-0">
                  <ArrowRight size={28} />
                </div>
              </div>

              {/* DEPOIS */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center gap-2 px-2">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                   <span className="font-body text-xs uppercase tracking-[0.2em] text-primary font-black">Depois</span>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border-2 border-primary/20">
                  <div className="aspect-[4/5]">
                    <img
                      src={c.afterImg}
                      alt={`Depois - ${c.label}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {c.label}
                </h3>
                <p className="font-body text-foreground/70 leading-relaxed text-lg">
                  {c.description}
                </p>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 relative">
                 <div className="absolute -top-3 left-6 px-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full py-1">
                   Resultado Obtido
                 </div>
                 <p className="font-body text-foreground/90 font-medium leading-relaxed italic">
                   "{c.result}"
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default BeforeAfter;