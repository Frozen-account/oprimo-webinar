import { CalendarDays, Clock, Gift, MessagesSquare, PlayCircle } from 'lucide-react';
import { COHOST, EVENT, SPEAKER } from '../content';
import { useCountdown } from '../lib';
import { RegistrationForm } from './RegistrationForm';

export function Hero({ onRegistered }: { onRegistered: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy text-white">
      {/* Background: subtle dot grid + soft accent washes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_30%_30%,black,transparent)]" />
        <div className="absolute -top-40 -left-32 size-[32rem] rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="absolute right-[-12rem] bottom-[-10rem] size-[30rem] rounded-full bg-brand-orange/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-7 lg:pt-4">
          <LivePill />

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
            VAT в Польше: ошибки предпринимателей,{' '}
            <span className="text-brand-orange">возврат налога и исключение из реестра VAT</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-pretty text-white/80 sm:text-xl">
            Практический вебинар для владельцев бизнеса в Польше. Разберём реальные ситуации из практики, типичные ошибки
            предпринимателей, их последствия и способы предотвращения — плюс {EVENT.qaMin} минут ответов на ваши вопросы
            в прямом эфире.
          </p>

          <HostsStrip />

          <div className="mt-8 flex max-w-2xl items-start gap-4 rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur sm:p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-orange text-white">
              <Gift className="size-5" aria-hidden />
            </span>
            <p className="text-sm text-white/85 sm:text-base">
              <strong className="font-bold text-white">🎁 Бонус для зарегистрированных:</strong> чек-лист «Безопасная
              работа с VAT в Польше» — проверка контрагентов (Biała lista), регистрация VAT-UE и защита от исключения из
              реестра. Доступен сразу после регистрации.
            </p>
          </div>

          <Countdown />

          <ul className="mt-8 grid max-w-2xl gap-3 text-sm text-white/85 sm:grid-cols-3">
            {[
              { icon: Clock, text: `${EVENT.expertMin} мин разборов из практики` },
              { icon: MessagesSquare, text: `${EVENT.qaMin} мин ответов на вопросы` },
              { icon: PlayCircle, text: 'Запись для участников' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 rounded-md border border-white/15 bg-white/[0.04] px-3 py-2.5">
                <Icon className="size-4 shrink-0 text-brand-orange" aria-hidden />
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-slate-700 lg:col-span-5">
          <RegistrationForm onSuccess={onRegistered} />
        </div>
      </div>
    </section>
  );
}

function HostsStrip() {
  const hosts = [
    { ...SPEAKER, ring: 'border-brand-orange', badgeCls: 'bg-brand-orange text-white' },
    { ...COHOST, ring: 'border-brand-blue', badgeCls: 'bg-brand-blue text-white' },
  ];
  return (
    <div className="mt-8 max-w-2xl rounded-xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur sm:p-5">
      <p className="text-xs font-bold tracking-wider text-white/60 uppercase">Ведущие эфира</p>
      <ul className="mt-3 grid gap-4 min-[440px]:grid-cols-2">
        {hosts.map((h) => (
          <li key={h.name} className="flex items-center gap-3">
            <img
              src={h.avatar}
              alt={h.name}
              width={64}
              height={64}
              className={`size-14 shrink-0 rounded-full border-2 object-cover object-top sm:size-16 ${h.ring}`}
            />
            <div className="min-w-0">
              <p className="font-bold leading-tight text-white">{h.name}</p>
              <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${h.badgeCls}`}>
                {h.badge}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LivePill() {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-white backdrop-blur sm:text-sm">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-2.5 py-1 text-white">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-white" />
        </span>
        Прямой эфир
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-3.5 text-white/60" aria-hidden />
        {EVENT.dateLabel}, {EVENT.timeLabel} {EVENT.tzShort}
      </span>
    </div>
  );
}

function Countdown() {
  const c = useCountdown(EVENT.startsAt, EVENT.durationMin);
  if (c.isOver) return null;

  if (c.isLive) {
    return (
      <p className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white">
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
      <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">Старт через</span>
      <div className="flex gap-2" role="timer" aria-live="off">
        {units.map((u) => (
          <div key={u.l} className="min-w-14 rounded-md border border-white/15 bg-white/10 px-2.5 py-2 text-center text-white">
            <div className="text-lg leading-none font-bold tabular-nums">{String(u.v).padStart(2, '0')}</div>
            <div className="mt-1 text-[10px] font-medium text-white/60 uppercase">{u.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
