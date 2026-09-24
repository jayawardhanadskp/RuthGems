import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AboutHero() {
  return (
    <section className="relative flex h-[420px] items-center overflow-hidden sm:h-[560px] lg:h-[680px]">
      <Image
        src="/images/about/hero.png"
        alt="Ceylon gem heritage"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      <Reveal className="container-page relative z-10 flex flex-col gap-4 pb-6">
        <p className="text-[13px] font-semibold tracking-[0.2em] text-white uppercase">
          The Island of Gems
        </p>
        <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-[110px]">
          The Story of
          <br />
          <span className="font-bold">Ceylon Gems</span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-[#ebe5d8] sm:text-lg">
          For over two thousand years, the island of Sri Lanka has yielded
          some of the earth&apos;s finest coloured gemstones — treasured by
          royalty, scholars and collectors alike.
        </p>
      </Reveal>
    </section>
  );
}
