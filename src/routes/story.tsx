import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Flame, Sprout } from "lucide-react";

import heroStory from "../assets/hero-story.jpg";
import { Hero, HeroButton } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";

export const Route = createFileRoute("/story")({
  head: () =>
    createPageMeta({
      path: "/story",
      title: "Our Story — Bel3afiya, Founded by Yasser Hussainey",
      description:
        "How Yasser Hussainey left a full-time sales role to launch Bel3afiya at Rochdale Pioneers Market in May 2026 — the honest version.",
      keywords:
        "Bel3afiya story, Yasser Hussainey founder, Rochdale food stall, market stall journey, health-forward shawarma origin, Greater Manchester entrepreneur",
    }),
  component: StoryPage,
});

const chapters = [
  {
    icon: Briefcase,
    label: "Before",
    title: "A full-time job and an idea that wouldn't leave",
    body: "Yasser was working in sales at Sky. Good job, steady money — and a persistent conviction that shawarma could be done in a way that leaves you feeling good, not heavy.",
  },
  {
    icon: Sprout,
    label: "The decision",
    title: "Leaving the salary behind",
    body: "He left full-time employment to build Bel3afiya properly rather than as a side project. No safety net, no pretending it was easy.",
  },
  {
    icon: Flame,
    label: "May 2026",
    title: "Opening at Rochdale Pioneers Market",
    body: "One stall, one counter, one menu built around fresh prep. Serving Rochdale and Greater Manchester, learning from every single customer.",
  },
];

function StoryPage() {
  return (
    <>
      <Hero
        priority
        image={heroStory}
        imageAlt="Yasser Hussainey at the Bel3afiya market stall in Rochdale"
        eyebrow="Our Story"
        title={
          <>
            Built from scratch,
            <br />
            <span className="text-ember">in public</span>
          </>
        }
        subtitle="Bel3afiya is a founder-led business at the very beginning of its life. Here is the honest account of how it started."
      />

      <section className="screen bg-cream py-24">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-green">The chapters so far</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.4vw,3.4rem)]">
              Three steps, no shortcuts
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {chapters.map((c, i) => (
              <Reveal key={c.title} delay={i * 110}>
                <article className="card-hover flex h-full flex-col rounded-md border-t-2 border-ink pt-6">
                  <span className="text-ember" aria-hidden="true">
                    <c.icon size={26} strokeWidth={1.6} />
                  </span>
                  <p className="eyebrow mt-5 text-muted-foreground">{c.label}</p>
                  <h3 className="mt-3 text-2xl leading-tight">{c.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="screen bg-ink py-24 text-cream">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-ember">The unfiltered part</p>
            <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)]">Early stage means early stage</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              This is a market stall operation, not a restaurant group. Some days are busy, some are
              quiet, and every decision — from the marinade to the signage — is being made by one
              person learning as he goes.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              That is exactly why the whole process is documented on Instagram and TikTok: so the
              people eating the food know precisely who made it and why.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="rounded-md border-l-2 border-ember pl-7">
              <p className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight">
                &ldquo;If I&rsquo;m going to serve it, it has to be something I&rsquo;d happily eat
                every day.&rdquo;
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-cream/60">
                Yasser Hussainey — Founder
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="screen bg-sky-deep text-cream">
        <div className="hero-shell py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.4vw,4.2rem)]">
              Come taste the reason for all of it
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <HeroButton to="/menu">See the Menu</HeroButton>
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
