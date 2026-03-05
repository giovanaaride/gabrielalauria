import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Solução", href: "#solucao" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-preto/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold text-gelo tracking-wide">
          Gabriela<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-bege hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/gabiilauria_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bege hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gelo"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-preto border-t border-muted/20 px-6 pb-6 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm text-bege hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/gabiilauria_/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 font-body text-sm text-bege hover:text-primary transition-colors"
          >
            <Instagram size={16} />
            @gabiilauria_
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
