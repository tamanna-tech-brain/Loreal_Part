import mongoose from 'mongoose';

const LedgerEntrySchema = new mongoose.Schema(
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
    kgMaterial: {
      type: Number,
      required: true,
      default: 0,
    },
    kWh: {
      type: Number,
      required: true,
      default: 0,
    },
    litresWater: {
      type: Number,
      required: true,
      default: 0,
    },
    avoidedFlag: {
      type: Boolean,
      default: false,
    },
    wasteRateKgPerMin: {
      type: Number,
      default: 0,
    },
    ts: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

LedgerEntrySchema.index({ runId: 1, cycleNo: 1 });

export const LedgerEntry = mongoose.model('LedgerEntry', LedgerEntrySchema);

