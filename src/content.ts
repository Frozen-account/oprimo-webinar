// Single source of truth for event data and copy that changes between editions.
// TODO(content): replace the placeholder speaker data before going live.

export const EVENT = {
  title: 'Q&A z Główną Księgową IMOSTA: Zamknięcie Roku 2026 i Przygotowanie na Zmiany 2027',
  // 29.10.2026 18:00 Europe/Warsaw (CET, UTC+1 — DST ends 25.10.2026)
  startsAt: '2026-10-29T18:00:00+01:00',
  durationMin: 60,
  dateLabel: '29 października 2026',
  timeLabel: 'godz. 18:00',
  weekdayLabel: 'czwartek',
};

export const FORM_ANCHOR = 'rejestracja';
export const REGISTER_ENDPOINT = '/api/register';

// Drop the real file into /public under this name.
export const LEAD_MAGNET = {
  title: 'Checklista i Kalendarz Podatkowy 2026/2027',
  fileName: 'Kalendarz-Zamkniecia-Roku-2026-i-Checklista-KSeF.pdf',
  href: '/Kalendarz-Zamkniecia-Roku-2026-i-Checklista-KSeF.pdf',
};

export const SPEAKER = {
  name: 'Główna Księgowa IMOSTA',
  role: 'Head of Accounting, IMOSTA Biuro Rachunkowe',
  photo: '', // e.g. '/speaker.jpg' — leave empty to show the placeholder
  experienceYears: 15,
  clients: '200+',
  bio: 'Na co dzień odpowiada za księgi spółek z o.o., spółek komandytowych i JDG w fazie przekształcenia. Specjalizuje się w zamknięciach roku, CIT estońskim i bezpiecznym planowaniu wypłat dla wspólników. Mówi o podatkach prosto — bez żargonu i bez straszenia.',
  credentials: [
    'Certyfikat Ministra Finansów uprawniający do usługowego prowadzenia ksiąg rachunkowych',
    'Praktyka w prawie handlowym (KSH) i rozliczeniach CIT/VAT',
    'Wdrożenia KSeF i JPK_CIT u klientów biura',
  ],
};

export const COHOST = {
  name: 'Ekspert operacyjny OPRIMO BPO',
  role: 'Business Process Outsourcing',
  bio: 'Pokaże, jak uporządkować obieg dokumentów, faktur i zatwierdzeń tak, aby KSeF i zamknięcie roku nie blokowały zespołu — od automatyzacji po outsourcing back-office.',
};

export const FAQ = [
  {
    q: 'Czy webinar jest bezpłatny?',
    a: 'Tak. Pełny dostęp do transmisji, sesji Q&A, nagrania i checklisty PDF jest w 100% darmowy. Nie prosimy o dane karty i nie ma żadnych ukrytych opłat.',
  },
  {
    q: 'Czy będzie nagranie?',
    a: 'Tak. Po wydarzeniu wyślemy wszystkim zarejestrowanym uczestnikom nagranie wideo oraz checklistę PDF — także jeśli nie dasz rady dołączyć na żywo.',
  },
  {
    q: 'Jak mogę zadać pytanie?',
    a: 'Wpisz pytanie w formularzu rejestracyjnym — Główna Księgowa przygotuje się do odpowiedzi z wyprzedzeniem. Możesz też zadać je na czacie podczas transmisji na żywo.',
  },
  {
    q: 'Dla kogo jest to wydarzenie?',
    a: 'Dla właścicieli i zarządów spółek z o.o., dyrektorów finansowych i osób prowadzących JDG, które planują przekształcenie w spółkę. Wiedza specjalistyczna nie jest wymagana.',
  },
];
