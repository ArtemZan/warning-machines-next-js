'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const services = [
  { label: 'Injection Moulding Service', href: '/injection-moulding-service' },
  { label: '3D Printing Service', href: '/services/3d-printing-service' },
  { label: 'CNC Machining Service', href: '/cnc-machining-service' },
  { label: 'Hardware design', href: '/hardware-design' },
  { label: 'PCB and Firmware', href: '/pcb-and-firmware' },
  { label: 'Pre Certification Testing', href: '/pre-certification-testing' },
  { label: 'Software Design', href: '/software-design' },
];

export function NavBar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler as unknown as EventListener);
    return () => document.removeEventListener('click', handler as unknown as EventListener);
  }, []);


  const displayName = user?.name || 'Account';

  return (
    <header className="nav">
      <div className="nav__brand">
        <Link href="/" className="nav__logo">warning-machines.com</Link>
      </div>
      <nav className="nav__links" aria-label="Primary">
        <div
          className="nav__item nav__item--has-submenu"
          onMouseEnter={() => {
            if (servicesTimer.current) clearTimeout(servicesTimer.current);
            setServicesOpen(true);
          }}
          onMouseLeave={() => {
            if (servicesTimer.current) clearTimeout(servicesTimer.current);
            servicesTimer.current = setTimeout(() => setServicesOpen(false), 150);
          }}
        >
          <button
            type="button"
            className="nav__link nav__link--trigger"
            aria-haspopup="true"
            aria-expanded={servicesOpen}
            onClick={() => router.push('/services')}
          >
            Services
            <span className="nav__caret" aria-hidden="true">▼</span>
          </button>
          <div
            className={`nav__submenu ${servicesOpen ? 'is-open' : ''}`}
            role="menu"
            onMouseEnter={() => {
              if (servicesTimer.current) clearTimeout(servicesTimer.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              if (servicesTimer.current) clearTimeout(servicesTimer.current);
              servicesTimer.current = setTimeout(() => setServicesOpen(false), 150);
            }}
          >
            {services.map((item) => (
              <Link key={item.href} href={item.href} className="nav__submenu-link" role="menuitem">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/#process" className="nav__link">Process</Link>
        <Link href="/blog" className="nav__link">Blog</Link>
        <Link href="/quote-form" className="nav__link">Quote Form</Link>
        {!user ? (
          <>
            <Link href="/login" className="nav__link">Login</Link>
            <Link href="/signup" className="nav__link">Sign up</Link>
          </>
        ) : null}
      </nav>
      <div className="nav__actions">
        {user ? (
          <div className="nav__user" ref={menuRef}>
            <button className="nav__user-btn" onClick={() => setMenuOpen((open) => !open)} aria-haspopup="true" aria-expanded={menuOpen}>
              <span className="nav__user-avatar" aria-hidden="true">{displayName?.[0]?.toUpperCase() || 'U'}</span>
              <span className="nav__user-name">{displayName}</span>
            </button>
            {menuOpen ? (
              <div className="nav__dropdown" role="menu">
                <button className="nav__dropdown-item" role="menuitem" onClick={logout}>Log out</button>
              </div>
            ) : null}
          </div>
        ) : null}
        <Link className="button button--primary" href="/quote-form">Get a quote</Link>
      </div>
    </header>
  );
}
