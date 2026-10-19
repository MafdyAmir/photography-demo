declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type EventName = 'inquiry_submit' | 'whatsapp_click' | 'email_click' | 'start_project_click' | (string & {});

/** Sends a GA4 event. Does nothing when GA4 isn't configured. */
export function track(name: EventName, params: Record<string, string | undefined> = {}): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, { ...params, transport_type: 'beacon' });
}
