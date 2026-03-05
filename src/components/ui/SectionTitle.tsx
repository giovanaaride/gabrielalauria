interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light }: SectionTitleProps) => (
  <div className="mb-16 text-center group">
    <div className="flex flex-col items-center gap-2 mb-2">
      <span className="w-8 h-1 bg-primary rounded-full" />
      {subtitle && (
        <p className={`font-body text-xs uppercase tracking-[0.3em] font-bold ${light ? "text-primary/80" : "text-primary "}`}>
          {subtitle}
        </p>
      )}
    </div>
    <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="mx-auto mt-6 flex items-center justify-center gap-2">
      <div className="h-px w-12 bg-border group-hover:w-20 group-hover:bg-primary/50 transition-all duration-700" />
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <div className="h-px w-12 bg-border group-hover:w-20 group-hover:bg-primary/50 transition-all duration-700" />
    </div>
  </div>
);

export default SectionTitle;
