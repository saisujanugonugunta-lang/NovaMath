'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains('dark')), []);
  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('novamath-theme', next ? 'dark' : 'light');
    setDark(next);
  };
  useEffect(() => {
    const saved = localStorage.getItem('novamath-theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);
  return <button className="iconbtn" aria-label="Toggle theme" onClick={toggle}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>;
}
