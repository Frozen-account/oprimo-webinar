import { CalendarDays, Users } from 'lucide-react';
import { EVENT } from '../content';
import { CtaButton } from './ui';

export function FinalCta() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy-2 to-slate-900 px-6 py-14 text-center shadow-xl sm:px-12">
        <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1.5 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30 sm:text-sm">
            <Users className="size-4" aria-hidden />
            Liczba miejsc na sesji Q&amp;A ograniczona pojemnością pokoju webinarowego
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            Zamknij rok 2026 spokojnie. Wejdź w 2027 przygotowany.
          </h2>
          <p className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-x-2 text-slate-300">
            <CalendarDays className="size-4 text-emerald-400" aria-hidden />
            {EVENT.weekdayLabel}, {EVENT.dateLabel}, {EVENT.timeLabel} · online · 0 zł
          </p>
          <CtaButton size="lg" className="mt-8">
            Zapisz się bezpłatnie
          </CtaButton>
          <p className="mt-4 text-xs text-slate-400">Nagranie i checklista PDF dla wszystkich zarejestrowanych.</p>
        </div>
      </div>
    </section>
  );
}
