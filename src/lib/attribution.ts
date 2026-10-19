/**
 * First-touch lead source (PRD §2: 100% of leads tracked). Stored per browser tab session
 * on the first page view, then sent with the inquiry form as hidden fields.
 */
const KEY = 'lead_attribution';

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  landing_page?: string;
};

export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(location.search);
    const ref = document.referrer ? new URL(document.referrer).hostname : '';
    const data: Attribution = {
      utm_source: params.get('utm_source') ?? (ref && ref !== location.hostname ? ref : 'direct'),
      utm_medium: params.get('utm_medium') ?? undefined,
      utm_campaign: params.get('utm_campaign') ?? undefined,
      landing_page: location.pathname,
    };
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Storage blocked (private mode etc.) — the form still works without it.
  }
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
}
