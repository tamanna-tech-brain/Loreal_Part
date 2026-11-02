import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { useSocket } from '../../hooks/useSocket';

export const AppLayout = () => {
  const { isConnected, latestCycle, latestAlert } = useSocket();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      <Header isSocketConnected={isConnected} />
      <Navigation />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <Outlet context={{ isConnected, latestCycle, latestAlert }} />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 text-xs py-3 px-4 text-center">
        ScrapClock Prototype · Simulated Plastic Injection Moulding Line (6 Sensors) · L'Oréal Sustainability Challenge 2026
      </footer>
    </div>
  );
};

