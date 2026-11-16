import type { ReactNode } from 'react';
import { Award, BadgeCheck, Building2, Cog, Scale, Workflow } from 'lucide-react';
import { COHOST, SPEAKER } from '../content';
import { SectionHeading } from './ui';

export function Speakers() {
  return (
    <section id="prowadzacy" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Спикеры и организаторы"
          title="Вы спрашиваете практика, а не теоретика"
          lead="На вопросы отвечает Татьяна Бакаева — практикующий главный бухгалтер, которая ежедневно работает с польскими Sp. z o.o. и JDG. Эфир модерирует Дарья из OPRIMO BPO."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <SpeakerCard
            photo={SPEAKER.photo}
            photoPosition={SPEAKER.photoPosition}
            alt={`${SPEAKER.name} — ${SPEAKER.role}`}
            label="Спикер"
            org="IMOSTA Biuro Rachunkowe"
            name={SPEAKER.name}
            nameLatin={SPEAKER.nameLatin}
            role={SPEAKER.role}
            bio={SPEAKER.bio}
          >
            {(SPEAKER.experienceYears || SPEAKER.clients) && (
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {SPEAKER.experienceYears && (
                  <div className="rounded-md border border-brand-navy/10 bg-brand-gray p-3">
                    <dt className="text-xs text-slate-500">Практика в Польше</dt>
                    <dd className="text-2xl font-extrabold text-brand-navy">{SPEAKER.experienceYears}+ лет</dd>
                  </div>
                )}
                {SPEAKER.clients && (
                  <div className="rounded-md border border-brand-navy/10 bg-brand-gray p-3">
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
                    <Icon className="mt-0.5 size-4 shrink-0 text-brand-blue" aria-hidden />
                    {c}
                  </li>
                );
              })}
            </ul>
          </SpeakerCard>

          <SpeakerCard
            photo={COHOST.photo}
            photoPosition={COHOST.photoPosition}
            alt={`${COHOST.name} — ${COHOST.badge}`}
            label="Модератор"
            org="OPRIMO BPO"
            name={COHOST.name}
            nameLatin={COHOST.nameLatin}
            role={COHOST.role}
            bio={COHOST.bio}
          />
        </div>

        {/* Organizers banner */}
        <article className="dot-grid mx-auto mt-6 max-w-5xl rounded-xl bg-brand-navy p-6 text-white/75 shadow-sm sm:p-8">
          <p className="text-xs font-bold tracking-wider text-brand-orange uppercase">Организаторы</p>
          <ul className="mt-4 grid gap-5 text-sm md:grid-cols-3 md:gap-8">
            <li className="flex gap-3">
              <Workflow className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden />
              <span>
                <strong className="text-white">OPRIMO BPO</strong> — операционная основа бизнеса: аутсорсинг процессов
                бэк-офиса, документооборот и автоматизация.
              </span>
            </li>
            <li className="flex gap-3">
              <Building2 className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden />
              <span>
                <strong className="text-white">IMOSTA</strong> — бухгалтерское бюро и налоговое консультирование для Sp. z o.o.
                и JDG.
              </span>
            </li>
            <li className="flex gap-3">
              <Cog className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden />
              <span>Вместе: бухгалтерия + процессы, то есть VAT без ошибок, блокировок и задержек возврата.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function SpeakerCard({
  photo,
  photoPosition,
  alt,
  label,
  org,
  name,
  nameLatin,
  role,
  bio,
  children,
}: {
  photo: string;
  photoPosition: string;
  alt: string;
  label: string;
  org: string;
  name: string;
  nameLatin: string;
  role: string;
  bio: string;
  children?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-brand-navy/15 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-gray">
        <img src={photo} alt={alt} loading="lazy" width={960} height={720} className={`h-full w-full object-cover ${photoPosition}`} />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold text-brand-navy shadow-sm ring-1 ring-white/60 backdrop-blur">
          <BadgeCheck className="size-3.5 text-brand-blue" aria-hidden /> {label}
        </span>
      </div>
      <div className="flex-1 p-6 sm:p-7">
        <p className="text-xs font-bold tracking-wider text-brand-blue uppercase">{org}</p>
        <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">{name}</h3>
        <p className="text-xs font-medium text-slate-400">{nameLatin}</p>
        <p className="mt-1 text-sm font-medium text-slate-500">{role}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">{bio}</p>
        {children}
      </div>
    </article>
  );
}
