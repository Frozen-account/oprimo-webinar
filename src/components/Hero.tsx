import { CalendarDays, Clock, Gift, MessagesSquare, PlayCircle } from 'lucide-react';
import { EVENT } from '../content';
import { useCountdown } from '../lib';
import { RegistrationForm } from './RegistrationForm';

export function Hero({ onRegistered }: { onRegistered: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background: faint grid + soft colour washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,black,transparent)] opacity-60" />
        <div className="absolute -top-40 -left-32 size-[32rem] rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-10 right-[-10rem] size-[28rem] rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-7 lg:pt-4">
          <LivePill />

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-brand-navy sm:text-5xl lg:text-[3.5rem]">
            Просто о налогах: закрытие 2026 года и{' '}
            <span className="bg-gradient-to-r from-brand-emerald to-brand-blue bg-clip-text text-transparent">
              безопасный вход в 2027
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-pretty text-slate-600 sm:text-xl">
            Открытая встреча с главным бухгалтером IMOSTA. Ответы на ваши вопросы в прямом эфире: от KSeF и JPK_CIT до
            законных выплат прибыли из Sp. z o.o. и того, как избежать налоговых штрафов.
          </p>

          <div className="mt-8 flex max-w-2xl items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 backdrop-blur sm:p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-amber shadow-sm ring-1 ring-amber-200">
              <Gift className="size-5" aria-hidden />
            </span>
            <p className="text-sm text-amber-950 sm:text-base">
              <strong className="font-bold">🎁 Бонус для зарегистрированных:</strong> интерактивный чек-лист закрытия 2026
              года с графиком внедрения KSeF — доступен сразу после регистрации.
            </p>
          </div>

          <Countdown />

          <ul className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-600 sm:grid-cols-3">
            {[
              { icon: Clock, text: '60 минут по делу' },
              { icon: MessagesSquare, text: 'Q&A в прямом эфире' },
              { icon: PlayCircle, text: 'Запись для участников' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/70 px-3 py-2.5 backdrop-blur">
                <Icon className="size-4 shrink-0 text-brand-emerald" aria-hidden />
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <RegistrationForm onSuccess={onRegistered} />
        </div>
      </div>
    </section>
  );
}

function LivePill() {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-slate-200 bg-white/70 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur sm:text-sm">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-red-600 ring-1 ring-red-100">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-red-600" />
        </span>
        Прямая трансляция
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-3.5 text-slate-400" aria-hidden />
        {EVENT.dateLabel}, {EVENT.timeLabel} ({EVENT.durationMin} мин)
      </span>
    </div>
  );
}

function Countdown() {
  const c = useCountdown(EVENT.startsAt, EVENT.durationMin);
  if (c.isOver) return null;

  if (c.isLive) {
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">
        <span className="size-2 animate-pulse rounded-full bg-white" /> Мы в эфире — зарегистрируйтесь, чтобы получить ссылку
      </p>
    );
  }

  const units = [
    { v: c.days, l: 'дн.' },
    { v: c.hours, l: 'ч' },
    { v: c.minutes, l: 'мин' },
    { v: c.seconds, l: 'сек' },
  ];
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3" aria-label="Время до начала вебинара">
      <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Старт через</span>
      <div className="flex gap-2" role="timer" aria-live="off">
        {units.map((u) => (
          <div key={u.l} className="min-w-14 rounded-xl bg-brand-navy px-2.5 py-2 text-center text-white shadow-sm">
            <div className="text-lg leading-none font-bold tabular-nums">{String(u.v).padStart(2, '0')}</div>
            <div className="mt-1 text-[10px] font-medium text-slate-400 uppercase">{u.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
