import { useEffect, useState, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';

export const useSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [latestCycle, setLatestCycle] = useState(null);
  const [latestAlert, setLatestAlert] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    // Connect to backend via proxy or current host
    const socket = io({
      path: '/socket.io',
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('[Socket] Connected to server, ID:', socket.id);
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('[Socket] Disconnected from server');
      setIsConnected(false);
    });

    socket.on('cycle:update', (cycleData) => {
      setLatestCycle(cycleData);
    });

    socket.on('alert:new', (alertData) => {
      setLatestAlert(alertData);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const emitEvent = useCallback((event, data) => {
    if (socketRef.current) {
      socketRef.current.emit(event, data);
    }
  }, []);

  return {
    isConnected,
    latestCycle,
    latestAlert,
    emitEvent,
  };
};
