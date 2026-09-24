import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  buildHref: (page: number) => string;
}

export function Pagination({ page, totalPages, buildHref }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageList(page, totalPages);

  return (
    <div className="flex h-16 w-full flex-col items-center justify-between gap-4 rounded-md border border-border bg-white p-3 sm:flex-row">
      <Link
        href={buildHref(Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={cn(
          "flex h-[43px] items-center gap-2 rounded-lg border border-muted-foreground px-3.5 py-2 text-base font-medium text-[#4b5563] shadow-xs",
          page === 1 && "pointer-events-none opacity-50"
        )}
      >
        <ArrowLeft className="size-5" />
        Previous
      </Link>

      <div className="flex items-center gap-0.5">
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`ellipsis-${i}`}
              className="flex size-10 items-center justify-center text-base text-[#4b5563]"
            >
              …
            </span>
          ) : (
            <Link
              key={p}
              href={buildHref(p)}
              className={cn(
                "flex size-10 items-center justify-center rounded-lg text-base font-medium",
                p === page
                  ? "border border-brand-green bg-[#e5fff7] text-brand-green"
                  : "text-[#4b5563] hover:bg-muted"
              )}
            >
              {p}
            </Link>
          )
        )}
      </div>

      <Link
        href={buildHref(Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        className={cn(
          "flex h-[43px] items-center gap-2 rounded-lg border border-muted-foreground px-3.5 py-2 text-base font-medium text-[#4b5563] shadow-xs",
          page === totalPages && "pointer-events-none opacity-50"
        )}
      >
        Next
        <ArrowRight className="size-5" />
      </Link>
    </div>
  );
}

function getPageList(page: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, total - 1, total, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const result: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push("…");
    result.push(p);
    prev = p;
  }
  return result;
}
