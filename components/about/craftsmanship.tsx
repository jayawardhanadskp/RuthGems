import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function Craftsmanship() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
            Craftsmanship
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink">
            Cut by Master Hands
          </h2>
          <p className="text-base leading-relaxed text-[#3c3834]">
            A rough crystal only becomes a gem in the hands of a skilled
            cutter. Sri Lanka&apos;s lapidaries are among the finest in the
            world, cutting each stone to reveal its optimal colour,
            brilliance and life rather than simply to preserve weight.
          </p>
          <p className="text-base leading-relaxed text-[#3c3834]">
            Every Ruth Gems stone is judged on the precision of its cut —
            symmetry, proportion and polish — because craftsmanship is what
            turns a fine mineral into a lasting treasure.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative h-[280px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[520px]">
          <Image
            src="/images/about/craftsmanship.png"
            alt="Cutting a gemstone"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
