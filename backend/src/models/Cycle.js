import mongoose from 'mongoose';

const CycleSchema = new mongoose.Schema(
  {
    runId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Run',
      required: true,
      index: true,
    },
    cycleNo: {
      type: Number,
      required: true,
    },
    ts: {
      type: Date,
      default: Date.now,
    },
    sensors: {
      barrelTemp: { type: Number, required: true },
      injPressure: { type: Number, required: true },
      mouldTemp: { type: Number, required: true },
      cycleTime: { type: Number, required: true },
      resinMoisture: { type: Number, required: true },
      partWeight: { type: Number, required: true },
    },
    spc: {
      ewma: { type: mongoose.Schema.Types.Mixed, default: {} },
      cusum: { type: mongoose.Schema.Types.Mixed, default: {} },
    },
    mlProb: {
      type: Number,
      default: 0,
      min: 0,
      max: 1,
    },
    defectLabel: {
      type: String,
      enum: ['none', 'short_shot', 'flash', 'sink'],
      default: 'none',
    },
  },
  {
    timestamps: false,
  }
);

// Compound index on (runId, cycleNo) as strictly specified
CycleSchema.index({ runId: 1, cycleNo: 1 });

export const Cycle = mongoose.model('Cycle', CycleSchema);

