import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Zap, CheckCircle2, RefreshCw, FileText } from 'lucide-react';
import { CABLE_PRODUCTS, CableProduct } from '../data/cableData';

interface CableCalculatorProps {
  onAddRecommendedToRFQ: (product: CableProduct, customSize: string, meters: number) => void;
}

export const CableCalculator: React.FC<CableCalculatorProps> = ({ onAddRecommendedToRFQ }) => {
  const [phase, setPhase] = useState<'1' | '3'>('3'); // '1' = 230V single phase, '3' = 415V three phase
  const [inputMode, setInputMode] = useState<'current' | 'power'>('power');
  const [powerKw, setPowerKw] = useState<number>(15); // kW
  const [currentAmps, setCurrentAmps] = useState<number>(26); // A
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [distanceMeters, setDistanceMeters] = useState<number>(60); // meters
  const [conductorMaterial, setConductorMaterial] = useState<'copper' | 'aluminum'>('copper');
  const [maxDropPercent, setMaxDropPercent] = useState<number>(3.0); // 3% per IS/IEC standard

  // Standard conductor cross sections in mm² with approximate current ratings and resistivities (copper: 0.0175 ohm·mm²/m, alum: 0.0282)
  const calculation = useMemo(() => {
    const voltage = phase === '1' ? 230 : 415;

    let loadCurrent = currentAmps;
    if (inputMode === 'power') {
      if (phase === '1') {
        loadCurrent = (powerKw * 1000) / (voltage * powerFactor);
      } else {
        loadCurrent = (powerKw * 1000) / (Math.sqrt(3) * voltage * powerFactor);
      }
    }

    // Resistivity rho at 70°C operating temperature
    const rho = conductorMaterial === 'copper' ? 0.0215 : 0.035;

    // Available standard cable sizes
    const standardSizes = [1.5, 2.5, 4.0, 6.0, 10.0, 16.0, 25.0, 35.0, 50.0, 70.0, 95.0, 120.0, 150.0, 185.0, 240.0, 300.0, 400.0];

    // Standard continuous ampacity table in air/tray (approx for multi-core XLPE/PVC)
    const ampacityCopper: { [key: number]: number } = {
      1.5: 18, 2.5: 25, 4.0: 34, 6.0: 44, 10.0: 60, 16.0: 82, 25.0: 110,
      35.0: 135, 50.0: 165, 70.0: 210, 95.0: 260, 120.0: 300, 150.0: 345,
      185.0: 395, 240.0: 470, 300.0: 540, 400.0: 630
    };

    const ampacityAluminum: { [key: number]: number } = {
      2.5: 18, 4.0: 25, 6.0: 33, 10.0: 45, 16.0: 62, 25.0: 85, 35.0: 105,
      50.0: 125, 70.0: 160, 95.0: 200, 120.0: 230, 150.0: 265, 185.0: 305,
      240.0: 365, 300.0: 420, 400.0: 490
    };

    const ampacityTable = conductorMaterial === 'copper' ? ampacityCopper : ampacityAluminum;

    let selectedSize = standardSizes[standardSizes.length - 1];
    let calculatedDropVolts = 0;
    let calculatedDropPercent = 0;

    for (const size of standardSizes) {
      const ratedAmpacity = ampacityTable[size] || 0;
      if (ratedAmpacity < loadCurrent) continue;

      // Calculate voltage drop:
      // Single phase: Vd = 2 * I * L * rho / A
      // Three phase: Vd = sqrt(3) * I * L * rho / A
      const factor = phase === '1' ? 2 : Math.sqrt(3);
      const vDrop = (factor * loadCurrent * distanceMeters * rho) / size;
      const vDropPct = (vDrop / voltage) * 100;

      if (vDropPct <= maxDropPercent) {
        selectedSize = size;
        calculatedDropVolts = vDrop;
        calculatedDropPercent = vDropPct;
        break;
      }
    }

    // Matching product from catalog
    let matchedProduct: CableProduct;
    if (conductorMaterial === 'copper') {
      matchedProduct = CABLE_PRODUCTS.find((p) => p.code === 'SK-CU-ARM4C') || CABLE_PRODUCTS[0];
    } else {
      matchedProduct = CABLE_PRODUCTS.find((p) => p.code === 'SK-AL-ARM35') || CABLE_PRODUCTS[2];
    }

    return {
      voltage,
      loadCurrent: Math.round(loadCurrent * 10) / 10,
      selectedSize,
      calculatedDropVolts: Math.round(calculatedDropVolts * 100) / 100,
      calculatedDropPercent: Math.round(calculatedDropPercent * 100) / 100,
      matchedProduct
    };
  }, [phase, inputMode, powerKw, currentAmps, powerFactor, distanceMeters, conductorMaterial, maxDropPercent]);

  return (
    <section className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Electrical Engineering Suite</span>
            <span aria-hidden="true">·</span>
            <span>IS / IEC Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Interactive Cable Sizing &amp; Voltage Drop Calculator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Calculate exact conductor cross-section (mm²), continuous load ampacity, and permissible line voltage drop for your project cable runs in compliance with IS 7098 &amp; IEC 60502.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calculator Controls Panel */}
          <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Supply System Phase */}
              <div>
                <label className="block font-medium text-slate-700 mb-1.5 font-mono">
                  Electrical System Phase
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPhase('3')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      phase === '3'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    3-Phase (415V)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPhase('1')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      phase === '1'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    1-Phase (230V)
                  </button>
                </div>
              </div>

              {/* Conductor Material */}
              <div>
                <label className="block font-medium text-slate-700 mb-1.5 font-mono">
                  Conductor Metallurgy
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setConductorMaterial('copper')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      conductorMaterial === 'copper'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Electrolytic Copper
                  </button>
                  <button
                    type="button"
                    onClick={() => setConductorMaterial('aluminum')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                      conductorMaterial === 'aluminum'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Annealed Aluminum
                  </button>
                </div>
              </div>

              {/* Input Mode Switch */}
              <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-slate-600 font-medium">Load Input Mode:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setInputMode('power')}
                      className={`text-xs px-2.5 py-1 rounded transition-colors ${
                        inputMode === 'power' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Rated Power (kW)
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={() => setInputMode('current')}
                      className={`text-xs px-2.5 py-1 rounded transition-colors ${
                        inputMode === 'current' ? 'bg-slate-200 text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Operating Amperes (A)
                    </button>
                  </div>
                </div>

                {inputMode === 'power' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-500 mb-1 font-mono">
                        Connected Load (kW)
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="1000"
                        step="0.5"
                        value={powerKw}
                        onChange={(e) => setPowerKw(Math.max(0.1, Number(e.target.value)))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-500 mb-1 font-mono">
                        System Power Factor (cos φ)
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="1.0"
                        step="0.05"
                        value={powerFactor}
                        onChange={(e) => setPowerFactor(Math.min(1.0, Math.max(0.5, Number(e.target.value))))}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-mono">
                      Continuous Full-Load Current (Amperes)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="2000"
                      step="1"
                      value={currentAmps}
                      onChange={(e) => setCurrentAmps(Math.max(1, Number(e.target.value)))}
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                )}
              </div>

              {/* Cable Run Distance */}
              <div>
                <label className="block font-medium text-slate-700 mb-1 font-mono">
                  One-Way Run Distance (Meters)
                </label>
                <input
                  type="number"
                  min="5"
                  max="1000"
                  step="5"
                  value={distanceMeters}
                  onChange={(e) => setDistanceMeters(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Max Permissible Drop */}
              <div>
                <label className="block font-medium text-slate-700 mb-1 font-mono">
                  Permissible Voltage Drop (%)
                </label>
                <select
                  value={maxDropPercent}
                  onChange={(e) => setMaxDropPercent(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value={2.5}>2.5% (Critical Data / Medical)</option>
                  <option value={3.0}>3.0% (IS Standard Lighting/Power)</option>
                  <option value={5.0}>5.0% (Long Submersible / Solar Runs)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-widest">
                <span>Engineering Output</span>
                <span className="text-amber-400 font-bold">IS 7098 COMPLIANT</span>
              </div>
              <div className="mt-2 text-xs text-slate-400">
                Calculated full-load current: <strong className="text-white font-mono tabular-nums">{calculation.loadCurrent} A</strong>
              </div>
            </div>

            {/* Recommended Size Display */}
            <div className="space-y-1">
              <div className="text-xs text-slate-400 font-mono uppercase">
                Recommended Conductor Size:
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                {calculation.selectedSize} mm²
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {phase === '3' ? '3.5 or 4 Core' : '2 Core'} {conductorMaterial.toUpperCase()} XLPE Armoured
              </div>
            </div>

            {/* Computed Voltage Drop Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs font-mono">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80">
                <span className="text-slate-400 text-[10px] uppercase block">Drop in Volts</span>
                <span className="text-base font-bold text-white tabular-nums">
                  {calculation.calculatedDropVolts} V
                </span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80">
                <span className="text-slate-400 text-[10px] uppercase block">Drop Percentage</span>
                <span className={`text-base font-bold tabular-nums ${
                  calculation.calculatedDropPercent <= maxDropPercent ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {calculation.calculatedDropPercent}%
                </span>
              </div>
            </div>

            {/* Matched Siddhi Kabel Item */}
            <div className="pt-2 border-t border-slate-800 space-y-3">
              <div className="text-xs text-slate-400 font-mono">
                Direct Bangalore Warehouse Stock Line:
              </div>
              <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700 text-xs space-y-1">
                <div className="font-bold text-white">
                  {calculation.matchedProduct.name}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Code: {calculation.matchedProduct.code} · Available for immediate drum cut
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onAddRecommendedToRFQ(
                    calculation.matchedProduct,
                    `${calculation.selectedSize} mm²`,
                    distanceMeters
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-100 rounded-lg active:scale-[0.99] transition-all shadow-sm"
              >
                <Zap className="w-4 h-4 text-slate-950" />
                <span>Add {calculation.selectedSize}mm² Cable to RFQ Bill</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
