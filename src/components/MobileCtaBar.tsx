import { useEffect, useState } from 'react';
import { FORM_ANCHOR, EVENT } from '../content';
import { CtaButton } from './ui';

/** Mobile-only sticky bar, shown once the hero form has scrolled out of view. */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById(FORM_ANCHOR);
    if (!form) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 animate-slide-up border-t border-slate-200 bg-white/90 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-sm font-bold text-brand-navy">Вебинар Q&amp;A · 0 zł</p>
          <p className="truncate text-xs text-slate-500">
            {EVENT.dateLabel}, {EVENT.timeLabel}
          </p>
        </div>
        <CtaButton size="sm">Записаться</CtaButton>
      </div>
    </div>
  );
}
