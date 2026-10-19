import React from 'react';
import { ReagentCard } from '../types';
import { MechanismSvg } from './MechanismSvg';
import { CheckCircle, Lightbulb, AlertTriangle, Bookmark, Maximize2 } from 'lucide-react';

interface CardItemProps {
  card: ReagentCard;
  index: number;
  isBookmarked: boolean;
  isMastered: boolean;
  isRevealed: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleMastered: (id: string) => void;
  onToggleReveal: (id: string) => void;
  onOpenFullScreen: (index: number) => void;
  quizActive: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({
  card,
  index,
  isBookmarked,
  isMastered,
  isRevealed,
  onToggleBookmark,
  onToggleMastered,
  onToggleReveal,
  onOpenFullScreen,
  quizActive,
}) => {
  return (
    <article
      data-card-id={card.id}
      className={`notebook-card rounded-xl p-3 sm:p-5 flex flex-col justify-between transition-all duration-150 ${
        isMastered ? 'ring-2 ring-emerald-500/70 bg-emerald-50/20' : ''
      } ${isRevealed ? 'revealed' : ''}`}
    >
      {/* Container with ample padding to keep clear of notebook red margin line */}
      <div className="pl-4 sm:pl-5">
        {/* Card Top Row: Fully Responsive for Mobile */}
        <div className="pb-2.5 border-b border-slate-300/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Left: ID + Category */}
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 font-bold text-xs shrink-0 shadow-2xs">
              #{index + 1} ({card.id})
            </span>
            <span className="text-xs font-semibold text-slate-700 truncate max-w-[170px] sm:max-w-none">
              {card.category}
            </span>
            {/* Frequency badge on mobile */}
            <span className="sm:hidden px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
              {card.freq}
            </span>
          </div>

          {/* Right: Actions & Desktop Frequency */}
          <div className="flex items-center justify-end gap-1.5 flex-wrap">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 shrink-0">
              {card.freq}
            </span>

            <button
              type="button"
              onClick={() => onToggleBookmark(card.id)}
              className={`no-print px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 transition ${
                isBookmarked
                  ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-300 hover:text-slate-900 hover:bg-slate-50'
              }`}
              title={isBookmarked ? 'Remove from Starred Revision' : 'Star this reagent for revision'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-slate-950' : ''}`} />
              <span className="text-[11px]">{isBookmarked ? 'Starred' : 'Star'}</span>
            </button>

            <button
              type="button"
              onClick={() => onToggleMastered(card.id)}
              className={`no-print px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 transition ${
                isMastered
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
              title="Mark as revised & memorized"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span className="text-[11px]">{isMastered ? '✓ Yaad Hai' : 'Done'}</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenFullScreen(index)}
              className="no-print px-2 py-1 rounded text-xs font-bold bg-amber-100/70 hover:bg-amber-200/80 text-amber-950 border border-amber-300/80 flex items-center gap-1 transition shadow-2xs"
              title="Full Screen card with Arrow Key navigation (← / →)"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Enlarge</span>
            </button>
          </div>
        </div>

        {/* Title + Mechanism Badge */}
        <div className="mt-2.5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
          <h3 className="reagent-title-reveal hand-title text-base sm:text-xl font-bold text-blue-900 leading-snug break-words flex-1">
            {card.title}
          </h3>
          <span className="self-start sm:self-auto text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-900 border border-indigo-200 shrink-0">
            {card.intermedLabel}
          </span>
        </div>

        {/* SKELETAL BOND-LINE SVG MECHANISM DIAGRAM (No text overlap) */}
        <div
          onClick={() => quizActive && onToggleReveal(card.id)}
          className={`my-3 sketch-box p-2 sm:p-2.5 shadow-inner transition-colors ${
            quizActive ? 'cursor-pointer hover:border-amber-400' : ''
          }`}
          title={quizActive ? (isRevealed ? 'Click to hide again' : 'Click to reveal hidden answer') : undefined}
        >
          <MechanismSvg data={card.svgData} />
          {quizActive && (
            <div className="text-[11px] text-center text-slate-500 mt-1 italic no-print">
              {isRevealed ? '👁️ Answer revealed (tap again to re-hide)' : '🔒 Tap diagram to reveal hidden answer'}
            </div>
          )}
        </div>

        {/* SPOKEN CLASSROOM HINGLISH EXPLANATION */}
        <div className="mt-2">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500 inline" />
            <span>Teacher Hinglish Logic ("Kaam Kya Hai"):</span>
          </div>
          <p className="hinglish-note text-sm sm:text-base text-slate-900 leading-relaxed break-words">
            {card.hinglish}
          </p>
        </div>

        {/* SELECTIVITY: KISKO CHHEDTA HAI vs KISKO CHHODTA HAI */}
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-50/90 border border-emerald-200">
            <span className="font-bold text-emerald-900 block mb-0.5">
              ✅ Kisko Chhedta Hai (Touches):
            </span>
            <div className="product-text-reveal text-slate-800 font-medium leading-relaxed break-words">
              {card.touches}
            </div>
          </div>
          <div className="p-2 sm:p-2.5 rounded-lg bg-rose-50/90 border border-rose-200">
            <span className="font-bold text-rose-900 block mb-0.5">
              ❌ Kisko Chhodta Hai (Ignores):
            </span>
            <div className="text-slate-800 font-medium leading-relaxed break-words">
              {card.ignores}
            </div>
          </div>
        </div>

        {/* GALTI YAHAN HOTI HAI / NTA TRAP ALERT */}
        <div className="mt-2.5 p-2 sm:p-2.5 rounded-lg bg-amber-100/80 border-l-4 border-red-600">
          <div className="trap-note text-xs sm:text-sm text-red-950 font-semibold leading-relaxed flex items-start gap-1.5 break-words">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-red-700">⚠️ Galti Yahan Hoti Hai (JEE Trap):</span>{' '}
              {card.trap}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: BOSS EXAMPLE + FULL SCREEN TRIGGER */}
      <div className="pl-4 sm:pl-5 mt-2.5 pt-2 border-t border-dashed border-slate-300 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-1.5">
        <div className="product-text-reveal flex-1 min-w-[200px] break-words">
          <strong className="text-slate-900">📌 Direct Exam Example:</strong> {card.exampleText}
        </div>
        <button
          type="button"
          onClick={() => onOpenFullScreen(index)}
          className="no-print text-slate-500 hover:text-amber-800 font-semibold text-[11px] shrink-0 flex items-center gap-1 px-2 py-1 rounded bg-slate-100 hover:bg-amber-100/60 transition"
          title="Open in Full Screen Study Mode"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Full Screen</span>
        </button>
      </div>
    </article>
  );
};
