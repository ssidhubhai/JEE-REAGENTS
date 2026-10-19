import React from 'react';
import { SvgTemplateData } from '../types';

interface MechanismSvgProps {
  data: SvgTemplateData;
}

// Helper to safely format reagent text over / under arrows without overlapping chemical structures
const renderArrowText = (
  text: string,
  x: number,
  y: number,
  color: string,
  isBold = false,
  fontFamily?: string
) => {
  if (!text) return null;
  const clean = text.trim();

  // If text is short, render on a single line
  if (clean.length <= 20) {
    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fontSize={clean.length > 15 ? 10.5 : 12}
        fontWeight={isBold ? 'bold' : '500'}
        fill={color}
        fontFamily={fontFamily}
      >
        {clean}
      </text>
    );
  }

  // Intelligently split long text into 2 balanced lines
  let splitIndex = -1;
  const splitDelimiters = [' then ', ' vs ', ' / ', ' or ', ' (ii) ', '+', ', '];
  for (const delim of splitDelimiters) {
    const idx = clean.indexOf(delim);
    if (idx > 5 && idx < clean.length - 5) {
      splitIndex = idx + (delim.endsWith(' ') ? delim.length - 1 : delim.length);
      break;
    }
  }

  if (splitIndex === -1) {
    const mid = Math.floor(clean.length / 2);
    const spaceBefore = clean.lastIndexOf(' ', mid);
    const spaceAfter = clean.indexOf(' ', mid);
    if (spaceBefore !== -1 && (mid - spaceBefore < 8 || spaceAfter === -1)) {
      splitIndex = spaceBefore;
    } else if (spaceAfter !== -1) {
      splitIndex = spaceAfter;
    } else {
      splitIndex = mid;
    }
  }

  const line1 = clean.slice(0, splitIndex).trim();
  const line2 = clean.slice(splitIndex).trim();

  return (
    <text
      x={x}
      y={y - 7}
      textAnchor="middle"
      fontSize={9.5}
      fontWeight={isBold ? 'bold' : '500'}
      fill={color}
      fontFamily={fontFamily}
    >
      <tspan x={x} dy="0">
        {line1}
      </tspan>
      <tspan x={x} dy="13">
        {line2}
      </tspan>
    </text>
  );
};

