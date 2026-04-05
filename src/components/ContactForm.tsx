import { useRef, useState } from 'preact/hooks';

type FormState = 'idle' | 'loading' | 'success' | 'error';

type FormValues = {
  nome: string;
  cognome: string;
  email: string;
  tipo_consulenza: string;
  messaggio: string;
};

const initialValues: FormValues = {
  nome: '',
  cognome: '',
  email: '',
  tipo_consulenza: '',
  messaggio: '',
};

const quickChoices = [
  'Prima consulenza gratuita',
  'Supporto psicologico individuale',
  'Consulenza di coppia',
  'Consulenza adolescenziale',
];

const inputBase: Record<string, string | number> = {
  background: '#ffffff',
  border: '1px solid rgba(44,44,42,0.12)',
  borderRadius: '16px',
  padding: '1rem 1.05rem',
  fontFamily: "'DM Sans', system-ui, sans-serif",
  fontSize: '0.94rem',
  color: '#2c2c2a',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s, background-color 0.2s',
};

const focusStyle = {
  borderColor: '#c8d8c9',
  boxShadow: '0 0 0 4px rgba(138,158,140,0.12)',
};

const blurStyle = {
  borderColor: 'rgba(44,44,42,0.16)',
  boxShadow: 'none',
};

const labelStyle: Record<string, string | number> = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(44,44,42,0.6)',
  marginBottom: '0.45rem',
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
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const formRef = useRef<HTMLFormElement>(null);

  const buttonText: Record<FormState, string> = {
    idle: 'Invia richiesta',
    loading: 'Invio in corso...',
    success: 'Messaggio inviato',
    error: 'Errore - Riprova',
  };

  const buttonColor: Record<FormState, string> = {
    idle: 'linear-gradient(135deg, #8a9e8c, #6e8370)',
    loading: 'linear-gradient(135deg, #8a9e8c, #6e8370)',
    success: 'linear-gradient(135deg, #6e8370, #526553)',
    error: 'linear-gradient(135deg, #c4534a, #a8443d)',
  };

  const statusText: Record<FormState, string> = {
    idle: 'Puoi selezionare una tipologia di consulenza per velocizzare la richiesta.',
    loading: 'Sto inviando il messaggio in modo sicuro.',
    success: 'Richiesta inviata correttamente. Riceverai una risposta il prima possibile.',
    error: "Si è verificato un problema durante l'invio. Controlla la connessione e riprova.",
  };

  const statusColor: Record<FormState, string> = {
    idle: '#5a5a56',
    loading: '#5a5a56',
    success: '#526553',
    error: '#a8443d',
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setFormValues((current) => ({
      ...current,
      [field]: value,
    }));

    if (formState !== 'idle') {
      setFormState('idle');
    }
  };

  const completedFields = Object.values(formValues).filter((value) => value.trim().length > 0).length;
  const completion = (completedFields / Object.keys(initialValues).length) * 100;
  const messageLength = formValues.messaggio.length;

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
        setFormValues(initialValues);
        form.reset();
        window.setTimeout(() => setFormState('idle'), 3200);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.35rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gap: '0.55rem',
          marginBottom: '0.3rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'center',
            fontSize: '0.76rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(44,44,42,0.56)',
          }}
        >
          <span>Compilazione guidata</span>
          <span>{completedFields}/5 campi</span>
        </div>
        <div
          style={{
            height: '6px',
            width: '100%',
            borderRadius: '999px',
            background: 'rgba(138,158,140,0.12)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${completion}%`,
              borderRadius: '999px',
              background: 'linear-gradient(90deg, #c4a882, #8a9e8c)',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      <div>
        <p style={labelStyle}>Selezione rapida</p>
        <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.6rem',
        }}
        >
          {quickChoices.map((choice) => {
            const isActive = formValues.tipo_consulenza === choice;

            return (
              <button
                key={choice}
                type="button"
                onClick={() => updateField('tipo_consulenza', choice)}
                style={{
                  border: isActive ? '1px solid rgba(138,158,140,0.45)' : '1px solid rgba(44,44,42,0.12)',
                  background: isActive ? 'rgba(200,216,201,0.42)' : 'rgba(255,255,255,0.8)',
                  color: '#2c2c2a',
                  borderRadius: '999px',
                  padding: '0.72rem 1rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background-color 0.2s, transform 0.2s',
                }}
              >
                {choice}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'var(--name-cols, 1fr)',
          gap: '1rem',
        }}
      >
        <style>{`@media (min-width: 769px) { form { --name-cols: 1fr 1fr; } }`}</style>

        <div>
          <label htmlFor="contact-nome" style={labelStyle}>Nome</label>
          <input
            id="contact-nome"
            type="text"
            name="nome"
            required
            placeholder="Il tuo nome"
            value={formValues.nome}
            style={{ ...inputBase }}
            onInput={(e) => updateField('nome', (e.currentTarget as HTMLInputElement).value)}
            onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
            onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
          />
        </div>

        <div>
          <label htmlFor="contact-cognome" style={labelStyle}>Cognome</label>
          <input
            id="contact-cognome"
            type="text"
            name="cognome"
            required
            placeholder="Il tuo cognome"
            value={formValues.cognome}
            style={{ ...inputBase }}
            onInput={(e) => updateField('cognome', (e.currentTarget as HTMLInputElement).value)}
            onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
            onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          placeholder="la.tua@email.it"
          value={formValues.email}
          style={{ ...inputBase }}
          onInput={(e) => updateField('email', (e.currentTarget as HTMLInputElement).value)}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        />
      </div>

      <div>
        <label htmlFor="contact-service" style={labelStyle}>Tipo di consulenza</label>
        <select
          id="contact-service"
          name="tipo_consulenza"
          required
          value={formValues.tipo_consulenza}
          style={{ ...inputBase, appearance: 'none' as const }}
          onChange={(e) => updateField('tipo_consulenza', (e.currentTarget as HTMLSelectElement).value)}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        >
          <option value="" disabled>
            Seleziona un servizio
          </option>
          <option value="Prima consulenza gratuita">
            Prima consulenza gratuita
          </option>
          <option value="Supporto psicologico individuale">
            Supporto psicologico individuale
          </option>
          <option value="Consulenza di coppia">
            Consulenza di coppia
          </option>
          <option value="Consulenza adolescenziale">
            Consulenza adolescenziale
          </option>
          <option value="Gestione dell'ansia">
            Gestione dell'ansia
          </option>
          <option value="Sostegno alla genitorialità">
            Sostegno alla genitorialità
          </option>
          <option value="Supporto nelle transizioni di vita">
            Supporto nelle transizioni di vita
          </option>
          <option value="Altro">
            Altro
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Messaggio</label>
        <textarea
          id="contact-message"
          name="messaggio"
          required
          rows={5}
          maxLength={700}
          placeholder="Descrivi brevemente la tua richiesta..."
          value={formValues.messaggio}
          style={{
            ...inputBase,
            resize: 'vertical',
            minHeight: '130px',
          }}
          onInput={(e) => updateField('messaggio', (e.currentTarget as HTMLTextAreaElement).value)}
          onFocus={(e) => applyFocus(e.currentTarget as HTMLElement)}
          onBlur={(e) => applyBlur(e.currentTarget as HTMLElement)}
        />
        <div
          style={{
            marginTop: '0.55rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            alignItems: 'center',
            fontSize: '0.78rem',
            color: 'rgba(44,44,42,0.5)',
          }}
        >
          <span>Più dettagli inserisci, più precisa potrà essere la risposta.</span>
          <span>{messageLength}/700</span>
        </div>
      </div>

      <style>{`
        form input::placeholder,
        form textarea::placeholder {
          color: rgba(44,44,42,0.42);
        }
        form select option {
          background: #ffffff;
          color: #2c2c2a;
        }
        @media (min-width: 769px) {
          form button[type="submit"] {
            width: auto;
            min-width: 240px;
          }
        }
      `}</style>

      <button
        type="submit"
        disabled={formState === 'loading'}
        style={{
          background: buttonColor[formState],
          color: 'white',
          padding: '1.05rem 2rem',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          border: 'none',
          borderRadius: '999px',
          cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
          width: '100%',
          alignSelf: 'stretch',
          transition: 'transform 0.2s, box-shadow 0.2s',
          fontFamily: "'DM Sans', system-ui, sans-serif",
          boxShadow: '0 14px 26px rgba(110,131,112,0.2)',
        }}
      >
        {buttonText[formState]}
      </button>

      <p
        style={{
          margin: 0,
          fontSize: '0.83rem',
          lineHeight: 1.7,
          color: statusColor[formState],
        }}
      >
        {statusText[formState]}
      </p>
    </form>
  );
}
