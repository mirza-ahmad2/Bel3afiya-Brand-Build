import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Leaf, MapPin } from "lucide-react";

import heroHome from "../assets/hero-home.jpg";
import prep from "../assets/prep.jpg";
import bowl from "../assets/bowl.jpg";
import { Hero, HeroButton } from "../components/site/Hero";
import { JsonLd } from "../components/site/JsonLd";
import { localBusinessSchema, websiteSchema } from "../lib/schema";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createPageMeta({
      path: "/",
      title: "Bel3afiya — Health-Forward Shawarma in Rochdale",
      description:
        "Bel3afiya is a health-focused shawarma stall at Rochdale Pioneers Market, Greater Manchester. Fresh prep, bold flavour, founder-led.",
      keywords:
        "Bel3afiya, shawarma Rochdale, health-forward shawarma, Rochdale Pioneers Market, Greater Manchester food stall, Yasser Hussainey, fresh shawarma wrap, shawarma bowl",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <JsonLd data={[websiteSchema, localBusinessSchema]} />
      <Hero
        priority
        image={heroHome}
        imageAlt="Fresh Bel3afiya shawarma being prepared at Rochdale Pioneers Market stall"
        eyebrow="Rochdale Pioneers Market — Greater Manchester"
        title={
          <>
            Shawarma that
            <br />
            <span className="text-ember">loves you back</span>
          </>
        }
        subtitle="Bel3afiya is a health-forward take on shawarma — fresh prep, honest ingredients, and the kind of flavour that doesn't leave you regretting lunch."
      >
        <HeroButton to="/menu">See the Menu</HeroButton>
        <HeroButton to="/find-us" variant="outline">
          Find the Stall
        </HeroButton>
      </Hero>

      <section className="screen bg-cream py-24">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-green">What Bel3afiya means</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">Wholesome, not watered down</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              &ldquo;Bel3afiya&rdquo; is what you say when you want someone to eat well and feel
              well. That is the whole brief: street food that is fast and satisfying, prepared with
              the care of something you would cook at home.
            </p>
            <ul className="mt-9 space-y-5" role="list">
              {[
                {
                  icon: Leaf,
                  title: "Fresh, health-conscious prep",
                  body: "Salads and sauces prepped fresh, lean protein, nothing sitting around all day.",
                },
                {
                  icon: MapPin,
                  title: "One stall, done properly",
                  body: "We are a market stall, not a chain — every wrap comes off the same counter.",
                },
                {
                  icon: Clock,
                  title: "Built in public since May 2026",
                  body: "The wins and the hard days are all documented as they happen.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 shrink-0 text-ember" aria-hidden="true">
                    <item.icon size={22} strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg tracking-wide">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <img
              src={prep}
              alt="Hands folding a freshly filled shawarma wrap on a wooden board"
              width={1600}
              height={1280}
              loading="lazy"
              decoding="async"
              className="img-hover col-span-2 h-64 w-full rounded-md object-cover shadow-md md:h-80"
            />
            <img
              src={bowl}
              alt="Shawarma salad bowl with tabbouleh, pickles and grilled chicken"
              width={1600}
              height={1280}
              loading="lazy"
              decoding="async"
              className="img-hover h-44 w-full rounded-md object-cover shadow-md md:h-56"
            />
            <div className="card-hover flex h-44 flex-col justify-center rounded-md bg-ink p-6 text-cream shadow-md md:h-56">
              <p className="font-display text-4xl text-ember">May 2026</p>
              <p className="mt-2 text-sm text-cream/70">
                Launched at Rochdale Pioneers Market, Greater Manchester.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="screen relative isolate overflow-hidden bg-ink py-24 text-cream">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <img
              src={prep}
              alt="Shawarma being prepared on the Bel3afiya market stall"
              width={1600}
              height={1280}
              loading="lazy"
              decoding="async"
              className="img-hover h-72 w-full rounded-md object-cover shadow-lg md:h-[26rem]"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-ember">The founder</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">
              Yasser left the desk job to build this
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              Yasser Hussainey walked away from a full-time sales role at Sky to build Bel3afiya
              properly. No investor deck, no test kitchen — just a market stall, a recipe he
              believes in, and a camera pointed at the real process.
            </p>
            <Link
              to="/story"
              className="mt-9 inline-flex items-center gap-3 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ember transition-colors hover:text-ember-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Read the story <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="screen bg-sky-deep text-cream">
        <div className="hero-shell py-24">
          <Reveal>
            <p className="eyebrow text-cream/70">Come and eat</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,5.6vw,4.6rem)]">
              Find us on the stall this week
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85">
              Rochdale Pioneers Market, Greater Manchester. Bring an appetite — and follow the build
              while you wait.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <HeroButton to="/find-us">Find Us</HeroButton>
              <HeroButton to="/journey" variant="outline">
                Follow the Journey
              </HeroButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
