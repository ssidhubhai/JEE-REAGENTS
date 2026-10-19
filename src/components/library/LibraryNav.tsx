import React, { useState } from 'react';
import { SubjectType, ChapterId } from '../../types';
import {
  BookOpen,
  Atom,
  FlaskConical,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  PenTool,
  FileText,
  Bookmark,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface LibraryNavProps {
  currentSubject: SubjectType;
  currentChapter: ChapterId;
  onSelectSubject: (subject: SubjectType) => void;
  onSelectChapter: (chapter: ChapterId) => void;
  handwrittenFont: boolean;
  setHandwrittenFont: React.Dispatch<React.SetStateAction<boolean>>;
  linedPaper: boolean;
  setLinedPaper: React.Dispatch<React.SetStateAction<boolean>>;
  totalMastered: number;
  totalStarred: number;
}

export const LibraryNav: React.FC<LibraryNavProps> = ({
  currentSubject,
  currentChapter,
  onSelectSubject,
  onSelectChapter,
  handwrittenFont,
  setHandwrittenFont,
  linedPaper,
  setLinedPaper,
  totalMastered,
  totalStarred,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 bg-slate-900 text-slate-100 border-b border-slate-800 shadow-md">
      <div className="w-full max-w-[97vw] mx-auto px-2 sm:px-4">
        {/* Main Bar */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Brand & Breadcrumbs */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={() => {
                onSelectSubject('LIBRARY');
                onSelectChapter('ALL');
              }}
              className="flex items-center gap-2 text-left group focus:outline-hidden"
              title="Return to Library Hub"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-black tracking-wider uppercase text-amber-400 leading-none">
                  JEE 2027
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  Master Library
                </div>
              </div>
            </button>

            {/* Breadcrumb Path */}
            <div className="flex items-center text-xs font-semibold text-slate-400 overflow-x-auto scrollbar-none py-1">
              <ChevronRight className="w-4 h-4 text-slate-600 shrink-0 mx-1" />
              
              {currentSubject === 'LIBRARY' ? (
                <span className="text-amber-300 font-bold px-2 py-0.5 rounded bg-slate-800/80 whitespace-nowrap">
                  Library Hub
                </span>
              ) : (
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => {
                      if (currentSubject === 'PHYSICS') onSelectSubject('PHYSICS');
                      else if (currentSubject === 'CHEMISTRY') onSelectSubject('CHEMISTRY');
                    }}
                    className="hover:text-white transition flex items-center gap-1 text-slate-300"
                  >
                    {currentSubject === 'PHYSICS' ? (
                      <>
                        <Atom className="w-3.5 h-3.5 text-cyan-400 inline" />
                        <span>Physics</span>
                      </>
                    ) : (
                      <>
                        <FlaskConical className="w-3.5 h-3.5 text-emerald-400 inline" />
                        <span>Chemistry</span>
                      </>
                    )}
                  </button>

                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

                  <span className="text-amber-300 font-bold px-2 py-0.5 rounded bg-slate-800 text-[11px] sm:text-xs">
                    {currentChapter === 'KINEMATICS'
                      ? 'Kinematics (1D & 2D)'
                      : 'Organic Reagents Master'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-950/70 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => {
                onSelectSubject('LIBRARY');
                onSelectChapter('ALL');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentSubject === 'LIBRARY'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Library Hub</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectSubject('PHYSICS');
                onSelectChapter('KINEMATICS');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentSubject === 'PHYSICS'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Atom className="w-3.5 h-3.5" />
              <span>Physics: Kinematics</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectSubject('CHEMISTRY');
                onSelectChapter('ORGANIC_REAGENTS');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentSubject === 'CHEMISTRY'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Chemistry: Reagents</span>
            </button>
          </nav>

          {/* Right Action Icons & Toggles */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Stats */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-300">
              <span className="flex items-center gap-1 text-amber-300" title="Starred for Revision">
                <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{totalStarred}</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-emerald-400" title="Mastered Cards">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{totalMastered} Done</span>
              </span>
            </div>

            {/* Font Style Toggle */}
            <button
              type="button"
              onClick={() => setHandwrittenFont((prev) => !prev)}
              className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold border transition flex items-center gap-1 ${
                handwrittenFont
                  ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 hover:bg-amber-400/30'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title={handwrittenFont ? 'Switch to Clean Inter / Jakarta font' : 'Switch to Handwritten Kalam font'}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{handwrittenFont ? 'Handwritten' : 'Clean Font'}</span>
            </button>

            {/* Paper Texture Toggle */}
            <button
              type="button"
              onClick={() => setLinedPaper((prev) => !prev)}
              className={`px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold border transition flex items-center gap-1 ${
                linedPaper
                  ? 'bg-indigo-400/20 text-indigo-300 border-indigo-400/40 hover:bg-indigo-400/30'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title={linedPaper ? 'Switch to plain white paper' : 'Switch to lined notebook paper'}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{linedPaper ? 'Lined Paper' : 'White Paper'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 px-1 border-t border-slate-800 space-y-2 animate-fadeIn">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
              Select Subject & Chapter
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                type="button"
                onClick={() => {
                  onSelectSubject('LIBRARY');
                  onSelectChapter('ALL');
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left text-xs font-bold flex items-center justify-between ${
                  currentSubject === 'LIBRARY'
                    ? 'bg-amber-400 text-slate-950 font-extrabold'
                    : 'bg-slate-800/80 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Library Hub (All Subjects)</span>
                </div>
                <span className="text-[10px] opacity-75">Overview</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectSubject('PHYSICS');
                  onSelectChapter('KINEMATICS');
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left text-xs font-bold flex items-center justify-between ${
                  currentSubject === 'PHYSICS'
                    ? 'bg-cyan-500 text-slate-950 font-extrabold'
                    : 'bg-slate-800/80 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Atom className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="leading-tight">Physics: Kinematics</div>
                    <div className="text-[10px] font-normal text-slate-400">14 Modules • 62 PYQ Solved • Hacksheet</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectSubject('CHEMISTRY');
                  onSelectChapter('ORGANIC_REAGENTS');
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left text-xs font-bold flex items-center justify-between ${
                  currentSubject === 'CHEMISTRY'
                    ? 'bg-emerald-500 text-slate-950 font-extrabold'
                    : 'bg-slate-800/80 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="leading-tight">Chemistry: Organic Reagents</div>
                    <div className="text-[10px] font-normal text-slate-400">62 Reagent Cards • P1–P6 Pathways • Matrix</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mobile Stats & Info */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Starred: <strong className="text-amber-300">{totalStarred}</strong></span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mastered: <strong className="text-emerald-300">{totalMastered}</strong></span>
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
