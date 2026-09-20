"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
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
  Play
} from "lucide-react";
import { useHomeTheme } from "@/context/HomeThemeContext";

const REPO_URL = "https://github.com/Arbaz2000/react-native-boilerplate.git";
const GITHUB_PAGE_URL = "https://github.com/Arbaz2000/react-native-boilerplate";

const COMMAND_TABS = [
  {
    id: "clone",
    label: "Git Clone",
    command: `git clone ${REPO_URL}`,
    description: "Clone the official React Native boilerplate repository",
  },
  {
    id: "oneliner",
    label: "Quick Setup (One-Liner)",
    command: `git clone ${REPO_URL} my-app && cd my-app && npm install`,
    description: "Clone into 'my-app' directory and install all dependencies in one command",
  },
  {
    id: "start",
    label: "Start Metro",
    command: "npm start",
    description: "Launch the Metro bundler dev server with Fast Refresh",
  },
  {
    id: "android",
    label: "Run Android",
    command: "npm run android",
    description: "Compile and deploy to connected Android device or emulator",
  },
  {
    id: "ios",
    label: "Run iOS",
    command: "bundle exec pod install && npm run ios",
    description: "Install CocoaPods native dependencies and launch on iOS simulator",
  },
];

const QUICK_STEPS = [
  {
    step: "01",
    title: "Clone Repository",
    desc: "Clone the boilerplate code directly to your local workstation.",
    code: `git clone ${REPO_URL} my-app`,
    badge: "Terminal",
  },
  {
    step: "02",
    title: "Install Dependencies",
    desc: "Install JavaScript packages and iOS CocoaPods pods via Bundler.",
    code: "cd my-app && npm install && cd ios && pod install && cd ..",
    badge: "Setup",
  },
  {
    step: "03",
    title: "Launch & Develop",
    desc: "Start Metro and launch your app with instantaneous Fast Refresh.",
    code: "npm run android  # or npm run ios",
    badge: "Ready",
  },
];

const ARCHITECTURE_FEATURES = [
  {
    icon: <Smartphone size={24} />,
    title: "React Native CLI (Bare)",
    desc: "Full native control without managed framework limits. Ready for custom native Android & iOS modules.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "TypeScript Strict",
    desc: "100% typed navigators, route params, API client responses, and application state models.",
  },
  {
    icon: <Zap size={24} />,
    title: "Zustand + RTK Query",
    desc: "Zustand for lightning-fast local UI stores paired with RTK Query for automated server caching & revalidation.",
  },
  {
    icon: <Layers size={24} />,
    title: "React Navigation v7",
    desc: "Modular AuthStack, Onboarding carousel, and a 5-tab configurable bottom navigation structure.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Reanimated 3 & Gestures",
    desc: "Hardware-accelerated 60fps animations and smooth gestures configured out of the box.",
  },
  {
    icon: <FolderGit2 size={24} />,
    title: "Multi-Env Ready",
    desc: "Built-in environments for Development, Staging, and Production with react-native-config.",
  },
];

