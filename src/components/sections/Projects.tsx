import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// IMAGENS
import bfrNavalha from "@/assets/bfr-navalha.png";
import aftNavalha from "@/assets/aft-navalha.png";

import bfrValDutra from "@/assets/bfr-valdutrapodologa.png";
import aftValDutra from "@/assets/aft-valdutrapodologa.png";

const Projects = () => (
  <section id="portfolio" className="relative bg-white py-24 overflow-hidden">
    {/* Decorative Background Blobs */}
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-bege/15 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-azul/10 rounded-full blur-[100px] pointer-events-none" />

    <Container className="relative z-10">
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

      {/* BOUNCING ARROW */}
      <div className="mt-24 flex justify-center">
        <a href="#antes-e-depois" aria-label="Ver Antes e Depois" className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary hover:text-rosa transition-colors"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

    </Container>
  </section>
);

export default Projects;