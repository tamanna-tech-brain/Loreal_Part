import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  Scale,
  GitCompare,
  BarChart3,
  Sliders,
} from 'lucide-react';

const navItems = [
  { path: '/', label: 'Live Line', icon: Activity },
  { path: '/alerts', label: 'Alert Detail', icon: AlertTriangle },
  { path: '/ledger', label: 'Resource Ledger', icon: Scale },
  { path: '/compare', label: 'Mode Comparison', icon: GitCompare },
  { path: '/kpis', label: 'KPI Dashboard', icon: BarChart3 },
  { path: '/scenarios', label: 'Scenario Control', icon: Sliders },
];

export const Navigation = () => {
  return (
    <nav className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-2 sm:px-6 sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-2 scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3.5 sm:px-4 min-h-[48px] rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm dark:bg-emerald-600'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
