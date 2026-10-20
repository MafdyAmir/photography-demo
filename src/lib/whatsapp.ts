/** wa.me link with a pre-filled, URL-encoded message (PRD FR-2). `number` is digits only, with country code. */
export function whatsappUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  project: (title: string) => `Hi Shotix, I saw your ${title} work and I'd like to talk about covering our event.`,
  service: (title: string) => `Hi Shotix, I'm interested in ${title.toLowerCase()}. Can we talk?`,
  /** Built in the browser by the "Check your date" form. */
  date: (date: string, venue: string, service?: string) =>
    `Hi Shotix, we have an event on ${date}${venue ? ` at ${venue}` : ''}${service ? ` (${service})` : ''}. Are you available to cover it?`,
};