export const MechanismSvg: React.FC<MechanismSvgProps> = ({ data }) => {
  const { type, params } = data;

  let svgContent: React.ReactNode = null;
  let bottomNote: string | null = null;

  switch (type) {
    case 'alkene_markov': {
      const [rTop, rBot, group, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          {/* Substrate: Unsymmetrical Alkene */}
          <g stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="25,75 55,45 90,70 125,45" />
            <line x1="91" y1="61" x2="121" y2="37" stroke="#dc2626" strokeWidth="2.6" />
          </g>
          <text x="75" y="98" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">
            Unsymm. Alkene
          </text>

          {/* Reagents & Arrow */}
          <g className="svg-reagent-group">
            <line x1="150" y1="58" x2="280" y2="58" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,58 268,53 268,63" fill="#1e293b" />
            {renderArrowText(rTop, 215, 45, '#b91c1c', true)}
            {renderArrowText(rBot, 215, 76, '#334155', false)}
          </g>

          {/* Product */}
          <g className="svg-product-group">
            <polyline points="315,75 345,45 385,70 420,45" stroke="#15803d" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="385" y1="70" x2="385" y2="34" stroke="#dc2626" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="385" cy="22" r="13" fill="#fef08a" stroke="#dc2626" strokeWidth="1.5" />
            <text x="385" y="26" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#b91c1c">
              {group}
            </text>
            <text x="385" y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
              Markovnikov Product
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'alkene_antimarkov': {
      const [rTop, rBot, group, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <g stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="25,75 55,45 90,70 125,45" />
            <line x1="91" y1="61" x2="121" y2="37" stroke="#dc2626" strokeWidth="2.6" />
          </g>
          <text x="75" y="98" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">
            Terminal Alkene
          </text>

          <g className="svg-reagent-group">
            <line x1="150" y1="58" x2="280" y2="58" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,58 268,53 268,63" fill="#1e293b" />
            {renderArrowText(rTop, 215, 45, '#b91c1c', true)}
            {renderArrowText(rBot, 215, 76, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polyline points="305,75 335,45 370,70 405,45" stroke="#15803d" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="405" y1="45" x2="435" y2="60" stroke="#dc2626" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="448" cy="65" r="13" fill="#fef08a" stroke="#dc2626" strokeWidth="1.5" />
            <text x="448" y="69" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#b91c1c">
              {group}
            </text>
            <text x="375" y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
              Anti-Markovnikov (1°)
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'cyclohexene_syn': {
      const [rTop, rBot, g1, g2, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 120" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <polygon points="55,25 90,45 90,80 55,100 20,80 20,45" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <line x1="83" y1="48" x2="83" y2="77" stroke="#dc2626" strokeWidth="2.6" />
          <text x="55" y="115" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">
            Cyclohexene
          </text>

          <g className="svg-reagent-group">
            <line x1="130" y1="62" x2="275" y2="62" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="275,62 263,57 263,67" fill="#1e293b" />
            {renderArrowText(rTop, 202, 48, '#b91c1c', true)}
            {renderArrowText(rBot, 202, 80, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polygon points="345,25 380,45 380,80 345,100 310,80 310,45" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <polygon points="380,45 412,32 414,40" fill="#dc2626" />
            <text x="420" y="38" fontSize="11.5" fontWeight="bold" fill="#b91c1c">
              {g1}
            </text>
            <polygon points="380,80 412,85 410,93" fill="#dc2626" />
            <text x="420" y="93" fontSize="11.5" fontWeight="bold" fill="#b91c1c">
              {g2}
            </text>
            <text x="345" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
              SYN Addition (Cis)
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'cyclohexene_anti': {
      const [rTop, rBot, g1, g2, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 120" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <polygon points="55,25 90,45 90,80 55,100 20,80 20,45" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <line x1="83" y1="48" x2="83" y2="77" stroke="#dc2626" strokeWidth="2.6" />
          <text x="55" y="115" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">
            Cyclohexene
          </text>

          <g className="svg-reagent-group">
            <line x1="130" y1="62" x2="275" y2="62" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="275,62 263,57 263,67" fill="#1e293b" />
            {renderArrowText(rTop, 202, 48, '#b91c1c', true)}
            {renderArrowText(rBot, 202, 80, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polygon points="345,25 380,45 380,80 345,100 310,80 310,45" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <polygon points="380,45 412,32 414,40" fill="#dc2626" />
            <text x="420" y="38" fontSize="11" fontWeight="bold" fill="#b91c1c">
              {g1} (Wedge)
            </text>
            <line x1="384" y1="82" x2="382" y2="88" stroke="#1d4ed8" strokeWidth="2.2" />
            <line x1="392" y1="84" x2="389" y2="92" stroke="#1d4ed8" strokeWidth="2.2" />
            <line x1="400" y1="86" x2="396" y2="96" stroke="#1d4ed8" strokeWidth="2.2" />
            <text x="410" y="97" fontSize="11" fontWeight="bold" fill="#1d4ed8">
              {g2} (Dash)
            </text>
            <text x="345" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
              ANTI Addition (Trans)
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'alkyne_cis_trans': {
      const [rTop, rBot, isCis, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <g stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <line x1="20" y1="58" x2="50" y2="58" />
            <line x1="50" y1="58" x2="95" y2="58" stroke="#dc2626" strokeWidth="2.8" />
            <line x1="54" y1="51" x2="91" y2="51" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="54" y1="65" x2="91" y2="65" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="95" y1="58" x2="125" y2="58" />
          </g>
          <text x="72" y="95" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="600">
            Internal Alkyne
          </text>

          <g className="svg-reagent-group">
            <line x1="145" y1="58" x2="280" y2="58" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,58 268,53 268,63" fill="#1e293b" />
            {renderArrowText(rTop, 212, 45, '#b91c1c', true)}
            {renderArrowText(rBot, 212, 76, '#334155', false)}
          </g>

          <g className="svg-product-group">
            {isCis ? (
              <>
                <line x1="345" y1="58" x2="400" y2="58" stroke="#15803d" strokeWidth="2.8" />
                <line x1="349" y1="51" x2="396" y2="51" stroke="#dc2626" strokeWidth="2.5" />
                <line x1="345" y1="58" x2="322" y2="30" stroke="#15803d" strokeWidth="2.6" strokeLinecap="round" />
                <line x1="400" y1="58" x2="423" y2="30" stroke="#15803d" strokeWidth="2.6" strokeLinecap="round" />
                <line x1="345" y1="58" x2="328" y2="82" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="3,2" />
                <line x1="400" y1="58" x2="417" y2="82" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="3,2" />
                <text x="318" y="26" fontSize="11.5" fontWeight="bold" fill="#15803d">
                  R
                </text>
                <text x="428" y="26" fontSize="11.5" fontWeight="bold" fill="#15803d">
                  R'
                </text>
                <text x="320" y="93" fontSize="10.5" fill="#dc2626" fontWeight="bold">
                  H
                </text>
                <text x="420" y="93" fontSize="10.5" fill="#dc2626" fontWeight="bold">
                  H
                </text>
                <text x="372" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
                  100% CIS Alkene
                </text>
              </>
            ) : (
              <>
                <line x1="345" y1="58" x2="400" y2="58" stroke="#15803d" strokeWidth="2.8" />
                <line x1="349" y1="51" x2="396" y2="51" stroke="#dc2626" strokeWidth="2.5" />
                <line x1="345" y1="58" x2="322" y2="30" stroke="#15803d" strokeWidth="2.6" strokeLinecap="round" />
                <line x1="400" y1="58" x2="423" y2="86" stroke="#15803d" strokeWidth="2.6" strokeLinecap="round" />
                <text x="318" y="26" fontSize="11.5" fontWeight="bold" fill="#15803d">
                  R
                </text>
                <text x="428" y="94" fontSize="11.5" fontWeight="bold" fill="#15803d">
                  R'
                </text>
                <text x="372" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
                  100% TRANS Alkene
                </text>
              </>
            )}
          </g>
        </svg>
      );
      break;
    }

    case 'ozonolysis_cut': {
      const [rTop, rBot, leftProd, rightProd, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <polyline points="20,80 50,55 95,55 125,30" stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <line x1="50" y1="63" x2="95" y2="63" stroke="#1d4ed8" strokeWidth="2.6" />
          <line x1="95" y1="55" x2="125" y2="82" stroke="#1d4ed8" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="72" y1="25" x2="72" y2="95" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="4,3" />
          <text x="72" y="19" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="bold">
            ✂️ Cut C=C
          </text>

          <g className="svg-reagent-group">
            <line x1="145" y1="58" x2="275" y2="58" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="275,58 263,53 263,63" fill="#1e293b" />
            {renderArrowText(rTop, 210, 45, '#b91c1c', true)}
            {renderArrowText(rBot, 210, 76, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polyline points="295,78 325,55 352,78" stroke="#15803d" strokeWidth="2.5" fill="none" />
            <line x1="322" y1="55" x2="322" y2="34" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="328" y1="55" x2="328" y2="34" stroke="#dc2626" strokeWidth="2.4" />
            <text x="325" y="29" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
              O
            </text>
            <text x="325" y="96" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e293b">
              {leftProd}
            </text>

            <text x="375" y="62" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">
              +
            </text>

            <polyline points="400,78 430,55 458,78" stroke="#15803d" strokeWidth="2.5" fill="none" />
            <line x1="427" y1="55" x2="427" y2="34" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="433" y1="55" x2="433" y2="34" stroke="#dc2626" strokeWidth="2.4" />
            <text x="430" y="29" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
              O
            </text>
            <text x="430" y="96" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e293b">
              {rightProd}
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'ring_expansion': {
      const [rTop, rBot, subLabel, prodLabel] = params;
      bottomNote = prodLabel;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <rect x="25" y="38" width="44" height="44" stroke="#1d4ed8" strokeWidth="2.6" fill="none" rx="2" />
          <line x1="69" y1="38" x2="100" y2="25" stroke="#dc2626" strokeWidth="2.6" strokeLinecap="round" />
          <line x1="100" y1="25" x2="124" y2="45" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
          <text x="105" y="19" fontSize="11" fontWeight="bold" fill="#dc2626">
            CH(OH)Me
          </text>
          <text x="60" y="102" textAnchor="middle" fontSize="10.5" fill="#475569" fontWeight="600">
            {subLabel}
          </text>

          <g className="svg-reagent-group">
            <line x1="145" y1="58" x2="280" y2="58" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,58 268,53 268,63" fill="#1e293b" />
            {renderArrowText(rTop, 212, 45, '#b91c1c', true)}
            {renderArrowText(rBot, 212, 76, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polygon points="355,22 390,44 380,82 334,82 322,44" stroke="#15803d" strokeWidth="2.7" fill="none" strokeLinejoin="round" />
            <line x1="353" y1="28" x2="384" y2="47" stroke="#dc2626" strokeWidth="2.6" />
            <line x1="355" y1="22" x2="355" y2="4" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="390" y1="44" x2="416" y2="36" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
            <text x="355" y="102" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">
              5-Ring / Stable C⁺ Product
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'benzene_rxn': {
      const [subTop, subOrtho, rTop, rBot, prodTop, prodOrtho, prodPara, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 120" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(65,60)">
            <polygon points="0,-28 25,-14 25,14 0,28 -25,14 -25,-14" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
            <circle cx="0" cy="0" r="15" stroke="#1d4ed8" strokeWidth="1.8" fill="none" strokeDasharray="4,2" />
            {subTop && (
              <>
                <line x1="0" y1="-28" x2="0" y2="-42" stroke="#1d4ed8" strokeWidth="2.4" />
                <text x="0" y="-45" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">
                  {subTop}
                </text>
              </>
            )}
            {subOrtho && (
              <>
                <line x1="25" y1="-14" x2="39" y2="-22" stroke="#dc2626" strokeWidth="2.2" />
                <text x="43" y="-20" fontSize="10.5" fontWeight="bold" fill="#dc2626">
                  {subOrtho}
                </text>
              </>
            )}
          </g>

          <g className="svg-reagent-group">
            <line x1="140" y1="60" x2="280" y2="60" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,60 268,55 268,65" fill="#1e293b" />
            {renderArrowText(rTop, 210, 46, '#b91c1c', true)}
            {renderArrowText(rBot, 210, 78, '#334155', false)}
          </g>

          <g className="svg-product-group" transform="translate(360,60)">
            <polygon points="0,-28 25,-14 25,14 0,28 -25,14 -25,-14" stroke="#15803d" strokeWidth="2.6" fill="none" />
            <circle cx="0" cy="0" r="15" stroke="#15803d" strokeWidth="1.8" fill="none" strokeDasharray="4,2" />
            {prodTop && (
              <>
                <line x1="0" y1="-28" x2="0" y2="-42" stroke="#15803d" strokeWidth="2.4" />
                <text x="0" y="-45" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#15803d">
                  {prodTop}
                </text>
              </>
            )}
            {prodOrtho && (
              <>
                <line x1="25" y1="-14" x2="40" y2="-23" stroke="#dc2626" strokeWidth="2.5" />
                <text x="44" y="-21" fontSize="10.5" fontWeight="bold" fill="#b91c1c">
                  {prodOrtho}
                </text>
              </>
            )}
            {prodPara && (
              <>
                <line x1="0" y1="28" x2="0" y2="40" stroke="#dc2626" strokeWidth="2.5" />
                <text x="0" y="52" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#b91c1c">
                  {prodPara}
                </text>
              </>
            )}
          </g>
        </svg>
      );
      break;
    }

    case 'carbonyl_rxn': {
      const [subLeft, subRight, rTop, rBot, prodCenter, prodSub, noteRight] = params;
      bottomNote = noteRight;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <polyline points="25,75 65,50 105,75" stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <line x1="62" y1="50" x2="62" y2="24" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="68" y1="50" x2="68" y2="24" stroke="#dc2626" strokeWidth="2.5" />
          <text x="65" y="19" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
            O
          </text>
          <text x="22" y="92" fontSize="10.5" fontWeight="bold" fill="#1d4ed8">
            {subLeft}
          </text>
          <text x="96" y="92" fontSize="10.5" fontWeight="bold" fill="#1d4ed8">
            {subRight}
          </text>

          <g className="svg-reagent-group">
            <line x1="140" y1="55" x2="280" y2="55" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,55 268,50 268,60" fill="#1e293b" />
            {renderArrowText(rTop, 210, 42, '#b91c1c', true)}
            {renderArrowText(rBot, 210, 74, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <polyline points="325,75 368,50 410,75" stroke="#15803d" strokeWidth="2.7" fill="none" strokeLinecap="round" />
            <line x1="368" y1="50" x2="368" y2="24" stroke="#dc2626" strokeWidth="2.7" />
            <rect x="290" y="4" width="165" height="20" rx="4" fill="#fef08a" stroke="#dc2626" strokeWidth="1.3" />
            <text x="372" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">
              {prodCenter}
            </text>
            <text x="368" y="92" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e293b">
              {prodSub}
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'epoxide_open': {
      const [rTop, rBot, attackSite, prodLeft, prodRight, noteRight] = params;
      bottomNote = `${attackSite} • ${noteRight}`;
      svgContent = (
        <svg viewBox="0 0 540 115" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          <line x1="40" y1="68" x2="95" y2="68" stroke="#1d4ed8" strokeWidth="2.8" />
          <line x1="40" y1="68" x2="68" y2="34" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="95" y1="68" x2="68" y2="34" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="68" cy="30" r="8" fill="#fdfbf5" />
          <text x="68" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">
            O
          </text>
          <line x1="40" y1="68" x2="18" y2="54" stroke="#1d4ed8" strokeWidth="2.5" />
          <line x1="40" y1="68" x2="22" y2="86" stroke="#1d4ed8" strokeWidth="2.5" />
          <text x="40" y="100" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">
            3° Carbon
          </text>
          <text x="98" y="100" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontWeight="bold">
            1° Carbon
          </text>

          <g className="svg-reagent-group">
            <line x1="140" y1="56" x2="280" y2="56" stroke="#1e293b" strokeWidth="2.4" strokeLinecap="round" />
            <polygon points="280,56 268,51 268,61" fill="#1e293b" />
            {renderArrowText(rTop, 210, 43, '#b91c1c', true)}
            {renderArrowText(rBot, 210, 74, '#334155', false)}
          </g>

          <g className="svg-product-group">
            <line x1="335" y1="62" x2="405" y2="62" stroke="#15803d" strokeWidth="2.8" />
            <line x1="335" y1="62" x2="312" y2="46" stroke="#15803d" strokeWidth="2.5" />
            <line x1="335" y1="62" x2="312" y2="80" stroke="#15803d" strokeWidth="2.5" />
            <line x1="335" y1="62" x2="335" y2="34" stroke="#dc2626" strokeWidth="2.6" />
            <line x1="405" y1="62" x2="405" y2="34" stroke="#1d4ed8" strokeWidth="2.6" />
            <text x="335" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">
              {prodLeft}
            </text>
            <text x="405" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">
              {prodRight}
            </text>
            <text x="370" y="98" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#15803d">
              Anti-Opening (Inversion)
            </text>
          </g>
        </svg>
      );
      break;
    }

    case 'combo_chain': {
      const [s1, r1, s2, r2, s3, r3, finalProd, subNote] = params;
      bottomNote = subNote;
      svgContent = (
        <svg viewBox="0 0 540 100" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
          {/* Box 1: Substrate */}
          <rect x="8" y="24" width="96" height="50" rx="7" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="56" y="47" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">
            {s1}
          </text>
          <text x="56" y="63" textAnchor="middle" fontSize="9" fill="#475569">
            Substrate (A)
          </text>

          {/* Arrow 1 */}
          <g className="svg-reagent-group">
            <line x1="106" y1="49" x2="164" y2="49" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <polygon points="164,49 156,45 156,53" fill="#1e293b" />
            <text x="135" y="41" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#b91c1c">
              {r1}
            </text>
          </g>

          {/* Box 2: Intermediate */}
          <g className="svg-product-group">
            <rect x="166" y="24" width="104" height="50" rx="7" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
            <text x="218" y="47" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
              {s2}
            </text>
            <text x="218" y="63" textAnchor="middle" fontSize="9" fill="#78350f">
              Intermed. (B)
            </text>
          </g>

          {/* Arrow 2 */}
          <g className="svg-reagent-group">
            <line x1="272" y1="49" x2="330" y2="49" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
            <polygon points="330,49 322,45 322,53" fill="#1e293b" />
            <text x="301" y="39" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#b91c1c">
              {r2}
            </text>
            <text x="301" y="63" textAnchor="middle" fontSize="8.5" fill="#334155">
              {r3}
            </text>
          </g>

          {/* Box 3: Final Product */}
          <g className="svg-product-group">
            <rect x="332" y="18" width="200" height="62" rx="8" fill="#ecfdf5" stroke="#15803d" strokeWidth="2.2" />
            <text x="432" y="42" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#14532d">
              {finalProd}
            </text>
            <text x="432" y="61" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#b91c1c">
              {s3}
            </text>
          </g>
        </svg>
      );
      break;
    }

    default:
      return null;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Crisp Skeletal Diagram */}
      <div className="w-full overflow-hidden flex items-center justify-center">
        {svgContent}
      </div>

      {/* Mechanism Insight Banner (Word-wrapped HTML so long text NEVER overlaps chemical bonds or arrows) */}
      {bottomNote && (
        <div className="product-text-reveal mt-2.5 pt-2 border-t border-dashed border-slate-300/80 text-xs sm:text-[13px] font-semibold text-emerald-900 flex items-start sm:items-center justify-center gap-1.5 text-center leading-snug px-1">
          <span className="shrink-0 text-emerald-700 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider bg-emerald-100/90 px-1.5 py-0.5 rounded">
            📌 Mechanism Rule:
          </span>
          <span className="text-slate-800 font-medium break-words">
            {bottomNote}
          </span>
        </div>
      )}
    </div>
  );
};
