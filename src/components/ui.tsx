import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn, scrollToForm } from '../lib';

export function Logos({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5',
          inverted ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm',
        )}
      >
        <span className="grid size-6 place-items-center rounded-lg bg-brand-navy ring-1 ring-white/10">
          <span className="size-3 rounded-full border-[2.5px] border-brand-emerald-2" />
        </span>
        <span className={cn('text-sm font-extrabold tracking-tight', inverted ? 'text-white' : 'text-brand-navy')}>
          OPRIMO <span className="font-semibold text-brand-emerald">BPO</span>
        </span>
      </span>
      <span className={cn('text-sm font-medium', inverted ? 'text-slate-500' : 'text-slate-400')} aria-hidden>
        ×
      </span>
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-xl border px-2.5 py-1.5',
          inverted ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm',
        )}
      >
        <span className="grid size-6 place-items-center rounded-lg bg-brand-emerald text-[11px] font-extrabold text-white">
          I
        </span>
        <span className="flex flex-col leading-none">
          <span className={cn('text-sm font-extrabold tracking-tight', inverted ? 'text-white' : 'text-brand-navy')}>
            IMOSTA
          </span>
          <span className={cn('hidden text-[10px] font-medium sm:block', inverted ? 'text-slate-400' : 'text-slate-500')}>
            Biuro Rachunkowe
          </span>
        </span>
      </span>
    </div>
  );
}

type CtaProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
};

/** Emerald action button that scrolls to the registration form. */
export function CtaButton({ size = 'md', className, children, onClick, ...rest }: CtaProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        scrollToForm();
      }}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-emerald font-semibold text-white shadow-sm shadow-emerald-900/20 transition',
        'hover:bg-emerald-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-emerald-2 active:scale-[0.98]',
        size === 'sm' && 'px-3.5 py-2 text-sm',
        size === 'md' && 'px-5 py-3 text-sm sm:text-base',
        size === 'lg' && 'px-6 py-4 text-base sm:text-lg',
        className,
      )}
      {...rest}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  inverted = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={cn('text-xs font-bold uppercase tracking-[0.18em]', inverted ? 'text-emerald-400' : 'text-brand-emerald')}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl',
          inverted ? 'text-white' : 'text-brand-navy',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn('mt-4 text-base text-pretty sm:text-lg', inverted ? 'text-slate-300' : 'text-slate-600')}>{lead}</p>
      )}
    </div>
  );
}
