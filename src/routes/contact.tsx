import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Instagram, MapPin, Music2 } from "lucide-react";
import { useState } from "react";

import heroContact from "../assets/hero-contact.jpg";
import { Hero } from "../components/site/Hero";
import { Reveal } from "../components/site/Reveal";
import { createPageMeta } from "../lib/seo";
import { SOCIAL_LINKS } from "../lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () =>
    createPageMeta({
      path: "/contact",
      title: "Contact — Bel3afiya Shawarma, Rochdale",
      description:
        "Get in touch with Bel3afiya about the stall, catering enquiries or collaborations. Based at Rochdale Pioneers Market, Greater Manchester.",
      keywords:
        "contact Bel3afiya, Bel3afiya catering, Rochdale shawarma enquiry, message Bel3afiya, Yasser Hussainey contact, market stall collaboration",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Hero
        priority
        image={heroContact}
        imageAlt="Bel3afiya contact — reach out about the Rochdale market stall"
        eyebrow="Contact"
        title={
          <>
            Say <span className="text-ember">salaam</span>
          </>
        }
        subtitle="Questions about the stall, catering, collaborations, or just want to tell us how the wrap was — send it over."
      />

      <section className="screen bg-cream py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow text-green">Send a message</p>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3rem)]">We read every one</h2>

            {sent ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-10 flex items-start gap-4 rounded-md border border-sky bg-card p-8 shadow-sm"
              >
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-sky-deep"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Thanks — your message is noted. Yasser replies personally, usually between market
                  days.
                </p>
              </div>
            ) : (
              <form
                className="mt-10 space-y-6"
                aria-label="Contact form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="eyebrow block text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-3 w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-ember focus-visible:ring-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="eyebrow block text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-3 w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-ember focus-visible:ring-0"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="eyebrow block text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-3 w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-ember focus-visible:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow block text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full border-b border-input bg-transparent py-3 text-base outline-none transition-colors focus:border-ember focus-visible:ring-0"
                  />
                </div>
                <button type="submit" className="btn-ember px-8 py-3.5 text-[0.8rem]">
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="card-hover rounded-md bg-ink p-9 text-cream shadow-lg">
              <h2 className="text-2xl">Other ways to reach us</h2>
              <ul className="mt-8 space-y-6 text-sm" role="list">
                <li className="flex gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
                  <span className="text-cream/75">
                    Rochdale Pioneers Market, Rochdale, Greater Manchester, UK — come and speak to
                    us on the stall.
                  </span>
                </li>
                <li className="flex gap-4">
                  <Instagram size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link text-cream/75 underline decoration-cream/30 underline-offset-4"
                  >
                    Message us on Instagram
                  </a>
                </li>
                <li className="flex gap-4">
                  <Music2 size={20} className="mt-0.5 shrink-0 text-ember" aria-hidden="true" />
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link text-cream/75 underline decoration-cream/30 underline-offset-4"
                  >
                    Find us on TikTok
                  </a>
                </li>
              </ul>
              <p className="mt-10 text-xs leading-relaxed text-cream/50">
                A direct email address and phone number will be published here once the
                stall&rsquo;s business line is set up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
