import { Run } from '../models/Run.js';
import { Cycle } from '../models/Cycle.js';

export class RunService {
  async createRun(payload) {
    const run = new Run({
      scenario: payload.scenario || 'baseline',
      seed: payload.seed ?? 42,
      mode: payload.mode || 'spc_ml',
      status: 'running',
      configSnapshot: payload.config || {},
    });
    return await run.save();
  }

  async getRunById(id) {
    return await Run.findById(id);
  }

  async pauseRun(id) {
    const run = await Run.findById(id);
    if (!run) return null;
    run.status = run.status === 'paused' ? 'running' : 'paused';
    return await run.save();
  }

  async listRuns() {
    return await Run.find().sort({ createdAt: -1 }).limit(20);
  }

  async getCyclesByRunId(runId, limit = 100) {
    return await Cycle.find({ runId }).sort({ cycleNo: -1 }).limit(limit);
  }
}

export const runService = new RunService();

