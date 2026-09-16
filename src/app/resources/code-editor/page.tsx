"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Code2, 
  Sparkles,
  Layers,
  Download,
  ArrowLeft
} from "lucide-react";

const TEMPLATES = [
  {
    id: "beginner",
    name: "🌱 1. Beginner Basics",
    description: "Simple heading, button, and instant JavaScript interaction",
    html: `<!-- Simple HTML Structure -->
<div class="card">
  <h1 id="title">Hello, World! 👋</h1>
  <p>Learn HTML, CSS & JavaScript interactively.</p>
  <button id="btn" onclick="changeMessage()">Click Me!</button>
</div>`,
    css: `/* Simple CSS Styles */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
  background: #f0fdf4;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
  border: 3px solid #16a34a;
}

h1 {
  color: #15803d;
  margin-top: 0;
}

p {
  color: #4b5563;
  font-size: 16px;
}

button {
  background: #22c55e;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

button:hover {
  background: #16a34a;
  transform: scale(1.05);
}`,
    js: `// Simple JavaScript Function
let clickCount = 0;

function changeMessage() {
  clickCount++;
  const title = document.getElementById("title");
  title.innerText = "You clicked " + clickCount + " time" + (clickCount > 1 ? "s" : "") + "! 🎉";
  title.style.color = "#ea580c";
}`
  },
  {
    id: "button",
    name: "⚡ 2. Interactive Button",
    description: "Button with animated hover effect and active states",
    html: `<div class="container">
  <h2>Neomorphic & Brutalist Button</h2>
  <p>Hover and click to see CSS & JS in action!</p>
  <button id="actionBtn" class="neo-btn">PUSH ME</button>
  <div id="status" class="status-box">Ready for click...</div>
</div>`,
    css: `body {
  background: #fdf2f8;
  font-family: monospace, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
}

.container {
  text-align: center;
  background: #ffffff;
  padding: 35px;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 #000;
}

.neo-btn {
  font-family: inherit;
  font-size: 18px;
  font-weight: 900;
  background: #ec4899;
  color: white;
  padding: 15px 30px;
  border: 3px solid #000;
  box-shadow: 5px 5px 0 #000;
  cursor: pointer;
  transition: all 0.15s ease;
  margin-top: 15px;
}

.neo-btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 #000;
  background: #db2777;
}

.neo-btn:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #000;
}

.status-box {
  margin-top: 20px;
  padding: 10px;
  font-weight: bold;
  background: #fce7f3;
  border: 2px dashed #db2777;
  color: #9d174d;
}`,
    js: `const btn = document.getElementById("actionBtn");
const status = document.getElementById("status");
const colors = ["#ec4899", "#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"];

btn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  btn.style.background = randomColor;
  status.textContent = "Button activated with color: " + randomColor + " ✨";
});`
  },
  {
    id: "counter",
    name: "🔢 3. Simple Counter App",
    description: "State management with increment, decrement and reset",
    html: `<div class="counter-box">
  <h1>Counter App</h1>
  <div id="count" class="count-display">0</div>
  <div class="btn-group">
    <button id="decBtn" class="btn dec">-</button>
    <button id="resetBtn" class="btn reset">Reset</button>
    <button id="incBtn" class="btn inc">+</button>
  </div>
</div>`,
    css: `body {
  font-family: 'Arial', sans-serif;
  background: #eef2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
}

.counter-box {
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.15);
  text-align: center;
  border: 2px solid #6366f1;
}

h1 {
  margin-top: 0;
  color: #4338ca;
}

.count-display {
  font-size: 64px;
  font-weight: bold;
  color: #1e1b4b;
  margin: 20px 0;
  transition: transform 0.15s;
}

.btn-group {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.inc { background: #4f46e5; color: white; }
.dec { background: #ef4444; color: white; }
.reset { background: #94a3b8; color: white; }

.btn:hover { transform: translateY(-2px); opacity: 0.9; }
.btn:active { transform: translateY(1px); }`,
    js: `let count = 0;
const countEl = document.getElementById("count");

function updateDisplay() {
  countEl.textContent = count;
  countEl.style.transform = "scale(1.2)";
  setTimeout(() => {
    countEl.style.transform = "scale(1)";
  }, 150);

  if (count > 0) countEl.style.color = "#16a34a";
  else if (count < 0) countEl.style.color = "#dc2626";
  else countEl.style.color = "#1e1b4b";
}

document.getElementById("incBtn").onclick = () => { count++; updateDisplay(); };
document.getElementById("decBtn").onclick = () => { count--; updateDisplay(); };
document.getElementById("resetBtn").onclick = () => { count = 0; updateDisplay(); };`
  },
  {
    id: "colors",
    name: "🎨 4. Random Color Generator",
    description: "Generate hex codes with live background animations",
    html: `<div class="card">
  <h2>Color Palette Picker</h2>
  <div id="colorBox" class="color-preview">#6366F1</div>
  <button id="generateBtn">Generate New Color</button>
  <button id="copyBtn">Copy Hex</button>
</div>`,
    css: `body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
  background-color: #6366f1;
  transition: background-color 0.4s ease;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  text-align: center;
}

.color-preview {
  font-size: 28px;
  font-weight: 800;
  font-family: monospace;
  padding: 20px;
  margin: 20px 0;
  background: #f1f5f9;
  border-radius: 10px;
  color: #1e293b;
}

button {
  padding: 12px 18px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: #0f172a;
  color: white;
  transition: all 0.2s;
}

button:hover {
  background: #334155;
  transform: translateY(-2px);
}`,
    js: `const box = document.getElementById("colorBox");
const genBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

genBtn.onclick = () => {
  const newColor = getRandomColor();
  box.textContent = newColor;
  document.body.style.backgroundColor = newColor;
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(box.textContent);
  copyBtn.textContent = "Copied! ✅";
  setTimeout(() => { copyBtn.textContent = "Copy Hex"; }, 1500);
};`
  }
];

