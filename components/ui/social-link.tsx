type SocialLinkProps = {
  href: string;
  label: string;
};

export function SocialLink({ href, label }: SocialLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted hover:border-primary/40 hover:text-primary"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
      {isExternal ? (
        <>
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 4h5v5" />
            <path d="m10 14 10-10" />
            <path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" />
          </svg>
          <span className="sr-only">(abre em nova aba)</span>
        </>
      ) : null}
    </a>
  );
}
