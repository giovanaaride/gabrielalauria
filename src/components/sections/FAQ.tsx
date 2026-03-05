import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o seu serviço?",
    answer: "Trabalho de forma personalizada. Começamos com um diagnóstico da sua marca, definimos objetivos e então criamos o cronograma estratégico de conteúdo.",
  },
  {
    question: "Para quem é indicado?",
    answer: "Para empreendedores, profissionais liberais e marcas que buscam profissionalizar sua presença digital e transformar seguidores em clientes.",
  },
  {
    question: "Você atende qualquer nicho?",
    answer: "Sim, meu foco é em estratégia de conteúdo e posicionamento, que podem ser aplicados a diversos nichos, desde beleza e moda até consultorias e serviços especializados.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A construção de marca é um processo. Geralmente, melhorias na estética e na percepção de autoridade são imediatas, enquanto o aumento de conversão sólida acontece gradualmente com a constância.",
  },
  {
    question: "Quais são os pacotes disponíveis?",
    answer: "Tenho diferentes modalidades, desde gestão completa de redes sociais até consultorias pontuais. Podemos conversar para entender qual se adapta melhor ao seu momento.",
  },
];

const FAQ = () => (
  <section id="faq" className="bg-[#FAF7F5] relative overflow-hidden py-24">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-azul/10 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
    
    <Container className="relative z-10">
      <SectionTitle 
        title="Dúvidas Frequentes" 
        subtitle="Esclareça seus pontos principais" 
      />
      
      <div className="mx-auto mt-16 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border/60 bg-white rounded-2xl px-2 overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-left hover:text-primary transition-colors py-6 px-6 hover:no-underline flex items-center gap-4">
                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                   {index + 1}
                 </span>
                 <span className="flex-1">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-foreground/70 px-6 pb-6 leading-relaxed">
                <div className="pt-4 border-t border-border/40">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  </section>
);

export default FAQ;
