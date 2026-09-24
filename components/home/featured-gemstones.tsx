import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getFeaturedGemstones } from "@/lib/data";

export async function FeaturedGemstones() {
  const featured = await getFeaturedGemstones(4);

  return (
    <section className="container-page flex flex-col gap-8 py-16 sm:py-20">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="In our hands this month"
          title="Featured gemstones"
        />
        <Button
          nativeButton={false}
          render={<Link href="/collection" />}
          className="h-11 shrink-0 rounded-xl bg-brand-green-light px-5 text-base font-medium text-white hover:bg-brand-green-light/90"
        >
          Browse All
        </Button>
      </Reveal>
      <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((gemstone) => (
          <StaggerItem key={gemstone.slug}>
            <GemstoneCard gemstone={gemstone} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
