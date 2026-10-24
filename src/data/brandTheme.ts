/** One colour theme per brand, reused on Home, About and Products. */
export interface BrandTheme {
  color: string; // main colour (names, accents)
  soft: string;  // light tint (card / row backgrounds)
}

export const BRAND_THEME: Record<string, BrandTheme> = {
  lapp: { color: '#EA580C', soft: '#FFF1E6' },     // orange
  eaton: { color: '#1D4ED8', soft: '#E8F0FE' },    // blue
  partex: { color: '#475569', soft: '#EEF1F5' },   // slate grey
  mennekes: { color: '#DC2626', soft: '#FDECEC' }, // red
};

export const themeFor = (id: string): BrandTheme =>
  BRAND_THEME[id] ?? { color: '#2563A6', soft: '#EEF4FB' };