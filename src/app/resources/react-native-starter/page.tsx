"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Smartphone,
  Layers,
  Zap,
  ShieldCheck,
  FolderGit2,
  Cpu,
  Play,
  Home,
  Star,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const REPO_URL = "https://github.com/Arbaz2000/react-native-boilerplate.git";
const GITHUB_PAGE_URL = "https://github.com/Arbaz2000/react-native-boilerplate";

const COMMAND_TABS = [
  {
    id: "clone",
    label: "Git Clone",
    command: `git clone ${REPO_URL}`,
    description: "Clone the official React Native boilerplate repository directly to your machine",
  },
  {
    id: "oneliner",
    label: "Quick Setup (One-Liner)",
    command: `git clone ${REPO_URL} my-app && cd my-app && npm install`,
    description: "Clone into 'my-app' directory and install all dependencies in a single command",
  },
  {
    id: "start",
    label: "Start Metro",
    command: "npm start",
    description: "Launch the Metro bundler development server with instantaneous Fast Refresh",
  },
  {
    id: "android",
    label: "Run Android",
    command: "npm run android",
    description: "Compile and deploy the debug APK to connected Android device or emulator",
  },
  {
    id: "ios",
    label: "Run iOS",
    command: "cd ios && bundle exec pod install && cd .. && npm run ios",
    description: "Install CocoaPods native dependencies and boot up on iOS Simulator",
  },
];

const QUICK_STEPS = [
  {
    step: "01",
    title: "Clone Repository",
    desc: "Clone the boilerplate code directly to your local workspace.",
    code: `git clone ${REPO_URL} my-app`,
    badge: "Terminal",
    details: "Creates a clean directory with the entire boilerplate source and configs ready.",
  },
  {
    step: "02",
    title: "Install Dependencies",
    desc: "Install JavaScript packages and native iOS CocoaPods dependencies.",
    code: "cd my-app && npm install && cd ios && pod install && cd ..",
    badge: "Setup",
    details: "Uses npm/yarn for JS modules and CocoaPods bundler for iOS native modules.",
  },
  {
    step: "03",
    title: "Launch & Develop",
    desc: "Start the Metro server and launch your app on Android or iOS.",
    code: "npm run android  # or npm run ios",
    badge: "Ready",
    details: "Fast Refresh is active out of the box. Edit App.tsx and see changes live.",
  },
];

const ARCHITECTURE_FEATURES = [
  {
    icon: <Smartphone size={24} />,
    title: "React Native CLI (Bare)",
    desc: "Full native control without managed framework limits. Ready for custom native Android & iOS modules and enterprise SDKs.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "TypeScript Strict Mode",
    desc: "100% strictly typed navigators, route param lists, API client responses, and application state models.",
  },
  {
    icon: <Zap size={24} />,
    title: "Zustand + RTK Query",
    desc: "Zustand handles local UI state with zero boilerplate, while RTK Query manages server state, caching, and automated revalidation.",
  },
  {
    icon: <Layers size={24} />,
    title: "React Navigation v7",
    desc: "Modular AuthStack, onboarding carousel, version-update gate, and a configurable 5-tab bottom navigation layout.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Reanimated 3 & Gestures",
    desc: "Hardware-accelerated 60fps animations and smooth touch gestures configured and optimized out of the box.",
  },
  {
    icon: <FolderGit2 size={24} />,
    title: "Multi-Environment Ready",
    desc: "Built-in environments for Development, Staging, and Production managed cleanly with react-native-config.",
  },
];

