/**
 * Content of the brand pages (Lapp, Eaton, Mennekes, Partex).
 * Text follows the live siddhikabel.com brand pages. Edit freely: every card is one entry below.
 * Intro photos are existing project images - swap the imports to change them.
 */
import introLapp from '../assets/hero_industrial_cables_1792651589510.jpg';
import introEaton from '../assets/industry_automation.jpg';
import introMennekes from '../assets/image2.jpg';
import introPartex from '../assets/power_control_cables_1792651590664.jpg';
import { chevron, printer, pks, ties, oval, snapon } from './partexImages';

export type BrandId = 'lapp' | 'eaton' | 'mennekes' | 'partex';

/** icon-tile card (Lapp, Partex) */
export interface FeaturedItem { title: string; desc: string; icon?: string }
/** bordered card with bullet list (Eaton) */
export interface RangeBulletItem { title: string; bullets: string[] }
/** bordered card with paragraph (Mennekes) */
export interface RangeTextItem { title: string; text: string }

export interface BrandPage {
  id: BrandId;
  name: string;
  country: string;
  intro: string;
  introImage: string;
  introAlt: string;
  sectionTitle: string;
  layout: 'featured' | 'bullets' | 'text';
  featured?: FeaturedItem[];
  bullets?: RangeBulletItem[];
  text?: RangeTextItem[];
}

export interface PartexProduct { id: string; name: string; image: string; desc: string }

