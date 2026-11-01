import mongoose from 'mongoose';

const RunSchema = new mongoose.Schema(
  {
    scenario: {
      type: String,
      required: true,
      enum: ['baseline', 'moisture_rise', 'mould_temp_creep', 'pressure_decay', 'cycle_time_slowdown', 'clean_shift'],
    },
    seed: {
      type: Number,
      required: true,
      default: 42,
    },
    mode: {
      type: String,
      required: true,
      enum: ['final_inspection_only', 'spc_only', 'spc_ml'],
      default: 'spc_ml',
    },
    status: {
      type: String,
      enum: ['running', 'paused', 'completed', 'stopped'],
      default: 'running',
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    },
    configSnapshot: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export const Run = mongoose.model('Run', RunSchema);

