import React, { useState, useMemo, useEffect } from 'react';
import {
  ALL_KINEMATICS_MODULES,
  ALL_KINEMATICS_QUESTIONS,
  FLASHCARDS_DATA,
  HACKSHEET_DATA,
  KinematicsCard,
  KinematicsModule,
  KinematicsQuestion,
} from '../../data/physics/kinematicsData';
import { MathText } from './MathText';
import {
  BookOpen,
  Zap,
  Bookmark,
  CheckCircle,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  RotateCw,
  Flame,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Layers,
  HelpCircle,
  Check,
  Split
} from 'lucide-react';

interface KinematicsViewProps {
  handwrittenFont: boolean;
  linedPaper: boolean;
  starredIds: Set<string>;
  masteredIds: Set<string>;
  onToggleStar: (id: string) => void;
  onToggleMastered: (id: string) => void;
}

export const KinematicsView: React.FC<KinematicsViewProps> = ({
  handwrittenFont,
  linedPaper,
  starredIds,
  masteredIds,
  onToggleStar,
  onToggleMastered,
}) => {
  // Navigation tabs inside Kinematics
  const [activeTab, setActiveTab] = useState<'CARDS' | 'QUESTIONS' | 'FLASHCARDS' | 'HACKSHEET'>('CARDS');

  // Filter state
  const [chapterFilter, setChapterFilter] = useState<'ALL' | '1D' | '2D'>('ALL');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [starFilter, setStarFilter] = useState<'ALL' | 'STARRED' | 'MASTERED'>('ALL');

  // One-tap opening questions for specific cards
  const [expandedQuestionCardIds, setExpandedQuestionCardIds] = useState<Set<string>>(new Set());

  // Full Screen Card Modal state
  const [fullScreenCardIndex, setFullScreenCardIndex] = useState<number | null>(null);

  // Fullscreen layout toggle (Split: Formula + Questions vs Wide: Formula only)
  const [fullScreenSplitView, setFullScreenSplitView] = useState(true);

  // Practice Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [activeSolutionMode, setActiveSolutionMode] = useState<Record<string, 'BHAIYA' | 'AAM'>>({});

  // Flashcard Deck State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Flattened cards for fullscreen navigation
  const allFilteredCards = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const list: { card: KinematicsCard; module: KinematicsModule }[] = [];

    ALL_KINEMATICS_MODULES.forEach((mod) => {
      if (chapterFilter !== 'ALL' && mod.chapter !== chapterFilter) return;
      if (selectedModuleId !== 'ALL' && mod.id !== selectedModuleId) return;

      mod.cards.forEach((card) => {
        if (starFilter === 'STARRED' && !starredIds.has(card.id)) return;
        if (starFilter === 'MASTERED' && !masteredIds.has(card.id)) return;

        if (q) {
          const haystack = `${card.title} ${card.trigger} ${card.hinglishNote} ${card.trap} ${card.formulaHtml}`.toLowerCase();
          if (!haystack.includes(q)) return;
        }

        list.push({ card, module: mod });
      });
    });

    return list;
  }, [chapterFilter, selectedModuleId, searchQuery, starFilter, starredIds, masteredIds]);

  // One-tap toggle for all topic questions
  const allQuestionsAreExpanded = useMemo(() => {
    return allFilteredCards.length > 0 && allFilteredCards.every((c) => expandedQuestionCardIds.has(c.card.id));
  }, [allFilteredCards, expandedQuestionCardIds]);

  const handleToggleAllTopicQuestions = () => {
    if (allQuestionsAreExpanded) {
      setExpandedQuestionCardIds(new Set());
    } else {
      setExpandedQuestionCardIds(new Set(allFilteredCards.map((c) => c.card.id)));
    }
  };

  const toggleCardQuestions = (cardId: string) => {
    setExpandedQuestionCardIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  // Fullscreen keyboard navigation
  useEffect(() => {
    if (fullScreenCardIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFullScreenCardIndex(null);
      } else if (e.key === 'ArrowRight') {
        setFullScreenCardIndex((prev) => (prev !== null && prev < allFilteredCards.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setFullScreenCardIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : allFilteredCards.length - 1));
      } else if (e.key === 'b' || e.key === 'B') {
        const item = allFilteredCards[fullScreenCardIndex];
        if (item) onToggleStar(item.card.id);
      } else if (e.key === 'm' || e.key === 'M') {
        const item = allFilteredCards[fullScreenCardIndex];
        if (item) onToggleMastered(item.card.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullScreenCardIndex, allFilteredCards, onToggleStar, onToggleMastered]);

  // Flashcards keyboard navigation
  useEffect(() => {
    if (activeTab !== 'FLASHCARDS') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        setIsFlipped(false);
        setFlashcardIndex((prev) => (prev < FLASHCARDS_DATA.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setIsFlipped(false);
        setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARDS_DATA.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab]);

  const handleOptionSelect = (qId: string, optionIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    setRevealedSolutions((prev) => ({ ...prev, [qId]: true }));
    if (!activeSolutionMode[qId]) {
      setActiveSolutionMode((prev) => ({ ...prev, [qId]: 'BHAIYA' }));
    }
  };

  // Reusable Question Renderer Component
  const renderQuestionItem = (q: KinematicsQuestion, qIdx: number) => {
    const selectedOpt = userAnswers[q.id];
    const isAnswered = selectedOpt !== undefined;
    const isCorrect = selectedOpt === q.correct;
    const isSolutionOpen = revealedSolutions[q.id];
    const solutionMode = activeSolutionMode[q.id] || 'BHAIYA';

    return (
      <div
        key={q.id}
        className={`bg-white rounded-xl p-3.5 sm:p-4 border transition-all ${
          isAnswered
            ? isCorrect
              ? 'border-emerald-500 bg-emerald-50/30'
              : 'border-rose-400 bg-rose-50/30'
            : 'border-slate-300 shadow-2xs'
        }`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 font-bold text-[10px]">
              Q{qIdx + 1}
            </span>
            <span className="font-bold text-slate-700 bg-amber-100/90 px-2 py-0.5 rounded text-[10px] border border-amber-300/60">
              {q.source}
            </span>
          </div>
          <span className="text-slate-500 font-medium text-[11px]">{q.topic}</span>
        </div>

        {/* Question Text */}
        <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
          <MathText content={q.question} />
        </div>

        {/* Options */}
        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {q.options.map((opt, optIdx) => {
            const isThisSelected = selectedOpt === optIdx;
            const isThisCorrect = optIdx === q.correct;

            let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

            if (isAnswered) {
              if (isThisCorrect) {
                btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold shadow-2xs';
              } else if (isThisSelected) {
                btnStyle = 'bg-rose-100 border-rose-500 text-rose-950 line-through';
              } else {
                btnStyle = 'bg-slate-50/60 border-slate-200 text-slate-400';
              }
            }

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleOptionSelect(q.id, optIdx)}
                className={`p-2 rounded-lg border text-left text-xs transition flex items-center justify-between gap-1.5 ${btnStyle}`}
              >
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>
                    <MathText content={opt} />
                  </span>
                </div>
                {isAnswered && isThisCorrect && (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback & Solution Toggle */}
        {isAnswered && (
          <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold">
              {isCorrect ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Sahi Jawab! (+4)</span>
                </span>
              ) : (
                <span className="text-rose-700">
                  Galat! Sahi option ({String.fromCharCode(65 + q.correct)}) tha
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setRevealedSolutions((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
              }
              className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
            >
              {isSolutionOpen ? 'Hide Solution' : 'View Shortcut'}
            </button>
          </div>
        )}

        {/* Solution Box: Saleem Bhaiya Trick vs Aam Zindagi */}
        {isSolutionOpen && (
          <div className="mt-2 p-2.5 rounded-lg bg-slate-900 text-white space-y-2 animate-fadeIn text-xs">
            <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
              <button
                type="button"
                onClick={() =>
                  setActiveSolutionMode((prev) => ({ ...prev, [q.id]: 'BHAIYA' }))
                }
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                  solutionMode === 'BHAIYA'
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>⚡ Saleem Bhaiya Shortcut</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveSolutionMode((prev) => ({ ...prev, [q.id]: 'AAM' }))
                }
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition flex items-center gap-1 ${
                  solutionMode === 'AAM'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>📝 Aam Zindagi</span>
              </button>
            </div>

            {solutionMode === 'BHAIYA' ? (
              <div className="bg-amber-950/40 border border-amber-500/40 p-2 rounded-md text-amber-200 leading-relaxed">
                <div className="font-bold text-amber-300 text-[11px] mb-0.5 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400" />
                  <span>Saleem Bhaiya 2-Second Shortcut:</span>
                </div>
                <MathText content={q.bhaiyaTrick} />
              </div>
            ) : (
              <div className="text-slate-300 leading-relaxed p-1">
                <div className="font-semibold text-slate-200 mb-0.5">Detailed Textbook Method:</div>
                <MathText content={q.aamZindagi} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-[97vw] mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* CHAPTER HEADER & STATS BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-cyan-400 text-slate-950 uppercase tracking-wider">
                Physics Chapter 01
              </span>
              <span className="text-xs font-semibold text-cyan-300">
                1D & 2D Kinematics Master Notebook
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-white leading-tight">
              Saleem Bhaiya Kinematics Handwritten Master
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              Every formula, concavity graph trick, tower drop shortcut, trajectory equation, and inclined plane hit.
              Instant comparison: Aam Zindagi (detailed method) vs Saleem Bhaiya 2-second shortcut!
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-slate-800/80 p-2 sm:p-3 rounded-xl border border-slate-700 text-xs">
            <div className="text-center px-2">
              <div className="text-lg font-black text-cyan-400">14</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Modules</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center px-2">
              <div className="text-lg font-black text-amber-400">{ALL_KINEMATICS_QUESTIONS.length}</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">PYQs</div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div className="text-center px-2">
              <div className="text-lg font-black text-emerald-400">{FLASHCARDS_DATA.length}</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Flashcards</div>
            </div>
          </div>
        </div>

        {/* SUB-TABS NAVIGATION */}
        <div className="mt-4 pt-3 border-t border-slate-800/90 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('CARDS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'CARDS'
                ? 'bg-cyan-500 text-slate-950 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Formula & Concept Cards</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('QUESTIONS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'QUESTIONS'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>PYQ Question Bank ({ALL_KINEMATICS_QUESTIONS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('FLASHCARDS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'FLASHCARDS'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Flashcards ({FLASHCARDS_DATA.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('HACKSHEET')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'HACKSHEET'
                ? 'bg-purple-500 text-white shadow-sm'
                : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Saleem Bhaiya Hacksheet</span>
          </button>
        </div>
      </div>

      {/* FILTER, SEARCH & ONE-TAP CONTROLS BAR */}
      {(activeTab === 'CARDS' || activeTab === 'QUESTIONS') && (
        <div className="bg-white/95 rounded-xl p-3 border border-slate-300 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
          {/* Chapter & Module Selectors */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-600 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Chapter:</span>
            </span>

            <div className="inline-flex rounded-lg border border-slate-300 p-0.5 bg-slate-100">
              <button
                type="button"
                onClick={() => setChapterFilter('ALL')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                  chapterFilter === 'ALL'
                    ? 'bg-slate-900 text-amber-300 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (1D + 2D)
              </button>
              <button
                type="button"
                onClick={() => setChapterFilter('1D')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                  chapterFilter === '1D'
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1D Motion
              </button>
              <button
                type="button"
                onClick={() => setChapterFilter('2D')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition ${
                  chapterFilter === '2D'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2D Motion
              </button>
            </div>

            {/* Module Dropdown */}
            <select
              value={selectedModuleId}
              onChange={(e) => setSelectedModuleId(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-medium bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 max-w-[210px] sm:max-w-xs truncate"
            >
              <option value="ALL">All 14 Modules</option>
              {ALL_KINEMATICS_MODULES.filter(
                (m) => chapterFilter === 'ALL' || m.chapter === chapterFilter
              ).map((m) => (
                <option key={m.id} value={m.id}>
                  {m.badge} - {m.title}
                </option>
              ))}
            </select>

            {/* ONE-TAP ALL QUESTIONS TOGGLE */}
            {activeTab === 'CARDS' && (
              <button
                type="button"
                onClick={handleToggleAllTopicQuestions}
                className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-400/25 hover:bg-amber-400/40 text-amber-950 border border-amber-400/60 transition flex items-center gap-1 shadow-2xs"
                title="Expand or collapse questions under every topic card with one click"
              >
                <Zap className="w-3.5 h-3.5 text-amber-700" />
                <span>
                  {allQuestionsAreExpanded ? 'Collapse All Topic Questions' : 'One-Tap: Open ALL Topic Questions'}
                </span>
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formula, trigger, question, trap..."
              className="w-full pl-9 pr-8 py-1.5 rounded-lg border border-slate-300 text-xs bg-white text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ===================== TAB 1: FORMULA & CONCEPT CARDS ===================== */}
      {activeTab === 'CARDS' && (
        <div className="space-y-6">
          {allFilteredCards.length === 0 ? (
            <div className="text-center py-12 px-4 bg-white/80 rounded-2xl border border-slate-300">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-base font-bold text-slate-800">Koi matching formula card nahi mila!</div>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search query or reset module filters.</p>
              <button
                type="button"
                onClick={() => {
                  setChapterFilter('ALL');
                  setSelectedModuleId('ALL');
                  setSearchQuery('');
                  setStarFilter('ALL');
                }}
                className="mt-3 px-3 py-1.5 rounded-lg bg-slate-900 text-amber-300 text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
              {allFilteredCards.map(({ card, module }, idx) => {
                const isStar = starredIds.has(card.id);
                const isDone = masteredIds.has(card.id);
                const isQuestionsExpanded = expandedQuestionCardIds.has(card.id);
                const questionCount = card.questions?.length || 0;

                return (
                  <article
                    key={card.id}
                    className={`notebook-card rounded-xl p-3.5 sm:p-5 flex flex-col justify-between transition-all ${
                      isDone ? 'ring-2 ring-emerald-500/70 bg-emerald-50/20' : ''
                    }`}
                  >
                    <div className="pl-3 sm:pl-4">
                      {/* Top Header Row */}
                      <div className="pb-2 border-b border-slate-300/80 flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 text-[10px] sm:text-xs font-bold">
                            {module.chapter} • #{idx + 1}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-600 truncate max-w-[160px] sm:max-w-xs">
                            {module.title}
                          </span>
                        </div>

                        {/* Card Actions */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => onToggleStar(card.id)}
                            className={`px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1 transition ${
                              isStar
                                ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-2xs'
                                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                            }`}
                            title={isStar ? 'Remove star' : 'Star for revision'}
                          >
                            <Bookmark className={`w-3.5 h-3.5 ${isStar ? 'fill-slate-950' : ''}`} />
                            <span className="text-[11px]">{isStar ? 'Starred' : 'Star'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => onToggleMastered(card.id)}
                            className={`px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1 transition ${
                              isDone
                                ? 'bg-emerald-600 text-white border-emerald-700 shadow-2xs'
                                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                            }`}
                            title="Mark as memorized"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span className="text-[11px]">{isDone ? 'Done' : 'Mark'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setFullScreenCardIndex(idx)}
                            className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 flex items-center gap-1 transition shadow-2xs"
                            title="Open full screen with arrow navigation"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3 className="hand-title text-base sm:text-lg font-bold text-blue-900 mt-2.5 leading-snug">
                        {card.title}
                      </h3>

                      {/* Formula Box (Rendered via KaTeX) */}
                      <div className="my-2.5 p-3 rounded-lg bg-white border border-slate-300 shadow-inner">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                          📐 Master Formula:
                        </div>
                        <div className="text-xs sm:text-sm text-slate-900 font-medium overflow-x-auto py-1">
                          <MathText content={card.formulaHtml} />
                        </div>
                      </div>

                      {/* Svg Diagram if available */}
                      {card.svgDiagram && (
                        <div
                          className="my-2.5 sketch-box p-2 text-center overflow-x-auto"
                          dangerouslySetInnerHTML={{ __html: card.svgDiagram }}
                        />
                      )}

                      {/* Trigger: Kab Lagana Hai */}
                      <div className="mt-2 text-xs">
                        <strong className="text-amber-800">🎯 Sawaal Mein Kab Lagana Hai:</strong>{' '}
                        <span className="text-slate-800">{card.trigger}</span>
                      </div>

                      {/* Saleem Bhaiya Hinglish Logic */}
                      <div className="mt-2 text-xs">
                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                          <Zap className="w-3.5 h-3.5 text-amber-500 inline" />
                          <span>Saleem Bhaiya Hinglish Logic:</span>
                        </div>
                        <p className="hinglish-note text-xs sm:text-sm text-slate-900 leading-relaxed">
                          <MathText content={card.hinglishNote} />
                        </p>
                      </div>

                      {/* Trap: Galti Yahan Hoti Hai */}
                      <div className="mt-2.5 p-2 rounded-lg bg-amber-100/80 border-l-4 border-red-600 text-xs sm:text-sm text-red-950">
                        <strong className="text-red-700">⚠️ JEE Trap Alert:</strong>{' '}
                        <MathText content={card.trap} />
                      </div>
                    </div>

                    {/* Footer: ONE-TAP OPEN ALL QUESTIONS FOR THIS TOPIC */}
                    <div className="pl-3 sm:pl-4 mt-3 pt-2.5 border-t border-dashed border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => toggleCardQuestions(card.id)}
                        className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition shadow-2xs ${
                          isQuestionsExpanded
                            ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                            : 'bg-amber-100/90 hover:bg-amber-200 text-amber-950 border border-amber-300'
                        }`}
                        title="Click to view all practice questions for this formula"
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-800" />
                        <span>
                          {isQuestionsExpanded
                            ? `Hide Questions (${questionCount}) ▲`
                            : `⚡ One-Tap: Practice All ${questionCount} Questions ▼`}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFullScreenCardIndex(idx)}
                        className="text-cyan-800 hover:text-cyan-950 font-bold flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-cyan-50"
                      >
                        <span>Full Screen</span>
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>

                    {/* EXPANDED ONE-TAP TOPIC QUESTIONS SECTION */}
                    {isQuestionsExpanded && card.questions && card.questions.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t-2 border-amber-400 space-y-3 bg-amber-50/30 p-3 sm:p-4 rounded-xl border border-amber-200 animate-fadeIn">
                        <div className="flex items-center justify-between text-xs font-bold text-amber-950 border-b border-amber-200 pb-1.5">
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <span>Practice Questions: {card.title}</span>
                          </span>
                          <span className="text-[11px] bg-amber-200/80 px-2 py-0.5 rounded text-amber-900">
                            {card.questions.length} Questions
                          </span>
                        </div>

                        {card.questions.map((q, qIdx) => renderQuestionItem(q, qIdx))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ===================== TAB 2: INTERACTIVE PYQ PRACTICE ===================== */}
      {activeTab === 'QUESTIONS' && (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Instant Interactive Checking:</strong> Select an option to see if you got it right. Then compare
                the traditional step-by-step textbook method vs Saleem Bhaiya's 2-second shortcut trick!
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {ALL_KINEMATICS_QUESTIONS.filter((q) => {
              if (chapterFilter !== 'ALL' && q.chapter !== chapterFilter) return false;
              if (searchQuery) {
                const hay = `${q.question} ${q.source} ${q.topic} ${q.bhaiyaTrick}`.toLowerCase();
                if (!hay.includes(searchQuery.toLowerCase())) return false;
              }
              return true;
            }).map((q, idx) => (
              <div key={q.id} className="notebook-card rounded-xl p-4 sm:p-5">
                <div className="pl-3 sm:pl-4">{renderQuestionItem(q, idx)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================== TAB 3: FLASHCARDS DECK ===================== */}
      {activeTab === 'FLASHCARDS' && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              Card {flashcardIndex + 1} of {FLASHCARDS_DATA.length}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Tap the card to flip! Use Arrow Keys (← / →) or buttons below.
            </p>
          </div>

          {/* 3D Flip Card */}
          <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="cursor-pointer min-h-[260px] sm:min-h-[300px] notebook-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border-2 border-slate-300 hover:border-emerald-500 transition-all text-center select-none"
          >
            <div className="text-right">
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {FLASHCARDS_DATA[flashcardIndex].cat}
              </span>
            </div>

            <div className="my-auto py-4">
              {!isFlipped ? (
                <div>
                  <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest mb-2">
                    Question / Prompt (Tap to Flip)
                  </div>
                  <div className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed">
                    <MathText content={FLASHCARDS_DATA[flashcardIndex].front} />
                  </div>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  <div className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-2">
                    ⚡ Saleem Bhaiya Formula & Shortcut
                  </div>
                  <div className="text-base sm:text-xl font-black text-slate-950 leading-relaxed bg-amber-50/80 p-3 rounded-xl border border-amber-300">
                    <MathText content={FLASHCARDS_DATA[flashcardIndex].back} />
                  </div>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-400 font-medium">
              {isFlipped ? 'Tap to view question again' : 'Tap to reveal answer'}
            </div>
          </div>

          {/* Flashcard Controls */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARDS_DATA.length - 1));
              }}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1 transition shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={() => setIsFlipped((prev) => !prev)}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm"
            >
              <RotateCw className="w-4 h-4" />
              <span>Flip Card</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev < FLASHCARDS_DATA.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1 transition shadow-xs"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ===================== TAB 4: SALEEM BHAIYA HACKSHEET ===================== */}
      {activeTab === 'HACKSHEET' && (
        <div className="space-y-4">
          <div className="bg-purple-950 text-purple-100 rounded-xl p-4 border border-purple-800 shadow-md">
            <h2 className="text-lg font-black text-amber-300 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>Saleem Bhaiya Kinematics Golden Hacksheet</span>
            </h2>
            <p className="text-xs text-purple-200 mt-1">
              High-frequency shortcuts, angle tables, gravity multipliers, and fatal traps where JEE aspirants lose 5 marks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HACKSHEET_DATA.map((section, idx) => (
              <div
                key={idx}
                className="notebook-card rounded-xl p-4 sm:p-5 border-l-4 border-l-purple-600"
              >
                <div className="pl-3">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 pb-2 border-b border-slate-200 mb-3">
                    {section.title}
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                    {section.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="bg-white/80 p-2.5 rounded-lg border border-slate-200 leading-relaxed overflow-x-auto"
                      >
                        <MathText content={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===================== FULL SCREEN CARD MODAL (FULL WIDTH, NO EMPTY MARGINS) ===================== */}
      {fullScreenCardIndex !== null && allFilteredCards[fullScreenCardIndex] && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 text-slate-900 animate-fadeIn overflow-hidden">
          {/* Top Bar - Full Width */}
          <div className="w-full max-w-[98vw] mx-auto flex items-center justify-between bg-slate-900/95 text-white px-3 sm:px-5 py-2.5 rounded-xl border border-slate-800 shadow-xl shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-black text-xs shrink-0">
                Card {fullScreenCardIndex + 1} of {allFilteredCards.length}
              </span>
              <span className="text-xs text-slate-300 font-semibold truncate">
                {allFilteredCards[fullScreenCardIndex].module.title}
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Split view toggle for widescreen */}
              {allFilteredCards[fullScreenCardIndex].card.questions?.length > 0 && (
                <button
                  type="button"
                  onClick={() => setFullScreenSplitView((prev) => !prev)}
                  className="hidden lg:flex px-2.5 py-1 rounded bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs font-bold items-center gap-1 border border-slate-700"
                  title="Toggle side-by-side formula + question view"
                >
                  <Split className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{fullScreenSplitView ? 'Side-by-Side View' : 'Single Column View'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onToggleStar(allFilteredCards[fullScreenCardIndex].card.id)}
                className="px-2.5 py-1 rounded bg-slate-800 text-amber-300 hover:bg-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-700"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>
                  {starredIds.has(allFilteredCards[fullScreenCardIndex].card.id) ? 'Starred' : 'Star (B)'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onToggleMastered(allFilteredCards[fullScreenCardIndex].card.id)}
                className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 hover:bg-slate-700 text-xs font-bold flex items-center gap-1 border border-slate-700"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>
                  {masteredIds.has(allFilteredCards[fullScreenCardIndex].card.id) ? 'Mastered' : 'Done (M)'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFullScreenCardIndex(null)}
                className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>
          </div>

          {/* Modal Center Card - Expanded to FULL WIDTH (No Excessive Margins) */}
          <div className="w-full max-w-[98vw] mx-auto flex-1 my-2 overflow-y-auto notebook-card rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div
              className={`pl-3 sm:pl-4 ${
                fullScreenSplitView && allFilteredCards[fullScreenCardIndex].card.questions?.length > 0
                  ? 'lg:grid lg:grid-cols-2 lg:gap-6'
                  : 'space-y-4'
              }`}
            >
              {/* LEFT COLUMN: FORMULA, SVG, TRIGGER, HINGLISH & TRAP */}
              <div className="space-y-4">
                <div className="border-b border-slate-300 pb-2.5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    {allFilteredCards[fullScreenCardIndex].module.badge}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-cyan-100 text-cyan-900 border border-cyan-300">
                    {allFilteredCards[fullScreenCardIndex].module.chapter} Motion
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-blue-950">
                  {allFilteredCards[fullScreenCardIndex].card.title}
                </h2>

                {/* Formula */}
                <div className="p-4 rounded-xl bg-white border border-slate-300 shadow-inner">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    📐 Master Formula:
                  </div>
                  <div className="text-sm sm:text-base text-slate-900 font-medium">
                    <MathText content={allFilteredCards[fullScreenCardIndex].card.formulaHtml} />
                  </div>
                </div>

                {/* Svg Diagram */}
                {allFilteredCards[fullScreenCardIndex].card.svgDiagram && (
                  <div
                    className="sketch-box p-3 text-center overflow-x-auto"
                    dangerouslySetInnerHTML={{
                      __html: allFilteredCards[fullScreenCardIndex].card.svgDiagram!,
                    }}
                  />
                )}

                {/* Trigger */}
                <div className="text-xs sm:text-sm">
                  <strong className="text-amber-800">🎯 Sawaal Mein Kab Lagana Hai:</strong>{' '}
                  <span className="text-slate-800">
                    {allFilteredCards[fullScreenCardIndex].card.trigger}
                  </span>
                </div>

                {/* Saleem Bhaiya Hinglish */}
                <div className="text-xs sm:text-sm">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Saleem Bhaiya Hinglish Logic:</span>
                  </div>
                  <p className="hinglish-note text-sm sm:text-base text-slate-950 leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-200">
                    <MathText content={allFilteredCards[fullScreenCardIndex].card.hinglishNote} />
                  </p>
                </div>

                {/* Trap */}
                <div className="p-3 rounded-xl bg-amber-100/90 border-l-4 border-red-600 text-xs sm:text-sm text-red-950">
                  <strong className="text-red-700">⚠️ JEE Trap Alert:</strong>{' '}
                  <MathText content={allFilteredCards[fullScreenCardIndex].card.trap} />
                </div>
              </div>

              {/* RIGHT COLUMN: ALL QUESTIONS OF THIS TOPIC IN FULL SCREEN! */}
              {allFilteredCards[fullScreenCardIndex].card.questions?.length > 0 && (
                <div className="space-y-3 pt-4 lg:pt-0 lg:pl-2 border-t lg:border-t-0 lg:border-l border-slate-300">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-300">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span className="font-black text-sm text-slate-900">
                        Topic Practice Questions ({allFilteredCards[fullScreenCardIndex].card.questions.length})
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Solve in Full Screen
                    </span>
                  </div>

                  <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
                    {allFilteredCards[fullScreenCardIndex].card.questions.map((q, qIdx) =>
                      renderQuestionItem(q, qIdx)
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation - Full Width */}
          <div className="w-full max-w-[98vw] mx-auto flex items-center justify-between text-xs text-white shrink-0">
            <button
              type="button"
              onClick={() =>
                setFullScreenCardIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : allFilteredCards.length - 1
                )
              }
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold flex items-center gap-1.5 border border-slate-700 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous (←)</span>
            </button>

            <span className="hidden sm:inline text-slate-400">
              Tip: Use Left / Right arrow keys to navigate cards
            </span>

            <button
              type="button"
              onClick={() =>
                setFullScreenCardIndex((prev) =>
                  prev !== null && prev < allFilteredCards.length - 1 ? prev + 1 : 0
                )
              }
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold flex items-center gap-1.5 border border-slate-700 transition"
            >
              <span>Next (→)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