export default function CodeEditorPage() {
  const [activeTab, setActiveTab] = useState<"all" | "html" | "css" | "js">("all");
  const [htmlCode, setHtmlCode] = useState(TEMPLATES[0].html);
  const [cssCode, setCssCode] = useState(TEMPLATES[0].css);
  const [jsCode, setJsCode] = useState(TEMPLATES[0].js);
  const [autoRun, setAutoRun] = useState(true);
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0].id);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const generateOutput = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    try {
      ${jsCode}
    } catch (err) {
      console.error("Code Editor JS Error:", err);
    }
  <\/script>
</body>
</html>`;
  };

  const [srcDoc, setSrcDoc] = useState(generateOutput());

  useEffect(() => {
    if (!autoRun) return;
    const timer = setTimeout(() => {
      setSrcDoc(generateOutput());
    }, 250);
    return () => clearTimeout(timer);
  }, [htmlCode, cssCode, jsCode, autoRun]);

  const handleManualRun = () => {
    setSrcDoc(generateOutput());
  };

  const handleTemplateChange = (templateId: string) => {
    const template = TEMPLATES.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setHtmlCode(template.html);
      setCssCode(template.css);
      setJsCode(template.js);
      setSrcDoc(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>${template.css}</style>
</head>
<body>
  ${template.html}
  <script>
    try {
      ${template.js}
    } catch (err) {
      console.error(err);
    }
  <\/script>
</body>
</html>`);
    }
  };

  const handleReset = () => {
    handleTemplateChange(selectedTemplate);
  };

  const handleCopyAll = () => {
    const fullCode = `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generateOutput()], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-code-playground.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PageContainer>
      {/* Top Header Bar */}
      <TopBar>
        <div className="title-area">
          <Link href="/resources" className="back-link">
            <ArrowLeft size={18} />
            <span>Back to Resources</span>
          </Link>
          <div className="icon-wrapper">
            <Code2 size={22} />
          </div>
          <div>
            <h2>⚡ HTML / CSS / JS Code Playground</h2>
            <p>Interactive web editor & learner environment</p>
          </div>
        </div>

        <div className="header-controls">
          {/* Template Selector */}
          <div className="template-selector">
            <Sparkles size={16} className="sparkle-icon" />
            <select 
              value={selectedTemplate} 
              onChange={(e) => handleTemplateChange(e.target.value)}
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Run Button */}
          <button 
            className="action-btn run-btn" 
            onClick={handleManualRun}
            title="Run code in preview"
          >
            <Play size={16} fill="currentColor" />
            <span>Run</span>
          </button>

          {/* Reset Button */}
          <button 
            className="action-btn reset-btn" 
            onClick={handleReset}
            title="Reset code to current template"
          >
            <RotateCcw size={16} />
            <span className="hide-mobile">Reset</span>
          </button>

          {/* Copy Button */}
          <button 
            className="action-btn copy-btn" 
            onClick={handleCopyAll}
            title="Copy all code to clipboard"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="hide-mobile">{copied ? "Copied" : "Copy"}</span>
          </button>

          {/* Download HTML */}
          <button 
            className="action-btn dl-btn hide-mobile" 
            onClick={handleDownload}
            title="Download standalone HTML file"
          >
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </TopBar>

      {/* View mode switcher */}
      <ViewModeBar>
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <Layers size={14} /> Split View
          </button>
          <button 
            className={`tab-btn html ${activeTab === "html" ? "active" : ""}`}
            onClick={() => setActiveTab("html")}
          >
            HTML
          </button>
          <button 
            className={`tab-btn css ${activeTab === "css" ? "active" : ""}`}
            onClick={() => setActiveTab("css")}
          >
            CSS
          </button>
          <button 
            className={`tab-btn js ${activeTab === "js" ? "active" : ""}`}
            onClick={() => setActiveTab("js")}
          >
            JS
          </button>
        </div>
        <div className="autorun-toggle">
          <label>
            <input 
              type="checkbox" 
              checked={autoRun} 
              onChange={(e) => setAutoRun(e.target.checked)} 
            />
            <span>Live Auto-run</span>
          </label>
        </div>
      </ViewModeBar>

      {/* Editor Workbench */}
      <Workbench>
        {/* Left Column: Code Inputs */}
        <EditorsSection className={activeTab}>
          {/* HTML Box */}
          <CodeBox className={`code-box html-box ${activeTab !== "all" && activeTab !== "html" ? "hidden" : ""}`}>
            <div className="box-header html-head">
              <span className="label">
                <span className="badge html-badge">HTML</span>
                <span className="desc">Structure & Content</span>
              </span>
              <span className="file-info">&lt;index.html&gt;</span>
            </div>
            <textarea 
              id="html-code"
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              placeholder="<!-- Write HTML code here -->"
              spellCheck={false}
            />
          </CodeBox>

          {/* CSS Box */}
          <CodeBox className={`code-box css-box ${activeTab !== "all" && activeTab !== "css" ? "hidden" : ""}`}>
            <div className="box-header css-head">
              <span className="label">
                <span className="badge css-badge">CSS</span>
                <span className="desc">Style & Layout</span>
              </span>
              <span className="file-info">style.css</span>
            </div>
            <textarea 
              id="css-code"
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              placeholder="/* Write CSS styles here */"
              spellCheck={false}
            />
          </CodeBox>

          {/* JS Box */}
          <CodeBox className={`code-box js-box ${activeTab !== "all" && activeTab !== "js" ? "hidden" : ""}`}>
            <div className="box-header js-head">
              <span className="label">
                <span className="badge js-badge">JS</span>
                <span className="desc">Logic & Interactivity</span>
              </span>
              <span className="file-info">script.js</span>
            </div>
            <textarea 
              id="js-code"
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              placeholder="// Write JavaScript code here"
              spellCheck={false}
            />
          </CodeBox>
        </EditorsSection>

        {/* Right Column: Live Output Preview */}
        <PreviewSection>
          <div className="preview-header">
            <div className="live-indicator">
              <span className="pulse-dot"></span>
              <span>LIVE OUTPUT PREVIEW</span>
            </div>
            <div className="preview-tips">
              <span>Safe Sandbox Mode</span>
            </div>
          </div>
          <div className="iframe-container">
            <iframe 
              ref={iframeRef}
              id="output"
              srcDoc={srcDoc}
              title="Output Preview"
              sandbox="allow-scripts allow-modals allow-same-origin"
            />
          </div>
        </PreviewSection>
      </Workbench>
    </PageContainer>
  );
}

// --- STYLED COMPONENTS ---

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1e1e24;
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
  color: #ffffff;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px 12px;
    gap: 10px;
  }

  .title-area {
    display: flex;
    align-items: center;
    gap: 14px;

    .back-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: #ff6b6b;
      color: #ffffff;
      text-decoration: none;
      border: 2px solid #ffffff;
      box-shadow: 3px 3px 0 #ffffff;
      font-weight: 800;
      font-size: 13px;
      transition: all 0.2s ease;

      &:hover {
        background: #ff5252;
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 #ffffff;
      }

      &:active {
        transform: translate(1px, 1px);
      }

      @media (max-width: 768px) {
        padding: 6px 10px;
        font-size: 12px;

        span {
          display: none;
        }
      }
    }

    .icon-wrapper {
      background: #4ecdc4;
      color: #000000;
      padding: 8px;
      border: 2px solid #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
      color: #4ecdc4;

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

    p {
      margin: 2px 0 0 0;
      font-size: 12px;
      color: #a0aec0;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      gap: 6px;
    }
  }

  .template-selector {
    display: flex;
    align-items: center;
    background: #2d3748;
    border: 2px solid #4ecdc4;
    padding: 6px 10px;
    border-radius: 0;

    .sparkle-icon {
      color: #ffd166;
      margin-right: 6px;
    }

    select {
      background: transparent;
      border: none;
      color: #ffffff;
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      outline: none;

      option {
        background: #1a202c;
        color: #ffffff;
      }

      @media (max-width: 768px) {
        max-width: 130px;
        font-size: 11px;
      }
    }
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border: 2px solid #000000;
    font-family: inherit;
    font-weight: 800;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 3px 3px 0 #ffffff;
    transition: all 0.15s ease;

    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #ffffff;
    }

    &:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0 #ffffff;
    }

    @media (max-width: 768px) {
      padding: 6px 10px;
      font-size: 12px;
    }

    &.run-btn {
      background: #22c55e;
      color: #000000;
      &:hover { background: #16a34a; }
    }

    &.reset-btn {
      background: #ffd166;
      color: #000000;
      &:hover { background: #ffbe0b; }
    }

    &.copy-btn {
      background: #4ecdc4;
      color: #000000;
      &:hover { background: #3bbcb3; }
    }

    &.dl-btn {
      background: #ff6b6b;
      color: #ffffff;
      &:hover { background: #ff5252; }
    }
  }

  .hide-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const ViewModeBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111115;
  padding: 8px 24px;
  border-bottom: 2px solid #2d3748;

  @media (max-width: 768px) {
    padding: 6px 12px;
  }

  .tabs {
    display: flex;
    gap: 8px;
  }

  .tab-btn {
    background: #22222a;
    color: #a0aec0;
    border: 1px solid #4a5568;
    padding: 6px 14px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.2s;

    &:hover {
      background: #2d3748;
      color: #ffffff;
    }

    &.active {
      background: #4ecdc4;
      color: #000000;
      border-color: #ffffff;
      box-shadow: 2px 2px 0 #000000;
    }

    &.html.active { background: #ff6b6b; color: white; }
    &.css.active { background: #45b7d1; color: white; }
    &.js.active { background: #ffd166; color: black; }
  }

  .autorun-toggle {
    label {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #e2e8f0;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;

      input {
        accent-color: #22c55e;
        cursor: pointer;
      }
    }
  }
`;

const Workbench = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 115px);
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const EditorsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: #18181f;
  border-right: 3px solid #000000;
  overflow-y: auto;

  &.html .css-box,
  &.html .js-box,
  &.css .html-box,
  &.css .js-box,
  &.js .html-box,
  &.js .css-box {
    display: none;
  }

  &.html .html-box,
  &.css .css-box,
  &.js .js-box {
    flex: 1;
    height: 100%;
  }

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 3px solid #000000;
    height: 50%;
  }
