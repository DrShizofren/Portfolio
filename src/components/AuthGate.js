'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

let authed = null;

export function setAuthed(session) {
  authed = session;
}

export function getAuthed() {
  return authed;
}

export function clearAuthed() {
  authed = null;
}

export default function AuthGate({ children }) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (authed) {
      setReady(true);
    } else {
      router.replace('/login');
    }
  }, [router]);

  if (!ready) {
    return (
      <div className="auth-gate-loading" aria-hidden="true">
        <span className="auth-gate-logo">AJ<span>.</span></span>
      </div>
    );
  }

  return children;
}
