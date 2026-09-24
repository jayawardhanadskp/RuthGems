export type GemStatus = "available" | "reserved";

export type GemType =
  | "Sapphire"
  | "Ruby"
  | "Spinel"
  | "Alexandrite"
  | "Cat's Eye"
  | "Emerald";

export type GemColour =
  | "Royal Blue"
  | "Cornflower"
  | "Padparadscha"
  | "Pink"
  | "Yellow"
  | "Green"
  | "Violet"
  | "White";

export type GemCut =
  | "Oval"
  | "Cushion"
  | "Round"
  | "Emerald"
  | "Pear"
  | "Heart"
  | "Cabochon"
  | "Radiant";

export type GemClarity = "Loupe Clean" | "Eye Clean" | "Slightly Included";

export type GemTreatment = "Unheated" | "Traditionally Heated" | "No Indication";

export type GemOrigin = "Ratnapura" | "Elahera" | "Balangoda" | "Okkampitiya";

export type GemCertification = "GIA" | "SSEF" | "GRS" | "NGJA" | "Uncertified";

export interface CertificationDetails {
  lab: GemCertification;
  reportNo: string;
  note: string;
}

export interface Gemstone {
  slug: string;
  referenceNo: string;
  name: string;
  type: GemType;
  colour: GemColour;
  cut: GemCut;
  caratWeight: number;
  clarity: GemClarity;
  treatment: GemTreatment;
  origin: GemOrigin;
  certification: GemCertification;
  certificationDetails?: CertificationDetails;
  status: GemStatus;
  priceLkr: number;
  dimensionsMm: string;
  species: string;
  hardnessMohs: number;
  description: string[];
  images: string[];
}

export interface GemShape {
  name: GemCut;
  description: string;
  icon: string;
}

export interface FilterCounts {
  gemType: Record<string, number>;
  colour: Record<string, number>;
  cut: Record<string, number>;
  clarity: Record<string, number>;
  treatment: Record<string, number>;
  origin: Record<string, number>;
  certification: Record<string, number>;
}

export interface GemstoneFilters {
  gemType?: GemType[];
  colour?: GemColour[];
  cut?: GemCut[];
  clarity?: GemClarity[];
  treatment?: GemTreatment[];
  origin?: GemOrigin[];
  certification?: GemCertification[];
  minCarat?: number;
  maxCarat?: number;
  sort?: "newest" | "price-asc" | "price-desc" | "carat-desc";
  page?: number;
}
