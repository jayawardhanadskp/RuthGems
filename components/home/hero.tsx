"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";

export function Hero() {
  return (
    <section className="container-page relative mt-4 h-[520px] overflow-hidden rounded-2xl sm:h-[600px] lg:mt-6 lg:h-[720px]">
      <Image
        src="/images/home/hero.png"
        alt="Ceylon gemstone artisans"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-full max-w-xl flex-col justify-center gap-6 px-6 sm:px-10"
      >
        <h1 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl lg:text-[70px] lg:leading-[1.05]">
          A Legacy of Ceylon&apos;s Finest Gemstones.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-white/85">
          Discover the captivating colours, natural beauty and timeless
          character of Ceylon gemstones. Explore a collection where every
          stone has its own story to tell.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              nativeButton={false}
              render={<Link href="/collection" />}
              className="h-11 rounded-xl border border-black bg-brand-green-light px-5 text-base font-medium text-white hover:bg-brand-green-light/90"
            >
              Browse Gemstones
            </Button>
            <EnquiryDialog
              trigger={
                <Button
                  variant="outline"
                  className="h-11 rounded-xl border-2 border-white bg-transparent px-5 text-base font-medium text-white hover:bg-white/10"
                >
                  Arrange a Viewing
                </Button>
              }
            />
          </div>
          <p className="text-sm font-medium text-[#fff5e0]">
            No cart, no checkout. Every gemstone is sold by conversation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
