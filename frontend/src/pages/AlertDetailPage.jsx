import React from 'react';
import { AlertTriangle, Clock, Layers, Check, X, HelpCircle } from 'lucide-react';

export const AlertDetailPage = () => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <AlertTriangle className="w-7 h-7 text-amber-500" />
          Alert Investigation & SOP Action
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          SHAP top-3 root cause attribution, 5M categorization, and 2-tap outcome logging.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 dark:border-slate-700 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                ACT TIER (PRE-EMPTIVE)
              </span>
              <span className="text-xs text-slate-500 font-mono">Alert ID: ALT-2026-0042</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
              High Resin Moisture Detected: Risk of Splay & Structural Pores
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-4 h-4" /> Detected at Cycle #142 (3m ago)
          </div>
        </div>

        {/* SHAP Bars Placeholder */}
        <div className="my-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            SHAP Top-3 Attribution (Root Cause Drivers)
          </h4>
          <div className="space-y-2">
            {[
              { feature: 'resinMoisture (+0.042% drift)', shap: '+0.54', pct: '85%' },
              { feature: 'barrelTemp Zone 3 (-3.2°C)', shap: '+0.22', pct: '45%' },
              { feature: 'injPressure Peak (-5.1 bar)', shap: '+0.11', pct: '25%' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-48 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                  {f.feature}
                </span>
                <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: f.pct }}
                  />
                </div>
                <span className="text-xs font-bold font-mono text-slate-700 dark:text-slate-300 w-12 text-right">
                  {f.shap}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5M Category & SOP Action Steps */}
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              5M: MATERIAL
            </span>
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              Resin Dryer Desiccant Inspection & Barrel Purge
            </span>
          </div>
          <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1.5 ml-2">
            <li>Pause cycle and switch press to standby heating mode.</li>
            <li>Inspect hopper dryer dew point sensor reading (ensure dew point &le; -40°C).</li>
            <li>Purge remaining damp resin from feed throat (approx 2 shots into container).</li>
            <li>Verify hopper lid seal and vacuum loader filter integrity.</li>
          </ol>
        </div>

        {/* Action Taken Buttons - 48px Touch Targets */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-3">
          <button className="min-h-[48px] px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm">
            <Check className="w-5 h-5" /> Action Applied: Fixed Drift
          </button>
          <button className="min-h-[48px] px-5 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> Flag False Alarm
          </button>
          <button className="min-h-[48px] px-5 py-2.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 dark:bg-rose-950 dark:hover:bg-rose-900 dark:text-rose-200 font-bold text-sm flex items-center gap-2">
            <X className="w-5 h-5" /> Not Fixed (Escalate to Stop)
          </button>
        </div>
      </div>
    </div>
  );
};
