import React from 'react';

/**
 * PipeRoute: A subtle decorative vector pipe graphic
 * that features an animated flowing pulse or dash pattern
 */
export const PipeRoute: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none opacity-25 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D5EA8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0D5EA8" stopOpacity="0.1" />
          </linearGradient>
          <filter id="pipeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer casing */}
        <path
          d="M 10 100 H 240 Q 270 100 270 130 V 160 Q 270 190 300 190 H 550 Q 580 190 580 160 V 50 Q 580 20 610 20 H 790"
          stroke="#1E293B"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner water channel */}
        <path
          d="M 10 100 H 240 Q 270 100 270 130 V 160 Q 270 190 300 190 H 550 Q 580 190 580 160 V 50 Q 580 20 610 20 H 790"
          stroke="url(#pipeGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-flow-line"
          filter="url(#pipeGlow)"
        />

        {/* Pressure Valve Fixtures */}
        <circle cx="270" cy="130" r="7" fill="#0D5EA8" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="580" cy="160" r="7" fill="#0D5EA8" stroke="#38BDF8" strokeWidth="2" />
      </svg>
    </div>
  );
};

/**
 * WaterFlow: Vertical water flow animation indicator
 */
export const WaterFlow: React.FC<{ height?: number; className?: string }> = ({
  height = 140,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} aria-hidden="true">
      <div 
        className="w-1 bg-gradient-to-b from-blue-400 via-sky-300 to-blue-600 rounded-full relative overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div className="absolute inset-0 bg-white/60 animate-pulse-subtle" />
      </div>
    </div>
  );
};

/**
 * LeakIndicator: Subtle pulse indicator for diagnostic / emergency points
 */
export const LeakIndicator: React.FC<{ active?: boolean; className?: string }> = ({
  active = true,
  className = '',
}) => {
  if (!active) return null;

  return (
    <span className={`relative flex h-3 w-3 ${className}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
    </span>
  );
};
