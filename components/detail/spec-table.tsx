import type { Gemstone } from "@/types/gemstone";
import { formatCarat } from "@/lib/format";

export function SpecTable({ gemstone }: { gemstone: Gemstone }) {
  const rows: [string, string][] = [
    ["Carat Weight", formatCarat(gemstone.caratWeight)],
    ["Dimensions", `${gemstone.dimensionsMm} mm`],
    ["Shape & Cut", gemstone.cut],
    ["Colour", gemstone.colour],
    ["Clarity", gemstone.clarity],
    ["Species", gemstone.species],
    ["Origin", `${gemstone.origin === "Ratnapura" ? "Ceylon (Sri Lanka)" : gemstone.origin}`],
    ["Treatment", gemstone.treatment],
    ["Hardness (Mohs)", String(gemstone.hardnessMohs)],
    ["Certificate", gemstone.certification],
  ];

  return (
    <div className="flex flex-col">
      {rows.map(([label, value], i) => (
        <div
          key={label}
          className={
            "flex items-center justify-between py-4 text-sm " +
            (i !== rows.length - 1 ? "border-b border-border" : "")
          }
        >
          <span className="text-muted-foreground">{label}</span>
          <span className="font-medium text-brand-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}
