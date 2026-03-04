import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { videos } from "@/data/videos";

const Videos = () => {
  const producao = videos.filter((v) => v.category === "producao");
  const roteiro = videos.filter((v) => v.category === "roteiro");

  const VideoCard = ({ title, link }: { title: string; link: string }) => {
    let embedUrl = link;
    if (link && link.includes("instagram.com")) {
      // Clean query parameters and ensure it ends with /embed
      const baseUrl = link.split("?")[0];
      embedUrl = baseUrl.endsWith("/") ? `${baseUrl}embed` : `${baseUrl}/embed`;
    }

    return (
      <div className="w-full">
        <div className="aspect-[9/16] overflow-hidden rounded-xl bg-gelo relative border border-black/5 shadow-md">
          {link && link !== "COLOCAR_LINK_AQUI" ? (
            <iframe
              src={embedUrl}
              title={title}
              className="absolute top-0 left-0 h-full w-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="encrypted-media"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center">
              <span className="font-body text-xs text-muted-foreground">
                Link do vídeo pendente
              </span>
            </div>
          )}
        </div>
        <p className="mt-4 font-display text-base font-medium text-foreground">{title}</p>
      </div>
    );
  };

  return (
    <section id="videos" className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V86.58C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-gelo/60"
          ></path>
        </svg>
      </div>

      <Container className="relative z-10 pt-10">
        <SectionTitle title="Vídeos" subtitle="Produção audiovisual" />

        {producao.length > 0 && (
          <div className="mb-14">
            <h3 className="mb-6 text-center font-display text-lg font-semibold text-foreground">
              Vídeos Produzidos
            </h3>
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-8">
              {producao.map((v, i) => (
                <div key={v.id} className={`${i % 2 !== 0 ? "order-first sm:order-none" : ""}`}>
                  <VideoCard title={v.title} link={v.link} />
                </div>
              ))}
            </div>
          </div>
        )}

        {roteiro.length > 0 && (
          <div>
            <h3 className="mb-6 text-center font-display text-lg font-semibold text-foreground">
              Vídeos com Roteirização
            </h3>
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-8">
              {roteiro.map((v, i) => (
                <div key={v.id} className={`${i % 2 !== 0 ? "order-first sm:order-none" : ""}`}>
                  <VideoCard title={v.title} link={v.link} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Videos;
