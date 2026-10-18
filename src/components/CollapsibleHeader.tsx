import React, { useState } from 'react';
import { TabType, IntermedFilter, StarFilter } from '../types';
import { MODULE_TABS } from '../data/reagents';
import {
  ChevronUp,
  ChevronDown,
  Search,
  X,
  Eye,
  EyeOff,
  FlaskConical,
  PenTool,
  FileText,
  Printer,
  SlidersHorizontal,
  Pin,
  PinOff,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

interface CollapsibleHeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterIntermed: IntermedFilter;
  setFilterIntermed: (filter: IntermedFilter) => void;
  filterStar: StarFilter;
  setFilterStar: (filter: StarFilter) => void;
  hideProductQuiz: boolean;
  setHideProductQuiz: (val: boolean | ((prev: boolean) => boolean)) => void;
  hideReagentQuiz: boolean;
  setHideReagentQuiz: (val: boolean | ((prev: boolean) => boolean)) => void;
  handwrittenFont: boolean;
  setHandwrittenFont: (val: boolean | ((prev: boolean) => boolean)) => void;
  linedPaper: boolean;
  setLinedPaper: (val: boolean | ((prev: boolean) => boolean)) => void;
  visibleCount: number;
  totalCount: number;
  starredCount: number;
  isHeaderCollapsed: boolean;
  setIsHeaderCollapsed: (val: boolean | ((prev: boolean) => boolean)) => void;
  isSticky: boolean;
  setIsSticky: (val: boolean | ((prev: boolean) => boolean)) => void;
  onResetFilters: () => void;
}

