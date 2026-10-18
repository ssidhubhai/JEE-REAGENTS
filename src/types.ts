export type TabType = 'ALL' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'COMBO' | 'MATRIX';

export type IntermedFilter = 'ALL' | 'Carbocation' | 'No Rearrangement' | 'Free Radical' | 'Carbanion' | 'Carbene' | 'SN2' | 'POC';

export type StarFilter = 'ALL' | '3' | '2' | 'BOOKMARK' | 'MASTERED' | 'PENDING';

export interface SvgTemplateData {
  type: 'alkene_markov' | 'alkene_antimarkov' | 'cyclohexene_syn' | 'cyclohexene_anti' | 'alkyne_cis_trans' | 'ozonolysis_cut' | 'ring_expansion' | 'benzene_rxn' | 'carbonyl_rxn' | 'epoxide_open' | 'combo_chain';
  params: any[];
}

export interface ReagentCard {
  id: string;
  tab: 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'COMBO';
  title: string;
  category: string;
  stars: number;
  freq: string;
  intermed: IntermedFilter;
  intermedLabel: string;
  svgData: SvgTemplateData;
  hinglish: string;
  touches: string;
  ignores: string;
  trap: string;
  exampleText: string;
}
