import { useEffect, useState } from 'react';
import { EVENT, FORM_ANCHOR } from './content';

/** Smooth-scrolls to the registration form and focuses its first field. */
export function scrollToForm() {
  const el = document.getElementById(FORM_ANCHOR);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => {
    el.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
  }, 600);
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isOver: boolean;
}

export function useCountdown(targetIso: string, durationMin: number): Countdown {
  const target = new Date(targetIso).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const end = target + durationMin * 60_000;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    isLive: now >= target && now < end,
    isOver: now >= end,
  };
}

const icsDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

/** Builds an .ics data URL so registrants can save the event to their calendar. */
export function calendarHref() {
  const start = new Date(EVENT.startsAt);
  const end = new Date(start.getTime() + EVENT.durationMin * 60_000);
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//OPRIMO BPO//Webinar//PL',
    'BEGIN:VEVENT',
    `UID:webinar-zamkniecie-roku-2026@oprimo`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(start)}`,
    `DTEND:${icsDate(end)}`,
    'SUMMARY:Webinar Q&A: Zamknięcie Roku 2026 (OPRIMO BPO × IMOSTA)',
    'DESCRIPTION:Link do transmisji znajdziesz w e-mailu potwierdzającym rejestrację.',
    'LOCATION:Online',
    'BEGIN:VALARM',
    'TRIGGER:-PT30M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Webinar startuje za 30 minut',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