const FOLDER_TREE = `rn-freelance-boilerplate/
├── android/                   # Native Android project files
├── ios/                       # Native iOS workspace & Podfile
├── .env.development           # Dev API endpoints & keys
├── .env.staging               # Staging configuration
├── .env.production            # Production endpoints
└── src/
    ├── app/                   # Root providers & composition
    │   ├── App.tsx
    │   ├── AppNavigator.tsx   # Auth/onboarding/version gates
    │   └── providers/         # React Query, Redux, Theme
    ├── navigation/            # Typed navigation stacks
    │   ├── RootNavigator.tsx
    │   ├── AuthStack.tsx
    │   └── BottomTabNavigator.tsx # 5-tab modular layout
    ├── screens/               # Screen components
    ├── features/              # Domain-driven feature slices
    │   ├── auth/              # Zustand slice + RTK Query API
    │   └── permissions/       # Centralized permission registry
    └── store/                 # Zustand stores + root reducer`;

export default function ReactNativeStarterPage() {
  const [activeTab, setActiveTab] = useState(COMMAND_TABS[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-999999px";
        textarea.style.top = "-999999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const currentTab = COMMAND_TABS.find((t) => t.id === activeTab) || COMMAND_TABS[0];

  return (
    <PageWrapper>
      {/* Top Navigation Bar */}
      <TopBar>
        <div className="nav-left">
          <Link href="/resources" className="nav-btn back-btn">
            <ArrowLeft size={16} />
            <span>Back to Resources</span>
          </Link>
          <Link href="/" className="nav-btn home-btn">
            <Home size={16} />
            <span>Portfolio</span>
          </Link>
        </div>

        <div className="nav-right">
          <a
            href={GITHUB_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn github-btn"
          >
            <Star size={16} />
            <span>Star on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </TopBar>

      <div className="content-container">
        {/* Hero Section */}
        <HeroSection>
          <div className="badge-row">
            <span className="neo-badge green">🚀 PRODUCTION STARTER</span>
            <span className="neo-badge yellow">REACT NATIVE CLI</span>
            <span className="neo-badge pink">TYPESCRIPT STRICT</span>
          </div>

          <h1 className="hero-title">
            React Native Quick Start &amp; Boilerplate
          </h1>

          <p className="hero-desc">
            A production-ready, modular React Native starter built with enterprise standards. 
            Equipped with <strong>strict TypeScript</strong>, dual-state management with 
            <strong> Zustand &amp; RTK Query</strong>, <strong>React Navigation v7</strong>, 
            and <strong>Reanimated 3</strong>.
          </p>
        </HeroSection>

        {/* Primary Copyable Git Repository Card */}
        <RepoCard>
          <div className="repo-header">
            <div className="repo-title-area">
              <span className="repo-pill">GIT REPOSITORY</span>
              <span className="repo-heading">One-Click Copy Repository URL</span>
            </div>
            <span className="repo-branch-badge">branch: main</span>
          </div>

          <div className="repo-body">
            <div className="repo-url-display">
              <span className="url-prefix">URL:</span>
              <code className="url-text">{REPO_URL}</code>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`copy-main-btn ${copiedKey === "repo-url" ? "copied" : ""}`}
              onClick={() => copyToClipboard(REPO_URL, "repo-url")}
              aria-label="Copy Git Repository URL"
            >
              {copiedKey === "repo-url" ? (
                <>
                  <Check size={18} />
                  <span>COPIED URL!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>COPY REPOSITORY URL</span>
                </>
              )}
            </motion.button>
          </div>
        </RepoCard>

        {/* Interactive Terminal Window */}
        <TerminalSection>
          <div className="terminal-card">
            {/* Terminal macOS style header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={14} />
                <span>bash — arbaz2000@react-native-boilerplate</span>
              </div>
              <div className="terminal-tag">ACTIVE</div>
            </div>

            {/* Command Tabs */}
            <div className="command-tabs">
              {COMMAND_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Terminal Command Output */}
            <div className="terminal-body">
              <div className="terminal-desc">
                <Play size={13} className="play-icon" />
                <span>{currentTab.description}</span>
              </div>

              <div className="code-box">
                <div className="code-left">
                  <span className="prompt">$</span>
                  <span className="cmd-text">{currentTab.command}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`terminal-copy-btn ${copiedKey === currentTab.id ? "copied" : ""}`}
                  onClick={() => copyToClipboard(currentTab.command, currentTab.id)}
                >
                  {copiedKey === currentTab.id ? (
                    <>
                      <Check size={15} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Command</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </TerminalSection>

        {/* 3-Step Quick Start Section */}
        <StepsSection>
          <div className="section-head">
            <span className="section-eyebrow">STEP BY STEP INSTRUCTIONS</span>
            <h2 className="section-heading">Quick Start Guide</h2>
          </div>

          <div className="steps-grid">
            {QUICK_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="step-top">
                  <span className="step-num">STEP {item.step}</span>
                  <span className="step-badge">{item.badge}</span>
                </div>

                <h3 className="step-name">{item.title}</h3>
                <p className="step-text">{item.desc}</p>

                <div className="step-code">
                  <code>{item.code}</code>
                  <button
                    className="step-icon-btn"
                    onClick={() => copyToClipboard(item.code, `step-${item.step}`)}
                    title="Copy command"
                  >
                    {copiedKey === `step-${item.step}` ? (
                      <Check size={15} className="text-green-500" />
                    ) : (
                      <Copy size={15} />
                    )}
                  </button>
                </div>

                <p className="step-details">ℹ️ {item.details}</p>
              </motion.div>
            ))}
          </div>
        </StepsSection>

        {/* Features & Architecture Grid */}
        <FeaturesSection>
          <div className="section-head">
            <span className="section-eyebrow">PRODUCTION-GRADE ARCHITECTURE</span>
            <h2 className="section-heading">What&apos;s Inside The Boilerplate</h2>
          </div>

          <div className="features-grid">
            {ARCHITECTURE_FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                className="feat-card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="feat-icon">{feat.icon}</div>
                <h3 className="feat-title">{feat.title}</h3>
                <p className="feat-desc">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </FeaturesSection>

        {/* Project Folder Structure */}
        <StructureSection>
          <div className="section-head">
            <span className="section-eyebrow">CLEAN CODEBASE LAYOUT</span>
            <h2 className="section-heading">Folder Structure Overview</h2>
          </div>

          <div className="tree-card">
            <div className="tree-header">
              <span className="tree-label">Directory Structure</span>
              <button
                className="tree-copy-btn"
                onClick={() => copyToClipboard(FOLDER_TREE, "folder-tree")}
              >
                {copiedKey === "folder-tree" ? (
                  <>
                    <Check size={14} />
                    <span>Copied Tree!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Tree</span>
                  </>
                )}
              </button>
            </div>
            <pre className="tree-code">
              <code>{FOLDER_TREE}</code>
            </pre>
          </div>
        </StructureSection>

        {/* Bottom CTA Callout */}
        <CtaBanner>
          <div className="cta-left">
            <h3>Start Building Your Mobile App Now</h3>
            <p>
              Fork or clone the repository on GitHub, check out the documentation, and start shipping.
            </p>
          </div>

          <div className="cta-right">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="cta-clone-btn"
              onClick={() => copyToClipboard(`git clone ${REPO_URL}`, "bottom-clone")}
            >
              {copiedKey === "bottom-clone" ? (
                <>
                  <Check size={16} />
                  <span>Copied Git Clone!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Git Clone</span>
                </>
              )}
            </motion.button>

            <a
              href={GITHUB_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-repo-link"
            >
              <span>View on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </CtaBanner>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #CADF9E;
  font-family: Montserrat, sans-serif;
  padding: 30px 20px 80px 20px;
  color: #000000;

  @media (max-width: 768px) {
    padding: 15px 12px 60px 12px;
  }

  .content-container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const TopBar = styled.header`
  max-width: 1280px;
  margin: 0 auto 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: #ffffff;
    color: #000000;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 #000000;
      background: #FFE600;
    }

    &:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 #000000;
    }
  }

  .github-btn {
    background: #FFE600;
    &:hover {
      background: #00f0ff;
    }
  }
`;

const HeroSection = styled.div`
  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 10px 10px 0 #000000;
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 24px 20px;
    box-shadow: 6px 6px 0 #000000;
  }

  .badge-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .neo-badge {
    border: 2px solid #000000;
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.5px;
    border-radius: 4px;
    box-shadow: 2px 2px 0 #000000;

    &.green { background: #4ade80; color: #000000; }
    &.yellow { background: #FFE600; color: #000000; }
    &.pink { background: #ff66a3; color: #000000; }
  }

  .hero-title {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .hero-desc {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.6;
    color: #374151;
    margin: 0;
    max-width: 950px;

    strong {
      color: #000000;
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }
`;

const RepoCard = styled.div`
  background: #00f0ff;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0 #000000;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 768px) {
    padding: 20px 16px;
    box-shadow: 6px 6px 0 #000000;
  }

  .repo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .repo-title-area {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .repo-pill {
    background: #000000;
    color: #ffffff;
    font-size: 11px;
    font-weight: 900;
    padding: 4px 10px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }

  .repo-heading {
    font-size: 18px;
    font-weight: 900;
    color: #000000;
  }

  .repo-branch-badge {
    background: rgba(255, 255, 255, 0.85);
    border: 1.5px solid #000000;
    font-family: monospace;
    font-size: 12px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 4px;
  }

  .repo-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .repo-url-display {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border: 2.5px solid #000000;
    padding: 10px 16px;
    border-radius: 4px;
    flex: 1;
    min-width: 280px;

    .url-prefix {
      font-size: 12px;
      font-weight: 900;
      color: #6b7280;
    }

    .url-text {
      font-family: monospace;
      font-size: 15px;
      font-weight: 800;
      color: #000000;
      word-break: break-all;
    }
  }

  .copy-main-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: #FFE600;
    color: #000000;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 4px;
    transition: background 0.2s ease;

    &.copied {
      background: #22c55e !important;
      color: #ffffff !important;
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }
`;

const TerminalSection = styled.div`
  .terminal-card {
    background: #18181f;
    border: 3px solid #000000;
    box-shadow: 8px 8px 0 #000000;
    border-radius: 6px;
    overflow: hidden;
  }

  .terminal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0f0f13;
    padding: 12px 18px;
    border-bottom: 2px solid #2e2e38;
    color: #e2e8f0;
  }

  .terminal-dots {
    display: flex;
    gap: 8px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }

  .terminal-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-family: monospace;
    color: #a0aec0;
  }

  .terminal-tag {
    font-size: 10px;
    font-weight: 900;
    background: #22c55e;
    color: #000000;
    padding: 2px 8px;
    border-radius: 3px;
  }

  .command-tabs {
    display: flex;
    background: #131318;
    padding: 8px 12px 0 12px;
    gap: 6px;
    overflow-x: auto;
    border-bottom: 2px solid #2e2e38;
  }

  .tab-btn {
    padding: 8px 16px;
    background: transparent;
    color: #94a3b8;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
      color: #ffffff;
      background: #1f1f28;
    }

    &.active {
      color: #00f0ff;
      border-bottom: 3px solid #00f0ff;
      background: #1f1f28;
    }
  }

  .terminal-body {
    padding: 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .terminal-desc {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    font-size: 13px;

    .play-icon {
      color: #22c55e;
    }
  }

  .code-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: #09090c;
    padding: 16px 20px;
    border: 2px solid #2e2e38;
    border-radius: 6px;
    flex-wrap: wrap;
  }

  .code-left {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: monospace;
    font-size: 15px;
    word-break: break-all;
  }

  .prompt {
    color: #22c55e;
    font-weight: 900;
    user-select: none;
  }

  .cmd-text {
    color: #f8fafc;
    font-weight: 600;
  }

  .terminal-copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #2e2e38;
    color: #ffffff;
    border: 1.5px solid #4a4a5a;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 800;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #00f0ff;
      color: #000000;
      border-color: #00f0ff;
    }

    &.copied {
      background: #22c55e !important;
      color: #ffffff !important;
      border-color: #22c55e !important;
    }

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }
`;

const StepsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .section-head {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .section-eyebrow {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #b91c1c;
  }

  .section-heading {
    font-size: 28px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }

  .step-card {
    background: #ffffff;
    border: 3px solid #000000;
    box-shadow: 6px 6px 0 #000000;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 #000000;
    }
  }

  .step-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-num {
    font-size: 14px;
    font-weight: 900;
    color: #2563eb;
    letter-spacing: 0.5px;
  }

  .step-badge {
    background: #ff66a3;
    color: #000000;
    border: 1.5px solid #000000;
    font-size: 10px;
    font-weight: 900;
    padding: 2px 8px;
    border-radius: 3px;
  }

  .step-name {
    font-size: 20px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .step-text {
    font-size: 14px;
    font-weight: 600;
    color: #4b5563;
    margin: 0;
    line-height: 1.5;
  }

  .step-code {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f5f9;
    border: 2px solid #000000;
    border-radius: 4px;
    padding: 10px 14px;
    gap: 10px;

    code {
      font-family: monospace;
      font-size: 12px;
      font-weight: 800;
      color: #0f172a;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .step-icon-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #475569;
    padding: 4px;
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
      background: #e2e8f0;
      color: #000000;
    }
  }

  .step-details {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .section-head {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .section-eyebrow {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #b91c1c;
  }

  .section-heading {
    font-size: 28px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }

  .feat-card {
    background: #ffffff;
    border: 3px solid #000000;
    box-shadow: 6px 6px 0 #000000;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .feat-icon {
    width: 48px;
    height: 48px;
    background: #FFE600;
    border: 2.5px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #000000;
  }

  .feat-title {
    font-size: 18px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .feat-desc {
    font-size: 14px;
    font-weight: 600;
    color: #4b5563;
    line-height: 1.5;
    margin: 0;
  }
`;

const StructureSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .section-head {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .section-eyebrow {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #b91c1c;
  }

  .section-heading {
    font-size: 28px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .tree-card {
    background: #111827;
    border: 3px solid #000000;
    box-shadow: 8px 8px 0 #000000;
    border-radius: 6px;
    overflow: hidden;
  }

  .tree-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #030712;
    padding: 12px 20px;
    border-bottom: 2px solid #1f2937;
  }

  .tree-label {
    color: #9ca3af;
    font-size: 13px;
    font-weight: 700;
    font-family: monospace;
  }

  .tree-copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #1f2937;
    color: #ffffff;
    border: 1.5px solid #374151;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #00f0ff;
      color: #000000;
      border-color: #00f0ff;
    }
  }

  .tree-code {
    margin: 0;
    padding: 20px 24px;
    overflow-x: auto;

    code {
      font-family: monospace;
      font-size: 13px;
      line-height: 1.6;
      color: #a5f3fc;
    }
  }
`;

const CtaBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  background: #ff66a3;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0 #000000;
  padding: 28px 34px;
  border-radius: 6px;

  @media (max-width: 768px) {
    padding: 20px 16px;
    box-shadow: 6px 6px 0 #000000;
  }

  .cta-left {
    flex: 1;
    min-width: 280px;

    h3 {
      font-size: 24px;
      font-weight: 900;
      color: #000000;
      margin: 0 0 6px 0;
    }

    p {
      font-size: 14px;
      font-weight: 700;
      color: #111827;
      margin: 0;
      line-height: 1.5;
    }
  }

  .cta-right {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  }

  .cta-clone-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: #ffffff;
    color: #000000;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 4px;

    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }

  .cta-repo-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: #000000;
    color: #ffffff;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 #000000;
    }

    @media (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
  }
`;
