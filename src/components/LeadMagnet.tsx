import { CalendarRange, CheckSquare, FileDown, ListChecks, ShieldAlert } from 'lucide-react';
import { LEAD_MAGNET } from '../content';
import { CtaButton } from './ui';

const FEATURES = [
  {
    icon: CalendarRange,
    title: 'Kalendarz terminów 2026/2027',
    text: 'Wszystkie daty: zamknięcie roku, CIT-8, sprawozdanie, KSeF i JPK_CIT — miesiąc po miesiącu.',
  },
  {
    icon: ListChecks,
    title: 'Checklista zamknięcia roku krok po kroku',
    text: 'Lista punktów do odhaczenia z Twoim księgowym — od inwentaryzacji po uchwały wspólników.',
  },
  {
    icon: ShieldAlert,
    title: 'Mapa ryzyk przy wypłatach ze spółki',
    text: 'Porównanie dywidendy, art. 176 KSH, B2B i estońskiego CIT z czerwonymi flagami dla urzędu.',
  },
];

const PREVIEW_ROWS = [
  { done: true, text: 'Spis z natury i inwentaryzacja' },
  { done: true, text: 'Weryfikacja kosztów KUP 2026' },
  { done: false, text: 'Uprawnienia KSeF dla zespołu' },
  { done: false, text: 'Struktura JPK_CIT — test danych' },
];

export function LeadMagnet() {
  return (
    <section id="checklista" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 size-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-10 size-96 rounded-full bg-blue-600/20 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Document mock-up */}
          <div className="relative mx-auto w-full max-w-sm lg:order-2">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-2xl bg-white/10 ring-1 ring-white/10" />
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 ring-1 ring-red-100">PDF</span>
                <span className="text-[10px] font-semibold text-slate-400">OPRIMO × IMOSTA</span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-extrabold text-brand-navy">{LEAD_MAGNET.title}</h3>
              <div className="mt-1 h-1 w-12 rounded-full bg-brand-emerald" />

              <ul className="mt-5 space-y-2.5">
                {PREVIEW_ROWS.map((r) => (
                  <li key={r.text} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckSquare className={r.done ? 'size-4 text-brand-emerald' : 'size-4 text-slate-300'} aria-hidden />
                    <span className={r.done ? 'text-slate-400 line-through' : ''}>{r.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-7 gap-1">
                {Array.from({ length: 21 }, (_, i) => (
                  <span
                    key={i}
                    className={
                      i === 11
                        ? 'aspect-square rounded bg-brand-amber'
                        : i === 4 || i === 17
                          ? 'aspect-square rounded bg-brand-blue/70'
                          : 'aspect-square rounded bg-slate-100'
                    }
                  />
                ))}
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-brand-amber">
                <span className="size-2 rounded-sm bg-brand-amber" /> 31.12 — ostatni dzień na koszty KUP
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-white/15 backdrop-blur">
              <FileDown className="size-3.5" aria-hidden /> Do pobrania od razu po rejestracji
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
              {LEAD_MAGNET.title}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Praktyczne narzędzie, które przygotowała Główna Księgowa IMOSTA dla swoich klientów — teraz dostępne dla
              uczestników webinaru.
            </p>

            <ul className="mt-8 space-y-5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/20">
                    <f.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{f.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-400">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <CtaButton className="mt-10 bg-brand-emerald-2 text-slate-950 hover:bg-emerald-400">
              Odbierz checklistę za darmo
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
