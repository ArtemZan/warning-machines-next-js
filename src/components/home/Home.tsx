import { Articles } from './Articles';
import { ContactForm } from './ContactForm';
import { Hero } from './Hero';
import { LogoStrip } from './LogoStrip';
import { ServiceGrid } from './ServiceGrid';
import type { SiteContent } from '@/types';

export function HomePage(props: {content: SiteContent}) {
    const { content } = props;

    return <main>
        <Hero hero={content.hero} />
        <ServiceGrid />
        <LogoStrip />
        <Articles articles={content.articles} />
        <ContactForm />
    </main>
}