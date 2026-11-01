import mongoose from 'mongoose';

const SopActionSchema = new mongoose.Schema(
  {
    featurePattern: {
      type: String,
      required: true,
      unique: true,
    },
    category5M: {
      type: String,
      required: true,
      enum: ['Machine', 'Material', 'Method', 'Man', 'Milieu/Measurement'],
    },
    title: {
      type: String,
      required: true,
    },
    steps: [
      {
        type: String,
        required: true,
      },
    ],
    expectedEffect: {
      type: String,
      required: true,
    },
    targetSensor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SopAction = mongoose.model('SopAction', SopActionSchema);

