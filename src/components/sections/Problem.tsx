import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { AlertCircle, TrendingDown, Clock, Ghost } from "lucide-react";

const problems = [
  {
    icon: <Ghost className="w-8 h-8 text-primary" />,
    title: "Sente que fala sozinho?",
    description: "Você posta todos os dias, mas o engajamento é baixo e ninguém comenta ou pergunta sobre seus serviços.",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-primary" />,
    title: "Falta de autoridade",
    description: "Seu perfil parece amador e não transmite a confiança necessária para cobrar o preço que seu trabalho realmente vale.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Sem tempo para nada",
    description: "A criação de conteúdo consome horas do seu dia que deveriam ser focadas em atender seus clientes e gerir seu negócio.",
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-primary" />,
    title: "Conteúdo sem estratégia",
    description: "Você posta por postar, sem um objetivo claro, sem narrativa e sem um funil de conteúdo que converte seguidores em clientes.",
  },
];

const Problem = () => (
  <section id="problema" className="bg-[#FAF7F5] relative overflow-hidden py-24">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
    
    <Container className="relative z-10">
      <SectionTitle 
        title="O desafio do digital" 
        subtitle="Por que muitas marcas morrem no feed?" 
      />
      
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-white border-b-4 border-b-transparent border border-border rounded-2xl hover:border-primary/20 hover:border-b-primary transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
          >
            <div className="mb-6 inline-block p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <div className="text-primary group-hover:text-white transition-colors">
                {p.icon}
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="font-body text-sm text-foreground/70 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Problem;
