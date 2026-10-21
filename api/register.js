// Vercel Serverless Function: POST /api/register
// Przyjmuje rejestrację na webinar i wysyła ją do Telegrama (jak send-lead w imosta-landing / imosta-jdg).
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

const LEAD_TAG = '[Webinar: Zamknięcie Roku 2026]';
const MAX_BODY_BYTES = 10 * 1024;

const BUSINESS_FORMS = { spzoo: 'Sp. z o.o.', jdg: 'JDG', inna: 'Inna' };

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function clean(value, max = 200) {
  if (value === undefined || value === null) return '';
  return String(value).replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  let body = req.body;
  try {
    if (typeof body === 'string') {
      if (body.length > MAX_BODY_BYTES) return res.status(413).json({ ok: false, error: 'too_large' });
      body = JSON.parse(body);
    }
  } catch {
    return res.status(400).json({ ok: false, error: 'invalid_json' });
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ ok: false, error: 'invalid_json' });

  const firstName = clean(body.firstName, 80);
  const lastName = clean(body.lastName, 80);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, 160);
  const businessForm = BUSINESS_FORMS[clean(body.businessForm, 10)];
  // Question may contain line breaks — keep them, strip other control chars
  const question = String(body.question ?? '')
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, 500);
  const page = clean(body.page, 300);

  if (firstName.length < 2 || lastName.length < 2) return res.status(422).json({ ok: false, error: 'invalid_name' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(422).json({ ok: false, error: 'invalid_email' });
  if (!businessForm) return res.status(422).json({ ok: false, error: 'invalid_business_form' });
  if (question.length < 5) return res.status(422).json({ ok: false, error: 'invalid_question' });
  if (body.consent !== true) return res.status(422).json({ ok: false, error: 'consent_required' });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ ok: false, error: 'not_configured' });

  const text = [
    `<b>${escapeHtml(LEAD_TAG)}</b>`,
    '',
    `👤 <b>${escapeHtml(firstName)} ${escapeHtml(lastName)}</b>`,
    `✉️ ${escapeHtml(email)}`,
    `🏢 ${escapeHtml(company || '—')} · ${escapeHtml(businessForm)}`,
    '',
    '❓ <b>Pytanie:</b>',
    escapeHtml(question),
    '',
    `🔗 ${escapeHtml(page || '—')}`,
  ].join('\n');

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
      signal: AbortSignal.timeout(8000),
    });
    if (!tg.ok) return res.status(502).json({ ok: false, error: 'delivery_failed' });
  } catch {
    return res.status(502).json({ ok: false, error: 'delivery_failed' });
  }

  return res.status(200).json({ ok: true });
}
