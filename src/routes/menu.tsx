import { createFileRoute } from "@tanstack/react-router";
import { Info, Salad, Utensils, Wheat } from "lucide-react";

import heroMenu from "../assets/hero-menu.jpg";
import bowl from "../assets/bowl.jpg";
import prep from "../assets/prep.jpg";
import { Hero, HeroButton } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";

export const Route = createFileRoute("/menu")({
  head: () =>
    createPageMeta({
      path: "/menu",
      title: "Menu — Bel3afiya Shawarma, Rochdale",
      description:
        "The Bel3afiya menu: shawarma wraps and bowls built around fresh salads, lean protein and house sauces. Made to order on the stall.",
      keywords:
        "Bel3afiya menu, shawarma wrap Rochdale, shawarma bowl, fresh shawarma, health-forward menu, market stall food, Rochdale Pioneers Market menu",
    }),
  component: MenuPage,
});

const menu = [
  {
    icon: Utensils,
    name: "Signature Shawarma Wrap",
    body: "Marinated, chargrilled protein, fresh salad, house garlic sauce, folded in a warm flatbread.",
    tag: "The core product",
  },
  {
    icon: Salad,
    name: "Shawarma Bowl",
    body: "Everything from the wrap, served over salad and grains instead of bread. Lighter, no compromise on flavour.",
    tag: "Health-forward",
  },
  {
    icon: Wheat,
    name: "Loaded Sides",
    body: "Fresh salads, pickles and house sauces prepped daily on the stall to go alongside.",
    tag: "Made fresh",
  },
];

function MenuPage() {
  return (
    <>
      <Hero
        priority
        image={heroMenu}
        imageAlt="Bel3afiya shawarma wraps and bowls displayed on the market stall counter"
        eyebrow="The Menu"
        title={
          <>
            Shawarma, <span className="text-ember">done fresh</span>
          </>
        }
        subtitle="A tight, shawarma-focused menu. Prepped on the stall, built to order, designed to feel good afterwards."
      >
        <HeroButton to="/find-us">Where to Find Us</HeroButton>
      </Hero>

      <section className="screen bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-green">What we serve</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)]">
              Small menu, serious about every line of it
            </h2>
          </Reveal>

          <ul className="mt-14 divide-y divide-border border-y border-border" role="list">
            {menu.map((item, i) => (
              <Reveal key={item.name} delay={i * 90}>
                <li className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6 py-8 transition-colors sm:flex sm:items-center sm:gap-8">
                  <span className="hidden shrink-0 text-ember sm:block" aria-hidden="true">
                    <item.icon size={28} strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0 sm:flex-1">
                    <h3 className="text-2xl transition-colors group-hover:text-ember md:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-sky px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sky-deep">
                    {item.tag}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <p className="mt-10 flex items-start gap-3 text-sm text-muted-foreground">
              <Info size={18} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
              Full item names, ingredients and pricing are being finalised as the stall settles in —
              the latest board is always on the stall and on our social channels.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="screen grid bg-ink text-cream md:grid-cols-2">
        <img
          src={prep}
          alt="A Bel3afiya shawarma wrap being folded to order"
          width={1600}
          height={1280}
          loading="lazy"
          decoding="async"
          className="img-hover h-72 w-full object-cover md:h-full"
        />
        <div className="flex items-center py-20">
          <div className="shell">
            <Reveal>
              <p className="eyebrow text-ember">How it&rsquo;s made</p>
              <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">
                Prepped that morning, grilled to order
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75">
                Salads chopped fresh, sauces mixed in-house, protein marinated and grilled as you
                order. Nothing pre-assembled and left under a lamp.
              </p>
              <img
                src={bowl}
                alt="Fresh shawarma bowl with salads and pickles"
                width={1600}
                height={1280}
                loading="lazy"
                decoding="async"
                className="img-hover mt-10 h-48 w-full max-w-lg rounded-md object-cover shadow-lg"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
