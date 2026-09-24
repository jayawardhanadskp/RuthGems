import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { colourSpectrum } from "@/lib/data";

export function ColourSpectrum() {
  return (
    <section className="bg-brand-forest-dark py-16 sm:py-24">
      <div className="container-page flex flex-col items-center gap-12">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">
            A Spectrum of Colour
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            The Colours of Ceylon
          </h2>
        </Reveal>
        <StaggerGrid className="flex w-full flex-wrap justify-center gap-8 sm:gap-10">
          {colourSpectrum.map((colour) => (
            <StaggerItem key={colour.name} className="flex flex-col items-center gap-3.5">
              <div className="relative size-20 overflow-hidden rounded-full sm:size-24">
                <Image src={colour.swatch} alt={colour.name} fill className="object-cover" />
              </div>
              <p className="font-display text-lg font-semibold text-white sm:text-xl">
                {colour.name}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
        <Reveal className="max-w-2xl text-center text-sm text-[#d2d6ce]">
          From the deep royal blues of Ratnapura to the elusive pink-orange
          of padparadscha, Ceylon produces a range of hues unmatched by any
          single source.
        </Reveal>
      </div>
    </section>
  );
}
