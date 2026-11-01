import { LedgerEntry } from '../models/LedgerEntry.js';

export class LedgerService {
  async getLedgerByRunId(runId) {
    const filter = runId ? { runId } : {};
    const entries = await LedgerEntry.find(filter).sort({ cycleNo: 1 });
    
    // Aggregate totals
    const totals = entries.reduce(
      (acc, entry) => {
        acc.totalKg += entry.kgMaterial || 0;
        acc.totalKWh += entry.kWh || 0;
        acc.totalLitres += entry.litresWater || 0;
        if (entry.avoidedFlag) {
          acc.avoidedKg += entry.kgMaterial || 0;
          acc.avoidedKWh += entry.kWh || 0;
          acc.avoidedLitres += entry.litresWater || 0;
        }
        return acc;
      },
      { totalKg: 0, totalKWh: 0, totalLitres: 0, avoidedKg: 0, avoidedKWh: 0, avoidedLitres: 0 }
    );

    return { totals, entries };
  }
}

export const ledgerService = new LedgerService();

