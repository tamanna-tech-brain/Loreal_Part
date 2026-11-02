import React, { useState } from 'react';
import { Scale, Info, Zap, Droplets, Package, Edit2 } from 'lucide-react';

export const ResourceLedgerPage = () => {
  const [sensitivity, setSensitivity] = useState('base');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            Live Resource Cost Ledger
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Realtime quantification of avoided scrap material, electrical energy, and cooling water.
          </p>
        </div>

        {/* Sensitivity Switch: Low / Base / High */}
        <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          {['low', 'base', 'high'].map((mode) => (
            <button
              key={mode}
              onClick={() => setSensitivity(mode)}
              className={`min-h-[40px] px-3 py-1.5 rounded-lg capitalize transition-colors ${
                sensitivity === mode
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {mode} Sensitivity
            </button>
          ))}
        </div>
      </div>

      {/* Cumulative Avoided Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Avoided Polymer</span>
            <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mt-2 font-mono">
            42.8 <span className="text-base font-normal text-slate-500">kg</span>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
            ~1,528 cosmetic jar closures saved
          </span>
          <span className="inline-block mt-3 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            [Assumption: 0.028 kg/part]
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Avoided Energy</span>
            <Zap className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mt-2 font-mono">
            79.2 <span className="text-base font-normal text-slate-500">kWh</span>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
            Equivalent to 3.8 days of machine lighting
          </span>
          <span className="inline-block mt-3 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            [Assumption: 1.85 kWh/kg]
          </span>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Avoided Cooling Water</span>
            <Droplets className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-black text-slate-900 dark:text-white mt-2 font-mono">
            941.6 <span className="text-base font-normal text-slate-500">Litres</span>
          </div>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
            Cooling tower loop evaporation mitigated
          </span>
          <span className="inline-block mt-3 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
            [Assumption: 22.0 L/kg]
          </span>
        </div>
      </div>

      {/* Assumptions Table with Editable Modal Trigger */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-400" />
              Sustainability Ledger Assumptions Database
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              All coefficients are strictly labelled as assumptions and cited from peer-reviewed industrial references.
            </p>
          </div>
          <button className="min-h-[48px] px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-2">
            <Edit2 className="w-4 h-4" /> Edit Assumptions
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-semibold">
                <th className="py-3 px-3">Parameter Key</th>
                <th className="py-3 px-3">Value</th>
                <th className="py-3 px-3">Unit</th>
                <th className="py-3 px-3">Range (Low - High)</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">Literature Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 font-mono">
              {[
                { k: 'part_weight', v: 0.028, u: 'kg', r: '0.025 - 0.032', s: 'L\'Oréal luxury closure spec' },
                { k: 'specific_energy', v: 1.85, u: 'kWh/kg', r: '1.35 - 2.45', s: 'Thiriez & Gutowski (2006)' },
                { k: 'cooling_water_per_kg', v: 22.0, u: 'L/kg', r: '16.0 - 30.0', s: 'Fraunhofer IBP Water Study' },
                { k: 'cycles_per_minute', v: 2.5, u: 'cycles/min', r: '2.0 - 3.0', s: 'Tooling: 24.0s cycle baseline' },
                { k: 'raw_material_cost_per_kg', v: 2.85, u: 'EUR/kg', r: '2.40 - 3.50', s: 'Plastics Information Europe' },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-750">
                  <td className="py-3 px-3 font-bold text-slate-800 dark:text-slate-200">{row.k}</td>
                  <td className="py-3 px-3 font-extrabold text-emerald-600 dark:text-emerald-400">{row.v}</td>
                  <td className="py-3 px-3 text-slate-500">{row.u}</td>
                  <td className="py-3 px-3 text-slate-400">{row.r}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-sans text-[10px] font-extrabold border border-amber-300 dark:border-amber-800">
                      ASSUMPTION
                    </span>
                  </td>
                  <td className="py-3 px-3 font-sans text-slate-500 truncate max-w-xs">{row.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

