import { Award, HandHeart, MapPinned } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const badges = [
  {
    icon: Award,
    title: "Independently Certified",
    body: "Every stone is accompanied by a report from a respected independent laboratory, confirming its identity, origin and any treatment.",
  },
  {
    icon: HandHeart,
    title: "Ethically & Traditionally Sourced",
    body: "Our gems come from small-scale, hand-worked mines that honour both the land and the generations of miners who work it.",
  },
  {
    icon: MapPinned,
    title: "Direct From the Source",
    body: "Sourced at origin in Sri Lanka, we remove the layers between mine and collector — for better provenance and better value.",
  },
];

export function TrustBadges() {
  return (
    <section id="contact" className="bg-[#f5efe6] py-16 sm:py-24">
      <div className="container-page flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Trust & Authenticity"
            title="Buy With Complete Confidence"
            align="center"
            variant="muted"
          />
        </Reveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3">
          {badges.map((badge) => (
            <StaggerItem key={badge.title}>
              <div className="flex flex-col items-center gap-4 text-center">
                <badge.icon className="size-11 text-brand-green" strokeWidth={1.5} />
                <p className="font-display text-2xl font-semibold text-brand-ink">
                  {badge.title}
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {badge.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
