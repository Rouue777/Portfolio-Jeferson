type TechnologyBadgeProps = {
  name: string;
};

export function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return (
    <span className="technology-badge inline-flex items-center rounded-button border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      {name}
    </span>
  );
}
