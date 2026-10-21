import { CalendarDays, Users } from 'lucide-react';
import { EVENT } from '../content';
import { CtaButton } from './ui';

export function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-2 px-6 py-14 text-center shadow-xl sm:px-12">
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0 opacity-70" />
        <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand-orange/20 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-3 py-1.5 text-xs font-bold text-white sm:text-sm">
            <Users className="size-4" aria-hidden />
            Количество мест на сессии Q&amp;A ограничено вместимостью вебинарной комнаты
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            Закройте 2026 год спокойно. Войдите в 2027 подготовленными.
          </h2>
          <p className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-x-2 text-white/80">
            <CalendarDays className="size-4 text-brand-orange" aria-hidden />
            {EVENT.weekdayLabel}, {EVENT.dateLabel}, {EVENT.timeLabel} {EVENT.tzLabel} · онлайн · 0 zł
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">{EVENT.formatLabel}</p>
          <CtaButton size="lg" className="mt-8">
            Записаться бесплатно
          </CtaButton>
          <p className="mt-4 text-xs text-white/60">Запись и чек-лист PDF для всех зарегистрированных.</p>
        </div>
      </div>
    </section>
  );
}
