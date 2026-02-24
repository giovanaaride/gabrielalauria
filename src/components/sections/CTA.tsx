import { Mail, Phone, Instagram } from "lucide-react";

const CTA = () => (
  <section className="bg-vermelho py-24">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gelo">
        Vamos transformar sua presença digital?
      </h2>
      <p className="mx-auto mt-4 max-w-md font-body text-base text-gelo/80">
        Entre em contato e vamos conversar sobre o seu projeto.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://wa.me/5521994319292"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-gelo px-8 py-3 font-body text-sm font-semibold text-vermelho uppercase tracking-wider hover:brightness-95 transition"
        >
          <Phone size={16} />
          WhatsApp
        </a>
        <a
          href="mailto:gabiilauriafc@gmail.com"
          className="inline-flex items-center gap-2 rounded-sm border border-gelo/40 px-8 py-3 font-body text-sm font-semibold text-gelo uppercase tracking-wider hover:bg-gelo/10 transition"
        >
          <Mail size={16} />
          Email
        </a>
        <a
          href="https://www.instagram.com/gabiilauria_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-gelo/40 px-8 py-3 font-body text-sm font-semibold text-gelo uppercase tracking-wider hover:bg-gelo/10 transition"
        >
          <Instagram size={16} />
          Instagram
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
