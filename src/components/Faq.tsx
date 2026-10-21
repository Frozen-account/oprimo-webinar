import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../content';
import { cn } from '../lib';
import { SectionHeading } from './ui';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Najczęstsze pytania" />

        <div className="mt-12 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none sm:px-6"
                  >
                    <span className="font-bold text-brand-navy">{item.q}</span>
                    <span
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-lg border transition',
                        isOpen ? 'border-emerald-200 bg-emerald-50 text-brand-emerald' : 'border-slate-200 text-slate-400',
                      )}
                    >
                      <ChevronDown className={cn('size-4 transition-transform duration-300', isOpen && 'rotate-180')} aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
