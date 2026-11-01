import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { LiveLinePage } from '../pages/LiveLinePage';
import { AlertDetailPage } from '../pages/AlertDetailPage';
import { ResourceLedgerPage } from '../pages/ResourceLedgerPage';
import { ModeComparisonPage } from '../pages/ModeComparisonPage';
import { KpiDashboardPage } from '../pages/KpiDashboardPage';
import { ScenarioControlPage } from '../pages/ScenarioControlPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LiveLinePage />} />
        <Route path="alerts" element={<AlertDetailPage />} />
        <Route path="alerts/:id" element={<AlertDetailPage />} />
        <Route path="ledger" element={<ResourceLedgerPage />} />
        <Route path="compare" element={<ModeComparisonPage />} />
        <Route path="kpis" element={<KpiDashboardPage />} />
        <Route path="scenarios" element={<ScenarioControlPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
