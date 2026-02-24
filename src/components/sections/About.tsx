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
  "Aplicação de IA",
  "Atendimento ao cliente",
  "Trabalho remoto com autonomia",
];

{/*const qualidades = [
  "Criatividade com direcionamento estratégico",
  "Empatia",
  "Atenção aos detalhes",
  "Aprendizado constante",
];*/}

const About = () => (
  
  <section id="sobre" className="bg-[#8FB6C9]/10 py-24">
    
    <Container>
      <SectionTitle title="Sobre mim" subtitle="Publicidade e Propaganda" />

      <div className="mx-auto max-w-4xl grid gap-10 md:grid-cols-[280px_1fr] items-start">
        {/* Photo */}
        <div className="mx-auto md:mx-0 w-64 md:w-full ">
          <div className="img-[3/4] overflow-hidden rounded-2xl">
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
          <p className="font-body text-base leading-relaxed text-foreground/80">
            Sou estudante de Publicidade e Propaganda com experiência prática em produção de conteúdo,
            direção criativa e gestão estratégica de redes sociais. Meu foco é transformar marcas em
            referência digital, unindo estética e estratégia.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Competências</h3>
              <ul className="space-y-2">
                {competencias.map((c) => (
                  <li key={c} className="flex items-start gap-2 font-body text-sm text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/*QUALIDADES*/} 

            {/*<div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Qualidades</h3>
              <ul className="space-y-2">
                {qualidades.map((q) => (
                  <li key={q} className="flex items-start gap-2 font-body text-sm text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>*/}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
