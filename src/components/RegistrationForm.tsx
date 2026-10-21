import { useId, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowRight, LoaderCircle, Lock, TriangleAlert } from 'lucide-react';
import { FORM_ANCHOR, REGISTER_ENDPOINT } from '../content';
import { cn } from '../lib';

type BusinessForm = '' | 'spzoo' | 'jdg' | 'inna';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  businessForm: BusinessForm;
  question: string;
  consent: boolean;
}

type Errors = Partial<Record<keyof Values, string>>;

const INITIAL: Values = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  businessForm: '',
  question: '',
  consent: false,
};

const QUESTION_MAX = 500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// NIP checksum: weights 6,5,7,2,3,4,5,6,7; sum mod 11 must equal the 10th digit.
function isValidNip(nip: string) {
  if (!/^\d{10}$/.test(nip)) return false;
  const w = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const sum = w.reduce((acc, weight, i) => acc + weight * Number(nip[i]), 0);
  return sum % 11 === Number(nip[9]);
}

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.firstName.trim().length < 2) e.firstName = 'Укажите имя.';
  if (v.lastName.trim().length < 2) e.lastName = 'Укажите фамилию.';
  if (!v.email.trim()) e.email = 'Укажите e-mail — на него мы отправим ссылку на трансляцию.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Похоже, адрес e-mail указан с ошибкой.';

  // Optional field: only validate when the input looks like a bare NIP (digits, dashes, spaces, PL prefix).
  const company = v.company.trim();
  if (company && /^(PL)?[\d\s-]+$/i.test(company)) {
    const digits = company.replace(/\D/g, '');
    if (!isValidNip(digits)) e.company = 'Некорректный номер NIP — проверьте цифры или укажите название компании.';
  }

  if (!v.businessForm) e.businessForm = 'Выберите форму деятельности.';
  if (v.question.trim().length < 5) e.question = 'Кратко опишите свой вопрос — ответим в прямом эфире.';
  if (!v.consent) e.consent = 'Согласие обязательно, чтобы мы могли отправить ссылку и материалы.';
  return e;
}

