import { createFileRoute } from "@tanstack/react-router";
import { Camera, Instagram, Linkedin, Music2 } from "lucide-react";

import heroJourney from "../assets/hero-journey.jpg";
import { Hero, HeroButton } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";
import { SOCIAL_LINKS } from "../lib/site-config";

export const Route = createFileRoute("/journey")({
  head: () =>
    createPageMeta({
      path: "/journey",
      title: "Follow the Journey — Bel3afiya Behind the Scenes",
      description:
        "Yasser documents the real build of Bel3afiya on Instagram, TikTok and LinkedIn — prep days, market days and everything in between.",
      keywords:
        "Bel3afiya journey, Yasser Hussainey Instagram, food business build, Rochdale market stall behind the scenes, Bel3afiya TikTok, founder story",
    }),
  component: JourneyPage,
});

const channels = [
  {
    icon: Instagram,
    name: "Instagram",
    body: "Prep days, market days, and the food itself — shot on the stall.",
    href: SOCIAL_LINKS.instagram,
    cta: "Follow on Instagram",
  },
  {
    icon: Music2,
    name: "TikTok",
    body: "Short-form, unfiltered clips of building a food business from nothing.",
    href: SOCIAL_LINKS.tiktok,
    cta: "Watch on TikTok",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    body: "The business side: leaving employment, lessons learned, the honest numbers of week one.",
    href: SOCIAL_LINKS.linkedin,
    cta: "Connect with Yasser",
  },
];

function JourneyPage() {
  return (
    <>
      <Hero
        priority
        image={heroJourney}
        imageAlt="Behind the scenes at Bel3afiya — documenting the market stall journey"
        eyebrow="Follow the Journey"
        title={
          <>
            The build,
            <br />
            <span className="text-ember">unfiltered</span>
          </>
        }
        subtitle="Every early-stage decision, mistake and small win is documented as it happens. No highlight reel, no anonymous brand."
      >
        <HeroButton href={SOCIAL_LINKS.instagram}>Follow on Instagram</HeroButton>
        <HeroButton href={SOCIAL_LINKS.tiktok} variant="outline">
          Watch on TikTok
        </HeroButton>
      </Hero>

      <section className="screen bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-green">Where to watch</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4.2vw,3.2rem)]">
              Three channels, one story
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.name} delay={i * 100}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${c.cta} — opens in new tab`}
                  className="card-hover flex h-full flex-col rounded-md border border-border bg-card p-8 shadow-sm"
                >
                  <span className="text-ember" aria-hidden="true">
                    <c.icon size={26} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-2xl">{c.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <span className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-sky">
                    {c.cta}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="screen bg-ink py-24 text-cream">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-ember">Why document it</p>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)]">
              You should know who makes your food
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              Most food brands show you the finished plate. Bel3afiya shows you the 6am prep, the
              quiet market days and the decisions behind the menu — because that transparency is the
              product too.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-hover flex items-start gap-5 rounded-md border border-cream/15 p-8">
              <Camera
                size={26}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-ember"
                aria-hidden="true"
              />
              <p className="text-base leading-relaxed text-cream/80">
                Filmed and posted by Yasser himself, usually between serving customers. If you see
                the camera on the counter, that&rsquo;s why.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
