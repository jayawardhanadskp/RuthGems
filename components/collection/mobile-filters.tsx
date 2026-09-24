"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterSidebar } from "@/components/collection/filter-sidebar";
import type { FilterCounts } from "@/types/gemstone";

export function MobileFilters({ facets }: { facets: FilterCounts }) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            className="flex h-11 items-center gap-2 rounded-lg lg:hidden"
          />
        }
      >
        <SlidersHorizontal className="size-4" />
        Filters
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] overflow-y-auto p-0">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Filters</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-6">
          <FilterSidebar facets={facets} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
