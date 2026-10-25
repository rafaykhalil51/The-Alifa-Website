"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/data/destinations";

export function FAQAccordion({ items }: { items: Faq[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-[0_12px_40px_rgba(16,43,85,0.05)]">
      {items.map((item, index) => {
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        const open = openIndex === index;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-navy sm:px-6"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.question}
                <ChevronDown aria-hidden="true" className={`mt-1 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
              <p className="px-5 pb-5 text-sm leading-7 text-muted sm:px-6 sm:text-base">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