`;

const CodeBox = styled.div`
  flex: 1;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  background: #0d0d12;
  border: 2px solid #2d3748;
  box-shadow: 4px 4px 0 #000000;
  border-radius: 0;
  overflow: hidden;

  .box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background: #1a1a24;
    border-bottom: 2px solid #2d3748;

    .label {
      display: flex;
      align-items: center;
      gap: 8px;

      .badge {
        font-size: 11px;
        font-weight: 900;
        padding: 2px 6px;
        border-radius: 2px;
        letter-spacing: 0.5px;
      }

      .html-badge { background: #ff6b6b; color: white; }
      .css-badge { background: #45b7d1; color: white; }
      .js-badge { background: #ffd166; color: black; }

      .desc {
        color: #a0aec0;
        font-size: 11px;
        font-weight: 600;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }

    .file-info {
      color: #718096;
      font-size: 11px;
      font-family: inherit;
    }
  }

  textarea {
    flex: 1;
    width: 100%;
    background: #0f111a;
    color: #e2e8f0;
    font-family: 'Consolas', 'Fira Code', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 14px 18px;
    border: none;
    outline: none;
    resize: none;
    tab-size: 2;
    white-space: pre;

    &:focus {
      background: #141722;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 10px 12px;
    }
  }
`;

const PreviewSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #121218;
  padding: 12px;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 50%;
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 14px;
    background: #000000;
    border: 2px solid #ffffff;
    border-bottom: none;
    color: #ffffff;

    .live-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 800;
      font-size: 12px;
      letter-spacing: 1px;
      color: #22c55e;

      .pulse-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        box-shadow: 0 0 8px #22c55e;
        animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.8); }
      }
    }

    .preview-tips {
      font-size: 11px;
      color: #a0aec0;
    }
  }

  .iframe-container {
    flex: 1;
    border: 3px solid #ffffff;
    box-shadow: 6px 6px 0 #000000;
    background: #ffffff;
    overflow: hidden;

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      background: #ffffff;
    }
  }
`;
