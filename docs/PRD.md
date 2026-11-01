# ScrapClock: PRD, DRD & Architecture
**L'Oréal Sustainability Challenge 2026 · Manufacturing and Plant · Option 02 (Getting Quality Right First Time)**

> [!NOTE]
> All data in ScrapClock is simulated for a plastic injection moulding line. Results are never presented as real-plant data.

---

## 1. Product Requirements (PRD)

### 1.1 Problem Statement
In manufacturing plants (such as plastic injection moulding lines producing cosmetic packaging components), recurring process drifts (e.g. moisture rise in resin, mould temperature creep, injection pressure decay, cycle-time slowdown) lead to defective parts (short shots, flash, sink marks).
Defects are typically discovered late at final inspection, after material, electrical energy, and cooling water have already been wasted.
Operators see raw sensor values on HMIs but lack visibility into the compounding resource and financial costs of drift, often letting machines run out of tolerance.

### 1.2 Product Solution
**ScrapClock** is a quality-drift early-warning system that:
1. Detects process drifts early using statistical process control (EWMA & CUSUM) combined with machine learning (XGBoost predicting $P(\text{defect in next 20 cycles})$).
2. Explains root cause using SHAP top-3 feature attributions mapped to a 5M manufacturing category (Machine, Material, Method, Man, Milieu/Measurement) and provides a concrete Standard Operating Procedure (SOP) action.
3. Quantifies the continuous resource impact via a live **Resource Ledger** ($\text{kg material}$, $\text{kWh energy}$, $\text{litres cooling water}$ per minute of drift) and calculates cumulative avoided waste versus baseline inspection.

### 1.3 User Personas & Needs
- **Machine Operator**: Needs a glanceable status (Watch / Act / Stop) visible from 2 metres, one immediate recommended SOP action, and a simple 2-tap action logging button.
- **Quality Engineer**: Needs root-cause SHAP attribution, SPC control charts with control limits, drift onset timelines, and confirmation that interventions resolved the drift.
- **Plant Manager**: Needs high-level sustainability KPIs (kg/kWh/litres avoided), first-pass yield (FPY), defect PPM reduction, and false alarm rates per shift.

### 1.4 Functional Requirements (FR)
- **FR-1**: Seeded simulator streaming cycle-level data across 6 sensors (`barrelTemp`, `injPressure`, `mouldTemp`, `cycleTime`, `resinMoisture`, `partWeight`) with 4 injectable drift scenarios and ground-truth defect labels.
- **FR-2**: Node.js SPC engine computing EWMA and CUSUM charts per sensor.
- **FR-3**: Python FastAPI ML microservice predicting $P(\text{defect in next 20 cycles})$ with SHAP explanations.
- **FR-4**: Three comparison modes on identical seeded scenarios: Final-Inspection-Only, SPC-Only, SPC+ML.
- **FR-5**: Alert engine with Watch / Act / Stop tiers, cooldown periods, and de-duplication.
- **FR-6**: SHAP top-3 feature mapping to 5M category and actionable SOP steps.
- **FR-7**: Resource ledger calculating live waste rate and cumulative avoided resources.
- **FR-8**: Operator dashboard with glanceable andon, live sparklines, risk gauge, live cost counter, and single-action logging.
- **FR-9**: KPI dashboard tracking Defect PPM, Rework %, FPY, Time-to-Detect (TTD), False Alarms per shift, and Resources Avoided.
- **FR-10**: Editable assumptions database with source attribution and sensitivity range (low / base / high).

---

## 2. Design Requirements (DRD)

### 2.1 Design Principles
1. **Glanceable from 2 Metres**: Large, high-contrast andon block indicating operational state.
2. **Never Color-Only**: Color (green/amber/red) is always paired with distinct icons and explicit text status (`Normal`, `Watch`, `Act`, `Stop`).
3. **One Action per Alert**: Zero clutter or nested menus on the factory floor.
4. **Live Resource Cost Counter**: Dynamic visualization of compounding waste during active drift.
5. **Touch & Industrial Ready**: Minimum 48px touch targets, responsive dark/light modes.

### 2.2 Frontend Screens
1. **Live Line**: Operator home with andon status, live sensor sparklines with limits, risk gauge, cost counter, recommended SOP action, and "Action Taken" button.
2. **Alert Detail**: Drift timeline, SHAP top-3 bar chart, 5M tag, SOP steps, and outcome logging (`fixed`, `not fixed`, `false alarm`).
3. **Resource Ledger**: Cumulative savings (kg, kWh, L), interactive assumptions panel, and sensitivity slider.
4. **Mode Comparison**: Side-by-side run comparison of Final-Inspection vs. SPC-Only vs. SPC+ML.
5. **KPI Dashboard**: Shift-level KPIs, historical run analysis, and drill-down metrics.
6. **Scenario Control**: Scenario selection (drifts, onset, severity, seed), play/pause controls, and replay mode.

---

## 3. Architecture & Data Design

### 3.1 MongoDB Collections
- `runs`: Run metadata, scenario, seed, mode, execution timestamps, configuration snapshot.
- `cycles`: Time-series collection indexed on `(runId, cycleNo)`. Stores sensor readings, SPC states, ML predictions, and defect labels.
- `alerts`: Active and historical alerts indexed on `(runId, tier, status)`. Stores SHAP top-3, 5M category, SOP action, and operator logs.
- `ledgerEntries`: Resource consumption and avoided calculations per cycle.
- `kpis`: Aggregated run metrics (PPM, FPY, TTD, false alarm count, avoided resources).
- `assumptions`: Key-value registry of physical parameters marked with `isAssumption`, units, and literature sources.
- `sopActions`: Standard operating procedures mapped to sensor drift patterns and 5M categories.

### 3.2 Resource Ledger Equations
$$\text{waste per minute} = (\text{cycles/min}) \times P(\text{defect}) \times \text{part weight (kg)}$$
$$\text{energy (kWh)} = \text{kg wasted} \times \text{specific energy (kWh/kg)}$$
$$\text{cooling water (L)} = \text{kg wasted} \times \text{water per kg (L/kg)}$$
$$\text{avoided resources} = \text{baseline waste} - \text{ScrapClock waste}$$

