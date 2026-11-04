"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { projects as portfolioProjects } from "@/constants/projects";

interface CVProject {
  name: string;
  subtitle: string;
  period: string;
  summary: string;
  tags: string[];
  link?: string;
  badge: string;
}

const cvHighlightProjects: CVProject[] = [
  {
    name: "Pincodekart Ecosystem",
    subtitle: "5-App Mobile Suite (iOS & Android) • 1M+ User Scale",
    period: "2025 – 2026",
    summary:
      "Architected 5 interconnected React Native apps (E-Commerce, Virtual Dukandar, Logistics, Vendor, CRM) with live location tracking, QR payments, barcode scanning, real-time social chat, Zustand state, and offline-first sync.",
    tags: ["React Native", "Zustand", "Microservices", "WebSockets", "Offline-First"],
    badge: "1M+ USERS",
  },
  {
    name: "Pikkro",
    subtitle: "Multi-App Delivery Platform (Customer, Driver, Admin & Web)",
    period: "2023 – 2024",
    summary:
      "End-to-end delivery ecosystem with 3 React Native CLI mobile apps, web admin dashboard, and Node.js backend featuring real-time tracking, push notifications, analytics, Razorpay payments, and AWS deployment.",
    tags: ["React Native CLI", "Node.js", "Zustand", "Razorpay", "AWS"],
    link: "/projects/pikkro",
    badge: "3 APPS + WEB",
  },
  {
    name: "Mandi ERP",
    subtitle: "Offline-First Accounting & Wholesale ERP Software",
    period: "2025",
    summary:
      "MERN + Next.js accounting platform for wholesale markets managing suppliers, retailers, inventory, warehouse transfers, and GST reporting with RBAC, PWA support, and IndexedDB cloud sync.",
    tags: ["Next.js", "MERN", "IndexedDB", "PWA", "RBAC"],
    badge: "OFFLINE-FIRST",
  },
  {
    name: "RetailPOS",
    subtitle: "Full-Stack Point-of-Sale & Accounting System",
    period: "2025",
    summary:
      "Led MERN stack POS architecture from scratch with Next.js frontend, atomic database transactions, secure REST APIs, and responsive dynamic admin tables.",
    tags: ["Next.js", "Node.js", "MongoDB", "Atomic Tx", "REST API"],
    badge: "ENTERPRISE POS",
  },
  {
    name: "2D Metaverse Office",
    subtitle: "Virtual Office with Real-Time Avatars, Chat & Video Calls",
    period: "Ongoing",
    summary:
      "Interactive 2D virtual workspace built with React, Phaser.js, and Konva.js. Features spatial avatar movement, Socket.io messaging, Jitsi Meet video calls, drag-and-drop map builder, Docker, and Redis scaling.",
    tags: ["Phaser.js", "Konva.js", "Socket.io", "Docker", "Redis"],
    badge: "METAVERSE",
  },
  {
    name: "SwitchX",
    subtitle: "Generative AI Social App (Discord-Style Feeds & Themes)",
    period: "2024 – 2025",
    summary:
      "Refactored and stabilized a React Native social platform (migrated from Flutter) featuring generative AI user-customized themes and feeds, production APK/release pipelines, and critical AI-code error resolution.",
    tags: ["React Native", "GenAI", "Release Eng", "Architecture"],
    badge: "GEN-AI SOCIAL",
  },
  {
    name: "ApnaDiscount",
    subtitle: "Live Coupon & Membership Platform (3 Mobile Apps)",
    period: "2022 – 2023",
    summary:
      "Upgraded UI and business logic across three iOS & Android React Native CLI apps for a live coupon ecosystem with Firebase Auth, real-time notifications, and Redux.",
    tags: ["React Native CLI", "Firebase", "Redux", "iOS & Android"],
    link: "/projects/apnaDiscount",
    badge: "3 RN APPS",
  },
];

const experiences = [
  {
    role: "React Native Developer (Senior)",
    company: "Pincodekart",
    period: "07/2025 – 03/2026",
    location: "Udaipur, Raj",
    tag: "5-APP ECOSYSTEM • 1M+ SCALE",
    bullets: [
      "Engineered MVP architecture of 5 interconnected React Native apps (Logistics, Vendor, CRM, Customer & Virtual Dukandar) scaling to 1M+ users via microservices & event-driven pipelines.",
      "Integrated live location tracking, QR payments, barcode scanning, real-time social chat (Zustand), and offline-first synchronization across iOS & Android.",
    ],
  },
  {
    role: "Full Stack React Native Developer",
    company: "Idea2Reality",
    period: "02/2025 – 06/2025",
    location: "Udaipur, India",
    tag: "POS + 3 WEB + 4 MOBILE APPS",
    bullets: [
      "Directed MERN stack development of enterprise POS systems from setup to launch with specialized accounting and inventory modules.",
      "Spearheaded frontend architecture for 3 web applications and initiated 4 React Native mobile apps with cross-platform compatibility.",
    ],
  },
  {
    role: "Full Stack Developer & Team Lead",
    company: "Krikal",
    period: "06/2021 – 02/2025",
    location: "Jaipur, India",
    tag: "PROMOTED INTERN → TEAM LEAD",
    bullets: [
      "Advanced from Intern (08/2021 – 05/2024) to Full Stack Developer & Team Lead managing end-to-end delivery of React Native apps, Next.js sites, and Node.js/MongoDB backends on AWS.",
      "Built real-time map APIs, WebSocket systems, AI chat platforms, coaching admission portals, and e-commerce admin dashboards.",
    ],
  },
];

const monitorBadges = [
  { code: "Re", name: "React.js", bg: "#0b2538", border: "#58c4dc", color: "#58c4dc" },
  { code: "Nx", name: "Next.js", bg: "#141414", border: "#ffffff", color: "#ffffff" },
  { code: "RN", name: "React Native", bg: "#082438", border: "#00d8ff", color: "#00d8ff" },
  { code: "Ts", name: "TypeScript", bg: "#10274a", border: "#3178c6", color: "#69a9ff" },
  { code: "Nd", name: "Node.js", bg: "#132a17", border: "#5fa04e", color: "#83cd29" },
  { code: "Aw", name: "AWS Cloud", bg: "#2b1d0c", border: "#ff9900", color: "#ff9900" },
  { code: "Dk", name: "Docker", bg: "#0c223b", border: "#2496ed", color: "#4db3ff" },
  { code: "Pg", name: "PostgreSQL", bg: "#142136", border: "#5c8dbc", color: "#8bb9e8" },
  { code: "Mg", name: "MongoDB", bg: "#0f2918", border: "#47a248", color: "#6ad36b" },
];

const extraSoftwarePills = [
  "Zustand",
  "Redux",
  "Tailwind CSS",
  "WebSockets / Socket.io",
  "IndexedDB & PWA",
  "Redis",
  "Frappe",
  "C# / Unity",
  "Three.js",
  "CI/CD",
  "Git & Jest",
  "REST & RBAC",
];

/* Deterministic QR matrix pattern (21x21 Version 1 QR layout) */
const qrMatrix = [
  [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0],
  [0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1],
  [1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0],
  [0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0],
  [1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1],
  [0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0],
  [1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1],
  [1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0],
  [1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0],
  [1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0],
  [1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1],
];

