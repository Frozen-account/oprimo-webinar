import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn, scrollToForm } from '../lib';

export function Logos({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-3">
      <span className="inline-flex items-baseline text-lg leading-none font-extrabold tracking-tight sm:text-xl">
        <span className={inverted ? 'text-white' : 'text-brand-navy'}>OPRIMO</span>
        <span className="ml-0.5 text-brand-orange">bpo</span>
      </span>
      <span className={cn('hidden text-sm font-medium min-[400px]:inline', inverted ? 'text-white/40' : 'text-slate-300')} aria-hidden>
        ×
      </span>
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-md border px-1.5 py-1 sm:gap-2 sm:px-2',
          inverted ? 'border-white/15 bg-white/5' : 'border-brand-navy/15 bg-white',
        )}
      >
        <span className="grid size-6 place-items-center rounded-full bg-brand-blue text-[11px] font-extrabold text-white">
          I
        </span>
        <span className="flex flex-col leading-none">
          <span className={cn('text-sm font-extrabold tracking-tight', inverted ? 'text-white' : 'text-brand-navy')}>
            IMOSTA
          </span>
          <span className={cn('hidden text-[10px] font-medium sm:block', inverted ? 'text-white/60' : 'text-slate-500')}>
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

/** Orange action button that scrolls to the registration form. */
export function CtaButton({ size = 'md', className, children, onClick, ...rest }: CtaProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        scrollToForm();
      }}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange font-semibold text-white shadow-sm transition',
        'hover:bg-brand-orange-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange active:scale-[0.98]',
        size === 'sm' && 'px-3.5 py-2 text-sm sm:px-5 sm:py-2.5',
        size === 'md' && 'px-6 py-3 text-sm sm:text-base',
        size === 'lg' && 'px-7 py-4 text-base font-bold sm:text-lg',
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
      <p className={cn('text-xs font-bold uppercase tracking-[0.18em]', inverted ? 'text-brand-orange' : 'text-brand-blue')}>
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
        <p className={cn('mt-4 text-base text-pretty sm:text-lg', inverted ? 'text-white/75' : 'text-slate-600')}>{lead}</p>
      )}
    </div>
  );
}
