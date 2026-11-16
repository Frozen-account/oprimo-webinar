// Single source of truth for event data and copy that changes between editions.

export const EVENT = {
  title: 'VAT в Польше: ошибки предпринимателей, возврат налога и исключение из реестра VAT',
  // 23.11.2026 18:00 Europe/Warsaw (CET, UTC+1)
  startsAt: '2026-11-23T18:00:00+01:00',
  durationMin: 70,
  expertMin: 30,
  qaMin: 40,
  dateLabel: '23 ноября 2026',
  dateShort: '23.11.2026',
  timeLabel: '18:00',
  tzLabel: 'по Варшаве (CET)',
  tzShort: '(CET)',
  weekdayLabel: 'понедельник',
  formatLabel:
    'Прямая линия с главным бухгалтером: 30 минут практических разборов с примерами из бухгалтерской практики + 40 минут ответы на вопросы участников (Q&A)',
};

export const FORM_ANCHOR = 'rejestracja';
export const REGISTER_ENDPOINT = '/api/register';

// Drop the real file into /public under this name.
export const LEAD_MAGNET = {
  title:
    'Чек-лист: «Безопасная работа с VAT в Польше — проверка контрагентов (Biała lista), регистрация VAT-UE и защита от исключения из реестра»',
  shortTitle: 'Безопасная работа с VAT в Польше',
  fileName: 'Checklista-Bezpieczna-Praca-z-VAT.pdf',
  href: '/Checklista-Bezpieczna-Praca-z-VAT.pdf',
};

export const SPEAKER = {
  name: 'Татьяна Бакаева',
  nameLatin: 'Tatsiana Bakayeva',
  role: 'Прокурент, Главный бухгалтер IMOSTA',
  badge: 'Главный бухгалтер IMOSTA',
  photo: '/images/tatsiana-card.jpg', // 4:3, eye line ~42% — matches daria-card.jpg
  photoPosition: 'object-[50%_20%]',
  avatar: '/images/tatsiana-bakayeva-avatar.jpg',
  // Stat tiles render only when set, e.g. experienceYears: 10, clients: '150+'
  experienceYears: null as number | null,
  clients: null as string | null,
  bio: 'Практикующий эксперт по бухгалтерскому и налоговому сопровождению бизнеса в Польше (Sp. z o.o. и JDG). Специализируется на сложных кейсах регистрации и восстановления в реестре VAT, сопровождении налоговых проверок при возврате VAT и налоговом планировании.',
  credentials: [
    'Регистрация и восстановление в реестре VAT',
    'Сопровождение налоговых проверок при возврате VAT',
    'Бухгалтерское сопровождение и налоговое планирование для Sp. z o.o. и JDG',
  ],
};

export const COHOST = {
  name: 'Дарья',
  nameLatin: 'Daria',
  role: 'Представитель OPRIMO BPO — модератор эфира, операционное сопровождение бизнеса в Польше',
  badge: 'Модератор, OPRIMO BPO',
  photo: '/images/daria-card.jpg', // 4:3, eye line ~42% — matches tatsiana-card.jpg
  photoPosition: 'object-[50%_20%]',
  avatar: '/images/daria-oprimo-avatar.jpg',
  bio: 'Покажет, как выстроить документооборот и работу со счетами так, чтобы VAT был под контролем: проверка контрагентов и счетов по Biała lista, порядок в документах для возврата — от автоматизации до аутсорсинга бэк-офиса.',
};

export const FAQ = [
  {
    q: 'Вебинар бесплатный?',
    a: `Да. Полный доступ ко всем ${EVENT.durationMin} минутам трансляции (${EVENT.expertMin} минут практических разборов + ${EVENT.qaMin} минут Q&A), записи и чек-листу по безопасной работе с VAT — на 100% бесплатный. Мы не запрашиваем данные карты, скрытых платежей нет.`,
  },
  {
    q: 'Будет ли запись?',
    a: 'Да. После мероприятия мы отправим всем зарегистрированным участникам видеозапись и чек-лист PDF «Безопасная работа с VAT в Польше» — даже если вы не сможете подключиться в прямом эфире.',
  },
  {
    q: 'Как задать вопрос?',
    a: `Напишите вопрос в регистрационной форме — главный бухгалтер подготовит ответ заранее. Также можно задать его в чате во время трансляции: ${EVENT.qaMin} из ${EVENT.durationMin} минут мы отводим на ответы на ваши вопросы в прямом эфире.`,
  },
  {
    q: 'Сколько длится вебинар и как он устроен?',
    a: `${EVENT.durationMin} минут: ${EVENT.expertMin} минут — практические разборы с примерами из бухгалтерской практики (регистрация VAT и VAT-UE, возврат VAT, исключение из реестра VAT и восстановление), затем ${EVENT.qaMin} минут — ответы на вопросы участников (Q&A). Старт ${EVENT.dateShort} в ${EVENT.timeLabel} по Варшаве (CET).`,
  },
  {
    q: 'Что будет в чек-листе?',
    a: 'Проверка контрагентов и банковских счетов по Biała lista podatników VAT, когда нужна регистрация VAT-UE (в том числе при оплате Google Ads и Meta), и что сделать, чтобы компанию не исключили из реестра VAT. Чек-лист доступен сразу после регистрации.',
  },
  {
    q: 'Для кого это мероприятие?',
    a: 'Для владельцев бизнеса в Польше — Sp. z o.o. и JDG: тех, кто уже зарегистрирован как плательщик VAT, планирует регистрацию, ждёт возврата VAT или покупает иностранные услуги. Специальные знания не требуются.',
  },
];
