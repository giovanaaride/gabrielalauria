import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Estratégia Personalizada",
    description: "Cada marca tem uma essência. Criamos um planejamento que respeita sua voz e atinge seu público-alvo real.",
  },
  {
    title: "Narrativa que Conecta",
    description: "Usamos storytelling no feed e nos stories para humanizar sua marca e criar desejo pelos seus serviços.",
  },
  {
    title: "Design de Alto Impacto",
    description: "Estética aliada à estratégia. Criamos conteúdos visuais que prendem a atenção e transmitem autoridade imediata.",
  },
  {
    title: "Foco em Conversão",
    description: "Não buscamos apenas likes. O objetivo final é transformar o interesse gerado em faturamento para o seu negócio.",
  },
];

const Solution = () => (
  <section id="solucao" className="bg-preto py-24 text-gelo relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-azul rounded-full blur-[120px]" />
    </div>

    <Container className="relative z-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
            A Solução: Estratégia, <br />
            <span className="text-primary italic">Narrativa</span> e Design
          </h2>
          <p className="font-body text-xl text-bege/80 max-w-2xl mx-auto leading-relaxed">
            Não é sobre postar mais, é sobre postar melhor. Meu método foca no que realmente traz resultado: <span className="text-gelo font-semibold underline decoration-primary underline-offset-4">posicionamento e autoridade</span>.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-6 p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
              
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/10">
                <CheckCircle2 className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="font-body text-base text-bege/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default Solution;
