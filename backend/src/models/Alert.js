import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema(
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
    tier: {
      type: String,
      enum: ['Watch', 'Act', 'Stop'],
      required: true,
    },
    topFeatures: [
      {
        name: { type: String, required: true },
        shap: { type: Number, required: true },
        direction: { type: String, enum: ['high', 'low', 'normal'], default: 'normal' },
      },
    ],
    category5M: {
      type: String,
      enum: ['Machine', 'Material', 'Method', 'Man', 'Milieu/Measurement', 'Unassigned'],
      default: 'Unassigned',
    },
    sopAction: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    status: {
      type: String,
      enum: ['active', 'acknowledged', 'resolved', 'suppressed'],
      default: 'active',
    },
    outcome: {
      type: String,
      enum: ['unresolved', 'fixed', 'not fixed', 'false alarm'],
      default: 'unresolved',
    },
    resolvedAt: {
      type: Date,
      default: null,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Compound index on (runId, tier, status) as strictly specified
AlertSchema.index({ runId: 1, tier: 1, status: 1 });

export const Alert = mongoose.model('Alert', AlertSchema);

