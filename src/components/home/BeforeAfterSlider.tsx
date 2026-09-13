import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveHorizontal, AlertCircle, CheckCircle2 } from 'lucide-react';
import { siteImages } from '../../data/images';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D5EA8] bg-blue-50 px-3 py-1 rounded-full">
            Real Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Before & After: The Homist Standard
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Drag the comparison slider left and right to inspect how we transform corroded, leaking, hazardous pipework into clean, code-compliant installations.
          </p>
        </div>

        {/* Comparison Slider Component */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 select-none cursor-ew-resize bg-slate-950"
          >
            {/* "After" Image (Background / Full Width) */}
            <img
              src={siteImages.afterPristinePipes}
              alt="Pristine Code-Compliant Plumbing Installation"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* After Label */}
            <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>AFTER: Heat-Fused Master PPRC</span>
            </div>

            {/* "Before" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={siteImages.beforeCorrodedPipes}
                alt="Corroded Leaking Iron Pipe Before Repair"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20" />

              {/* Before Label */}
              <div className="absolute top-4 left-4 bg-red-600/90 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-10">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BEFORE: Corroded Iron & Wall Seem</span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0D5EA8] border-2 border-white shadow-xl flex items-center justify-center text-white animate-pulse-subtle">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Helper caption */}
          <div className="flex items-center justify-between mt-4 text-xs text-slate-500 px-2">
            <span className="flex items-center gap-1 text-red-600 font-semibold">
              ← Old Rusted Galvanized Pipe (Rusty Water & Leakage)
            </span>
            <span className="text-slate-400 hidden sm:inline">
              Drag slider horizontally to compare
            </span>
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              Concealed Master PPRC Fusion Piping →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
