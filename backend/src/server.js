import http from 'http';
import app from './app.js';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';
import { initSocket } from './sockets/socket.js';
import { seedDatabase } from './seed/index.js';

const httpServer = http.createServer(app);

// Initialize Socket.io
initSocket(httpServer, config.clientUrl);

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Auto-seed assumptions and SOP actions if needed
    try {
      await seedDatabase();
    } catch (seedErr) {
      console.warn('[Seed Warning]', seedErr.message);
    }

    httpServer.listen(config.port, '0.0.0.0', () => {
      console.log(`[ScrapClock Backend] Server running on port ${config.port} (${config.env})`);
      console.log(`[ScrapClock Backend] Health check: http://localhost:${config.port}/api/health`);
    });
  } catch (err) {
    console.error('[ScrapClock Backend Startup Error]', err);
    process.exit(1);
  }
};

startServer();

export { httpServer, app };
