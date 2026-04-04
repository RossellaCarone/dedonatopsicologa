import { useState, useEffect } from 'preact/hooks';

const links = [
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#approccio', label: 'Approccio' },
  { href: '#contatti', label: 'Contatti' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById('mobile-menu-btn');
    if (!btn) return;
    const toggle = () => setOpen((v) => !v);
    btn.addEventListener('click', toggle);
    return () => btn.removeEventListener('click', toggle);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div
      aria-hidden={!open}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99,
        background: '#faf8f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(href);
            }}
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: '1.5rem',
              color: '#2c2c2a',
              padding: '1rem',
              textDecoration: 'none',
              display: 'block',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#8a9e8c';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#2c2c2a';
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
