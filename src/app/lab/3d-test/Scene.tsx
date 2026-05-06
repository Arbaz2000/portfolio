"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Clone, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function getShiftT(scrollPx: number) {
  const halfScreen = (typeof window !== "undefined" ? window.innerHeight : 0) * 0.5;
  return halfScreen > 0
    ? THREE.MathUtils.clamp((scrollPx - halfScreen) / halfScreen, 0, 1)
    : 0;
}

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

    const t = getShiftT(scrollPx);

    // Since the Canvas is now always 100vw, viewport.width represents the full screen width.
    // We want the model to shift to the center of the left half (which is 25% of the screen).
    // So the target is -viewport.width / 4.
    const targetX = (-viewport.width / 4) * t;
    
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 6, delta);
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Center>
        <Clone object={scene} scale={3} />
      </Center>
    </group>
  );
}

export default function Scene({ scrollRef, scrollPxRef }: SceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
        <AkiraScene scrollRef={scrollRef} scrollPxRef={scrollPxRef} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/akira_bike/scene.gltf");
