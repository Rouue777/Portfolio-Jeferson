import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
};

export function ButtonLink({ children, href }: ButtonLinkProps) {
  return <a href={href}>{children}</a>;
}
