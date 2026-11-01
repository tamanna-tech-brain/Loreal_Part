import mongoose from 'mongoose';
import { config } from './env.js';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return mongoose.connection;

  const primaryUri = config.mongoUri;
  const atlasFallback = 'mongodb+srv://dev_tamanna:tannu123@cluster0.d1xtk5s.mongodb.net/scrapclock';

  try {
    console.log(`[DB] Attempting MongoDB connection: ${primaryUri.replace(/:[^:@]+@/, ':***@')}`);
    const conn = await mongoose.connect(primaryUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`[DB] Connected to primary MongoDB host: ${conn.connection.host}`);
    return conn;
  } catch (primaryErr) {
    console.warn(`[DB] Primary connection failed (${primaryErr.message}). Attempting fallback database...`);
    try {
      const conn = await mongoose.connect(atlasFallback, {
        serverSelectionTimeoutMS: 5000,
      });
      isConnected = true;
      console.log(`[DB] Connected to fallback MongoDB host: ${conn.connection.host}`);
      return conn;
    } catch (fallbackErr) {
      console.error('[DB] All MongoDB connections failed:', fallbackErr.message);
      throw fallbackErr;
    }
  }
};

export const getDbStatus = () => {
  const state = mongoose.connection.readyState;
  const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };
  return {
    connected: state === 1,
    state: states[state] || 'unknown',
    host: mongoose.connection.host || null,
    name: mongoose.connection.name || null,
  };
};

