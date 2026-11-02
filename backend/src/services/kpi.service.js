import { Kpi } from '../models/Kpi.js';

export class KpiService {
  async getKpisByRunId(runId) {
    const kpi = await Kpi.findOne({ runId });
    if (!kpi) {
      // Default initial KPI baseline
      return {
        runId,
        mode: 'spc_ml',
        defectPpm: 0,
        reworkPct: 0,
        fpy: 100,
        timeToDetect: null,
        falseAlarmsPerShift: 0,
        resourcesAvoided: { kgMaterial: 0, kWh: 0, litresWater: 0 },
      };
    }
    return kpi;
  }

  async saveKpi(data) {
    return await Kpi.findOneAndUpdate(
      { runId: data.runId },
      { $set: data },
      { upsert: true, returnDocument: 'after' }
    );
  }
}

export const kpiService = new KpiService();

