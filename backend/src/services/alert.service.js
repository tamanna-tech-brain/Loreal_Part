import { Alert } from '../models/Alert.js';

export class AlertService {
  async getAlertsByRunId(runId) {
    const filter = runId ? { runId } : {};
    return await Alert.find(filter).sort({ createdAt: -1 });
  }

  async updateAlertOutcome(id, { outcome, notes }) {
    const alert = await Alert.findById(id);
    if (!alert) return null;

    alert.outcome = outcome;
    if (notes !== undefined) alert.notes = notes;
    if (outcome === 'fixed' || outcome === 'false alarm') {
      alert.status = 'resolved';
      alert.resolvedAt = new Date();
    }
    return await alert.save();
  }

  async createAlert(payload) {
    const alert = new Alert(payload);
    return await alert.save();
  }
}

export const alertService = new AlertService();

