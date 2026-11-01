import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getHealthStatus } from '../../api/health.api';
import { Sun, Moon, Activity, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Header = ({ isSocketConnected }) => {
  const { theme, toggleTheme } = useTheme();
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        const res = await getHealthStatus();
        if (mounted) {
          setHealth(res);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setHealth(null);
          setLoading(false);
        }
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
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand & Context */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-md">
            SC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                ScrapClock
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" />
                SIMULATED DATA ONLY
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              L'Oréal Sustainability Challenge 2026 · Option 02: Getting Quality Right First Time
            </p>
          </div>
        </div>

        {/* Live Status Indicators & Controls */}
        <div className="flex items-center gap-3">
          {/* Database & AI Health Indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {health?.database?.connected ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Mongo OK
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-semibold">
                <AlertCircle className="w-4 h-4" />
                Mongo Err
              </span>
            )}
            <span className="text-slate-400">|</span>
            {health?.aiService?.connected ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                AI OK
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold">
                <AlertCircle className="w-4 h-4" />
                AI Offline
              </span>
            )}
            <span className="text-slate-400">|</span>
            <span className={`flex items-center gap-1.5 font-semibold ${isSocketConnected ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
              <Activity className="w-4 h-4" />
              {isSocketConnected ? 'Live' : 'Standby'}
            </span>
          </div>

          {/* Theme Toggle - min 48px touch target */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
