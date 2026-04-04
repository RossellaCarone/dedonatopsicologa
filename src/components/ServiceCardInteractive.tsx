import { h } from 'preact';
import { useState } from 'preact/hooks';
import ServiceModal from './ServiceModal';

interface Props {
  title: string;
  description: string;
  detail: string;
  iconSvg: string;
  linkText: string;
}

export default function ServiceCardInteractive({ title, description, detail, iconSvg, linkText }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '4px',
        padding: '2.5rem 2rem',
        border: '1px solid rgba(138,158,140,0.15)',
        transition: 'transform 0.25s, box-shadow 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(44,44,42,0.07)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
          marginBottom: '1.5rem',
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
      <h3
        style={{
          fontFamily: 'serif',
          fontSize: '1.35rem',
          fontWeight: 400,
          color: '#2c2c2a',
          marginBottom: '0.75rem',
          marginTop: 0,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.9rem',
          color: '#5a5a56',
          fontWeight: 300,
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Link button */}
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: linkHovered ? '0.65rem' : '0.4rem',
          marginTop: '1.25rem',
          fontSize: '0.8rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#8a9e8c',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
          transition: 'gap 0.2s',
          fontFamily: 'inherit',
        }}
      >
        {linkText}
      </button>

      {/* Modal */}
      <ServiceModal
        title={title}
        description={description}
        detail={detail}
        iconSvg={iconSvg}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
