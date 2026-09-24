import Image from "next/image";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const cards = [
  {
    title: "Full treatment disclosure",
    body: "Every stone states plainly whether it is unheated, traditionally heated, or otherwise treated. If we do not know, we say so rather than guess.",
  },
  {
    title: "Independent certification",
    body: "Most stones arrive with a report from GIA, SSEF, GRS or the NGJA. Where a stone is uncertified it is marked as such and priced accordingly.",
  },
  {
    title: "Verifiable origin",
    body: "We name the district each stone came from — Ratnapura, Elahera, Balangoda, Okkampitiya — because we were there when it came out of the ground.",
  },
  {
    title: "You deal with us, directly",
    body: "No brokers, no marketplace margin, no automated checkout. Two partners who buy the stones themselves, and who answer the phone themselves.",
  },
];

export function TrustSection() {
  return (
    <section className="container-page flex flex-col items-center gap-14 py-16 sm:py-20">
      <Reveal className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium tracking-[1px] text-brand-ink uppercase sm:text-base">
          Trust & transparency
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight text-brand-ink sm:text-5xl">
          Everything we know about a stone, you know too
        </h2>
      </Reveal>

      <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.4fr_1fr]">
        <StaggerGrid className="flex flex-col gap-6">
          {cards.slice(0, 2).map((card) => (
            <StaggerItem key={card.title}>
              <TrustCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal className="relative order-first mx-auto h-[260px] w-full max-w-[420px] overflow-hidden rounded-xl sm:h-[360px] lg:order-none lg:h-[440px] lg:max-w-none">
          <Image
            src="/images/home/trust-image.png"
            alt="Ceylon gem trading"
            fill
            sizes="(max-width: 1024px) 90vw, 33vw"
            className="object-cover"
          />
        </Reveal>

        <StaggerGrid className="flex flex-col gap-6">
          {cards.slice(2).map((card) => (
            <StaggerItem key={card.title}>
              <TrustCard {...card} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <Reveal className="max-w-xl text-center text-lg text-brand-ink">
        The gem trade has survived on reputation for two thousand years. We
        would rather lose a sale than a name.
      </Reveal>
    </section>
  );
}

function TrustCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl bg-[#f3ede2] p-6">
      <p className="font-display text-xl font-semibold text-brand-ink">
        {title}
      </p>
      <p className="text-sm leading-relaxed text-brand-ink/80">{body}</p>
    </div>
  );
}
