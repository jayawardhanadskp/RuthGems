"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface FilterCheckboxGroupProps {
  options: { label: string; count?: number }[];
  selected: string[];
  onToggle: (value: string) => void;
}

export function FilterCheckboxGroup({
  options,
  selected,
  onToggle,
}: FilterCheckboxGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.label}
          className="flex cursor-pointer items-center justify-between gap-2 text-sm text-[#3c3834]"
        >
          <span className="flex items-center gap-2">
            <Checkbox
              checked={selected.includes(option.label)}
              onCheckedChange={() => onToggle(option.label)}
            />
            {option.label}
          </span>
          {typeof option.count === "number" && (
            <span className="text-xs text-muted-foreground">
              {option.count}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}
