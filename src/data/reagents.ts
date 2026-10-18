import { ReagentCard } from '../types';

export const REAGENT_CARDS: ReagentCard[] = [
  // ==================== MODULE P1: HYDROCARBONS & EAS (17 CARDS) ====================
  {
    id: "P1-01",
    tab: "P1",
    title: "H₂ / Pd, Pt, or Raney Ni (Catalytic Hydrogenation)",
    category: "Hydrocarbons • Alkene/Alkyne Reduction",
    stars: 3,
    freq: "★★★ Asked 8+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Metal Surface Syn-Addition (No Rearrangement)",
    svgData: {
      type: "cyclohexene_syn",
      params: ["H₂ / Ni, Pd or Pt", "Syn Addition (Same Side)", "-H", "-H (Meso/Cis)", "Donon H same chehre (Syn) se chipakte hain!"]
    },
    hinglish: "Metal ki chattai pe Alkene baith-ta hai aur donon H ek hi side (SYN) se judte hain! Isliye 1,2-dimethylcyclohexene pe H₂/Ni lagane se हमेशा CIS (Meso) banta hai! Rate ∝ 1 / Steric Crowding (jitna kam bheed, utna fast hydrogenation).",
    touches: "Alkene, Alkyne, C=O, -NO₂, -CN, Acid Chloride",
    ignores: "Carboxylic Acid (-COOH), Ester (-COOR), Amide (-CONH₂), Benzene (at room temp)",
    trap: "Heat of Hydrogenation (ΔH) ∝ 1 / Alkene Stability (More α-H = More stable alkene = Less heat released!). Exception: Conjugated diene zyada stable hoti hai!",
    exampleText: "1,2-Dimethylcyclohexene + D₂/Pt → Cis-1,2-dideuterio-1,2-dimethylcyclohexane (Meso compound)."
  },
  {
    id: "P1-02",
    tab: "P1",
    title: "H₂ / Pd-CaCO₃ + Quinoline (Lindlar's Catalyst)",
    category: "Hydrocarbons • Controlled Alkyne Reduction",
    stars: 3,
    freq: "★★★ Asked 12+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Poisoned Catalyst • Syn Addition → CIS Alkene",
    svgData: {
      type: "alkyne_cis_trans",
      params: ["H₂ / Pd-CaCO₃ (Lindlar)", "or Ni₂B (P-2 Catalyst)", true, "Internal Alkyne → 100% CIS-Alkene (Syn)"]
    },
    hinglish: "Pd ko CaCO₃/BaSO₄ aur Quinoline/Sulfur ka zeher (poison) पिला diya taaki wo Alkyne ko Alkane tak na le jaaye—beech raaste mein CIS-ALKENE pe rok de! Donon H same side (Syn) se aate hain.",
    touches: "Internal Alkyne (-C≡C-) → Cis-Alkene; Acid Chloride → Aldehyde (Rosenmund)",
    ignores: "Alkenes (C=C), Ketones, Esters, Benzene ring",
    trap: "Terminal Alkyne (R-C≡CH) mein Cis/Trans nahi hota! Wahan Lindlar aur Birch donon same product (R-CH=CH₂) dete hain!",
    exampleText: "But-2-yne + H₂/Pd-CaCO₃ → Cis-but-2-ene (Boiling point > Trans, Dipole moment μ ≠ 0)."
  },
  {
    id: "P1-03",
    tab: "P1",
    title: "Na or Li / Liquid NH₃ (Birch Reduction)",
    category: "Hydrocarbons • Anti Alkyne & Benzene Reduction",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Solvated Electron (Radical Anion) → TRANS Alkene",
    svgData: {
      type: "alkyne_cis_trans",
      params: ["Na / Liq. NH₃ (-33°C)", "EtOH (Proton Source)", false, "Internal Alkyne → 100% TRANS-Alkene (Anti)"]
    },
    hinglish: "Sodium apna electron deta hai → Radical Anion banta hai jisme R groups repulsion ki wajah se opposite (TRANS) baith jaate hain! Benzene ring pe Birch lagao toh non-conjugated 1,4-cyclohexadiene banta hai.",
    touches: "Internal Alkyne → Trans-Alkene; Benzene ring → 1,4-Cyclohexadiene",
    ignores: "TERMINAL Alkyne (R-C≡CH ke saath Na/NH₃ acid-base reaction karke R-C≡C⁻Na⁺ + ½H₂↑ bana deta hai!)",
    trap: "Benzene Ring Birch Trap: Agar ring pe EWG (-COOH, -NO₂) laga hai toh ipso & para carbon reduce hote hain; agar EDG (-OMe, -Me) laga hai toh double bond EDG wale carbon pe BACH jaata hai!",
    exampleText: "Anisole (Ph-OMe) + Na/liq. NH₃/EtOH → 1-Methoxycyclohexa-1,4-diene."
  },
  {
    id: "P1-04",
    tab: "P1",
    title: "HX (HCl, HBr, HI) on Alkenes & Alkynes",
    category: "Hydrocarbons • Electrophilic Addition",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "Carbocation",
    intermedLabel: "⚡ Carbocation (C⁺) • Hydride/Methyl Shift & Ring Expansion!",
    svgData: {
      type: "ring_expansion",
      params: ["HBr or HI (Anhydrous)", "Step 1: H⁺ makes C⁺ (RDS)", "Vinyl Cyclobutane / 3-Me-But-1-ene", "Rearranged / Ring-Expanded Halide!"]
    },
    hinglish: "Pehle H⁺ aake π-bond todta hai aur jahan sabse stable Carbocation (C⁺) ban sake wahan +ve banata hai! Rukna mat: I⁻/Br⁻ chipkane se pehle check karo kya 1,2-Hydride shift, Methyl shift, ya 4→5 / 5→6 Ring Expansion ho raha hai!",
    touches: "Alkenes, Alkynes, Conjugated Dienes (1,2 vs 1,4 addition)",
    ignores: "Benzene ring",
    trap: "Dienes + HBr Trap: Low temp (-80°C) pe 1,2-addition (Kinetic control) major hota hai; High temp (+40°C) pe 1,4-addition (Thermodynamic stable internal alkene) major hota hai!",
    exampleText: "3,3-Dimethylbut-1-ene + HBr → 2-Bromo-2,3-dimethylbutane (via 1,2-methyl shift)."
  },
  {
    id: "P1-05",
    tab: "P1",
    title: "HBr + Peroxide (R₂O₂ / hν) — Kharasch Effect",
    category: "Hydrocarbons • Free Radical Addition",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Free Radical (2°/3° Radical) • Anti-Markovnikov (ONLY HBr!)",
    svgData: {
      type: "alkene_antimarkov",
      params: ["HBr + (PhCO)₂O₂", "Free Radical (No Rearrangement)", "-Br", "1° Bromoalkane (Anti-Markovnikov)"]
    },
    hinglish: "Peroxide dekhte hi Br• free radical pehle banta hai aur kinare (terminal C) pe attack karta hai taaki beech mein stable 2°/3° Free Radical bane! Isliye -Br bahar waale carbon (less substituted C) pe lagta hai!",
    touches: "Unsymmetrical Alkenes & Alkynes (with HBr ONLY)",
    ignores: "HCl aur HI Peroxide Effect NAHI dikhate! (HCl + Peroxide gives NORMAL Markovnikov!)",
    trap: "NCERT Statement Trap: HCl mein H–Cl bond bahut strong hai (endothermic cleavage), aur HI mein I• radical alkene pe add hone ke bajay I₂ bana leta hai—isliye Peroxide effect SIRF HBr deta hai!",
    exampleText: "Propene + HBr/Peroxide → 1-Bromopropane | Propene + HCl/Peroxide → 2-Chloropropane!"
  },
  {
    id: "P1-06",
    tab: "P1",
    title: "Dil. H₂SO₄ (H₃O⁺) vs OMDM [Hg(OAc)₂, H₂O / NaBH₄]",
    category: "Hydrocarbons • Markovnikov Hydration With vs Without Shift",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "No Rearrangement",
    intermedLabel: "⚡ H₃O⁺ = C⁺ Rearranges! | 🛡️ OMDM = Cyclic Mercurinium (NO Shift!)",
    svgData: {
      type: "alkene_markov",
      params: ["Hg(OAc)₂, H₂O then NaBH₄/OH⁻", "OMDM: No Carbocation Shift!", "-OH", "Pure Markovnikov Alcohol (Zero Rearrangement)"]
    },
    hinglish: "Donon Markovnikov -OH lagate hain, par farq dekho: (1) Dil. H₂SO₄ / H₃O⁺: Sacha Carbocation (C⁺) banta hai → Hydride/Methyl shift aur Ring Expansion HOTA hai! (2) OMDM [Hg(OAc)₂, H₂O / NaBH₄]: Cyclic Mercurinium ion banta hai → ZERO Rearrangement, pure Markovnikov -OH (Anti addition)!",
    touches: "Unsymmetrical Alkenes → Markovnikov Alcohols",
    ignores: "Carboxylic acids, alkanes",
    trap: "Isotopic D₂O / NaBD₄ Trap in OMDM: Beech waale carbon (Markovnikov C) pe -OH comes from H₂O, aur kinare waale carbon (Terminal C) pe -H comes from NaBH₄!",
    exampleText: "3,3-Dimethylbut-1-ene + H₃O⁺ → 2,3-Dimethylbutan-2-ol | + OMDM → 3,3-Dimethylbutan-2-ol!"
  },
  {
    id: "P1-07",
    tab: "P1",
    title: "B₂H₆ / THF then H₂O₂ / OH⁻ (Hydroboration-Oxidation — HBO)",
    category: "Hydrocarbons • Anti-Markovnikov Syn Hydration",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ 4-Membered Cyclic TS • Anti-Markovnikov + SYN Addition (No Shift!)",
    svgData: {
      type: "alkene_antimarkov",
      params: ["(i) B₂H₆ / THF  (ii) H₂O₂ / OH⁻", "HBO: Syn Addition (Same Face)", "-OH", "1° Alcohol (Anti-Markovnikov, Zero Shift)"]
    },
    hinglish: "Boron (BH₃) bada aur electron-deficient hai, toh wo bheed se bachte hue kinare waale (less crowded) carbon pe lagta hai aur apna H beech waale carbon ko usi side (SYN) se deta hai! Agle step mein H₂O₂/OH⁻ Boron ko hata ke wahi RETENTION ke saath -OH chipka deta hai!",
    touches: "Alkenes → Anti-Markovnikov Alcohols; Terminal Alkynes → Aldehydes (R-CH₂-CHO)!",
    ignores: "No carbocation rearrangement ever",
    trap: "Terminal Alkyne + HBO Trap: Propyne (CH₃-C≡CH) + Hg²⁺/H₃O⁺ gives Acetone, par Propyne + HBO (B₂H₆ / H₂O₂, OH⁻) gives Propanal (CH₃-CH₂-CHO)!",
    exampleText: "1-Methylcyclopentene + (i) B₂H₆/THF (ii) H₂O₂/OH⁻ → Trans-2-methylcyclopentanol (H and OH add Syn!)."
  },
  {
    id: "P1-08",
    tab: "P1",
    title: "Br₂ / CCl₄ vs Br₂ / H₂O (Bromination & Halohydrin + CSM Rule)",
    category: "Hydrocarbons • Stereospecific Anti-Addition",
    stars: 3,
    freq: "★★★ Asked 11+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ 3-Membered Cyclic Bromonium Ion • 100% ANTI Addition",
    svgData: {
      type: "cyclohexene_anti",
      params: ["Br₂ / CCl₄ (or Br₂ / H₂O)", "Cyclic Bromonium Ion", "-Br", "-Br / -OH", "100% Trans / Anti Product (CSM / TAC Rule!)"]
    },
    hinglish: "Br₂ aate hi 3-membered Cyclic Bromonium ring banti hai (isliye rearrangement kabhi nahi hota!). Agla Br⁻ (ya Br₂/H₂O mein H₂O) peeche se (ANTI) aur uss carbon pe maarta hai jahan +δ sabse zyada stable ho! Stereochemistry: CSM / TAC Rule रट लो: Cis + Syn = Meso | Trans + Anti = Meso | Cis + Anti = Racemic (±)!",
    touches: "Alkenes (Reddish-brown colour of Br₂ disappears — Unsaturation Test!)",
    ignores: "Benzene (without FeBr₃), Alkanes in dark",
    trap: "Br₂/H₂O + NaCl + NaI Mixture Trap: Pehle Br⁺ cyclic bromonium banata hai, phir sabse badhiya nucleophile (I⁻ > OH⁻/H₂O) peeche se zyada substituted carbon pe attack karta hai!",
    exampleText: "Trans-but-2-ene + Br₂/CCl₄ → Meso-2,3-dibromobutane | Cis-but-2-ene + Br₂/CCl₄ → Racemic (±)."
  },
  {
    id: "P1-09",
    tab: "P1",
    title: "NBS (N-Bromosuccinimide) / hν or CCl₄, Δ",
    category: "Hydrocarbons • Allylic & Benzylic Bromination",
    stars: 3,
    freq: "★★★ Asked 8+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Allylic / Benzylic Free Radical (Check Resonance Shift!)",
    svgData: {
      type: "cyclohexene_syn",
      params: ["NBS / hν or ROOR", "or Br₂ at 500°C (Low Conc.)", "Allylic -Br", "(C=C stays safe!)", "Double bond ke bagal wale (Allylic C) pe -Br!"]
    },
    hinglish: "NBS double bond ko bilkul nahi todta! Ye double bond ya benzene ring ke just bagal waale carbon (Allylic / Benzylic C) ka H hata ke wahan -Br chipkata hai via Free Radical!",
    touches: "Allylic C–H, Benzylic C–H",
    ignores: "Vinylic C–H, Aryl C–H, Double bond C=C",
    trap: "Allylic Resonance Trap: Unsymmetrical alkene (jaise But-1-ene) mein allylic radical resonance karta hai, toh -Br uss end pe major banta hai jahan MORE STABLE internal alkene (Trans-1-bromobut-2-ene) bane!",
    exampleText: "Cyclohexene + NBS/hν → 3-Bromocyclohexene | Ethylbenzene + NBS → Ph-CH(Br)-CH₃."
  },
  {
    id: "P1-10",
    tab: "P1",
    title: "Cold Dil. KMnO₄ (Baeyer's) & OsO₄ vs mCPBA / H₃O⁺",
    category: "Hydrocarbons • Syn vs Anti Dihydroxylation (1,2-Diols)",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Cold KMnO₄ / OsO₄ = SYN Diol | mCPBA + H₃O⁺ = ANTI Diol",
    svgData: {
      type: "cyclohexene_syn",
      params: ["Cold Dil. KMnO₄ / OH⁻", "or OsO₄ then NaHSO₃", "-OH", "-OH (CIS Diol)", "Syn 1,2-Diol (Pink KMnO₄ decolourises!)"]
    },
    hinglish: "Alkene pe दो -OH lagane ke 2 raaste: (1) Cold dil. KMnO₄ ya OsO₄ → Donon -OH same side (SYN / Cis-diol) lagte hain. (2) Peracid (mCPBA / PhCO₃H) se pehle Epoxide banao aur phir H₃O⁺ daalo → Donon -OH opposite side (ANTI / Trans-diol) lagte hain!",
    touches: "Alkenes → Vicinal 1,2-Diols",
    ignores: "Benzene ring",
    trap: "Hot Acidic KMnO₄ vs Cold Dilute KMnO₄: Cold dilute KMnO₄ stops at 1,2-Diol, jabki Hot KMnO₄ / H⁺ C=C bond ko poora faad ke Ketone + Carboxylic Acid (aur =CH₂ ko CO₂↑) bana deta hai!",
    exampleText: "Cis-but-2-ene + Cold dil. KMnO₄ → Meso-butane-2,3-diol | + mCPBA then H₃O⁺ → Racemic (±) diol."
  },
  {
    id: "P1-11",
    tab: "P1",
    title: "Ozonolysis: O₃ + Zn/H₂O (Reductive) vs O₃ + H₂O₂ (Oxidative)",
    category: "Hydrocarbons • C=C & C≡C Bond Cleavage Scissor",
    stars: 3,
    freq: "★★★ Asked 18+x",
    intermed: "No Rearrangement",
    intermedLabel: "✂️ Double Bond Cut → Donon Taraf =O Lagao!",
    svgData: {
      type: "ozonolysis_cut",
      params: ["(i) O₃  (ii) Zn/H₂O or Me₂S", "Reductive Ozonolysis", "R-CH=O (Aldehyde)", "R'₂C=O (Ketone)", "O₃/H₂O₂ hota toh R-CHO → R-COOH ban jata!"]
    },
    hinglish: "Sabse asaan trick: C=C double bond ko kainchi (✂️) se kaato aur donon toote carbons ko =O पकड़ा do! Agar Zn/H₂O ya Me₂S लिखा hai (Reductive) toh Aldehyde zinda bachega. Agar sirf O₃/H₂O ya O₃/H₂O₂ ya Hot KMnO₄/H⁺ hai (Oxidative) toh Aldehyde aage oxidize hoke -COOH ban jayega (aur HCHO → CO₂↑)!",
    touches: "Alkenes (C=C completely cut), Alkynes (C≡C cut to R-CO-CO-R' with Zn, or RCOOH + R'COOH with H₂O)",
    ignores: "Alkanes, Saturated rings",
    trap: "Retro-Ozonolysis Trick: Product ke donon C=O ko aamne-saamne rakh ke 'O' hata do aur wapas C=C jod do — 5 second mein original Alkene mil jayega!",
    exampleText: "o-Xylene + O₃ / Zn-H₂O → Glyoxal + Methylglyoxal + Diacetyl in 3 : 2 : 1 ratio."
  },
  {
    id: "P1-12",
    tab: "P1",
    title: "HgSO₄ / Dil. H₂SO₄ (Kucherov Alkyne Hydration)",
    category: "Hydrocarbons • Alkyne → Enol ⇌ Ketone",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Markovnikov Enol → Tautomerizes to Ketone",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "CH₃", "Hg²⁺ / Dil. H₂SO₄ (333 K)", "Alkyne R-C≡CH + H₂O", "C=O (Ketone)", "R — C(=O) — CH₃", "Sirf HC≡CH deta hai Acetaldehyde (CH₃CHO)!"]
    },
    hinglish: "Alkyne pe Hg²⁺/H₃O⁺ daalne se Markovnikov rule se -OH judta hai → Vinyl Alcohol (Enol) banta hai jo turant Tautomerism karke KETONE (R-CO-CH₃) bana leta hai! Sirf Ethyne (HC≡CH) hi Aldehyde (CH₃CHO) deta hai, baaki saare terminal alkynes Methyl Ketone dete hain!",
    touches: "Alkynes (-C≡C-) → Ketones",
    ignores: "Alkenes",
    trap: "Unsymmetrical Internal Alkyne Trap (e.g. Ph-C≡C-Me): Jahan δ⁺ zyada stable ho (benzylic C next to Ph), wahan -OH aata hai → Ph-CO-CH₂-Me!",
    exampleText: "Propyne + HgSO₄/H₂SO₄ → Acetone (gives positive Iodoform test!)."
  },
  {
    id: "P1-13",
    tab: "P1",
    title: "Cl₂ / hν (Reactivity) vs Br₂ / hν (1600 : 82 : 1 Selectivity)",
    category: "Alkanes • Free Radical Halogenation",
    stars: 2,
    freq: "★★ Asked 7+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Br₂/hν Always Picks 3° / Benzylic / Allylic H! • Cl₂/hν Gives Mixture",
    svgData: {
      type: "alkene_markov",
      params: ["Br₂ / hν  vs  Cl₂ / hν", "Free Radical Substitution", "3° -Br (99% Major!)", "Cl₂ Ratio (3°:2°:1° = 5 : 3.8 : 1) | Br₂ = 1600 : 82 : 1!"]
    },
    hinglish: "Br₂/hν bahut aalsi aur SELECTIVE hai—wo dhoondh ke sabse stable 3° / Benzylic / Allylic Free Radical banata hai! Jabki Cl₂/hν bahut tez (REACTIVE) hai—har jagah H hata ke isomers ka mixture bana deta hai (% yield = Number of equivalent H × Relative Reactivity)!",
    touches: "Alkanes, Alkylbenzenes (side chain)",
    ignores: "Aryl C–H bond",
    trap: "Chiral Carbon Free Radical Trap: Agar pehle se chiral center pe Br₂/hν attack kare toh planar sp² Free Radical banta hai → Racemic (±) mixture milta hai! Aur naye chiral center banne pe Diastereomers vs Enantiomers dhyan se gino!",
    exampleText: "Isobutane (Me₃CH) + Br₂/hν → >99% tert-Butyl bromide (Me₃C-Br)."
  },
  {
    id: "P1-14",
    tab: "P1",
    title: "Na / Dry Ether (Wurtz, Fittig & Wurtz-Fittig Reaction)",
    category: "Alkanes • Symmetrical Coupling & Intramolecular Rings",
    stars: 2,
    freq: "★★ Asked 8+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Free Radical / Carbanion • Symmetrical R–R (Fails for 3° R-X!)",
    svgData: {
      type: "carbonyl_rxn",
      params: ["2 R-X", "(1° or 2°)", "2 Na / Dry Ether", "Wurtz Coupling", "R — R (Even C Alkane)", "+ 2 NaX", "3° Halide + Na/Ether gives Alkene (Elimination)!"]
    },
    hinglish: "2 moles R-X + 2 Na / Dry Ether → R–R (Carbon double ho jaate hain!). Intramolecular Wurtz: Agar ek hi molecule mein do -Br/-Cl lage hon (jaise 1,3-dibromopropane ya 1,4-dibromobutane), toh Na/Dry ether andar hi andar jod ke Cyclopropane / Cyclobutane / Bicyclo ring bana deta hai!",
    touches: "1° and 2° Alkyl Halides, Aryl Halides (Fittig)",
    ignores: "Methane (CH₄ cannot be prepared by Wurtz!); 3° Halides undergo elimination",
    trap: "Dry Ether Kyun Zaroori Hai? Agar paani (moist ether) hua toh Na paani se react karke NaOH + H₂↑ bana lega aur R-X ko R-H/R-OH kar dega!",
    exampleText: "1-Bromo-3-chlorocyclobutane + 2 Na/Dry Ether → Bicyclo[1.1.0]butane!"
  },
  {
    id: "P1-15",
    tab: "P1",
    title: "NaNH₂ / Liq. NH₃ on Terminal Alkynes & Gem/Vic-Dihalides",
    category: "Alkynes • Double Elimination & Chain Elongation",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "Carbanion",
    intermedLabel: "➖ Forms Acetylide R-C≡C⁻Na⁺ • Needs 3 Eq. NaNH₂ for Terminal Alkyne!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-CH(Br)", "CH₂-Br", "(i) Alc. KOH  (ii) NaNH₂ / NH₃", "Double E2 Elimination", "R — C ≡ C⁻ Na⁺", "──(iii) R'-X (1°)──► R-C≡C-R'!", "Alc. KOH alone stops at Vinyl Bromide; NaNH₂ finishes to Alkyne!"]
    },
    hinglish: "Vicinal ya Geminal dihalide (-CHBr-CH₂Br) pe pehla HBr toh Alc. KOH nikaal deta hai, par Vinyl halide se doosra HBr nikaalne ke liye tadaakdaar base NaNH₂ lagta hai! Aur Terminal Alkyne (R-C≡CH) mein NaNH₂ daal ke R-C≡C⁻Na⁺ banao aur uspe 1° Halide (R'-X) maar ke chain lambi kar lo!",
    touches: "Vicinal/Geminal Dihalides, Terminal Alkynes (Acidic H!)",
    ignores: "Internal Alkynes (no acidic H)",
    trap: "3 Equivalents NaNH₂ Trap: Gem/Vic-dihalide se Terminal Alkyne banane mein 3 moles NaNH₂ kharch hote hain (2 moles elimination mein + 1 mole bane hue R-C≡CH ka acidic H chheen-ne mein)!",
    exampleText: "CH₃-CHBr₂ + 3 NaNH₂ → CH₃-C≡C⁻Na⁺ ──CH₃I──► But-2-yne."
  },
  {
    id: "P1-16",
    tab: "P1",
    title: "Aromatization (Cr₂O₃ / V₂O₅ / 773 K) & Red Hot Fe Tube (873 K)",
    category: "Hydrocarbons • Aliphatic to Benzene Ring Builders",
    stars: 3,
    freq: "★★★ Asked 11+x (NCERT Favourites)",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ n-Hexane → Benzene | n-Heptane → Toluene | 3 Propyne → Mesitylene!",
    svgData: {
      type: "benzene_rxn",
      params: ["H / CH₃", "", "Cr₂O₃-Al₂O₃ (773 K, 10-20 atm)", "or 3 RC≡CH in Red Hot Fe (873 K)", "H (Benzene) / CH₃ (Toluene)", "CH₃ (from Propyne)", "CH₃ (1,3,5-Mesitylene!)", "NCERT Must-Know: n-Octane gives o-Xylene!"]
    },
    hinglish: "Aliphatic se seedha Benzene ring banane ke 2 NCERT तरीके: (1) Aromatization (Cr₂O₃ / V₂O₅ / Mo₂O₃ at 773 K, 10–20 atm): n-Hexane → Benzene; n-Heptane → Toluene. (2) Red Hot Iron Tube (873 K): 3 HC≡CH → Benzene; 3 CH₃-C≡CH (Propyne) → 1,3,5-Trimethylbenzene (Mesitylene)!",
    touches: "C₆+ n-Alkanes, Alkynes",
    ignores: "Alkanes with < 6 carbons cannot aromatize",
    trap: "AlCl₃ + HCl Isomerization (NCERT): n-Alkane + Anhyd. AlCl₃/HCl converts straight-chain alkanes into branched-chain isomers!",
    exampleText: "3 moles Propyne ──Red hot Fe tube (873 K)──► Mesitylene (1,3,5-trimethylbenzene)."
  },
  {
    id: "P1-17",
    tab: "P1",
    title: "Friedel-Crafts (RCl/AlCl₃ vs RCOCl/AlCl₃) & EAS Directing Rules",
    category: "Hydrocarbons • Benzene Electrophilic Aromatic Substitution",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "Carbocation",
    intermedLabel: "⚡ Alkylation Rearranges! | 🛡️ Acylation = No Rearrangement! | Halogens = o/p but -I!",
    svgData: {
      type: "benzene_rxn",
      params: ["H", "", "n-PrCl / AlCl₃  vs  EtCOCl / AlCl₃", "EAS on Benzene Ring", "CH(Me)₂ (Cumene)  vs  CO-Et", "", "", "Aniline (-NH₂) & Nitrobenzene (-NO₂) FAIL Friedel-Crafts!"]
    },
    hinglish: "Benzene + n-PrCl / AlCl₃ karoge toh H⁻ shift hoke Cumene banega! Straight chain lagani ho toh pehle Acylation (RCOCl/AlCl₃) karo aur phir Zn-Hg/HCl se C=O hatao! EAS Directing Trick: • Ortho/Para + Activating: -O⁻ > -NH₂ > -OH > -OMe > -NHCOCH₃ > -R. • Ortho/Para + DEACTIVATING: -F, -Cl, -Br, -I (Reactivity -I se: F < Cl < Br < I? Nahi, F > Cl > Br > I; Orientation +M se Ortho/Para!). • Meta + Deactivating: -NO₂, -CN, -SO₃H, -CHO, -COR, -COOH, -NR₃⁺.",
    touches: "Benzene, Activated Aromatics, Haloarenes",
    ignores: "Aniline (forms PhNH₂⁺AlCl₃⁻ meta-deactivated complex!) & Nitrobenzene (too deactivated!)",
    trap: "Polyalkylation Trap: Alkyl group lagne ke baad ring aur zyada activate ho jati hai, isliye Friedel-Crafts Alkylation mein poly-alkylation rokna mushkil hota hai—jabki Acylation (-COR) ring ko deactivate karke mono-substitution pe ruk jata hai!",
    exampleText: "Benzene + Succinic anhydride / AlCl₃ → Ph-CO-CH₂-CH₂-COOH (Haworth Tetralin Synthesis Step 1!)."
  },

  // ==================== MODULE P2: HALIDES & GRIGNARD (11 CARDS) ====================
  {
    id: "P2-01",
    tab: "P2",
    title: "Aq. KOH / NaOH (SN2 Inversion) vs H₂O / ROH (SN1 Racemization)",
    category: "Alkyl Halides • Nucleophilic Substitution",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "SN2",
    intermedLabel: "🎯 Aq. KOH (1°/2°) = SN2 Inversion | ⚡ H₂O (3°/Allyl/Benzyl) = SN1",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "CH₃", "Aq. KOH (or NaCN / DMSO)", "Backside Attack (100% SN2)", "HO — C — H (Inverted)", "Walden Inversion (umbrella flip)", "Allylic/Benzylic & α-Halo Ketones are super fast in SN2!"]
    },
    hinglish: "Strong nucleophile (OH⁻, CN⁻, SH⁻) + Polar Aprotic solvent (DMSO, Acetone, DMF) + 1°/2° Halide = 100% SN2 (Peeche se attack, Walden Inversion, NO rearrangement!). Weak nucleophile (H₂O, ROH) + 3°/Benzylic/Allylic Halide = SN1 (Carbocation banta hai, Rearrangement + Racemization!).",
    touches: "1°, 2°, 3° Alkyl Halides",
    ignores: "Vinyl Halide (CH₂=CH-Cl), Aryl Halide (Ph-Cl), Bridgehead Halide (No SN1, No SN2!)",
    trap: "α-Halo Carbonyl (Ph-CO-CH₂-Cl) & MeO-CH₂-Cl Trap: Ph-CO-CH₂-Cl gives SUPER FAST SN2, while MeO-CH₂-Cl gives SUPER FAST SN1 (back-bonding stabilized CH₂=O⁺-Me)!",
    exampleText: "(R)-2-Bromobutane + Aq. NaOH → (S)-Butan-2-ol (100% Inversion)."
  },
  {
    id: "P2-02",
    tab: "P2",
    title: "Alc. KOH / Δ (Saytzeff E2) vs t-BuO⁻K⁺ / Δ (Hofmann E2)",
    category: "Alkyl Halides • Anti-Periplanar Elimination",
    stars: 3,
    freq: "★★★ Asked 12+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Concerted E2 (Needs Anti-Periplanar H & X at 180°!)",
    svgData: {
      type: "alkene_markov",
      params: ["Alc. KOH, Δ  vs  Me₃CO⁻K⁺", "E2 Anti-Elimination (H & X opposite)", "C=C (Saytzeff vs Hofmann)", "Alc. KOH → More α-H Alkene | t-BuO⁻ → Less Crowded Alkene!"]
    },
    hinglish: "Alc. KOH (chhota base) andar ghus ke β-H nikaalta hai → More Substituted Stable Alkene (Saytzeff) major banta hai! Par agar Bulky Base (t-BuO⁻K⁺ / Et₃N) ho, ya Leaving Group Poor/Bulky ho (-F, -NR₃⁺, -SR₂⁺), toh bheed se dar ke kinare wala H nikaalta hai → Hofmann (Terminal) Alkene major!",
    touches: "Alkyl Halides, Quaternary Ammonium Salts",
    ignores: "Halides without anti-periplanar β-H",
    trap: "Cyclohexane E2 Chair Trap: Cyclohexane ring mein E2 hone ke liye Leaving Group (-Cl/-Br) aur β-H donon ka TRANS-DIAXIAL (1,2-trans) hona zaroori hai!",
    exampleText: "2-Bromobutane + Alc. KOH → Trans-but-2-ene (Major) | + Me₃CO⁻K⁺ → But-1-ene (Major)."
  },
  {
    id: "P2-03",
    tab: "P2",
    title: "KCN vs AgCN  &  KNO₂ vs AgNO₂ (Ambident Nucleophiles)",
    category: "Alkyl Halides • Covalent vs Ionic Attack",
    stars: 3,
    freq: "★★★ Asked 11+x",
    intermed: "SN2",
    intermedLabel: "🎯 Ionic (KCN/KNO₂) → C / O attacks | Covalent (AgCN/AgNO₂) → N attacks!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "CH₂-Br", "KCN (Ionic)  vs  AgCN (Covalent)", "Ambident Nucleophile Switch", "R-CN  vs  R-NC", "KNO₂ → R-O-N=O | AgNO₂ → R-NO₂", "C–C bond is stronger than C–N; Ag⁺ blocks C end!"]
    },
    hinglish: "KCN ionic hai (⁻C≡N:) toh Carbon se attack karke Cyanide (R-CN) banata hai kyunki C–C bond zyada strong hota hai. AgCN covalent hai—Ag se C bandha rehta hai, toh majboori mein Nitrogen ka lone pair attack karke Isocyanide (R-NC) banata hai! Same logic: KNO₂ → Alkyl Nitrite (R-O-N=O) | AgNO₂ → Nitroalkane (R-NO₂)!",
    touches: "1° and 2° Alkyl Halides",
    ignores: "Aryl halides (except CuCN/DMF at 200°C)",
    trap: "Hydrolysis of R-CN vs R-NC Trap: R-CN + H₃O⁺ → R-COOH + NH₄⁺ (Acid is on R!), jabki R-NC (Isocyanide) + H₃O⁺ → R-NH₂ + HCOOH (R becomes 1° Amine + Formic Acid, and R-NC does NOT hydrolyze in base OH⁻)!",
    exampleText: "CH₃CH₂Br + KCN → CH₃CH₂CN | + AgCN → CH₃CH₂NC."
  },
  {
    id: "P2-04",
    tab: "P2",
    title: "NaI / Dry Acetone (Finkelstein) & AgF / SbF₃ (Swarts)",
    category: "Alkyl Halides • Halogen Exchange Reactions",
    stars: 2,
    freq: "★★ Asked 7+x",
    intermed: "SN2",
    intermedLabel: "🎯 Pure SN2 Inversion (Driven by NaCl/NaBr↓ Precipitation)",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "CH₂-Cl/Br", "NaI / Dry Acetone (Finkelstein)", "or AgF / Hg₂F₂ (Swarts → R-F)", "R — CH₂ — I (Inverted)", "+ NaCl↓ / NaBr↓ (Insoluble in Acetone)", "Le Chatelier Principle drives forward reaction!"]
    },
    hinglish: "Dry Acetone mein NaI ghul jata hai par NaCl aur NaBr precipitate (↓) ban ke baith jaate hain—isliye Le Chatelier principle se R-Cl/R-Br 100% R-I mein badal jata hai via SN2! Aur Alkyl Fluoride (R-F) banana ho toh metallic fluoride (AgF, Hg₂F₂, CoF₂, SbF₃) lagao → Swarts Reaction!",
    touches: "Alkyl Chlorides & Bromides (1° > 2°)",
    ignores: "Vinyl & Aryl Halides",
    trap: "1,2-Dibromoethane + NaI/Acetone Trap: Vicinal dihalide (-CHBr-CHBr-) pe NaI/Acetone daalne se 1,2-diiodo unstable hota hai aur I₂ nikal ke ALKENE (Debromination) ban jata hai!",
    exampleText: "(S)-2-Chlorobutane + NaI/Dry Acetone → (R)-2-Iodobutane."
  },
  {
    id: "P2-05",
    tab: "P2",
    title: "SOCl₂ (Thionyl Chloride) — Retention (SNi) vs Pyridine Inversion (SN2)",
    category: "Alcohol → Halide • Darzen's Best Method",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "SN2",
    intermedLabel: "🎯 Pure SOCl₂ = Retention (SNi) | SOCl₂ + Pyridine = Inversion (SN2)",
    svgData: {
      type: "cyclohexene_syn",
      params: ["SOCl₂ (No Base)  vs  SOCl₂ + Pyridine", "SO₂↑ + HCl↑ (Both gases escape!)", "-Cl (Retention)", "-Cl (Inversion with Pyridine!)", "Best method because SO₂↑ and HCl↑ fly away!"]
    },
    hinglish: "Alcohol se R-Cl banane ka BEST method kyunki SO₂↑ aur HCl↑ donon gas ban ke udd jaate hain! Dhyan do: Akela SOCl₂ = RETENTION of configuration (SNi). Agar saath mein PYRIDINE (C₅H₅N) likha hai → Pyridine HCl kha ke Cl⁻ free kar deta hai jo backside attack karke INVERSION (SN2) deta hai!",
    touches: "Alcohols (R-OH → R-Cl), Carboxylic Acids (R-COOH → R-COCl)",
    ignores: "Phenol (Ph-OH does NOT give Ph-Cl with SOCl₂!)",
    trap: "PCl₅ vs PCl₃ vs SOCl₂ Stereochemistry: PCl₅ aur PCl₃ chiral alcohol ke saath hamesha INVERSION (SN2) dete hain, jabki pure SOCl₂ RETENTION deta hai!",
    exampleText: "(R)-Butan-2-ol + SOCl₂ (Ether) → (R)-2-Chlorobutane | + SOCl₂/Pyridine → (S)-2-Chlorobutane."
  },
  {
    id: "P2-06",
    tab: "P2",
    title: "PCl₅ vs PCl₃ vs Red P + Br₂ / I₂",
    category: "Alcohols & Carbonyls → Halides & Gem-Dihalides",
    stars: 2,
    freq: "★★ Asked 7+x",
    intermed: "SN2",
    intermedLabel: "🎯 R-OH → R-Cl (Inversion) | Ketone/Aldehyde + PCl₅ → Gem-Dichloride (-CCl₂-)!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-OH", "or R₂C=O", "PCl₅ (gives POCl₃ + HCl)  or  PCl₃", "Inversion on Chiral Alcohol", "R-Cl (SN2)  |  R₂CCl₂ (from C=O!)", "PCl₃ + 3 ROH → 3 R-Cl + H₃PO₃", "Ketone + PCl₅ replaces =O with two -Cl atoms (Gem-dihalide)!"]
    },
    hinglish: "PCl₃ aur PCl₅ donon Alcohol (R-OH) ko R-Cl banate hain (chiral alcohol pe Inversion!). Par ek extra kaam yaad rakho: agar Aldehyde ya Ketone (C=O) pe PCl₅ daal diya, toh =O hat ke wahan do -Cl lag jaate hain (Geminal Dichloride R-CCl₂-R')!",
    touches: "Alcohols, Carboxylic Acids (→ RCOCl), Aldehydes/Ketones (PCl₅ → Gem-dichloride)",
    ignores: "Phenol + PCl₅ gives Triphenyl phosphate (PhO)₃PO as major product!",
    trap: "Byproduct Trap: ROH + PCl₅ → RCl + POCl₃ + HCl | 3 ROH + PCl₃ → 3 RCl + H₃PO₃!",
    exampleText: "Acetone (CH₃-CO-CH₃) + PCl₅ → 2,2-Dichloropropane (CH₃-CCl₂-CH₃) + POCl₃."
  },
  {
    id: "P2-07",
    tab: "P2",
    title: "Moist Ag₂O (AgOH → Alcohol) vs Dry Ag₂O, Δ (→ Ether)",
    category: "Alkyl Halides • Silver Oxide Condition Switch",
    stars: 2,
    freq: "★★ Asked 6+x",
    intermed: "SN2",
    intermedLabel: "🎯 Moist Ag₂O (H₂O) = R-OH | Dry Ag₂O, Δ = R-O-R (Ether)!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-X", "(Alkyl Halide)", "Moist Ag₂O  vs  Dry Ag₂O, Δ", "Water vs Anhydrous Switch", "Moist: R-OH  |  Dry: R-O-R", "+ AgX↓ precipitate", "In Hofmann Elimination, Moist Ag₂O converts R₄N⁺I⁻ to R₄N⁺OH⁻!"]
    },
    hinglish: "Chhota sa fark par answer badal jata hai: Moist Ag₂O (Ag₂O + H₂O = 2 AgOH) daaloge toh R-X se Alcohol (R-OH) banega! Aur agar Dry Ag₂O + Heat (Δ) daaloge toh 2 molecules R-X jud ke Symmetrical Ether (R-O-R) banayenge!",
    touches: "Alkyl Halides, Quaternary Ammonium Iodides",
    ignores: "Aryl halides",
    trap: "Chloroform (CHCl₃) + Ag Powder, Δ Trap: 2 CHCl₃ + 6 Ag (Δ) → HC≡CH (Acetylene) + 6 AgCl!",
    exampleText: "2 C₂H₅Br + Dry Ag₂O, Δ → C₂H₅-O-C₂H₅ (Diethyl ether) + 2 AgBr."
  },
  {
    id: "P2-08",
    tab: "P2",
    title: "SNAr on Haloarenes (NO₂ Effect) vs Benzyne (NaNH₂ / liq. NH₃)",
    category: "Aryl Halides • Nucleophilic Aromatic Substitution",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "Carbene",
    intermedLabel: "🧬 EWG at o/p = SNAr (Meisenheimer) | No EWG + NaNH₂ = Benzyne!",
    svgData: {
      type: "benzene_rxn",
      params: ["Cl", "NO₂ (o/p)", "Aq. NaOH (Warm)  or  NaNH₂/NH₃", "SNAr Ipso Attack vs Benzyne Cine", "OH / NH₂", "NO₂ (accelerates!)", "", "2,4,6-Trinitrochlorobenzene + warm H₂O → Picric Acid!"]
    },
    hinglish: "Normal Chlorobenzene mein C–Cl bond mein double-bond character hota hai (623 K, 300 atm lagta hai!). Par agar Ortho/Para pe -NO₂ laga do toh negative charge NO₂ mein ghoomta hai (SNAr Ipso attack)! Aur agar -NO₂ NAHI hai aur NaNH₂/liq. NH₃ daal diya toh BENZYNE intermediate banta hai (jisme Ipso + Cine donon products bante hain!).",
    touches: "Activated Haloarenes (Rate: Ar-F >> Ar-Cl > Ar-Br > Ar-I in SNAr!)",
    ignores: "Meta-nitrochlorobenzene (very slow in SNAr)",
    trap: "SNAr Halogen Order Trap: Normal SN1/SN2 mein R-I > R-Br > R-Cl > R-F hota hai, par SNAr mein Step-1 (Nucleophile attack) RDS hai, isliye Ar-F >> Ar-Cl > Ar-Br > Ar-I hota hai!",
    exampleText: "1-Fluoro-2,4-dinitrobenzene (Sanger's Reagent) reacts fastest with amino groups via SNAr."
  },
  {
    id: "P2-09",
    tab: "P2",
    title: "RMgX (Grignard Reagent) — Active-H Acid-Base vs Carbonyl Attack",
    category: "Organometallics • The Ultimate Carbon-Chain Builder",
    stars: 3,
    freq: "★★★ Asked 20+x",
    intermed: "Carbanion",
    intermedLabel: "➖ R⁻δ MgX⁺ • Rule #1: Acidic H Dekhte Hi Pehle Alkane (R-H) Banega!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R'", "H / R'' / OR''", "(i) R-MgX (Dry Ether)  (ii) H₃O⁺", "R⁻ attacks C=O, Epoxide, CO₂, RCN", "R — C(OH)(R') — R''", "HCHO→1° | RCHO→2° | Ketone/Ester→3° ROH", "Active H (-OH, -COOH, -NH₂, -SH, -C≡CH) kills RMgX → R-H!"]
    },
    hinglish: "Grignard (R⁻MgX⁺) sabse pehle KISI BHI Active H (-OH, H₂O, -COOH, -SO₃H, -NH₂, -SH, RC≡CH, Cyclopentadiene) ko chheen ke ALKANE (R-H) banata hai (Zerewitinoff Active-H count)! Agar Active H nahi hai, tab wo C=O pe attack karta hai: HCHO → 1° Alcohol; RCHO → 2° Alcohol; Ketone → 3° Alcohol; Epoxide → 2 carbon badha ke Alcohol; CO₂ → R-COOH; R'-CN → Ketone!",
    touches: "Active H (fastest!), Aldehydes, Ketones, Esters (2 eq.), Acid Chlorides (2 eq.), Epoxides, CO₂, Nitriles",
    ignores: "Isolated Alkenes, Ethers",
    trap: "Ester / Acid Chloride + RMgX Stoichiometry Trap: 1 mole R'COCl ya R'COOR'' ko poora 3° Alcohol banane mein 2 moles RMgX lagte hain (aur HCOOR' Formic Ester + 2 RMgX → 2° Alcohol R₂CH-OH deta hai)!",
    exampleText: "Ethyl formate (HCOOEt) + 2 CH₃MgBr → Isopropyl alcohol (CH₃-CH(OH)-CH₃)."
  },
  {
    id: "P2-10",
    tab: "P2",
    title: "R₂CuLi (Gilman Reagent / Corey-House) & R₂Cd",
    category: "Organometallics • Controlled Ketone & Alkane Synthesis",
    stars: 2,
    freq: "★★ Asked 6+x",
    intermed: "SN2",
    intermedLabel: "🎯 R₂CuLi + R'-X → R-R' | R₂CuLi or R₂Cd + R'COCl → Stops at KETONE!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R'-CO", "Cl (Acid Chloride)", "R₂CuLi (Gilman)  or  R₂Cd", "Selective Coupling (Does NOT attack Ketone!)", "R' — C(=O) — R (Ketone!)", "Also: R₂CuLi + C=C-C=O → 1,4-Conjugate Addition!", "Unlike RMgX, R₂CuLi and R₂Cd stop cleanly at Ketone!"]
    },
    hinglish: "Grignard (RMgX) Acid Chloride (R'COCl) ko rukne nahi deta aur seedha 3° Alcohol bana deta hai! Agar Acid Chloride ko KETONE (R'-CO-R) pe rokna ho toh Gilman Reagent (R₂CuLi) ya R₂Cd lagao! Plus, C=C–C=O (enone) pe RMgX 1,2-attack (C=O pe) karta hai, jabki R₂CuLi 1,4-conjugate addition (β-carbon pe) karta hai!",
    touches: "1°/2°/Vinyl/Aryl Halides (Corey-House), Acid Chlorides, α,β-Unsaturated Ketones",
    ignores: "Ketones, Esters",
    trap: "Wurtz vs Corey-House (R₂CuLi): Wurtz sirf symmetrical alkane (R-R) banata hai, jabki Corey-House (R₂CuLi + R'-X) se unsymmetrical alkane (R-R') high yield mein banta hai!",
    exampleText: "CH₃COCl + (CH₃CH₂)₂CuLi → Butan-2-one (CH₃-CO-CH₂CH₃)."
  },
  {
    id: "P2-11",
    tab: "P2",
    title: "Chloroform (CHCl₃) + O₂/hν (Phosgene) & DDT / Freon (NCERT Vault)",
    category: "Polyhalogen Compounds • NCERT Direct Memory Questions",
    stars: 2,
    freq: "★★ Asked 7+x in JEE Main",
    intermed: "Free Radical",
    intermedLabel: "🧪 CHCl₃ + O₂/hν → COCl₂ (Poisonous Phosgene) • Add 1% EtOH to Trap!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["CHCl₃", "+ ½ O₂ (hν / Air)", "Sunlight & Air Oxidation", "Stored in Dark Brown Bottles + 1% EtOH", "Cl — C(=O) — Cl (Phosgene!)", "EtOH converts toxic COCl₂ to harmless (EtO)₂C=O!", "Chloral + 2 Chlorobenzene + Conc. H₂SO₄ → DDT!"]
    },
    hinglish: "NCERT Polyhalogen page se 3 direct sawaal aate hain: (1) Chloroform (CHCl₃) + Air/Sunlight → जहरीली गैस Phosgene (COCl₂, Carbonyl chloride) banti hai! Isliye CHCl₃ ko dark brown bottles mein upar tak bhar ke rakhte hain aur 1% Ethanol (C₂H₅OH) milate hain jo Phosgene ko non-toxic Diethyl carbonate (EtO)₂CO mein badal deta hai! (2) DDT: Chloral (CCl₃-CHO) + 2 Chlorobenzene + Conc. H₂SO₄! (3) Freon-12: CCl₂F₂ (made from CCl₄ + SbF₃ via Swarts).",
    touches: "NCERT Environmental & Polyhalogen Section",
    ignores: "Pure CHCl₃ does not give white ppt with AgNO₃ (only after oxidation to HCl/COCl₂!)",
    trap: "AgNO₃ Test with Impure CHCl₃: Pure CHCl₃ AgNO₃ ke saath ppt NAHI deta, par hawa/dhoop mein khula CHCl₃ (jisme HCl + COCl₂ ban chuka hai) AgCl↓ white ppt de deta hai!",
    exampleText: "CHCl₃ + ½ O₂ (hν) → COCl₂ + HCl | COCl₂ + 2 EtOH → (EtO)₂C=O + 2 HCl."
  },

  // ==================== MODULE P3: ALCOHOLS, PHENOLS, ETHERS & EPOXIDES (10 CARDS) ====================
  {
    id: "P3-01",
    tab: "P3",
    title: "Conc. H₂SO₄ / Δ on Alcohols & Pinacol–Pinacolone Rearrangement",
    category: "Alcohols • E1 Dehydration & 1,2-Diol Rearrangement",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "Carbocation",
    intermedLabel: "⚡ Carbocation + Migratory Aptitude: H > Ar(EDG) > Ph > 3° > 2° > 1°",
    svgData: {
      type: "ring_expansion",
      params: ["Conc. H₂SO₄ or H₃PO₄, Δ", "More stable C⁺ forms first!", "Vicinal 1,2-Diol (Pinacol)", "Pinacolone (Ketone / Ring-Expanded C=O!)"]
    },
    hinglish: "Alcohol + Conc. H₂SO₄/Δ mein -OH protonate hoke H₂O nikalta hai → Carbocation (C⁺) banta hai → Ring expansion / H-shift / Me-shift ke baad More Stable Conjugated/Saytzeff Alkene banta hai! Aur agar 1,2-Diol (Pinacol) hai toh: Step 1: Wahan -OH hatao jahan SABSE STABLE C⁺ bane! Step 2: Bagal wale C se group migrate kara ke Ketone (Pinacolone) bana do!",
    touches: "1°, 2°, 3° Alcohols (Rate: 3° > 2° > 1°), Vicinal 1,2-Diols",
    ignores: "Phenols",
    trap: "Pinacol Trap: Unsymmetrical diol jaise Ph₂C(OH)–CH(OH)Me mein pehle Ph₂C⁺ carbocation banega (bagal se H migrate hoke Ph₂CH–CO–Me banega!). Pehle STABLE C⁺ banao, phir migratory order dekho!",
    exampleText: "Bi(cyclopentane)-1,1'-diol + Conc. H₂SO₄ → Spiro[4.5]decan-6-one (5-ring expands to 6-ring ketone!)."
  },
  {
    id: "P3-02",
    tab: "P3",
    title: "Lucas Test (Anhyd. ZnCl₂ + Conc. HCl) & Cu / 573 K (300°C)",
    category: "Alcohols • 1° vs 2° vs 3° Distinction & Dehydrogenation",
    stars: 3,
    freq: "★★★ Asked 12+x",
    intermed: "Carbocation",
    intermedLabel: "🧪 Lucas Turbidity Rate ∝ C⁺ Stability | Cu/573 K: 3° ROH → Alkene!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["1° / 2° / 3°", "Alcohol (-OH)", "Lucas (ZnCl₂/HCl)  vs  Cu / 573 K", "Distinction of 1°, 2°, 3° Alcohols", "3°=Instant Turbidity | Cu: 3°→Alkene!", "Cu/573K: 1°→Aldehyde, 2°→Ketone, 3°→Alkene!", "Allylic & Benzylic 1° alcohols ALSO give instant Lucas turbidity!"]
    },
    hinglish: "1°, 2°, 3° Alcohol pehchan-ne ke 2 superhit tests: (1) Lucas Reagent (Anhyd. ZnCl₂ + Conc. HCl): Carbocation stability pe chalta hai → 3° Alcohol (plus Allylic & Benzylic 1°!) = TURANT white turbidity (R-Cl); 2° = 5 minute mein; 1° = Room temp pe koi turbidity nahi! (2) Red Hot Cu / 573 K: 1° ROH → Aldehyde; 2° ROH → Ketone; par 3° ROH mein α-H nahi hota toh Dehydration hoke ALKENE + H₂O banta hai!",
    touches: "1°, 2°, 3° Alcohols",
    ignores: "Ethers, Phenols",
    trap: "Victor Meyer Test (Red-Blue-Colourless RBC Rule): 1° Alcohol → Red blood colour; 2° Alcohol → Blue colour; 3° Alcohol → Colourless!",
    exampleText: "tert-Butyl alcohol + Cu / 573 K → Isobutene (2-Methylpropene) + H₂O."
  },
  {
    id: "P3-03",
    tab: "P3",
    title: "PCC / PDC vs Jones (CrO₃/H₂SO₄) vs MnO₂ vs HIO₄",
    category: "Alcohols • Controlled vs Vigorous vs Selective Oxidation",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ PCC = Stops at -CHO | MnO₂ = Only Allyl/Benzyl -OH | HIO₄ = Cuts 1,2-Diols",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-CH=CH", "CH₂-OH", "PCC / CH₂Cl₂  or  MnO₂", "vs Jones (CrO₃/H₃O⁺) / KMnO₄", "R-CH=CH — CHO (Aldehyde!)", "Jones/KMnO₄ pushes 1° ROH all the way to -COOH!", "MnO₂ selectively oxidizes ONLY Allylic/Benzylic -OH!"]
    },
    hinglish: "Alcohol oxidation ke 4 hero: (1) PCC / PDC / Collin's (Anhydrous): 1° ROH ko ALDEHYDE (-CHO) pe rok deta hai! (2) Jones (CrO₃ + aq. H₂SO₄) / KMnO₄ / K₂Cr₂O₇: Paani ki wajah se 1° ROH ko seedha ACID (-COOH) bana deta hai! (3) MnO₂: Sirf Allylic aur Benzylic -OH ko C=O banata hai, normal -OH ko chhod deta hai! (4) HIO₄ (Periodic Acid): 1,2-Diols aur α-hydroxy ketones ke C–C bond ko kaat ke har cut pe ek -OH jod deta hai!",
    touches: "1° & 2° Alcohols, 1,2-Diols (HIO₄)",
    ignores: "3° Alcohols (resist oxidation)",
    trap: "HIO₄ Counting Trap in Glucose: Open-chain D-Glucose + 5 moles HIO₄ → 5 HCOOH (from C-1 to C-5) + 1 HCHO (from C-6 CH₂OH)!",
    exampleText: "Ph-CH(OH)-CH₂-CH₂-OH + MnO₂ → Ph-CO-CH₂-CH₂-OH (only benzylic -OH oxidized!)."
  },
  {
    id: "P3-04",
    tab: "P3",
    title: "Reimer-Tiemann (CHCl₃/NaOH) vs Kolbe's Reaction (CO₂/NaOH)",
    category: "Phenols • Ortho-Selective Formylation & Carboxylation",
    stars: 3,
    freq: "★★★ Asked 18+x",
    intermed: "Carbene",
    intermedLabel: "🧬 Reimer-Tiemann = :CCl₂ (Dichlorocarbene) | Kolbe = Weak CO₂ Electrophile",
    svgData: {
      type: "benzene_rxn",
      params: ["OH", "", "(i) CHCl₃ + aq. NaOH  (ii) H₃O⁺", "vs (i) CO₂ / NaOH (4-7 atm) (ii) H⁺", "OH", "CHO (R-T) / COOH (Kolbe)", "", "Ortho Major due to Intramolecular H-Bonding (Chelation)!"]
    },
    hinglish: "Phenol ke 2 sabse bade Naam-Waale reactions: (1) Reimer-Tiemann (CHCl₃ + NaOH): Electrophile Dichlorocarbene (:CCl₂, neutral, 6 e⁻) hai → Ortho pe -CHO lagta hai (Salicylaldehyde)! Agar CCl₄ + NaOH le lo toh Salicylic Acid banta hai! (2) Kolbe's Reaction (NaOPh + CO₂, 400 K): Electrophile CO₂ hai → Salicylic Acid banta hai!",
    touches: "Phenol (via super-activated Phenoxide ion Ph-O⁻), Pyrrole",
    ignores: "Anisole (Ph-OMe does not form phenoxide ion!)",
    trap: "Reimer-Tiemann with KOH vs NaOH: Na⁺ gives Ortho-major (Salicylaldehyde) via chelation, whereas larger K⁺ gives relatively higher Para-isomer!",
    exampleText: "Phenol + CCl₄ + aq. NaOH, then H₃O⁺ → Salicylic acid (o-Hydroxybenzoic acid)."
  },
  {
    id: "P3-05",
    tab: "P3",
    title: "Phenol + Br₂/H₂O vs Br₂/CS₂  &  Conc. HNO₃ vs Dil. HNO₃",
    category: "Phenols • Solvent & Concentration Switch",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "No Rearrangement",
    intermedLabel: "🧪 Br₂/H₂O = 2,4,6-Tribromo (White Ppt) | Br₂/CS₂ = p-Bromophenol Major!",
    svgData: {
      type: "benzene_rxn",
      params: ["OH", "", "Br₂ / H₂O (Polar)  vs  Br₂ / CS₂ (0°C)", "Phenoxide Ionization Switch", "OH", "Br (at 2,4,6 in H₂O!)", "Br (Only Para in CS₂!)", "Conc. HNO₃ → Picric Acid | Dil. HNO₃ → o- & p-Nitrophenol!"]
    },
    hinglish: "Paani (H₂O) mein Phenol thoda ionize hoke Phenoxide ion (Ph-O⁻) banata hai jo super-activating hai → Br₂/H₂O daalte hi 2,4,6-Tribromophenol (White Ppt) banta hai! Non-polar CS₂ / CHCl₃ mein ionization nahi hota → p-Bromophenol (Major)! Same Nitration mein: Conc. HNO₃ → Picric Acid (2,4,6-trinitrophenol); Dil. HNO₃ → o-Nitrophenol (steam volatile!) + p-Nitrophenol!",
    touches: "Phenol",
    ignores: "No Lewis acid (FeBr₃) needed!",
    trap: "p-Bromophenol Sulfonic Acid + Br₂/H₂O Trap: -SO₃H aur -COOH group Ortho/Para pe lage hon toh Br₂/H₂O unko bhi Ipso-replace karke 2,4,6-Tribromophenol bana deta hai!",
    exampleText: "o-Nitrophenol has Intramolecular H-bonding (lower b.p., steam volatile) vs p-Nitrophenol (Intermolecular H-bonding)."
  },
  {
    id: "P3-06",
    tab: "P3",
    title: "Phenol + Zn Dust (Δ), Na₂Cr₂O₇/H₂SO₄ & Salicylic Acid Trio (Aspirin/Salol)",
    category: "Phenols • Reduction, Quinone Oxidation & Drug Synthesis",
    stars: 3,
    freq: "★★★ Asked 11+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Zn Dust → Benzene | Na₂Cr₂O₇ → p-Benzoquinone | Ac₂O → Aspirin!",
    svgData: {
      type: "benzene_rxn",
      params: ["OH", "COOH (Salicylic)", "Zn Dust, Δ  OR  Ac₂O / H⁺", "Phenol & Salicylic Acid Classics", "H (with Zn) / OAc (Aspirin!)", "COOH", "", "MeOH/H⁺ → Oil of Wintergreen | PhOH/POCl₃ → Salol!"]
    },
    hinglish: "Phenol & Salicylic acid ke 5 rapid-fire reactions: (1) Phenol + Zn dust, Δ → Benzene + ZnO. (2) Phenol + Na₂Cr₂O₇ / H₂SO₄ → p-Benzoquinone (conjugated diketone). (3) Salicylic Acid + Ac₂O / H⁺ → Phenolic -OH acetylate hoke Aspirin (2-Acetoxybenzoic acid) banata hai! (4) Salicylic Acid + CH₃OH / H⁺ → -COOH esterify hoke Methyl Salicylate (Oil of Wintergreen / Iodex) banata hai! (5) Phenol + Phthalic Anhydride / Conc. H₂SO₄ → Phenolphthalein!",
    touches: "Phenol, Salicylic Acid",
    ignores: "Aliphatic alcohols do not react with Zn dust!",
    trap: "Aspirin + NaHCO₃ vs Neutral FeCl₃ Trap: Aspirin mein -COOH free hai toh NaHCO₃ test (CO₂↑) POSITIVE deta hai, par phenolic -OH acetylated (-OAc) hai toh Neutral FeCl₃ violet test NEGATIVE deta hai!",
    exampleText: "Methyl salicylate (Oil of Wintergreen) has free phenolic -OH → gives Violet colour with Neutral FeCl₃!"
  },
  {
    id: "P3-07",
    tab: "P3",
    title: "Williamson Ether Synthesis & HI Cleavage of Ethers",
    category: "Ethers • SN2 Preparation vs SN1/SN2 Cleavage",
    stars: 3,
    freq: "★★★ Asked 17+x",
    intermed: "SN2",
    intermedLabel: "🎯 Williamson Needs 1° R-X | ⚡ HI Cleavage: 3°/Benzyl → SN1 (R-I), else SN2!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["Ph / Me₃C", "O — CH₃", "Anhydrous HI (1 eq. vs Excess)", "Cleavage of Mixed Ethers", "Ph-OH + CH₃-I  |  Me₃C-I + CH₃OH", "Anisole ALWAYS gives Phenol + CH₃I!", "3°/Benzylic/Allylic group takes I⁻ (SN1); otherwise smaller group takes I⁻ (SN2)!"]
    },
    hinglish: "Ether ke 2 Golden Rules: (1) Williamson Synthesis (R-O⁻Na⁺ + R'-X): Ye pure SN2 hai! Isliye Halide (R'-X) HAMESHA 1° hona chahiye! Agar 3° Halide (Me₃C-Br + EtO⁻Na⁺) le liya toh Ether nahi, Elimination hoke Isobutene ban jayega! (2) Ether + HI Cleavage: Pehle O pe H⁺ chipkao. Ab dekho: agar donon taraf 1°/2° hain toh I⁻ CHHOTE (less crowded) group pe marega (SN2). Par agar ek taraf 3° butyl, Benzylic, ya Allylic hai toh SN1 hoke I⁻ usi 3°/Benzylic group ko milega! Aur Ph–O bond kabhi nahi toot-ta (Anisole + HI → Phenol + CH₃I ALWAYS)!",
    touches: "Symmetrical & Mixed Ethers",
    ignores: "Diphenyl ether (Ph-O-Ph is inert to HI!)",
    trap: "Excess HI (Hot Conc. HI) Trap: Agar R-O-R' + Excess HI (Δ) likha ho, toh pehle banne wala Alcohol (R'-OH) bhi aage HI se react karke donon taraf Alkyl Iodide (R-I + R'-I) bana deta hai (सिवाय Phenol ke—Ph-OH kabhi Ph-I nahi banta)!",
    exampleText: "Me₃C-O-CH₂CH₃ + 1 eq. Anhyd. HI → Me₃C-I + CH₃CH₂OH."
  },
  {
    id: "P3-08",
    tab: "P3",
    title: "Epoxide Ring Opening: Basic / Nucleophilic (SN2) vs Acidic (SN1-like)",
    category: "Epoxides • Regioselective 3-Membered Ring Cleavage",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "SN2",
    intermedLabel: "🎯 Basic (RO⁻/RMgX) → Less Crowded C | ⚡ Acidic (H⁺/ROH) → More Substituted δ⁺ C!",
    svgData: {
      type: "epoxide_open",
      params: ["Basic (MeO⁻/MeOH) vs Acidic (H⁺/MeOH)", "Stereochemistry is ALWAYS Anti (Inversion)!", "Acidic: Nu attacks 3° C | Basic: Nu attacks 1° C!", "OH (Basic) / OMe (Acidic)", "OMe (Basic) / OH (Acidic)", "Basic = Steric Control (1° C) | Acidic = Electronic δ⁺ Control (3° C)!"]
    },
    hinglish: "Epoxide ring खोलने ka 10-second rule: (1) Basic / Anionic Medium (CH₃O⁻/CH₃OH, OH⁻, RMgX, LiAlH₄, CN⁻): Nucleophile bheed se darta hai → Sabse KAM crowded (1°) carbon pe attack karta hai! (2) Acidic Medium (H⁺/CH₃OH, H₃O⁺, HBr): Pehle O pe H⁺ lagta hai jisse ZYADA substituted (3° / Benzylic) carbon pe bada +δ aata hai → Nucleophile usi 3°/Benzylic carbon pe attack karta hai!",
    touches: "Unsymmetrical Epoxides (Oxiranes)",
    ignores: "Normal open-chain ethers in mild base",
    trap: "LiAlD₄ vs D₂O on Unsymmetrical Epoxide: LiAlD₄ mein D⁻ nucleophile hai toh 1° (less crowded) carbon pe D lagta hai aur 3° carbon pe -OH banta hai!",
    exampleText: "Propylene oxide + (i) CH₃MgBr (ii) H₃O⁺ → Butan-2-ol (CH₃ attacks terminal CH₂!)."
  },
  {
    id: "P3-09",
    tab: "P3",
    title: "Cumene Process (O₂ then H₃O⁺) & Claisen Allyl Phenyl Ether Rearrangement",
    category: "Phenols • Industrial Synthesis & [3,3]-Sigmatropic Shift",
    stars: 2,
    freq: "★★ Asked 8+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Cumene → Phenol + Acetone | Allyl Phenyl Ether ──Δ──► o-Allylphenol!",
    svgData: {
      type: "benzene_rxn",
      params: ["CH(CH₃)₂", "", "(i) O₂ (Air)  (ii) Dil. H₂SO₄", "Industrial Cumene Hydroperoxide Route", "OH (Phenol)", "Allyl (in Claisen Δ)", "", "+ CH₃-CO-CH₃ (Acetone Valuable Byproduct!)"]
    },
    hinglish: "(1) Cumene Process: Isopropylbenzene + O₂ → Cumene hydroperoxide Ph-C(Me)₂-O-O-H ──H₃O⁺──► Phenol + Acetone (Phenyl migrates to Electron-Deficient Oxygen!). (2) Claisen Rearrangement: Allyl phenyl ether (Ph-O-CH₂-CH=CH₂) ko 200°C pe heat (Δ) karo → बिना किसी बाहरी reagent ke γ-carbon Ortho position pe jud ke o-Allylphenol banata hai (agar donon Ortho blocked hon toh Para pe jata hai)!",
    touches: "Cumene, Allyl aryl ethers",
    ignores: "Saturated alkyl phenyl ethers do not undergo Claisen rearrangement",
    trap: "Isotopic ¹⁴C Labelling Trap in Claisen Rearrangement: Ph-O-CH₂-CH=¹⁴CH₂ ko heat karne pe Ortho carbon se ¹⁴CH₂ judta hai (Allyl chain पलट जाती है via 6-membered cyclic TS; अगर Para pe dobara gaya toh wapas सीधा हो जाता है)!",
    exampleText: "Ph-O-CH₂-CH=¹⁴CH₂ ──200°C──► o-(¹⁴CH₂-CH=CH₂)-C₆H₄-OH."
  },
  {
    id: "P3-10",
    tab: "P3",
    title: "Acidity Order Vault: Substituted Phenols vs Carboxylic Acids (NCERT pKa)",
    category: "Phenols & Acids • Electronic Effects & Ortho-Effect",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "Carbanion",
    intermedLabel: "⚡ Ortho-Substituted Benzoic Acid is ALWAYS Stronger than p- & m- (Ortho Effect!)",
    svgData: {
      type: "benzene_rxn",
      params: ["OH / COOH", "NO₂ / Me / OMe", "Acidity (Ka) & pKa Order Rules", "Picric > RCOOH > H₂CO₃ > Phenol > H₂O > ROH", "O⁻ / COO⁻ Stability", "", "", "Nitrophenols: p > o > m > Phenol | Cresols: Phenol > m > p > o!"]
    },
    hinglish: "Acidity (Ka ↑ means pKa ↓) ke 4 पक्के Orders: (1) Overall Order: SO₃H > Picric Acid > HCOOH > PhCOOH > Acetic Acid > H₂CO₃ (NaHCO₃!) > p-Nitrophenol > Phenol > H₂O > ROH (except MeOH > H₂O) > HC≡CH > NH₃. (2) Nitrophenols: Para > Ortho > Meta > Phenol (Ortho mein intramolecular H-bonding H⁺ ko thoda pakad ke rakhti hai!). (3) Cresols (-CH₃): Phenol > Meta > Para > Ortho. (4) Ortho Effect in Benzoic Acids: Koi bhi group (-NO₂, -Cl, -OH, -Me) Ortho pe aate hi steric inhibition of resonance se o-Substituted Benzoic Acid ko Benzoic Acid se ZYADA acidic bana deta hai!",
    touches: "Phenols, Benzoic Acids, Aliphatic Acids",
    ignores: "No ortho effect in Phenols!",
    trap: "Hydroxybenzoic Acids Acidity Order: o-Hydroxybenzoic acid (Salicylic acid, chelation stabilizes COO⁻!) > m-Hydroxybenzoic acid (-I only) > Benzoic acid > p-Hydroxybenzoic acid (+M decreases acidity)!",
    exampleText: "pKa order (lowest to highest): o-Nitrobenzoic acid < p-Nitrobenzoic acid < m-Nitrobenzoic acid < Benzoic acid."
  },

  // ==================== MODULE P4: ALDEHYDES & KETONES (9 CARDS) ====================
  {
    id: "P4-01",
    tab: "P4",
    title: "Nucleophilic Addition: HCN, NaHSO₃, Ketals & 2,4-DNP / Semicarbazide",
    category: "Aldehydes & Ketones • Carbonyl Additions & Derivatives",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "No Rearrangement",
    intermedLabel: "🎯 Rate ∝ +δ on Carbonyl C & 1/Steric Crowding (HCHO > RCHO > Ketone)",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "H / CH₃", "NH₂-Z (pH 3.5) / 2,4-DNP / Glycol", "Nucleophilic Addition-Elimination", "R — C(=N-Z) — H/CH₃", "2,4-DNP = Orange/Red ppt | Glycol = Cyclic Ketal", "Semicarbazide (NH₂-NH-CO-NH₂): Non-amide -NH₂ attacks!"]
    },
    hinglish: "Carbonyl (C=O) pe Nucleophilic Addition ka rate: HCHO > CH₃CHO > PhCHO > CH₃COCH₃ > PhCOCH₃ > PhCOPh. 4 Must-Know Points: (1) 2,4-DNP (Brady's Test): Har Aldehyde & Ketone Orange-Red ppt deta hai. (2) Semicarbazide Trap (NH₂–NH–CO–NH₂): Isme do -NH₂ hain, par C=O ke bagal wala -NH₂ resonance mein busy hai, isliye door wala (-NH-NH₂) attack karta hai! (3) NaHSO₃: Sirf Aldehydes aur Methyl Ketones white crystalline bisulfite adduct dete hain. (4) Ethylene Glycol / Dry HCl: Cyclic Ketal bana ke C=O ko protect karta hai!",
    touches: "Aldehydes & Ketones",
    ignores: "Esters, Carboxylic Acids, Alcohols",
    trap: "pH Trap in NH₂-Z Reactions: pH ~ 3.5 optimal hota hai! Zyada strong acid (pH < 1) daaloge toh NH₂-Z protonate hoke NH₃⁺-Z ban jayega aur nucleophile hi mar jayega!",
    exampleText: "Cyclohexanone + Semicarbazide → Cyclohexanone semicarbazone (=N-NH-CO-NH₂)."
  },
  {
    id: "P4-02",
    tab: "P4",
    title: "Clemmensen (Zn-Hg / Conc. HCl) vs Wolff-Kishner (NH₂NH₂ / KOH, Δ)",
    category: "Aldehydes & Ketones • Complete C=O → -CH₂- Deoxygenation",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "Carbanion",
    intermedLabel: "🛡️ Acid-Sensitive Group Present → Use Wolff-Kishner! | Base-Sensitive → Clemmensen!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "R'", "Zn-Hg / Conc. HCl  OR  N₂H₄ / KOH, Glycol", "Deoxygenation of Aldehyde / Ketone", "R — CH₂ — R' (Alkane)", "C=O completely replaced by two H atoms!", "Check other groups on the molecule before choosing!"]
    },
    hinglish: "Donon ka kaam ek hi hai: Aldehyde/Ketone ke C=O ko uda ke -CH₂- (Alkane) banana! Par exam mein selection kaise karoge? Agar molecule mein Acid-Sensitive group (-OH, C=C alkene, Acetal/Ketal, Epoxide) laga hai toh galti se bhi Clemmensen (Conc. HCl) mat lagana warna -OH → -Cl ban jayega—wahan Wolff-Kishner (Basic) lagao! Aur agar Base-Sensitive group (-Cl, -Br, Ester -COOR) laga hai toh Clemmensen lagao!",
    touches: "Aldehydes and Ketones ONLY (C=O → -CH₂-)",
    ignores: "Carboxylic Acids (-COOH), Esters (-COOR), Amides",
    trap: "Mozingo Reduction (3rd Neutral Option): Agar molecule mein Acid-sensitive (-OH) AUR Base-sensitive (-Br/Ester) DONON lage hon, toh HS-CH₂-CH₂-SH / H⁺ followed by Raney Ni / H₂ (Mozingo) use karte hain!",
    exampleText: "4-Hydroxycyclohexanone + NH₂NH₂/KOH, Δ → Cyclohexanol | + Zn-Hg/conc. HCl → 4-Chlorocyclohexane!"
  },
  {
    id: "P4-03",
    tab: "P4",
    title: "Aldol Condensation (Dil. NaOH / Δ) — Simple, Crossed & Intramolecular",
    category: "Aldehydes & Ketones • α-Hydrogen Enolate Reaction",
    stars: 3,
    freq: "★★★ Asked 22+x",
    intermed: "Carbanion",
    intermedLabel: "➖ Enolate Carbanion • E1cb Dehydration → α,β-Unsaturated C=O!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-CH₂", "CH=O", "(i) Dil. NaOH (10%)  (ii) Δ (-H₂O)", "Needs at least ONE α-H!", "C=C — C=O (Conjugated Enone)", "β-Hydroxy carbonyl (Aldol) ──Δ──► α,β-Unsat. C=O", "Intramolecular Aldol ALWAYS prefers 5- or 6-membered rings!"]
    },
    hinglish: "Condition: कम से कम एक α-H hona chahiye! 10-Sec Trick to Draw Final Product: Ek molecule ka C=O ka Oxygen aur doosre molecule ke α-Carbon ke दो H nikaal ke paani (-H₂O) uda do aur donon ko C=C double bond se jod do! Intramolecular Aldol (Dicarbonyls): Agar Ozonolysis ke baad 1,4- ya 1,5- ya 1,6-dicarbonyl mile, toh hamesha 5-membered ya 6-membered ring banana (kabhi 3, 4, ya 7-membered ring mat banana!).",
    touches: "Aldehydes & Ketones having α-H",
    ignores: "HCHO, PhCHO, Me₃C-CHO, PhCOPh (No α-H → give Cannizzaro)",
    trap: "Claisen-Schmidt Reaction (Ph-CHO + CH₃-CO-R / OH⁻, Δ): Ph-CHO ke paas α-H nahi hai par C=O zyada electrophilic hai, toh Ketone ka enolate humesha Ph-CHO pe attack karke Ph-CH=CH-CO-R banata hai!",
    exampleText: "2 Acetone + Ba(OH)₂ → Diacetone alcohol ──Δ──► Mesityl oxide (Me₂C=CH-CO-Me)."
  },
  {
    id: "P4-04",
    tab: "P4",
    title: "Cannizzaro Reaction (Conc. 50% NaOH / KOH)",
    category: "Aldehydes without α-H • Disproportionation (Redox)",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "Carbanion",
    intermedLabel: "➖ Hydride (H⁻) Transfer is RDS • 1 Oxidized (-COO⁻) + 1 Reduced (-CH₂OH)",
    svgData: {
      type: "benzene_rxn",
      params: ["CHO", "", "Conc. 50% NaOH (No α-H!)", "Hydride Transfer (RDS)", "COO⁻Na⁺ + Ar-CH₂OH", "(1 Mole Oxidized + 1 Mole Reduced)", "", "Crossed Cannizzaro: HCHO ALWAYS becomes HCOO⁻Na⁺!"]
    },
    hinglish: "Jin Aldehydes ke paas ZERO α-H hota hai (HCHO, PhCHO, Me₃C-CHO, Furfural, Glyoxal CHO-CHO) unme Conc. 50% NaOH daalne pe 1 molecule OXIDIZE hoke Acid Salt (-COO⁻Na⁺) aur 1 molecule REDUCE hoke Alcohol (-CH₂OH) banata hai! Crossed Cannizzaro Golden Rule: Jiske C=O pe +δ zyada aur bheed kam (jaise HCHO ya EWG-substituted PhCHO), uspe OH⁻ pehle attack karega → wahi OXIDIZE (HCOO⁻Na⁺) hoga aur doosra Alcohol banega!",
    touches: "Aldehydes lacking α-H (and α-keto aldehydes like Ph-CO-CHO → Intramolecular Cannizzaro!)",
    ignores: "Ketones without α-H (like PhCOPh)",
    trap: "Glyoxal (CHO–CHO) & Phenylglyoxal (Ph-CO-CHO) Intramolecular Cannizzaro: CHO-CHO + Conc. NaOH → HO-CH₂-COO⁻Na⁺; Ph-CO-CHO + Conc. NaOH → Ph-CH(OH)-COO⁻Na⁺ (Mandate salt)!",
    exampleText: "Ph-CHO + HCHO + Conc. NaOH → Ph-CH₂OH (Benzyl alcohol) + HCOO⁻Na⁺ (Sodium formate)."
  },
  {
    id: "P4-05",
    tab: "P4",
    title: "Haloform / Iodoform Test (I₂ + NaOH or NaOI)",
    category: "Aldehydes, Ketones & Alcohols • Methyl Ketone Yellow Ppt Test",
    stars: 3,
    freq: "★★★ Asked 20+x",
    intermed: "Carbanion",
    intermedLabel: "🧪 Gives Yellow Ppt of CHI₃↓ with CH₃-C=O and CH₃-CH(OH)- Groups!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R", "CH₃", "(i) I₂ + NaOH (or NaOI)  (ii) H₃O⁺", "Cleaves CH₃—C=O bond!", "CHI₃↓ (Yellow Ppt) + R-COO⁻Na⁺", "Also positive for Ethanol & CH₃-CH(OH)-R!", "Does NOT oxidize C=C double bonds!"]
    },
    hinglish: "I₂ + NaOH (Yellow Ppt of CHI₃↓) kaun-kaun deta hai? (1) Har CH₃–C(=O)–R (Acetaldehyde + saare Methyl Ketones). (2) Har CH₃–CH(OH)–R alcohol (Ethanol + saare methyl secondary alcohols). (3) Active methylene R-CO-CH₂-CO-R' aur β-keto acids! Trap: Acetic acid (CH₃COOH), Ester (CH₃COOR), Acetyl chloride (CH₃COCl), aur Acetamide (CH₃CONH₂) Iodoform test NAHI dete!",
    touches: "CH₃-CHO, CH₃-CO-R, CH₃-CH₂OH, CH₃-CH(OH)-R, Ph-CO-CH₂-Br",
    ignores: "CH₃COOH, CH₃COOEt, CH₃CONH₂, CH₃COCl, HCHO, Pentan-3-one",
    trap: "Resorcinol (1,3-Dihydroxybenzene) & Phloroglucinol (1,3,5-Trihydroxybenzene) Trap: Ye donon basic medium mein keto-form (-CO-CH₂-CO-) mein tautomerize hoke POSITIVE Iodoform Test dete hain!",
    exampleText: "Me₂C=CH-CO-CH₃ + NaOI → Me₂C=CH-COONa + CHI₃↓ (Yellow ppt; double bond stays safe!)."
  },
  {
    id: "P4-06",
    tab: "P4",
    title: "Wittig (Ph₃P=CR₂), Baeyer-Villiger (mCPBA) & Beckmann Rearrangement",
    category: "Aldehydes & Ketones • Advanced Carbonyl Conversions",
    stars: 3,
    freq: "★★★ Asked 11+x",
    intermed: "No Rearrangement",
    intermedLabel: "🎯 Wittig: C=O → C=CR₂ | Baeyer-Villiger: Inserts -O- | Beckmann: Anti Group Migrates",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R (3°/Ph)", "R' (Me/1°)", "Ph₃P=CH₂ (Wittig)  OR  mCPBA (B-V)", "OR NH₂OH then H⁺ (Beckmann)", "Wittig: C=CH₂ | B-V: R-O-CO-R'", "Beckmann: Oxime → Amide (Anti group shifts to N!)", "B-V Migratory Order: H > 3° > 2° ≈ Ph > 1° > Me!"]
    },
    hinglish: "3 Super-Useful Reactions: (1) Wittig (Ph₃P=CR₂): C=O ka 'O' hatao aur seedha =CR₂ chipka ke Alkene bana do! (2) Baeyer-Villiger (Ketone + mCPBA / CF₃CO₃H): C=O ke bagal mein ek '-O-' ghusa do (Ketone → Ester; Cyclic Ketone → Lactone)! Kis side '-O-' ghusega? Jiska Migratory Aptitude zyada: H > 3° > Cyclohexyl > 2° ≈ Ph > 1° > CH₃! (3) Beckmann (Oxime + H₂SO₄ / PCl₅): Oxime (=N-OH) mein -OH ke ANTI (opposite) wala group uth ke N pe chala jata hai aur Amide (-NH-CO-) banta hai!",
    touches: "Aldehydes & Ketones",
    ignores: "Ethers, Alkanes",
    trap: "Aldehyde + mCPBA (Baeyer-Villiger): Aldehyde (R-CHO) mein H ki migratory aptitude sabse zyada hoti hai, isliye -O- H ke taraf ghusta hai → Carboxylic Acid (R-COOH) banta hai!",
    exampleText: "Acetophenone (Ph-CO-CH₃) + mCPBA → Phenyl acetate (Ph-O-CO-CH₃)."
  },
  {
    id: "P4-07",
    tab: "P4",
    title: "Rosenmund (H₂/Pd-BaSO₄), Stephen (SnCl₂/HCl) & Etard (CrO₂Cl₂)",
    category: "Aldehydes • Named Aldehyde Preparation Methods",
    stars: 3,
    freq: "★★★ Asked 15+x (NCERT Named Reactions)",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Rosenmund: RCOCl→RCHO | Stephen: RCN→RCHO | Etard: PhCH₃→PhCHO!",
    svgData: {
      type: "benzene_rxn",
      params: ["CH₃ / COCl / CN", "", "CrO₂Cl₂/CS₂ (Etard) | H₂/Pd-BaSO₄ | SnCl₂/HCl", "vs CO + HCl / AlCl₃-CuCl (Gattermann-Koch)", "CHO (Aldehyde!)", "", "", "Also: Ph-Me + CrO₃ + Ac₂O → Ph-CH(OAc)₂ ──H₃O⁺──► Ph-CHO!"]
    },
    hinglish: "Aldehyde banane ke 4 NCERT Named Reactions: (1) Rosenmund (R-COCl + H₂ / Pd-BaSO₄): Acid chloride → Aldehyde (Note: HCHO cannot be made because HCOCl is unstable at room temp!). (2) Stephen (R-CN + SnCl₂/HCl, then H₃O⁺): Cyanide → Imine salt → Aldehyde! (3) Etard (Toluene + CrO₂Cl₂ / CS₂, then H₃O⁺): Toluene → Brown Chromium Complex → Benzaldehyde (Ph-CHO)! (4) Gattermann-Koch (Benzene + CO + HCl / Anhyd. AlCl₃, CuCl): Benzene → Benzaldehyde!",
    touches: "Acid Chlorides, Nitriles, Toluene, Benzene",
    ignores: "Ketones cannot be made by Stephen or Etard (Propylbenzene + CrO₂Cl₂ oxidizes benzylic CH₂ to Ph-CO-CH₂CH₃!)",
    trap: "Side-Chain Chlorination of Toluene (Cl₂/hν → Benzal chloride Ph-CHCl₂ → H₂O/373 K → Ph-CHO): Ye commercial method hai Benzaldehyde banane ka!",
    exampleText: "Benzoyl chloride (Ph-COCl) + H₂ / Pd-BaSO₄ → Benzaldehyde (Ph-CHO)."
  },
  {
    id: "P4-08",
    tab: "P4",
    title: "SeO₂ (Selenium Dioxide) — Active α-CH₂ → C=O Oxidation",
    category: "Aldehydes & Ketones • Riley Oxidation to 1,2-Dicarbonyl",
    stars: 2,
    freq: "★★ Asked 6+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Converts -CO-CH₂- into -CO-CO- (1,2-Dicarbonyl)!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-CO", "CH₂-R'", "SeO₂ (Selenium Dioxide)", "Oxidizes α-CH₂ or α-CH₃ next to C=O", "R — CO — CO — R' (1,2-Diketone)", "CH₃-CHO + SeO₂ → CHO-CHO (Glyoxal)!", "Does NOT touch non-alpha CH₂ groups!"]
    },
    hinglish: "SeO₂ ka ek hi nishana hai: Aldehyde ya Ketone ke बगल वाले α-CH₂ (ya α-CH₃) ko doosre C=O mein badal dena! Jaise CH₃-CHO (Acetaldehyde) + SeO₂ → CHO-CHO (Glyoxal); Ph-CO-CH₃ (Acetophenone) + SeO₂ → Ph-CO-CHO (Phenylglyoxal) (jo aage Conc. NaOH ke saath Intramolecular Cannizzaro deta hai!).",
    touches: "Aldehydes/Ketones with α-CH₂/CH₃; Allylic positions",
    ignores: "Ketones without α-CH₂/CH₃",
    trap: "SeO₂ + Conc. NaOH Combo Trap: JEE Main loves giving Ph-CO-CH₃ ──(i) SeO₂ (ii) Conc. NaOH (iii) H₃O⁺──► Ph-CH(OH)-COOH (Mandelic acid)!",
    exampleText: "Cyclohexanone + SeO₂ → Cyclohexane-1,2-dione."
  },
  {
    id: "P4-09",
    tab: "P4",
    title: "Tollen's Reagent vs Fehling's / Benedict's Solution",
    category: "Aldehydes & Ketones • Mild Oxidizing Distinction Tests",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "POC",
    intermedLabel: "🧪 Tollen's = Silver Mirror (Ag↓) | Fehling's = Red Cu₂O↓ (Fails for PhCHO!)",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R / Ph", "CH=O", "[Ag(NH₃)₂]⁺OH⁻  vs  Cu²⁺ (Fehling A+B)", "Distinction: Aliphatic vs Aromatic Aldehyde", "Tollen's: Both RCHO & PhCHO ✓", "Fehling's: RCHO ✓ (Red Cu₂O↓) | PhCHO ❌ NO!", "Formic Acid (HCOOH) & α-Hydroxy Ketones ALSO give Tollen's!"]
    },
    hinglish: "Aldehyde vs Ketone (aur R-CHO vs Ph-CHO) ka sabse bada test: (1) Tollen's Reagent ([Ag(NH₃)₂]⁺OH⁻): Aliphatic Aldehyde (RCHO) AUR Aromatic Aldehyde (PhCHO) donon Silver Mirror (Ag↓) dete hain! Plus Formic Acid (HCOOH), α-Hydroxy Ketones (Fructose, Benzoin), Hemiacetals (Glucose), aur Phenylhydroxylamine (Ph-NHOH) bhi Tollen's positive dete hain! (2) Fehling's / Benedict's (Cu²⁺ → Red Cu₂O↓): Aliphatic Aldehyde deta hai, par Benzaldehyde (PhCHO) Fehling's test NAHI deta!",
    touches: "Aldehydes, HCOOH, α-Hydroxy Ketones, Reducing Sugars",
    ignores: "Simple Ketones, Carboxylic Acids (except HCOOH)",
    trap: "Fehling's Solution Composition (NCERT): Fehling A = Aqueous CuSO₄; Fehling B = Alkaline Sodium Potassium Tartrate (Rochelle Salt)! Benedict's uses Citrate instead of Tartrate!",
    exampleText: "Acetaldehyde vs Benzaldehyde distinction: Fehling's gives red ppt (Cu₂O) with CH₃CHO, no reaction with PhCHO."
  },

  // ==================== MODULE P5: ACIDS, AMINES & DIAZONIUM BDC (8 CARDS) ====================
  {
    id: "P5-01",
    tab: "P5",
    title: "NaHCO₃ Test, HVZ (Red P + Br₂), Soda-Lime & Perkin Reaction",
    category: "Carboxylic Acids • Core Acid Reactions & Decarboxylation",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "Carbanion",
    intermedLabel: "🧪 NaHCO₃ (CO₂↑) | HVZ = α-Bromo Acid | Soda-Lime Rate ∝ Carbanion R⁻ Stability!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R-CH₂", "COOH", "Red P + Br₂ (HVZ)  OR  NaOH + CaO, Δ", "α-Halogenation vs Decarboxylation", "HVZ: R-CH(Br)-COOH | Soda-Lime: R-CH₃", "β-Keto Acids (R-CO-CH₂-COOH) lose CO₂ just on heating Δ!", "Picric Acid (2,4,6-trinitrophenol) ALSO gives CO₂↑ with NaHCO₃!"]
    },
    hinglish: "Carboxylic Acids ke 4 pillars: (1) NaHCO₃ Effervescence Test: -COOH, -SO₃H, aur Picric Acid CO₂↑ dete hain (Normal Phenol NAHI deta! Aur nikalne wali CO₂ gas NaHCO₃ ke carbon se aati hai!). (2) HVZ (Red P + Cl₂/Br₂, then H₂O): Acid ke α-Carbon ka H hata ke α-halo acid banata hai! (3) Soda-Lime (NaOH + CaO, Δ): -COOH uda ke R-H banata hai; Rate ∝ Stability of Carbanion R⁻! (4) β-Keto Acid & Gem-Dicarboxylic Acid (Malonic acid): Bina NaOH ke sirf गर्म (Δ) karne pe CO₂↑ chhod dete hain!",
    touches: "Carboxylic Acids (-COOH)",
    ignores: "Esters (in HVZ)",
    trap: "Perkin Reaction Trap: Ph-CHO + (CH₃CO)₂O + CH₃COONa, Δ → Ph-CH=CH-COOH (Cinnamic acid)! Yaad rakhna: Anhydride ka α-carbon attack karta hai, salt sirf base hai!",
    exampleText: "Ph-CO-CH₂-COOH ──Δ──► Acetophenone (Ph-CO-CH₃) + CO₂↑."
  },
  {
    id: "P5-02",
    tab: "P5",
    title: "Kolbe's Electrolysis (Aq. RCOOK) & Esterification / Derivative Order",
    category: "Carboxylic Acids & Derivatives • Free Radical Dimers & Acyl Substitution",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "Free Radical",
    intermedLabel: "🔥 Kolbe Anode: R• Coupling + CO₂↑ | Acyl Order: RCOCl > Anhydride > Ester > Amide!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["2 R-COO⁻K⁺", "+ 2 H₂O", "Electrolysis (Kolbe)  vs  R'OH / H⁺ (Fischer)", "Anode Free Radical vs Nucleophilic Acyl Sub.", "Anode: R—R + 2 CO₂↑ | Cathode: H₂↑ + KOH", "Fischer Esterification: Acyl C—OH breaks, Alcohol O—H breaks!", "Reactivity: RCOCl > (RCO)₂O > RCOOR' > RCONH₂!"]
    },
    hinglish: "(1) Kolbe's Electrolysis (Aq. RCOO⁻K⁺): Anode pe R• free radical banta hai → R–R + 2 CO₂↑ (pH of solution INCREASES because Cathode pe H₂↑ + KOH banta hai! Methane cannot be made!). (2) Fischer Esterification (RCOOH + R'¹⁸OH / H⁺): Acid ka -OH aur Alcohol ka -H nikalta hai (¹⁸O stays inside the Ester R-CO-¹⁸OR'!). Rate ∝ 1 / Steric Crowding (HCOOH > CH₃COOH > RCH₂COOH > R₂CHCOOH > R₃CCOOH). (3) Acid Derivative Reactivity: R-COCl > (RCO)₂O > R-COOR' > R-CONH₂!",
    touches: "Carboxylate salts, Carboxylic acids, Acid derivatives",
    ignores: "Formate salt (HCOOK) gives H₂ at anode",
    trap: "Potassium Maleate vs Fumarate Electrolysis: Potassium Succinate (⁻OOC-CH₂-CH₂-COO⁻) gives Ethene (CH₂=CH₂) at anode; Potassium Maleate/Fumarate gives Acetylene (HC≡CH) at anode!",
    exampleText: "2 CH₃COOK + 2 H₂O ──Electrolysis──► C₂H₆ + 2 CO₂ (Anode) + H₂ + 2 KOH (Cathode)."
  },
  {
    id: "P5-03",
    tab: "P5",
    title: "Hoffmann Bromamide (Br₂/KOH) + Curtius / Schmidt / Lossen Rearrangements",
    category: "Amines • Stepping-Down via Alkyl Isocyanate (R-N=C=O)",
    stars: 3,
    freq: "★★★ Asked 18+x",
    intermed: "Carbene",
    intermedLabel: "🧬 Acyl Nitrene → Alkyl Isocyanate (R-N=C=O) • 100% Retention of Chirality!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R*", "CONH₂", "Br₂ + 4 KOH (or NaOBr), Δ", "Intermediate: R-N=C=O (Isocyanate)", "R* — NH₂ (1° Amine, 1 Less C!)", "Curtius (RCON₃/Δ) & Schmidt (RCOOH + HN₃/H⁺) also give R-NH₂!", "Intramolecular migration → Chiral R* retains configuration!"]
    },
    hinglish: "Primary Amide (R–CO–NH₂) mein Br₂ + 4 KOH daalte hi beech ka C=O gayab ho jata hai aur seedha R–NH₂ (1 carbon kam wala 1° Amine) banta hai! Sequence: Amide → N-Bromoamide → Nitrene → Alkyl Isocyanate (R–N=C=O) → R–NH₂! Usi bhai-biradari ke 2 aur: Curtius (R-COCl + NaN₃ → R-CON₃ ──Δ, H₂O──► R-NH₂) aur Schmidt (R-COOH + HN₃ / Conc. H₂SO₄ → R-NH₂) — sabme Isocyanate (R-N=C=O) aur Retention hota hai!",
    touches: "1° Amides (R-CONH₂), Acyl Azides (R-CON₃), Carboxylic Acids (with HN₃)",
    ignores: "2° and 3° Amides do NOT give Hoffmann Bromamide degradation!",
    trap: "Cross-Over Experiment Trap: Agar Ph-CONH₂ aur p-Me-C₆H₄-CO¹⁵NH₂ ko ek saath Br₂/KOH mein mila ke Hoffmann karoge, toh ZERO cross-over products banenge kyunki R group 100% intramolecularly migrate karta hai!",
    exampleText: "Benzamide (Ph-CONH₂) + Br₂ + 4 KOH → Aniline (Ph-NH₂) + K₂CO₃ + 2 KBr + 2 H₂O."
  },
  {
    id: "P5-04",
    tab: "P5",
    title: "Gabriel Phthalimide Synthesis, Carbylamine & Hinsberg's Test",
    category: "Amines • Pure 1° Amine Synthesis & 1° / 2° / 3° Distinction",
    stars: 3,
    freq: "★★★ Asked 19+x",
    intermed: "SN2",
    intermedLabel: "🎯 Gabriel = Only Aliphatic 1° Amine | 🧪 Carbylamine = 1° Only | Hinsberg = PhSO₂Cl",
    svgData: {
      type: "carbonyl_rxn",
      params: ["Phthalimide", "R-NH₂ / R₂NH", "Gabriel (KOH, R-X, N₂H₄) vs CHCl₃/KOH", "vs Hinsberg (Ph-SO₂-Cl + KOH)", "Gabriel: Aliphatic 1° R-NH₂ ONLY!", "Carbylamine: R-NC (Foul smell) | Hinsberg: 1° soluble in KOH", "Aniline (PhNH₂) CANNOT be made by Gabriel Synthesis!"]
    },
    hinglish: "Amines ke 3 पक्के सवाल: (1) Gabriel Phthalimide (KOH → R-X → H₃O⁺ / NH₂NH₂): Step-2 pure SN2 hai, isliye SIRF Aliphatic 1° Amine banta hai! Aniline (Ph-NH₂) ya Me₃C-NH₂ Gabriel se NAHI ban sakte! (2) Carbylamine Test (CHCl₃ + alc. KOH): Sirf 1° Amines (Aliphatic + Aniline DONON!) बदबूदार Isocyanide (R-NC) dete hain via :CCl₂. (3) Hinsberg Reagent (PhSO₂Cl): 1° Amine → Sulfonamide बनता hai jo KOH mein GHUL jata hai (acidic N-H); 2° Amine → Sulfonamide बनता hai jo KOH mein NAHI ghulta (no N-H); 3° Amine → React hi nahi karta!",
    touches: "1°, 2°, 3° Amines",
    ignores: "Amides (do NOT give Carbylamine test!)",
    trap: "NCERT Basicity Order Trap (Aqueous Phase vs Gas Phase): Gas phase mein हमेशा 3° > 2° > 1° > NH₃. Par Aqueous Phase (H₂O) mein: Methyl के लिए 2° > 1° > 3° > NH₃ (213) aur Ethyl के लिए 2° > 3° > 1° > NH₃ (231)!",
    exampleText: "Phthalimide + (i) KOH (ii) Et-Br (iii) NH₂NH₂ → Ethylamine (CH₃CH₂NH₂)."
  },
  {
    id: "P5-05",
    tab: "P5",
    title: "HNO₂ (NaNO₂ + HCl) on 1°, 2°, 3° Aliphatic vs Aromatic Amines",
    category: "Amines • Nitrous Acid Distinction & Ring Expansion",
    stars: 3,
    freq: "★★★ Asked 13+x",
    intermed: "Carbocation",
    intermedLabel: "⚡ 1° Aliphatic → N₂↑ + C⁺ (Rearranges!) | 2° Amine → Yellow Oily N-Nitrosamine!",
    svgData: {
      type: "ring_expansion",
      params: ["NaNO₂ + HCl (0–5°C)", "Aliphatic R-NH₂ → R-N₂⁺ → R⁺ + N₂↑", "Cyclobutyl-CH₂-NH₂ (1°)", "Cyclopentanol + Cyclopentene (Ring Expansion!)"]
    },
    hinglish: "HNO₂ (NaNO₂ + HCl) ke 4 alag-alag chehre: (1) 1° Aliphatic Amine (R-NH₂): Unstable R-N₂⁺ banta hai jo turant N₂↑ gas chhod ke Carbocation (R⁺) banata hai (Rearrangement / Ring expansion hota hai!) → Alcohol + Alkene! (2) 1° Aromatic Amine (Ph-NH₂): 0–5°C pe stable BDC (Ph-N₂⁺Cl⁻) banta hai. (3) 2° Amine (R₂NH or PhNHR): Yellow Oily Liquid N-Nitrosamine (R₂N–N=O) banta hai (Liebermann's Nitroso Test)! (4) 3° Aromatic Amine (Ph-NMe₂): Para position pe -N=O lagta hai (p-Nitroso-N,N-dimethylaniline, green solid)!",
    touches: "1°, 2°, 3° Aliphatic and Aromatic Amines",
    ignores: "3° Aliphatic Amines only form water-soluble salt [R₃NH]⁺NO₂⁻ at cold temp",
    trap: "Tiffeneau-Demjanov Ring Expansion Trap: Cyclohexanone + HCN → Cyanohydrin ──LiAlH₄──► 1-(Aminomethyl)cyclohexanol ──HNO₂──► Cycloheptanone (7-membered ring ketone)!",
    exampleText: "CH₃CH₂NH₂ + HNO₂ → CH₃CH₂OH + N₂↑ (Quantitative N₂ gas evolution!)."
  },
  {
    id: "P5-06",
    tab: "P5",
    title: "Aniline EAS Traps: Nitration (47% Meta!), Bromination & Protection",
    category: "Amines • Aromatic Amine Electrophilic Substitution",
    stars: 3,
    freq: "★★★ Asked 13+x",
    intermed: "No Rearrangement",
    intermedLabel: "⚠️ Nitration gives 51% Para + 47% META + 2% Ortho! • Protect with Ac₂O First!",
    svgData: {
      type: "benzene_rxn",
      params: ["NH₂", "", "Br₂/H₂O  vs  (i) Ac₂O (ii) Br₂/AcOH (iii) H₃O⁺", "Direct vs Protected Bromination/Nitration", "NH₂", "Br (2,4,6-Tribromo white ppt!)", "Br (Only Para when protected with Ac₂O!)", "HNO₃/H₂SO₄ gives 47% m-Nitroaniline due to -NH₃⁺!"]
    },
    hinglish: "Aniline ka -NH₂ group itna zyada activating hai ki: (1) Br₂/H₂O daalte hi teeno positions bhar ke 2,4,6-Tribromoaniline (White Ppt) ban jata hai! Agar sirf p-Bromoaniline chahiye toh pehle Ac₂O/Pyridine se -NHCOCH₃ (Acetanilide) bana ke power kam karo! (2) Conc. HNO₃ + H₂SO₄ (Nitration): Strong acid mein Aniline protonate hoke Anilinium ion (-NH₃⁺) banata hai jo META-directing hai! Isliye 51% Para, 47% META, aur 2% Ortho milta hai!",
    touches: "Aniline and substituted anilines",
    ignores: "Aniline does NOT undergo Friedel-Crafts reaction!",
    trap: "Sulfonation of Aniline (Conc. H₂SO₄, 453-473 K): Gives p-Aminobenzenesulfonic acid (Sulfanilic Acid), which exists as a dipolar Zwitterion (⁺H₃N–C₆H₄–SO₃⁻)!",
    exampleText: "Aniline + Conc. HNO₃/H₂SO₄ → 51% p-Nitroaniline + 47% m-Nitroaniline + 2% o-Nitroaniline."
  },
  {
    id: "P5-07",
    tab: "P5",
    title: "Benzene Diazonium Chloride (Ph-N₂⁺Cl⁻) — Complete Master Replacement & Dye Web",
    category: "Diazonium Salts (BDC) • The Ultimate Benzene Converter",
    stars: 3,
    freq: "★★★ Asked 25+x",
    intermed: "POC",
    intermedLabel: "🧪 NaNO₂+HCl (0–5°C) → Replaces -N₂⁺Cl⁻ with H, OH, F, Cl, Br, I, CN, NO₂, Azo Dye!",
    svgData: {
      type: "benzene_rxn",
      params: ["N₂⁺Cl⁻", "", "H₃PO₂/EtOH → Ph-H | H₃O⁺/Δ → Ph-OH", "CuCN→PhCN | KI→PhI | HBF₄/Δ→PhF", "H / OH / CN / I / F", "", "N=N-Ph-OH (Orange Dye at pH 9-10!)", "HBF₄ + NaNO₂/Cu, Δ → Nitrobenzene (Ph-NO₂)!"]
    },
    hinglish: "Aniline + NaNO₂ + HCl (0–5°C) → BDC (Ph-N₂⁺Cl⁻). Isse Benzene pe kuch bhi laga sakte ho: • H₃PO₂ + H₂O (or CH₃CH₂OH) → Benzene (Ph-H). • Warm H₃O⁺ → Phenol (Ph-OH). • CuCl/HCl, CuBr/HBr, CuCN/KCN → Sandmeyer (PhCl, PhBr, PhCN). • Cu powder + HCl/HBr → Gattermann. • KI → Ph-I. • HBF₄, Δ → Ph-F (Balz-Schiemann); HBF₄ + NaNO₂/Cu → Ph-NO₂! • Phenol (pH 9–10) → Orange Azo Dye; Aniline (pH 4–5) → Yellow Azo Dye; β-Naphthol (NaOH) → Scarlet Red Dye!",
    touches: "Aromatic Diazonium Salts (Ph-N₂⁺Cl⁻)",
    ignores: "Deactivated rings (like Nitrobenzene) do NOT undergo Azo coupling with BDC!",
    trap: "Reduction of BDC with SnCl₂/HCl or Zn/HCl vs H₃PO₂: H₃PO₂ (or EtOH) removes -N₂⁺Cl⁻ to give Benzene (Ph-H), whereas SnCl₂/HCl or Na₂SO₃ reduces -N₂⁺Cl⁻ to Phenylhydrazine (Ph-NH-NH₂)!",
    exampleText: "p-Toluidine ──(i) NaNO₂/HCl──► ──(ii) H₃PO₂/H₂O──► Toluene (removes -NH₂ cleanly!)."
  },
  {
    id: "P5-08",
    tab: "P5",
    title: "Arndt-Eistert Homologation (R-COCl → CH₂N₂ → Ag₂O / H₂O)",
    category: "Carboxylic Acids • Stepping-Up Acid by +1 Carbon (Retains Chirality!)",
    stars: 2,
    freq: "★★ Asked 5+x in Tough Shifts & Adv",
    intermed: "Carbene",
    intermedLabel: "🧬 Diazoketone → Wolff Rearrangement (Ketene R-CH=C=O) → R-CH₂-COOH!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["R*-CO", "Cl (Acid Chloride)", "(i) CH₂N₂ (Diazomethane)  (ii) Ag₂O / H₂O, Δ", "Wolff Rearrangement via Ketene (R*-CH=C=O)", "R* — CH₂ — COOH (+1 Carbon!)", "If ROH used in Step (ii) → Ester R*-CH₂-COOR!", "100% Retention of Stereochemistry at migrating R*!"]
    },
    hinglish: "Carboxylic Acid (R-COOH) mein 1 carbon badhana ho (R-CH₂-COOH) toh: R-COOH ──SOCl₂──► R-COCl ──CH₂N₂──► R-CO-CHN₂ (Diazoketone). Ab ispe Ag₂O + Δ (Wolff Rearrangement) lagao toh N₂↑ nikal ke Ketene (R-CH=C=O) banta hai! Ketene mein H₂O daalo toh R-CH₂-COOH, ROH daalo toh R-CH₂-COOR, aur NH₃ daalo toh R-CH₂-CONH₂!",
    touches: "Acid Chlorides → Next Higher Homologue Carboxylic Acid",
    ignores: "Does not racemize chiral R*",
    trap: "Diazomethane (CH₂N₂) + Carboxylic Acid (R-COOH) Direct Reaction: Seedha R-COOH + CH₂N₂ karoge toh turant Methyl Ester (R-COOCH₃) + N₂↑ ban jayega!",
    exampleText: "Ph-COOH ──(1) SOCl₂ (2) CH₂N₂ (3) Ag₂O/H₂O──► Ph-CH₂-COOH (Phenylacetic acid)."
  },

  // ==================== MODULE P6: REDUCING/OXIDIZING + GLUCOSE & POC (6 CARDS) ====================
  {
    id: "P6-01",
    tab: "P6",
    title: "LiAlH₄ vs NaBH₄ vs DIBAL-H vs B₂H₆/THF (The 4 Hydride Kings)",
    category: "Reducing Agents • Functional Group Selectivity",
    stars: 3,
    freq: "★★★ Asked 24+x",
    intermed: "No Rearrangement",
    intermedLabel: "🎯 NaBH₄ = Only CHO/Ketone/RCOCl | DIBAL-H = Ester/CN → CHO | B₂H₆ = Acid Fastest!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["EtOOC-CH₂", "CO-CH₃", "NaBH₄  vs  LiAlH₄  vs  DIBAL-H (-78°C)", "Multi-Functional Group Selectivity", "NaBH₄: Reduces ONLY Ketone to -CH(OH)Me!", "LiAlH₄: Reduces BOTH Ester & Ketone to Diol!", "B₂H₆/THF reduces -COOH selectively in presence of Ester/-NO₂!"]
    },
    hinglish: "4 Reducing Agents ka Poora Nichod: (1) NaBH₄: Sirf Aldehyde, Ketone, aur Acid Chloride (RCOCl) ko Alcohol banata hai! Ester, Acid, Amide, CN, NO₂ ko bilkul nahi chhedta! (2) LiAlH₄: Sabko reduce karta hai (Acid/Ester/Ketone → Alcohol; Amide RCONH₂ → RCH₂NH₂; Nitrile → RCH₂NH₂; Ph-NO₂ → Azobenzene Ph-N=N-Ph). (3) DIBAL-H (-78°C): Ester (RCOOR') aur Cyanide (R-CN) ko ALDEHYDE (R-CHO) pe rok deta hai! (4) B₂H₆/THF: Electron-rich group dhoondhta hai → Carboxylic Acid (-COOH) ko Ester aur -NO₂ ke saamne selectively 1° Alcohol banata hai (aur RCOCl ko touch nahi karta)!",
    touches: "Carbonyls, Carboxylic Acids & Derivatives, Nitriles, Nitro compounds",
    ignores: "Isolated C=C double bonds (except LiAlH₄ reduces Ph-CH=CH-CHO to Ph-CH₂-CH₂-CH₂OH!)",
    trap: "Cinnamaldehyde (Ph-CH=CH-CHO) Trap: NaBH₄ gives Ph-CH=CH-CH₂OH (double bond safe!), whereas LiAlH₄ reduces BOTH C=C and CHO when β-phenyl is present → Ph-CH₂-CH₂-CH₂OH!",
    exampleText: "HOOC–C₆H₄–COOMe + B₂H₆/THF, then H₃O⁺ → HOCH₂–C₆H₄–COOMe (Acid reduced, Ester untouched!)."
  },
  {
    id: "P6-02",
    tab: "P6",
    title: "Red P + HI (Δ) & Nitrobenzene Reductions (Sn/HCl vs Zn/NaOH vs Zn/NH₄Cl)",
    category: "Reducing Agents • Complete Deoxygenation & Ph-NO₂ Reduction Tree",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "No Rearrangement",
    intermedLabel: "🛡️ Red P + HI = Anything with O → Alkane! | Ph-NO₂ + Zn/NH₄Cl → Ph-NHOH!",
    svgData: {
      type: "benzene_rxn",
      params: ["NO₂", "", "Sn/HCl or Fe/HCl → Ph-NH₂", "Zn/NH₄Cl → Ph-NHOH | Zn/NaOH → Ph-N=N-Ph", "NH₂ / NHOH / Azo", "", "", "NH₄HS or Na₂S reduces ONLY ONE -NO₂ in m-Dinitrobenzene!"]
    },
    hinglish: "(1) Red P + HI (Δ): Kisi bhi Oxygen-containing compound (Alcohol, Aldehyde, Ketone, Carboxylic Acid, Glucose, Diol) ka saara Oxygen छीन के seedha ALKANE bana deta hai! (2) Nitrobenzene (Ph-NO₂) ke 4 Reductions: • Acidic (Sn/HCl, Fe/HCl preferred — needs only catalytic HCl!, H₂/Pd) → Aniline (Ph-NH₂). • Neutral (Zn + Aq. NH₄Cl) → Phenylhydroxylamine (Ph-NHOH) (gives Tollen's test!). • Alkaline (Zn/NaOH or LiAlH₄) → Azobenzene (Ph-N=N-Ph) / Hydrazobenzene. • Selective (NH₄HS or (NH₄)₂S or Na₂S): m-Dinitrobenzene mein SIRF EK -NO₂ ko -NH₂ banata hai (m-Nitroaniline)!",
    touches: "Oxygenated organics (Red P/HI); Nitro aromatics",
    ignores: "Fe + HCl does not consume stoichiometric HCl (FeCl₂ hydrolyzes to release HCl)",
    trap: "Bamberger Rearrangement Trap: Ph-NHOH (Phenylhydroxylamine) + Dil. H₂SO₄ → p-Aminophenol (-OH migrates to Para position)!",
    exampleText: "m-Dinitrobenzene + (NH₄)₂S → m-Nitroaniline (Regioselective reduction of 1 nitro group!)."
  },
  {
    id: "P6-03",
    tab: "P6",
    title: "D-Glucose Master Reaction Map (NCERT Biomolecules 100% Vault)",
    category: "Biomolecules • Carbohydrates All 6 NCERT Reactions",
    stars: 3,
    freq: "★★★ Asked 20+x",
    intermed: "POC",
    intermedLabel: "🧪 HI→n-Hexane | Br₂/H₂O→Gluconic | HNO₃→Saccharic | PhNHNH₂→Osazone",
    svgData: {
      type: "carbonyl_rxn",
      params: ["CHO-(CHOH)₄", "CH₂OH (D-Glucose)", "HI/Δ vs Br₂/H₂O vs Conc. HNO₃ vs Ac₂O", "All 6 NCERT Glucose Reactions", "HI: n-Hexane | Br₂/H₂O: Gluconic Acid", "HNO₃: Saccharic Acid (Both ends -COOH!)", "Glucose, Mannose & Fructose give IDENTICAL Osazone!"]
    },
    hinglish: "D-Glucose ke 6 NCERT Reactions jo har saal aate hain: (1) Red P + HI, Δ → n-Hexane (proves all 6 carbons are in a straight chain!). (2) Br₂ water (Mild) → Gluconic Acid (sirf upar wala -CHO → -COOH banta hai; Fructose Br₂/H₂O se react NAHI karta!). (3) Conc. HNO₃ (Strong) → Saccharic / Glucaric Acid (upar ka -CHO aur neeche ka -CH₂OH DONON -COOH ban jaate hain!). (4) Ac₂O (5 eq.) → Glucose Pentaacetate (proves 5 -OH groups; Pentaacetate does NOT react with NH₂OH!). (5) HCN / NH₂OH → Cyanohydrin / Oxime. (6) 3 eq. PhNHNH₂ → Osazone (C-1 & C-2 react → Glucose, C-2 epimer Mannose, aur Fructose teeno SAME Osazone dete hain)!",
    touches: "D-Glucose, D-Fructose, D-Mannose",
    ignores: "Sucrose (Non-reducing sugar: C1 of α-D-glucose + C2 of β-D-fructose locked!)",
    trap: "Which Reactions Fail for Natural Cyclic D-Glucose? Natural D-Glucose does NOT give Schiff's Test, NaHSO₃ addition product, or 2,4-DNP test because -CHO is locked in the cyclic hemiacetal (Pyranose) ring!",
    exampleText: "Maltose (α-1,4) & Lactose (β-1,4) are REDUCING sugars (show Mutarotation); Sucrose is NON-REDUCING!"
  },
  {
    id: "P6-04",
    tab: "P6",
    title: "Amino Acids, Zwitterion, Isoelectric Point (pI) & Protein Tests (Ninhydrin/Biuret)",
    category: "Biomolecules • Amino Acids & Proteins NCERT Vault",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "POC",
    intermedLabel: "🧪 pI = (pKa₁ + pKa₂)/2 | Ninhydrin = Blue-Violet | Biuret = Peptide Violet!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["⁺H₃N — CH(R)", "COO⁻ (Zwitterion)", "pH < pI (Cation → Cathode) | pH > pI (Anion → Anode)", "At pH = pI: Zero Net Migration in Electric Field!", "Ninhydrin = Blue-Violet | Biuret = Violet", "Xanthoproteic (Conc. HNO₃) = Yellow (Tyr, Trp, Phe!)", "Glycine is the ONLY optically inactive (achiral) α-amino acid!"]
    },
    hinglish: "Amino Acids & Proteins ke 5 पक्के Points: (1) Glycine (NH₂-CH₂-COOH) akela achiral amino acid hai; baaki saare natural amino acids L-configuration ke hote hain. (2) Isoelectric Point (pI): Neutral amino acid ke liye pI = (pKa₁ + pKa₂)/2; Acidic amino acid (Aspartic, Glutamic) ke liye دو छोटे pKa ka average (pI ≈ 3); Basic amino acid (Lysine, Arginine, Histidine) ke liye دو बड़े pKa ka average (pI ≈ 9-10)! (3) Denaturation (Boiling / pH change): 2° aur 3° structure destroy ho jaate hain (H-bonds टूटते हैं), par 1° structure (Peptide bonds) INTACT rehta hai! (4) Biuret Test (Aq. CuSO₄ + NaOH): कम से कम 2 Peptide linkages (-CO-NH-) hone pe Violet colour! (5) Sanger's Reagent (1-Fluoro-2,4-dinitrobenzene): Polypeptide ka N-terminal amino acid pehchanta hai!",
    touches: "α-Amino acids, Peptides, Proteins",
    ignores: "Dipeptide has only ONE peptide bond (does NOT give Biuret test! Tripeptide onwards gives Biuret!)",
    trap: "Essential vs Basic/Acidic Amino Acids (NCERT): Basic: Lysine, Arginine, Histidine (LAH). Acidic: Aspartic acid, Glutamic acid. Aromatic: Tyrosine, Tryptophan, Phenylalanine (give Yellow Xanthoproteic Test with Conc. HNO₃)!",
    exampleText: "For Glutamic acid (pKa₁ = 2.2, pKa_side = 4.3, pKa₂ = 9.7) → pI = (2.2 + 4.3)/2 = 3.25."
  },
  {
    id: "P6-05",
    tab: "P6",
    title: "Practical Organic Chemistry (POC) — Lassaigne's, FeCl₃, Lead Acetate & Nitroprusside",
    category: "POC & Qualitative Analysis • Guaranteed 4–8 Marks in Every Shift",
    stars: 3,
    freq: "★★★ Asked 25+x",
    intermed: "POC",
    intermedLabel: "🧪 Prussian Blue (N) | Blood Red (N+S) | Violet Nitroprusside (S) | Canary Yellow (P)!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["Na-Fusion Extract", "(N, S, X, P, Phenol)", "FeSO₄/Fe³⁺ vs Nitroprusside vs Neutral FeCl₃", "POC Colour & Formula Master Vault", "N = Fe₄[Fe(CN)₆]₃ (Prussian Blue)", "S = [Fe(CN)₅NOS]⁴⁻ (Violet) | N+S = [Fe(SCN)]²⁺ (Blood Red)", "Hydrazine (NH₂NH₂) & NH₂OH have NO Carbon → Negative Lassaigne!"]
    },
    hinglish: "POC ke Exact Colours aur Formulas jo JEE Main seedha poochta hai: • Nitrogen: NaCN + FeSO₄ → [Fe(CN)₆]⁴⁻ ──Fe³⁺──► Fe₄[Fe(CN)₆]₃ (Prussian Blue). • Sulfur (Test 1): Na₂S + Na₂[Fe(CN)₅NO] (Sodium Nitroprusside) → Na₄[Fe(CN)₅NOS] (Violet / Purple). • Sulfur (Test 2): Na₂S + Pb(OAc)₂ / AcOH → PbS↓ (Black ppt). • Nitrogen + Sulfur Together (e.g. Thiourea): NaSCN + Fe³⁺ → [Fe(SCN)]²⁺ (Blood Red colour; agar Excess Na daal do toh NaSCN toot ke NaCN + Na₂S ban jata hai aur Blood Red nahi aata!). • Phosphorus: + Conc. HNO₃ + Ammonium Molybdate → (NH₄)₃PO₄·12MoO₃ (Canary Yellow ppt). • Neutral FeCl₃: Phenol/Enol → Violet [Fe(OPh)₆]³⁻.",
    touches: "All Organic Functional Groups & Elemental Analysis",
    ignores: "Compounds without Carbon (NH₂NH₂, NH₂OH) or Diazonium salts (lose N₂ gas on heating) fail Lassaigne's N test!",
    trap: "Beilstein Test vs Lassaigne's Test: Copper wire pe green flame (Beilstein test for halogens) Urea aur Thiourea bhi de dete hain (false positive), isliye Lassaigne's AgNO₃ test (+ Conc. HNO₃ boil) hi reliable hai!",
    exampleText: "AgCl = White ppt (soluble in aq. NH₃) | AgBr = Pale Yellow (sparingly soluble) | AgI = Yellow (insoluble in NH₃)."
  },
  {
    id: "P6-06",
    tab: "P6",
    title: "POC Quantitative Estimation Formulas: Dumas, Kjeldahl, Carius & Liebig",
    category: "POC Numericals • Integer-Type Formula Vault",
    stars: 3,
    freq: "★★★ Asked 18+x in Numerical Section",
    intermed: "POC",
    intermedLabel: "🧪 %N (Kjeldahl) = 1.4 × N × V / W | Kjeldahl Fails for -NO₂, Azo, Diazonium & Pyridine!",
    svgData: {
      type: "carbonyl_rxn",
      params: ["Mass = W g", "Organic Compound", "Liebig (CO₂, H₂O) | Dumas (N₂) | Kjeldahl (NH₃)", "Carius (AgX, BaSO₄, Mg₂P₂O₇)", "%C = (12/44)×(W_CO₂/W)×100 | %H = (2/18)×(W_H₂O/W)×100", "%S = (32/233)×(W_BaSO₄/W)×100 | %P = (62/222)×(W_Mg₂P₂O₇/W)×100", "%N (Kjeldahl) = (1.4 × M_acid × Basicity × V_mL) / W!"]
    },
    hinglish: "Integer Questions ke liye ye 6 Formulas रट के जाओ: (1) Liebig (%C & %H): %C = (12/44) × (Mass of CO₂ / W) × 100 | %H = (2/18) × (Mass of H₂O / W) × 100. (2) Kjeldahl (%N): %N = (1.4 × Normality of Acid used × V in mL) / W. (Fails for: -NO₂, -N=N- Azo, Diazonium salts, and Ring N like Pyridine/Quinoline!). (3) Dumas (%N): CuO ke saath heat karne pe free N₂ gas milti hai (V_STP in mL / (8 × W) ≈ %N); works for ALL nitrogen compounds! (4) Carius (%S): %S = (32 / 233) × (Mass of BaSO₄ / W) × 100. (5) Carius (%Br): %Br = (80 / 188) × (Mass of AgBr / W) × 100 (AgCl = 35.5/143.5, AgI = 127/235). (6) Phosphorus (%P): %P = (62 / 222) × (Mass of Mg₂P₂O₇ / W) × 100.",
    touches: "All POC Numericals in JEE Main Section-B",
    ignores: "Do not forget to subtract Aqueous Tension (P_dry = P_atm - P_water) in Dumas method!",
    trap: "H₂SO₄ Normality vs Molarity Trap in Kjeldahl: Agar M Molar H₂SO₄ (dibasic acid!) diya hai, toh Normality = 2 × Molarity lena mat bhoolna (%N = 1.4 × (2M) × V_H₂SO₄ / W)!",
    exampleText: "0.5 g compound neutralizes 10 mL of 1 M H₂SO₄ in Kjeldahl → %N = (1.4 × 2 × 10) / 0.5 = 56%."
  },

  // ==================== MODULE COMBO: JEE MAIN & ADV MIXED-REAGENT CHAINS (12 CARDS) ====================
  {
    id: "COMBO-01",
    tab: "COMBO",
    title: "Combo #1: Cycloalkene → Ozonolysis (O₃/Zn) → Intramolecular Aldol (Dil. OH⁻/Δ)",
    category: "JEE Mixed Combo • Ring Opening + Ring Closing Classic",
    stars: 3,
    freq: "★★★ JEE Main & Adv Staple",
    intermed: "Carbanion",
    intermedLabel: "🔗 6-Ring Alkene Cuts to Dicarbonyl → Closes Back to 5- or 6-Membered Enone!",
    svgData: {
      type: "combo_chain",
      params: ["1-Me-Cyclohexene", "(i) O₃ (ii) Zn/H₂O", "6-Oxoheptanal", "Dil. NaOH", "1-Acetylcyclopentene!", "Δ (-H₂O)", "5-Ring Enone (Major)", "Aldehyde C=O is more electrophilic → Ketone α-CH₂ attacks Aldehyde!"]
    },
    hinglish: "JEE ka sabse pasandida 2-step combo! Step 1: 1-Methylcyclohexene ka O₃/Zn se double bond kaato → ایک तरफ Ketone (-COCH₃) aur ek taraf Aldehyde (-CHO) banega (6-Oxoheptanal). Step 2: Dil. NaOH/Δ daalte hi Intramolecular Aldol hoga! Kaun attack karega? Aldehyde (-CHO) zyada भूखा (+δ) hai, toh Ketone ke اندر वाला -CH₂- enolate ban ke Aldehyde pe maarega taaki 5-membered ring (1-Acetylcyclopentene) ban jaaye (7-membered ring kabhi mat banana!).",
    touches: "Cyclic alkenes → Open-chain dicarbonyls → Cyclic α,β-unsaturated carbonyls",
    ignores: "1,3-dicarbonyls (would give strained 4-ring)",
    trap: "5-Ring vs 7-Ring Trap: 1,6-Dicarbonyl (jaise Adipaldehyde ya 6-oxoheptanal) hamesha 5-membered ring banata hai, 7-membered ring NAHI! Aur 1,5-Dicarbonyl 6-membered ring banata hai!",
    exampleText: "Cyclohexene ──(i) O₃/Zn──► Hexanedial ──(ii) Dil. NaOH, Δ──► Cyclopent-1-enecarbaldehyde."
  },
  {
    id: "COMBO-02",
    tab: "COMBO",
    title: "Combo #2: Keto-Ester → Ethylene Glycol/H⁺ (Protection) → LiAlH₄/RMgX → H₃O⁺",
    category: "JEE Mixed Combo • Selective Reduction of LESS Reactive Group!",
    stars: 3,
    freq: "★★★ Asked 10+x",
    intermed: "No Rearrangement",
    intermedLabel: "🔗 Protect More Reactive Ketone as Cyclic Ketal → Attack Ester → Deprotect!",
    svgData: {
      type: "combo_chain",
      params: ["Keto-Ester (CO + COOR)", "HOCH₂CH₂OH / H⁺", "Cyclic Ketal-Ester", "(i) LiAlH₄", "Ketone Intact + -CH₂OH!", "(ii) H₃O⁺", "Hydroxy-Ketone", "Without Glycol protection, LiAlH₄ would reduce BOTH Ketone and Ester!"]
    },
    hinglish: "Agar Ketone ko reduce karke Ester bachana ho toh seedha NaBH₄ lagao. Par agar ulta pooch le — Ketone ko bacha ke Ester (-COOR) ko -CH₂OH banana ho toh? Step 1: Ethylene Glycol (HO-CH₂-CH₂-OH / Dry H⁺) daalo → Zyada reactive Ketone C=O pehle Cyclic Ketal ban ke chhup jayega (protect ho jayega!). Step 2: Ab LiAlH₄ (ya RMgX) daalo → Ester आराम se -CH₂OH ban jayega. Step 3: H₃O⁺ daal ke Ketal hatao → Ketone wapas zinda!",
    touches: "Keto-esters, Aldehydo-ketones (Aldehyde is protected first over Ketone!)",
    ignores: "Esters do not form cyclic ketals with ethylene glycol",
    trap: "Aldehyde + Ketone Together + 1 eq. Glycol Trap: Aldehyde Ketone se zyada reactive hai, toh 1 eq. Glycol Aldehyde (-CHO) ko protect karega aur Ketone khula rahega!",
    exampleText: "Ethyl 4-oxopentanoate ──(1) Glycol/H⁺ (2) LiAlH₄ (3) H₃O⁺──► 5-Hydroxypentan-2-one."
  },
  {
    id: "COMBO-03",
    tab: "COMBO",
    title: "Combo #3: Terminal Alkyne → HgSO₄/H₂SO₄ → I₂/NaOH (Iodoform) → Soda-Lime",
    category: "JEE Mixed Combo • Alkyne to Alkane / Acid Stepping Down",
    stars: 3,
    freq: "★★★ Asked 12+x",
    intermed: "Carbanion",
    intermedLabel: "🔗 R-C≡CH → R-CO-CH₃ (Methyl Ketone) → CHI₃↓ + R-COONa!",
    svgData: {
      type: "combo_chain",
      params: ["R-C≡CH (Alkyne)", "Hg²⁺ / dil. H₂SO₄", "R-CO-CH₃ (Ketone)", "I₂ + NaOH", "CHI₃↓ (Yellow Ppt)", "then H₃O⁺", "R-COOH + CHI₃↓", "Terminal alkyne adds H₂O to give Methyl Ketone → gives positive Iodoform!"]
    },
    hinglish: "Roadmap questions ka sabse common पैटर्न: 'Compound A (C₈H₆) gives white ppt with Tollen's. On treatment with HgSO₄/H₂SO₄ it gives B, which gives yellow ppt with I₂/NaOH and salt C.' Turant pakdo: A = Phenylacetylene (Ph-C≡CH) → Hg²⁺/H₃O⁺ se bana B = Acetophenone (Ph-CO-CH₃) → I₂/NaOH se bana CHI₃↓ + Sodium Benzoate (Ph-COONa)!",
    touches: "All Terminal Alkynes (R-C≡CH)",
    ignores: "Internal non-methyl alkynes",
    trap: "Degree of Unsaturation (DBE) Clue: Agar formula C₈H₆ ya C₉H₈ diya hai (DBE ≥ 5 or 6), toh 100% Benzene Ring + Alkyne/Alkene ka case hai!",
    exampleText: "Ph-C≡CH ──Hg²⁺/H₃O⁺──► Ph-CO-CH₃ ──NaOI──► Ph-COONa + CHI₃↓ ──Soda-lime──► Benzene."
  },
  {
    id: "COMBO-04",
    tab: "COMBO",
    title: "Combo #4: Aniline → Protection/Halogenation → Diazotization → H₃PO₂ (Meta/1,3,5-Isomers!)",
    category: "JEE Mixed Combo • How to Put Ortho/Para Directors at META Position!",
    stars: 3,
    freq: "★★★ Asked 14+x",
    intermed: "POC",
    intermedLabel: "🔗 Use -NH₂ to Direct to 2,4,6 → Then Erase -NH₂ with NaNO₂/HCl + H₃PO₂!",
    svgData: {
      type: "combo_chain",
      params: ["Aniline (Ph-NH₂)", "Br₂ / H₂O", "2,4,6-Tribromoaniline", "(i) NaNO₂ + HCl", "Diazonium Salt", "(ii) H₃PO₂ or EtOH", "1,3,5-Tribromobenzene!", "-Br is o/p-directing, yet all 3 Br atoms end up META (1,3,5) to each other!"]
    },
    hinglish: "JEE ka evergreen dimaagi sawaal: '-Br toh Ortho/Para directing hai, phir 1,3,5-Tribromobenzene ya m-Bromotoluene kaise banaoge?' Trick: Pehle Aniline (-NH₂) ki taqat use karke Br₂/H₂O se 2,4,6 pe Br lagao → aur phir -NH₂ ko NaNO₂/HCl (0–5°C) + H₃PO₂/H₂O (ya EtOH) se GAYAB (erase) kar do! Teeno Br apne-aap 1,3,5 (Meta) pe reh jayenge!",
    touches: "Aniline, Toluidines, Nitrobenzenes",
    ignores: "Direct bromination of benzene never gives 1,3,5-tribromobenzene",
    trap: "Byproduct of EtOH vs H₃PO₂ with BDC: Ph-N₂⁺Cl⁻ + CH₃CH₂OH → Ph-H + N₂↑ + HCl + CH₃CHO (Acetaldehyde)! Ph-N₂⁺Cl⁻ + H₃PO₂ + H₂O → Ph-H + N₂↑ + HCl + H₃PO₃!",
    exampleText: "p-Toluidine ──(1) Br₂/AcOH (2) NaNO₂/HCl (3) H₃PO₂──► m-Bromotoluene!"
  },
  {
    id: "COMBO-05",
    tab: "COMBO",
    title: "Combo #5: CH₃CHO + 4 HCHO + Conc. Ca(OH)₂ → Pentaerythritol (3× Aldol + 1× Cannizzaro!)",
    category: "JEE Mixed Combo • Famous Aldol + Cannizzaro Hybrid",
    stars: 3,
    freq: "★★★ Asked 8+x in JEE Main & Adv",
    intermed: "Carbanion",
    intermedLabel: "🔗 3 Crossed Aldols Replace All 3 α-H → Then 4th HCHO Does Crossed Cannizzaro!",
    svgData: {
      type: "combo_chain",
      params: ["CH₃-CHO (3 α-H)", "3 HCHO + OH⁻", "(HOCH₂)₃C-CHO (No α-H!)", "+ 4th HCHO / OH⁻", "Crossed Cannizzaro!", "Hydride Transfer", "C(CH₂OH)₄ (Pentaerythritol)", "+ HCOO⁻ (Formate)! Total 4 moles of HCHO used per mole of CH₃CHO!"]
    },
    hinglish: "Jab Acetaldehyde (CH₃CHO) mein Excess HCHO + Base daalte hain, toh pehle CH₃CHO ke teeno α-H ek-ek karke 3 HCHO ke saath Crossed Aldol karte hain aur (HOCH₂)₃C–CHO banta hai. Ab iske paas ZERO α-H bacha! Toh 4th mole HCHO iske saath Crossed Cannizzaro karke isko reduce kar deta hai → C(CH₂OH)₄ (Pentaerythritol) + HCOO⁻!",
    touches: "Acetaldehyde + Excess Formaldehyde in strong base",
    ignores: "Dehydration cannot happen because there is no α-H left",
    trap: "Integer Question Favourite: 'How many moles of HCHO react with 1 mole of CH₃CHO to form Pentaerythritol, and how many 1° -OH groups are present?' Answer: 4 moles HCHO, and all 4 -OH groups are Primary (1°)!",
    exampleText: "CH₃CHO + 4 HCHO + ½ Ca(OH)₂ → C(CH₂OH)₄ (Pentaerythritol) + ½ (HCOO)₂Ca."
  },
  {
    id: "COMBO-06",
    tab: "COMBO",
    title: "Combo #6: Benzene → Cumene → Phenol + Acetone → Reimer-Tiemann / Aspirin / BDC Dye",
    category: "JEE Mixed Combo • Complete Aromatic Industrial & Lab Roadmap",
    stars: 3,
    freq: "★★★ Asked 16+x",
    intermed: "Carbocation",
    intermedLabel: "🔗 Propene/H⁺ → Cumene → O₂ / H₃O⁺ → Phenol + Acetone!",
    svgData: {
      type: "combo_chain",
      params: ["Benzene + Propene", "H₃PO₄ (Cumene)", "Ph-CHMe₂ ──O₂/H⁺──►", "Phenol + Acetone", "CO₂/NaOH → Ac₂O", "Kolbe + Acetylation", "Aspirin + Iodoform (from Acetone)", "One reaction gives BOTH Phenol (aromatic tree) and Acetone (aliphatic tree)!"]
    },
    hinglish: "JEE Main ke har doosre roadmap ki shuruat yahan se hoti hai: Benzene + Propene / H⁺ → Cumene (Isopropylbenzene) ──(i) O₂ (ii) H₃O⁺──► Phenol (A) + Acetone (B)! Ab A (Phenol) mein CO₂/NaOH + Ac₂O daal ke Aspirin puchhenge, ya Zn dust daal ke wapas Benzene; aur B (Acetone) mein I₂/NaOH (Iodoform) ya Ba(OH)₂/Δ (Mesityl oxide) puchhenge!",
    touches: "Benzene → Cumene hydroperoxide rearrangement → Phenol + Acetone",
    ignores: "No side-chain chlorination required",
    trap: "Cumene Hydroperoxide Rearrangement Mechanism: Ph–C(Me)₂–O–O–H mein H⁺ lagne ke baad H₂O nikalta hai aur Phenyl group Carbon se Oxygen pe migrate karta hai!",
    exampleText: "Benzene + Propene/H⁺ → Cumene ──O₂, H₃O⁺──► Phenol + Acetone."
  },
  {
    id: "COMBO-07",
    tab: "COMBO",
    title: "Combo #7: Halide → KCN → Hydrolysis / SOCl₂ / NH₃ / Hoffmann vs LiAlH₄ (+1 vs Same Carbon!)",
    category: "JEE Mixed Combo • Carbon Chain Stepping-Up & Stepping-Down",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "SN2",
    intermedLabel: "🔗 R-X + KCN adds 1 Carbon | LiAlH₄ keeps +1 C | H₃O⁺ → NH₃ → Br₂/KOH drops 1 C!",
    svgData: {
      type: "combo_chain",
      params: ["R-CH₂-Br (n C)", "KCN (SN2)", "R-CH₂-CN (n+1 C)", "H₃O⁺ then NH₃/Δ", "R-CH₂-CONH₂", "Br₂ + 4 KOH", "R-CH₂-NH₂ (Back to n C!)", "Whereas R-CH₂-CN + LiAlH₄ gives R-CH₂-CH₂-NH₂ (n+1 Carbons)!"]
    },
    hinglish: "Chain length counting trap! Agar R-Br (n carbons) mein KCN daala toh R-CN (n+1 carbons) bana. Ab 2 raaste: • Raasta 1: R-CN + LiAlH₄ (ya H₂/Ni, ya Na/EtOH Mendius) → R-CH₂-NH₂ (n+1 carbons). • Raasta 2: R-CN + Partial H₃O⁺ (ya H₃O⁺ + NH₃/Δ) → R-CONH₂ ──Br₂/KOH (Hoffmann)──► R-NH₂ (1 carbon kat ke wapas n carbons ho gaya!).",
    touches: "1° and 2° Alkyl Halides, Nitriles, Amides",
    ignores: "Aryl halides do not react with KCN without CuCN/DMF",
    trap: "Partial vs Complete Hydrolysis of R-CN: Conc. HCl / H₂O₂-OH⁻ (Mild) stops R-CN at Amide (R-CONH₂); whereas Dil. HCl/H₂O, Δ (Excess) hydrolyzes R-CN completely to Carboxylic Acid (R-COOH) + NH₄⁺!",
    exampleText: "CH₃Br ──KCN──► CH₃CN ──LiAlH₄──► CH₃CH₂NH₂ | CH₃CN ──H₂O₂/OH⁻──► CH₃CONH₂ ──Br₂/KOH──► CH₃NH₂."
  },
  {
    id: "COMBO-08",
    tab: "COMBO",
    title: "Combo #8: Cyclohexene → NBS/hν → Alc. KOH → Diels-Alder ([4+2] Cycloaddition)",
    category: "JEE Mixed Combo • Allylic Bromination to Conjugated Diene to Bicyclic Adduct",
    stars: 2,
    freq: "★★ Asked 7+x in Tough Shifts & Adv",
    intermed: "Free Radical",
    intermedLabel: "🔗 Alkene → Allyl Bromide → Conjugated 1,3-Diene → + Dienophile, Δ → 6-Ring!",
    svgData: {
      type: "combo_chain",
      params: ["Cyclohexene", "NBS / hν", "3-Bromocyclohexene", "Alc. KOH, Δ", "Cyclohexa-1,3-diene", "+ CH₂=CH-CHO, Δ", "Bicyclic Diels-Alder Adduct!", "Conjugated 1,3-diene (s-cis) + Alkene with EWG → Concerted Syn [4+2] Ring!"]
    },
    hinglish: "Jab kisi question mein NBS/hν ke turant baad Alc. KOH/Δ dikhe, toh samajh jao teacher Conjugated 1,3-Diene banwa raha hai! Aur agar agle arrow pe koi Alkene/Alkyne with -CHO / -CN / -COOR / Maleic anhydride aur Δ likha ho, toh wo Diels-Alder [4+2] Cycloaddition hai — 4π + 2π milke naya 6-membered cyclohexene ring banate hain!",
    touches: "Alkenes → Allylic Bromides → 1,3-Dienes → Cyclohexenes",
    ignores: "s-trans locked dienes cannot undergo Diels-Alder reaction",
    trap: "Stereospecificity of Diels-Alder: Cis-dienophile gives CIS-substituted cyclohexene; Trans-dienophile gives TRANS-substituted cyclohexene!",
    exampleText: "Cyclopentadiene + Ethene ──Δ──► Norbornene (Bicyclo[2.2.1]hept-2-ene)."
  },
  {
    id: "COMBO-09",
    tab: "COMBO",
    title: "Combo #9: Cyclohexanone → NH₂OH → H₂SO₄ (Beckmann) → ε-Caprolactam → Nylon-6",
    category: "JEE Mixed Combo • Ring-Expanding Oxime to Polymer Monomer",
    stars: 3,
    freq: "★★★ Asked 9+x",
    intermed: "No Rearrangement",
    intermedLabel: "🔗 6-Ring Ketone → Oxime → 7-Membered Cyclic Amide (Caprolactam) → Nylon-6!",
    svgData: {
      type: "combo_chain",
      params: ["Cyclohexanone (6-Ring)", "NH₂OH (pH 3.5)", "Cyclohexanone Oxime", "Conc. H₂SO₄, Δ", "Beckmann Shift!", "Ring Expands 6 → 7", "ε-Caprolactam → Nylon-6", "Hydrolysis of Caprolactam gives 6-Aminohexanoic acid!"]
    },
    hinglish: "6-membered ring ketone (Cyclohexanone) mein NH₂OH daalo → Oxime bana. Ab Conc. H₂SO₄ (Beckmann Rearrangement) daalte hi ring ka ek -CH₂- bond toot ke Nitrogen se jud jata hai aur 7-membered cyclic amide (ε-Caprolactam) banta hai, jisko H₂O / 533 K pe heat karne se Nylon-6 polymer banta hai!",
    touches: "Cyclic Ketones → Oximes → Lactams",
    ignores: "Baeyer-Villiger (mCPBA) on Cyclohexanone gives ε-Caprolactone (ester), NOT Lactam!",
    trap: "Lactone vs Lactam Trap: Cyclohexanone + mCPBA → ε-Caprolactone (Cyclic Ester, -CO-O-); Cyclohexanone + NH₂OH / H⁺ → ε-Caprolactam (Cyclic Amide, -CO-NH-)!",
    exampleText: "Phenol ──H₂/Ni──► Cyclohexanol ──PCC──► Cyclohexanone ──NH₂OH/H⁺──► ε-Caprolactam."
  },
  {
    id: "COMBO-10",
    tab: "COMBO",
    title: "Combo #10: Order of Steps Switch on Benzene (Nitration First = META vs Bromination First = PARA!)",
    category: "JEE Mixed Combo • Sequence Reversal Trap",
    stars: 3,
    freq: "★★★ Asked 15+x",
    intermed: "No Rearrangement",
    intermedLabel: "🔗 (i) HNO₃ (ii) Br₂/FeBr₃ → META! | (i) Br₂/FeBr₃ (ii) HNO₃ → ORTHO/PARA!",
    svgData: {
      type: "combo_chain",
      params: ["Benzene (C₆H₆)", "Path A: HNO₃ first", "Ph-NO₂ (m-Director!)", "then Br₂ / FeBr₃", "m-Bromonitrobenzene!", "Path B: Br₂ first → HNO₃", "p-Bromonitrobenzene!", "Same two reagents in reverse order give completely different isomers!"]
    },
    hinglish: "Reagents bilkul same hain (HNO₃/H₂SO₄ aur Br₂/FeBr₃), par order पलटते ही answer पलट जाता है: • Path A: Pehle Nitration (Ph-NO₂, Meta-director) → phir Bromination = m-Bromonitrobenzene! • Path B: Pehle Bromination (Ph-Br, Ortho/Para-director) → phir Nitration = p-Bromonitrobenzene (Major)! Same trick: Toluene ──KMnO₄──► PhCOOH ──HNO₃──► m-Nitrobenzoic acid vs Toluene ──HNO₃──► p-Nitrotoluene ──KMnO₄──► p-Nitrobenzoic acid!",
    touches: "All Disubstituted Benzene Synthesis Roadmaps",
    ignores: "Nitrobenzene does not undergo Friedel-Crafts",
    trap: "Toluene Oxidation + Nitration Order Trap: Agar p-Nitrobenzoic acid banana hai toh pehle Toluene ka Nitration karo phir KMnO₄ lagao; agar m-Nitrobenzoic acid banana hai toh pehle KMnO₄ se -CH₃ → -COOH banao phir Nitration karo!",
    exampleText: "Toluene ──(1) KMnO₄/OH⁻ (2) HNO₃/H₂SO₄──► m-Nitrobenzoic acid."
  },
  {
    id: "COMBO-11",
    tab: "COMBO",
    title: "Combo #11: Alkyne → Lindlar/Birch → Syn/Anti Addition (The Ultimate CSM / TAC Stereochemistry Matrix!)",
    category: "JEE Mixed Combo • Stereochemistry of 2-Step Additions",
    stars: 3,
    freq: "★★★ Asked 12+x in JEE Main & Adv",
    intermed: "No Rearrangement",
    intermedLabel: "🔗 Cis + Syn = Meso | Cis + Anti = Racemic (±) | Trans + Syn = Racemic | Trans + Anti = Meso!",
    svgData: {
      type: "combo_chain",
      params: ["Me-C≡C-Me (But-2-yne)", "Lindlar (CIS) vs Birch (TRANS)", "Cis vs Trans But-2-ene", "Br₂/CCl₄ (ANTI) or Cold KMnO₄ (SYN)", "Apply CSM / TAC Rule!", "Symmetrical Substrate", "Meso (Achiral) vs Racemic (±)!", "CSM = Cis+Syn=Meso | CAR = Cis+Anti=Racemic | TAM = Trans+Anti=Meso!"]
    },
    hinglish: "Symmetrical Alkyne (R-C≡C-R) se shuru hone wale Stereochemistry sawaalon ka 5-Second Code (CSM / CAR / TAM / TSR): • Lindlar (H₂/Pd-CaCO₃) gives CIS-Alkene: Ispe Cold KMnO₄ / OsO₄ (Syn) lagao → Meso (CSM)! Ispe Br₂/CCl₄ ya mCPBA/H₃O⁺ (Anti) lagao → Racemic ± (CAR)! • Birch (Na/liq. NH₃) gives TRANS-Alkene: Ispe Br₂/CCl₄ (Anti) lagao → Meso (TAM)! Ispe Cold KMnO₄ (Syn) lagao → Racemic ± (TSR)!",
    touches: "Symmetrical Internal Alkynes & Alkenes",
    ignores: "Unsymmetrical alkenes (R ≠ R') have no plane of symmetry, so they ALWAYS give Racemic pairs of erythro/threo enantiomers!",
    trap: "Unsymmetrical Alkene (Ph-CH=CH-Me) Trap: Agar donon ends alag hain (R ≠ R'), toh kabhi Meso nahi ban sakta (plane of symmetry ho hi nahi sakti!)—wahan hamesha Optically Active Racemic Mixture (d + l pair = 2 stereoisomers) banta hai!",
    exampleText: "But-2-yne ──(1) Na/liq. NH₃ (2) Br₂/CCl₄──► Meso-2,3-dibromobutane (1 optically inactive compound)."
  },
  {
    id: "COMBO-12",
    tab: "COMBO",
    title: "Combo #12: Epoxide + RMgX → PCC → Wittig Reaction → Ozonolysis / HBO",
    category: "JEE Mixed Combo • Chain Elongation + Functional Group Dance",
    stars: 2,
    freq: "★★ Asked 6+x",
    intermed: "SN2",
    intermedLabel: "🔗 RMgX + Ethylene Oxide adds 2 Carbons → PCC gives -CHO → Ph₃P=CH₂ gives Alkene!",
    svgData: {
      type: "combo_chain",
      params: ["R-MgBr + Oxirane", "(ii) H₃O⁺ (+2 Carbons!)", "R-CH₂-CH₂-OH (1° ROH)", "PCC / CH₂Cl₂", "R-CH₂-CHO (Aldehyde)", "Ph₃P=CH-Me (Wittig)", "R-CH₂-CH=CH-Me (Alkene)!", "Ethylene oxide + RMgX always extends the carbon chain by exactly TWO carbons!"]
    },
    hinglish: "Jab bhi RMgX ke saath Ethylene Oxide (Oxirane) dikhe, toh bina soche R mein -CH₂-CH₂-OH (2 carbon + 1° alcohol) jod do! Ab uspe PCC daaloge toh Aldehyde (R-CH₂-CHO) banega, aur phir Wittig (Ph₃P=CHR') daaloge toh C=O ki jagah C=CHR' (Alkene) ban jayega!",
    touches: "Grignard reagents, Epoxides, Aldehydes, Wittig ylides",
    ignores: "PCC does not oxidize the alcohol to carboxylic acid",
    trap: "1-Carbon vs 2-Carbon Homologation of RMgX: RMgX + HCHO → R-CH₂-OH (+1 Carbon); RMgX + Ethylene oxide → R-CH₂-CH₂-OH (+2 Carbons); RMgX + Epichlorohydrin adds 3 carbons!",
    exampleText: "PhMgBr ──(1) Ethylene oxide (2) H₃O⁺──► Ph-CH₂-CH₂-OH (2-Phenylethanol) ──PCC──► Ph-CH₂-CHO."
  }
];

export const MODULE_TABS: { id: ReagentCard['tab'] | 'ALL' | 'MATRIX'; label: string; count?: number; highlight?: boolean }[] = [
  { id: 'ALL', label: '📚 All Syllabus (62)' },
  { id: 'P1', label: '1. Hydrocarbons & EAS (17)' },
  { id: 'P2', label: '2. Halides & Grignard (11)' },
  { id: 'P3', label: '3. Alcohol, Phenol & Ether (10)' },
  { id: 'P4', label: '4. Aldehydes & Ketones (9)' },
  { id: 'P5', label: '5. Acids, Amines & BDC (8)' },
  { id: 'P6', label: '6. Red/Ox + Glucose & POC (6)' },
  { id: 'COMBO', label: '🔗 7. JEE Mixed-Reagent Combos (12)', highlight: true },
  { id: 'MATRIX', label: '⚡ 8. Master Selectivity Cheat Table', highlight: true }
];
