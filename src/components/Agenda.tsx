import { Banknote, Check, FileCheck2, ShieldAlert, type LucideIcon } from 'lucide-react';
import { EVENT } from '../content';
import { CtaButton, SectionHeading } from './ui';

interface Pillar {
  icon: LucideIcon;
  tag: string;
  tagTone: 'orange' | 'navy' | 'blue';
  title: string;
  points: string[];
}

const PILLARS: Pillar[] = [
  {
    icon: FileCheck2,
    tag: 'VAT / VAT-UE',
    tagTone: 'orange',
    title: 'Регистрация VAT и VAT-UE: когда возникает обязанность и как избежать ошибок?',
    points: [
      'Когда предприниматель обязан зарегистрироваться на VAT и VAT-UE, а когда регистрация не требуется.',
      'Что проверяет налоговая при регистрации на VAT (включая адрес компании) и какие документы может потребовать.',
      'Что делать, если компания превысила лимит оборота.',
      'Biała lista podatników VAT: как внести банковский счёт в реестр и чем грозит оплата на счёт, которого нет в списке.',
      'Покупка иностранных услуг (Google Ads, Meta и др.): какие обязанности возникают, если компания не является плательщиком VAT czynny.',
    ],
  },
  {
    icon: Banknote,
    tag: 'Возврат VAT',
    tagTone: 'navy',
    title: 'Возврат VAT в Польше: как получить деньги и избежать проблем с налоговой?',
    points: [
      'Когда компания имеет право на возврат VAT.',
      'Какие сроки возврата предусмотрены законодательством.',
      'Что проверяет налоговая перед возвратом VAT.',
      'Почему в возврате VAT могут отказать или задержать его.',
    ],
  },
  {
    icon: ShieldAlert,
    tag: 'Реестр VAT',
    tagTone: 'blue',
    title: 'Компанию исключили из реестра VAT: причины и восстановление регистрации',
    points: [
      'По каким основаниям налоговая может исключить компанию из реестра VAT.',
      'Может ли компания быть исключена из реестра без предварительного уведомления.',
      'Как избежать исключения из реестра VAT.',
      'Как восстановить регистрацию и какие документы необходимо подготовить.',
    ],
  },
];

const TAG_TONES = {
  orange: 'bg-brand-orange text-white ring-brand-orange',
  navy: 'bg-brand-navy/5 text-brand-navy ring-brand-navy/15',
  blue: 'bg-brand-blue/10 text-brand-blue ring-brand-blue/20',
};

export function Agenda() {
  return (
    <section id="agenda" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Программа · 3 блока"
          title="Три ситуации с VAT, которые чаще всего обходятся предпринимателям дорого"
          lead={`${EVENT.formatLabel}. Реальные ситуации из практики, типичные ошибки, их последствия и способы предотвращения.`}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-xl border border-brand-navy/15 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-navy/30 hover:shadow-md sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-navy text-white">
                  <p.icon className="size-6" aria-hidden />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${TAG_TONES[p.tagTone]}`}>{p.tag}</span>
              </div>
              <p className="mt-6 text-xs font-bold tracking-wider text-slate-400 uppercase">Блок {i + 1}</p>
              <h3 className="mt-1 text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl">{p.title}</h3>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-blue" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton>Хочу участвовать — бесплатно</CtaButton>
        </div>
      </div>
    </section>
  );
}
