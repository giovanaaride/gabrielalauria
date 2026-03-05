import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Zap, Target, Star, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Autoridade Instantânea",
    description: "Seja visto como uma referência no seu nicho através de um perfil profissional e bem posicionado.",
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Público Qualificado",
    description: "Atraia seguidores que realmente têm interesse e potencial para se tornarem seus clientes.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Mais Engajamento",
    description: "Crie uma comunidade ativa que interage com seu conteúdo e se conecta com sua marca.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Liberdade Geográfica",
    description: "Deixe a gestão estratégica comigo e ganhe tempo para focar no que você faz de melhor.",
  },
];

const Benefits = () => (
  <section id="beneficios" className="bg-[#B79F8F]/10 py-24 relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-azul/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

    <Container className="relative z-10">
      <SectionTitle 
        title="Por que escolher trabalhar comigo?" 
        subtitle="Os resultados que sua marca terá" 
      />
      
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {benefits.map((b, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row gap-6 p-10 rounded-2xl bg-white border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-500">
              {b.icon}
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-preto mb-3 group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Benefits;
