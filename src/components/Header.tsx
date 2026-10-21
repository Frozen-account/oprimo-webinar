import { useEffect, useState } from 'react';
import { MonitorPlay } from 'lucide-react';
import { cn } from '../lib';
import { CtaButton, Logos } from './ui';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b backdrop-blur-md transition-colors',
        scrolled ? 'border-slate-200 bg-white/95 shadow-sm' : 'border-slate-200 bg-white',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#top" aria-label="OPRIMO BPO × IMOSTA — в начало страницы">
          <Logos />
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-brand-navy/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-navy backdrop-blur lg:inline-flex">
            <MonitorPlay className="size-3.5 text-brand-blue" aria-hidden />
            Бесплатный вебинар в прямом эфире <span className="text-slate-300">|</span> Онлайн
          </span>
          <CtaButton size="sm">
            <span className="sm:hidden">Записаться</span>
            <span className="hidden sm:inline">Записаться бесплатно</span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
