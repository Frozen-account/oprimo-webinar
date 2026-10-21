import { Logos } from './ui';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logos inverted />
            <p className="mt-4 text-sm leading-relaxed">
              Webinar organizowany wspólnie przez OPRIMO BPO Sp. z o.o. (outsourcing procesów biznesowych) oraz IMOSTA
              (biuro rachunkowe i doradztwo podatkowe).
            </p>
          </div>
          <nav aria-label="Informacje prawne" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/polityka-prywatnosci" className="transition hover:text-white">
              Polityka Prywatności
            </a>
            <a href="/rodo" className="transition hover:text-white">
              Klauzula informacyjna RODO
            </a>
            <a href="/regulamin-webinaru" className="transition hover:text-white">
              Regulamin webinaru
            </a>
          </nav>
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            Administratorami danych osobowych podanych w formularzu są OPRIMO BPO Sp. z o.o. oraz IMOSTA. Dane przetwarzamy
            w celu rejestracji na wydarzenie, przesłania materiałów i nagrania (art. 6 ust. 1 lit. a i b RODO). Przysługuje Ci
            prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wycofania zgody w dowolnym
            momencie.
          </p>
          <p>
            Treści prezentowane podczas webinaru oraz w materiałach PDF mają charakter informacyjny i edukacyjny i nie
            stanowią porady podatkowej ani prawnej w rozumieniu przepisów. Decyzje podatkowe należy konsultować
            indywidualnie.
          </p>
          <p className="pt-2 text-slate-400">© {year} OPRIMO BPO Sp. z o.o. &amp; IMOSTA. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
