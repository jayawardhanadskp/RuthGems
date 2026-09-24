"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const MULTI_FIELDS = [
  "gemType",
  "colour",
  "cut",
  "clarity",
  "treatment",
  "origin",
  "certification",
];

export function ActiveFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const chips: { key: string; label: string; remove: () => URLSearchParams }[] = [];

  for (const field of MULTI_FIELDS) {
    for (const value of searchParams.getAll(field)) {
      chips.push({
        key: `${field}:${value}`,
        label: value,
        remove: () => {
          const params = new URLSearchParams(searchParams.toString());
          const remaining = params.getAll(field).filter((v) => v !== value);
          params.delete(field);
          remaining.forEach((v) => params.append(field, v));
          return params;
        },
      });
    }
  }

  const minCarat = searchParams.get("minCarat");
  const maxCarat = searchParams.get("maxCarat");
  if (minCarat || maxCarat) {
    chips.push({
      key: "carat",
      label: `${minCarat ?? "0.5"} – ${maxCarat ?? "12.0"} ct`,
      remove: () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("minCarat");
        params.delete("maxCarat");
        return params;
      },
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => router.push(`/collection?${chip.remove().toString()}`)}
          className="flex items-center gap-2 rounded-full border border-[#d2e0d8] bg-[#f0f5f2] py-2 pr-3 pl-3.5 text-sm font-medium text-brand-green"
        >
          {chip.label}
          <X className="size-3" />
        </button>
      ))}
      <button
        onClick={() => router.push("/collection")}
        className="text-sm font-medium text-brand-gold-muted hover:underline"
      >
        Clear all
      </button>
    </div>
  );
}
