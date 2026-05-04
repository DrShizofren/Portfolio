'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cursor from '@/components/Cursor';
import { setAuthed } from '@/components/AuthGate';

const ACCOUNTS = {
  visitor: { role: 'Visitor' },
};

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fillAccount = (name) => {
    setUsername(name);
    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    const key = username.trim().toLowerCase();
    const account = ACCOUNTS[key];
    if (!account) {
      setError('Invalid username. Use the Visitor account.');
      return;
    }
    setSubmitting(true);
    setAuthed({ user: key, role: account.role, at: Date.now() });
    router.push('/');
  };

  return (
    <>
      <Cursor />
      <main className="login-shell">
        <div className="login-grid">
          <section className="login-aside" aria-hidden="true">
            <div className="login-logo">AJ<span>.</span></div>
            <p className="login-aside-label">// secure-access</p>
            <h1 className="login-aside-title">
              Restricted
              <span>Area</span>
            </h1>
            <p className="login-aside-desc">
              Click an account to fill the form, then press <em>Enter →</em>.
            </p>

            <ul className="login-accounts">
              {Object.entries(ACCOUNTS).map(([name, { role }]) => (
                <li key={name}>
                  <button
                    type="button"
                    className="login-account"
                    onClick={() => fillAccount(name)}
                  >
                    <span className="login-account-row">
                      <span className="login-account-role">{role}</span>
                      <span className="login-account-fill">click to fill</span>
                    </span>
                    <span className="login-account-creds">
                      <span className="login-account-key">user</span>
                      <span className="login-account-val">{name}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p className="login-aside-foot">
              <span className="live-dot" /> session encrypted in this tab
            </p>
          </section>

          <section className="login-card">
            <p className="section-label">// login</p>
            <h2 className="login-title">
              Log<span>In</span>
            </h2>
            <p className="login-sub">Enter your username to continue.</p>

            <form className="login-form" onSubmit={onSubmit} noValidate>
              <label className="login-field">
                <span className="login-field-label">Username</span>
                <input
                  type="text"
                  autoComplete="username"
                  spellCheck={false}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="visitor"
                  className="login-input"
                  required
                />
              </label>

              {error && (
                <p className="login-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary login-submit"
                disabled={submitting}
              >
                {submitting ? 'Entering…' : 'Enter →'}
              </button>
            </form>

            <p className="login-foot">
              <span>SECURED</span> ·{' '}
              <span>{new Date().getFullYear()} AJ</span>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
