import { languages } from "@/data/languages";

export function LanguagesSection() {
  return (
    <div className="min-w-0">
      <header className="max-w-3xl" data-reveal>
        <h2>Idiomas</h2>
      </header>

      <ul
        className="portfolio-card mt-10 grid min-w-0 overflow-hidden p-0 md:grid-cols-3"
        data-reveal
        data-reveal-delay="1"
      >
        {languages.map((language) => (
          <li
            key={language.name}
            className="min-w-0 border-t border-border p-card first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0"
          >
            <h3 className="text-base">{language.name}</h3>
            <p className="mt-2 text-sm leading-6">{language.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
