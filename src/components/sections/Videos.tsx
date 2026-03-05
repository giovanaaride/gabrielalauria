import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { videos } from "@/data/videos";

const Videos = () => {
  const VideoCard = ({ title, description, link }: { title: string; description: string; link: string }) => {
    let embedUrl = link;
    if (link && link.includes("instagram.com")) {
      const baseUrl = link.split("?")[0];
      embedUrl = baseUrl.endsWith("/") ? `${baseUrl}embed` : `${baseUrl}/embed`;
    }

    return (
      <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="aspect-[9/16] relative bg-gelo overflow-hidden">
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
        <div className="p-6 space-y-2 flex-grow flex flex-col justify-center bg-white border-t border-border/40">
          <h4 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="font-body text-sm text-foreground/70 leading-relaxed">
            {description}
          </p>
        </div>
        {/* Visual highlight at bottom */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      </div>
    );
  };

  return (
    <section id="videos" className="relative bg-[#FAFAFA] py-24 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(143,182,201,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionTitle 
          title="Edição de vídeos e conteúdo para redes sociais" 
          subtitle="Narrativas visuais que conectam e convertem" 
        />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {videos.map((v) => (
            <VideoCard 
              key={v.id} 
              title={v.title} 
              description={v.description} 
              link={v.link} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Videos;