export const BRAND_PAGES: Record<BrandId, BrandPage> = {
  lapp: {
    id: 'lapp',
    name: 'Lapp Kabel',
    country: 'Germany',
    intro:
      'Lapp produces cables and conductors for different industries and markets. Known worldwide for engineering benchmarks like ÖLFLEX®, UNITRONIC® and ETHERLINE®.',
    introImage: introLapp,
    introAlt: 'Industrial cable drums in a factory',
    sectionTitle: 'Featured Lapp products',
    layout: 'featured',
    featured: [
      { title: 'ÖLFLEX® Flexible Power & Control Cables', desc: 'Oil-resistant, highly flexible PVC control cable for fixed installation as well as occasional flexing.', icon: 'cable' },
      { title: 'UNITRONIC® Data Communication Shielded Cables', desc: 'Screened data transmission cable with color code according to DIN 47100.', icon: 'activity' },
      { title: 'ETHERLINE® Industrial Ethernet & Profinet', desc: 'High-speed Cat.5A Industrial Ethernet cable for flexible and drag chain industrial operations.', icon: 'network' },
      { title: 'HITRONIC® Superfast Optical Fibre Cables', desc: 'Non-metallic, longitudinally and transversely watertight universal indoor/outdoor optical fibre cables.', icon: 'radio' },
      { title: 'SKINTOP® High-Performance Cable Glands', desc: 'Nickel-plated brass cable gland with metric connecting thread and optimum strain relief.', icon: 'shield' },
      { title: 'EPIC® Heavy-Duty Industrial Connectors', desc: 'Robust rectangular and circular power & signal multi-pin connectors for heavy industry.', icon: 'plug' },
      { title: 'SILVYN® Flexible Conduit & Protection Systems', desc: 'Corrugated protective conduits and matching fittings for comprehensive mechanical defense.', icon: 'wrench' },
    ],
  },

  eaton: {
    id: 'eaton',
    name: 'Eaton - Moeller',
    country: 'Germany / USA',
    intro:
      'Eaton’s electrical business is a global leader in power distribution, power quality, control and automation, power monitoring and energy management products and services. Through its global electrical product series and solutions, Eaton is positioned to answer today’s most critical electrical power management challenges.',
    introImage: introEaton,
    introAlt: 'Industrial control panel with Eaton-type switchgear',
    sectionTitle: 'Eaton product range',
    layout: 'bullets',
    bullets: [
      { title: 'RMQ 22.5 mm Pilot Devices', bullets: [
        'Pushbutton illuminated / non-illuminated / twin pushbutton',
        'Foot and palm switches, emergency stop switches, selector switches',
        'Pushbutton surface-mounting enclosures: 1 way, 2 way, 3 way and 4 way',
        'RMQ 16 mm pilot devices: square pushbuttons with and without illumination',
        'SL signal towers and accessories' ] },
      { title: 'LS Position / MCS Pressure Switches / Sensors', bullets: [
        'Safety door switches and safety position switches',
        'MCS pressure switches for fluid and gaseous monitoring',
        'Sensors and proximity switches' ] },
      { title: 'Cam Switches and Switch Disconnectors', bullets: [
        'On/off, safety, changeover, reversing, star-delta switches',
        'Cam switches, mini rotary switches, isolators',
        'Switches for ATEX Zone 22' ] },
      { title: 'Contactors & Contactor Relays', bullets: [
        'Mini contactor relays, AC and DC contactor systems',
        'High-rated contactors up to 1600 A AC-3, up to 2600 A AC-1',
        'UL/CSA approved contactors',
        'Star-delta combinations, CMD contactor monitoring devices',
        'Bimetal overload relays up to 630 A',
        'Electronic overload relays up to 1500 A',
        'EMT6 thermistor overload relay for machine protection' ] },
      { title: 'Motor Protective Circuit Breakers', bullets: [
        'With pushbuttons up to 16 A',
        'With rotary handle up to 65 A',
        'Compact starters, high-capacity compact starters',
        'DC string circuit breakers and DC switch disconnectors up to 63 A',
        'Motor starter combinations up to 1400 A' ] },
      { title: 'Measuring and Monitoring Relays, Soft Starters and Drives', bullets: [
        'Electronic measuring and monitoring relays',
        'Electronic timing relays',
        'Multi-functional with remote potentiometer / remote potentiometer',
        'DS6 two-phase controlled soft starter with internal bypass',
        'DS7 two-phase controlled soft starter with asymmetrical trigger',
        'DM4 three-phase controlled soft starter',
        'M-Max and H-Max frequency inverters' ] },
      { title: 'Compact Circuit Breakers MCCB up to 1600 A', bullets: [
        'Door-coupling rotary handles for MCCB',
        'Compact switch disconnectors N, PN up to 1600 A',
        'NZM1 to NZM4 series, remote operators',
        'Easy500, Easy700, Easy800, MFD-Titan' ] },
      { title: 'Miniature Circuit Breakers (MCB) & RCCB', bullets: [
        'FAZ miniature circuit breakers with UL/CSA',
        'Digital residual current devices',
        'Cylindrical fuse switch disconnectors',
        'Fuse switch disconnectors, photovoltaics' ] },
      { title: 'Circuit Breakers IZM up to 6300 A', bullets: [
        'IZM basic devices',
        'High-availability withdrawable units',
        'Comprehensive fixed-mounted accessories',
        'ARMS, the worldwide novelty' ] },
    ],
  },

  mennekes: {
    id: 'mennekes',
    name: 'Mennekes',
    country: 'Germany',
    intro:
      'The right solution for every application. Where high currents have to be transferred safely and economically, customers and partners can always rely on MENNEKES. They think holistically and create powerful connections that help people handle energy more innovatively and distribute and manage it more intelligently.',
    introImage: introMennekes,
    introAlt: 'Industrial construction site',
    sectionTitle: 'Mennekes product range',
    layout: 'text',
    text: [
      { title: 'Heat-resistant contact carriers', text: 'Receptacles with highly heat-resistant contact carriers, nickel-plated contacts and high resistance to chemicals.' },
      { title: 'Corrosion resistance', text: 'Guaranteed resistance to corrosive environments: high humidity, salt or acidic air, corrosive gases and vapours.' },
      { title: 'Grip and quick installation', text: 'Best grip and improved impact resistance through a unique rubber coating and ergonomic design. Largely tool-free installation substantially reduces installation time, with stable and fast locking without screws.' },
      { title: 'AMELAN', text: 'A plastic that combines high mechanical, thermal and electrical properties with excellent dimensional stability and resistance to chemicals. Fit for action in chemical plants, refineries, the food processing industry and washdown areas. AMELAN resists fuels, oils and fats, dilute acids and alkalines, cleaning fluids, most aqueous salt solutions and a wide variety of chemicals including aliphatic hydrocarbons.' },
      { title: 'cepex data port receptacles', text: 'The right choice for control stations, storage areas, laboratories, airports, production lines and more. Operated with standard patch cables and can be combined with cepex CEE and/or SCHUKO receptacles.' },
      { title: 'AMAXX', text: 'Extensively configurable receptacle combinations in six different sizes, with an appealing and unique design in many variations for all applications.' },
      { title: 'EverGUM', text: 'A solid rubber alternative to enclosures in AMAPLAST, AMELAN and sheet steel. Suitable for the most diverse environments, especially where rough handling or aggressive cleaning agents are likely.' },
    ],
  },

  partex: {
    id: 'partex',
    name: 'Partex',
    country: 'Sweden',
    intro:
      'Partex Marking Systems makes wire, cable and component identification for panels, machines and plants: sleeves, markers, labels and printers that keep installations traceable.',
    introImage: introPartex,
    introAlt: 'Marked industrial cable',
    sectionTitle: 'Featured Partex products',
    layout: 'featured',
    featured: [
      { title: 'PARTEX Marking Sleeves & Wire Markers', desc: 'Pre-printed and print-on-demand sleeves for clear, lasting wire identification.' },
      { title: 'PARTEX Marking Printers & Software', desc: 'Printers and software for producing wire and component markers in-house.' },
    ],
  },
};

/** extra Partex product cards (details only, no prices) */
export const PARTEX_PRODUCTS: PartexProduct[] = [
  { id: 'chevron', name: 'Closed Chevron Wire Markers', image: chevron, desc: 'Closed chevron-shaped markers that slide over the wire for clear, permanent identification inside panels and junction boxes.' },
  { id: 'printer', name: 'Thermal Cable Marker Printers', image: printer, desc: 'Thermal transfer printers for producing wire, cable and component markers in-house, on demand and in any sequence.' },
  { id: 'pks', name: 'PKS Stainless Steel Markers', image: pks, desc: 'Stainless steel cable markers for harsh, hot or chemical environments where plastic markers would not last.' },
  { id: 'ties', name: 'Industrial Cable Ties', image: ties, desc: 'Strong, durable cable ties for bundling and securing cables neatly in panels, trays and machines.' },
  { id: 'oval', name: 'PO & POZ Oval Marker Sleeves', image: oval, desc: 'Oval marker sleeves supplied on a roll, for quick and consistent identification of multi-core and flat cables.' },
  { id: 'snapon', name: 'PC Open-End Snap-On Wire Markers', image: snapon, desc: 'Open-end snap-on markers that clip onto installed wires, so existing cabling can be marked without disconnecting.' },
];