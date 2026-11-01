# ScrapClock
**Quality-Drift Early-Warning System with a Live Resource-Cost Ledger for Plastic Injection Moulding**

> Prototype for **L'Oréal Sustainability Challenge 2026**  
> *Manufacturing Track · Option 02: Getting Quality Right First Time*  
> **Notice**: All sensor data and cycles are synthetically generated for a digital twin injection moulding line. Results are never presented as real-plant data.

---

## 1. Executive Overview
In plastic injection moulding (e.g. cosmetic packaging, luxury jar caps, mascara tubes), recurring process drifts—such as resin moisture spikes, mould temperature creep, hydraulic pressure decay, or ejector cycle-time slowdowns—yield defective components (splay, short shots, sink marks, flash).
Conventionally, defects are only caught at final quality inspection gates after significant polymer resin, electrical energy, and cooling water have already been irretrievably wasted.

**ScrapClock** provides:
1. **Early Statistical & Machine Learning Detection**: Combines EWMA & CUSUM statistical process control with an XGBoost classifier predicting $P(\text{defect in next 20 cycles})$.
2. **Explainable AI Root Cause Attribution**: Explains drift via SHAP top-3 attribution mapped to a 5M manufacturing category (Machine, Material, Method, Man, Milieu) and triggers specific Standard Operating Procedure (SOP) action cards.
3. **Live Resource-Cost Ledger**: Continuously tallies wasted and avoided kilograms of resin, kilowatt-hours of electrical energy, and litres of cooling water using peer-reviewed industrial assumptions.
4. **Three-Mode Rigorous Comparison**: Benchmarks Final Inspection vs. SPC-Only vs. ScrapClock (SPC+ML) on identical seeded runs.

---

## 2. Monorepo Architecture
```
scrapclock/
  backend/    Node + Express, plain JavaScript (ESM)
    src/
      config/       Environment and MongoDB connection
      models/       7 Mongoose models: Run, Cycle, Alert, LedgerEntry, Kpi, Assumption, SopAction
      routes/       REST endpoints mounted under /api
      controllers/  Thin HTTP controllers (never import Mongoose models)
      validators/   Zod schemas and validation middleware
      middlewares/  Global error handler and security headers
      services/     Core business logic, SPC, Alert engine, Ledger, KPI, ML client
      sockets/      Socket.io for realtime cycle:update and alert:new streaming
      seed/         Idempotent assumptions and 5M SOP actions seeders
    tests/          Vitest unit tests
  frontend/   React (Vite) + Tailwind CSS + Recharts
    src/
      api/          Axios client and typed endpoint services (no fetch in components)
      hooks/        useSocket for WebSocket streaming
      context/      ThemeContext (Dark / Light mode)
      components/   Layout, Andon status block, sparklines, common UI
      pages/        6 Core factory floor & engineering views:
                    - Live Line (Operator home)
                    - Alert Detail (SHAP bars & SOP action)
                    - Resource Ledger (Avoided waste & assumptions)
                    - Mode Comparison (3-mode benchmark)
                    - KPI Dashboard (Plant sustainability metrics)
                    - Scenario Control (Drift injection & replay)
  ai/         Python FastAPI microservice
    app/
      core/         Pydantic settings
      schemas/      Pydantic request/response models
      api/routes/   /health, /predict, /train
      services/     Feature engineering & ML pipeline
      ml/           XGBoost model training and SHAP explainer
    tests/          Pytest test suite
  docs/       PRD, DRD, assumptions database, experimental benchmark results
  scripts/    Automation scripts (demo.sh, run_experiments.js)
```

---

## 3. Quick Start (Development)

### Prerequisites
- Node.js >= 20
- Python >= 3.10
- MongoDB (local or Atlas URI configured in `backend/.env`)

### 1. AI Service
```bash
cd ai
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --port 8000
```
Health endpoint: `http://localhost:8000/health`

### 2. Backend Service
```bash
cd backend
npm install
npm run dev
```
Health check: `http://localhost:5000/api/health`

### 3. Frontend Web App
```bash
cd frontend
npm install
npm run dev
```
Open in browser: `http://localhost:5173`

---

## 4. Phase 1 Acceptance Verification
- [x] All 3 micro-apps start with their respective dev commands.
- [x] `/api/health` reports MongoDB `connected: true` and healthy status.
- [x] Backend reaches AI service `/health` via `ml.client.js` with `connected: true`.
- [x] All 7 Mongoose schemas created with strict indexing:
  - `cycles` on `(runId, cycleNo)`
  - `alerts` on `(runId, tier, status)`
- [x] Assumptions and SOP Actions seed scripts executed cleanly.
- [x] Frontend 6-page router + Dark/Light theme toggle operational with 48px touch targets.

# Loreal_Part
