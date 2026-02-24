import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// IMAGENS
import bfrNavalha from "@/assets/bfr-navalha.png";
import aftNavalha from "@/assets/aft-navalha.png";

import bfrValDutra from "@/assets/bfr-valdutrapodologa.png";
import aftValDutra from "@/assets/aft-valdutrapodologa.png";

const Projects = () => (
  <section id="portfolio" className="bg-white py-24">
    <Container>
      <SectionTitle title="Portfólio" subtitle="Projetos que contam histórias" />

      <div className="mx-auto max-w-5xl space-y-20">

        {/* MALANDRAMENTE NAVALHA */}
        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-black">
            Malandramente Navalha
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD */}
            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Identidade Visual
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={bfrNavalha}
                  alt="Identidade Visual - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Feed Estratégico
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={aftNavalha}
                  alt="Feed Estratégico - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Campanha Promocional
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={bfrNavalha}
                  alt="Campanha - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* VAL DUTRA PODÓLOGA */}
        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-black">
            Malandramente Navalha
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CARD */}
            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Identidade Visual
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={bfrNavalha}
                  alt="Identidade Visual - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Feed Estratégico
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={aftNavalha}
                  alt="Feed Estratégico - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-body text-sm font-medium text-black">
                Campanha Promocional
              </p>
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={bfrNavalha}
                  alt="Campanha - Malandramente Navalha"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </Container>
  </section>
);

export default Projects;