export const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  filterIntermed,
  setFilterIntermed,
  filterStar,
  setFilterStar,
  hideProductQuiz,
  setHideProductQuiz,
  hideReagentQuiz,
  setHideReagentQuiz,
  handwrittenFont,
  setHandwrittenFont,
  linedPaper,
  setLinedPaper,
  visibleCount,
  totalCount,
  starredCount,
  isHeaderCollapsed,
  setIsHeaderCollapsed,
  isSticky,
  setIsSticky,
  onResetFilters,
}) => {
  const [showQuickSearchInCollapsed, setShowQuickSearchInCollapsed] = useState(false);

  const activeTabObj = MODULE_TABS.find((t) => t.id === activeTab);
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    filterIntermed !== 'ALL' ||
    filterStar !== 'ALL' ||
    activeTab !== 'ALL';

  return (
    <header
      className={`no-print ${
        isSticky ? 'sticky top-0 z-40' : 'relative z-20'
      } bg-slate-900 text-white border-b border-slate-700 shadow-xl transition-all duration-200`}
    >
      {/* ========================================================================= */}
      {/* 1. COLLAPSED ULTRA-COMPACT SLIM BAR (Only ~42px height, saves screen space!) */}
      {/* ========================================================================= */}
      {isHeaderCollapsed ? (
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2 text-xs">
          {/* Left: Brand Badge + Title + Active Module Chip */}
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-7 h-7 rounded-md bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow-xs shrink-0">
              OC
            </div>
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-white text-xs sm:text-sm truncate">
                JEE 2027 Organic Master
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 text-[11px] font-semibold shrink-0">
                {activeTabObj?.label || 'All'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[11px] font-bold shrink-0">
                {visibleCount} Cards
              </span>
            </div>
          </div>

          {/* Center / Right: Quick search + status indicators + Expand toggle */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Quick search input (collapsed bar) */}
            <div className="relative flex items-center">
              {showQuickSearchInCollapsed ? (
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Quick search..."
                    autoFocus
                    className="w-32 sm:w-48 px-2.5 py-1 text-xs bg-slate-800 border border-amber-400 rounded-md text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setShowQuickSearchInCollapsed(false);
                      if (searchQuery) setSearchQuery('');
                    }}
                    className="p-1 hover:text-amber-300 text-slate-400"
                    title="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowQuickSearchInCollapsed(true)}
                  className={`p-1.5 rounded-md border text-xs font-semibold flex items-center gap-1 transition ${
                    searchQuery
                      ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                      : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-700'
                  }`}
                  title={searchQuery ? `Searching: "${searchQuery}"` : 'Quick search'}
                >
                  <Search className="w-3.5 h-3.5" />
                  {searchQuery && (
                    <span className="max-w-[70px] truncate hidden sm:inline text-[11px]">
                      {searchQuery}
                    </span>
                  )}
                </button>
              )}
            </div>

            {/* Quiz indicators (click to toggle directly from slim bar) */}
            <button
              type="button"
              onClick={() => setHideProductQuiz((prev) => !prev)}
              className={`p-1.5 rounded-md text-xs font-semibold border transition ${
                hideProductQuiz
                  ? 'bg-rose-600 text-white border-rose-500 shadow-xs'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
              title={hideProductQuiz ? 'Product Quiz active (Tap to reveal)' : 'Hide Products (Quiz)'}
            >
              {hideProductQuiz ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={() => setHideReagentQuiz((prev) => !prev)}
              className={`p-1.5 rounded-md text-xs font-semibold border transition ${
                hideReagentQuiz
                  ? 'bg-rose-600 text-white border-rose-500 shadow-xs'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
              title={hideReagentQuiz ? 'Reagent Quiz active (Tap to reveal)' : 'Hide Reagents (Quiz)'}
            >
              <FlaskConical className="w-3.5 h-3.5" />
            </button>

            {/* Sticky Pin Toggle */}
            <button
              type="button"
              onClick={() => setIsSticky((prev) => !prev)}
              className={`p-1.5 rounded-md text-xs font-semibold border transition hidden sm:flex items-center ${
                isSticky
                  ? 'bg-slate-800 text-amber-300 border-amber-400/40'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isSticky ? 'Header is pinned (sticky). Click to unpin' : 'Header unpinned. Click to make sticky'}
            >
              {isSticky ? <Pin className="w-3.5 h-3.5 fill-amber-300" /> : <PinOff className="w-3.5 h-3.5" />}
            </button>

            {/* Reset filters if any are active */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="p-1.5 rounded-md text-xs font-semibold bg-slate-800 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:bg-rose-950/40 transition"
                title="Reset all search & filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* EXPAND CONTROLS BUTTON */}
            <button
              type="button"
              onClick={() => setIsHeaderCollapsed(false)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md flex items-center gap-1.5 transition transform active:scale-95"
              title="Expand full search, filters, and module tabs"
            >
              <span>Controls</span>
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. FULL EXPANDED HEADER (With clear "Collapse Header" button)              */
        /* ========================================================================= */
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5">
          {/* ROW 1: BRAND + TITLE + ACTION BUTTONS + COLLAPSE BUTTON */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow shrink-0">
                OC
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold tracking-tight flex items-center gap-2">
                  <span>JEE 2027 Organic Chemistry — Handwritten Master Notebook</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 font-semibold">
                    {visibleCount} of {totalCount} Cards
                  </span>
                </h1>
                <p className="text-xs text-slate-300 hidden md:block">
                  100% NCERT + JEE Main + Advanced • Drawn Skeletal Diagrams • Spoken Classroom Hinglish Logic
                </p>
              </div>
            </div>

            {/* TOOLBAR CONTROLS & COLLAPSE BUTTON */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setHideProductQuiz((prev) => !prev)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  hideProductQuiz
                    ? 'bg-rose-600 hover:bg-rose-500 text-white border border-rose-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600'
                }`}
                title="Hide products to test your recall"
              >
                {hideProductQuiz ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{hideProductQuiz ? 'Show Products' : 'Hide Products (Quiz)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setHideReagentQuiz((prev) => !prev)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                  hideReagentQuiz
                    ? 'bg-rose-600 hover:bg-rose-500 text-white border border-rose-400'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600'
                }`}
                title="Hide reagents to test your memory"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>{hideReagentQuiz ? 'Show Reagents' : 'Hide Reagents'}</span>
              </button>

              <button
                type="button"
                onClick={() => setHandwrittenFont((prev) => !prev)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/40 transition flex items-center gap-1"
                title="Toggle between Kalam handwritten font and clean Inter font"
              >
                <PenTool className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Font:</span>
                <span>{handwrittenFont ? 'Handwritten' : 'Clean'}</span>
              </button>

              <button
                type="button"
                onClick={() => setLinedPaper((prev) => !prev)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-600 transition flex items-center gap-1"
                title="Toggle lined notebook copy paper vs pure white background"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Paper:</span>
                <span>{linedPaper ? 'Lined' : 'White'}</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow transition flex items-center gap-1"
                title="Print or export as clean PDF without UI clutter"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

              {/* Sticky Pin/Unpin */}
              <button
                type="button"
                onClick={() => setIsSticky((prev) => !prev)}
                className={`p-1.5 rounded-lg text-xs font-semibold border transition flex items-center gap-1 ${
                  isSticky
                    ? 'bg-slate-800 text-amber-300 border-amber-400/40'
                    : 'bg-slate-800 text-slate-400 border-slate-600 hover:text-white'
                }`}
                title={isSticky ? 'Header is Sticky (pinned). Click to unpin' : 'Header is Unpinned. Click to pin'}
              >
                {isSticky ? <Pin className="w-3.5 h-3.5 fill-amber-300" /> : <PinOff className="w-3.5 h-3.5" />}
              </button>

              {/* COLLAPSE HEADER TOGGLE BUTTON (Prominent & highlighted) */}
              <button
                type="button"
                onClick={() => setIsHeaderCollapsed(true)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md flex items-center gap-1.5 transition transform active:scale-95 ml-1"
                title="Collapse header to free up vertical space for reading cards"
              >
                <span>Collapse</span>
                <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* ROW 2: SEARCH + FILTERS */}
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <div className="relative flex-1 min-w-[210px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any reagent, reaction, intermediate, test (e.g. DIBAL, Ozonolysis, Carbocation, Lucas, BDC, Aldol, Glucose, Kjeldahl)..."
                className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition"
              />
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs font-bold"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <select
              value={filterIntermed}
              onChange={(e) => setFilterIntermed(e.target.value as IntermedFilter)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All Intermediates / Mechanisms</option>
              <option value="Carbocation">⚡ Carbocation (Rearrangement!)</option>
              <option value="No Rearrangement">🛡️ Cyclic Ion / Syn (No Rearrangement)</option>
              <option value="Free Radical">🔥 Free Radical</option>
              <option value="Carbanion">➖ Carbanion / Enolate</option>
              <option value="Carbene">🧬 Carbene / Nitrene / Benzyne</option>
              <option value="SN2">🎯 Pure SN2 / Inversion</option>
              <option value="POC">🧪 POC Colour / Distinction Test</option>
            </select>

            <select
              value={filterStar}
              onChange={(e) => setFilterStar(e.target.value as StarFilter)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-600 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="ALL">All Frequencies</option>
              <option value="3">★★★ Ultra-High Frequency (Asked 6+x)</option>
              <option value="2">★★ Standard JEE Main/Adv</option>
              <option value="BOOKMARK">⭐ My Starred Revision List ({starredCount})</option>
              <option value="MASTERED">✅ Marked "Yaad Ho Gaya"</option>
              <option value="PENDING">⏳ Still Revising</option>
            </select>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-rose-300 hover:text-white hover:bg-rose-900/60 border border-rose-500/40 flex items-center gap-1 transition"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* ROW 3: MODULE TABS */}
          <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {MODULE_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              let btnClass = 'px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition ';

              if (isActive) {
                btnClass += 'font-bold bg-amber-400 text-slate-950 shadow-md ';
              } else if (tab.id === 'COMBO') {
                btnClass +=
                  'font-semibold bg-rose-950/70 text-rose-200 border border-rose-500/40 hover:bg-rose-900 ';
              } else if (tab.id === 'MATRIX') {
                btnClass +=
                  'font-semibold bg-indigo-950/70 text-indigo-200 border border-indigo-500/40 hover:bg-indigo-900 ';
              } else {
                btnClass += 'font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 ';
              }

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={btnClass}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
