import React from 'react';

export const SelectivityMatrix: React.FC = () => {
  return (
    <section id="matrixSection" className="mb-6">
      <div className="notebook-card rounded-xl p-4 sm:p-6">
        <div className="pl-3">
          <h2 className="hand-title text-xl sm:text-2xl font-bold text-slate-900 mb-1">
            ⚡ Master Reducing & Oxidizing Selectivity Chart ("Kaun Kisko Chhedta Hai vs Chhodta Hai")
          </h2>
          <p className="hinglish-note text-sm text-slate-700 mb-4">
            JEE Main aur Advanced ke multi-functional group sawaalon mein 80% bache yahi fasste hain: kaunsa reagent Ester ko chhod ke Ketone ko reduce karega, ya Double bond ko chhod ke Aldehyde ko! Ek nazar mein poora chart dekho:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm bg-white/90 rounded-lg overflow-hidden border border-slate-300">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-2.5 border border-slate-700">Substrate / Group</th>
                  <th className="p-2.5 border border-slate-700 text-center">NaBH₄<br /><span className="text-[10px] text-amber-300">(Chhota Bhai)</span></th>
                  <th className="p-2.5 border border-slate-700 text-center">LiAlH₄<br /><span className="text-[10px] text-amber-300">(Sabka Baap)</span></th>
                  <th className="p-2.5 border border-slate-700 text-center">B₂H₆ / THF<br /><span className="text-[10px] text-amber-300">(Acid Lover)</span></th>
                  <th className="p-2.5 border border-slate-700 text-center">DIBAL-H (-78°C)<br /><span className="text-[10px] text-amber-300">(Aldehyde Stopper)</span></th>
                  <th className="p-2.5 border border-slate-700 text-center">H₂ / Pd-C<br /><span className="text-[10px] text-amber-300">(Catalytic)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Aldehyde (-CHO)</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Ketone (R-CO-R')</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 2° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 2° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 2° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 2° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 2° Alcohol</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Acid Chloride (R-COCl)</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60">✅ Aldehyde (-CHO)</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60">✅ Aldehyde (Rosenmund)</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Ester (R-COOR')</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ RCH₂OH + R'OH</td>
                  <td className="p-2.5 border text-center text-amber-700">⚠️ Very Slow</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60 font-bold">⭐ R-CHO (Aldehyde!)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Carboxylic Acid (-COOH)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ 1° Alcohol</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60 font-bold">⭐ FASTEST → 1° ROH</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ Acid-Base only</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Amide (R-CONH₂)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60 font-bold">✅ R-CH₂-NH₂ (Amine!)</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ R-CH₂-NH₂</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60">✅ R-CHO</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Cyanide / Nitrile (-C≡N)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ R-CH₂-NH₂ (1° Amine)</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ R-CH₂-NH₂</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60 font-bold">⭐ R-CHO (Aldehyde!)</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ R-CH₂-NH₂</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Nitro (-NO₂)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-amber-800 bg-amber-50">⚠️ RNO₂→RNH₂ | PhNO₂→Azo!</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60">✅ -NH₂ (Both R & Ph)</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-slate-900">Isolated Alkene (C=C)</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction!</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO (Except Ph-CH=CH-CHO!)</td>
                  <td className="p-2.5 border text-center text-blue-700 bg-blue-50/60">✅ Hydroboration</td>
                  <td className="p-2.5 border text-center text-rose-700 bg-rose-50/70">❌ NO Reaction</td>
                  <td className="p-2.5 border text-center text-emerald-700 bg-emerald-50/60 font-bold">✅ Alkane (Fast!)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
