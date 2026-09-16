"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { 
  Keyboard, 
  RotateCcw, 
  Sparkles, 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  Zap, 
  Award, 
  BarChart2, 
  Flame, 
  Code2, 
  BookOpen, 
  Gauge, 
  CheckCircle2, 
  RefreshCw,
  FileText
} from "lucide-react";

// --- COMMON VOCABULARY & CODE SNIPPETS ---

const COMMON_WORDS = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", 
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", 
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", 
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", 
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", 
  "person", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "week", "case", "point", "government", 
  "company", "number", "group", "problem", "fact", "find", "tell", "ask", "seem", "feel", "try", "leave", "call", "last", "long", "great", "little", "own", "old", 
  "right", "big", "high", "different", "small", "large", "next", "early", "young", "important", "few", "public", "bad", "same", "able"
];

const CODE_SNIPPETS = [
  `const calculateSpeed = (chars, timeMs) => Math.round((chars / 5) / (timeMs / 60000));`,
  `function binarySearch(arr, target) { let low = 0, high = arr.length - 1; while (low <= high) { const mid = Math.floor((low + high) / 2); if (arr[mid] === target) return mid; } return -1; }`,
  `useEffect(() => { const handler = (e) => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, []);`,
  `const formatCurrency = (amount, currency = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);`,
  `export async function fetchData(endpoint) { const response = await fetch(endpoint); if (!response.ok) throw new Error('Network error'); return await response.json(); }`,
  `<div className="flex items-center justify-between p-4 bg-slate-900 border border-white/10 rounded-xl shadow-lg"></div>`
];

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export interface CharStats {
  hits: number;
  misses: number;
  totalTime: number;
}

export interface KeystrokeRecord {
  expected: string;
  typed: string;
  time: number;
  isCorrect: boolean;
}

// Sound generator using Web Audio API
class SoundEngine {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
  }

  playKeySound(isError = false, soundType = 'mechanical') {
    if (soundType === 'off') return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      if (isError) {
        // Error buzzer tone
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (soundType === 'mechanical') {
        // Crisp mechanical click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.04);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (soundType === 'thock') {
        // Deep thock sound
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220 + Math.random() * 40, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      }
    } catch {
      // Audio autoplay policy fallback
    }
  }
}

const soundEngine = new SoundEngine();

// Keyboard Layout Matrix
const KEYBOARD_ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Space"]
];

