import React, { useState } from 'react';
import { Layers, Shield, Zap, Flame, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayerDetail {
  id: string;
  name: string;
  layerNumber: number;
  material: string;
  primaryFunction: string;
  specStandard: string;
  technicalCharacteristics: {
    label: string;
    value: string;
  }[];
  description: string;
}

const CABLE_LAYERS: LayerDetail[] = [
  {
    id: 'conductor',
    name: 'Class 5 Electrolytic Copper Conductor',
    layerNumber: 1,
    material: 'High-Conductivity Electrolytic Annealed Copper (EC Grade)',
    primaryFunction: 'Low-loss electrical current transmission and dynamic flexibility',
    specStandard: 'IS 8130 / IEC 60228 Class 5',
    description: 'Composed of ultra-pure bunched copper strands (>99.97% purity). Provides exceptional current carrying capacity while offering superior mechanical flexibility during tray installation.',
    technicalCharacteristics: [
      { label: 'Conductivity', value: '> 101% IACS' },
      { label: 'Operating Temp', value: '90°C continuous / 250°C short-circuit' },
      { label: 'Tensile Strength', value: '200 to 240 N/mm²' },
      { label: 'Resistance Compliance', value: 'IEC 60228 Table 2' }
    ]
  },
  {
    id: 'insulation',
    name: 'Cross-Linked Polyethylene (XLPE) Dielectric',
    layerNumber: 2,
    material: 'Silane / Peroxide Cross-Linked Polyethylene Compound',
    primaryFunction: 'High dielectric breakdown strength and high thermal withstand',
    specStandard: 'IS 7098 (Part 1) / IEC 60502-1',
    description: 'Thermally stable thermoset insulation resistant to thermal aging. XLPE enables higher current ratings compared to regular PVC (90°C vs 70°C), reducing overall cable weight and diameter.',
    technicalCharacteristics: [
      { label: 'Dielectric Constant', value: '2.3 (Ultra-low dielectric loss)' },
      { label: 'Volume Resistivity', value: '> 1x10¹⁴ Ohm-cm at 90°C' },
      { label: 'Dielectric Strength', value: '20 to 22 kV/mm' },
      { label: 'Thermal Class', value: '90°C continuous thermal rating' }
    ]
  },
  {
    id: 'bedding',
    name: 'Extruded Inner Bedding / Filler',
    layerNumber: 3,
    material: 'Extruded Thermoplastic PVC / Compatible Non-Hygroscopic Filler',
    primaryFunction: 'Circular bedding formation and cushion between cores and steel armour',
    specStandard: 'IS 5831 / IEC 60502-1 Type ST1',
    description: 'Pressure-extruded over laid-up cores to form a compact, circular cross section. Acts as a protective barrier preventing mechanical abrasion between inner insulated cores and outer armour wires.',
    technicalCharacteristics: [
      { label: 'Tensile Strength', value: '> 12.5 N/mm²' },
      { label: 'Elongation at Break', value: '> 150%' },
      { label: 'Moisture Ingress', value: 'Impermeable barrier against interstitial seepage' },
      { label: 'Hardness', value: '75-80 Shore A' }
    ]
  },
  {
    id: 'armour',
    name: 'Galvanized Steel Wire Armour (SWA)',
    layerNumber: 4,
    material: 'Heavy Galvanized Mild Steel Round Wires / Formed Strips',
    primaryFunction: 'Heavy mechanical crush protection and low-resistance earth return',
    specStandard: 'IS 3975 / BS 5467',
    description: 'Helically wound galvanized steel wires offering robust impact, tensile, and rodent resistance. Essential for direct underground burial, trench installations, and heavy industrial environments.',
    technicalCharacteristics: [
      { label: 'Tensile Strength', value: '340 to 440 N/mm²' },
      { label: 'Zinc Coating Mass', value: '> 110 g/m² (IS 2633 hot-dip galvanized)' },
      { label: 'Coverage', value: '> 90% optical coverage' },
      { label: 'Earth Fault Capacity', value: 'Certified earthing path per IEEE 80' }
    ]
  },
  {
    id: 'outer-sheath',
    name: 'Flame Retardant ST2 Outer Jacket',
    layerNumber: 5,
    material: 'UV-Stabilized FRLS / LSZH Heavy-Duty Compound',
    primaryFunction: 'Environmental barrier against UV sunlight, chemicals, moisture & fire',
    specStandard: 'IEC 60332-1 / IS 10810 / BS EN 60811',
    description: 'Tough outer barrier containing UV-absorbers, anti-rodent additives, and flame-retarding mineral fillers. Self-extinguishing upon flame removal with low toxic gas emission.',
    technicalCharacteristics: [
      { label: 'Oxygen Index', value: '≥ 29% (Self-extinguishing in ambient air)' },
      { label: 'Temperature Index', value: '250°C at 21% Oxygen' },
      { label: 'UV Resistance', value: 'ASTM G154 Xenon-arc weatherometer tested' },
      { label: 'Acid Gas Generation', value: '< 20% HCl release during combustion' }
    ]
  }
];

export const CableAnatomy: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('conductor');
  const activeLayer = CABLE_LAYERS.find((l) => l.id === activeLayerId) || CABLE_LAYERS[0];

  return (
    <section id="anatomy" className="py-10 lg:py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Precision Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Cross-Section Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
            Cable Architecture &amp; Dielectric Anatomy
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Examine the layered construction of heavy industrial armoured cables engineered for mechanical resilience, chemical immunity, and continuous electrical performance.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Visual Asset & Interactive Hotspots */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
              <img
                src="/src/assets/images/cable_cross_section_1792651589893.jpg"
                alt="Technical studio cross-section photograph of an armored high-voltage electrical cable"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Inset Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10">
                  IS 7098 (PART 1) MULTI-CORE SPECIFICATION
                </span>
                <span className="font-mono text-slate-300">
                  Layer {activeLayer.layerNumber} of 5 Active
                </span>
              </div>
            </div>

            {/* Layer Selection Buttons (Interactive Segmented List) */}
            <div className="space-y-2">
              <div className="text-xs font-medium uppercase tracking-wider text-slate-500 font-mono">
                Select Layer to Inspect Properties:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {CABLE_LAYERS.map((layer) => {
                  const isActive = layer.id === activeLayerId;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`px-3 py-2 text-left rounded-lg border text-xs transition-all ${
                        isActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="font-mono text-[10px] opacity-70">L{layer.layerNumber}</div>
                      <div className="font-semibold truncate">{layer.name.split(' ')[0]}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Layer Technical Inspector */}
          <div className="lg:col-span-6 bg-slate-50/80 rounded-xl border border-slate-200 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Layer Header */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                    <span>Structural Layer {activeLayer.layerNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeLayer.specStandard}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeLayer.name}
                  </h3>
                  <div className="mt-2 text-xs text-slate-600 font-mono">
                    <strong className="text-slate-800">Primary Material:</strong> {activeLayer.material}
                  </div>
                </div>

                {/* Purpose Statement */}
                <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-slate-700" />
                    <span>Engineering Function</span>
                  </div>
                  {activeLayer.description}
                </div>

                {/* Technical Characteristics Grid */}
                <div>
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                    Validated Test Benchmarks:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLayer.technicalCharacteristics.map((tech, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg border border-slate-200 space-y-1 shadow-2xs"
                      >
                        <div className="text-[11px] text-slate-500 uppercase font-mono tracking-wider">
                          {tech.label}
                        </div>
                        <div className="text-xs font-bold text-slate-900 font-mono">
                          {tech.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Footnote */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Tested in accordance with {activeLayer.specStandard}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Spec
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
