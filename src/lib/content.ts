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
    summary: 'Why firmware is the backbone of smart products and how to build it right from day one.',
    imageAlt: 'Close-up of a green PCB with firmware tools.',
    heroImage: '/images/articles/firmware.jpg',
  },
  {
    id: 'healthcare-mvp-prototyping',
    title: 'From Care to Cure: Craft Your Health MVP Story!',
    summary: 'A practical guide to prototyping healthcare products quickly while staying compliance-minded.',
    imageAlt: 'Medical device prototype with 3D-printed casing and PCB.',
    heroImage: '/images/articles/care-to-cure.png',
  },
  {
    id: 'build-your-product-mvp',
    title: 'From Idea to Investment: Build Your Product MVP!',
    summary: 'How to turn a spark into an investor-ready MVP with clear proof and a scale path.',
    imageAlt: 'Product MVP comparison shots.',
    heroImage: '/images/articles/idea-to-investment.png',
  },
  {
    id: 'cnc-machines-vs-3d-printer',
    title: 'CNC Machines vs 3D Printers: Which Is Better for Prototyping?',
    summary: 'Choosing the right process for speed, finish, materials, and cost across prototype phases.',
    imageAlt: 'Workshop with CNC and 3D printing equipment.',
    heroImage: '/images/articles/cnc-vs-3d.png',
  },
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
  return articles.find((article) => article.id === id);
}

export const fallbackContent = siteContent;

