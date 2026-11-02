import React from 'react';
import { GitCompare, Award } from 'lucide-react';

export const ModeComparisonPage = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <GitCompare className="w-7 h-7 text-indigo-500" />
          Three-Mode Comparison (Identical Seeded Scenarios)
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Comparing Final-Inspection-Only (Baseline) vs. SPC-Only vs. ScrapClock (SPC + XGBoost ML).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mode 1 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-400">Baseline Mode</span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">Final Inspection Only</h3>
            <p className="text-xs text-slate-500 mt-1">
              Catches defects post-moulding at quality gate. No early warning.
            </p>
            <div className="mt-5 space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Defect Rate</span>
                <span className="font-bold text-rose-500">14,200 PPM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Time-to-Detect</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">45 cycles (post-run)</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">First-Pass Yield</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">98.58 %</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-500 font-sans text-xs">Wasted Material</span>
                <span className="font-bold text-rose-500">54.2 kg</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700/40 text-[11px] text-slate-500 text-center font-sans">
            Status Quo Factory Standard
          </div>
        </div>

        {/* Mode 2 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-blue-400/50 dark:border-blue-700 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-blue-500">Statistical Baseline</span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">SPC-Only (EWMA + CUSUM)</h3>
            <p className="text-xs text-slate-500 mt-1">
              Univariate statistical control limits on raw individual sensors.
            </p>
            <div className="mt-5 space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Defect Rate</span>
                <span className="font-bold text-amber-500">5,800 PPM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Time-to-Detect</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">18 cycles</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">First-Pass Yield</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">99.42 %</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-500 font-sans text-xs">Material Avoided</span>
                <span className="font-bold text-blue-500">22.4 kg avoided</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-[11px] text-blue-700 dark:text-blue-300 text-center font-sans font-semibold">
            Good for single-parameter sudden shifts
          </div>
        </div>

        {/* Mode 3 */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500 shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">
            ScrapClock
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Proposed Solution
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              SPC + ML (XGBoost + SHAP)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Multivariate window features + P(defect in next 20 cycles) early prediction.
            </p>
            <div className="mt-5 space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Defect Rate</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">1,900 PPM</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">Time-to-Detect</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">6 cycles</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 font-sans text-xs">First-Pass Yield</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">99.81 %</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-500 font-sans text-xs">Material Avoided</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">42.8 kg avoided</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-[11px] text-emerald-700 dark:text-emerald-300 text-center font-sans font-bold flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" /> 12 cycles earlier than SPC-only
          </div>
        </div>
      </div>
    </div>
  );
};

