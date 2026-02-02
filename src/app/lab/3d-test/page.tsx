"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Clone, Environment, useGLTF } from "@react-three/drei";
import { ReactLenis, useLenis } from "lenis/react";
import * as THREE from "three";

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
// 1. The 3D Scene Component
// ------------------------------------------------------------------
type SceneProps = {
  scrollRef: React.MutableRefObject<number>;
  scrollPxRef: React.MutableRefObject<number>;
};

function AkiraScene({ scrollRef, scrollPxRef }: SceneProps) {
  const { scene } = useGLTF("/akira_bike/scene.gltf");
  const group = useRef<THREE.Group>(null);
  const viewport = useThree((s) => s.viewport);

  useFrame((_state, delta) => {
    if (!group.current) return;

    const p = scrollRef.current;
    const scrollPx = scrollPxRef.current;

    // Animation: Spin 360 degrees based on scroll
    group.current.rotation.y = p * Math.PI * 2;

    // After half a screen of scroll, move model left until ~50% is visible
    // Transition happens over the next half screen for a smooth feel.
    const halfScreen = (typeof window !== "undefined" ? window.innerHeight : 0) * 0.5;
    const t = halfScreen > 0 ? THREE.MathUtils.clamp((scrollPx - halfScreen) / halfScreen, 0, 1) : 0;

    // Move the model's origin to the left edge of the view (roughly half clipped)
    const targetX = (-viewport.width / 2) * t;
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 6, delta);
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* <Center> automatically centers the model at 0,0,0 */}
      <Center>
        <Clone object={scene} scale={3} />
      </Center>
    </group>
  );
}

// ------------------------------------------------------------------
// 2. The Main Page
// ------------------------------------------------------------------
export default function LenisSmoothScrollPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
      <ScrollProgressBar />

      <div ref={containerRef} className="relative w-full">
        
        {/* STICKY 3D BACKGROUND */}
        <div className="sticky top-0 h-[100vh] w-full overflow-hidden bg-[#CADF9E]">
          <Canvas
            shadows
            dpr={[1, 1.5]} // Cap DPR at 1.5 for performance
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true }}
          >
            <Suspense fallback={null}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <directionalLight 
                position={[5, 10, 5]} 
                intensity={2} 
                castShadow 
              />
              <AkiraScene scrollRef={scrollProgress} scrollPxRef={scrollPx} />
            </Suspense>
          </Canvas>

          {/* OVERLAY UI */}
          <div className="absolute top-0 left-0 p-8 pointer-events-none">
            <h1 className="text-4xl font-black text-black">LENIS + R3F</h1>
            <p className="text-black font-medium mt-2">
              Scroll down. Notice the sync.
            </p>
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

useGLTF.preload("/akira_bike/scene.gltf");