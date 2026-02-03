"use client";

import React from "react";

export function SideText() {
  return (
    <div className="flex h-full w-full items-center">
      <div className="px-8 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">
          Akira Bike
        </h2>
        <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-black/80">
          Scroll to reveal the split layout. The model shifts left to make room
          for content, while the scene keeps responding smoothly to scroll.
        </p>

        <div className="mt-6 grid gap-3 text-sm md:text-base text-black/80">
          <p>
            <span className="font-semibold text-black">Interaction</span>: scroll
            drives rotation + layout.
          </p>
          <p>
            <span className="font-semibold text-black">Layout</span>: left 3D
            panel becomes 50% width.
          </p>
          <p>
            <span className="font-semibold text-black">Content</span>: this text
            is a separate component.
          </p>
        </div>
      </div>
    </div>
  );
}

