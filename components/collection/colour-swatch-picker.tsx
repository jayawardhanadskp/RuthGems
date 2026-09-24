"use client";

import { cn } from "@/lib/utils";
import type { GemColour } from "@/types/gemstone";

const colourHex: Record<GemColour, string> = {
  "Royal Blue": "#1d3f8f",
  Cornflower: "#4f83cc",
  Padparadscha: "#e8794f",
  Pink: "#e0629b",
  Yellow: "#e6c14a",
  Green: "#3f7d52",
  Violet: "#7a5ea8",
  White: "#f1efe9",
};

export function ColourSwatchPicker({
  options,
  selected,
  onToggle,
}: {
  options: GemColour[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {options.map((colour) => {
        const isSelected = selected.includes(colour);
        return (
          <button
            key={colour}
            type="button"
            onClick={() => onToggle(colour)}
            className="flex flex-col items-center gap-1.5"
            aria-pressed={isSelected}
            title={colour}
          >
            <span
              className={cn(
                "size-7 rounded-full border-2 transition-transform",
                isSelected
                  ? "scale-110 border-brand-green"
                  : "border-transparent"
              )}
              style={{ backgroundColor: colourHex[colour] }}
            />
            <span className="text-[10px] text-muted-foreground">
              {colour}
            </span>
          </button>
        );
      })}
    </div>
  );
}
