import React, { useState, useEffect, useMemo } from 'react';
import { TabType, IntermedFilter, StarFilter } from './types';
import { REAGENT_CARDS, MODULE_TABS } from './data/reagents';
import { CollapsibleHeader } from './components/CollapsibleHeader';
import { CardItem } from './components/CardItem';
import { SelectivityMatrix } from './components/SelectivityMatrix';
import { FullScreenCardModal } from './components/FullScreenCardModal';
import {
  ChevronUp,
  ChevronDown,
  ArrowUp,
  Search,
  Sparkles,
  BookOpen,
  HelpCircle,
  X,
  SlidersHorizontal,
  Maximize2,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterIntermed, setFilterIntermed] = useState<IntermedFilter>('ALL');
  const [filterStar, setFilterStar] = useState<StarFilter>('ALL');
  const [hideProductQuiz, setHideProductQuiz] = useState(false);
  const [hideReagentQuiz, setHideReagentQuiz] = useState(false);
  const [handwrittenFont, setHandwrittenFont] = useState(true);
  const [linedPaper, setLinedPaper] = useState(true);

  // User-requested collapsible header state:
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  // Guide banner state
  const [showGuideBanner, setShowGuideBanner] = useState(() => {
    try {
      return localStorage.getItem('jee_oc_guide_banner') !== 'hidden';
    } catch {
      return true;
    }
  });

  // Bookmark and Mastered sets (persistent)
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('jee_oc_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [mastered, setMastered] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('jee_oc_mastered');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Track cards individually revealed in quiz mode
  const [revealedCardIds, setRevealedCardIds] = useState<Set<string>>(new Set());

  // Full Screen Study Mode State (index in filteredCards)
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  // Scroll position tracking for Floating Action controls
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update body classes for fonts, paper texture, and quiz mask
  useEffect(() => {
    const body = document.body;

    body.classList.toggle('handwritten-mode', handwrittenFont);
    body.classList.toggle('clean-mode', !handwrittenFont);
    body.classList.toggle('white-paper', !linedPaper);
    body.classList.toggle('quiz-hide-product', hideProductQuiz);
    body.classList.toggle('quiz-hide-reagent', hideReagentQuiz);
  }, [handwrittenFont, linedPaper, hideProductQuiz, hideReagentQuiz]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('jee_oc_bookmarks', JSON.stringify(Array.from(bookmarks)));
    } catch {}
  }, [bookmarks]);

  // Persist mastered
  useEffect(() => {
    try {
      localStorage.setItem('jee_oc_mastered', JSON.stringify(Array.from(mastered)));
    } catch {}
  }, [mastered]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleMastered = (id: string) => {
    setMastered((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleReveal = (id: string) => {
    setRevealedCardIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleResetFilters = () => {
    setActiveTab('ALL');
    setSearchQuery('');
    setFilterIntermed('ALL');
    setFilterStar('ALL');
  };

  const handleDismissGuide = () => {
    setShowGuideBanner(false);
    try {
      localStorage.setItem('jee_oc_guide_banner', 'hidden');
    } catch {}
  };

  // Filter cards
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return REAGENT_CARDS.filter((card) => {
      if (activeTab !== 'ALL' && activeTab !== 'MATRIX' && card.tab !== activeTab) {
        return false;
      }
      if (filterIntermed !== 'ALL' && card.intermed !== filterIntermed) {
        return false;
      }
      if (filterStar === '3' && card.stars !== 3) return false;
      if (filterStar === '2' && card.stars !== 2) return false;
      if (filterStar === 'BOOKMARK' && !bookmarks.has(card.id)) return false;
      if (filterStar === 'MASTERED' && !mastered.has(card.id)) return false;
      if (filterStar === 'PENDING' && mastered.has(card.id)) return false;

      if (q) {
        const haystack = `${card.title} ${card.category} ${card.hinglish} ${card.touches} ${card.ignores} ${card.trap} ${card.exampleText}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [activeTab, filterIntermed, filterStar, searchQuery, bookmarks, mastered]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFullScreen = (index: number) => {
    setFullScreenIndex(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenIndex(null);
  };

  const handleNextFullScreen = () => {
    setFullScreenIndex((prev) => {
      if (prev === null) return null;
      return prev < filteredCards.length - 1 ? prev + 1 : 0;
    });
  };

  const handlePrevFullScreen = () => {
    setFullScreenIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : filteredCards.length - 1;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* COLLAPSIBLE HEADER (Supports full and ultra-compact mode) */}
      <CollapsibleHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterIntermed={filterIntermed}
        setFilterIntermed={setFilterIntermed}
        filterStar={filterStar}
        setFilterStar={setFilterStar}
        hideProductQuiz={hideProductQuiz}
        setHideProductQuiz={setHideProductQuiz}
        hideReagentQuiz={hideReagentQuiz}
        setHideReagentQuiz={setHideReagentQuiz}
        handwrittenFont={handwrittenFont}
        setHandwrittenFont={setHandwrittenFont}
        linedPaper={linedPaper}
        setLinedPaper={setLinedPaper}
        visibleCount={activeTab === 'MATRIX' ? 0 : filteredCards.length}
        totalCount={REAGENT_CARDS.length}
        starredCount={bookmarks.size}
        isHeaderCollapsed={isHeaderCollapsed}
        setIsHeaderCollapsed={setIsHeaderCollapsed}
        isSticky={isSticky}
        setIsSticky={setIsSticky}
        onResetFilters={handleResetFilters}
      />

      {/* QUICK STATUS BAR WHEN HEADER IS COLLAPSED (Reminds user about space saving & fast toggle) */}
      {isHeaderCollapsed && (
        <div className="no-print max-w-7xl mx-auto w-full px-3 sm:px-6 pt-2">
          <div className="bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs text-slate-300 backdrop-blur-xs">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="font-medium text-amber-300">Space-Saving Mode:</span>
              <span className="truncate">
                Header collapsed! Showing {filteredCards.length} cards with maximum vertical space.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsHeaderCollapsed(false)}
              className="text-amber-400 hover:text-amber-300 font-bold px-2 py-0.5 rounded hover:bg-slate-700 transition shrink-0 flex items-center gap-1"
            >
              <span>Expand Toolbar</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* HOW TO READ BANNER (COLLAPSIBLE / DISMISSIBLE) */}
      {showGuideBanner && !isHeaderCollapsed && (
        <div id="guideBanner" className="no-print max-w-7xl mx-auto w-full px-3 sm:px-6 pt-3">
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-800 shadow-xs">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-amber-900 flex items-center gap-1">
                <HelpCircle className="w-4 h-4 text-amber-600 inline" />
                How to Revise Fast:
              </span>
              <span>
                <strong className="text-blue-700">Blue Zig-Zag/Rings</strong> = Substrate
              </span>
              <span>•</span>
              <span>
                <strong className="text-red-600">Red Highlighted Bonds</strong> = Bond that Breaks/Forms
              </span>
              <span>•</span>
              <span>
                <strong className="text-emerald-700">Green Ring/Chain</strong> = Final Product
              </span>
              <span>•</span>
              <span>
                Tap <strong>"Hide Products (Quiz)"</strong>, then click any diagram to reveal!
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsHeaderCollapsed(true)}
                className="text-slate-600 hover:text-slate-900 font-medium px-2 py-0.5 rounded text-[11px] border border-amber-200 hover:bg-amber-100 transition"
              >
                Collapse Header
              </button>
              <button
                type="button"
                onClick={handleDismissGuide}
                className="text-amber-900 hover:text-amber-950 font-bold px-2 py-0.5 rounded hover:bg-amber-200/50 transition flex items-center gap-1"
                title="Dismiss guide"
              >
                <span>Got it</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-4 flex-1">
        {/* SELECTIVITY MATRIX (Displayed when Tab 8 selected, or always above P6) */}
        {(activeTab === 'MATRIX' || activeTab === 'P6') && <SelectivityMatrix />}

        {/* CARDS GRID (Hidden when MATRIX tab is exclusively selected) */}
        {activeTab !== 'MATRIX' && (
          <>
            {filteredCards.length === 0 ? (
              <div
                id="emptyState"
                className="text-center py-12 px-4 bg-white/80 rounded-xl border border-slate-300 shadow-sm my-4"
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-slate-800">Koi matching reagent card nahi mila!</p>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Try clearing the search query or resetting the Intermediate & Frequency filters above.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold transition shadow-sm"
                >
                  Reset All Filters & Show All 62 Cards
                </button>
              </div>
            ) : (
              <div id="cardsGrid" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredCards.map((card, idx) => (
                  <CardItem
                    key={card.id}
                    card={card}
                    index={idx}
                    isBookmarked={bookmarks.has(card.id)}
                    isMastered={mastered.has(card.id)}
                    isRevealed={revealedCardIds.has(card.id)}
                    onToggleBookmark={toggleBookmark}
                    onToggleMastered={toggleMastered}
                    onToggleReveal={toggleReveal}
                    onOpenFullScreen={handleOpenFullScreen}
                    quizActive={hideProductQuiz || hideReagentQuiz}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* FULL SCREEN CARD MODAL WITH KEYBOARD NAVIGATION (← / →, Esc, Space, B, M) */}
      {fullScreenIndex !== null && filteredCards[fullScreenIndex] && (
        <FullScreenCardModal
          cards={filteredCards}
          currentIndex={fullScreenIndex}
          onClose={handleCloseFullScreen}
          onNext={handleNextFullScreen}
          onPrev={handlePrevFullScreen}
          isBookmarked={bookmarks.has(filteredCards[fullScreenIndex].id)}
          isMastered={mastered.has(filteredCards[fullScreenIndex].id)}
          isRevealed={revealedCardIds.has(filteredCards[fullScreenIndex].id)}
          onToggleBookmark={toggleBookmark}
          onToggleMastered={toggleMastered}
          onToggleReveal={toggleReveal}
          quizActive={hideProductQuiz || hideReagentQuiz}
        />
      )}

      {/* FLOATING ACTION BUTTONS (Convenient floating toggle for collapsible header + scroll to top) */}
      <div className="no-print fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {/* Full Screen Mode floating trigger */}
        {filteredCards.length > 0 && activeTab !== 'MATRIX' && (
          <button
            type="button"
            onClick={() => handleOpenFullScreen(0)}
            className="px-3.5 py-2 rounded-full text-xs font-bold shadow-xl border border-indigo-500/40 bg-indigo-900/95 hover:bg-indigo-800 text-indigo-100 flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95 backdrop-blur-xs"
            title="Open Full Screen Card Mode (Use ← / → keys to flip cards)"
          >
            <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Full Screen Mode</span>
          </button>
        )}

        {/* Header Toggle Floating Button */}
        <button
          type="button"
          onClick={() => setIsHeaderCollapsed((prev) => !prev)}
          className={`px-3 py-2 rounded-full text-xs font-bold shadow-lg border flex items-center gap-1.5 transition-all transform hover:scale-105 ${
            isHeaderCollapsed
              ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-amber-500'
              : 'bg-slate-900/90 hover:bg-slate-800 text-white border-slate-700 backdrop-blur-xs'
          }`}
          title={isHeaderCollapsed ? 'Expand top controls and module tabs' : 'Collapse top controls to save space'}
        >
          {isHeaderCollapsed ? (
            <>
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              <span>Expand Toolbar</span>
            </>
          ) : (
            <>
              <ChevronUp className="w-4 h-4 stroke-[2.5]" />
              <span>Collapse Header</span>
            </>
          )}
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-slate-900/90 text-amber-300 border border-slate-700 hover:bg-slate-800 shadow-md flex items-center justify-center transition-all transform hover:scale-110 backdrop-blur-xs"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* FOOTER */}
      <footer className="no-print bg-slate-900 text-slate-400 text-xs py-5 border-t border-slate-800 mt-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-white">JEE 2027 Organic Chemistry Master Copy</span> • 62 Complete NCERT & JEE Advanced Reagents
          </div>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <span>Starred: <strong className="text-amber-400">{bookmarks.size}</strong></span>
            <span>•</span>
            <span>Mastered: <strong className="text-emerald-400">{mastered.size}</strong></span>
            <span>•</span>
            <button
              onClick={() => setIsHeaderCollapsed((prev) => !prev)}
              className="text-amber-400 hover:underline"
            >
              {isHeaderCollapsed ? 'Expand Header' : 'Collapse Header'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