export default function KeybrPage() {
  // Practice modes: "adaptive" | "words" | "code" | "custom"
  const [practiceMode, setPracticeMode] = useState<"adaptive" | "words" | "code" | "custom">("adaptive");
  const [wordCountOption, setWordCountOption] = useState<number>(15);
  const [customTextInput, setCustomTextInput] = useState("");
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [soundMode, setSoundMode] = useState<"mechanical" | "thock" | "off">("mechanical");
  const [showKeyboard, setShowKeyboard] = useState(true);

  // Core typing state
  const [targetText, setTargetText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState<"idle" | "typing" | "finished">("idle");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [history, setHistory] = useState<KeystrokeRecord[]>([]);
  const [charMatrix, setCharMatrix] = useState<Record<string, CharStats>>({});
  const [activeKeyPressed, setActiveKeyPressed] = useState<string | null>(null);
  const [wpmTrend, setWpmTrend] = useState<number[]>([]);

  // Typing container ref for scroll & focus
  const typingContainerRef = useRef<HTMLDivElement>(null);

  // --- KEYBR ADAPTIVE GENERATOR ALGORITHM ---
  const generateAdaptiveLesson = useCallback((matrix: Record<string, CharStats>, count: number) => {
    const weights: Record<string, number> = {};

    for (const char of ALPHABET) {
      const stats = matrix[char] || { hits: 0, misses: 0, totalTime: 0 };
      const totalAttempts = stats.hits + stats.misses;

      let weight = 1;
      if (totalAttempts > 0) {
        const errorRate = stats.misses / totalAttempts;
        const avgTime = stats.hits > 0 ? Math.min(stats.totalTime / stats.hits, 2000) : 500;
        const timeFactor = Math.max(0, avgTime - 200) / 200;
        weight = 1 + errorRate * 12 + timeFactor * 1.5;
      } else {
        weight = 2.5; // High priority for unpracticed characters
      }
      weights[char] = weight;
    }

    const wordScores = COMMON_WORDS.map((word) => {
      let score = 0;
      const lowerWord = word.toLowerCase();
      for (const char of lowerWord) {
        score += weights[char] || 1;
      }
      return { word, score: score / word.length };
    });

    const totalScore = wordScores.reduce((sum, item) => sum + item.score, 0);

    const getRandomWord = () => {
      let rand = Math.random() * totalScore;
      for (const item of wordScores) {
        rand -= item.score;
        if (rand <= 0) return item.word;
      }
      return COMMON_WORDS[0];
    };

    const words: string[] = [];
    for (let i = 0; i < count; i++) {
      words.push(getRandomWord());
    }

    return words.join(" ");
  }, []);

  const generateLessonForMode = useCallback(() => {
    if (practiceMode === "adaptive") {
      return generateAdaptiveLesson(charMatrix, wordCountOption);
    } else if (practiceMode === "words") {
      const shuffled = [...COMMON_WORDS].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, wordCountOption).join(" ");
    } else if (practiceMode === "code") {
      const randomCode = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
      return randomCode;
    } else if (practiceMode === "custom") {
      return customTextInput.trim() || "The quick brown fox jumps over the lazy dog.";
    }
    return "The quick brown fox jumps over the lazy dog.";
  }, [practiceMode, charMatrix, wordCountOption, customTextInput, generateAdaptiveLesson]);

  // Load new lesson
  const loadNewLesson = useCallback(() => {
    const text = generateLessonForMode();
    setTargetText(text);
    setUserInput("");
    setCurrentIndex(0);
    setStatus("idle");
    setStartTime(null);
    setEndTime(null);
    setHistory([]);
    setWpmTrend([]);
  }, [generateLessonForMode]);

  // Initial load
  useEffect(() => {
    loadNewLesson();
  }, [practiceMode, wordCountOption]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keystroke handler
  const handleTypingKey = useCallback((key: string) => {
    if (status === "finished") return;

    if (key.length > 1) return; // Ignore special non-printable keys

    const now = Date.now();
    const isFirstKey = status === "idle";
    const currentStartTime = isFirstKey ? now : startTime;

    const expectedChar = targetText[currentIndex];
    if (!expectedChar) return;

    const isCorrect = key === expectedChar;

    // Trigger audio feedback
    soundEngine.playKeySound(!isCorrect, soundMode);

    // Calculate latency
    const lastTime = history.length > 0 ? history[history.length - 1].time : (currentStartTime || now);
    const latency = isFirstKey ? 0 : now - lastTime;

    // Update character performance matrix
    const lowerExpected = expectedChar.toLowerCase();
    if (ALPHABET.includes(lowerExpected)) {
      setCharMatrix((prev) => {
        const prevStats = prev[lowerExpected] || { hits: 0, misses: 0, totalTime: 0 };
        return {
          ...prev,
          [lowerExpected]: {
            hits: isCorrect ? prevStats.hits + 1 : prevStats.hits,
            misses: !isCorrect ? prevStats.misses + 1 : prevStats.misses,
            totalTime: isCorrect ? prevStats.totalTime + latency : prevStats.totalTime,
          }
        };
      });
    }

    const nextInput = userInput + key;
    const nextIndex = currentIndex + 1;
    const isFinished = nextIndex >= targetText.length;

    setUserInput(nextInput);
    setCurrentIndex(nextIndex);
    setStartTime(currentStartTime);

    const updatedHistory = [
      ...history,
      {
        expected: expectedChar,
        typed: key,
        time: now,
        isCorrect
      }
    ];
    setHistory(updatedHistory);

    // Record WPM trend checkpoint
    if (nextIndex % 5 === 0 && currentStartTime) {
      const minutes = (now - currentStartTime) / 60000;
      if (minutes > 0) {
        const currentWpm = Math.round((nextIndex / 5) / minutes);
        setWpmTrend((prev) => [...prev, currentWpm]);
      }
    }

    if (isFinished) {
      setStatus("finished");
      setEndTime(now);
    } else {
      setStatus("typing");
    }
  }, [currentIndex, history, soundMode, startTime, status, targetText, userInput]);

  // Backspace handler
  const handleBackspace = useCallback(() => {
    if (status !== "typing" || currentIndex === 0) return;
    setUserInput((prev) => prev.slice(0, -1));
    setCurrentIndex((prev) => prev - 1);
  }, [currentIndex, status]);

  // Global Keyboard Listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Allow modal text area to work normally
      if (showCustomModal || showStatsModal) return;

      setActiveKeyPressed(e.key.toLowerCase());

      if (status === "finished") {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          loadNewLesson();
        }
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        loadNewLesson();
        return;
      }

      if (e.key === "Escape") {
        loadNewLesson();
        return;
      }

      if (e.key === " ") {
        e.preventDefault();
        handleTypingKey(" ");
        return;
      }

      if (e.key === "Backspace") {
        e.preventDefault();
        handleBackspace();
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        handleTypingKey(e.key);
      }
    };

    const onKeyUp = () => {
      setActiveKeyPressed(null);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [handleBackspace, handleTypingKey, loadNewLesson, showCustomModal, showStatsModal, status]);

  // --- DERIVED METRICS ---
  const stats = useMemo(() => {
    const totalTyped = history.length;
    if (totalTyped === 0) {
      return { wpm: 0, rawWpm: 0, accuracy: 100, errors: 0, durationSec: 0, rank: "Ready" };
    }

    const correctHits = history.filter((h) => h.isCorrect).length;
    const errors = totalTyped - correctHits;
    const accuracy = Math.round((correctHits / totalTyped) * 100);

    const timeSpan = (status === "finished" && endTime && startTime)
      ? (endTime - startTime)
      : (Date.now() - (startTime || Date.now()));

    const minutes = Math.max(0.01, timeSpan / 60000);
    const durationSec = Math.round(timeSpan / 1000);

    // Standard WPM: (correct characters / 5) / minutes
    const wpm = Math.max(0, Math.round((correctHits / 5) / minutes));
    const rawWpm = Math.max(0, Math.round((totalTyped / 5) / minutes));

    let rank = "Beginner 🎯";
    if (wpm >= 90) rank = "Master Typist ⚡🏆";
    else if (wpm >= 70) rank = "Pro Speedster 🚀";
    else if (wpm >= 50) rank = "Fast & Fluent ⚡";
    else if (wpm >= 35) rank = "Intermediate 🌟";

    return { wpm, rawWpm, accuracy, errors, durationSec, rank };
  }, [history, status, endTime, startTime]);

  // Expected next key for keyboard highlight
  const nextExpectedKey = useMemo(() => {
    if (status === "finished" || !targetText) return null;
    const char = targetText[currentIndex];
    if (char === " ") return "Space";
    return char?.toLowerCase() || null;
  }, [targetText, currentIndex, status]);

  return (
    <PageContainer>
      {/* Top Navigation Bar */}
      <TopBar>
        <div className="title-area">
          <Link href="/resources" className="back-btn" title="Back to Resources">
            <ArrowLeft size={18} />
            <span>Resources</span>
          </Link>
          <div className="divider-vert" />
          <div className="branding">
            <div className="icon-badge">
              <Keyboard size={20} />
            </div>
            <div className="title-text">
              <h1>KEYBR PRO</h1>
              <span className="subtitle">Smart Touch Typing & Speed Trainer</span>
            </div>
          </div>
        </div>

        <div className="actions-area">
          {/* Practice Mode Selector */}
          <div className="mode-selector">
            <button 
              className={`mode-btn ${practiceMode === "adaptive" ? "active" : ""}`}
              onClick={() => setPracticeMode("adaptive")}
              title="Adaptive algorithm prioritizes difficult letters"
            >
              <Sparkles size={14} />
              <span>Adaptive</span>
            </button>
            <button 
              className={`mode-btn ${practiceMode === "words" ? "active" : ""}`}
              onClick={() => setPracticeMode("words")}
              title="Common English dictionary words"
            >
              <BookOpen size={14} />
              <span>Words</span>
            </button>
            <button 
              className={`mode-btn ${practiceMode === "code" ? "active" : ""}`}
              onClick={() => setPracticeMode("code")}
              title="Real JavaScript/TypeScript & HTML snippets"
            >
              <Code2 size={14} />
              <span>Code</span>
            </button>
            <button 
              className={`mode-btn ${practiceMode === "custom" ? "active" : ""}`}
              onClick={() => {
                setPracticeMode("custom");
                setShowCustomModal(true);
              }}
              title="Paste your own text"
            >
              <FileText size={14} />
              <span>Custom</span>
            </button>
          </div>

          {/* Word count pills (if in adaptive or words mode) */}
          {(practiceMode === "adaptive" || practiceMode === "words") && (
            <div className="count-selector">
              {[10, 15, 25, 40].map((count) => (
                <button
                  key={count}
                  className={`count-btn ${wordCountOption === count ? "active" : ""}`}
                  onClick={() => setWordCountOption(count)}
                >
                  {count}w
                </button>
              ))}
            </div>
          )}

          {/* Sound Toggle */}
          <button 
            className={`tool-btn ${soundMode !== "off" ? "active" : ""}`}
            onClick={() => {
              setSoundMode((prev) => (prev === "mechanical" ? "thock" : prev === "thock" ? "off" : "mechanical"));
            }}
            title={`Sound: ${soundMode.toUpperCase()}`}
          >
            {soundMode === "off" ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span className="hide-mobile">{soundMode === "mechanical" ? "Clicky" : soundMode === "thock" ? "Thock" : "Mute"}</span>
          </button>

          {/* Stats Drawer Button */}
          <button 
            className="tool-btn"
            onClick={() => setShowStatsModal(true)}
            title="View Alphabet Mastery Heatmap"
          >
            <BarChart2 size={16} />
            <span className="hide-mobile">Matrix</span>
          </button>

          {/* Restart Button */}
          <button 
            className="action-btn restart-btn"
            onClick={loadNewLesson}
            title="Restart current or generate new lesson (Tab/Esc)"
          >
            <RotateCcw size={16} />
            <span>Restart</span>
          </button>
        </div>
      </TopBar>

      {/* Main Workspace */}
      <Workspace>
        {/* Live Metrics Dashboard */}
        <DashboardCard>
          <div className="stat-group">
            <div className="stat-item">
              <span className="stat-label">
                <Gauge size={13} className="text-blue-400" />
                SPEED
              </span>
              <div className="stat-value">
                <span className="number">{stats.wpm}</span>
                <span className="unit">WPM</span>
              </div>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-label">
                <Award size={13} className="text-emerald-400" />
                ACCURACY
              </span>
              <div className={`stat-value ${stats.accuracy < 90 ? "warning" : "good"}`}>
                <span className="number">{stats.accuracy}</span>
                <span className="unit">%</span>
              </div>
            </div>

            <div className="stat-divider" />

            <div className="stat-item hide-mobile">
              <span className="stat-label">
                <Flame size={13} className="text-orange-400" />
                KEYSTROKES
              </span>
              <div className="stat-value">
                <span className="number text-slate-300">{currentIndex}</span>
                <span className="unit text-slate-500">/{targetText.length}</span>
              </div>
            </div>

            <div className="stat-divider hide-mobile" />

            <div className="stat-item hide-mobile">
              <span className="stat-label">
                <Zap size={13} className="text-purple-400" />
                ERRORS
              </span>
              <div className="stat-value">
                <span className={`number ${stats.errors > 0 ? "text-rose-400" : "text-slate-400"}`}>
                  {stats.errors}
                </span>
              </div>
            </div>
          </div>

          {/* Real-time WPM Sparkline chart */}
          <div className="sparkline-wrapper">
            {wpmTrend.length > 1 ? (
              <svg className="sparkline" viewBox={`0 0 ${wpmTrend.length * 20} 40`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wpmGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <polygon
                  fill="url(#wpmGradient)"
                  points={`0,40 ${wpmTrend.map((val, i) => {
                    const max = Math.max(100, ...wpmTrend);
                    const y = 40 - (val / max) * 32;
                    return `${i * 20},${y}`;
                  }).join(" ")} ${(wpmTrend.length - 1) * 20},40`}
                />
                {/* Polyline */}
                <polyline
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={wpmTrend.map((val, i) => {
                    const max = Math.max(100, ...wpmTrend);
                    const y = 40 - (val / max) * 32;
                    return `${i * 20},${y}`;
                  }).join(" ")}
                />
              </svg>
            ) : (
              <div className="sparkline-placeholder">
                <span>⚡ Live trend graph</span>
              </div>
            )}
          </div>
        </DashboardCard>

        {/* Live Typing Container */}
        <TypingAreaWrapper>
          <div 
            ref={typingContainerRef}
            className="typing-display"
            tabIndex={0}
          >
            {targetText.split("").map((char, index) => {
              let charState = "upcoming";
              if (index < currentIndex) {
                const record = history[index];
                charState = (record && record.isCorrect) ? "correct" : "incorrect";
              } else if (index === currentIndex) {
                charState = "cursor";
              }

              return (
                <span 
                  key={index}
                  className={`char-node ${charState} ${char === " " ? "space-char" : ""}`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </div>

          {/* Quick shortcuts hint */}
          <div className="shortcuts-bar">
            <span><kbd>Tab</kbd> or <kbd>Esc</kbd> Reset</span>
            <span><kbd>Space</kbd> / <kbd>Enter</kbd> Next Lesson</span>
            <button 
              className="toggle-kb-btn" 
              onClick={() => setShowKeyboard((prev) => !prev)}
            >
              {showKeyboard ? "Hide Visual Keyboard" : "Show Visual Keyboard"}
            </button>
          </div>
        </TypingAreaWrapper>

        {/* Interactive Virtual Keyboard */}
        {showKeyboard && (
          <VirtualKeyboardWrapper>
            {KEYBOARD_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="kb-row">
                {row.map((key, keyIndex) => {
                  const keyLower = key.toLowerCase();
                  const isExpected = nextExpectedKey === key || (nextExpectedKey === "Space" && key === "Space");
                  const isPhysicalPressed = activeKeyPressed === keyLower || (activeKeyPressed === " " && key === "Space");

                  // Key mastery state based on matrix
                  let masteryClass = "";
                  if (ALPHABET.includes(keyLower) && charMatrix[keyLower]) {
                    const st = charMatrix[keyLower];
                    const total = st.hits + st.misses;
                    if (total >= 5) {
                      const acc = (st.hits / total) * 100;
                      if (acc >= 92) masteryClass = "mastered";
                      else if (acc < 80) masteryClass = "struggling";
                    }
                  }

                  let widthClass = "key-normal";
                  if (key === "Space") widthClass = "key-space";
                  else if (key === "Backspace" || key === "Shift") widthClass = "key-wide";
                  else if (key === "Tab" || key === "Caps" || key === "Enter") widthClass = "key-medium";

                  return (
                    <div 
                      key={`${rowIndex}-${keyIndex}-${key}`} 
                      className={`kb-key ${widthClass} ${isExpected ? "expected" : ""} ${isPhysicalPressed ? "pressed" : ""} ${masteryClass}`}
                    >
                      <span>{key}</span>
                      {isExpected && <div className="finger-guide-dot" />}
                    </div>
                  );
                })}
              </div>
            ))}
          </VirtualKeyboardWrapper>
        )}
      </Workspace>

      {/* Completion Modal */}
      {status === "finished" && (
        <ModalOverlay>
          <ResultsModalCard>
            <div className="modal-header">
              <CheckCircle2 size={42} className="text-emerald-400" />
              <h2>LESSON COMPLETED!</h2>
              <div className="rank-badge">{stats.rank}</div>
            </div>

            <div className="modal-stats-grid">
              <div className="modal-stat-box">
                <span className="label">Typing Speed</span>
                <span className="val highlight">{stats.wpm} <small>WPM</small></span>
              </div>
              <div className="modal-stat-box">
                <span className="label">Accuracy</span>
                <span className={`val ${stats.accuracy >= 90 ? "good" : "warn"}`}>
                  {stats.accuracy}%
                </span>
              </div>
              <div className="modal-stat-box">
                <span className="label">Raw Speed</span>
                <span className="val">{stats.rawWpm} <small>WPM</small></span>
              </div>
              <div className="modal-stat-box">
                <span className="label">Time Taken</span>
                <span className="val">{stats.durationSec} <small>sec</small></span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="primary-btn" onClick={loadNewLesson}>
                <RefreshCw size={18} />
                <span>Next Lesson (Press Space/Enter)</span>
              </button>
              <button className="secondary-btn" onClick={() => setShowStatsModal(true)}>
                <BarChart2 size={18} />
                <span>View Character Accuracy Matrix</span>
              </button>
            </div>
          </ResultsModalCard>
        </ModalOverlay>
      )}

      {/* Custom Text Input Modal */}
      {showCustomModal && (
        <ModalOverlay onClick={() => setShowCustomModal(false)}>
          <CustomModalCard onClick={(e) => e.stopPropagation()}>
            <div className="modal-title-row">
              <h3>✍️ Custom Practice Text</h3>
              <button className="close-btn" onClick={() => setShowCustomModal(false)}>✕</button>
            </div>
            <p className="modal-sub">Paste any custom paragraph, documentation, or code block to practice typing.</p>
            <textarea
              value={customTextInput}
              onChange={(e) => setCustomTextInput(e.target.value)}
              placeholder="Paste custom text here..."
              rows={6}
            />
            <div className="custom-modal-actions">
              <button 
                className="secondary-btn" 
                onClick={() => {
                  setCustomTextInput("");
                  setShowCustomModal(false);
                }}
              >
                Cancel
              </button>
              <button 
                className="primary-btn" 
                onClick={() => {
                  setShowCustomModal(false);
                  loadNewLesson();
                }}
              >
                Start Custom Lesson
              </button>
            </div>
          </CustomModalCard>
        </ModalOverlay>
      )}

      {/* Character Performance Matrix Modal */}
      {showStatsModal && (
        <ModalOverlay onClick={() => setShowStatsModal(false)}>
          <StatsModalCard onClick={(e) => e.stopPropagation()}>
            <div className="modal-title-row">
              <div className="flex items-center gap-2">
                <BarChart2 size={22} className="text-blue-400" />
                <h3>Alphabet Mastery Matrix</h3>
              </div>
              <button className="close-btn" onClick={() => setShowStatsModal(false)}>✕</button>
            </div>
            <p className="modal-sub">
              Keybr adaptive engine tracks your hit accuracy and average latency (ms) for every key to build personalized lessons.
            </p>

            <div className="matrix-grid">
              {ALPHABET.split("").map((char) => {
                const data = charMatrix[char] || { hits: 0, misses: 0, totalTime: 0 };
                const total = data.hits + data.misses;
                const accuracy = total > 0 ? Math.round((data.hits / total) * 100) : null;
                const avgMs = data.hits > 0 ? Math.round(data.totalTime / data.hits) : null;

                let statusBadge = "untested";
                if (total > 0) {
                  if (accuracy !== null && accuracy >= 92) statusBadge = "mastered";
                  else if (accuracy !== null && accuracy >= 80) statusBadge = "good";
                  else statusBadge = "struggling";
                }

                return (
                  <div key={char} className={`matrix-cell ${statusBadge}`}>
                    <span className="char-key">{char.toUpperCase()}</span>
                    <div className="cell-details">
                      {accuracy !== null ? (
                        <>
                          <span className="acc">{accuracy}%</span>
                          <span className="latency">{avgMs}ms</span>
                        </>
                      ) : (
                        <span className="untested-text">Untested</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="matrix-legend">
              <span className="legend-item"><span className="dot dot-mastered" /> Mastered (92%+)</span>
              <span className="legend-item"><span className="dot dot-good" /> Good (80-91%)</span>
              <span className="legend-item"><span className="dot dot-struggling" /> Needs Practice (&lt;80%)</span>
              <span className="legend-item"><span className="dot dot-untested" /> Untested</span>
            </div>

            <div className="modal-footer">
              <button className="primary-btn" onClick={() => setShowStatsModal(false)}>
                Back to Typing
              </button>
            </div>
          </StatsModalCard>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}

// --- STYLED COMPONENTS ---

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #090d16;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Courier New', Monaco, monospace;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #000000;
  border-bottom: 3px solid #ffffff;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 14px;
    gap: 10px;
  }

  .title-area {
    display: flex;
    align-items: center;
    gap: 16px;

    .back-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #000000;
      background: #ffffff;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 900;
      border: 2px solid #000000;
      box-shadow: 3px 3px 0 #38bdf8;
      transition: all 0.15s ease;
      text-decoration: none;

      &:hover {
        translate: -2px -2px;
        box-shadow: 5px 5px 0 #38bdf8;
      }
    }

    .divider-vert {
      width: 2px;
      height: 24px;
      background: #334155;
    }

    .branding {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-badge {
        width: 34px;
        height: 34px;
        background: #38bdf8;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        box-shadow: 2px 2px 0 #000000;
      }

      .title-text {
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 17px;
          font-weight: 900;
          letter-spacing: 1px;
          margin: 0;
          color: #ffffff;
        }

        .subtitle {
          font-size: 10px;
          color: #94a3b8;
          font-weight: 600;
        }
      }
    }
  }

  .actions-area {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    .mode-selector {
      display: flex;
      background: #1e293b;
      border: 2px solid #475569;
      border-radius: 4px;
      overflow: hidden;

      .mode-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        background: transparent;
        border: none;
        color: #94a3b8;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        font-family: inherit;
        transition: all 0.15s ease;

        &:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        &.active {
          background: #38bdf8;
          color: #000000;
        }
      }
    }

    .count-selector {
      display: flex;
      background: #1e293b;
      border: 2px solid #475569;
      border-radius: 4px;

      .count-btn {
        background: transparent;
        border: none;
        color: #94a3b8;
        padding: 6px 10px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        font-family: inherit;

        &.active {
          background: #f59e0b;
          color: #000000;
        }
      }
    }

    .tool-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #1e293b;
      color: #cbd5e1;
      border: 2px solid #475569;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s ease;

      &:hover {
        background: #334155;
        color: #ffffff;
      }

      &.active {
        border-color: #38bdf8;
        color: #38bdf8;
      }
    }

    .action-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 900;
      padding: 6px 14px;
      border: 2px solid #ffffff;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.15s ease;

      &.restart-btn {
        background: #ef4444;
        color: #ffffff;
        box-shadow: 3px 3px 0 #000000;

        &:hover {
          translate: -2px -2px;
          box-shadow: 5px 5px 0 #000000;
          background: #dc2626;
        }
      }
    }
  }

  @media (max-width: 640px) {
    .hide-mobile {
      display: none;
    }
  }
`;

const Workspace = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 16px 12px;
    gap: 16px;
  }
`;

const DashboardCard = styled.div`
  width: 100%;
  max-width: 840px;
  background: #111827;
  border: 3px solid #334155;
  box-shadow: 6px 6px 0 #000000;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  .stat-group {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    .stat-item {
      display: flex;
      flex-direction: column;

      .stat-label {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #64748b;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 4px;
      }

      .stat-value {
        font-family: inherit;

        .number {
          font-size: 28px;
          font-weight: 900;
          color: #f8fafc;
          letter-spacing: -0.5px;
        }

        .unit {
          font-size: 13px;
          color: #64748b;
          margin-left: 4px;
          font-weight: 700;
        }

        &.good .number {
          color: #34d399;
        }

        &.warning .number {
          color: #fbbf24;
        }
      }
    }

    .stat-divider {
      width: 2px;
      height: 36px;
      background: #1e293b;
    }
  }

  .sparkline-wrapper {
    width: 160px;
    height: 44px;
    background: #090d16;
    border: 1px solid #1e293b;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .sparkline {
      width: 100%;
      height: 100%;
    }

    .sparkline-placeholder {
      font-size: 10px;
      color: #475569;
      font-weight: 700;
    }
  }
`;

const TypingAreaWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  background: #0c1220;
  border: 3px solid #38bdf8;
  box-shadow: 8px 8px 0 #000000;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 24px 18px;
  }

  .typing-display {
    font-size: 28px;
    line-height: 1.7;
    letter-spacing: 1px;
    word-break: break-word;
    user-select: none;
    outline: none;
    min-height: 140px;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 1.6;
    }

    .char-node {
      position: relative;
      transition: all 0.05s ease;

      &.upcoming {
        color: #475569;
      }

      &.correct {
        color: #f1f5f9;
      }

      &.incorrect {
        color: #fda4af;
        background: rgba(244, 63, 94, 0.25);
        border-bottom: 3px solid #f43f5e;
      }

      &.cursor {
        color: #ffffff;
        background: #0284c7;
        box-shadow: 0 0 12px #38bdf8;
        border-radius: 2px;
        animation: pulseCursor 1.2s infinite ease-in-out;
      }

      &.space-char {
        display: inline-block;
        min-width: 12px;
      }
    }
  }

  @keyframes pulseCursor {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  .shortcuts-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #1e293b;
    padding-top: 16px;
    font-size: 12px;
    color: #64748b;
    flex-wrap: wrap;
    gap: 10px;

    kbd {
      background: #1e293b;
      color: #94a3b8;
      border: 1px solid #334155;
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 11px;
      font-family: inherit;
    }

    .toggle-kb-btn {
      background: transparent;
      border: none;
      color: #38bdf8;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const VirtualKeyboardWrapper = styled.div`
  width: 100%;
  max-width: 840px;
  background: #111827;
  border: 3px solid #1f2937;
  box-shadow: 6px 6px 0 #000000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  user-select: none;

  @media (max-width: 768px) {
    display: none; /* Hide on small screens to avoid cramping */
  }

  .kb-row {
    display: flex;
    gap: 6px;
    justify-content: center;
  }

  .kb-key {
    background: #1e293b;
    color: #94a3b8;
    border: 1px solid #334155;
    border-radius: 4px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    position: relative;
    box-shadow: 0 2px 0 #0f172a;
    transition: all 0.08s ease;

    &.key-normal {
      width: 40px;
    }

    &.key-medium {
      width: 60px;
      font-size: 11px;
    }

    &.key-wide {
      width: 85px;
      font-size: 11px;
    }

    &.key-space {
      width: 280px;
    }

    &.expected {
      background: #0284c7;
      color: #ffffff;
      border-color: #38bdf8;
      box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
      transform: translateY(-2px);
    }

    &.pressed {
      background: #f59e0b;
      color: #000000;
      transform: translateY(2px);
      box-shadow: 0 0 0 #000000;
    }

    &.mastered {
      border-bottom: 3px solid #10b981;
    }

    &.struggling {
      border-bottom: 3px solid #f43f5e;
    }

    .finger-guide-dot {
      position: absolute;
      bottom: 4px;
      width: 4px;
      height: 4px;
      background: #ffffff;
      border-radius: 50%;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
`;

const ResultsModalCard = styled.div`
  background: #0f172a;
  border: 4px solid #ffffff;
  box-shadow: 12px 12px 0 #38bdf8;
  padding: 36px;
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: modalPop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @keyframes modalPop {
    from {
      opacity: 0;
      transform: scale(0.92) translateY(20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;

    h2 {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: 1px;
      margin: 0;
    }

    .rank-badge {
      background: #f59e0b;
      color: #000000;
      font-weight: 900;
      font-size: 13px;
      padding: 4px 12px;
      border: 2px solid #000000;
      box-shadow: 2px 2px 0 #000000;
    }
  }

  .modal-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    .modal-stat-box {
      background: #1e293b;
      border: 2px solid #334155;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .label {
        font-size: 11px;
        color: #94a3b8;
        font-weight: 700;
        text-transform: uppercase;
      }

      .val {
        font-size: 26px;
        font-weight: 900;
        color: #f8fafc;

        small {
          font-size: 13px;
          color: #64748b;
        }

        &.highlight {
          color: #38bdf8;
        }

        &.good {
          color: #34d399;
        }

        &.warn {
          color: #fbbf24;
        }
      }
    }
  }

  .modal-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .primary-btn {
      background: #38bdf8;
      color: #000000;
      border: 3px solid #ffffff;
      padding: 14px;
      font-size: 15px;
      font-weight: 900;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 4px 4px 0 #000000;
      transition: all 0.15s ease;

      &:hover {
        background: #7dd3fc;
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000000;
      }
    }

    .secondary-btn {
      background: #1e293b;
      color: #cbd5e1;
      border: 2px solid #475569;
      padding: 10px;
      font-size: 13px;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      &:hover {
        background: #334155;
        color: #ffffff;
      }
    }
  }
`;

const CustomModalCard = styled.div`
  background: #0f172a;
  border: 4px solid #ffffff;
  box-shadow: 10px 10px 0 #38bdf8;
  padding: 28px;
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .modal-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin: 0;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 18px;
      cursor: pointer;
      font-weight: 900;

      &:hover {
        color: #ffffff;
      }
    }
  }

  .modal-sub {
    font-size: 13px;
    color: #94a3b8;
    margin: 0;
  }

  textarea {
    background: #020617;
    border: 2px solid #334155;
    color: #f8fafc;
    padding: 12px;
    font-family: inherit;
    font-size: 14px;
    resize: vertical;
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: #38bdf8;
    }
  }

  .custom-modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .secondary-btn {
      background: #1e293b;
      color: #94a3b8;
      border: 2px solid #475569;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      font-family: inherit;
    }

    .primary-btn {
      background: #38bdf8;
      color: #000000;
      border: 2px solid #ffffff;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
      font-family: inherit;
    }
  }
`;

const StatsModalCard = styled.div`
  background: #0f172a;
  border: 4px solid #ffffff;
  box-shadow: 10px 10px 0 #38bdf8;
  padding: 28px;
  max-width: 680px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .modal-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin: 0;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-size: 18px;
      cursor: pointer;
      font-weight: 900;

      &:hover {
        color: #ffffff;
      }
    }
  }

  .modal-sub {
    font-size: 12px;
    color: #94a3b8;
    margin: 0;
    line-height: 1.5;
  }

  .matrix-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 8px;

    .matrix-cell {
      background: #1e293b;
      border: 2px solid #334155;
      padding: 8px 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      border-radius: 4px;

      .char-key {
        font-size: 16px;
        font-weight: 900;
      }

      .cell-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 10px;

        .acc {
          font-weight: 700;
        }

        .latency {
          color: #64748b;
        }

        .untested-text {
          color: #475569;
          font-size: 9px;
        }
      }

      &.mastered {
        border-color: #10b981;
        background: rgba(16, 185, 129, 0.1);
        .char-key, .acc { color: #34d399; }
      }

      &.good {
        border-color: #38bdf8;
        background: rgba(56, 189, 248, 0.1);
        .char-key, .acc { color: #38bdf8; }
      }

      &.struggling {
        border-color: #f43f5e;
        background: rgba(244, 63, 94, 0.15);
        .char-key, .acc { color: #f43f5e; }
      }

      &.untested {
        opacity: 0.6;
      }
    }
  }

  .matrix-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 11px;
    color: #94a3b8;
    padding: 10px;
    background: #020617;
    border-radius: 4px;

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;

        &.dot-mastered { background: #10b981; }
        &.dot-good { background: #38bdf8; }
        &.dot-struggling { background: #f43f5e; }
        &.dot-untested { background: #475569; }
      }
    }
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;

    .primary-btn {
      background: #38bdf8;
      color: #000000;
      border: 2px solid #ffffff;
      padding: 8px 20px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
      font-family: inherit;
    }
  }
`;
