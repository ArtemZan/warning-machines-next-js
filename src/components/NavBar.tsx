'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export function NavBar() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler as unknown as EventListener);
    return () => document.removeEventListener('click', handler as unknown as EventListener);
  }, []);

  const handleScrollToContact = (event: ReactMouseEvent<HTMLElement>) => {
    event.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
    setMenuOpen(false);
  };

  const displayName = user?.name || 'Account';

  return (
    <header className="nav">
      <div className="nav__brand">
        <Link href="/" className="nav__logo">warning-machines.com</Link>
      </div>
      <nav className="nav__links" aria-label="Primary">
        <Link href="/#services">Services</Link>
        <Link href="/#process">Process</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/#contact" onClick={handleScrollToContact}>Quote Form</Link>
        {!user ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign up</Link>
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
        <Link className="button button--primary" href="/#contact" onClick={handleScrollToContact}>Get a quote</Link>
      </div>
    </header>
  );
}
