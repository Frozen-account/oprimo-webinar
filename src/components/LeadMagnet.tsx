import { CheckSquare, FileDown, Globe, SearchCheck, ShieldAlert } from 'lucide-react';
import { LEAD_MAGNET } from '../content';
import { CtaButton } from './ui';

const FEATURES = [
  {
    icon: SearchCheck,
    title: 'Проверка контрагентов (Biała lista)',
    text: 'Как проверить статус VAT и банковский счёт контрагента перед оплатой и чем грозит перевод на счёт не из списка.',
  },
  {
    icon: Globe,
    title: 'Регистрация VAT-UE',
    text: 'Когда она обязательна — в том числе при оплате иностранных услуг вроде Google Ads и Meta.',
  },
  {
    icon: ShieldAlert,
    title: 'Защита от исключения из реестра VAT',
    text: 'Что держать под контролем, чтобы налоговая не исключила компанию из реестра, и что делать, если это уже произошло.',
  },
];

const PREVIEW_ROWS = [
  { done: true, text: 'Счёт компании внесён в Biała lista' },
  { done: true, text: 'Контрагент проверен перед оплатой' },
  { done: false, text: 'VAT-UE для Google Ads / Meta' },
  { done: false, text: 'Адрес и документы для налоговой' },
];

export function LeadMagnet() {
  return (
    <section id="checklista" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-brand-navy px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0 opacity-70" />
          <div className="absolute -top-24 right-0 size-96 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="absolute -bottom-32 left-10 size-96 rounded-full bg-brand-blue/25 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Document mock-up */}
          <div className="relative mx-auto w-full max-w-sm lg:order-2">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-xl bg-white/10 ring-1 ring-white/10" />
            <div className="relative rounded-xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 ring-1 ring-red-100">PDF</span>
                <span className="text-[10px] font-semibold text-slate-400">OPRIMO × IMOSTA</span>
              </div>
              <p className="mt-4 text-[10px] font-bold tracking-wider text-brand-blue uppercase">Чек-лист</p>
              <h3 className="mt-1 text-lg leading-snug font-extrabold text-brand-navy">{LEAD_MAGNET.shortTitle}</h3>
              <div className="mt-1 h-1 w-12 rounded-full bg-brand-orange" />

              <ul className="mt-5 space-y-2.5">
                {PREVIEW_ROWS.map((r) => (
                  <li key={r.text} className="flex items-center gap-2.5 text-xs text-slate-600">
                    <CheckSquare className={r.done ? 'size-4 text-brand-blue' : 'size-4 text-slate-300'} aria-hidden />
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
                        ? 'aspect-square rounded bg-brand-orange'
                        : i === 4 || i === 17
                          ? 'aspect-square rounded bg-brand-blue/70'
                          : 'aspect-square rounded bg-slate-100'
                    }
                  />
                ))}
              </div>
              <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-brand-orange">
                <span className="size-2 rounded-sm bg-brand-orange" /> Проверка по Biała lista — перед каждой оплатой
              </p>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/15 backdrop-blur">
              <FileDown className="size-3.5" aria-hidden /> Доступен сразу после регистрации
            </span>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-balance text-white sm:text-3xl">
              {LEAD_MAGNET.title}
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Практический инструмент, который главный бухгалтер IMOSTA подготовила для своих клиентов, — теперь доступен
              участникам вебинара.
            </p>

            <ul className="mt-8 space-y-5">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange ring-1 ring-white/15">
                    <f.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{f.title}</h3>
                    <p className="mt-0.5 text-sm text-white/60">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <CtaButton className="mt-10">
              Получить чек-лист бесплатно
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
