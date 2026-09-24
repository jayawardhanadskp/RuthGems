import type { GemType } from "@/types/gemstone";

export interface Category {
  type: GemType;
  image: string;
}

const photos = [
  "/images/home/category-1.png",
  "/images/home/category-2.png",
  "/images/home/category-3.png",
  "/images/home/category-4.png",
];

export const categories: Category[] = (
  ["Ruby", "Sapphire", "Spinel", "Alexandrite", "Cat's Eye", "Emerald"] as GemType[]
).map((type, i) => ({ type, image: photos[i % photos.length] }));
