import { h } from 'preact';
import { useEffect } from 'preact/hooks';

interface Props {
  title: string;
  description: string;
  detail: string;
  iconSvg: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function ServiceModal({ title, description, detail, iconSvg, onClose, isOpen }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCtaClick = (e: MouseEvent) => {
    e.preventDefault();
    onClose();
    const target = document.getElementById('contatti');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <div
        style={{
          position: 'relative',
          backgroundColor: '#faf8f4',
          borderRadius: '8px',
          padding: '2.5rem',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9a9a94',
            fontSize: '1.25rem',
            lineHeight: 1,
            padding: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#2c2c2a'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#9a9a94'; }}
          aria-label="Chiudi"
        >
          ×
        </button>

        {/* Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#eef3ee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a9e8c"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            dangerouslySetInnerHTML={{ __html: iconSvg }}
          />
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#2c2c2a',
            marginTop: '1.5rem',
            marginBottom: 0,
            textAlign: 'center',
          }}
        >
          {title}
        </h2>

        {/* Short description */}
        <p
          style={{
            fontSize: '0.95rem',
            color: '#5a5a56',
            fontWeight: 300,
            lineHeight: 1.7,
            marginTop: '0.75rem',
            marginBottom: 0,
          }}
        >
          {description}
        </p>

        {/* Divider */}
        <div
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: '#c4a882',
            margin: '1.5rem 0',
          }}
        />

        {/* Detail text */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#5a5a56',
            fontWeight: 300,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {detail}
        </p>

        {/* CTA button */}
        <a
          href="#contatti"
          onClick={handleCtaClick}
          style={{
            display: 'block',
            marginTop: '2rem',
            backgroundColor: '#8a9e8c',
            color: 'white',
            width: '100%',
            padding: '0.85rem',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            borderRadius: '2px',
            textDecoration: 'none',
            boxSizing: 'border-box',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#6e8370'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#8a9e8c'; }}
        >
          Prenota una consulenza
        </a>
      </div>
    </div>
  );
}
