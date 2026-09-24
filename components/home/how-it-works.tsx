import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    number: "01",
    title: "Discover a gemstone",
    body: "Browse gemstones by stone, cut or colour and view their key details.",
  },
  {
    number: "02",
    title: "Ask",
    body: "WhatsApp, call or enquire about anything you want to know.",
  },
  {
    number: "03",
    title: "See It",
    body: "View the gemstone in person or by live video under different lighting.",
  },
  {
    number: "04",
    title: "Verify & Buy",
    body: "Check the report or arrange independent testing, then complete your purchase directly with us.",
  },
];

export function HowItWorks() {
  return (
    <section className="container-page flex flex-col items-center gap-10 py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="From a photograph to a handshake"
          align="center"
        />
      </Reveal>
      <StaggerGrid className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="flex h-full flex-col items-center gap-6 rounded-xl border-4 border-white bg-[#f4f4f4] p-6 text-center">
              <p className="font-display text-4xl font-semibold text-[#a9873f]">
                {step.number}
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-display text-2xl text-brand-ink">
                  {step.title}
                </p>
                <p className="text-base text-[#5c5347]">{step.body}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
