import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { CtaBanner } from "@/components/common/cta-banner";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/detail/image-gallery";
import { SpecTable } from "@/components/detail/spec-table";
import { CertificationCard } from "@/components/detail/certification-card";
import { RelatedGemstones } from "@/components/detail/related-gemstones";
import {
  getAllSlugs,
  getGemstoneBySlug,
  getRelatedGemstones,
} from "@/lib/data";
import { formatCarat, formatLkr } from "@/lib/format";
import { ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/collection/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const gemstone = await getGemstoneBySlug(slug);
  if (!gemstone) return {};
  return {
    title: `${gemstone.name} | Ruth Gems`,
    description: gemstone.description[0],
  };
}

export default async function GemstoneDetailPage({
  params,
}: PageProps<"/collection/[slug]">) {
  const { slug } = await params;
  const gemstone = await getGemstoneBySlug(slug);
  if (!gemstone) notFound();

  const related = await getRelatedGemstones(slug, 4);

  return (
    <>
      <div className="container-page flex flex-col gap-2 pt-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Collection", href: "/collection" },
            { label: gemstone.name },
          ]}
        />
      </div>

      <Reveal className="container-page flex flex-col gap-12 py-9 lg:flex-row lg:items-end">
        <ImageGallery images={gemstone.images} name={gemstone.name} />

        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-semibold tracking-[0.15em] text-brand-gold-muted uppercase">
              Ceylon {gemstone.type} · {gemstone.treatment}
            </p>
            <h1 className="font-display text-4xl font-semibold text-brand-ink sm:text-5xl">
              {gemstone.name}
            </h1>
            <p className="text-sm tracking-[0.02em] text-muted-foreground">
              Reference No. {gemstone.referenceNo}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <p className="font-display text-3xl font-semibold text-brand-gold-muted sm:text-4xl">
              {formatLkr(gemstone.priceLkr)}
            </p>
            <p className="text-sm text-muted-foreground">
              Guide price · enquire for details
            </p>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Carat Weight" value={formatCarat(gemstone.caratWeight)} />
              <Spec label="Cut" value={gemstone.cut} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Colour" value={gemstone.colour} />
              <Spec label="Clarity" value={gemstone.clarity} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Spec label="Origin" value={gemstone.origin} />
              <Spec label="Treatment" value={gemstone.treatment} />
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              trigger={
                <Button className="h-14 flex-1 rounded-xl bg-brand-green-light text-base font-semibold tracking-[0.04em] text-white hover:bg-brand-green-light/90">
                  Arrange a Viewing
                </Button>
              }
            />
            <EnquiryDialog
              gemstoneRef={gemstone.referenceNo}
              gemstoneName={gemstone.name}
              title="Enquire About This Stone"
              trigger={
                <Button
                  variant="outline"
                  className="h-14 flex-1 rounded-xl border-[1.5px] border-brand-green-light text-base font-semibold tracking-[0.04em] text-brand-green-light hover:bg-brand-green-light/10"
                >
                  Enquire About This Stone
                </Button>
              }
            />
          </div>

          <div className="flex items-center gap-2.5 pt-1 text-sm text-muted-foreground">
            <ShieldCheck className="size-[18px] text-brand-green" />
            Accompanied by an independent laboratory certificate
          </div>
        </div>
      </Reveal>

      <Reveal className="container-page flex flex-col gap-6 border-t border-border py-16">
        <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase">
          The Stone
        </p>
        <h2 className="font-display text-3xl text-brand-ink">
          A {gemstone.colour} {gemstone.type} of Rare Character
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          {gemstone.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="container-page grid grid-cols-1 gap-10 border-t border-border py-16 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="mb-4 font-display text-3xl text-brand-ink">
            Specifications
          </h2>
          <SpecTable gemstone={gemstone} />
        </div>
        <CertificationCard gemstone={gemstone} />
      </Reveal>

      <RelatedGemstones items={related} />

      <CtaBanner
        heading={"Interested in this sapphire?"}
        description="Arrange a private viewing, or request full details, certification and video of this stone. We reply personally within one business day."
      />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[10px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="font-display text-2xl text-brand-ink">{value}</p>
    </div>
  );
}
