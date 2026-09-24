import { GemstoneCard } from "@/components/common/gemstone-card";
import { StaggerGrid, StaggerItem } from "@/components/motion/reveal";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneGrid({ items }: { items: Gemstone[] }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border py-24 text-center">
        <p className="font-display text-2xl text-brand-ink">
          No gemstones match these filters
        </p>
        <p className="text-sm text-muted-foreground">
          Try widening your carat range or clearing a filter.
        </p>
      </div>
    );
  }

  return (
    <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((gemstone) => (
        <StaggerItem key={gemstone.slug}>
          <GemstoneCard gemstone={gemstone} />
        </StaggerItem>
      ))}
    </StaggerGrid>
  );
}
