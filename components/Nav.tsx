"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ease-out-expo ${
        scrolled
          ? "bg-bone-50/80 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-10"
      >
        <Wordmark className="text-[1.0625rem] md:text-[1.125rem]" />

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.9375rem] text-ink/75 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-sm">
              Request access
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ease-out-expo ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 bg-ink transition-transform duration-300 ease-out-expo ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out-expo ${
          open ? "max-h-[80vh] border-t border-ink/5 bg-bone-50" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-2xl font-light tracking-tight text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Request access
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
