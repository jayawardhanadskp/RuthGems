import { Hero } from "@/components/home/hero";
import { CategoryChips } from "@/components/home/category-chips";
import { FeaturedGemstones } from "@/components/home/featured-gemstones";
import { ShapeCutGrid } from "@/components/home/shape-cut-grid";
import { GiftBanner } from "@/components/home/gift-banner";
import { TrustSection } from "@/components/home/trust-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { FaqAccordion } from "@/components/home/faq-accordion";
import { PhotoStrip } from "@/components/home/photo-strip";
import { CtaBanner } from "@/components/common/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryChips />
      <FeaturedGemstones />
      <ShapeCutGrid />
      <GiftBanner />
      <TrustSection />
      <HowItWorks />
      <FaqAccordion />
      <PhotoStrip />
      <CtaBanner />
    </>
  );
}
