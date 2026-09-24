import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { gemVarieties } from "@/lib/data";

export function VarietyStrip() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="container-page flex flex-col items-center gap-11">
        <Reveal>
          <SectionHeading
            eyebrow="The Family of Ceylon Gems"
            title="Gemstone Varieties"
            description="Sri Lanka is unusual for the sheer breadth of gem species it produces — a single island yielding a spectrum of colour found almost nowhere else."
            align="center"
            variant="muted"
          />
        </Reveal>
        <StaggerGrid className="flex w-full gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-8">
          {gemVarieties.map((variety) => (
            <StaggerItem key={variety.name} className="w-[140px] shrink-0 sm:w-auto">
              <div className="flex flex-col gap-2">
                <div className="relative h-[150px] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-brand-ink">{variety.name}</p>
                <p className="text-[11px] leading-snug text-muted-foreground">
                  {variety.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
