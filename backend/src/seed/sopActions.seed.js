export const initialSopActions = [
  {
    featurePattern: 'resinMoisture_high',
    category5M: 'Material',
    title: 'Resin Dryer Desiccant Inspection & Barrel Purge',
    targetSensor: 'resinMoisture',
    steps: [
      'Pause cycle and switch press to standby heating mode',
      'Inspect hopper dryer dew point sensor reading (ensure dew point <= -40°C)',
      'Purge remaining damp resin from feed throat (approx 2 shots into purge container)',
      'Verify hopper lid seal and vacuum loader filter integrity',
      'Resume production and check next 3 parts for moisture splay'
    ],
    expectedEffect: 'Drops resin moisture from >0.06% back below 0.02% critical limit',
  },
  {
    featurePattern: 'mouldTemp_high',
    category5M: 'Machine',
    title: 'Mould Cooling Circuit Descaling & Chiller Valve Balance',
    targetSensor: 'mouldTemp',
    steps: [
      'Check flowmeter on stationary and moving mould halves (minimum 12 L/min)',
      'Inspect return circuit temperature differential (must be within 2°C of setpoint)',
      'Clear quick-disconnect couplings of any sediment or calcium scale restriction',
      'Adjust mould temperature controller bypass valve to increase chilled flow',
      'Allow mould temperature to stabilize within +/- 1.5°C before resuming'
    ],
    expectedEffect: 'Restores cavity surface temperature to 45°C nominal, preventing thermal sink marks',
  },
  {
    featurePattern: 'injPressure_low',
    category5M: 'Method',
    title: 'Non-Return Check Ring Wear Inspection & Switchover Point Calibration',
    targetSensor: 'injPressure',
    steps: [
      'Perform cushion check: ensure cushion remains between 4mm and 6mm at end of hold',
      'Check hydraulic proportional valve pressure command vs feedback gauge',
      'Inspect non-return check ring for backflow leakage during screw forward motion',
      'Verify barrel zone 4 temperature is not excessively high causing resin thermal degradation',
      'Increase pack pressure by 5% increments until cavity pressure transducer reads nominal'
    ],
    expectedEffect: 'Restores peak injection pressure to 100 bar, preventing short shot starve defects',
  },
  {
    featurePattern: 'cycleTime_high',
    category5M: 'Machine',
    title: 'Ejector Mechanism Lubrication & Robot Take-Out Sync',
    targetSensor: 'cycleTime',
    steps: [
      'Visually inspect mechanical ejector pins for binding, friction scoring, or flash snagging',
      'Apply food-grade high-temp grease to ejector guide pins and slide return cams',
      'Check robot end-of-arm tooling vacuum sensor switch threshold',
      'Verify clamp opening stroke deceleration curve profile',
      'Execute 1 dry cycle to confirm smooth mechanical actuation without jerk'
    ],
    expectedEffect: 'Returns overall cycle time to 24.0s baseline (+/- 0.4s), mitigating flash from excessive dwell',
  },
  {
    featurePattern: 'barrelTemp_high',
    category5M: 'Machine',
    title: 'Heater Band Thermocouple Seating & Solid-State Relay Check',
    targetSensor: 'barrelTemp',
    steps: [
      'Inspect thermocouple spring tension and seating depth in barrel zone 2/3',
      'Check for loose wiring on solid-state relay (SSR) output terminals',
      'Verify cooling air blower activation on over-temperature zones',
      'Recalibrate zone PID autotune parameters if thermal oscillation exceeds 3°C',
    ],
    expectedEffect: 'Maintains barrel temperature within 220°C +/- 2°C, preventing polymer degradation',
  },
];

