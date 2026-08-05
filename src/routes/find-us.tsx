import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Navigation } from "lucide-react";

import heroFindUs from "../assets/hero-findus.jpg";
import { Hero, HeroButton } from "../components/site/Hero";
import { JsonLd } from "../components/site/JsonLd";
import { localBusinessSchema } from "../lib/schema";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";

export const Route = createFileRoute("/find-us")({
  head: () =>
    createPageMeta({
      path: "/find-us",
      title: "Find Us — Rochdale Pioneers Market | Bel3afiya",
      description:
        "Bel3afiya trades from Rochdale Pioneers Market, Rochdale, Greater Manchester. Location details, market hours and directions.",
      keywords:
        "Bel3afiya location, Rochdale Pioneers Market, find Bel3afiya, shawarma stall Rochdale, Greater Manchester food market, directions Bel3afiya",
    }),
  component: FindUsPage,
});

function FindUsPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero
        priority
        image={heroFindUs}
        imageAlt="Bel3afiya shawarma stall at Rochdale Pioneers Market"
        eyebrow="Find Us"
        title={
          <>
            Rochdale <span className="text-ember">Pioneers Market</span>
          </>
        }
        subtitle="You'll find the Bel3afiya stall inside Rochdale Pioneers Market, in the heart of Rochdale, Greater Manchester."
      >
        <HeroButton
          href="https://www.google.com/maps/search/?api=1&query=Rochdale+Pioneers+Market+Rochdale"
          variant="outline"
        >
          Open in Maps
        </HeroButton>
      </Hero>

      <section className="screen bg-cream py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-green">Visit the stall</p>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">Where and when</h2>

            <dl className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-ember"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <dt className="text-lg tracking-wide">Address</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Rochdale Pioneers Market
                    <br />
                    Rochdale, Greater Manchester
                    <br />
                    United Kingdom
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-ember"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <dt className="text-lg tracking-wide">Trading hours</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    We trade during Rochdale Pioneers Market opening hours. As an early-stage stall,
                    our exact days can shift week to week — the current schedule is always posted on
                    Instagram and TikTok before we open.
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Navigation
                  size={22}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-ember"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <dt className="text-lg tracking-wide">Getting here</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Central Rochdale, walkable from the tram and bus interchange with town-centre
                    parking nearby.
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-hover overflow-hidden rounded-md border border-border shadow-md">
              <iframe
                title="Map showing Rochdale Pioneers Market location"
                src="https://www.google.com/maps?q=Rochdale%20Pioneers%20Market%2C%20Rochdale&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="screen bg-ink text-cream">
        <div className="hero-shell py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.4vw,4.2rem)]">
              Check the menu before you walk over
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <HeroButton to="/menu">See the Menu</HeroButton>
              <HeroButton to="/contact" variant="outline">
                Contact Us
              </HeroButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
