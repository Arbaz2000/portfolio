"use client";

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Link from "next/link";

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const resources = {
    reactNative: {
      title: "REACT NATIVE STARTER",
      subtitle: "Minimal. Modern. Powerful.",
      code: `git clone https://github.com/Arbaz2000/React_native_setup
npm install && npm start
npm run android # or npm run ios`,
      description: "Navigation • Splash Screen • Placeholder Screens",
      instruction: "Edit `App.tsx` to begin.",
      links: [
        { name: "Arbaz2000", url: "https://github.com/Arbaz2000" },
        { name: "ArbazIdea2reality", url: "https://github.com/ArbazIdea2reality" }
      ]
    },
    categories: [
      {
        title: "🧩 Front-End Development",
        items: [
          { name: "React Bits", url: "https://www.reactbits.dev/", description: "Tips and patterns for React developers." },
          { name: "react-beautiful-dnd", url: "https://www.npmjs.com/package/react-beautiful-dnd", description: "Beautiful drag-and-drop for lists with React." }
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
        title: "🛠️ Productivity & Tools",
        items: [
          { name: "ILovePDF", url: "https://www.ilovepdf.com/", description: "Tools to work with PDF files." },
          { name: "Tooooools", url: "https://www.tooooools.app/", description: "Curated collection of handy tools for creators and developers." }
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
        
        {/* React Native Starter Section - Hidden when searching or filtering */}
        {!hasActiveFilters && (
          <ReactNativeSection>
            <div className="starter-card">
              <div className="starter-header">
                <h2>{resources.reactNative.title}</h2>
                <p className="subtitle">{resources.reactNative.subtitle}</p>
              </div>
              
              <div className="code-block">
                <div className="code-header">
                  <span className="language">bash</span>
                  <div className="copy-buttons">
                    <button className="copy-btn clone-btn" onClick={() => navigator.clipboard.writeText("git clone https://github.com/Arbaz2000/React_native_setup")}>
                      Copy Clone
                    </button>
                    <button className="copy-btn" onClick={() => navigator.clipboard.writeText(resources.reactNative.code)}>
                      Copy All
                    </button>
                  </div>
                </div>
                <pre className="code-content">{resources.reactNative.code}</pre>
              </div>
              
              <div className="starter-info">
                <p className="core-info">{resources.reactNative.description}</p>
                <p className="instruction">{resources.reactNative.instruction}</p>
              </div>
              
              <div className="starter-links">
                {resources.reactNative.links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </ReactNativeSection>
        )}

        {/* Resources Categories - Bento Box Layout */}
        {filteredCategories.length > 0 ? (
          <BentoGrid>
            {filteredCategories.map((category, categoryIndex) => (
              <BentoCard 
                key={categoryIndex} 
                className={`bento-card ${categoryIndex === 5 ? 'large' : categoryIndex < 2 ? 'medium' : 'small'}`}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className={`category-items ${categoryIndex === 5 ? 'github-grid' : ''}`}>
                  {category.items.map((item, itemIndex) => (
                    <ResourceItem key={itemIndex}>
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
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
              <button onClick={clearFilters} className="reset-btn">
                Reset Filters
              </button>
            </div>
          </NoResultsSection>
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

const ReactNativeSection = styled.div`
  margin-bottom: 50px;

  .starter-card {
    background: #ff6b6b;
    border: 4px solid #ffffff;
    box-shadow: 12px 12px 0 #000000;
    border-radius: 0;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      translate: -6px -6px;
      box-shadow: 18px 18px 0 #000000;
    }

    @media (max-width: 768px) {
      box-shadow: 6px 6px 0 #000000;
      
      &:hover {
        translate: -3px -3px;
        box-shadow: 9px 9px 0 #000000;
      }
    }
  }

  .starter-header {
    background: #ffffff;
    padding: 20px;
    border-bottom: 4px solid #000000;

    h2 {
      font-family: 'Courier New', monospace;
      font-size: 36px;
      font-weight: 900;
      color: #000000;
      margin: 0 0 10px 0;
      letter-spacing: 1px;

      @media (max-width: 768px) {
        font-size: 28px;
      }
    }

    .subtitle {
      font-size: 20px;
      font-weight: 600;
      color: #666666;
      margin: 0;
      font-style: italic;
      font-family: 'Courier New', monospace;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .code-block {
    background: #000000;
    margin: 20px;
    border-radius: 0;
    overflow: hidden;
    border: 3px solid #ffffff;

    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      background: #333333;
      border-bottom: 2px solid #ffffff;

      .language {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
        font-family: 'Courier New', monospace;
      }

      .copy-buttons {
        display: flex;
        gap: 8px;
      }

      .copy-btn {
        background: #4ecdc4;
        color: #000000;
        border: 2px solid #000000;
        padding: 5px 12px;
        border-radius: 0;
        font-weight: 700;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Courier New', monospace;

        &:hover {
          background: #45b7d1;
          translate: -1px -1px;
        }

        &:active {
          translate: 0 0;
        }

        &.clone-btn {
          background: #ff6b6b;
          
          &:hover {
            background: #ff5252;
          }
        }
      }
    }

    .code-content {
      padding: 20px;
      color: #4ecdc4;
      font-family: 'Courier New', monospace;
      font-size: 16px;
      line-height: 1.5;
      margin: 0;
      white-space: pre-wrap;

      @media (max-width: 768px) {
        font-size: 14px;
        padding: 15px;
      }
    }
  }

  .starter-info {
    padding: 20px;
    text-align: center;

    .core-info {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 15px 0;
      font-family: 'Courier New', monospace;
      text-shadow: 2px 2px 0 #000000;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    .instruction {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      margin: 0;
      font-family: 'Courier New', monospace;
      text-shadow: 1px 1px 0 #000000;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .starter-links {
    padding: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    border-top: 3px solid #ffffff;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .github-link {
      padding: 10px 20px;
      background: #ffffff;
      color: #000000;
      text-decoration: none;
      border: 3px solid #000000;
      box-shadow: 4px 4px 0 #000000;
      font-weight: 700;
      font-size: 16px;
      transition: all 0.3s ease;
      border-radius: 0;
      font-family: 'Courier New', monospace;

      &:hover {
        translate: -2px -2px;
        box-shadow: 6px 6px 0 #000000;
        background: #f0f0f0;
      }

      &:active {
        translate: 0 0;
        box-shadow: 2px 2px 0 #000000;
      }
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

export default ResourcesPage; 