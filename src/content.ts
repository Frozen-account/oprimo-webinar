// Single source of truth for event data and copy that changes between editions.
// TODO(content): replace the placeholder speaker data before going live.

export const EVENT = {
  title: 'Q&A с главным бухгалтером IMOSTA: закрытие 2026 года и подготовка к изменениям 2027',
  // 29.10.2026 18:00 Europe/Warsaw (CET, UTC+1 — DST ends 25.10.2026)
  startsAt: '2026-10-29T18:00:00+01:00',
  durationMin: 60,
  dateLabel: '29 октября 2026',
  timeLabel: '18:00',
  weekdayLabel: 'четверг',
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
  name: 'Главный бухгалтер IMOSTA',
  role: 'Head of Accounting, IMOSTA Biuro Rachunkowe',
  photo: '', // e.g. '/speaker.jpg' — leave empty to show the placeholder
  experienceYears: 15,
  clients: '200+',
  bio: 'Ежедневно ведёт бухгалтерию Sp. z o.o., коммандитных товариществ (sp.k.) и JDG, которые готовятся к преобразованию в компанию. Специализируется на закрытии года, эстонском CIT (Estoński CIT) и безопасном планировании выплат учредителям. Говорит о налогах просто — без канцелярита и без запугивания.',
  credentials: [
    'Сертификат Министерства финансов Польши на право оказания бухгалтерских услуг',
    'Практика в торговом праве (KSH) и расчётах CIT/VAT',
    'Внедрение KSeF и JPK_CIT у клиентов бюро',
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
    a: 'Да. Полный доступ к трансляции, сессии Q&A, записи и чек-листу PDF — на 100% бесплатный. Мы не запрашиваем данные карты, скрытых платежей нет.',
  },
  {
    q: 'Будет ли запись?',
    a: 'Да. После мероприятия мы отправим всем зарегистрированным участникам видеозапись и чек-лист PDF — даже если вы не сможете подключиться в прямом эфире.',
  },
  {
    q: 'Как задать вопрос?',
    a: 'Напишите вопрос в регистрационной форме — главный бухгалтер подготовит ответ заранее. Также можно задать его в чате во время прямой трансляции.',
  },
  {
    q: 'Для кого это мероприятие?',
    a: 'Для владельцев и членов правления Sp. z o.o., финансовых директоров и предпринимателей на JDG, которые планируют преобразование в компанию. Специальные знания не требуются.',
  },
];
