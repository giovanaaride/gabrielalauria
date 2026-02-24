import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { videos } from "@/data/videos";

const Videos = () => {
  const producao = videos.filter((v) => v.category === "producao");
  const roteiro = videos.filter((v) => v.category === "roteiro");

  const VideoCard = ({ title, link }: { title: string; link: string }) => (
    <div className="w-full">
      <div className="aspect-[9/16] overflow-hidden rounded-sm bg-muted">
        {link && link !== "COLOCAR_LINK_AQUI" ? (
          <iframe
            src={link}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media"
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
      <p className="mt-3 font-body text-sm text-foreground/70">{title}</p>
    </div>
  );

  return (
    <section id="videos" className="bg-gelo py-24">
      <Container>
        <SectionTitle title="Vídeos" subtitle="Produção audiovisual" />

        {producao.length > 0 && (
          <div className="mb-14">
            <h3 className="mb-6 text-center font-display text-lg font-semibold text-foreground">
              Vídeos Produzidos
            </h3>
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6">
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
            <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-6">
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
