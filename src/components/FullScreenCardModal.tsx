import React, { useEffect } from 'react';
import { ReagentCard } from '../types';
import { MechanismSvg } from './MechanismSvg';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Eye,
  EyeOff,
  Keyboard,
  Minimize2,
} from 'lucide-react';

interface FullScreenCardModalProps {
  cards: ReagentCard[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  isBookmarked: boolean;
  isMastered: boolean;
  isRevealed: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleMastered: (id: string) => void;
  onToggleReveal: (id: string) => void;
  quizActive: boolean;
}

export const FullScreenCardModal: React.FC<FullScreenCardModalProps> = ({
  cards,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  isBookmarked,
  isMastered,
  isRevealed,
  onToggleBookmark,
  onToggleMastered,
  onToggleReveal,
  quizActive,
}) => {
  const card = cards[currentIndex];
  const total = cards.length;

  // Keyboard navigation listener while in full screen mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.code === 'Space') {
        e.preventDefault();
        if (card) {
          onToggleReveal(card.id);
        }
      } else if (e.key === 'b' || e.key === 'B') {
        e.preventDefault();
        if (card) {
          onToggleBookmark(card.id);
        }
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        if (card) {
          onToggleMastered(card.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [card, onNext, onPrev, onClose, onToggleBookmark, onToggleMastered, onToggleReveal]);

  // Lock background scroll when full screen modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!card) return null;

  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      {/* TOP HEADER CONTROLS IN FULL SCREEN */}
      <div className="w-full bg-slate-900 border-b border-slate-700/80 px-3 sm:px-6 py-2.5 flex items-center justify-between text-white shadow-lg shrink-0">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shadow shrink-0">
            OC
          </div>
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-300 text-xs sm:text-sm">
                Card {currentIndex + 1} of {total}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs text-slate-300 truncate hidden sm:inline">
                {card.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {card.freq}
              </span>
            </div>
            {/* Progress line */}
            <div className="w-32 sm:w-48 bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
              <div
                className="bg-amber-400 h-full transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center / Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Prev / Next in top bar for small screens */}
          <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 p-0.5">
            <button
              type="button"
              onClick={onPrev}
              disabled={currentIndex === 0}
              className={`p-1.5 rounded-md hover:bg-slate-700 text-slate-200 transition ${
                currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-amber-300'
              }`}
              title="Previous Card (Left Arrow key)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-1.5 text-slate-400">
              {currentIndex + 1}/{total}
            </span>
            <button
              type="button"
              onClick={onNext}
              disabled={currentIndex === total - 1}
              className={`p-1.5 rounded-md hover:bg-slate-700 text-slate-200 transition ${
                currentIndex === total - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-amber-300'
              }`}
              title="Next Card (Right Arrow key)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Star Button */}
          <button
            type="button"
            onClick={() => onToggleBookmark(card.id)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition ${
              isBookmarked
                ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
            title="Press 'B' key to Star/Unstar"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-slate-950' : ''}`} />
            <span className="hidden md:inline">{isBookmarked ? 'Starred' : 'Star'}</span>
            <kbd className="hidden lg:inline text-[9px] bg-slate-900/60 px-1 py-0.5 rounded text-slate-400">B</kbd>
          </button>

          {/* Mastered Button */}
          <button
            type="button"
            onClick={() => onToggleMastered(card.id)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1.5 transition ${
              isMastered
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
            title="Press 'M' key to Mark Done"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isMastered ? '✓ Yaad Hai' : 'Mark Done'}</span>
            <kbd className="hidden lg:inline text-[9px] bg-slate-900/60 px-1 py-0.5 rounded text-slate-400">M</kbd>
          </button>

          {/* Close Full Screen Button */}
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow flex items-center gap-1.5 transition ml-1"
            title="Exit Full Screen (Escape key)"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Close</span>
            <kbd className="text-[10px] bg-rose-800/80 px-1 py-0.5 rounded">Esc</kbd>
          </button>
        </div>
      </div>

      {/* MAIN FULL-SCREEN CARD CONTAINER WITH LARGE PREV/NEXT SIDE BUTTONS */}
      <div className="flex-1 overflow-y-auto px-2 sm:px-4 py-4 flex items-center justify-center relative">
        {/* Large Floating Left Arrow Button */}
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className={`hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-14 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-amber-300 shadow-2xl items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
            currentIndex === 0 ? 'opacity-20 cursor-not-allowed hover:scale-100' : ''
          }`}
          title="Previous Card (Left Arrow key ←)"
        >
          <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
        </button>

        {/* Large Floating Right Arrow Button */}
        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === total - 1}
          className={`hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-14 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-amber-300 shadow-2xl items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
            currentIndex === total - 1 ? 'opacity-20 cursor-not-allowed hover:scale-100' : ''
          }`}
          title="Next Card (Right Arrow key →)"
        >
          <ChevronRight className="w-7 h-7 stroke-[2.5]" />
        </button>

        {/* THE ENLARGED NOTEBOOK CARD */}
        <div className="w-full max-w-4xl mx-auto my-auto">
          <article
            className={`notebook-card rounded-2xl p-5 sm:p-7 shadow-2xl border-2 border-slate-400/80 transition-all ${
              isMastered ? 'ring-4 ring-emerald-500/70' : ''
            } ${isRevealed ? 'revealed' : ''}`}
          >
            <div className="pl-4 sm:pl-5">
              {/* Top Meta info */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-300">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-amber-300 font-bold text-xs sm:text-sm">
                    #{currentIndex + 1} ({card.id})
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">
                    {card.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-900 border border-indigo-200">
                    {card.intermedLabel}
                  </span>
                </div>
              </div>

              {/* Card Title */}
              <div className="mt-3">
                <h2 className="reagent-title-reveal hand-title text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 leading-snug">
                  {card.title}
                </h2>
              </div>

              {/* SKELETAL BOND-LINE SVG MECHANISM DIAGRAM (LARGE & CRISP) */}
              <div
                onClick={() => quizActive && onToggleReveal(card.id)}
                className={`my-4 sketch-box p-3 sm:p-5 shadow-inner ${
                  quizActive ? 'cursor-pointer hover:border-amber-400 transition-colors' : ''
                }`}
                title={quizActive ? (isRevealed ? 'Click to hide again' : 'Click to reveal hidden answer (Spacebar)') : undefined}
              >
                <div className="max-w-2xl mx-auto">
                  <MechanismSvg data={card.svgData} />
                </div>
                {quizActive && (
                  <div className="text-xs text-center text-slate-600 mt-2 font-medium italic">
                    {isRevealed
                      ? '👁️ Answer revealed (Tap diagram or Spacebar to re-hide)'
                      : '🔒 Tap diagram or press [Spacebar] to reveal hidden product/reagent'}
                  </div>
                )}
              </div>

              {/* SPOKEN CLASSROOM HINGLISH EXPLANATION */}
              <div className="mt-3">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 inline" />
                  <span>Teacher Hinglish Logic ("Kaam Kya Hai"):</span>
                </div>
                <p className="hinglish-note text-base sm:text-lg text-slate-900 leading-relaxed bg-amber-50/40 p-3 rounded-xl border border-amber-200/60">
                  {card.hinglish}
                </p>
              </div>

              {/* SELECTIVITY: KISKO CHHEDTA HAI vs KISKO CHHODTA HAI */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-emerald-50/95 border border-emerald-300 shadow-2xs">
                  <span className="font-bold text-emerald-950 flex items-center gap-1">
                    ✅ Kisko Chhedta Hai (Touches):
                  </span>
                  <div className="product-text-reveal text-slate-800 mt-1 font-medium leading-relaxed">
                    {card.touches}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-rose-50/95 border border-rose-300 shadow-2xs">
                  <span className="font-bold text-rose-950 flex items-center gap-1">
                    ❌ Kisko Chhodta Hai (Ignores):
                  </span>
                  <div className="text-slate-800 mt-1 font-medium leading-relaxed">
                    {card.ignores}
                  </div>
                </div>
              </div>

              {/* GALTI YAHAN HOTI HAI / NTA TRAP ALERT */}
              <div className="mt-3.5 p-3 sm:p-4 rounded-xl bg-amber-100/90 border-l-4 border-red-600 shadow-2xs">
                <div className="trap-note text-xs sm:text-sm md:text-base text-red-950 font-semibold leading-relaxed flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-red-700">⚠️ Galti Yahan Hoti Hai (JEE Trap):</span>{' '}
                    {card.trap}
                  </div>
                </div>
              </div>

              {/* FOOTER: BOSS EXAMPLE */}
              <div className="mt-4 pt-3 border-t border-dashed border-slate-300 text-xs sm:text-sm text-slate-800 flex items-center justify-between gap-2">
                <div className="product-text-reveal">
                  <strong className="text-slate-950">📌 Direct Exam Example:</strong> {card.exampleText}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* BOTTOM KEYBOARD SHORTCUT HELPER BAR */}
      <div className="w-full bg-slate-900 border-t border-slate-800 px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 shrink-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mx-auto md:mx-0">
          <span className="flex items-center gap-1.5 font-medium text-slate-400">
            <Keyboard className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-semibold">Keyboard Controls:</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
              →
            </kbd>
            <span>Prev / Next Card</span>
          </span>
          {quizActive && (
            <span className="flex items-center gap-1">
              <kbd className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
                Space
              </kbd>
              <span>Reveal Quiz</span>
            </span>
          )}
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
              B
            </kbd>
            <span>Star</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
              M
            </kbd>
            <span>Mark Done</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-mono text-[11px]">
              Esc
            </kbd>
            <span>Exit Full Screen</span>
          </span>
        </div>

        {/* Mobile touch controls for Previous / Next */}
        <div className="flex md:hidden items-center justify-between w-full pt-1.5 border-t border-slate-800">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-white border border-slate-700 flex items-center gap-1 ${
              currentIndex === 0 ? 'opacity-40' : 'active:bg-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev Card</span>
          </button>

          <span className="font-mono text-amber-300 text-xs">
            {currentIndex + 1} / {total}
          </span>

          <button
            type="button"
            onClick={onNext}
            disabled={currentIndex === total - 1}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-white border border-slate-700 flex items-center gap-1 ${
              currentIndex === total - 1 ? 'opacity-40' : 'active:bg-slate-700'
            }`}
          >
            <span>Next Card</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
