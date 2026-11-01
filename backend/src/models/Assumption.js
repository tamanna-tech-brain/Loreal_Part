import mongoose from 'mongoose';

const AssumptionSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    isAssumption: {
      type: Boolean,
      required: true,
      default: true,
    },
    low: {
      type: Number,
      default: 0,
    },
    high: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Assumption = mongoose.model('Assumption', AssumptionSchema);

