import React from 'react';
import { SvgTemplateData } from '../types';

export const MechanismSvg: React.FC<{ data: SvgTemplateData }> = ({ data }) => {
  const { type, params } = data;

  switch (type) {
    case 'alkene_markov': {
      const [rTop, rBot, group, noteRight] = params;
      return (
        <svg viewBox="0 0 540 130" className="w-full h-auto">
          <g stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="25,85 55,55 90,80 125,55" />
            <line x1="91" y1="71" x2="121" y2="47" stroke="#dc2626" strokeWidth="2.6" />
          </g>
          <text x="22" y="108" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">Unsymm. Alkene</text>
          <g className="svg-reagent-group">
            <line x1="155" y1="68" x2="275" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,68 265,63 265,73" fill="#1e293b" />
            <text x="215" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="215" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polyline points="315,85 345,55 385,80 420,55" stroke="#15803d" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="385" y1="80" x2="385" y2="42" stroke="#dc2626" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="385" cy="28" r="14" fill="#fef08a" stroke="#dc2626" strokeWidth="1.5" />
            <text x="385" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">{group}</text>
            <text x="385" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'alkene_antimarkov': {
      const [rTop, rBot, group, noteRight] = params;
      return (
        <svg viewBox="0 0 540 130" className="w-full h-auto">
          <g stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="25,85 55,55 90,80 125,55" />
            <line x1="91" y1="71" x2="121" y2="47" stroke="#dc2626" strokeWidth="2.6" />
          </g>
          <text x="22" y="108" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">Terminal Alkene</text>
          <g className="svg-reagent-group">
            <line x1="155" y1="68" x2="275" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,68 265,63 265,73" fill="#1e293b" />
            <text x="215" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="215" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polyline points="305,85 335,55 370,80 405,55" stroke="#15803d" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="405" y1="55" x2="438" y2="72" stroke="#dc2626" strokeWidth="2.8" strokeLinecap="round" />
            <circle cx="452" cy="76" r="14" fill="#fef08a" stroke="#dc2626" strokeWidth="1.5" />
            <text x="452" y="80" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">{group}</text>
            <text x="385" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'cyclohexene_syn': {
      const [rTop, rBot, g1, g2, noteRight] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <polygon points="55,30 90,50 90,85 55,105 20,85 20,50" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <line x1="83" y1="53" x2="83" y2="82" stroke="#dc2626" strokeWidth="2.6" />
          <text x="55" y="123" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">Cyclohexene</text>
          <g className="svg-reagent-group">
            <line x1="130" y1="68" x2="265" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="265,68 255,63 255,73" fill="#1e293b" />
            <text x="198" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="198" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polygon points="340,30 375,50 375,85 340,105 305,85 305,50" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <polygon points="375,50 408,35 411,43" fill="#dc2626" />
            <text x="418" y="42" fontSize="12" fontWeight="bold" fill="#b91c1c">{g1}</text>
            <polygon points="375,85 408,92 405,100" fill="#dc2626" />
            <text x="418" y="100" fontSize="12" fontWeight="bold" fill="#b91c1c">{g2}</text>
            <text x="415" y="123" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'cyclohexene_anti': {
      const [rTop, rBot, g1, g2, noteRight] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <polygon points="55,30 90,50 90,85 55,105 20,85 20,50" stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
          <line x1="83" y1="53" x2="83" y2="82" stroke="#dc2626" strokeWidth="2.6" />
          <text x="55" y="123" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">Cyclohexene</text>
          <g className="svg-reagent-group">
            <line x1="130" y1="68" x2="265" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="265,68 255,63 255,73" fill="#1e293b" />
            <text x="198" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="198" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polygon points="340,30 375,50 375,85 340,105 305,85 305,50" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
            <polygon points="375,50 408,35 411,43" fill="#dc2626" />
            <text x="418" y="42" fontSize="12" fontWeight="bold" fill="#b91c1c">{g1} (Wedge)</text>
            <line x1="382" y1="87" x2="380" y2="93" stroke="#dc2626" strokeWidth="2" />
            <line x1="391" y1="89" x2="388" y2="97" stroke="#dc2626" strokeWidth="2" />
            <line x1="400" y1="91" x2="396" y2="101" stroke="#dc2626" strokeWidth="2" />
            <line x1="409" y1="93" x2="404" y2="105" stroke="#dc2626" strokeWidth="2" />
            <text x="415" y="103" fontSize="12" fontWeight="bold" fill="#1d4ed8">{g2} (Dash)</text>
            <text x="415" y="124" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'alkyne_cis_trans': {
      const [rTop, rBot, isCis, noteRight] = params;
      return (
        <svg viewBox="0 0 540 130" className="w-full h-auto">
          <g stroke="#1d4ed8" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <line x1="20" y1="68" x2="50" y2="68" />
            <line x1="50" y1="68" x2="95" y2="68" stroke="#dc2626" />
            <line x1="54" y1="61" x2="91" y2="61" stroke="#dc2626" />
            <line x1="54" y1="75" x2="91" y2="75" stroke="#dc2626" />
            <line x1="95" y1="68" x2="125" y2="68" />
          </g>
          <text x="72" y="102" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">Internal Alkyne</text>
          <g className="svg-reagent-group">
            <line x1="150" y1="68" x2="275" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,68 265,63 265,73" fill="#1e293b" />
            <text x="212" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="212" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            {isCis ? (
              <>
                <line x1="350" y1="68" x2="405" y2="68" stroke="#15803d" strokeWidth="2.8" />
                <line x1="354" y1="61" x2="401" y2="61" stroke="#dc2626" strokeWidth="2.5" />
                <line x1="350" y1="68" x2="325" y2="38" stroke="#15803d" strokeWidth="2.6" />
                <line x1="405" y1="68" x2="430" y2="38" stroke="#15803d" strokeWidth="2.6" />
                <line x1="350" y1="68" x2="330" y2="95" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="3,2" />
                <line x1="405" y1="68" x2="425" y2="95" stroke="#94a3b8" strokeWidth="1.8" strokeDasharray="3,2" />
                <text x="320" y="33" fontSize="12" fontWeight="bold" fill="#15803d">R</text>
                <text x="433" y="33" fontSize="12" fontWeight="bold" fill="#15803d">R'</text>
                <text x="322" y="106" fontSize="11" fill="#dc2626" fontWeight="bold">H</text>
                <text x="427" y="106" fontSize="11" fill="#dc2626" fontWeight="bold">H</text>
              </>
            ) : (
              <>
                <line x1="350" y1="68" x2="405" y2="68" stroke="#15803d" strokeWidth="2.8" />
                <line x1="354" y1="61" x2="401" y2="61" stroke="#dc2626" strokeWidth="2.5" />
                <line x1="350" y1="68" x2="325" y2="38" stroke="#15803d" strokeWidth="2.6" />
                <line x1="405" y1="68" x2="430" y2="96" stroke="#15803d" strokeWidth="2.6" />
                <text x="318" y="33" fontSize="12" fontWeight="bold" fill="#15803d">R</text>
                <text x="434" y="104" fontSize="12" fontWeight="bold" fill="#15803d">R'</text>
              </>
            )}
            <text x="385" y="122" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'ozonolysis_cut': {
      const [rTop, rBot, leftProd, rightProd, noteRight] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <polyline points="20,90 50,65 95,65 125,40" stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <line x1="50" y1="73" x2="95" y2="73" stroke="#1d4ed8" strokeWidth="2.6" />
          <line x1="95" y1="65" x2="125" y2="92" stroke="#1d4ed8" strokeWidth="2.6" />
          <line x1="72" y1="35" x2="72" y2="102" stroke="#dc2626" strokeWidth="2.2" strokeDasharray="4,3" />
          <text x="72" y="29" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="bold">✂️ Cut C=C</text>
          <g className="svg-reagent-group">
            <line x1="150" y1="68" x2="270" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="270,68 260,63 260,73" fill="#1e293b" />
            <text x="210" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="210" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polyline points="295,88 325,65 352,88" stroke="#15803d" strokeWidth="2.5" fill="none" />
            <line x1="322" y1="65" x2="322" y2="42" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="328" y1="65" x2="328" y2="42" stroke="#dc2626" strokeWidth="2.4" />
            <text x="325" y="37" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">O</text>
            <text x="325" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">{leftProd}</text>
            <text x="382" y="72" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">+</text>
            <polyline points="410,88 440,65 468,88" stroke="#15803d" strokeWidth="2.5" fill="none" />
            <line x1="437" y1="65" x2="437" y2="42" stroke="#dc2626" strokeWidth="2.4" />
            <line x1="443" y1="65" x2="443" y2="42" stroke="#dc2626" strokeWidth="2.4" />
            <text x="440" y="37" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">O</text>
            <text x="440" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">{rightProd}</text>
            <text x="395" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'ring_expansion': {
      const [rTop, rBot, subLabel, prodLabel] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <rect x="30" y="45" width="46" height="46" stroke="#1d4ed8" strokeWidth="2.6" fill="none" rx="2" />
          <line x1="76" y1="45" x2="108" y2="32" stroke="#dc2626" strokeWidth="2.6" />
          <line x1="108" y1="32" x2="132" y2="52" stroke="#1d4ed8" strokeWidth="2.5" />
          <text x="112" y="25" fontSize="11.5" fontWeight="bold" fill="#dc2626">CH(OH)Me</text>
          <text x="68" y="114" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="Kalam, sans-serif">{subLabel}</text>
          <g className="svg-reagent-group">
            <line x1="150" y1="68" x2="275" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,68 265,63 265,73" fill="#1e293b" />
            <text x="212" y="53" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="212" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polygon points="355,30 392,52 380,92 332,92 320,52" stroke="#15803d" strokeWidth="2.7" fill="none" strokeLinejoin="round" />
            <line x1="353" y1="36" x2="385" y2="55" stroke="#dc2626" strokeWidth="2.6" />
            <line x1="355" y1="30" x2="355" y2="10" stroke="#15803d" strokeWidth="2.5" />
            <line x1="392" y1="52" x2="420" y2="44" stroke="#15803d" strokeWidth="2.5" />
            <text x="372" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{prodLabel}</text>
          </g>
        </svg>
      );
    }

    case 'benzene_rxn': {
      const [subTop, subOrtho, rTop, rBot, prodTop, prodOrtho, prodPara, noteRight] = params;
      return (
        <svg viewBox="0 0 540 140" className="w-full h-auto">
          <g transform="translate(65,72)">
            <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" stroke="#1d4ed8" strokeWidth="2.5" fill="none" />
            <circle cx="0" cy="0" r="17" stroke="#1d4ed8" strokeWidth="1.8" fill="none" strokeDasharray="4,2" />
            {subTop && (
              <>
                <line x1="0" y1="-32" x2="0" y2="-48" stroke="#1d4ed8" strokeWidth="2.4" />
                <text x="0" y="-52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">{subTop}</text>
              </>
            )}
            {subOrtho && (
              <>
                <line x1="28" y1="-16" x2="44" y2="-25" stroke="#dc2626" strokeWidth="2.2" />
                <text x="48" y="-23" fontSize="11.5" fontWeight="bold" fill="#dc2626">{subOrtho}</text>
              </>
            )}
          </g>
          <g className="svg-reagent-group">
            <line x1="145" y1="72" x2="275" y2="72" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,72 265,67 265,77" fill="#1e293b" />
            <text x="210" y="56" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="210" y="92" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group" transform="translate(355,68)">
            <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" stroke="#15803d" strokeWidth="2.6" fill="none" />
            <circle cx="0" cy="0" r="17" stroke="#15803d" strokeWidth="1.8" fill="none" strokeDasharray="4,2" />
            {prodTop && (
              <>
                <line x1="0" y1="-32" x2="0" y2="-47" stroke="#15803d" strokeWidth="2.4" />
                <text x="0" y="-51" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#15803d">{prodTop}</text>
              </>
            )}
            {prodOrtho && (
              <>
                <line x1="28" y1="-16" x2="45" y2="-26" stroke="#dc2626" strokeWidth="2.6" />
                <text x="50" y="-23" fontSize="11.5" fontWeight="bold" fill="#b91c1c">{prodOrtho}</text>
              </>
            )}
            {prodPara && (
              <>
                <line x1="0" y1="32" x2="0" y2="46" stroke="#dc2626" strokeWidth="2.6" />
                <text x="0" y="58" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#b91c1c">{prodPara}</text>
              </>
            )}
          </g>
          <g className="svg-product-group">
            <text x="415" y="132" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'carbonyl_rxn': {
      const [subLeft, subRight, rTop, rBot, prodCenter, prodSub, noteRight] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <polyline points="25,88 65,62 105,88" stroke="#1d4ed8" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <line x1="62" y1="62" x2="62" y2="34" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="68" y1="62" x2="68" y2="34" stroke="#dc2626" strokeWidth="2.5" />
          <text x="65" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">O</text>
          <text x="22" y="103" fontSize="11" fontWeight="bold" fill="#1d4ed8">{subLeft}</text>
          <text x="98" y="103" fontSize="11" fontWeight="bold" fill="#1d4ed8">{subRight}</text>
          <g className="svg-reagent-group">
            <line x1="145" y1="68" x2="275" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="275,68 265,63 265,73" fill="#1e293b" />
            <text x="210" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="210" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <polyline points="325,88 370,62 415,88" stroke="#15803d" strokeWidth="2.7" fill="none" strokeLinecap="round" />
            <line x1="370" y1="62" x2="370" y2="34" stroke="#dc2626" strokeWidth="2.7" />
            <rect x="295" y="11" width="155" height="23" rx="5" fill="#fef08a" stroke="#dc2626" strokeWidth="1.4" />
            <text x="372" y="27" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#b91c1c">{prodCenter}</text>
            <text x="372" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">{prodSub}</text>
            <text x="395" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'epoxide_open': {
      const [rTop, rBot, attackSite, prodLeft, prodRight, noteRight] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <line x1="40" y1="78" x2="95" y2="78" stroke="#1d4ed8" strokeWidth="2.8" />
          <line x1="40" y1="78" x2="68" y2="42" stroke="#dc2626" strokeWidth="2.5" />
          <line x1="95" y1="78" x2="68" y2="42" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx="68" cy="38" r="9" fill="#fdfbf5" />
          <text x="68" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">O</text>
          <line x1="40" y1="78" x2="18" y2="62" stroke="#1d4ed8" strokeWidth="2.5" />
          <line x1="40" y1="78" x2="22" y2="98" stroke="#1d4ed8" strokeWidth="2.5" />
          <text x="40" y="114" textAnchor="middle" fontSize="10.5" fill="#dc2626" fontWeight="bold">3° Carbon</text>
          <text x="102" y="114" textAnchor="middle" fontSize="10.5" fill="#1d4ed8" fontWeight="bold">1° Carbon</text>
          <g className="svg-reagent-group">
            <line x1="140" y1="68" x2="270" y2="68" stroke="#1e293b" strokeWidth="2.2" />
            <polygon points="270,68 260,63 260,73" fill="#1e293b" />
            <text x="205" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">{rTop}</text>
            <text x="205" y="88" textAnchor="middle" fontSize="11" fill="#334155" fontFamily="Kalam, sans-serif">{rBot}</text>
          </g>
          <g className="svg-product-group">
            <line x1="335" y1="72" x2="405" y2="72" stroke="#15803d" strokeWidth="2.8" />
            <line x1="335" y1="72" x2="312" y2="55" stroke="#15803d" strokeWidth="2.5" />
            <line x1="335" y1="72" x2="312" y2="92" stroke="#15803d" strokeWidth="2.5" />
            <line x1="335" y1="72" x2="335" y2="40" stroke="#dc2626" strokeWidth="2.6" />
            <line x1="405" y1="72" x2="405" y2="40" stroke="#1d4ed8" strokeWidth="2.6" />
            <text x="335" y="34" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#b91c1c">{prodLeft}</text>
            <text x="405" y="34" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#1d4ed8">{prodRight}</text>
            <text x="380" y="102" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">{attackSite}</text>
            <text x="380" y="122" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{noteRight}</text>
          </g>
        </svg>
      );
    }

    case 'combo_chain': {
      const [s1, r1, s2, r2, s3, r3, finalProd, subNote] = params;
      return (
        <svg viewBox="0 0 540 135" className="w-full h-auto">
          <rect x="8" y="36" width="96" height="52" rx="7" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2" />
          <text x="56" y="60" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e3a8a">{s1}</text>
          <text x="56" y="76" textAnchor="middle" fontSize="9.5" fill="#475569">Substrate (A)</text>

          <g className="svg-reagent-group">
            <line x1="106" y1="62" x2="168" y2="62" stroke="#1e293b" strokeWidth="2" />
            <polygon points="168,62 160,58 160,66" fill="#1e293b" />
            <text x="137" y="50" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#b91c1c">{r1}</text>
          </g>

          <g className="svg-product-group">
            <rect x="170" y="36" width="102" height="52" rx="7" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
            <text x="221" y="60" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#92400e">{s2}</text>
            <text x="221" y="76" textAnchor="middle" fontSize="9.5" fill="#78350f">Intermed. (B)</text>
          </g>

          <g className="svg-reagent-group">
            <line x1="274" y1="62" x2="342" y2="62" stroke="#1e293b" strokeWidth="2" />
            <polygon points="342,62 334,58 334,66" fill="#1e293b" />
            <text x="308" y="50" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#b91c1c">{r2}</text>
            <text x="308" y="78" textAnchor="middle" fontSize="9.5" fill="#334155">{r3}</text>
          </g>

          <g className="svg-product-group">
            <rect x="345" y="30" width="185" height="64" rx="8" fill="#ecfdf5" stroke="#15803d" strokeWidth="2.4" />
            <text x="437" y="55" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#14532d">{finalProd}</text>
            <text x="437" y="75" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">{s3}</text>
            <text x="270" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d" fontFamily="Kalam, sans-serif">{subNote}</text>
          </g>
        </svg>
      );
    }

    default:
      return null;
  }
};
