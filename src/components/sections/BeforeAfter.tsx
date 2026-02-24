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
  <section id="antes-e-depois" className="bg-white py-24">
    <Container>
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
              <div className="overflow-hidden rounded-xl bg-white  shadow-sm shadow-[#ED125B]/25">
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
  </section>
);

export default BeforeAfter;