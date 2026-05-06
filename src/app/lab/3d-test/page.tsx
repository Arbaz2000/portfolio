"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Clone, Environment, useGLTF } from "@react-three/drei";
import { ReactLenis, useLenis } from "lenis/react";
import * as THREE from "three";
import { SideText } from "./SideText";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

function getShiftT(scrollPx: number) {
  const halfScreen = (typeof window !== "undefined" ? window.innerHeight : 0) * 0.5;
  return halfScreen > 0
    ? THREE.MathUtils.clamp((scrollPx - halfScreen) / halfScreen, 0, 1)
    : 0;
}

// ------------------------------------------------------------------
// 0. Scroll Progress Bar
// ------------------------------------------------------------------
function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useLenis(({ scroll, limit }) => {
    const progress = limit > 0 ? scroll / limit : 0;
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    }
  });

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-black/10 pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-black"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

// ------------------------------------------------------------------
// 2. The Main Page
// ------------------------------------------------------------------
export default function LenisSmoothScrollPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  
  // This ref acts as the bridge between DOM scroll and 3D Frame
  // It avoids React state updates (re-renders) for high-perf animation
  const scrollProgress = useRef(0);
  const scrollPx = useRef(0);

  return (
    <ReactLenis
      root
      options={{
        // TWEAK THESE FOR FEEL
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}
    >
      <ScrollTracker scrollRef={scrollProgress} scrollPxRef={scrollPx} />
      <SplitPanelsController
        leftRef={leftPanelRef}
        rightRef={rightPanelRef}
        rightContentRef={rightContentRef}
      />
      <ScrollProgressBar />

      <div ref={containerRef} className="relative w-full">
        
        {/* STICKY 3D BACKGROUND */}
        <div className="sticky top-0 h-[100vh] w-full overflow-hidden bg-[#CADF9E]">
          
          {/* ABSOLUTE 3D SCENE (Never resizes, prevents shift bug) */}
          <div className="absolute inset-0 z-0">
            <Scene scrollRef={scrollProgress} scrollPxRef={scrollPx} />
          </div>

          {/* OVERLAY UI */}
          <div className="absolute top-0 left-0 z-10 p-8 pointer-events-none">
            <h1 className="text-4xl font-black text-black">LENIS + R3F</h1>
            <p className="text-black font-medium mt-2">
              Scroll down. Notice the sync.
            </p>
          </div>

          <div className="relative z-10 flex h-full w-full pointer-events-none">
            {/* LEFT: Empty placeholder to push the right panel */}
            <div
              ref={leftPanelRef}
              className="h-full shrink-0"
              style={{ width: "100%" }}
            />

            {/* RIGHT: Text (0% -> 50% after half screen) */}
            <div
              ref={rightPanelRef}
              className="relative h-full shrink-0 overflow-hidden bg-[#CADF9E] pointer-events-auto border-l border-black/10"
              style={{ width: "0%" }}
            >
              <div
                ref={rightContentRef}
                className="h-full w-full"
                style={{
                  opacity: 0,
                  transform: "translate3d(48px,0,0)",
                  pointerEvents: "none",
                }}
              >
                <SideText />
              </div>
            </div>
          </div>
        </div>

        {/* SCROLLABLE SPACER */}
        {/* Height defines how long the animation plays */}
        <div className="h-[500vh] pb-32" />
      </div>
    </ReactLenis>
  );
}

// ------------------------------------------------------------------
// 3. Helper to update the ref from Lenis
// ------------------------------------------------------------------
function ScrollTracker({
  scrollRef,
  scrollPxRef,
}: {
  scrollRef: React.MutableRefObject<number>;
  scrollPxRef: React.MutableRefObject<number>;
}) {
  useLenis(({ scroll, limit }) => {
    // Calculate 0 to 1 progress
    // Guard against divide by zero if limit is 0 initially
    const progress = limit > 0 ? scroll / limit : 0;
    scrollRef.current = progress;
    scrollPxRef.current = scroll;
  });
  return null;
}

function SplitPanelsController({
  leftRef,
  rightRef,
  rightContentRef,
}: {
  leftRef: React.RefObject<HTMLDivElement | null>;
  rightRef: React.RefObject<HTMLDivElement | null>;
  rightContentRef: React.RefObject<HTMLDivElement | null>;
}) {
  useLenis(({ scroll }) => {
    const t = getShiftT(scroll);

    const leftEl = leftRef.current;
    const rightEl = rightRef.current;
    const contentEl = rightContentRef.current;

    // Panel widths: 100/0 -> 50/50
    const rightW = 50 * t;
    const leftW = 100 - rightW;
    if (leftEl) leftEl.style.width = `${leftW}%`;
    if (rightEl) rightEl.style.width = `${rightW}%`;

    // Content reveal
    if (contentEl) {
      contentEl.style.opacity = String(t);
      contentEl.style.transform = `translate3d(${(1 - t) * 48}px,0,0)`;
      contentEl.style.pointerEvents = t > 0.05 ? "auto" : "none";
    }
  });

  return null;
}
