import { Server } from 'socket.io';

let io = null;

export const initSocket = (httpServer, clientUrl) => {
  io = new Server(httpServer, {
    cors: {
      origin: (origin, callback) => {
        // Allow all origins (reflection) for socket connections
        callback(null, true);
      },
      methods: ['GET', 'POST', 'PATCH', 'PUT'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`[Socket] Client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`[Socket] Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io has not been initialized yet');
  }
  return io;
};

export const emitCycleUpdate = (cycleData) => {
  if (io) {
    io.emit('cycle:update', cycleData);
  }
};

export const emitAlertNew = (alertData) => {
  if (io) {
    io.emit('alert:new', alertData);
  }
};

