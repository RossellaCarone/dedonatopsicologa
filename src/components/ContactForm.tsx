import { useState, useRef } from 'preact/hooks';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputBase: Record<string, string | number> = {
  background: 'rgba(255,255,255,0.15)',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '2px',
  padding: '0.85rem 1rem',
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontSize: '0.9rem',
  color: 'white',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const focusStyle = {
  borderColor: '#ffffff',
  boxShadow: '0 0 0 3px rgba(255,255,255,0.2)',
};

const blurStyle = {
  borderColor: 'rgba(255,255,255,0.25)',
  boxShadow: 'none',
};

function applyFocus(el: HTMLElement) {
  el.style.borderColor = focusStyle.borderColor;
  el.style.boxShadow = focusStyle.boxShadow;
}

function applyBlur(el: HTMLElement) {
  el.style.borderColor = blurStyle.borderColor;
  el.style.boxShadow = blurStyle.boxShadow;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const buttonText: Record<FormState, string> = {
    idle: 'Invia richiesta',
    loading: 'Invio in corso...',
    success: 'Messaggio inviato \u2713',
    error: 'Errore - Riprova',
  };

  const buttonColor: Record<FormState, string> = {
    idle: '#8a9e8c',
    loading: '#8a9e8c',
    success: '#6e8370',
    error: '#c4534a',
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (formState === 'loading') return;

    const form = formRef.current;
    if (!form) return;

    setFormState('loading');

    try {
      const data = new FormData(form);
      const res = await fetch('https://formspree.io/f/xqegyvre', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setFormState('success');
        form.reset();
        setTimeout(() => setFormState('idle'), 3000);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const labelStyle: Record<string, string | number> = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '0.4rem',
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      {/* Name row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'var(--name-cols, 1fr)',
          gap: '1rem',
        }}
      >
        <style>{`@media (min-width: 769px) { form { --name-cols: 1fr 1fr; } }`}</style>
        <div>
          <label style={labelStyle}>Nome</label>
          <input
            type="text"
            name="nome"
            required
            placeholder="Il tuo nome"
            style={{ ...inputBase }}
            onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
            onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
          />
        </div>
        <div>
          <label style={labelStyle}>Cognome</label>
          <input
            type="text"
            name="cognome"
            required
            placeholder="Il tuo cognome"
            style={{ ...inputBase }}
            onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
            onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="la.tua@email.it"
          style={{ ...inputBase }}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        />
      </div>

      {/* Tipo consulenza */}
      <div>
        <label style={labelStyle}>Tipo di consulenza</label>
        <select
          name="tipo_consulenza"
          required
          style={{ ...inputBase, appearance: 'none' as any }}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        >
          <option value="" disabled selected style={{ background: '#8a9e8c', color: 'white' }}>
            Seleziona un servizio
          </option>
          <option value="Prima consulenza gratuita" style={{ background: '#8a9e8c', color: 'white' }}>
            Prima consulenza gratuita
          </option>
          <option value="Supporto psicologico individuale" style={{ background: '#8a9e8c', color: 'white' }}>
            Supporto psicologico individuale
          </option>
          <option value="Consulenza di coppia" style={{ background: '#8a9e8c', color: 'white' }}>
            Consulenza di coppia
          </option>
          <option value="Consulenza online" style={{ background: '#8a9e8c', color: 'white' }}>
            Consulenza online
          </option>
          <option value="Supporto nelle transizioni" style={{ background: '#8a9e8c', color: 'white' }}>
            Supporto nelle transizioni
          </option>
          <option value="Altro" style={{ background: '#8a9e8c', color: 'white' }}>
            Altro
          </option>
        </select>
      </div>

      {/* Messaggio */}
      <div>
        <label style={labelStyle}>Messaggio</label>
        <textarea
          name="messaggio"
          required
          rows={4}
          placeholder="Descrivi brevemente la tua richiesta..."
          style={{
            ...inputBase,
            resize: 'vertical',
            minHeight: '110px',
          }}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        />
      </div>

      {/* Placeholder color injection */}
      <style>{`
        form input::placeholder,
        form textarea::placeholder {
          color: rgba(255,255,255,0.5);
        }
        form select option {
          background: #8a9e8c;
          color: white;
        }
      `}</style>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'loading'}
        style={{
          background: buttonColor[formState],
          color: 'white',
          padding: '1rem 2rem',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          border: 'none',
          borderRadius: '2px',
          cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start',
          transition: 'background 0.2s',
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {buttonText[formState]}
      </button>
    </form>
  );
}
