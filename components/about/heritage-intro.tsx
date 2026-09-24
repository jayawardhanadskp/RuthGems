import { Reveal } from "@/components/motion/reveal";

export function HeritageIntro() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <Reveal className="container-page flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
          A Heritage Written in Stone
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
          Known to the Ancients as Ratna-Dweepa — the Island of Gems
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Sri Lanka is one of the oldest and most prolific sources of
          precious gemstones on earth. Its unique geology has produced
          sapphires, rubies, spinels and rare chrysoberyls of extraordinary
          quality for more than twenty-five centuries. From the courts of
          ancient kings to the crown jewels of Europe, Ceylon stones have
          long been prized for their clarity, colour and enduring
          brilliance.
        </p>
      </Reveal>
    </section>
  );
}
