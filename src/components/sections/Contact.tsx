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
    "w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-body text-sm text-white placeholder:text-bege/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300";

  return (
    <section id="contato" className="bg-preto py-24 relative overflow-hidden text-gelo">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionTitle title="Contato" subtitle="Vamos conversar sobre o seu projeto" />

        <div className="mx-auto mt-16 max-w-5xl grid gap-16 lg:grid-cols-[1fr_1.5fr] items-start">
          {/* Info side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold leading-tight">
                Pronta para levar sua marca ao <span className="text-primary italic">próximo nível?</span>
              </h3>
              <p className="font-body text-lg text-bege/70 leading-relaxed">
                Entre em contato por qualquer canal abaixo ou preencha o formulário e eu responderei o mais breve possível.
              </p>
            </div>

            <div className="grid gap-6">
              <a
                href="https://wa.me/5521994319292"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-body text-xs text-bege/50 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="font-display text-lg font-semibold">(21) 99431-9292</p>
                </div>
              </a>

              <a
                href="mailto:gabiilauriafc@gmail.com"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-body text-xs text-bege/50 uppercase tracking-widest mb-1">E-mail</p>
                  <p className="font-display text-lg font-semibold">gabiilauriafc@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/gabiilauria_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-body text-xs text-bege/50 uppercase tracking-widest mb-1">Instagram</p>
                  <p className="font-display text-lg font-semibold">@gabiilauria_</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />
            <form onSubmit={handleSubmit} className="relative space-y-6 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome *"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-2 font-body text-xs text-primary">{errors.name}</p>}
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
                  {errors.email && <p className="mt-2 font-body text-xs text-primary">{errors.email}</p>}
                </div>
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
                {errors.message && <p className="mt-2 font-body text-xs text-primary">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 font-body text-base font-bold text-white uppercase tracking-[0.1em] hover:brightness-110 transition-all shadow-xl shadow-primary/20 mt-4 active:scale-95"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>

              {submitted && (
                <div className="absolute inset-0 bg-preto/80 backdrop-blur-md flex items-center justify-center rounded-3xl animate-fade-in-up">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="font-display text-2xl font-bold mb-2">Mensagem encaminhada!</h4>
                    <p className="font-body text-bege/70">Redirecionando para o WhatsApp...</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
