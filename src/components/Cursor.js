'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 6}px,${e.clientY - 6}px,0)`;
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return <div id="cursor" />;
}
