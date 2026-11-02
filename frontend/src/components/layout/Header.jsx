import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getHealthStatus } from '../../api/health.api';
import { Sun, Moon, Activity, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Header = ({ isSocketConnected }) => {
  const { theme, toggleTheme } = useTheme();
  const [health, setHealth] = useState(null);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        const res = await getHealthStatus();
        if (mounted) setHealth(res);
      } catch {
        if (mounted) setHealth(null);
      }
    };
    check();
    const interval = setInterval(check, 10000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-3 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        {/* Brand & Context */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md shrink-0">
              SC
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  ScrapClock
                </h1>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 shrink-0" />
                  SIMULATED DATA ONLY
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                L'Oréal Sustainability Challenge 2026 · Option 02: Getting Quality Right First Time
              </p>
            </div>
          </div>

          {/* Mobile Theme Toggle Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Live Status Indicators & Desktop Controls */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-3">
          {/* Database & AI Health Indicator */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 w-full sm:w-auto justify-around sm:justify-start">
            {health?.database?.connected ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Mongo OK
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Mongo Offline
              </span>
            )}
            <span className="text-slate-300 dark:text-slate-600">|</span>
            {health?.aiService?.connected ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                AI OK
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                AI Offline
              </span>
            )}
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className={`flex items-center gap-1.5 font-bold ${isSocketConnected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
              <Activity className="w-4 h-4 shrink-0" />
              {isSocketConnected ? 'Socket Live' : 'Standby'}
            </span>
          </div>

          {/* Desktop Theme Toggle - min 48px touch target */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="hidden sm:flex w-12 h-12 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none shrink-0"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
