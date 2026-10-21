import { useEffect, useRef } from 'react';
import { CalendarPlus, Download, Mail, X } from 'lucide-react';
import { EVENT, LEAD_MAGNET } from '../content';
import { calendarHref } from '../lib';

export function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" role="presentation">
      <div className="absolute inset-0 animate-fade-in bg-slate-950/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        className="relative w-full max-w-md animate-pop-in rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Zamknij"
          className="absolute top-3 right-3 grid size-9 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="size-5" />
        </button>

        <svg className="mx-auto size-20" viewBox="0 0 56 56" aria-hidden>
          <circle cx="28" cy="28" r="26" className="fill-emerald-50" />
          <circle
            className="check-circle"
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            transform="rotate(-90 28 28)"
          />
          <path
            className="check-mark"
            d="M17 29l7 7 15-16"
            fill="none"
            stroke="#059669"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h2 id="success-title" className="mt-5 text-2xl font-extrabold tracking-tight text-brand-navy">
          Dziękujemy!
        </h2>
        <p className="mt-2 text-slate-600">
          Link do transmisji oraz Checklista PDF zostały wysłane na podany adres e-mail.
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-left text-sm">
          <Mail className="size-5 shrink-0 text-brand-blue" aria-hidden />
          <span className="text-slate-600">
            Nie widzisz wiadomości? Sprawdź folder <strong className="text-slate-800">Oferty</strong> lub{' '}
            <strong className="text-slate-800">Spam</strong>.
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href={LEAD_MAGNET.href}
            download={LEAD_MAGNET.fileName}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
          >
            <Download className="size-5" aria-hidden /> Pobierz checklistę PDF teraz
          </a>
          <a
            href={calendarHref()}
            download="webinar-zamkniecie-roku-2026.ics"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <CalendarPlus className="size-5 text-brand-blue" aria-hidden /> Dodaj do kalendarza ({EVENT.dateLabel},{' '}
            {EVENT.timeLabel.replace('godz. ', '')})
          </a>
        </div>
      </div>
    </div>
  );
}
