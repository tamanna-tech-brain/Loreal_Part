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
    <nav className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-4 min-h-[48px] rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm dark:bg-emerald-600'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
