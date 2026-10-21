import { Award, BadgeCheck, Building2, Cog, Scale, UserRound, Workflow } from 'lucide-react';
import { COHOST, SPEAKER } from '../content';
import { SectionHeading } from './ui';

export function Speakers() {
  return (
    <section id="prowadzacy" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Спикеры и организаторы"
          title="Вы спрашиваете практика, а не теоретика"
          lead="Вебинар ведёт Татьяна Бакаева — практикующий главный бухгалтер, которая ежедневно работает с польскими Sp. z o.o. и JDG и знает, где чаще всего возникают проблемы."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Main speaker */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-3">
            <div className="grid sm:grid-cols-5">
              <div className="relative sm:col-span-2">
                {SPEAKER.photo ? (
                  <img src={SPEAKER.photo} alt={SPEAKER.name} className="h-full min-h-64 w-full object-cover" />
                ) : (
                  <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                    <UserRound className="size-20" strokeWidth={1.25} aria-hidden />
                    <span className="text-xs font-medium">Фото спикера</span>
                  </div>
                )}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-xs font-bold text-brand-navy shadow-sm ring-1 ring-white/60 backdrop-blur">
                  <BadgeCheck className="size-3.5 text-brand-emerald" aria-hidden /> Спикер
                </span>
              </div>

              <div className="p-6 sm:col-span-3 sm:p-7">
                <p className="text-xs font-bold tracking-wider text-brand-emerald uppercase">IMOSTA Biuro Rachunkowe</p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">{SPEAKER.name}</h3>
                <p className="text-xs font-medium text-slate-400">{SPEAKER.nameLatin}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{SPEAKER.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{SPEAKER.bio}</p>

                {(SPEAKER.experienceYears || SPEAKER.clients) && (
                  <dl className="mt-5 grid grid-cols-2 gap-3">
                    {SPEAKER.experienceYears && (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <dt className="text-xs text-slate-500">Практика в Польше</dt>
                        <dd className="text-2xl font-extrabold text-brand-navy">{SPEAKER.experienceYears}+ лет</dd>
                      </div>
                    )}
                    {SPEAKER.clients && (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                        <dt className="text-xs text-slate-500">Компаний на обслуживании</dt>
                        <dd className="text-2xl font-extrabold text-brand-navy">{SPEAKER.clients}</dd>
                      </div>
                    )}
                  </dl>
                )}

                <p className="mt-5 text-xs font-bold tracking-wider text-slate-400 uppercase">Специализация</p>
                <ul className="mt-2 space-y-2">
                  {SPEAKER.credentials.map((c, i) => {
                    const Icon = [Award, Scale, BadgeCheck][i % 3];
                    return (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Icon className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                        {c}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>

          {/* Co-host + organizers */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                  <UserRound className="size-7" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wider text-brand-blue uppercase">Соведущий</p>
                  <h3 className="text-lg font-extrabold tracking-tight text-brand-navy">{COHOST.name}</h3>
                  <p className="text-sm text-slate-500">{COHOST.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{COHOST.bio}</p>
            </article>

            <article className="flex-1 rounded-2xl bg-brand-navy p-6 text-slate-300 shadow-sm sm:p-7">
              <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">Организаторы</p>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Workflow className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden />
                  <span>
                    <strong className="text-white">OPRIMO BPO</strong> — операционная основа бизнеса: аутсорсинг процессов
                    бэк-офиса, документооборот и автоматизация.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Building2 className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden />
                  <span>
                    <strong className="text-white">IMOSTA</strong> — бухгалтерское бюро и налоговое консультирование для Sp. z o.o. и JDG.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Cog className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden />
                  <span>Вместе: бухгалтерия + процессы, то есть закрытие года без переработок.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
