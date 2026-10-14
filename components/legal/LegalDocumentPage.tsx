import type { ReactNode } from "react";
import Link from "next/link";
import { manrope } from "@/lib/fonts";
const SECTION_CONTAINER_CLASS =
  "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[107px]";

export type LegalSection = {
  title: string;
  /** Badge label. When omitted it is parsed from a "1. Title" style title. */
  number?: string;
  id?: string;
  body: ReactNode[];
  list?: readonly string[];
  /** Paragraphs rendered after the list. */
  footer?: ReactNode[];
  contact?: boolean;
  highlight?: boolean;
};

type LegalDocumentPageProps = {
  title: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  relatedLinks?: readonly { label: string; href: string }[];
};

type ResolvedSection = LegalSection & { number: string; id: string };

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveSections(sections: readonly LegalSection[]): ResolvedSection[] {
  return sections.map((section, index) => {
    const match = section.title.match(/^(\d+(?:\.\d+)*)\.?\s+(.*)$/);
    const number = section.number ?? match?.[1] ?? String(index + 1);
    const title = section.number ? section.title : (match?.[2] ?? section.title);
    return {
      ...section,
      number,
      title,
      id: section.id ?? slugify(title),
    };
  });
}

function ContactBlock() {
  return (
    <address className="mt-5 rounded-xl bg-[#05070c] p-6 text-sm not-italic leading-7 text-white/80 sm:p-8">
      <p className="text-base font-bold text-white">
        Mekark Structure India Private Limited
      </p>
      <p className="mt-2">
        5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai,
        Tamil Nadu 600032, India
      </p>
      <p className="mt-3">
        Phone:{" "}
        <a
          href="tel:+919790924754"
          className="font-semibold text-white hover:text-[#ed1c24]"
        >
          +91 97909 24754
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:admin@mekark.com"
          className="font-semibold text-white hover:text-[#ed1c24]"
        >
          admin@mekark.com
        </a>
      </p>
    </address>
  );
}

function TableOfContents({ sections }: { sections: ResolvedSection[] }) {
  return (
    <ol className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="group flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm text-[#4c4c4c] transition-colors hover:bg-[#fdebeb] hover:text-[#111]"
          >
            <span className="w-7 shrink-0 text-xs font-bold text-[#ed1c24]">
              {section.number}
            </span>
            <span className="font-medium leading-snug">{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalDocumentPage({
  title,
  lastUpdated,
  sections,
  relatedLinks,
}: LegalDocumentPageProps) {
  const resolved = resolveSections(sections);

  return (
    <main className={`bg-[#f8f6f6] ${manrope.className} text-[#111]`}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#05070c] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ed1c24]/25 blur-3xl sm:h-96 sm:w-96"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#ed1c24] via-[#ed1c24]/40 to-transparent"
        />
        <div className={`${SECTION_CONTAINER_CLASS} py-14 sm:py-20 lg:py-24`}>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#ed1c24]">
            Legal
          </p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
              Last updated: {lastUpdated}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
              Mekark Structure India Private Limited
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className={`${SECTION_CONTAINER_CLASS} py-10 sm:py-14 lg:py-20`}>
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_minmax(0,1fr)]">
          {/* Mobile contents */}
          <details className="group rounded-2xl border border-[#e8e8e8] bg-white lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-bold">
              Contents
              <span
                aria-hidden
                className="text-[#ed1c24] transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>
            <div className="border-t border-[#e8e8e8] p-2">
              <TableOfContents sections={resolved} />
            </div>
          </details>

          {/* Desktop contents */}
          <aside className="hidden lg:block">
            <nav
              aria-label={`${title} contents`}
              className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-[#e8e8e8] bg-white p-4"
            >
              <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase tracking-[1.5px] text-[#888]">
                Contents
              </p>
              <TableOfContents sections={resolved} />
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-5">
            {resolved.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={`scroll-mt-28 rounded-2xl border p-6 sm:p-8 ${
                  section.highlight
                    ? "border-[#ed1c24]/25 border-l-4 border-l-[#ed1c24] bg-[#fdebeb]"
                    : "border-[#e8e8e8] bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#ed1c24] px-2 text-sm font-bold text-white">
                    {section.number}
                  </span>
                  <h2 className="pt-1.5 text-lg font-bold leading-snug text-[#080808] sm:text-xl">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-7 text-[#4c4c4c] sm:pl-14 sm:text-[15px]">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2.5">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ed1c24]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer?.map((paragraph, index) => (
                    <p key={`footer-${index}`}>{paragraph}</p>
                  ))}
                  {section.contact && <ContactBlock />}
                </div>
              </section>
            ))}

            <div className="flex flex-col gap-2 pt-4 sm:flex-row sm:gap-6">
              <Link
                href="/#contact"
                className="text-sm font-semibold text-[#ed1c24] hover:underline"
              >
                Contact us with questions →
              </Link>
              {relatedLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#ed1c24] hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
