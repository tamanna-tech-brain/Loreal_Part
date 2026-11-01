import React from 'react';
import { BarChart3, TrendingUp, AlertOctagon, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const KpiDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          Plant Quality & Sustainability KPI Dashboard
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Executive KPIs measuring defect suppression, shift false-alarm rates, and cumulative resource savings.
        </p>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Defect Rate', val: '1,900', unit: 'PPM', diff: '-86% vs baseline', good: true },
          { label: 'First-Pass Yield', val: '99.81', unit: '%', diff: '+1.23% FPY', good: true },
          { label: 'Rework Rate', val: '0.19', unit: '%', diff: '-1.23% rework', good: true },
          { label: 'Time-to-Detect', val: '6.2', unit: 'cycles', diff: '12 cyc earlier', good: true },
          { label: 'False Alarm Rate', val: '0.8', unit: '/shift', diff: 'Target < 2.0', good: true },
          { label: 'Avoided Material', val: '42.8', unit: 'kg', diff: 'Assumption: base', good: true },
        ].map((kpi, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block truncate">
              {kpi.label}
            </span>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-mono">
              {kpi.val} <span className="text-xs font-normal text-slate-500">{kpi.unit}</span>
            </div>
            <span className={`text-[11px] font-semibold mt-1 block ${kpi.good ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}`}>
              {kpi.diff}
            </span>
          </div>
        ))}
      </div>

      {/* Chart Section Placeholder */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          30-Run Simulation Experiment History
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Aggregated performance across 4 drift scenarios with random seeds (seeded for reproducibility).
        </p>
        <div className="h-64 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 text-sm">
          <BarChart3 className="w-12 h-12 mb-2 stroke-1 text-slate-400" />
          <span>Interactive experiment comparison charts will activate in Phase 7</span>
        </div>
      </div>
    </div>
  );
};
