import type { Article, Hero, Service, SiteContent, Slide } from '@/types';

export const hero: Hero = {
  headline: 'From concept to reality',
  subheadline: 'Let’s bring your machine idea to life today',
  ctaPrimary: 'Send',
  ctaSecondary: 'Request demo',
};

export const capabilities: Service[] = [
  { id: 'pcb', title: 'PCB & Firmware', description: 'Custom PCB design, firmware and validation.' },
  { id: 'cnc', title: 'CNC Machining', description: 'Precision parts, prototypes, and low-volume production.' },
  { id: 'printing', title: '3D Printing', description: 'Rapid prototypes using FDM, SLA, and SLS.' },
  { id: 'moulding', title: 'Injection Moulding', description: 'Fast tooling and short-run plastic parts.' },
  { id: 'hardware', title: 'Hardware Design', description: 'End-to-end device design and integration.' },
  { id: 'software', title: 'Software Design', description: 'Embedded, web, and cloud integration support.' },
];

export const highlights: string[] = [
  'Integrated hardware development services',
  'Rapid prototyping to scalable production',
  'Low-volume manufacturing and validation',
];

export const articles: Article[] = [
  {
    id: 'firmware',
    title: 'The Hidden Engine Behind Every Smart Product',
    summary: 'How robust firmware and electronics underpin product reliability.',
    imageAlt: 'Close-up of a green PCB with firmware tools.',
    heroImage: '/images/articles/firmware.jpg',
    body: `Smart products rely on resilient electronics and firmware. Robust architectures, EMI-aware layouts, and testable firmware ensure reliability under real-world stress. We emphasize early validation, fault-tolerant design, and observability so products behave predictably in the field.`,
  },
  {
    id: 'healthcare-mvp-prototyping',
    title: 'From Care to Cure: Craft Your Health MVP Story!',
    summary: 'Building medical prototypes with speed and compliance in mind.',
    imageAlt: 'Medical device prototype with 3D-printed casing and PCB.',
    heroImage: '/images/articles/care-to-cure.png',
    body: `Healthcare MVPs demand rapid iteration without sacrificing safety. We combine additive manufacturing, CNC, and embedded prototyping to iterate enclosures and electronics fast, while planning for verification, documentation, and regulatory pathways from day one.`,
  },
  {
    id: 'build-your-product-mvp',
    title: 'From Idea to Investment: Build Your Product MVP!',
    summary: 'Taking concepts to investor-ready prototypes efficiently.',
    imageAlt: 'Product MVP comparison shots.',
    heroImage: '/images/articles/idea-to-investment.png',
    body: `Investor-ready MVPs balance polish with proof. We focus on functional prototypes that demonstrate core value, manufacturability, and a clear path to scale: validated architecture, tight BOM control, and a build story investors can trust.`,
  },
  {
    id: 'cnc-machines-vs-3d-printer',
    title: 'CNC Machines vs 3D Printers: Which Is Better for Prototyping?',
    summary: 'Choosing the right process for speed, finish, and cost.',
    imageAlt: 'Workshop with CNC and 3D printing equipment.',
    heroImage: '/images/articles/cnc-vs-3d.png',
    body: `CNC delivers precision, material strength, and finish; 3D printing wins on speed and geometry freedom. We help teams pick the right process per part—often a hybrid—considering tolerances, surface requirements, cost-per-part, and lead time.`,
  }
];

export const slides: Slide[] = [
  {
    id: 'fast-tooling-1',
    title: 'Fast Tooling = Faster Feedback',
    description: 'Low-volume molds, printed jigs, and fixtures accelerate validation with minimal delay.',
    image: '/images/slide1.png',
  },
  {
    id: 'fast-tooling-2',
    title: 'Low-volume molds, printed jigs, fixtures',
    description: 'Iterate quickly with hybrid CNC and printed tooling tailored to your prototype runs.',
    image: '/images/slide2.png',
  },
];

export const siteContent: SiteContent = {
  hero,
  capabilities,
  highlights,
  articles,
  slides,
};

export function getArticleById(id: string): Article | undefined {
  console.log(id);
  return articles.find((article) => article.id === id);
}

export const fallbackContent = siteContent;

