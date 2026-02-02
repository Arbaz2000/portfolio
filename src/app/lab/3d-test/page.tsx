"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Clone, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useMotionValueEvent, useScroll } from "framer-motion";
import * as THREE from "three";

type FanSceneProps = {
  progressRef: React.MutableRefObject<number>;
  count: number;
  orbitEnabled: boolean;
  resetNonce: number;
};

function AkiraFanScene({
  progressRef,
  count,
  orbitEnabled,
  resetNonce,
}: FanSceneProps) {
  const { camera } = useThree();
  const controlsRef = useRef<THREE.EventDispatcher | null>(null);

  const { scene } = useGLTF("/akira_bike/scene.gltf");

  const { center, scale } = useMemo(() => {
    // Ensure world matrices are current before boxing.
    scene.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Fit the model into ~3 world units across.
    const maxDim = Math.max(size.x || 1, size.y || 1, size.z || 1);
    const scale = 3 / maxDim;
    return { center, scale };
  }, [scene]);

  const instanceGroups = useRef<Array<THREE.Group | null>>([]);

  useEffect(() => {
    // Reset camera + controls to a known good view.
    camera.position.set(0, 1.2, 5);
    camera.lookAt(0, 0.6, 0);

    const controls = controlsRef.current as any;
    if (controls?.target) {
      controls.target.set(0, 0.6, 0);
      controls.update?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetNonce]);

  useFrame((_state, dt) => {
    const p = THREE.MathUtils.clamp(progressRef.current, 0, 1);

    // Fan "in and out" over the full scroll range: 0 -> open -> 0
    // (peak at mid-scroll).
    const tri = Math.sin(p * Math.PI); // 0..1..0
    const spread = tri * tri * (3 - 2 * tri); // smoothstep-ish

    const mid = (count - 1) / 2;
    const maxYaw = THREE.MathUtils.degToRad(55);
    const xSpacing = 1.25;
    const zSpacing = 0.55;

    for (let i = 0; i < count; i++) {
      const g = instanceGroups.current[i];
      if (!g) continue;

      const offset = i - mid; // negative .. positive
      const t = mid === 0 ? 0 : offset / mid; // -1..1

      const yaw = t * maxYaw * spread;
      const x = offset * xSpacing * spread;
      const z = -Math.abs(offset) * zSpacing * spread;

      // Light damping so it feels responsive but smooth.
      g.position.x = THREE.MathUtils.damp(g.position.x, x, 14, dt);
      g.position.y = THREE.MathUtils.damp(g.position.y, 0, 14, dt);
      g.position.z = THREE.MathUtils.damp(g.position.z, z, 14, dt);
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, yaw, 14, dt);
      g.rotation.x = THREE.MathUtils.damp(
        g.rotation.x,
        THREE.MathUtils.degToRad(-6) * spread,
        14,
        dt
      );
    }
  });

  return (
    <>
      <color attach="background" args={["#CADF9E"]} />

      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 7, 3]} intensity={2.2} />
      <directionalLight position={[-6, 3, -2]} intensity={0.8} />

      <group position={[0, 0.2, 0]}>
        {Array.from({ length: count }).map((_, i) => (
          <group
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            ref={(el) => {
              instanceGroups.current[i] = el;
            }}
          >
            <group position={center.clone().multiplyScalar(-1)}>
              <group scale={scale}>
                <Clone object={scene} />
              </group>
            </group>
          </group>
        ))}
      </group>

      <Environment preset="city" />

      <OrbitControls
        // `ref` type from drei is not exported cleanly; this is fine in practice.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={controlsRef as any}
        enabled={orbitEnabled}
        enableDamping
        dampingFactor={0.08}
        minDistance={2.5}
        maxDistance={12}
        target={[0, 0.6, 0]}
      />
    </>
  );
}

export default function GltfFanTestPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [resetNonce, setResetNonce] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    progressRef.current = v;
  });

  const progressPct = Math.round(progressRef.current * 100);

  return (
    <div ref={containerRef} className="min-h-[320vh]">
      {/* Sticky viewport with the Canvas */}
      <div className="sticky top-0 h-[100vh] w-full">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.2, 5], fov: 45, near: 0.1, far: 200 }}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <AkiraFanScene
              progressRef={progressRef}
              count={1}
              orbitEnabled={orbitEnabled}
              resetNonce={resetNonce}
            />
          </Suspense>
        </Canvas>

        {/* Overlay controls / debug */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex max-w-[420px] flex-col gap-2">
          <div className="pointer-events-auto rounded-md border-2 border-black bg-white/80 px-3 py-2 text-sm font-semibold text-black backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <span>3D glTF test (Akira Bike)</span>
              <span className="tabular-nums">{progressPct}%</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                className="rounded-md border-2 border-black bg-[#4ade80] px-3 py-1 text-sm font-bold text-black shadow-[3px_3px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_#000]"
                onClick={() => setOrbitEnabled((s) => !s)}
              >
                Orbit: {orbitEnabled ? "on" : "off"}
              </button>
              <button
                className="rounded-md border-2 border-black bg-[#1ac2ff] px-3 py-1 text-sm font-bold text-black shadow-[3px_3px_0_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_#000]"
                onClick={() => setResetNonce((n) => n + 1)}
              >
                Reset camera
              </button>
            </div>
            <div className="mt-2 text-xs font-medium text-black/80">
              Scroll to fan the models in/out. Peak spread at mid-scroll.
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10">
          <div className="pointer-events-auto mx-auto max-w-[980px] rounded-md border-2 border-black bg-white/80 px-3 py-2 text-[11px] font-medium text-black backdrop-blur">
            This work is based on &quot;Akira Bike&quot; (
            <a
              className="underline"
              href="https://sketchfab.com/3d-models/akira-bike-a5b1dc49808b40a9b94f9a4a3073d548"
              target="_blank"
              rel="noreferrer"
            >
              sketchfab link
            </a>
            ) by{" "}
            <a
              className="underline"
              href="https://sketchfab.com/Ryanwill679"
              target="_blank"
              rel="noreferrer"
            >
              Ryanwill679
            </a>{" "}
            licensed under{" "}
            <a
              className="underline"
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC-BY-4.0
            </a>
            .
          </div>
        </div>
      </div>

      {/* Spacer content so scrolling feels intentional */}
      <div className="mx-auto mt-[110vh] max-w-[980px] px-6 pb-24 text-black">
        <div className="rounded-md border-2 border-black bg-white/70 p-4 font-semibold shadow-[6px_6px_0_#000] backdrop-blur">
          <div className="text-lg font-black">Notes</div>
          <ul className="mt-2 list-disc pl-5 text-sm leading-6">
            <li>Model path: /akira_bike/scene.gltf</li>
            <li>Animation: fan in/out driven by scroll progress</li>
            <li>
              Next step (real idea): turn this into a reusable scroll-driven 3D
              gallery component
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/akira_bike/scene.gltf");

