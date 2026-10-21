# OPRIMO BPO × IMOSTA — webinar „Zamknięcie Roku 2026”

Landing page rejestracji na bezpłatny webinar Q&A (15.11.2026, 18:00 CET; 20 min ekspert + 40 min Q&A). Vite + React + TypeScript + Tailwind CSS v4 + Lucide.

```bash
npm install
npm run dev       # http://localhost:5173 (formularz symuluje wysyłkę)
npm run build     # typecheck + build do dist/
```

| Ścieżka | Co to jest |
|---|---|
| `src/content.ts` | Dane wydarzenia, prowadzący, FAQ, plik PDF — **tu edytujesz treści** |
| `src/components/` | Sekcje strony (Header, Hero, RegistrationForm, Agenda, Speakers, LeadMagnet, Faq, FinalCta, Footer, SuccessModal, MobileCtaBar) |
| `api/register.js` | Vercel Function: `POST /api/register` → Telegram, tag `[Webinar: Zamknięcie Roku 2026]` |
| `public/` | Statyczne pliki — wrzuć tu PDF (`LEAD_MAGNET.fileName`) i zdjęcie prowadzącej |

## Przed publikacją

1. `public/Kalendarz-Zamkniecia-Roku-2026-i-Checklista-KSeF.pdf` — dodaj właściwy plik PDF.
2. `src/content.ts` → `SPEAKER`: imię, zdjęcie, lata doświadczenia, liczba klientów, certyfikaty (obecnie placeholdery).
3. Podstrony `/polityka-prywatnosci`, `/rodo`, `/regulamin-webinaru` — linki w stopce i zgodzie RODO.
4. Wysyłka e-maila z linkiem do transmisji: obecnie `api/register.js` tylko powiadamia Telegram — podłącz platformę webinarową / ESP.

## Deploy (Vercel)

Framework preset **Vite**. Env (Production + Preview): `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

Payload: `{ firstName, lastName, email, company, businessForm: "spzoo|jdg|inna", question, consent: true, page }`
Odpowiedzi: `200 ok`, `400 invalid_json`, `405`, `413`, `422 invalid_name|invalid_email|invalid_business_form|invalid_question|consent_required`, `500 not_configured`, `502 delivery_failed`.
