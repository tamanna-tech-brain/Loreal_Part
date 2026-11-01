import mongoose from 'mongoose';

const KpiSchema = new mongoose.Schema(
  {
    runId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Run',
      required: true,
      index: true,
    },
    mode: {
      type: String,
      required: true,
      enum: ['final_inspection_only', 'spc_only', 'spc_ml'],
    },
    defectPpm: {
      type: Number,
      required: true,
      default: 0,
    },
    reworkPct: {
      type: Number,
      required: true,
      default: 0,
    },
    fpy: {
      type: Number,
      required: true,
      default: 100,
    },
    timeToDetect: {
      type: Number,
      default: null, // cycles until first intervention/detection
    },
    falseAlarmsPerShift: {
      type: Number,
      default: 0,
    },
    resourcesAvoided: {
      kgMaterial: { type: Number, default: 0 },
      kWh: { type: Number, default: 0 },
      litresWater: { type: Number, default: 0 },
    },
    calculatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Kpi = mongoose.model('Kpi', KpiSchema);

