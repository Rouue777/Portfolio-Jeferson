"use client";

import { navigation } from "@/data/navigation";
import { contactLinks } from "@/data/social-links";
import { useEffect, useRef, useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="flex size-11 items-center justify-center rounded-button border border-border text-foreground hover:border-primary/50 hover:text-primary"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg
          aria-hidden="true"
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      <nav
        id="mobile-navigation"
        className="mobile-menu-panel absolute inset-x-0 top-full border-b border-border bg-surface p-gutter"
        aria-label="Navegação móvel"
        aria-hidden={!isOpen}
        data-open={isOpen}
        inert={!isOpen}
      >
        <ul className="flex flex-col gap-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-button px-3 py-3 text-sm font-medium text-muted hover:bg-card hover:text-primary"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contactLinks.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="button-base button-primary mt-4 w-full"
          onClick={closeMenu}
          aria-label="Vamos conversar pelo WhatsApp (abre em nova aba)"
        >
          Vamos conversar
        </a>
      </nav>
    </div>
  );
}
