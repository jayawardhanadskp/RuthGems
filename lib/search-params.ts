import type { GemstoneFilters } from "@/types/gemstone";

type RawSearchParams = { [key: string]: string | string[] | undefined };

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function parseGemstoneFilters(params: RawSearchParams): GemstoneFilters {
  return {
    gemType: toArray(params.gemType) as GemstoneFilters["gemType"],
    colour: toArray(params.colour) as GemstoneFilters["colour"],
    cut: toArray(params.cut) as GemstoneFilters["cut"],
    clarity: toArray(params.clarity) as GemstoneFilters["clarity"],
    treatment: toArray(params.treatment) as GemstoneFilters["treatment"],
    origin: toArray(params.origin) as GemstoneFilters["origin"],
    certification: toArray(
      params.certification
    ) as GemstoneFilters["certification"],
    minCarat: params.minCarat ? Number(params.minCarat) : undefined,
    maxCarat: params.maxCarat ? Number(params.maxCarat) : undefined,
    sort: (params.sort as GemstoneFilters["sort"]) ?? "newest",
    page: params.page ? Number(params.page) : 1,
  };
}

export function buildCollectionHref(
  params: RawSearchParams,
  overrides: Record<string, string | number | undefined>
) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) value.forEach((v) => search.append(key, v));
    else search.append(key, value);
  }
  for (const [key, value] of Object.entries(overrides)) {
    search.delete(key);
    if (value !== undefined) search.set(key, String(value));
  }
  return `/collection?${search.toString()}`;
}
