import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Warning Machines | Integrated hardware development',
  description: 'Full-cycle engineering, prototyping, and production support from Warning Machines.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="page">
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
