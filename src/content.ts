// Single source of truth for event data and copy that changes between editions.
// TODO(content): replace the placeholder speaker data before going live.

export const EVENT = {
  title: 'Q&A с главным бухгалтером IMOSTA: закрытие 2026 года и подготовка к изменениям 2027',
  // 15.11.2026 18:00 Europe/Warsaw (CET, UTC+1)
  startsAt: '2026-11-15T18:00:00+01:00',
  durationMin: 60,
  expertMin: 20,
  qaMin: 40,
  dateLabel: '15 ноября 2026',
  timeLabel: '18:00',
  tzLabel: 'по Варшаве (CET)',
  weekdayLabel: 'воскресенье',
  formatLabel: '20 минут выжимка от эксперта + 40 минут живой разбор ваших вопросов и кейсов (Q&A)',
};

export const FORM_ANCHOR = 'rejestracja';
export const REGISTER_ENDPOINT = '/api/register';

// Drop the real file into /public under this name.
export const LEAD_MAGNET = {
  title: 'Чек-лист и налоговый календарь 2026/2027',
  fileName: 'Kalendarz-Zamkniecia-Roku-2026-i-Checklista-KSeF.pdf',
  href: '/Kalendarz-Zamkniecia-Roku-2026-i-Checklista-KSeF.pdf',
};

export const SPEAKER = {
  name: 'Татьяна Бакаева',
  nameLatin: 'Tatsiana Bakayeva',
  role: 'Главный бухгалтер IMOSTA (Head of Accounting)',
  photo: '', // e.g. '/speaker.jpg' — leave empty to show the placeholder
  // Stat tiles render only when set, e.g. experienceYears: 10, clients: '150+'
  experienceYears: null as number | null,
  clients: null as string | null,
  bio: 'Практикующий эксперт по бухгалтерскому учёту и налогообложению бизнеса в Польше.',
  credentials: [
    'Ведение бухгалтерии и налоговое планирование для Sp. z o.o. и JDG',
    'Сопровождение перехода на Estoński CIT',
    'Адаптация процессов компании к KSeF и JPK_CIT',
  ],
};

export const COHOST = {
  name: 'Операционный эксперт OPRIMO BPO',
  role: 'Business Process Outsourcing',
  bio: 'Покажет, как выстроить документооборот, работу со счетами и согласованиями так, чтобы KSeF и закрытие года не парализовали команду — от автоматизации до аутсорсинга бэк-офиса.',
};

export const FAQ = [
  {
    q: 'Вебинар бесплатный?',
    a: 'Да. Полный доступ ко всем 60 минутам трансляции (20 минут выжимки от эксперта + 40 минут Q&A), записи и чек-листу PDF — на 100% бесплатный. Мы не запрашиваем данные карты, скрытых платежей нет.',
  },
  {
    q: 'Будет ли запись?',
    a: 'Да. После мероприятия мы отправим всем зарегистрированным участникам видеозапись и чек-лист PDF — даже если вы не сможете подключиться в прямом эфире.',
  },
  {
    q: 'Как задать вопрос?',
    a: 'Напишите вопрос в регистрационной форме — главный бухгалтер подготовит ответ заранее. Также можно задать его в чате во время трансляции: 40 из 60 минут мы отводим на живой разбор ваших вопросов и кейсов.',
  },
  {
    q: 'Сколько длится вебинар и как он устроен?',
    a: '60 минут: 20 минут — выжимка от эксперта по главным темам (закрытие года, KSeF и JPK_CIT, выплаты из Sp. z o.o.), затем 40 минут — живой разбор ваших вопросов и кейсов (Q&A). Старт 15.11.2026 в 18:00 по Варшаве (CET).',
  },
  {
    q: 'Для кого это мероприятие?',
    a: 'Для владельцев и членов правления Sp. z o.o., финансовых директоров и предпринимателей на JDG, которые планируют преобразование в компанию. Специальные знания не требуются.',
  },
];
