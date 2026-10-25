type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as = "h2",
}: Props) {
  const Heading = as;
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`text-sm font-semibold tracking-[0.16em] uppercase ${light ? "text-cyan" : "text-blue"}`}>
          {eyebrow}
        </p>
      ) : null}
      <Heading className={`mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </Heading>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-white/80" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
