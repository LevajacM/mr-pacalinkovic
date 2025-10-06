'use client';

import { useEffect } from 'react';

export default function RedirectClient() {
  useEffect(() => {
    window.location.href = '/meni/sve';
  }, []);

  return <div style={{ display: 'none' }}>Preusmeravanje...</div>;
}
