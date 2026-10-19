import React from 'react';
import { SubjectType, ChapterId } from '../../types';
import {
  BookOpen,
  Atom,
  FlaskConical,
  Sparkles,
  Flame,
  ArrowRight,
  CheckCircle,
  Bookmark,
  Layers,
  HelpCircle,
  GraduationCap,
  Zap,
  Target,
  Compass
} from 'lucide-react';

interface LibraryHomeProps {
  onSelectChapter: (subject: SubjectType, chapter: ChapterId) => void;
  chemMasteredCount: number;
  physicsMasteredCount: number;
  chemStarredCount: number;
  physicsStarredCount: number;
}

export const LibraryHome: React.FC<LibraryHomeProps> = ({
  onSelectChapter,
  chemMasteredCount,
  physicsMasteredCount,
  chemStarredCount,
  physicsStarredCount,
}) => {
  const totalMastered = chemMasteredCount + physicsMasteredCount;
  const totalCards = 62 + 25; // 62 chem reagents + 25 physics formulas
  const progressPercent = Math.min(100, Math.round((totalMastered / totalCards) * 100));

  return (
    <div className="w-full max-w-[97vw] mx-auto px-2 sm:px-4 py-6 sm:py-8 space-y-6 sm:space-y-8 animate-fadeIn">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 text-white p-5 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-6 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>JEE Main & Advanced 2027 Master Library</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Comprehensive Multi-Subject Master Revision Library
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
            Organized subject by subject, chapter by chapter. Featuring handwritten bond-line skeletal diagrams,
            Saleem Bhaiya shortcuts, Aam Zindagi step-by-step logic, instant PYQ practice, and full-screen flashcards.
          </p>

          {/* Quick Progress Bar */}
          <div className="bg-slate-800/80 rounded-xl p-3 sm:p-4 border border-slate-700/80 backdrop-blur-xs">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Overall Mastery Progress</span>
              </span>
              <span className="text-amber-300 font-bold">
                {totalMastered} / {totalCards} Cards ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* SUBJECTS & CHAPTERS GRID */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700" />
            <span>Subjects & Active Chapters</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            2 Subjects Active • More chapters adaptable
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* 1. PHYSICS CARD */}
          <div className="notebook-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all group border-t-4 border-t-cyan-500">
            <div>
              {/* Badge & Subject Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-cyan-100 text-cyan-900 border border-cyan-300 flex items-center gap-1">
                  <Atom className="w-3.5 h-3.5 text-cyan-700" />
                  <span>SUBJECT 01 • PHYSICS</span>
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Saleem Bhaiya Edition
                </span>
              </div>

              {/* Chapter Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-cyan-800 transition mb-1.5">
                Kinematics (Motion in 1D & 2D)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Complete mastery of distance vs displacement, variable acceleration calculus, free fall & tower drops,
                concavity graph rules, projectile trajectories, inclined plane 90° hits, and relative motion.
              </p>

              {/* Module Highlights Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-semibold text-slate-700">
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  ⚡ 14 Sub-Modules
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                  🎯 62+ PYQs Solved
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                  🃏 16 Flashcards
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 border border-purple-200">
                  📜 Saleem Bhaiya Hacksheet
                </span>
              </div>

              {/* Key topics included */}
              <div className="bg-white/80 rounded-xl p-3 border border-slate-200 text-xs text-slate-700 space-y-1.5 mb-5">
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Included Modules:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 pl-4 list-disc">
                  <div>• 1D Basics & Circular Arc/Chord</div>
                  <div>• Calculus & Proportionalities</div>
                  <div>• Tower Drops & Symmetric Bounce</div>
                  <div>• x-t, v-t, a-t, v-x Graph Rules</div>
                  <div>• Projectile Range & Max Height</div>
                  <div>• River-Swimmer & Rain-Man Relative</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Stats */}
            <div className="pt-4 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 flex items-center gap-2">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{physicsMasteredCount} Mastered</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-amber-700">
                  <Bookmark className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{physicsStarredCount} Starred</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => onSelectChapter('PHYSICS', 'KINEMATICS')}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm hover:shadow-md transform active:scale-95"
              >
                <span>Open Kinematics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. CHEMISTRY CARD */}
          <div className="notebook-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all group border-t-4 border-t-emerald-500">
            <div>
              {/* Badge & Subject Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center gap-1">
                  <FlaskConical className="w-3.5 h-3.5 text-emerald-700" />
                  <span>SUBJECT 02 • CHEMISTRY</span>
                </span>
                <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                  Organic Master Notebook
                </span>
              </div>

              {/* Chapter Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-800 transition mb-1.5">
                Organic Chemistry Reagents Master
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                62 high-yield reaction cards covering NCERT to JEE Advanced level. Clean bond-line skeletal SVG diagrams,
                teacher Hinglish memory logic, selectivity comparison matrices, and self-quiz modes.
              </p>

              {/* Module Highlights Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-semibold text-slate-700">
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                  🧪 62 Reagent Cards
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                  🧬 Bond-Line Skeletal SVGs
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 border border-purple-200">
                  📊 Selectivity Redox Matrix
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  👁️ Self-Quiz Blur Mode
                </span>
              </div>

              {/* Key topics included */}
              <div className="bg-white/80 rounded-xl p-3 border border-slate-200 text-xs text-slate-700 space-y-1.5 mb-5">
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Modules P1 through P6:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600 pl-4 list-disc">
                  <div>• P1: Hydrocarbons & EAS (17 Cards)</div>
                  <div>• P2: Alkyl Halides & Alcohols (10)</div>
                  <div>• P3: Carbonyls & Carboxylic (12)</div>
                  <div>• P4: Nitrogen & POC Tests (7)</div>
                  <div>• P5: Oxidizing & Reducing (10)</div>
                  <div>• P6: Multi-Step Combos (6)</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions & Stats */}
            <div className="pt-4 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-600 flex items-center gap-2">
                <span className="flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{chemMasteredCount} Mastered</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-amber-700">
                  <Bookmark className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{chemStarredCount} Starred</span>
                </span>
              </div>

              <button
                type="button"
                onClick={() => onSelectChapter('CHEMISTRY', 'ORGANIC_REAGENTS')}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition shadow-sm hover:shadow-md transform active:scale-95"
              >
                <span>Open Organic Reagents</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* EXTENSIBILITY & FUTURE CHAPTERS BANNER */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 sm:p-5 text-center text-xs text-slate-600">
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 mb-2">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div className="font-bold text-slate-800 text-sm mb-1">
          Ready to Adapt More Chapters & Subjects
        </div>
        <p className="max-w-xl mx-auto text-slate-500">
          The library is designed modularly. You can add more HTML notes or chapters for Physics (NLM, Work Energy, Rotational), Chemistry (Physical, Inorganic), or Mathematics. They will seamlessly plug into this library architecture!
        </p>
      </div>
    </div>
  );
};
