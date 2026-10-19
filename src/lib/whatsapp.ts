/** wa.me link with a pre-filled, URL-encoded message (PRD FR-2). `number` is digits only, with country code. */
export function whatsappUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  project: (title: string) => `Hi, I saw the ${title} project and I'd like to discuss a shoot.`,
  service: (title: string) => `Hi, I'm interested in ${title.toLowerCase()} for my brand. Can we talk?`,
};
