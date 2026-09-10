'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('novamath-theme');
    const isDark = saved === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('novamath-theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return <button className="iconbtn" aria-label="Toggle theme" onClick={toggle}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>;
}
