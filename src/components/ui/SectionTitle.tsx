interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light }: SectionTitleProps) => (
  <div className="mb-12 text-center">
    <h2 className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${light ? "text-gelo" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 font-body text-base ${light ? "text-bege" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className="mx-auto mt-4 h-0.5 w-16 bg-primary" />
  </div>
);

export default SectionTitle;
