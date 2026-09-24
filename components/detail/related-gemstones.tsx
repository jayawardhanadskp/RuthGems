import Link from "next/link";
import { GemstoneCard } from "@/components/common/gemstone-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import type { Gemstone } from "@/types/gemstone";

export function RelatedGemstones({ items }: { items: Gemstone[] }) {
  if (items.length === 0) return null;

  return (
    <section className="container-page flex flex-col gap-8 py-16">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-gold uppercase">
            You may also like
          </p>
          <h2 className="font-display text-4xl text-brand-ink">
            Related Gemstones
          </h2>
        </div>
        <Link
          href="/collection"
          className="text-sm font-semibold text-brand-green hover:underline"
        >
          View all →
        </Link>
      </div>
      <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((gemstone) => (
          <StaggerItem key={gemstone.slug}>
            <GemstoneCard gemstone={gemstone} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
