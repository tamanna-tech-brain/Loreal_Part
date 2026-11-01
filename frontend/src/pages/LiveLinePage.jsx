import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap, Droplets, Package } from 'lucide-react';

export const LiveLinePage = () => {
  const { isConnected, latestCycle, latestAlert } = useOutletContext();

  return (
    <div className="space-y-6">
      {/* Top Banner / Andon Block - Glanceable from 2m */}
      <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-black px-2.5 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                LINE STATUS
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Moulding Cell 02 (PP Luxury Closures)
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900 dark:text-emerald-100 mt-1">
              NORMAL OPERATING ZONE
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Process parameters within SPC limits · No defect drift detected in next 20 cycles
            </p>
          </div>
        </div>

        {/* Live Drift Cost Counter */}
        <div className="bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl min-w-[220px] text-right">
          <span className="text-xs uppercase font-bold text-slate-500">Live Waste Rate</span>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            0.00 <span className="text-sm font-normal text-slate-500">kg/min</span>
          </div>
          <span className="text-[11px] text-slate-400">0.00 kWh/min · 0.00 L/min</span>
        </div>
      </div>

      {/* Grid of Key Sensor Sparklines Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Barrel Temp Zone 3', val: '220.0 °C', limit: '216 - 224 °C', status: 'In Control' },
          { name: 'Injection Pressure', val: '100.2 bar', limit: '95 - 105 bar', status: 'In Control' },
          { name: 'Mould Temp (Cavity)', val: '45.1 °C', limit: '42 - 48 °C', status: 'In Control' },
          { name: 'Cycle Time', val: '24.05 s', limit: '23.2 - 24.8 s', status: 'In Control' },
          { name: 'Resin Moisture', val: '0.018 %', limit: '< 0.030 %', status: 'In Control' },
          { name: 'Part Weight', val: '28.02 g', limit: '27.5 - 28.5 g', status: 'In Control' },
        ].map((sensor, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {sensor.name}
                </p>
                <p className="text-2xl font-black text-slate-900 dark:text-white mt-1 font-mono">
                  {sensor.val}
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                {sensor.status}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2">Limits: {sensor.limit}</p>
            <div className="h-10 mt-2 bg-slate-100 dark:bg-slate-700/50 rounded flex items-center justify-center text-xs text-slate-400 italic">
              Live sparkline stream will activate in Phase 2
            </div>
          </div>
        ))}
      </div>

      {/* Recommended SOP Action Card */}
      <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Recommended SOP Action
          </span>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            Line Operating Optimally — Maintain Standard Inspection Cadence
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No action required. Next scheduled cavity sampling in 45 cycles.
          </p>
        </div>
        <button
          disabled
          className="min-h-[48px] px-6 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-400 font-bold cursor-not-allowed text-sm"
        >
          Action Logged (Standby)
        </button>
      </div>
    </div>
  );
};
