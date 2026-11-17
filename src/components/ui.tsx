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
      <ImostaLogo inverted={inverted} className="h-7 sm:h-9" />
    </div>
  );
}

/** Official IMOSTA logo (transparent PNG, 3:1). `inverted` uses the variant with white "OSTA" for dark backgrounds. */
export function ImostaLogo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <img
      src={inverted ? '/images/imosta-logo-white.png' : '/images/imosta-logo.png'}
      alt="IMOSTA"
      width={528}
      height={176}
      className={cn('block w-auto shrink-0', className)}
    />
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
