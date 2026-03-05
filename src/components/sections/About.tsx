import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import aboutPhoto from "@/assets/about-photo.jpg";

const competencias = [
  "Produção de conteúdo (feed e stories)",
  "Direção criativa e shooting",
  "Criação de callsheet",
  "Branding",
  "Planejamento estratégico",
  "Análise SWOT",
  "Storytelling",
  "Aplicação de IA na criação de conteúdo",
  "Atendimento ao cliente",
];

const About = () => (
  <section id="sobre" className="bg-[#8FB6C9]/10 py-24 relative overflow-hidden">
    {/* Decorative element */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-azul/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <Container>
      <SectionTitle title="Sobre mim" subtitle="Estratégia e Posicionamento" />

      <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-[280px_1fr] items-center">
        {/* Photo */}
        <div className="mx-auto md:mx-0 w-64 md:w-full">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border-4 border-white shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={aboutPhoto}
              alt="Gabriela Lauria"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="space-y-4 font-body text-lg leading-relaxed text-foreground/80">
            <p>
              Sou social media com <span className="text-primary font-semibold">2 anos de experiência</span> em produção de conteúdo, direção criativa e gestão estratégica de redes sociais.
            </p>
            <p>
              Meu foco é transformar perfis em presença digital forte, unindo estética, posicionamento e estratégia de conteúdo.
            </p>
            <p className="text-base text-foreground/70">
              Tenho experiência na criação de conteúdos para feed e stories, planejamento estratégico de publicações, desenvolvimento de identidade visual para redes sociais e análise de desempenho para crescimento de perfis.
            </p>
            <p className="text-base text-foreground/70 font-medium">
              Trabalho de forma remota, com organização, autonomia e foco em resultados.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              Competências
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {competencias.map((c) => (
                <div key={c} className="flex items-center gap-3 font-body text-sm text-foreground/70 group">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-primary transition-colors">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
