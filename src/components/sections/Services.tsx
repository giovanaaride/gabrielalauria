import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

const Services = () => (
  <section id="servicos" className="bg-black py-24 [&_h2]:text-white [&_p]:text-white/70">
    <Container>
      <SectionTitle title="Serviços" subtitle="O que posso fazer pela sua marca" />

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-sm border border-border bg-[#000000] p-6 transition hover:border-primary/40 hover:shadow-md"
          >
            <h3 className="font-display text-lg font-semibold text-white group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="mt-2 font-body text-sm text-white/70 leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
