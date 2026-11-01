import React, { useState } from 'react';
import { Sliders, Play, Pause, RotateCcw, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ScenarioControlPage = () => {
  const [scenario, setScenario] = useState('moisture_rise');
  const [seed, setSeed] = useState(42);
  const [mode, setMode] = useState('spc_ml');
  const [severity, setSeverity] = useState(1.0);
  const [onsetCycle, setOnsetCycle] = useState(30);

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Sliders className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          Simulation Scenario Control & Replay
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Inject controlled process drifts into the 6-sensor injection moulding digital twin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Run Parameters</h3>

          {/* Scenario Selection */}
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-2">
              Process Drift Scenario
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'moisture_rise', label: '1. Resin Moisture Rise', defect: 'Splay / Brittleness' },
                { id: 'mould_temp_creep', label: '2. Mould Temp Creep', defect: 'Sink Marks' },
                { id: 'pressure_decay', label: '3. Injection Pressure Decay', defect: 'Short Shot' },
                { id: 'cycle_time_slowdown', label: '4. Cycle Time Slowdown', defect: 'Flash / Degradation' },
                { id: 'clean_shift', label: '5. Clean Shift (No Drift)', defect: 'False Alarm Validation' },
              ].map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setScenario(sc.id)}
                  className={`p-3 rounded-xl border text-left min-h-[48px] transition-all ${
                    scenario === sc.id
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 font-bold'
                      : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-sm">{sc.label}</div>
                  <div className="text-[11px] text-slate-400 font-normal">Primary Risk: {sc.defect}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Mode Selection */}
          <div>
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-2">
              Operational Detection Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'final_inspection_only', label: 'Final Inspection' },
                { id: 'spc_only', label: 'SPC-Only' },
                { id: 'spc_ml', label: 'SPC + ML (ScrapClock)' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold min-h-[48px] transition-all ${
                    mode === m.id
                      ? 'border-emerald-500 bg-emerald-600 text-white'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-750'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Seed and Onset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-1">
                Random Seed (Reproducibility)
              </label>
              <input
                type="number"
                value={seed}
                onChange={(e) => setSeed(parseInt(e.target.value) || 42)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-1">
                Drift Onset Cycle
              </label>
              <input
                type="number"
                value={onsetCycle}
                onChange={(e) => setOnsetCycle(parseInt(e.target.value) || 30)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono text-sm"
              />
            </div>
          </div>

          {/* Action Buttons - 48px Touch Targets */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-3">
            <button className="min-h-[48px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-sm">
              <Play className="w-5 h-5 fill-current" /> Launch Simulated Run
            </button>
            <button className="min-h-[48px] px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center gap-2">
              <Pause className="w-5 h-5" /> Pause
            </button>
            <button className="min-h-[48px] px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700">
              <RotateCcw className="w-5 h-5" /> Replay Seeded Run
            </button>
          </div>
        </div>

        {/* Info Column */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Competition Integrity
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All data in ScrapClock is synthetically generated via a deterministic, seeded pseudo-random engine (`seedrandom`).
          </p>
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 space-y-1">
            <span className="font-bold block">Important Rule:</span>
            <span>Never present simulated outputs as real-plant data during judging.</span>
          </div>
          <div className="text-xs text-slate-500 space-y-1">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Phase 1 Status:</span>
            <p>UI scaffolded with full router, theme support, and typed API clients. Simulator engine will activate in Phase 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
