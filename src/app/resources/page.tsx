"use client";

import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";

const resources = {
  categories: [
      {
        title: "🛠️ Interactive Tools",
        items: [
          { 
            name: "HTML/CSS/JS Live Code Playground", 
            url: "/resources/code-editor", 
            description: "Interactive browser editor to learn & test simple HTML, CSS, and JS with instant live preview.",
            isInternal: true
          },
          { 
            name: "Keybr Pro — Touch Typing & Speed Trainer", 
            url: "/resources/keybr", 
            description: "Smart touch typing practice with adaptive letter weighting, real-time WPM, accuracy matrix, and virtual keyboard visualizer.",
            isInternal: true
          },
          { 
            name: "JS Runner — DSA Playground", 
            url: "/resources/js-runner", 
            description: "JavaScript sandbox for Data Structures & Algorithms practice with 10 built-in DSA templates, execution timer, and console output.",
            isInternal: true
          },
          { 
            name: "React Native Quick Start & Boilerplate", 
            url: "/resources/react-native-starter", 
            description: "Production-ready bare React Native CLI starter with TypeScript, Zustand, RTK Query, and one-click copyable git commands.",
            isInternal: true
          },
          { name: "ILovePDF", url: "https://www.ilovepdf.com/", description: "Tools to work with PDF files." },
          { name: "Tooooools", url: "https://www.tooooools.app/", description: "Curated collection of handy tools for creators and developers." }
        ]
      },
      {
        title: "🧩 Front-End Development",
        items: [
          { name: "React Bits", url: "https://www.reactbits.dev/", description: "Tips and patterns for React developers." },
          { name: "react-beautiful-dnd", url: "https://www.npmjs.com/package/react-beautiful-dnd", description: "Beautiful drag-and-drop for lists with React." },
          { name: "termcn.dev", url: "https://www.termcn.dev/", description: "Terminal based components for React developers." },
          { name: "gluestack.io", url: "https://gluestack.io/", description: "UI library for building performant and accessible web applications." }
        ]
      },
      {
        title: "🎨 UI/UX Design & Components",
        items: [
          { name: "Uiverse", url: "https://uiverse.io/elements", description: "Beautiful community-driven UI components." },
          { name: "unDraw", url: "https://undraw.co/", description: "Open-source illustrations for any idea." },
          { name: "PatternPad", url: "https://patternpad.com/", description: "Generate and customize seamless patterns." }
        ]
      },
      {
        title: "📊 Data Visualization",
        items: [
          { name: "Rosen Charts", url: "https://rosencharts.com/", description: "Simple and customizable charting library." },
          { name: "Graphy", url: "https://graphy.app/", description: "Create visual charts and graphs easily." },
          { name: "Pictographic", url: "https://www.pictographic.io/", description: "Infographic-style data presentation." }
        ]
      },
      {
        title: "✨ Animation & Interaction",
        items: [
          { name: "Anime.js", url: "https://animejs.com/", description: "A lightweight JavaScript animation library." }
        ]
      },
      {
        title: "🐙 GitHub Resources",
        items: [
          { name: "Awesome Lists", url: "https://github.com/sindresorhus/awesome", description: "😎 Awesome lists about all kinds of interesting topics - 379k+ stars!" },
          { name: "Best Websites for Programmers", url: "https://github.com/sdmg15/Best-websites-a-programmer-should-visit", description: "Essential websites every programmer should know about." },
          { name: "Awesome Open Source Alternatives", url: "https://github.com/diegoleme/awesome-open-source-alternatives", description: "Find open-source alternatives to popular software." },
          { name: "Free Programming Books", url: "https://github.com/EbookFoundation/free-programming-books", description: "📚 Freely available programming books for developers." },
          { name: "Build Your Own X", url: "https://github.com/codecrafters-io/build-your-own-x", description: "Master programming by recreating your favorite technologies from scratch." },
          { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", description: "Learn how to design large-scale systems. Prep for the system design interview." },
          { name: "ML From Scratch", url: "https://github.com/eriklindernoren/ML-From-Scratch", description: "Machine Learning From Scratch. Bare bones NumPy implementations of ML models and algorithms." },
          { name: "Made With ML", url: "https://github.com/GokuMohandas/Made-With-ML", description: "Learn how to responsibly deliver value with ML." },
          { name: "LLMs from Scratch", url: "https://github.com/rasbt/LLMs-from-scratch", description: "Implementing LLMs from scratch with PyTorch." },
          { name: "The Algorithms", url: "https://github.com/thealgorithms", description: "Open Source resource for learning Data Structures & Algorithms in any Programming Language." },
          { name: "Public APIs", url: "https://github.com/public-apis/public-apis", description: "A collective list of free APIs for use in software and web development." },
          { name: "Free for Developers", url: "https://github.com/ripienaar/free-for-dev", description: "A list of SaaS, PaaS and IaaS offerings that have free tiers for devops and infradev." }
        ]
      }
    ]
  };

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showEasterEggModal, setShowEasterEggModal] = useState(false);

  // Easter egg: detect "aqsa khan" search
  const isEasterEggTriggered = searchQuery.trim().toLowerCase() === "aqsa khan";
  const showEasterEgg = showEasterEggModal || isEasterEggTriggered;

  const handleEasterEggClose = useCallback(() => {
    setShowEasterEggModal(false);
    setSearchQuery("");
  }, []);

  const handleEasterEggOpen = useCallback(() => {
    window.open("https://github.com/Arbaz2000/obsidian-vault", "_blank");
    setShowEasterEggModal(false);
    setSearchQuery("");
  }, []);

  // Filter categories based on search query and selected categories
  const filteredCategories = useMemo(() => {
    return resources.categories.filter(category => {
      // If no filters are applied, show all categories
      if (!searchQuery && selectedCategories.length === 0) {
        return true;
      }

      // Filter by selected categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(category.title)) {
        return false;
      }

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const categoryMatches = category.title.toLowerCase().includes(query);
        const itemsMatch = category.items.some(item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
        return categoryMatches || itemsMatch;
      }

      return true;
    }).map(category => ({
      ...category,
      items: category.items.filter(item => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query);
      })
    })).filter(category => category.items.length > 0);
  }, [searchQuery, selectedCategories]);

  const handleCategoryToggle = (categoryTitle: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryTitle)
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  const hasActiveFilters = searchQuery || selectedCategories.length > 0;

  return (
    <PageWrapper>
      <div className="container">
        <div className="header">
          <Link href="/" className="back-button">
            ← Back to Portfolio
          </Link>
          <h1 className="page-title">🌐 Curated Web Resources</h1>
        </div>

        {/* Search and Filter Section */}
        <SearchFilterSection>
          <div className="search-container">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            {hasActiveFilters && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            )}
          </div>

          <div className="category-filters">
            <h3 className="filters-title">Filter by Category:</h3>
            <div className="filter-buttons">
              {resources.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryToggle(category.title)}
                  className={`filter-btn ${selectedCategories.includes(category.title) ? 'active' : ''}`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <div className="results-info">
              <span className="results-count">
                Showing {filteredCategories.length} categories with {filteredCategories.reduce((total, cat) => total + cat.items.length, 0)} resources
              </span>
            </div>
          )}
        </SearchFilterSection>

        {/* Interactive Tools Section - Learn Simple CSS / JS / HTML & Keybr Touch Typing */}
        {!hasActiveFilters && (
          <ToolsSection>
            {/* Tool 1: Code Editor */}
            <div className="tools-card editor-card">
              <div className="tools-badge">⚡ LIVE PLAYGROUND</div>
              <div className="tools-body">
                <div className="tools-info">
                  <h2 className="tools-title">🛠️ Learn HTML, CSS & JavaScript</h2>
                  <p className="tools-desc">
                    Need a quick way to test and learn simple web code? Push the button below to open the dedicated interactive live code playground. Write HTML structure, apply CSS styling, and run JavaScript functions with real-time live preview!
                  </p>
                  <div className="tools-tags">
                    <span className="tag">💻 Live Preview</span>
                    <span className="tag">🎨 4+ Starter Presets</span>
                    <span className="tag">⚡ Real-time Execution</span>
                    <span className="tag">💾 Code Export</span>
                  </div>
                </div>
                <div className="tools-action">
                  <Link 
                    href="/resources/code-editor"
                    className="launch-btn"
                  >
                    <span>🚀 Launch Code Editor</span>
                    <small>Push button to open separate playground page</small>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tool 2: Keybr Touch Typing */}
            <div className="tools-card keybr-card">
              <div className="tools-badge keybr-badge">⌨️ NEW INTERACTIVE TUTOR</div>
              <div className="tools-body">
                <div className="tools-info">
                  <h2 className="tools-title">⌨️ Keybr Pro — Touch Typing & Speed Trainer</h2>
                  <p className="tools-desc">
                    Boost your typing speed and muscle memory with an adaptive Keybr algorithm. Features real-time WPM, accuracy analytics, developer code mode, mechanical switch sounds, and an interactive virtual keyboard visualizer!
                  </p>
                  <div className="tools-tags">
                    <span className="tag">🧠 Adaptive Key Weighting</span>
                    <span className="tag">📊 Live WPM & Sparklines</span>
                    <span className="tag">💻 Dev Code Snippets</span>
                    <span className="tag">🔊 Mechanical Sound FX</span>
                  </div>
                </div>
                <div className="tools-action">
                  <Link 
                    href="/resources/keybr"
                    className="launch-btn keybr-launch-btn"
                  >
                    <span>⚡ Launch Keybr Pro</span>
                    <small>Practice touch typing in interactive tutor</small>
                  </Link>
                </div>
              </div>
            </div>
            {/* Tool 3: JS Runner DSA Playground */}
            <div className="tools-card jsrunner-card">
              <div className="tools-badge jsrunner-badge">🧠 DSA SANDBOX</div>
              <div className="tools-body">
                <div className="tools-info">
                  <h2 className="tools-title">⚡ JS Runner — DSA Playground</h2>
                  <p className="tools-desc">
                    Practice Data Structures & Algorithms in a pure JavaScript sandbox. Comes with 10 built-in DSA templates — sorting, search, trees, graphs, dynamic programming & more — with execution timing and full console output capture.
                  </p>
                  <div className="tools-tags">
                    <span className="tag">🔢 10 DSA Templates</span>
                    <span className="tag">⏱️ Execution Timer</span>
                    <span className="tag">📟 Console Output</span>
                    <span className="tag">💾 Download .js</span>
                  </div>
                </div>
                <div className="tools-action">
                  <Link 
                    href="/resources/js-runner"
                    className="launch-btn jsrunner-launch-btn"
                  >
                    <span>🧠 Launch JS Runner</span>
                    <small>Open DSA playground in separate page</small>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tool 4: React Native Quick Start & Boilerplate */}
            <div className="tools-card rn-card">
              <div className="tools-badge rn-badge">📱 REACT NATIVE CLI STARTER</div>
              <div className="tools-body">
                <div className="tools-info">
                  <h2 className="tools-title">📱 React Native Quick Start &amp; Boilerplate</h2>
                  <p className="tools-desc">
                    Launch production-ready mobile apps with my battle-tested React Native CLI starter. Features strict TypeScript, Zustand + RTK Query dual-state architecture, React Navigation v7, Reanimated 3, and instant copyable setup scripts!
                  </p>
                  <div className="tools-tags">
                    <span className="tag">🚀 Bare CLI Workflow</span>
                    <span className="tag">🛡️ Strict TypeScript</span>
                    <span className="tag">⚡ Zustand + RTK Query</span>
                    <span className="tag">📋 Copyable Clone URL</span>
                  </div>
                </div>
                <div className="tools-action">
                  <Link 
                    href="/resources/react-native-starter"
                    className="launch-btn rn-launch-btn"
                  >
                    <span>📱 Open Quick Start</span>
                    <small>Push button to open dedicated starter guide</small>
                  </Link>
                </div>
              </div>
            </div>
          </ToolsSection>
        )}


        {/* Resources Categories - Bento Box Layout */}
        {filteredCategories.length > 0 ? (
          <BentoGrid>
            {filteredCategories.map((category, categoryIndex) => (
              <BentoCard
                key={categoryIndex}
                className={`bento-card ${category.title.includes('GitHub') ? 'large' : categoryIndex < 2 ? 'medium' : 'small'}`}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className={`category-items ${category.title.includes('GitHub') ? 'github-grid' : ''}`}>
                  {category.items.map((item, itemIndex) => (
                    <ResourceItem key={itemIndex}>
                      {'isInternal' in item && item.isInternal ? (
                        <Link
                          href={item.url}
                          className="resource-link"
                        >
                          <div className="resource-content">
                            <h4 className="resource-name">⚡ {item.name}</h4>
                            <p className="resource-description">{item.description}</p>
                          </div>
                          <div className="resource-arrow">🚀</div>
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-link"
                        >
                          <div className="resource-content">
                            <h4 className="resource-name">{item.name}</h4>
                            <p className="resource-description">{item.description}</p>
                          </div>
                          <div className="resource-arrow">→</div>
                        </a>
                      )}
                    </ResourceItem>
                  ))}
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        ) : (
          <NoResultsSection>
            <div className="no-results">
              <h2>🔍 No resources found</h2>
              <p>Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
              <button onClick={clearFilters} className="reset-btn">
                Reset Filters
              </button>
            </div>
          </NoResultsSection>
        )}

        {/* Easter Egg Modal */}
        {showEasterEgg && (
          <EasterEggOverlay onClick={handleEasterEggClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-badge">🔮 SECRET FOUND</div>
              <div className="modal-body">
                <h2 className="modal-title">✨ You found Aqsa Khan&apos;s Vault!</h2>
                <p className="modal-desc">
                  You&apos;ve unlocked a hidden portal to the Obsidian Knowledge Vault — a curated collection of notes, ideas, and resources.
                </p>
                <div className="modal-actions">
                  <button className="modal-btn primary" onClick={handleEasterEggOpen}>
                    🚀 Open Obsidian Vault
                  </button>
                  <button className="modal-btn secondary" onClick={handleEasterEggClose}>
                    ✕ Close
                  </button>
                </div>
              </div>
            </div>
          </EasterEggOverlay>
        )}
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #ffeaa7 100%);
  padding: 20px;
  font-family: 'Courier New', 'Monaco', 'Menlo', monospace;

  .container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }

  .back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 12px 24px;
    background: #ff6b6b;
    color: #ffffff;
    text-decoration: none;
    border: 3px solid #ffffff;
    box-shadow: 6px 6px 0 #000000;
    font-weight: 700;
    font-size: 16px;
    transition: all 0.3s ease;
    border-radius: 0;
    font-family: 'Courier New', monospace;

    &:hover {
      translate: -3px -3px;
      box-shadow: 9px 9px 0 #000000;
      background: #ff5252;
    }

    &:active {
      translate: 0 0;
      box-shadow: 3px 3px 0 #000000;
    }

    @media (max-width: 768px) {
      position: relative;
      top: auto;
      left: auto;
      margin-bottom: 20px;
      display: inline-block;
    }
  }

  .page-title {
    font-family: 'Courier New', monospace;
    font-size: 48px;
    font-weight: 900;
    color: #ffffff;
    margin: 0 0 20px 0;
    text-shadow: 4px 4px 0 #000000;
    letter-spacing: 2px;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  .page-subtitle {
    font-size: 20px;
    color: #ffffff;
    margin: 0;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    text-shadow: 2px 2px 0 #000000;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ToolsSection = styled.div`
  margin-bottom: 50px;

  .tools-card {
    background: linear-gradient(135deg, #ffd166 0%, #ffbe0b 100%);
    border: 4px solid #ffffff;
    box-shadow: 12px 12px 0 #000000;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      translate: -4px -4px;
      box-shadow: 16px 16px 0 #000000;
    }

    @media (max-width: 768px) {
      box-shadow: 6px 6px 0 #000000;
      
      &:hover {
        translate: -2px -2px;
        box-shadow: 8px 8px 0 #000000;
      }
    }
  }

  .tools-badge {
    background: #000000;
    color: #ffd166;
    padding: 8px 20px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1.5px;
    display: inline-block;
    border-bottom: 3px solid #ffffff;
    border-right: 3px solid #ffffff;
  }

  .tools-body {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: stretch;
      padding: 20px;
      gap: 20px;
    }
  }

  .tools-info {
    flex: 1;

    .tools-title {
      font-size: 32px;
      font-weight: 900;
      color: #000000;
      margin: 0 0 12px 0;
      letter-spacing: 1px;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }

    .tools-desc {
      font-size: 16px;
      line-height: 1.6;
      color: #1a1a1a;
      font-weight: 600;
      margin: 0 0 20px 0;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .tools-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .tag {
        background: #000000;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        padding: 5px 12px;
        border: 2px solid #ffffff;
        box-shadow: 2px 2px 0 #000000;
      }
    }
  }

  .tools-action {
    display: flex;
    justify-content: center;

    .launch-btn {
      background: #ff6b6b;
      color: #ffffff;
      border: 4px solid #000000;
      box-shadow: 8px 8px 0 #000000;
      padding: 18px 32px;
      font-family: 'Courier New', monospace;
      font-weight: 900;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      white-space: nowrap;

      span {
        font-size: 20px;
        letter-spacing: 1px;
      }

      small {
        font-size: 12px;
        font-weight: 600;
        opacity: 0.9;
      }

      &:hover {
        background: #ff5252;
        translate: -3px -3px;
        box-shadow: 11px 11px 0 #000000;
      }

      &:active {
        translate: 0 0;
        box-shadow: 4px 4px 0 #000000;
      }

      @media (max-width: 768px) {
        width: 100%;
        padding: 14px 20px;

        span {
          font-size: 17px;
        }
      }
    }

    .keybr-launch-btn {
      background: #06d6a0;
      color: #000000;

      &:hover {
        background: #05b386;
      }
    }
  }

  .keybr-card {
    background: linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%);
    margin-top: 30px;

    .keybr-badge {
      background: #000000;
      color: #38bdf8;
    }
  }

  .jsrunner-card {
    background: linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%);
    margin-top: 30px;

    .jsrunner-badge {
      background: #000000;
      color: #a78bfa;
    }
  }

  .jsrunner-launch-btn {
    background: #ffd166 !important;
    color: #000000 !important;

    &:hover {
      background: #ffbe0b !important;
    }
  }

  .rn-card {
    background: linear-gradient(135deg, #00f0ff 0%, #00b4d8 100%);
    margin-top: 30px;

    .rn-badge {
      background: #000000;
      color: #00f0ff;
    }
  }

  .rn-launch-btn {
    background: #FFE600 !important;
    color: #000000 !important;

    &:hover {
      background: #ffd000 !important;
    }
  }
`;


const SearchFilterSection = styled.div`
  margin-bottom: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 3px solid #ffffff;
  box-shadow: 8px 8px 0 #000000;
  border-radius: 0;
  padding: 25px;

  .search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  }

  .search-input-wrapper {
    position: relative;
    flex: 1;
    max-width: 500px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  .search-input {
    width: 100%;
    padding: 15px;
    padding-right: 50px;
    border: 3px solid #000000;
    border-radius: 0;
    background: #ffffff;
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    font-family: 'Courier New', monospace;
    box-shadow: 4px 4px 0 #000000;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      translate: -2px -2px;
      box-shadow: 6px 6px 0 #000000;
    }

    &::placeholder {
      color: #666666;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      padding: 12px;
      padding-right: 45px;
    }
  }

  .search-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #000000;
    pointer-events: none;

    @media (max-width: 768px) {
      right: 12px;
    }
  }

  .clear-filters-btn {
    padding: 12px 24px;
    background: #ff6b6b;
    color: #ffffff;
    border: 3px solid #000000;
    border-radius: 0;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
    box-shadow: 4px 4px 0 #000000;

    &:hover {
      background: #ff5252;
      translate: -2px -2px;
      box-shadow: 6px 6px 0 #000000;
    }

    &:active {
      translate: 0 0;
      box-shadow: 2px 2px 0 #000000;
    }
  }

  .category-filters {
    margin-bottom: 20px;

    .filters-title {
      font-family: 'Courier New', monospace;
      font-size: 24px;
      font-weight: 900;
      color: #ffffff;
      margin: 0 0 15px 0;
      text-shadow: 2px 2px 0 #000000;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      @media (max-width: 768px) {
        gap: 8px;
      }
    }

    .filter-btn {
      padding: 12px 20px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      color: #000000;
      border: 3px solid #000000;
      border-radius: 0;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Courier New', monospace;
      box-shadow: 4px 4px 0 #000000;
      white-space: nowrap;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.5s ease;
      }

      &.active {
        background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 50%, #ff4757 100%);
        color: #ffffff;
        translate: -3px -3px;
        box-shadow: 7px 7px 0 #000000;
        border-color: #ff4757;
        text-shadow: 1px 1px 0 #000000;

        &::before {
          left: 100%;
        }
      }

      &:hover {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000000;
        border-color: #495057;

        &::before {
          left: 100%;
        }
      }

      &:active {
        translate: 0 0;
        box-shadow: 2px 2px 0 #000000;
        background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
      }

      @media (max-width: 768px) {
        padding: 10px 16px;
        font-size: 12px;
      }
    }
  }

  .results-info {
    text-align: right;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    text-shadow: 2px 2px 0 #000000;
    font-family: 'Courier New', monospace;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
    }
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(200px, auto);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const BentoCard = styled.div`
  background: #4ecdc4;
  border: 4px solid #ffffff;
  box-shadow: 8px 8px 0 #000000;
  border-radius: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &.large {
    grid-column: 1 / -1;
    grid-row: span 2;
    background: #ff6b6b;
  }

  &.medium {
    grid-column: span 2;
    background: #45b7d1;
  }

  &.small {
    background: #96ceb4;
  }

  &:hover {
    translate: -4px -4px;
    box-shadow: 12px 12px 0 #000000;
  }

  @media (max-width: 768px) {
    box-shadow: 4px 4px 0 #000000;
    
    &:hover {
      translate: -2px -2px;
      box-shadow: 6px 6px 0 #000000;
    }
  }

  .category-title {
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: 900;
    color: #ffffff;
    margin: 0;
    padding: 15px;
    background: #000000;
    border-bottom: 3px solid #ffffff;
    text-shadow: 2px 2px 0 #000000;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 12px;
    }
  }

  .category-items {
    padding: 15px;
    height: calc(100% - 60px);
    overflow-y: auto;

    @media (max-width: 768px) {
      padding: 12px;
    }

    &.github-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 12px;
      align-content: start;
    }
  }
`;

