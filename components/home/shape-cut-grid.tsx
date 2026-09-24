import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import { shapes } from "@/lib/data";

export function ShapeCutGrid() {
  return (
    <section className="container-page flex flex-col gap-8 py-16 sm:py-20">
      <Reveal>
        <SectionHeading eyebrow="Browse by Shape & Cut" title="Find your perfect cut" />
      </Reveal>
      <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {shapes.map((shape) => (
          <StaggerItem key={shape.name}>
            <Link
              href={`/collection?cut=${encodeURIComponent(shape.name)}`}
              className="flex h-full flex-col items-center gap-4 rounded-xl border border-[#e2d8c6] bg-[#fefefd] px-4 py-8 text-center transition-colors hover:border-brand-green"
            >
              <div className="relative h-[73px] w-[90px]">
                <Image src={shape.icon} alt="" fill className="object-contain" />
              </div>
              <p className="font-display text-xl text-brand-ink">{shape.name}</p>
              <p className="text-xs text-[#7c7160]">{shape.description}</p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