export function RegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const [values, setValues] = useState<Values>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    // Re-validate live only after the user has left the field once (or tried to submit).
    if (touched[key]) setErrors((prev) => ({ ...prev, [key]: validate(next)[key] }));
  };

  const blur = (key: keyof Values) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validate(values)[key] }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(INITIAL).map((k) => [k, true])));

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      if (import.meta.env.DEV) {
        // No serverless function under `vite dev` — simulate latency instead.
        await new Promise((r) => setTimeout(r, 900));
      } else {
        const res = await fetch(REGISTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values, page: window.location.href }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      }
      setStatus('idle');
      setValues(INITIAL);
      setTouched({});
      onSuccess();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      id={FORM_ANCHOR}
      className="relative scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand-emerald via-brand-emerald-2 to-brand-blue" />

      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight text-brand-navy">Забронируйте место</h2>
          <p className="mt-1 text-sm text-slate-500">Регистрация займёт около 40 секунд.</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-brand-emerald ring-1 ring-emerald-100">
          0 zł
        </span>
      </div>

      <form noValidate onSubmit={submit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Имя" error={errors.firstName}>
            {(p) => (
              <input
                {...p}
                name="firstName"
                autoComplete="given-name"
                value={values.firstName}
                onChange={(e) => set('firstName', e.target.value)}
                onBlur={() => blur('firstName')}
                className={inputCls(!!errors.firstName)}
              />
            )}
          </Field>
          <Field label="Фамилия" error={errors.lastName}>
            {(p) => (
              <input
                {...p}
                name="lastName"
                autoComplete="family-name"
                value={values.lastName}
                onChange={(e) => set('lastName', e.target.value)}
                onBlur={() => blur('lastName')}
                className={inputCls(!!errors.lastName)}
              />
            )}
          </Field>
        </div>

        <Field label="Рабочий e-mail" error={errors.email}>
          {(p) => (
            <input
              {...p}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="ivan.petrov@firma.pl"
              value={values.email}
              onChange={(e) => set('email', e.target.value)}
              onBlur={() => blur('email')}
              className={inputCls(!!errors.email)}
            />
          )}
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Название компании / NIP" optional error={errors.company}>
            {(p) => (
              <input
                {...p}
                name="company"
                autoComplete="organization"
                value={values.company}
                onChange={(e) => set('company', e.target.value)}
                onBlur={() => blur('company')}
                className={inputCls(!!errors.company)}
              />
            )}
          </Field>
          <Field label="Форма деятельности" error={errors.businessForm}>
            {(p) => (
              <select
                {...p}
                name="businessForm"
                value={values.businessForm}
                onChange={(e) => set('businessForm', e.target.value as BusinessForm)}
                onBlur={() => blur('businessForm')}
                className={cn(inputCls(!!errors.businessForm), !values.businessForm && 'text-slate-400')}
              >
                <option value="" disabled>
                  Выберите…
                </option>
                <option value="spzoo">Sp. z o.o.</option>
                <option value="jdg">JDG</option>
                <option value="inna">Другая</option>
              </select>
            )}
          </Field>
        </div>

        <Field
          label="Какой налоговый или бухгалтерский вопрос для вас сейчас самый важный?"
          error={errors.question}
          hint={`${values.question.length}/${QUESTION_MAX}`}
        >
          {(p) => (
            <textarea
              {...p}
              name="question"
              rows={3}
              maxLength={QUESTION_MAX}
              placeholder="напр. Как безопасно выплатить дивиденды, подготовка к KSeF..."
              value={values.question}
              onChange={(e) => set('question', e.target.value)}
              onBlur={() => blur('question')}
              className={cn(inputCls(!!errors.question), 'resize-none')}
            />
          )}
        </Field>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(e) => {
                set('consent', e.target.checked);
                setTouched((t) => ({ ...t, consent: true }));
                setErrors((prev) => ({ ...prev, consent: e.target.checked ? undefined : prev.consent }));
              }}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className={cn(
                'mt-0.5 size-4 shrink-0 cursor-pointer rounded border-slate-300 accent-brand-emerald',
                errors.consent && 'outline-2 outline-red-400',
              )}
            />
            <span>
              Я даю согласие на обработку моих персональных данных компаниями OPRIMO BPO Sp. z o.o. и IMOSTA в целях
              регистрации на вебинар, отправки материалов и записи в соответствии с{' '}
              <a href="/polityka-prywatnosci" className="font-semibold text-brand-blue underline-offset-2 hover:underline">
                Политикой конфиденциальности
              </a>{' '}
              (RODO/GDPR). Я могу отозвать согласие в любой момент.
            </span>
          </label>
          {errors.consent && <ErrorText id="consent-error">{errors.consent}</ErrorText>}
        </div>

        {status === 'error' && (
          <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
            Не удалось отправить заявку. Проверьте подключение и попробуйте ещё раз.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-emerald px-5 py-4 text-base font-bold text-white shadow-md shadow-emerald-900/20 transition hover:bg-emerald-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-emerald-2 active:scale-[0.99] disabled:cursor-wait disabled:opacity-80"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="size-5 animate-spin" aria-hidden /> Бронируем место…
            </>
          ) : (
            <>
              Забронировать бесплатное место и получить чек-лист
              <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
          <Lock className="size-3" aria-hidden /> Без спама. Ваши данные в безопасности.
        </p>
      </form>
    </div>
  );
}

function inputCls(invalid: boolean) {
  return cn(
    'block w-full rounded-xl border bg-slate-50/60 px-3.5 py-2.5 text-sm text-brand-navy placeholder:text-slate-400 transition',
    'focus:bg-white focus:outline-none focus:ring-4',
    invalid
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-slate-200 hover:border-slate-300 focus:border-brand-emerald-2 focus:ring-emerald-100',
  );
}

interface FieldA11yProps {
  id: string;
  'aria-invalid': boolean;
  'aria-describedby'?: string;
}

function Field({
  label,
  optional,
  error,
  hint,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: (p: FieldA11yProps) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <div className="mb-1.5 flex items-end justify-between gap-2">
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">
          {label}
          {optional && <span className="ml-1 font-normal text-slate-400">(необязательно)</span>}
        </label>
        {hint && <span className="shrink-0 text-xs text-slate-400 tabular-nums">{hint}</span>}
      </div>
      {children({ id, 'aria-invalid': !!error, 'aria-describedby': error ? errorId : undefined })}
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
      <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
      {children}
    </p>
  );
}