const ResourceItem = styled.div`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  .github-grid & {
    margin-bottom: 0;
    height: 100%;
  }

  .resource-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #000000;
    border-radius: 0;
    text-decoration: none;
    color: #000000;
    transition: all 0.3s ease;
    box-shadow: 3px 3px 0 #000000;
    font-family: 'Courier New', monospace;
    height: 100%;

    &:hover {
      translate: -2px -2px;
      box-shadow: 5px 5px 0 #000000;
      background: #ffffff;
    }

    &:active {
      translate: 0 0;
      box-shadow: 1px 1px 0 #000000;
    }

    @media (max-width: 768px) {
      padding: 12px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .github-grid & {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }
  }

  .tool-button-link {
    width: 100%;
    cursor: pointer;
    text-align: left;
    outline: none;
    border: 2px solid #000000;
  }

  .resource-content {
    flex: 1;

    .resource-name {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 6px 0;
      color: #000000;
      font-family: 'Courier New', monospace;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .resource-description {
      font-size: 12px;
      font-weight: 600;
      margin: 0;
      color: #333333;
      line-height: 1.3;
      font-family: 'Courier New', monospace;

      @media (max-width: 768px) {
        font-size: 11px;
      }
    }
  }

  .resource-arrow {
    font-size: 20px;
    font-weight: 900;
    color: #000000;
    transition: transform 0.3s ease;
    font-family: 'Courier New', monospace;

    @media (max-width: 768px) {
      align-self: flex-end;
    }
  }

  .resource-link:hover .resource-arrow {
    transform: translateX(5px);
  }
`;

