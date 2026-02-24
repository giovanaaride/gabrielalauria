import { useState } from "react";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) errs.name = "Nome é obrigatório.";
    else if (trimmedName.length > 100) errs.name = "Nome muito longo.";

    if (!trimmedEmail) errs.email = "Email é obrigatório.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errs.email = "Email inválido.";
    else if (trimmedEmail.length > 255) errs.email = "Email muito longo.";

    if (!trimmedMessage) errs.message = "Mensagem é obrigatória.";
    else if (trimmedMessage.length > 1000) errs.message = "Mensagem muito longa (máx 1000 caracteres).";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message with form data
    const text = `Olá Gabriela! Meu nome é ${form.name.trim()}.${form.subject.trim() ? ` Assunto: ${form.subject.trim()}.` : ""} ${form.message.trim()}`;
    const waUrl = `https://api.whatsapp.com/send?phone=5521994319292&text=${encodeURIComponent(text)}`;
    const link = document.createElement("a");
    link.href = waUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full rounded-sm border border-border bg-gelo px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition";

  return (
    <section id="contato" className="bg-card py-24">
      <Container>
        <SectionTitle title="Contato" subtitle="Vamos conversar sobre o seu projeto" />

        <div className="mx-auto max-w-4xl grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Info side */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-base text-foreground/80 leading-relaxed">
              Pronta para transformar sua presença digital? Entre em contato por qualquer canal abaixo ou preencha o formulário.
            </p>

            <div className="space-y-4 mt-2">
              <a
                href="https://wa.me/5521994319292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={18} className="text-primary shrink-0" />
                (21) 99431-9292
              </a>
              <a
                href="mailto:gabiilauriafc@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} className="text-primary shrink-0" />
                gabiilauriafc@gmail.com
              </a>
              <a
                href="https://www.instagram.com/gabiilauria_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={18} className="text-primary shrink-0" />
                @gabiilauria_
              </a>
            </div>
          </div>

          {/* Form side */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                placeholder="Seu nome *"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && <p className="mt-1 font-body text-xs text-primary">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu email *"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && <p className="mt-1 font-body text-xs text-primary">{errors.email}</p>}
            </div>

            <input
              type="text"
              placeholder="Assunto (opcional)"
              maxLength={150}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClass}
            />

            <div>
              <textarea
                placeholder="Sua mensagem *"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="mt-1 font-body text-xs text-primary">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:brightness-110 transition"
            >
              <Send size={16} />
              Enviar via WhatsApp
            </button>

            {submitted && (
              <p className="font-body text-sm text-primary font-medium animate-fade-in-up">
                Mensagem encaminhada! ✓
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
