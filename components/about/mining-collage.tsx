import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function MiningCollage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal className="grid grid-cols-3 gap-4">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="relative h-[160px] overflow-hidden rounded-xl sm:h-[254px]">
              <Image src="/images/about/mining-1.png" alt="" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="relative h-[160px] overflow-hidden rounded-xl sm:h-[254px]">
              <Image src="/images/about/mining-2.png" alt="" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 h-[180px] overflow-hidden rounded-xl sm:h-[254px]">
              <Image src="/images/about/mining-3.png" alt="" fill sizes="66vw" className="object-cover" />
            </div>
          </div>
          <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl">
            <Image src="/images/about/mining-4.png" alt="" fill sizes="33vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
            Geography &amp; Mining
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink">
            From the Gravels of Ratnapura
          </h2>
          <p className="text-base leading-relaxed text-[#3c3834]">
            The heart of Sri Lanka&apos;s gem country lies in Ratnapura —
            literally &lsquo;City of Gems&rsquo; — where alluvial gravels
            known as illam are still worked by hand much as they have been
            for generations. Gem-bearing gravel is washed and sorted by
            skilled miners who read the earth with inherited expertise.
          </p>
          <p className="text-base leading-relaxed text-[#3c3834]">
            This traditional, small-scale approach means stones are
            recovered with minimal environmental impact and a direct human
            connection to the land — a provenance that machine-driven mining
            elsewhere simply cannot offer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