const NoResultsSection = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 4px solid #ffffff;
  box-shadow: 12px 12px 0 #000000;
  border-radius: 0;
  margin: 20px 0;

  .no-results {
    margin-bottom: 30px;

    h2 {
      font-family: 'Courier New', monospace;
      font-size: 48px;
      font-weight: 900;
      color: #ffffff;
      margin: 0 0 20px 0;
      text-shadow: 4px 4px 0 #000000;

      @media (max-width: 768px) {
        font-size: 36px;
      }
    }

    p {
      font-size: 20px;
      color: #ffffff;
      margin: 0;
      text-shadow: 2px 2px 0 #000000;
      font-weight: 600;
      font-family: 'Courier New', monospace;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .reset-btn {
    padding: 15px 30px;
    background: #ff6b6b;
    color: #ffffff;
    border: 3px solid #000000;
    border-radius: 0;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
    box-shadow: 6px 6px 0 #000000;

    &:hover {
      background: #ff5252;
      translate: -3px -3px;
      box-shadow: 9px 9px 0 #000000;
    }

    &:active {
      translate: 0 0;
      box-shadow: 3px 3px 0 #000000;
    }

    @media (max-width: 768px) {
      padding: 12px 24px;
      font-size: 16px;
    }
  }
`;

const EasterEggOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(6px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .modal {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: 4px solid #ffffff;
    box-shadow: 12px 12px 0 #000000;
    max-width: 500px;
    width: 90%;
    overflow: hidden;
    animation: slideUp 0.4s ease;
  }

  .modal-badge {
    background: #000000;
    color: #ffd166;
    padding: 10px 24px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 2px;
    font-family: 'Courier New', monospace;
    border-bottom: 3px solid #ffffff;
  }

  .modal-body {
    padding: 30px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .modal-title {
    font-family: 'Courier New', monospace;
    font-size: 28px;
    font-weight: 900;
    color: #ffffff;
    margin: 0 0 16px 0;
    text-shadow: 3px 3px 0 #000000;
    letter-spacing: 1px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .modal-desc {
    font-family: 'Courier New', monospace;
    font-size: 15px;
    font-weight: 600;
    color: #f0e6ff;
    line-height: 1.6;
    margin: 0 0 28px 0;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  .modal-actions {
    display: flex;
    gap: 12px;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  .modal-btn {
    flex: 1;
    padding: 14px 24px;
    font-family: 'Courier New', monospace;
    font-weight: 900;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 3px solid #000000;
    box-shadow: 5px 5px 0 #000000;

    &:hover {
      translate: -2px -2px;
      box-shadow: 7px 7px 0 #000000;
    }

    &:active {
      translate: 0 0;
      box-shadow: 2px 2px 0 #000000;
    }

    &.primary {
      background: #ffd166;
      color: #000000;

      &:hover {
        background: #ffbe0b;
      }
    }

    &.secondary {
      background: transparent;
      color: #ffffff;
      border-color: #ffffff;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 12px 20px;
    }
  }
`;

export default ResourcesPage; 