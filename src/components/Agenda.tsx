import { CalendarCheck, Check, FileCode2, Wallet, type LucideIcon } from 'lucide-react';
import { CtaButton, SectionHeading } from './ui';

interface Pillar {
  icon: LucideIcon;
  tag: string;
  tagTone: 'amber' | 'blue' | 'emerald';
  title: string;
  lead: string;
  points: string[];
}

const PILLARS: Pillar[] = [
  {
    icon: CalendarCheck,
    tag: 'Termin: 31.12.2026',
    tagTone: 'amber',
    title: 'Zamknięcie Finansowe 2026',
    lead: 'Co zrobić przed końcem grudnia, żeby bilans nie zaskoczył Cię w marcu.',
    points: [
      'Inwentaryzacja — kiedy, jak i kto podpisuje',
      'Optymalizacja kosztów KUP do 31 grudnia',
      'Odpisy aktualizujące i amortyzacja',
      'Zaległe i korygujące faktury — jak je domknąć',
    ],
  },
  {
    icon: FileCode2,
    tag: 'Zmiany 2026/2027',
    tagTone: 'blue',
    title: 'KSeF i JPK_CIT bez paniki',
    lead: 'Konkretny harmonogram zamiast chaosu z komunikatów i plotek.',
    points: [
      'Aktualne terminy obowiązkowego KSeF 2026/2027',
      'Moratorium na sankcje — co faktycznie oznacza',
      'JPK_CIT: kogo i od kiedy obejmuje',
      'Co wdrożyć w firmie już teraz',
    ],
  },
  {
    icon: Wallet,
    tag: 'Sp. z o.o.',
    tagTone: 'emerald',
    title: 'Portfel Właściciela (Sp. z o.o.)',
    lead: 'Jak legalnie wypłacać pieniądze ze spółki i nie prowokować kontroli.',
    points: [
      'Art. 176 KSH vs. B2B vs. Estoński CIT',
      'Dywidenda, zaliczka, pożyczka — porównanie',
      "Gdzie Skarbówka szuka 'ukrytych zysków'",
      'Najczęstsze błędy wspólników',
    ],
  },
];

const TAG_TONES = {
  amber: 'bg-amber-50 text-amber-700 ring-amber-200',
  blue: 'bg-blue-50 text-blue-700 ring-blue-200',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
};

export function Agenda() {
  return (
    <section id="agenda" className="border-t border-slate-200/70 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Agenda · 3 filary"
          title="Trzy tematy, które w tym roku kosztują firmy najwięcej"
          lead="Krótki konkret od praktyka, a potem odpowiedzi na Twoje pytania. Bez teorii — tylko to, co trzeba zrobić i do kiedy."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-navy text-emerald-400 shadow-sm">
                  <p.icon className="size-6" aria-hidden />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${TAG_TONES[p.tagTone]}`}>{p.tag}</span>
              </div>
              <p className="mt-6 text-xs font-bold tracking-wider text-slate-400 uppercase">Część {i + 1}</p>
              <h3 className="mt-1 text-xl font-extrabold tracking-tight text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.lead}</p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton>Chcę wziąć udział — bezpłatnie</CtaButton>
        </div>
      </div>
    </section>
  );
}
