type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
