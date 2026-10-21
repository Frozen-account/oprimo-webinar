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
              Вебинар организован совместно OPRIMO BPO Sp. z o.o. (аутсорсинг бизнес-процессов) и IMOSTA (бухгалтерское
              бюро и налоговое консультирование).
            </p>
          </div>
          <nav aria-label="Правовая информация" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/polityka-prywatnosci" className="transition hover:text-white">
              Политика конфиденциальности
            </a>
            <a href="/rodo" className="transition hover:text-white">
              Информация об обработке данных (RODO)
            </a>
            <a href="/regulamin-webinaru" className="transition hover:text-white">
              Правила вебинара
            </a>
          </nav>
        </div>

        <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            Администраторами персональных данных, указанных в форме, являются OPRIMO BPO Sp. z o.o. и IMOSTA. Мы обрабатываем
            данные для регистрации на мероприятие, отправки материалов и записи (ст. 6 п. 1 лит. a и b RODO/GDPR). Вы вправе
            получить доступ к своим данным, исправить или удалить их, ограничить обработку, а также в любой момент отозвать
            согласие.
          </p>
          <p>
            Материалы вебинара и PDF носят информационный и образовательный характер и не являются налоговой или
            юридической консультацией. Налоговые решения следует согласовывать индивидуально.
          </p>
          <p className="pt-2 text-slate-400">© {year} OPRIMO BPO Sp. z o.o. &amp; IMOSTA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