export default function ArbazCVPage() {
  const [posterMode, setPosterMode] = useState<"full" | "classic">("full");
  const [projectTab, setProjectTab] = useState<"cv" | "all">("cv");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const y = Math.max(0, Math.min(window.scrollY, maxScroll));
      const delta = y - lastY;

      if (y <= 30 && lastY > 30) {
        // Returned to the top of the page -> show menu by default
        setIsMenuOpen(true);
      } else if (y > 50 && delta > 5) {
        // Scrolled down -> hide menu into the button
        setIsMenuOpen(false);
      }

      lastY = y;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 1800);
  };

  return (
    <PosterPageWrapper>
      {/* Hidden SVG filters for authentic risograph/poster noise & paper texture */}
      <svg className="sr-only-svg" aria-hidden="true">
        <defs>
          <filter id="poster-noise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.82"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.085 0"
              in="noise"
              result="coloredNoise"
            />
            <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" />
          </filter>
        </defs>
      </svg>

      {/* Left Vertical Collapsible Dock (collapses into a floating button on scroll) */}
      <LeftVerticalDock
        className={`no-print ${isMenuOpen ? "is-expanded" : "is-collapsed"}`}
        aria-label="Resume controls"
      >
        <button
          type="button"
          className="dock-launcher-btn"
          aria-expanded={isMenuOpen}
          aria-controls="cv-vertical-dock-panel"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          title={isMenuOpen ? "Collapse menu" : "Open CV controls"}
        >
          <span className="launcher-icon" aria-hidden="true">
            <span className="icon-bars">☰</span>
            <span className="icon-close">✕</span>
          </span>
          <span className="launcher-label">
            {isMenuOpen ? "Hide" : "Menu"}
          </span>
        </button>

        <div
          id="cv-vertical-dock-panel"
          className="dock-panel"
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <span
            className="url-badge dock-item"
            style={{ "--item-idx": 0 } as React.CSSProperties}
          >
            /arbaz-cv
          </span>

          <Link
            href="/"
            className="back-pill dock-item"
            style={{ "--item-idx": 1 } as React.CSSProperties}
          >
            ← Portfolio
          </Link>

          <hr
            className="dock-divider dock-item"
            style={{ "--item-idx": 2 } as React.CSSProperties}
          />

          <button
            type="button"
            className={`mode-btn dock-item ${posterMode === "full" ? "active" : ""}`}
            style={{ "--item-idx": 3 } as React.CSSProperties}
            onClick={() => setPosterMode("full")}
          >
            ✦ Full CV Poster
          </button>
          <button
            type="button"
            className={`mode-btn dock-item ${posterMode === "classic" ? "active" : ""}`}
            style={{ "--item-idx": 4 } as React.CSSProperties}
            onClick={() => setPosterMode("classic")}
          >
            ▣ Classic 4-Card
          </button>

          <hr
            className="dock-divider dock-item"
            style={{ "--item-idx": 5 } as React.CSSProperties}
          />

          <a
            href="/pdf/Arbaz_Resume.pdf"
            download="Arbaz_Khan_CV.pdf"
            className="action-pill yellow dock-item"
            style={{ "--item-idx": 6 } as React.CSSProperties}
          >
            ⬇ Download PDF
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="action-pill dock-item"
            style={{ "--item-idx": 7 } as React.CSSProperties}
          >
            🖨 Print Poster
          </button>
        </div>
      </LeftVerticalDock>

      {copiedText && <CopyToast>{copiedText} copied to clipboard!</CopyToast>}

      {/* MAIN RETRO BENTO POSTER SHEET */}
      <PosterCanvas>
        {/* ================= ROW 1: ID CARD + HELLO WORLD ================= */}
        <TopRowGrid>
          {/* 1A: CREAM VINTAGE ID CARD */}
          <IdCard className="textured-card">
            <div className="id-photo-column">
              {/* Retro Daisy Flower Sticker */}
              <div className="flower-sticker" aria-hidden="true">
                <svg viewBox="0 0 120 120" className="flower-svg">
                  <g fill="#f5b418" stroke="#1e1e1e" strokeWidth="2.5">
                    <circle cx="60" cy="22" r="18" />
                    <circle cx="87" cy="33" r="18" />
                    <circle cx="98" cy="60" r="18" />
                    <circle cx="87" cy="87" r="18" />
                    <circle cx="60" cy="98" r="18" />
                    <circle cx="33" cy="87" r="18" />
                    <circle cx="22" cy="60" r="18" />
                    <circle cx="33" cy="33" r="18" />
                  </g>
                  <circle cx="60" cy="60" r="24" fill="#f5b418" />
                  {/* Hand-drawn cute smiley inside flower */}
                  <circle
                    cx="60"
                    cy="60"
                    r="16"
                    fill="none"
                    stroke="#d98200"
                    strokeWidth="2.2"
                  />
                  <circle cx="54" cy="56" r="2.2" fill="#d98200" />
                  <circle cx="66" cy="56" r="2.2" fill="#d98200" />
                  <path
                    d="M52 63 Q60 70 68 63"
                    fill="none"
                    stroke="#d98200"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Photo Frame with Sunset Gradient + Op-Art Spheres + Portrait */}
              <div className="photo-art-frame">
                <div className="halftone-overlay" />

                {/* Op-art striped spheres */}
                <div className="op-sphere sphere-top-right" aria-hidden="true" />
                <div className="op-sphere sphere-mid-left" aria-hidden="true" />
                <div className="op-sphere sphere-bottom-right" aria-hidden="true" />

                <div className="portrait-wrapper">
                  <Image
                    src="/me.png"
                    alt="Arbaz Khan — Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 180px, 210px"
                    className="portrait-img"
                    priority
                  />
                </div>
              </div>

              {/* "POSITIVE MINDED" Retro Sticker Badge */}
              <div className="positive-sticker">
                <span>POSITIVE</span>
                <span>MINDED</span>
              </div>
            </div>

            {/* Right side of ID card */}
            <div className="id-info-column">
              <div className="name-row">
                <h1 className="id-name">ARBAZ</h1>
                <div className="smiley-stamp" aria-hidden="true">
                  <svg viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#7b52ab"
                      strokeWidth="4.5"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="22"
                      fill="none"
                      stroke="#7b52ab"
                      strokeWidth="2"
                    />
                    <circle cx="23" cy="26" r="3.8" fill="#7b52ab" />
                    <circle cx="41" cy="26" r="3.8" fill="#7b52ab" />
                    <path
                      d="M20 35 C23 45, 41 45, 44 35"
                      fill="none"
                      stroke="#7b52ab"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="id-bio">
                Senior Full Stack Developer with over{" "}
                <strong>4.5 years of experience</strong> architecting
                enterprise-grade MERN &amp; React Native ecosystems, scalable
                AWS/Docker infrastructure, and offline-first real-time apps.
              </p>

              {/* 3-Column Metadata Table matching Zameel CV */}
              <div className="meta-table">
                <div className="meta-head">
                  <span>Role</span>
                  <span>Experience</span>
                  <span>Location</span>
                </div>
                <div className="meta-body">
                  <span>Full Stack Dev</span>
                  <span>4.5+ Yrs (MCA)</span>
                  <span>Udaipur, India</span>
                </div>
              </div>

              {/* Socials + Contact + QR Code */}
              <div className="socials-qr-row">
                <div className="social-links-grid">
                  <a
                    href="https://github.com/Arbaz2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="social-icon">GH</span>
                    <span className="social-label">Arbaz2000</span>
                  </a>

                  <a
                    href="https://www.instagram.com/_arbaz_khan007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="social-icon">IG</span>
                    <span className="social-label">_arbaz_khan007</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arbaz-khan-896646136/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                  >
                    <span className="social-icon">in</span>
                    <span className="social-label">Arbaz Khan</span>
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopy("khanarbaz27@outlook.com", "Email")
                    }
                    className="social-item interactive-btn"
                    title="Click to copy email"
                  >
                    <span className="social-icon">@</span>
                    <span className="social-label">
                      khanarbaz27@outlook.com
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopy("+91 7014895485", "Phone number")}
                    className="social-item interactive-btn"
                    title="Click to copy phone"
                  >
                    <span className="social-icon">☎</span>
                    <span className="social-label">+91 7014895485</span>
                  </button>

                  <Link href="/resources" className="social-item">
                    <span className="social-icon">⚡</span>
                    <span className="social-label">Dev Lab &amp; Tools</span>
                  </Link>
                </div>

                <a
                  href="https://github.com/Arbaz2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="qr-box"
                  title="Scan or click to open GitHub (@Arbaz2000)"
                  aria-label="GitHub QR Code"
                >
                  <svg viewBox="0 0 21 21" shapeRendering="crispEdges">
                    {qrMatrix.map((row, rIdx) =>
                      row.map((cell, cIdx) =>
                        cell ? (
                          <rect
                            key={`${rIdx}-${cIdx}`}
                            x={cIdx}
                            y={rIdx}
                            width={1}
                            height={1}
                            fill="#1b1b1b"
                          />
                        ) : null
                      )
                    )}
                  </svg>
                </a>
              </div>
            </div>
          </IdCard>

          {/* 1B: "HELLO WORLD" RAINBOW SPECTRUM FRAME CARD */}
          <HelloWorldCard className="textured-card">
            <div className="spectrum-inner">
              <div className="spectrum-grain" />
              <div className="hello-badge">FULL STACK • DEVOPS • MOBILE</div>
              <h2 className="hello-text">
                <span>Hello</span>
                <span>World</span>
              </h2>
            </div>
          </HelloWorldCard>
        </TopRowGrid>

        {/* ================= ROW 2: YELLOW EDUCATION CARD ================= */}
        <EducationCard className="textured-card">
          <div className="edu-content">
            <h2 className="section-giant-title">Education</h2>

            <div className="edu-list">
              <div className="edu-item">
                <div className="edu-left">
                  <h3 className="edu-school">
                    Mohanlal Sukhadia University (MLSU)
                  </h3>
                  <p className="edu-degree">
                    MCA — Master of Computer Applications
                  </p>
                  <span className="edu-sub">
                    Postgraduation (PG) • Udaipur, Rajasthan
                  </span>
                </div>
                <div className="edu-year">2022 &nbsp;-&nbsp; 2024</div>
              </div>

              <div className="edu-item">
                <div className="edu-left">
                  <h3 className="edu-school">
                    Mohanlal Sukhadia University (MLSU)
                  </h3>
                  <p className="edu-degree">B.Sc. Computer Science</p>
                  <span className="edu-sub">
                    Undergraduation (UG) • Udaipur, Rajasthan
                  </span>
                </div>
                <div className="edu-year">2019 &nbsp;-&nbsp; 2022</div>
              </div>
            </div>
          </div>

          {/* Isometric Pixel-Art Retro CRT Computer with Rainbow CD-ROM on top */}
          <div className="iso-pc-illustration" aria-hidden="true">
            <svg viewBox="0 0 360 320" shapeRendering="crispEdges">
              {/* Drop shadow */}
              <polygon
                points="60,255 235,312 340,255 190,200"
                fill="rgba(0,0,0,0.22)"
              />
              {/* Keyboard sticking out to bottom-left */}
              <polygon
                points="20,210 95,242 135,218 60,188"
                fill="#d6d2c8"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              <polygon
                points="32,208 92,233 120,216 60,193"
                fill="#9e9a90"
              />
              {/* Desktop Horizontal Base Case */}
              <polygon
                points="95,225 245,292 330,238 180,175"
                fill="#dcd8ce"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              <polygon
                points="95,225 95,260 245,315 245,292"
                fill="#b8b4aa"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              <polygon
                points="245,292 245,315 330,262 330,238"
                fill="#99958c"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              {/* Floppy slot & LED on base */}
              <line
                x1="120"
                y1="250"
                x2="175"
                y2="274"
                stroke="#3a3a3a"
                strokeWidth="4"
              />
              <rect x="215" y="286" width="8" height="6" fill="#27c93f" />

              {/* Isometric CRT Monitor Rear Housing */}
              <polygon
                points="170,48 310,100 310,205 170,155"
                fill="#9e9a91"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              {/* Isometric CRT Monitor Top Surface */}
              <polygon
                points="115,62 245,112 310,85 180,38"
                fill="#e2dfd7"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              {/* Isometric CRT Monitor Right Side */}
              <polygon
                points="245,112 245,235 310,198 310,85"
                fill="#a8a49b"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              {/* Isometric CRT Monitor Front Bezel */}
              <polygon
                points="115,62 115,185 245,235 245,112"
                fill="#d4d0c7"
                stroke="#2b2b2b"
                strokeWidth="3"
              />
              {/* Blue BSOD / Terminal Screen */}
              <polygon
                points="128,82 128,168 230,208 230,122"
                fill="#2219b8"
                stroke="#18127a"
                strokeWidth="3"
              />
              {/* Pixel terminal lines inside blue screen */}
              <line
                x1="138"
                y1="106"
                x2="178"
                y2="122"
                stroke="#ffffff"
                strokeWidth="3"
              />
              <line
                x1="138"
                y1="118"
                x2="210"
                y2="146"
                stroke="#8be9fd"
                strokeWidth="2.5"
              />
              <line
                x1="138"
                y1="130"
                x2="198"
                y2="154"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <line
                x1="138"
                y1="142"
                x2="216"
                y2="172"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <line
                x1="138"
                y1="154"
                x2="185"
                y2="173"
                stroke="#50fa7b"
                strokeWidth="2.5"
              />

              {/* Shiny Iridescent Rainbow CD-ROM on top of monitor */}
              <g transform="translate(155, 25)">
                <ellipse
                  cx="55"
                  cy="32"
                  rx="48"
                  ry="24"
                  fill="#e8e8e8"
                  stroke="#1f1f1f"
                  strokeWidth="3.5"
                />
                {/* Rainbow wedges */}
                <path d="M55,32 L16,18 A48,24 0 0,1 45,8 Z" fill="#00d2ff" />
                <path d="M55,32 L45,8 A48,24 0 0,1 75,10 Z" fill="#2ecc71" />
                <path d="M55,32 L75,10 A48,24 0 0,1 98,22 Z" fill="#ffe600" />
                <path d="M55,32 L95,45 A48,24 0 0,1 65,55 Z" fill="#00d2ff" />
                <path d="M55,32 L65,55 A48,24 0 0,1 35,53 Z" fill="#ff4fa3" />
                {/* Inner hole of CD */}
                <ellipse
                  cx="55"
                  cy="32"
                  rx="13"
                  ry="7"
                  fill="#d4d0c7"
                  stroke="#1f1f1f"
                  strokeWidth="3"
                />
              </g>
            </svg>
          </div>
        </EducationCard>

        {/* ================= ROW 3: ORANGE CORE SKILLS + GREEN SOFTWARE SKILL ================= */}
        <SkillsRowGrid>
          {/* 3A: ORANGE ARCHITECTURE & DEV SKILLS CARD */}
          <OrangeSkillsCard className="textured-card">
            <div className="orange-top-row">
              <h2 className="skills-big-title">
                <span>System</span>
                <span>Skills</span>
              </h2>

              {/* Pixel-Art Framed Mona Lisa Stamp */}
              <div className="pixel-monalisa-frame" aria-hidden="true">
                <svg viewBox="0 0 16 18" shapeRendering="crispEdges">
                  {/* Ornate Gold Pixel Frame */}
                  <rect x="0" y="0" width="16" height="18" fill="#1b1b1b" />
                  <rect x="1" y="1" width="14" height="16" fill="#e6a122" />
                  <rect x="2" y="2" width="12" height="14" fill="#fbe078" />
                  <rect x="3" y="3" width="10" height="12" fill="#2c3531" />
                  {/* Pixel Portrait Inside */}
                  <rect x="5" y="4" width="6" height="3" fill="#181818" />
                  <rect x="6" y="5" width="4" height="4" fill="#f3d4b6" />
                  <rect x="6" y="6" width="1" height="1" fill="#181818" />
                  <rect x="9" y="6" width="1" height="1" fill="#181818" />
                  <rect x="7" y="8" width="2" height="1" fill="#c78d6b" />
                  <rect x="5" y="7" width="1" height="5" fill="#181818" />
                  <rect x="10" y="7" width="1" height="5" fill="#181818" />
                  <rect x="4" y="10" width="8" height="5" fill="#3b2618" />
                  <rect x="6" y="10" width="4" height="2" fill="#d9b38c" />
                  <rect x="6" y="13" width="4" height="2" fill="#e5c19a" />
                </svg>
              </div>
            </div>

            {/* 3-Column Specialties Grid matching reference image */}
            <div className="specialty-columns">
              <div>
                <p>MERN Architecture</p>
                <p>React Native (CLI/Expo)</p>
              </div>
              <div>
                <p>Microservices &amp; AWS</p>
                <p>Offline-First &amp; Sync</p>
              </div>
              <div>
                <p>WebSockets / RT</p>
                <p>POS &amp; ERP Systems</p>
              </div>
            </div>

            <p className="orange-bio">
              I excel in architecting enterprise MERN applications, 1M+ scale
              React Native mobile ecosystems, Docker/AWS cloud pipelines,
              offline-first IndexedDB/PWA engines, and real-time WebSocket
              synchronization.
            </p>

            <div className="orange-bottom-area">
              <div className="languages-box">
                <h3 className="lang-title">Languages</h3>
                <div className="lang-list">
                  <span>Hindi</span>
                  <span>English</span>
                  <span>TypeScript</span>
                  <span>C#</span>
                </div>
              </div>

              {/* Vintage Dark Terminal PC Illustration */}
              <div className="retro-terminal-pc" aria-hidden="true">
                <svg viewBox="0 0 260 200">
                  {/* Shadow */}
                  <ellipse
                    cx="135"
                    cy="182"
                    rx="115"
                    ry="12"
                    fill="rgba(0,0,0,0.28)"
                  />
                  {/* System Base Unit */}
                  <polygon
                    points="65,125 225,125 240,152 55,152"
                    fill="#b86b35"
                    stroke="#232323"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="55"
                    y="148"
                    width="185"
                    height="16"
                    fill="#8c4c22"
                    stroke="#232323"
                    strokeWidth="2.5"
                  />
                  {/* CRT Monitor Shell */}
                  <rect
                    x="82"
                    y="22"
                    width="126"
                    height="98"
                    rx="12"
                    fill="#6e4b3a"
                    stroke="#232323"
                    strokeWidth="3"
                  />
                  <rect
                    x="90"
                    y="30"
                    width="110"
                    height="78"
                    rx="8"
                    fill="#182628"
                    stroke="#232323"
                    strokeWidth="2.5"
                  />
                  {/* Glowing Cyan/Green Wireframe UI inside CRT */}
                  <rect
                    x="98"
                    y="38"
                    width="52"
                    height="36"
                    fill="none"
                    stroke="#4fd1c5"
                    strokeWidth="1.8"
                  />
                  <line
                    x1="98"
                    y1="48"
                    x2="150"
                    y2="48"
                    stroke="#4fd1c5"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="156"
                    y="38"
                    width="34"
                    height="60"
                    fill="none"
                    stroke="#68d391"
                    strokeWidth="1.8"
                  />
                  <line
                    x1="98"
                    y1="82"
                    x2="150"
                    y2="82"
                    stroke="#68d391"
                    strokeWidth="2"
                  />
                  <line
                    x1="98"
                    y1="90"
                    x2="138"
                    y2="90"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  {/* Monitor Stand */}
                  <polygon
                    points="122,120 168,120 178,132 112,132"
                    fill="#523729"
                    stroke="#232323"
                    strokeWidth="2.5"
                  />
                  {/* Dark Retro Keyboard */}
                  <polygon
                    points="35,155 195,152 215,182 15,186"
                    fill="#2b2625"
                    stroke="#141414"
                    strokeWidth="2.5"
                  />
                  {/* Key Matrix Lines */}
                  <line
                    x1="40"
                    y1="163"
                    x2="192"
                    y2="160"
                    stroke="#59504d"
                    strokeWidth="3"
                    strokeDasharray="6 3"
                  />
                  <line
                    x1="34"
                    y1="170"
                    x2="198"
                    y2="167"
                    stroke="#59504d"
                    strokeWidth="3"
                    strokeDasharray="6 3"
                  />
                  <line
                    x1="28"
                    y1="177"
                    x2="204"
                    y2="174"
                    stroke="#59504d"
                    strokeWidth="3"
                    strokeDasharray="8 3"
                  />
                </svg>
              </div>
            </div>
          </OrangeSkillsCard>

          {/* 3B: SAGE GREEN SOFTWARE SKILL CARD */}
          <GreenSoftwareCard className="textured-card">
            <div className="green-top-row">
              {/* Pixel-Art Stationery Cup (Pencil, Brush, Scissors) */}
              <div className="pixel-cup-icon" aria-hidden="true">
                <svg viewBox="0 0 64 64" shapeRendering="crispEdges">
                  {/* Yellow Pencil */}
                  <rect x="12" y="8" width="8" height="26" fill="#ffd13b" stroke="#181818" strokeWidth="2.5" />
                  <rect x="12" y="4" width="8" height="5" fill="#ff8da1" stroke="#181818" strokeWidth="2" />
                  {/* Paintbrush */}
                  <rect x="26" y="12" width="6" height="22" fill="#c67d3b" stroke="#181818" strokeWidth="2.5" />
                  <polygon points="24,12 34,12 31,3 27,3" fill="#9b4dff" stroke="#181818" strokeWidth="2" />
                  {/* Scissors */}
                  <circle cx="46" cy="16" r="6" fill="none" stroke="#181818" strokeWidth="3" />
                  <circle cx="54" cy="24" r="6" fill="none" stroke="#181818" strokeWidth="3" />
                  <line x1="36" y1="34" x2="46" y2="21" stroke="#dcdcdc" strokeWidth="4" />
                  {/* Blue Pixel Cup */}
                  <rect x="12" y="32" width="32" height="26" rx="3" fill="#2cc5d6" stroke="#181818" strokeWidth="3" />
                  <rect x="16" y="36" width="6" height="18" fill="#7ce8f5" />
                </svg>
              </div>

              <h2 className="software-big-title">
                <span>Software</span>
                <span>Skill</span>
              </h2>
            </div>

            {/* Vintage Beige Desktop PC with Windows XP Bliss Wallpaper & Tech Icons */}
            <div className="bliss-pc-showcase">
              {/* CRT Monitor Outer Frame */}
              <div className="crt-monitor-outer">
                <div className="crt-screen-bliss">
                  <div className="bliss-sky" />
                  <div className="bliss-hill" />

                  {/* 3x3 App Icon Grid inside the Monitor Screen */}
                  <div className="monitor-icons-grid">
                    {monitorBadges.map((item) => (
                      <div
                        key={item.code}
                        className="monitor-app-icon"
                        style={{
                          background: item.bg,
                          borderColor: item.border,
                          color: item.color,
                        }}
                        title={item.name}
                      >
                        <span className="icon-code">{item.code}</span>
                        <span className="icon-label">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="crt-power-row">
                  <span className="brand-mark">ARBAZ-OS v4.5</span>
                  <span className="power-led" />
                </div>
              </div>

              {/* Monitor Neck */}
              <div className="crt-neck" />

              {/* Beige Desktop CPU Case */}
              <div className="cpu-deck">
                <div className="cpu-vents">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="cpu-drives">
                  <div className="floppy-slot" />
                  <div className="floppy-slot" />
                </div>
              </div>

              {/* Perspective Mechanical Keyboard */}
              <div className="retro-keyboard">
                <div className="key-row">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span key={i} className="key-cap" />
                  ))}
                </div>
                <div className="key-row">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <span key={i} className="key-cap" />
                  ))}
                </div>
                <div className="key-row">
                  <span className="key-cap wide" />
                  <span className="key-cap spacebar" />
                  <span className="key-cap wide" />
                </div>
              </div>

              {/* Extra Tech Stack Pills from CV + Portfolio */}
              <div className="extra-tech-cloud">
                {extraSoftwarePills.map((pill) => (
                  <span key={pill} className="tech-mini-pill">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </GreenSoftwareCard>
        </SkillsRowGrid>

        {/* ================= ROW 4 & 5: EXPERIENCE + ALL PROJECTS (FULL CV POSTER MODE) ================= */}
        {posterMode === "full" && (
          <>
            {/* ROW 4: PROFESSIONAL EXPERIENCE CARD */}
            <ExperienceCard className="textured-card">
              <div className="exp-header">
                <div>
                  <span className="zine-kicker">CAREER TIMELINE • 2021 – 2026</span>
                  <h2 className="section-giant-title">Experience</h2>
                </div>
                <div className="exp-stamp">4.5+ YRS EXP</div>
              </div>

              <div className="exp-timeline-grid">
                {experiences.map((exp) => (
                  <article key={exp.company + exp.period} className="exp-card-item">
                    <div className="exp-meta-top">
                      <span className="exp-period-pill">{exp.period}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company-row">
                      <span className="exp-company">@ {exp.company}</span>
                      <span className="exp-tag">{exp.tag}</span>
                    </div>
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </ExperienceCard>

            {/* ROW 5: PROJECTS BENTO CARD (CV HIGHLIGHTS + ALL PORTFOLIO PROJECTS) */}
            <ProjectsPosterCard className="textured-card">
              <div className="proj-header">
                <div>
                  <span className="zine-kicker">
                    PRODUCTION ECOSYSTEMS &amp; CLIENT WORK
                  </span>
                  <h2 className="section-giant-title">Projects</h2>
                </div>

                <div className="proj-tabs no-print">
                  <button
                    type="button"
                    className={`proj-tab ${projectTab === "cv" ? "active" : ""}`}
                    onClick={() => setProjectTab("cv")}
                  >
                    ★ CV Flagships ({cvHighlightProjects.length})
                  </button>
                  <button
                    type="button"
                    className={`proj-tab ${projectTab === "all" ? "active" : ""}`}
                    onClick={() => setProjectTab("all")}
                  >
                    ⚡ All Portfolio + CV ({cvHighlightProjects.length + portfolioProjects.length})
                  </button>
                </div>
              </div>

              <div className="proj-bento-grid">
                {cvHighlightProjects.map((proj) => (
                  <article key={proj.name} className="proj-zine-card flagship">
                    <div className="proj-card-top">
                      <span className="proj-badge">{proj.badge}</span>
                      <span className="proj-period">{proj.period}</span>
                    </div>
                    <h3 className="proj-name">
                      {proj.link ? (
                        <Link href={proj.link}>{proj.name} ↗</Link>
                      ) : (
                        proj.name
                      )}
                    </h3>
                    <p className="proj-subtitle">{proj.subtitle}</p>
                    <p className="proj-summary">{proj.summary}</p>
                    <div className="proj-tags">
                      {proj.tags.map((t) => (
                        <span key={t} className="proj-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}

                {projectTab === "all" &&
                  portfolioProjects
                    .filter(
                      (p) =>
                        p.name !== "Pikkro" && p.name !== "ApnaDiscount"
                    )
                    .map((p) => (
                      <article key={p.name} className="proj-zine-card">
                        <div className="proj-card-top">
                          <span className="proj-badge secondary">PORTFOLIO</span>
                          <span className="proj-period">{p.year}</span>
                        </div>
                        <h3 className="proj-name">
                          <Link href={p.link}>{p.name} ↗</Link>
                        </h3>
                        <p className="proj-summary">{p.description}</p>
                        <div className="proj-tags">
                          {p.techStack.map((t) => (
                            <span key={t} className="proj-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </article>
                    ))}
              </div>
            </ProjectsPosterCard>
          </>
        )}
      </PosterCanvas>
    </PosterPageWrapper>
  );
}

/* ============================================================================
 * STYLED COMPONENTS — RETRO ZINE / BENTO POSTER SYSTEM
 * ============================================================================ */

const PosterPageWrapper = styled.div`
  min-height: 100dvh;
  background-color: #151716;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 0
    ),
    radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
  padding: 20px 16px 48px;
  color: #1f201f;
  font-family: "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont,
    sans-serif;

  .sr-only-svg {
    position: absolute;
    inline-size: 0;
    block-size: 0;
    pointer-events: none;
  }

  /* Apply balanced wrapping to short headings and pretty wrapping to body copy */
  h1,
  h2,
  h3 {
    text-wrap: balance;
  }

  p,
  li {
    text-wrap: pretty;
  }

  /* Subtle organic weathering texture using CSS mask + radial speckle overlay */
  .textured-card {
    position: relative;
    isolation: isolate;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45),
      inset 0 0 0 1.5px rgba(25, 25, 25, 0.18);

    /* Subtle noise mask so edges & surface have physical poster print feel */
    -webkit-mask-image: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 1) 99%,
      rgba(0, 0, 0, 0.96) 100%
    );
    mask-image: radial-gradient(
      circle at 50% 50%,
      rgba(0, 0, 0, 1) 99%,
      rgba(0, 0, 0, 0.96) 100%
    );
  }

  @supports (not (mask-image: radial-gradient(#000, #000))) and
    (not (-webkit-mask-image: radial-gradient(#000, #000))) {
    .textured-card {
      background-blend-mode: multiply;
    }
  }

  .textured-card::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    opacity: 0.22;
    mix-blend-mode: overlay;
    background-image: radial-gradient(#111 0.65px, transparent 0.65px),
      radial-gradient(#fff 0.5px, transparent 0.5px);
    background-size: 6px 6px, 9px 9px;
    background-position: 0 0, 3px 3px;
    border-radius: inherit;
  }

  @media print {
    background: #151716 !important;
    padding: 0;
    .no-print {
      display: none !important;
    }
  }
`;

const LeftVerticalDock = styled.aside`
  --spring-easing: linear(
    0,
    0.009,
    0.035 2.1%,
    0.141,
    0.281 6.7%,
    0.723 12.9%,
    0.938 16.7%,
    1.017,
    1.077,
    1.121,
    1.149 24.3%,
    1.159,
    1.163,
    1.161,
    1.154 29.9%,
    1.129 32.8%,
    1.051 39.6%,
    1.017 43.1%,
    0.991,
    0.977 51%,
    0.974 53.8%,
    0.975 57.1%,
    0.997 69.8%,
    1.003 76.9%,
    1
  );

  position: fixed;
  inset-block-start: 22px;
  inset-inline-start: 18px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  pointer-events: none;

  .dock-launcher-btn {
    pointer-events: auto;
    display: inline-flex;
    align-items: safe center;
    justify-content: center;
    gap: 8px;
    block-size: 42px;
    padding: 0 16px;
    border-radius: 999px;
    border: 2.5px solid #181818;
    background: #f3c623;
    color: #171817;
    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 4px 4px 0 #000000;
    /* Base identity transforms so stacking context never shifts on hover */
    translate: 0 0;
    scale: 1;
    rotate: 0deg;
    transition:
      translate 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      scale 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      background-color 0.2s ease,
      box-shadow 0.2s ease;
    transition-timing-function: var(--spring-easing);

    &:hover {
      translate: 0 -2px;
      scale: 1.04;
      background: #ffd83b;
      box-shadow: 6px 6px 0 #000000;
    }

    &:active {
      translate: 1px 1px;
      scale: 0.97;
      box-shadow: 2px 2px 0 #000000;
    }

    .launcher-icon {
      position: relative;
      inline-size: 16px;
      block-size: 16px;
      display: inline-grid;
      place-items: center;
      font-size: 14px;
      line-height: 1;
    }

    .icon-bars,
    .icon-close {
      grid-area: 1 / 1;
      translate: 0 0;
      scale: 1;
      rotate: 0deg;
      transition:
        opacity 0.22s ease-out,
        rotate 0.38s cubic-bezier(0.22, 1, 0.36, 1),
        scale 0.38s cubic-bezier(0.22, 1, 0.36, 1);
      transition-timing-function: ease-out, var(--spring-easing),
        var(--spring-easing);
    }
  }

  &.is-expanded .dock-launcher-btn {
    .icon-bars {
      opacity: 0;
      rotate: 90deg;
      scale: 0.5;
    }
    .icon-close {
      opacity: 1;
      rotate: 0deg;
      scale: 1;
    }
  }

  &.is-collapsed .dock-launcher-btn {
    .icon-bars {
      opacity: 1;
      rotate: 0deg;
      scale: 1;
    }
    .icon-close {
      opacity: 0;
      rotate: -90deg;
      scale: 0.5;
    }
  }

  /* Pure compositor-animated vertical card (no width/height layout thrashing) */
  .dock-panel {
    pointer-events: auto;
    margin-block-start: 10px;
    inline-size: 184px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    background: rgba(26, 29, 28, 0.96);
    backdrop-filter: blur(10px);
    border: 2.5px solid #3c4240;
    border-radius: 20px;
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.65);
    transform-origin: top left;
    will-change: transform, opacity;

    /* Identity transforms in open state */
    opacity: 1;
    translate: 0 0;
    scale: 1;
    visibility: visible;

    /* Fallback cubic-bezier first, then linear() spring for transform properties;
       keep opacity on ease-out to prevent bounce flicker */
    transition:
      translate 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      scale 0.45s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.22s ease-out,
      visibility 0s linear 0s;
    transition-timing-function:
      var(--spring-easing),
      var(--spring-easing),
      ease-out,
      linear;
  }

  .dock-item {
    opacity: 1;
    translate: 0 0;
    transition:
      translate 0.38s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.2s ease-out,
      background-color 0.15s ease;
    transition-timing-function: var(--spring-easing), ease-out, ease;
    transition-delay: calc(var(--item-idx, 0) * 18ms);
  }

  &.is-collapsed .dock-panel {
    opacity: 0;
    translate: -10px -12px;
    scale: 0.82;
    pointer-events: none;
    visibility: hidden;
    transition:
      translate 0.32s cubic-bezier(0.32, 0, 0.67, 0),
      scale 0.32s cubic-bezier(0.32, 0, 0.67, 0),
      opacity 0.18s ease-in,
      visibility 0s linear 0.32s;
  }

  &.is-collapsed .dock-item {
    opacity: 0;
    translate: -8px -4px;
    transition-delay: 0ms;
  }

  .dock-divider {
    border: none;
    border-top: 1.5px dashed #3b403e;
    margin: 2px 0;
  }

  .back-pill,
  .action-pill,
  .mode-btn {
    font-size: 12.5px;
    font-weight: 800;
    padding: 8px 12px;
    border-radius: 12px;
    border: 1.5px solid #494f4c;
    background: #2d3130;
    color: #f3efe6;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      translate: 3px 0;
      background: #3b403e;
    }
  }

  .mode-btn.active {
    background: #f3c623;
    color: #191a19;
    border-color: #f3c623;
  }

  .action-pill.yellow {
    background: #e47921;
    color: #141414;
    border-color: #141414;
  }

  .url-badge {
    font-family: var(--font-geist-mono), monospace;
    font-size: 11.5px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 8px;
    background: #141615;
    color: #f3c623;
    border: 1px solid #353937;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .dock-launcher-btn,
    .icon-bars,
    .icon-close,
    .dock-panel,
    .dock-item {
      transition: opacity 0.12s ease-out !important;
      transition-delay: 0ms !important;
      translate: 0 0 !important;
      scale: 1 !important;
      rotate: 0deg !important;
    }
  }

  @media (max-width: 768px) {
    inset-block-start: 12px;
    inset-inline-start: 12px;
  }
`;

const CopyToast = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  background: #f3c623;
  color: #181818;
  font-weight: 900;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 3px solid #181818;
  box-shadow: 6px 6px 0 #000;
`;

const PosterCanvas = styled.main`
  max-width: 1060px;
  margin: 0 auto;
  padding: 22px;
  background: #1a1c1b;
  border-radius: 28px;
  border: 3px solid #2c302e;
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 640px) {
    padding: 12px;
    gap: 14px;
    border-radius: 18px;
  }
`;

/* ================= ROW 1: ID CARD + HELLO WORLD ================= */
const TopRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1.85fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const IdCard = styled.section`
  background: #ece7dd;
  border-radius: 26px;
  padding: 22px 24px;
  display: grid;
  grid-template-columns: 205px 1fr;
  gap: 24px;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 18px;
  }

  .id-photo-column {
    position: relative;
    inline-size: 205px;
    block-size: 255px;
    margin: 0 auto;
  }

  .flower-sticker {
    position: absolute;
    top: -18px;
    left: -18px;
    inline-size: 86px;
    block-size: 86px;
    z-index: 5;
    transform: rotate(-12deg);
    filter: drop-shadow(2px 3px 0 rgba(0, 0, 0, 0.25));
  }

  .photo-art-frame {
    position: relative;
    inline-size: 100%;
    block-size: 235px;
    margin-top: 10px;
    border-radius: 18px;
    overflow: clip;
    background: linear-gradient(
      145deg,
      #ff7b1c 0%,
      #f24679 52%,
      #b84bf2 100%
    );
    border: 2.5px solid #222;
  }

  .halftone-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.24;
    background-image: radial-gradient(#000 1.2px, transparent 1.2px);
    background-size: 5px 5px;
  }

  /* Retro Op-Art Striped Spheres */
  .op-sphere {
    position: absolute;
    border-radius: 50%;
    background: repeating-linear-gradient(
      -35deg,
      #161616 0px,
      #161616 4px,
      #f7f4ee 4px,
      #f7f4ee 8px
    );
    border: 2px solid #161616;
    box-shadow: inset -6px -6px 12px rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  .sphere-top-right {
    inline-size: 36px;
    block-size: 36px;
    top: 22px;
    right: 16px;
  }

  .sphere-mid-left {
    inline-size: 58px;
    block-size: 58px;
    top: 95px;
    left: -18px;
  }

  .sphere-bottom-right {
    inline-size: 82px;
    block-size: 82px;
    bottom: -14px;
    right: -18px;
  }

  .portrait-wrapper {
    position: absolute;
    inset: 10px 8px 0 8px;
    z-index: 2;
  }

  .portrait-img {
    object-fit: cover;
    object-position: top center;
    filter: grayscale(100%) contrast(1.22) brightness(0.97);
    mix-blend-mode: normal;
  }

  .positive-sticker {
    position: absolute;
    bottom: 2px;
    right: -8px;
    z-index: 6;
    background: #ece7dd;
    border: 2.5px solid #5d43a8;
    border-radius: 8px;
    padding: 3px 9px;
    transform: rotate(-4deg);
    box-shadow: 2px 3px 0 #232323;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.95;

    span {
      font-size: 11px;
      font-weight: 900;
      font-style: italic;
      letter-spacing: 0.5px;
      color: #5d43a8;
    }
  }

  .id-info-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-inline-size: 0;
  }

  .name-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .id-name {
    margin: 0;
    font-size: clamp(2.5rem, 5vw, 3.85rem);
    font-weight: 900;
    font-style: italic;
    letter-spacing: -2px;
    line-height: 0.92;
    color: #252625;
    text-transform: uppercase;
  }

  .smiley-stamp {
    inline-size: 52px;
    block-size: 52px;
    flex-shrink: 0;
  }

  .id-bio {
    margin: 0;
    font-size: 12.5px;
    font-weight: 700;
    line-height: 1.38;
    color: #2a2a29;
  }

  .meta-table {
    border-top: 2px solid #262626;
    border-bottom: 2px solid #262626;
    margin: 2px 0;

    .meta-head,
    .meta-body {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 6px 2px;
      font-size: 11.5px;
      font-weight: 800;
      color: #202020;
    }

    .meta-head {
      border-bottom: 1.8px solid #262626;
      opacity: 0.85;
    }

    .meta-body span:last-child,
    .meta-head span:last-child {
      text-align: right;
    }

    .meta-body span:nth-child(2),
    .meta-head span:nth-child(2) {
      text-align: center;
    }
  }

  .socials-qr-row {
    display: grid;
    grid-template-columns: 1fr 82px;
    gap: 12px;
    align-items: center;
    margin-top: 2px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .social-links-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 10px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .social-item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #202020;
    font-size: 11.5px;
    font-weight: 800;
    min-inline-size: 0;
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;

    &:hover .social-icon {
      background: #7b52ab;
      transform: scale(1.06);
    }
  }

  .social-icon {
    inline-size: 24px;
    block-size: 24px;
    border-radius: 6px;
    background: #232323;
    color: #f4efe6;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 900;
    flex-shrink: 0;
    transition: all 0.15s ease;
  }

  .social-label {
    overflow: clip;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .qr-box {
    inline-size: 80px;
    block-size: 80px;
    padding: 4px;
    background: #ece7dd;
    border: 2px solid #232323;
    border-radius: 6px;
    display: block;
    justify-self: end;

    svg {
      inline-size: 100%;
      block-size: 100%;
      display: block;
    }
  }
`;

const HelloWorldCard = styled.section`
  background: #d7d1c6;
  padding: 18px;
  border-radius: 6px;
  display: flex;
  min-block-size: 295px;

  .spectrum-inner {
    position: relative;
    flex: 1;
    border: 2px solid #2b2b2b;
    background: linear-gradient(
      90deg,
      #ff1e1e 0%,
      #ff8800 17%,
      #ffe600 34%,
      #1fd14b 51%,
      #00c4ff 68%,
      #3424c9 84%,
      #d92b9a 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 18px 12px;
    overflow: clip;
  }

  .spectrum-grain {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.12) 0px,
      rgba(0, 0, 0, 0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
  }

  .hello-badge {
    position: relative;
    z-index: 1;
    align-self: flex-start;
    background: rgba(24, 24, 24, 0.88);
    color: #f5efe6;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1.2px;
    padding: 4px 9px;
    border-radius: 4px;
  }

  .hello-text {
    position: relative;
    z-index: 1;
    margin: auto 0 0 0;
    display: flex;
    flex-direction: column;
    font-size: clamp(3.4rem, 5.8vw, 4.9rem);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -3px;
    color: #212422;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  }
`;

/* ================= ROW 2: YELLOW EDUCATION CARD ================= */
const EducationCard = styled.section`
  background: #f3c623;
  border-radius: 32px;
  padding: 28px 34px 32px;
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 20px;
  align-items: center;
  overflow: visible;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 24px 22px;
  }

  .section-giant-title {
    margin: 0 0 22px 0;
    font-size: clamp(3.2rem, 7.5vw, 5.8rem);
    font-weight: 900;
    letter-spacing: -3.5px;
    line-height: 0.9;
    color: #2c2e30;
  }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .edu-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: end;
    border-bottom: 2px dashed rgba(44, 46, 48, 0.25);
    padding-bottom: 14px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
      gap: 6px;
    }
  }

  .edu-school {
    margin: 0 0 4px 0;
    font-size: clamp(1.35rem, 2.5vw, 1.95rem);
    font-weight: 900;
    letter-spacing: -0.8px;
    line-height: 1.1;
    color: #2c2e30;
  }

  .edu-degree {
    margin: 0;
    font-size: 15px;
    font-weight: 800;
    color: #2c2e30;
  }

  .edu-sub {
    display: block;
    font-size: 11.5px;
    font-weight: 700;
    color: #3f4142;
    margin-top: 2px;
  }

  .edu-year {
    font-size: 16px;
    font-weight: 900;
    color: #2c2e30;
    white-space: nowrap;
  }

  .iso-pc-illustration {
    position: relative;
    z-index: 4;
    inline-size: 100%;
    max-inline-size: 350px;
    justify-self: end;
    margin-bottom: -44px;
    margin-top: -12px;
    filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.25));

    @media (max-width: 860px) {
      justify-self: center;
      margin-bottom: -10px;
      max-inline-size: 280px;
    }

    svg {
      inline-size: 100%;
      block-size: auto;
      display: block;
    }
  }
`;

/* ================= ROW 3: ORANGE + GREEN SKILLS CARDS ================= */
const SkillsRowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const OrangeSkillsCard = styled.section`
  background: #e47921;
  border-radius: 14px;
  padding: 26px 26px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;

  .orange-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .skills-big-title {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-size: clamp(2.8rem, 5vw, 4.1rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -2.5px;
    color: #2c2e2e;
  }

  .pixel-monalisa-frame {
    inline-size: 74px;
    block-size: 84px;
    flex-shrink: 0;
    filter: drop-shadow(4px 4px 0 rgba(0, 0, 0, 0.35));

    svg {
      inline-size: 100%;
      block-size: 100%;
      display: block;
    }
  }

  .specialty-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    font-size: 12.5px;
    font-weight: 800;
    color: #232424;

    p {
      margin: 0 0 3px 0;
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .orange-bio {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.42;
    color: #2b2622;
    max-inline-size: 78%;

    @media (max-width: 520px) {
      max-inline-size: 100%;
    }
  }

  .orange-bottom-area {
    display: grid;
    grid-template-columns: 1fr 210px;
    align-items: end;
    gap: 10px;
    margin-top: auto;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .lang-title {
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: -0.6px;
    color: #282929;
  }

  .lang-list {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    font-size: 12.5px;
    font-weight: 800;
    color: #282929;
  }

  .retro-terminal-pc {
    inline-size: 215px;
    justify-self: end;
    margin-bottom: -10px;

    svg {
      inline-size: 100%;
      block-size: auto;
      display: block;
    }
  }
`;

const GreenSoftwareCard = styled.section`
  background: #689b54;
  border-radius: 14px;
  padding: 26px 26px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;

  .green-top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .pixel-cup-icon {
    inline-size: 72px;
    block-size: 72px;
    flex-shrink: 0;
    filter: drop-shadow(3px 3px 0 rgba(0, 0, 0, 0.3));

    svg {
      inline-size: 100%;
      block-size: 100%;
      display: block;
    }
  }

  .software-big-title {
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: clamp(2.6rem, 4.8vw, 3.85rem);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -2px;
    color: #262925;
  }

  .bliss-pc-showcase {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
  }

  .crt-monitor-outer {
    inline-size: 250px;
    background: #d7c7a9;
    border: 3px solid #2b2823;
    border-radius: 12px;
    padding: 12px 12px 8px;
    box-shadow: inset 0 0 0 3px #b8a586, 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  .crt-screen-bliss {
    position: relative;
    block-size: 158px;
    border: 2.5px solid #2b2823;
    border-radius: 6px;
    overflow: clip;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #3b82f6 0%, #93c5fd 60%, #4ade80 100%);
  }

  .bliss-sky {
    position: absolute;
    inset: 0 0 38% 0;
    background: radial-gradient(
        circle at 25% 35%,
        rgba(255, 255, 255, 0.85) 0%,
        transparent 32%
      ),
      radial-gradient(
        circle at 75% 28%,
        rgba(255, 255, 255, 0.75) 0%,
        transparent 28%
      ),
      linear-gradient(180deg, #2563eb 0%, #60a5fa 100%);
  }

  .bliss-hill {
    position: absolute;
    inset: 52% -15% -10% -15%;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #65a30d 0%, #3f6212 100%);
    border-top: 2px solid rgba(255, 255, 255, 0.25);
  }

  .monitor-icons-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
    padding: 8px;
  }

  .monitor-app-icon {
    inline-size: 46px;
    block-size: 38px;
    border: 2px solid;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.45);
    transition: transform 0.15s ease;
    cursor: default;

    &:hover {
      transform: scale(1.1);
    }

    .icon-code {
      font-size: 13px;
      font-weight: 900;
      line-height: 1;
    }

    .icon-label {
      font-size: 6.5px;
      font-weight: 700;
      opacity: 0.9;
      margin-top: 2px;
      white-space: nowrap;
    }
  }

  .crt-power-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 6px;

    .brand-mark {
      font-size: 9px;
      font-weight: 900;
      color: #4b4336;
      letter-spacing: 0.8px;
    }

    .power-led {
      inline-size: 8px;
      block-size: 8px;
      border-radius: 50%;
      background: #22c55e;
      border: 1.5px solid #1f2937;
    }
  }

  .crt-neck {
    inline-size: 90px;
    block-size: 12px;
    background: #b5a384;
    border-left: 3px solid #2b2823;
    border-right: 3px solid #2b2823;
  }

  .cpu-deck {
    inline-size: 270px;
    block-size: 52px;
    background: #cab899;
    border: 3px solid #2b2823;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    box-shadow: inset 0 0 0 2px #b09d7c;

    .cpu-vents {
      display: flex;
      gap: 4px;
      span {
        inline-size: 4px;
        block-size: 26px;
        background: #4a4235;
        border-radius: 2px;
      }
    }

    .cpu-drives {
      display: flex;
      flex-direction: column;
      gap: 6px;
      .floppy-slot {
        inline-size: 78px;
        block-size: 8px;
        background: #3d352a;
        border-radius: 2px;
      }
    }
  }

  .retro-keyboard {
    inline-size: 320px;
    max-inline-size: 100%;
    background: #dfd0b4;
    border: 3px solid #2b2823;
    border-radius: 6px;
    padding: 7px 10px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0 5px 0 #423b2f;

    .key-row {
      display: flex;
      gap: 4px;
      justify-content: center;
    }

    .key-cap {
      flex: 1;
      block-size: 8px;
      background: #b5a282;
      border: 1px solid #3d352a;
      border-radius: 2px;
    }

    .key-cap.wide {
      flex: 2;
    }

    .key-cap.spacebar {
      flex: 6;
    }
  }

  .extra-tech-cloud {
    display: flex;
    flex-wrap: wrap;
    flex-wrap: balance;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;
  }

  .tech-mini-pill {
    font-size: 10.5px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 999px;
    background: rgba(24, 28, 24, 0.82);
    color: #e9f5e3;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

/* ================= ROW 4: PROFESSIONAL EXPERIENCE CARD ================= */
const ExperienceCard = styled.section`
  background: #ece7dd;
  border-radius: 24px;
  padding: 28px 32px;

  @media (max-width: 640px) {
    padding: 20px 18px;
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 22px;
    border-bottom: 3px solid #232323;
    padding-bottom: 14px;
  }

  .zine-kicker {
    display: block;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: #d95326;
    margin-bottom: 4px;
  }

  .section-giant-title {
    margin: 0;
    font-size: clamp(2.8rem, 6vw, 4.6rem);
    font-weight: 900;
    letter-spacing: -3px;
    line-height: 0.92;
    color: #232423;
  }

  .exp-stamp {
    background: #f3c623;
    color: #1c1c1c;
    font-size: 13px;
    font-weight: 900;
    padding: 8px 16px;
    border-radius: 999px;
    border: 2.5px solid #1c1c1c;
    box-shadow: 3px 3px 0 #1c1c1c;
    transform: rotate(-2deg);
  }

  .exp-timeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .exp-card-item {
    background: #e2dcd0;
    border: 2.5px solid #232323;
    border-radius: 16px;
    padding: 18px;
    box-shadow: 4px 4px 0 #232323;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .exp-meta-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 11.5px;
    font-weight: 800;
  }

  .exp-period-pill {
    background: #232323;
    color: #f3c623;
    padding: 3px 9px;
    border-radius: 6px;
  }

  .exp-location {
    color: #4b4b49;
  }

  .exp-role {
    margin: 4px 0 0;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #1f1f1f;
  }

  .exp-company-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
  }

  .exp-company {
    font-size: 14px;
    font-weight: 900;
    color: #c84b1c;
  }

  .exp-tag {
    font-size: 10px;
    font-weight: 900;
    padding: 2px 7px;
    border-radius: 4px;
    background: #d3cbbd;
    color: #232323;
  }

  .exp-bullets {
    margin: 6px 0 0;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12.5px;
    font-weight: 700;
    line-height: 1.42;
    color: #2a2a29;
  }
`;

/* ================= ROW 5: PROJECTS POSTER CARD ================= */
const ProjectsPosterCard = styled.section`
  background: #3b9c9c;
  border-radius: 24px;
  padding: 28px 32px;
  color: #192121;

  @media (max-width: 640px) {
    padding: 20px 18px;
  }

  .proj-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 22px;
    border-bottom: 3px solid #182222;
    padding-bottom: 14px;
  }

  .zine-kicker {
    display: block;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: #ffe66d;
    margin-bottom: 4px;
  }

  .section-giant-title {
    margin: 0;
    font-size: clamp(2.8rem, 6vw, 4.6rem);
    font-weight: 900;
    letter-spacing: -3px;
    line-height: 0.92;
    color: #172020;
  }

  .proj-tabs {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .proj-tab {
    font-size: 12.5px;
    font-weight: 900;
    padding: 8px 14px;
    border-radius: 999px;
    border: 2px solid #172020;
    background: rgba(236, 231, 221, 0.85);
    color: #172020;
    cursor: pointer;
    box-shadow: 3px 3px 0 #172020;
    transition: all 0.15s ease;

    &.active {
      background: #f3c623;
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0 #172020;
    }
  }

  .proj-bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  .proj-zine-card {
    background: #ece7dd;
    border: 2.5px solid #182020;
    border-radius: 16px;
    padding: 16px 18px;
    box-shadow: 4px 4px 0 #182020;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .proj-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .proj-badge {
    font-size: 10px;
    font-weight: 900;
    padding: 3px 8px;
    border-radius: 5px;
    background: #e47921;
    color: #181818;
    border: 1.5px solid #181818;

    &.secondary {
      background: #f3c623;
    }
  }

  .proj-period {
    font-size: 11.5px;
    font-weight: 800;
    color: #4a4a48;
  }

  .proj-name {
    margin: 4px 0 0;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: #1c1d1c;

    a {
      color: inherit;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;

      &:hover {
        color: #c84b1c;
      }
    }
  }

  .proj-subtitle {
    margin: 0;
    font-size: 12px;
    font-weight: 800;
    color: #8c3b19;
  }

  .proj-summary {
    margin: 2px 0 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.4;
    color: #2c2d2c;
    flex: 1;
  }

  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: auto;
  }

  .proj-tag {
    font-size: 10.5px;
    font-weight: 800;
    padding: 2px 8px;
    border-radius: 6px;
    background: #232524;
    color: #f3efe6;
  }
`;

