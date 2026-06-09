"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 80;

export default function HeroImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, "0");
      img.src = `/images/sequence/frame-${num}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      // Em caso de erro, conta igual para não travar
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!loaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions based on the first image
    // Find first valid image
    const firstValid = images.find(img => img.width > 0);
    if (firstValid) {
      canvas.width = firstValid.width;
      canvas.height = firstValid.height;
    }

    let currentFrame = 0;
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 6;
    const interval = 1000 / fps;

    const render = () => {
      const img = images[currentFrame];
      if (img && img.width > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      currentFrame = (currentFrame + 1) % TOTAL_FRAMES;
    };

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaTime = time - lastTime;

      if (deltaTime > interval) {
        render();
        lastTime = time - (deltaTime % interval);
      }
    };

    // Primeira renderização imediata
    render();
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded, images]);

  return (
    <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none z-0">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-12 h-12 border-4 border-bite-cheddar border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
