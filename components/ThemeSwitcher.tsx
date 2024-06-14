// app/components/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <CiLight className="text-2xl" />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <CiDark className="text-2xl" />
        </button>
      )}
    </>
  );
}
