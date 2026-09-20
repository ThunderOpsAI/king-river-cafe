'use client';

import { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';

const themes = [
  { id: 'rustic', name: 'Rustic (Default)', color: '#b45309' },
  { id: 'midnight', name: 'Midnight', color: '#171717' },
  { id: 'sage', name: 'Sage & Earth', color: '#65795c' },
  { id: 'terracotta', name: 'Terracotta', color: '#c25934' },
  { id: 'minimal', name: 'Minimalist', color: '#000000' },
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('rustic');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if theme was previously saved
    const saved = localStorage.getItem('app-theme') || 'rustic';
    setActiveTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem('app-theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <div className={`absolute bottom-full right-0 mb-4 bg-white border border-stone-200 shadow-2xl rounded-2xl p-3 w-48 transition-all origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-3 px-2 pt-1">Select Theme</h4>
        <div className="flex flex-col gap-1">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${activeTheme === t.id ? 'bg-stone-100 text-stone-900' : 'text-stone-600 hover:bg-stone-50'}`}
            >
              <span className="w-4 h-4 rounded-full border border-stone-300 shadow-sm" style={{ backgroundColor: t.color }} />
              {t.name}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-stone-900 hover:bg-stone-800 text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Toggle theme switcher"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
}
