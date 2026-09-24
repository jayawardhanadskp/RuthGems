import { ShieldCheck } from "lucide-react";
import type { Gemstone } from "@/types/gemstone";

export function CertificationCard({ gemstone }: { gemstone: Gemstone }) {
  if (gemstone.certification === "Uncertified") {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-6">
        <p className="text-sm font-medium text-brand-ink">Uncertified stone</p>
        <p className="text-sm text-muted-foreground">
          This stone has not yet been submitted for independent
          certification. Its price reflects that. Certification can be
          arranged prior to purchase on request.
        </p>
      </div>
    );
  }

  const details = gemstone.certificationDetails;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
      <ShieldCheck className="size-7 text-brand-green" />
      <p className="text-xs font-semibold tracking-[0.15em] text-brand-gold uppercase">
        Independently Certified
      </p>
      <p className="font-display text-xl font-semibold text-brand-ink">
        {details?.lab ?? gemstone.certification} GemResearch Swisslab
      </p>
      <p className="text-sm text-muted-foreground">
        {details
          ? `Report No. ${details.reportNo}. ${details.note}`
          : `Accompanied by a report from ${gemstone.certification}.`}
      </p>
      <button className="text-left text-sm font-semibold text-brand-green hover:underline">
        View Certificate →
      </button>
    </div>
  );
}
