import type { SocialLink } from "@/types/portfolio";

export const contactLinks = {
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/qr/75SMHDL2NZFXK1",
  },
  email: {
    label: "E-mail",
    href: "mailto:jefersonrouue@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jefersonsantos36/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/Rouue777",
  },
} as const satisfies Record<string, SocialLink>;

export const contactDetails = {
  phone: {
    label: "71984914001",
    href: "tel:71984914001",
  },
  email: {
    label: "jefersonrouue@gmail.com",
    href: contactLinks.email.href,
  },
} as const;

export const socialLinks: readonly SocialLink[] = Object.values(contactLinks);
