import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// IMPORTA AS IMAGENS (são .png no seu assets)
import bfrNavalha from "@/assets/bfr-navalha.png";
import aftNavalha from "@/assets/aft-navalha.png";
import bfrValDutra from "@/assets/bfr-valdutrapodologa.png";
import aftValDutra from "@/assets/aft-valdutrapodologa.png";

const comparisons = [
  {
    label: "Val Dutra Podóloga",
    beforeImg: bfrValDutra,
    afterImg: aftValDutra,
  },
  {
    label: "Malandramente Navalha",
    beforeImg: bfrNavalha,
    afterImg: aftNavalha,
  },
];

const BeforeAfter = () => (
  <section id="antes-e-depois" className="relative bg-white py-24 pb-32 overflow-hidden">
    {/* Decorative Background Accents */}
    <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[400px] h-[400px] bg-rosa/5 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 translate-x-1/3 w-[300px] h-[300px] bg-azul/10 rounded-full blur-[80px] pointer-events-none" />
    <Container className="relative z-10">
      <SectionTitle
        title="Antes e Depois"
        subtitle="Transformações visuais reais"
      />

      <div className="mx-auto max-w-4xl space-y-16">
        {comparisons.map((c) => (
          <div key={c.label}>
            {/* Nome do cliente */}
            <h3 className="mb-6 font-display text-xl font-semibold text-black">
              {c.label}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* ANTES */}
              <div className="overflow-hidden rounded-xl bg-white shadow-sm shadow-[#ED125B]/25">
                <div className="px-4 pt-4">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Antes
                  </span>
                </div>

                <div className="aspect-square">
                  <img
                    src={c.beforeImg}
                    alt={`Antes - ${c.label}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* DEPOIS */}
              <div className="overflow-hidden rounded-xl bg-white shadow-sm shadow-[#ED125B]/25">
                <div className="px-4 pt-4">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-primary">
                    Depois
                  </span>
                </div>

                <div className="aspect-square">
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
        ))}
      </div>
    </Container>

    {/* Decorative Wave Divider at Bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform">
      <svg
        className="relative block w-full h-[60px] md:h-[100px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34-5.25V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-gelo/60"
        ></path>
      </svg>
    </div>
  </section>
);

export default BeforeAfter;