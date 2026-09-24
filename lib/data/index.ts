import { allGemstones } from "@/lib/data/gemstones";
import type { Gemstone, GemstoneFilters } from "@/types/gemstone";

export { categories } from "@/lib/data/categories";
export { shapes, gemVarieties, colourSpectrum } from "@/lib/data/shapes";

const PAGE_SIZE = 9;

/**
 * These functions are the only seam the future backend needs to replace —
 * every page/component reads gemstone data through here, never from
 * `gemstones.ts` directly.
 */
export async function getGemstones(filters: GemstoneFilters = {}) {
  let results: Gemstone[] = [...allGemstones];

  if (filters.gemType?.length) {
    results = results.filter((g) => filters.gemType!.includes(g.type));
  }
  if (filters.colour?.length) {
    results = results.filter((g) => filters.colour!.includes(g.colour));
  }
  if (filters.cut?.length) {
    results = results.filter((g) => filters.cut!.includes(g.cut));
  }
  if (filters.clarity?.length) {
    results = results.filter((g) => filters.clarity!.includes(g.clarity));
  }
  if (filters.treatment?.length) {
    results = results.filter((g) => filters.treatment!.includes(g.treatment));
  }
  if (filters.origin?.length) {
    results = results.filter((g) => filters.origin!.includes(g.origin));
  }
  if (filters.certification?.length) {
    results = results.filter((g) =>
      filters.certification!.includes(g.certification)
    );
  }
  if (typeof filters.minCarat === "number") {
    results = results.filter((g) => g.caratWeight >= filters.minCarat!);
  }
  if (typeof filters.maxCarat === "number") {
    results = results.filter((g) => g.caratWeight <= filters.maxCarat!);
  }

  switch (filters.sort) {
    case "price-asc":
      results.sort((a, b) => a.priceLkr - b.priceLkr);
      break;
    case "price-desc":
      results.sort((a, b) => b.priceLkr - a.priceLkr);
      break;
    case "carat-desc":
      results.sort((a, b) => b.caratWeight - a.caratWeight);
      break;
    default:
      break; // "newest" == dataset order
  }

  const total = results.length;
  const page = Math.max(1, filters.page ?? 1);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const items = results.slice(start, start + PAGE_SIZE);

  return { items, total, page, totalPages, pageSize: PAGE_SIZE };
}

export async function getGemstoneBySlug(slug: string) {
  return allGemstones.find((g) => g.slug === slug) ?? null;
}

export async function getAllSlugs() {
  return allGemstones.map((g) => g.slug);
}

export async function getRelatedGemstones(slug: string, limit = 4) {
  const current = await getGemstoneBySlug(slug);
  if (!current) return [];
  return allGemstones
    .filter(
      (g) =>
        g.slug !== slug &&
        (g.type === current.type || g.colour === current.colour)
    )
    .slice(0, limit);
}

export async function getFeaturedGemstones(limit = 4) {
  return allGemstones.filter((g) => g.status === "available").slice(0, limit);
}

export async function getFilterFacets() {
  const gemTypes = new Set<string>();
  const colours = new Set<string>();
  const cuts = new Set<string>();
  const clarities = new Set<string>();
  const treatments = new Set<string>();
  const origins = new Set<string>();
  const certifications = new Set<string>();

  for (const g of allGemstones) {
    gemTypes.add(g.type);
    colours.add(g.colour);
    cuts.add(g.cut);
    clarities.add(g.clarity);
    treatments.add(g.treatment);
    origins.add(g.origin);
    certifications.add(g.certification);
  }

  const count = <T extends string>(field: keyof Gemstone, values: Set<T>) =>
    Object.fromEntries(
      [...values].map((v) => [
        v,
        allGemstones.filter((g) => g[field] === v).length,
      ])
    );

  return {
    gemType: count("type", gemTypes),
    colour: count("colour", colours),
    cut: count("cut", cuts),
    clarity: count("clarity", clarities),
    treatment: count("treatment", treatments),
    origin: count("origin", origins),
    certification: count("certification", certifications),
  };
}
