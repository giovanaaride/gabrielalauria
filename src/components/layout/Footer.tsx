import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-preto py-10">
    <div className="container mx-auto px-6 flex flex-col items-center gap-4">
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/gabiilauria_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm text-bege/70 hover:text-primary transition-colors"
        >
          <Instagram size={16} />
          @gabiilauria_
        </a>
      </div>
      <p className="font-body text-xs text-bege/40">
        © {new Date().getFullYear()} Gabriela Lauria — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