export default function ReactNativeStarterSection() {
  const { theme } = useHomeTheme();
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
    <StyledWrapper $theme={theme}>
      <div className="main-card">
        {/* Header */}
        <div className="head">
          <div className="head-info">
            <div className="title-row">
              <span className="badge">OPEN SOURCE STARTER</span>
              <span className="head-title">React Native Quick Start</span>
            </div>
            <p className="head-desc">
              Jumpstart production-grade mobile applications with my curated, cross-platform 
              <strong> React Native CLI Boilerplate</strong>. Built with enterprise standards, 
              scalable domain architecture, and ultra-smooth animations.
            </p>
          </div>

          <a
            href={GITHUB_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            <svg
              className="github-icon"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            <span>View on GitHub</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Content Body */}
        <div className="content">
          {/* Main Copyable Repository Hero Bar */}
          <div className="repo-copy-banner">
            <div className="repo-info-left">
              <span className="repo-tag">REPO URL</span>
              <code className="repo-url-text">{REPO_URL}</code>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`copy-url-btn ${copiedKey === "repo-url" ? "copied" : ""}`}
              onClick={() => copyToClipboard(REPO_URL, "repo-url")}
              aria-label="Copy Git Repository URL"
            >
              {copiedKey === "repo-url" ? (
                <>
                  <Check size={18} className="check-icon" />
                  <span>COPIED URL!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>COPY CLONE URL</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Interactive Terminal Window */}
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="terminal-title">
                <Terminal size={15} />
                <span>bash — arbaz2000@react-native-boilerplate</span>
              </div>
              <div className="terminal-actions">
                <span className="terminal-status">READY</span>
              </div>
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

            {/* Terminal Body */}
            <div className="terminal-body">
              <div className="terminal-desc">
                <Play size={14} className="play-icon" />
                <span>{currentTab.description}</span>
              </div>

              <div className="code-line-wrapper">
                <div className="code-content">
                  <span className="prompt">$</span>
                  <span className="command-text">{currentTab.command}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`copy-code-btn ${copiedKey === currentTab.id ? "copied" : ""}`}
                  onClick={() => copyToClipboard(currentTab.command, currentTab.id)}
                  aria-label="Copy Command"
                >
                  {copiedKey === currentTab.id ? (
                    <>
                      <Check size={16} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* 3-Step Quick Start Row */}
          <div className="steps-container">
            <div className="steps-header">
              <span className="section-label">GET UP AND RUNNING IN SECONDS</span>
              <h3 className="section-title">Quick Start Guide</h3>
            </div>

            <div className="steps-grid">
              {QUICK_STEPS.map((item, idx) => (
                <motion.div
                  key={item.step}
                  className="step-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="step-badge-row">
                    <span className="step-number">STEP {item.step}</span>
                    <span className="step-pill">{item.badge}</span>
                  </div>
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-desc">{item.desc}</p>
                  
                  <div className="step-code-box">
                    <code>{item.code}</code>
                    <button
                      className="step-copy-btn"
                      onClick={() => copyToClipboard(item.code, `step-${item.step}`)}
                      title="Copy Step Code"
                    >
                      {copiedKey === `step-${item.step}` ? (
                        <Check size={14} className="text-green-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Architecture Features Section */}
          <div className="features-container">
            <div className="features-header">
              <span className="section-label">PRODUCTION STACK</span>
              <h3 className="section-title">What&apos;s Included In The Boilerplate</h3>
            </div>

            <div className="features-grid">
              {ARCHITECTURE_FEATURES.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  className="feature-card"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="feature-icon-wrapper">{feat.icon}</div>
                  <h4 className="feature-title">{feat.title}</h4>
                  <p className="feature-desc">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Callout */}
          <div className="cta-banner">
            <div className="cta-content">
              <h4>Ready to build high-performance mobile apps?</h4>
              <p>
                Clone the repository, inspect the architecture checklist, and start shipping client apps in record time.
              </p>
            </div>
            <div className="cta-buttons">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="cta-copy-btn"
                onClick={() => copyToClipboard(`git clone ${REPO_URL}`, "cta-clone")}
              >
                {copiedKey === "cta-clone" ? (
                  <>
                    <Check size={18} />
                    <span>Copied Git Clone!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Git Clone</span>
                  </>
                )}
              </motion.button>

              <a
                href={GITHUB_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-github-btn"
              >
                <span>GitHub Repo ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 5%;
  margin: 0;
  transition: all 0.3s ease;

  .main-card {
    font-family: Montserrat, sans-serif;
    width: 95%;
    max-width: 1400px;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#ffffff" : "#ffffff")};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 12px 12px 0 ${(props) => props.$theme.colors.shadow};
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  /* Head Section */
  .head {
    width: 100%;
    min-height: 90px;
    background: ${(props) => props.$theme.colors.cardHeader};
    padding: 20px 28px;
    color: ${(props) => props.$theme.colors.cardHeaderText};
    border-bottom: 3px solid ${(props) => props.$theme.colors.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .head-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 280px;
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .badge {
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#FFE600" : "#333333")};
    color: ${(props) => (props.$theme.name === "neo-brutalism" ? "#000000" : "#ffffff")};
    border: 2px solid ${(props) => props.$theme.colors.border};
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.5px;
    border-radius: 4px;
    box-shadow: 2px 2px 0 ${(props) => props.$theme.colors.shadow};
  }

  .head-title {
    font-size: 38px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.5px;
    color: ${(props) => props.$theme.colors.cardHeaderText};
  }

  .head-desc {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.9;
    line-height: 1.5;
    max-width: 820px;

    strong {
      text-decoration: underline;
      text-decoration-thickness: 2px;
    }
  }

  .github-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#FFE600" : "#ffffff")};
    color: #000000;
    border: 2.5px solid ${(props) => props.$theme.colors.border};
    box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;

    .github-icon {
      width: 18px;
      height: 18px;
    }

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
      background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#00f0ff" : "#eaeaea")};
    }

    &:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  /* Content Body */
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#fbf5eb" : "#f5f5f5")};
    padding: 30px;
    gap: 32px;
    transition: background 0.3s ease-in-out;
  }

  /* Primary Repo Copy Banner */
  .repo-copy-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#00f0ff" : "#ffffff")};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    padding: 18px 24px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .repo-info-left {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    flex: 1;
    min-width: 260px;
  }

  .repo-tag {
    background: #000000;
    color: #ffffff;
    font-size: 11px;
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 4px;
    letter-spacing: 0.5px;
  }

  .repo-url-text {
    font-family: monospace;
    font-size: 15px;
    font-weight: 700;
    color: #000000;
    word-break: break-all;
    background: rgba(255, 255, 255, 0.7);
    padding: 6px 12px;
    border: 1.5px solid #000000;
    border-radius: 4px;
  }

  .copy-url-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#FFE600" : "#000000")};
    color: ${(props) => (props.$theme.name === "neo-brutalism" ? "#000000" : "#ffffff")};
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 4px;
    transition: background 0.2s ease;

    &.copied {
      background: #22c55e !important;
      color: #ffffff !important;
    }
  }

  /* Terminal Card */
  .terminal-card {
    background: #1e1e24;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 8px 8px 0 ${(props) => props.$theme.colors.shadow};
    border-radius: 6px;
    overflow: hidden;
  }

  .terminal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #121217;
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

  .terminal-status {
    font-size: 10px;
    font-weight: 800;
    background: #22c55e;
    color: #000000;
    padding: 2px 8px;
    border-radius: 3px;
  }

  .command-tabs {
    display: flex;
    background: #17171d;
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
      background: #22222b;
    }

    &.active {
      color: #00f0ff;
      border-bottom: 3px solid #00f0ff;
      background: #22222b;
    }
  }

  .terminal-body {
    padding: 20px 24px;
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

  .code-line-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    background: #0f0f13;
    padding: 14px 18px;
    border: 2px solid #2e2e38;
    border-radius: 6px;
    flex-wrap: wrap;
  }

  .code-content {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: monospace;
    font-size: 15px;
    word-break: break-all;
  }

  .prompt {
    color: #22c55e;
    font-weight: 800;
    user-select: none;
  }

  .command-text {
    color: #f8fafc;
    font-weight: 600;
  }

  .copy-code-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #2e2e38;
    color: #ffffff;
    border: 1.5px solid #4a4a5a;
    padding: 8px 14px;
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
  }

  /* Steps Section */
  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .steps-header, .features-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .section-label {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 1px;
    color: ${(props) => (props.$theme.name === "neo-brutalism" ? "#d90429" : "#555555")};
  }

  .section-title {
    font-size: 26px;
    font-weight: 900;
    color: #000000;
    margin: 0;
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }

  .step-card {
    background: #ffffff;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }
  }

  .step-badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step-number {
    font-size: 14px;
    font-weight: 900;
    color: #2563eb;
    letter-spacing: 0.5px;
  }

  .step-pill {
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#ff66a3" : "#e2e8f0")};
    color: #000000;
    border: 1.5px solid #000000;
    font-size: 10px;
    font-weight: 900;
    padding: 2px 8px;
    border-radius: 3px;
  }

  .step-title {
    font-size: 18px;
    font-weight: 800;
    color: #000000;
    margin: 0;
  }

  .step-desc {
    font-size: 13px;
    font-weight: 600;
    color: #4b5563;
    margin: 0;
    line-height: 1.4;
    min-height: 38px;
  }

  .step-code-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f1f5f9;
    border: 2px solid #000000;
    border-radius: 4px;
    padding: 10px 12px;
    gap: 10px;

    code {
      font-family: monospace;
      font-size: 12px;
      font-weight: 700;
      color: #0f172a;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .step-copy-btn {
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

  /* Features Section */
  .features-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: #ffffff;
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .feature-icon-wrapper {
    width: 46px;
    height: 46px;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#FFE600" : "#e2e8f0")};
    border: 2.5px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #000000;
  }

  .feature-title {
    font-size: 18px;
    font-weight: 800;
    color: #000000;
    margin: 0;
  }

  .feature-desc {
    font-size: 13px;
    font-weight: 600;
    color: #4b5563;
    line-height: 1.5;
    margin: 0;
  }

  /* CTA Banner */
  .cta-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    background: ${(props) => (props.$theme.name === "neo-brutalism" ? "#ff66a3" : "#ffffff")};
    border: 3px solid ${(props) => props.$theme.colors.border};
    box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    padding: 24px 28px;
    border-radius: 6px;
  }

  .cta-content {
    flex: 1;
    min-width: 280px;

    h4 {
      font-size: 20px;
      font-weight: 900;
      color: #000000;
      margin: 0 0 6px 0;
    }

    p {
      font-size: 14px;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
      line-height: 1.4;
    }
  }

  .cta-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .cta-copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    background: #ffffff;
    color: #000000;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 4px;
  }

  .cta-github-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 12px 22px;
    background: #000000;
    color: #ffffff;
    border: 2.5px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0 #000000;
    }
  }

  /* Responsive Queries */
  @media (max-width: 1024px) {
    padding: 3% 3%;

    .main-card {
      box-shadow: 9px 9px 0 ${(props) => props.$theme.colors.shadow};
    }

    .head-title {
      font-size: 32px;
    }

    .content {
      padding: 20px;
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .main-card {
      box-shadow: 6px 6px 0 ${(props) => props.$theme.colors.shadow};
    }

    .head {
      padding: 16px;
      gap: 16px;
    }

    .head-title {
      font-size: 26px;
    }

    .head-desc {
      font-size: 13px;
    }

    .github-link-btn {
      width: 100%;
      justify-content: center;
    }

    .repo-copy-banner {
      flex-direction: column;
      align-items: stretch;
    }

    .copy-url-btn {
      justify-content: center;
    }

    .code-line-wrapper {
      flex-direction: column;
      align-items: stretch;
    }

    .copy-code-btn {
      justify-content: center;
    }

    .steps-grid, .features-grid {
      grid-template-columns: 1fr;
    }

    .cta-banner {
      flex-direction: column;
      align-items: stretch;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-copy-btn, .cta-github-btn {
      justify-content: center;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;

    .main-card {
      box-shadow: 4px 4px 0 ${(props) => props.$theme.colors.shadow};
    }

    .head-title {
      font-size: 22px;
    }

    .content {
      padding: 12px;
      gap: 18px;
    }
  }
`;
