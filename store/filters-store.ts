import { create } from "zustand";
import type {
  GemCertification,
  GemClarity,
  GemColour,
  GemCut,
  GemOrigin,
  GemTreatment,
  GemType,
  GemstoneFilters,
} from "@/types/gemstone";

type MultiField =
  | "gemType"
  | "colour"
  | "cut"
  | "clarity"
  | "treatment"
  | "origin"
  | "certification";

interface FiltersState {
  gemType: GemType[];
  colour: GemColour[];
  cut: GemCut[];
  clarity: GemClarity[];
  treatment: GemTreatment[];
  origin: GemOrigin[];
  certification: GemCertification[];
  minCarat?: number;
  maxCarat?: number;
  sort: GemstoneFilters["sort"];
  toggle: (field: MultiField, value: string) => void;
  setCaratRange: (min?: number, max?: number) => void;
  setSort: (sort: GemstoneFilters["sort"]) => void;
  clearAll: () => void;
  hydrateFromSearchParams: (params: URLSearchParams) => void;
}

const emptyFilters = {
  gemType: [],
  colour: [],
  cut: [],
  clarity: [],
  treatment: [],
  origin: [],
  certification: [],
  minCarat: undefined,
  maxCarat: undefined,
  sort: "newest" as const,
};

export const useFiltersStore = create<FiltersState>((set) => ({
  ...emptyFilters,
  toggle: (field, value) =>
    set((state) => {
      const current = state[field] as string[];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { [field]: next } as Partial<FiltersState>;
    }),
  setCaratRange: (min, max) => set({ minCarat: min, maxCarat: max }),
  setSort: (sort) => set({ sort }),
  clearAll: () => set({ ...emptyFilters }),
  hydrateFromSearchParams: (params) =>
    set({
      gemType: params.getAll("gemType") as GemType[],
      colour: params.getAll("colour") as GemColour[],
      cut: params.getAll("cut") as GemCut[],
      clarity: params.getAll("clarity") as GemClarity[],
      treatment: params.getAll("treatment") as GemTreatment[],
      origin: params.getAll("origin") as GemOrigin[],
      certification: params.getAll("certification") as GemCertification[],
      minCarat: params.get("minCarat")
        ? Number(params.get("minCarat"))
        : undefined,
      maxCarat: params.get("maxCarat")
        ? Number(params.get("maxCarat"))
        : undefined,
      sort: (params.get("sort") as GemstoneFilters["sort"]) ?? "newest",
    }),
}));

export function filtersToSearchParams(
  filters: Omit<FiltersState, "toggle" | "setCaratRange" | "setSort" | "clearAll" | "hydrateFromSearchParams">
) {
  const params = new URLSearchParams();
  filters.gemType.forEach((v) => params.append("gemType", v));
  filters.colour.forEach((v) => params.append("colour", v));
  filters.cut.forEach((v) => params.append("cut", v));
  filters.clarity.forEach((v) => params.append("clarity", v));
  filters.treatment.forEach((v) => params.append("treatment", v));
  filters.origin.forEach((v) => params.append("origin", v));
  filters.certification.forEach((v) => params.append("certification", v));
  if (filters.minCarat !== undefined)
    params.set("minCarat", String(filters.minCarat));
  if (filters.maxCarat !== undefined)
    params.set("maxCarat", String(filters.maxCarat));
  if (filters.sort && filters.sort !== "newest")
    params.set("sort", filters.sort);
  return params;
}
