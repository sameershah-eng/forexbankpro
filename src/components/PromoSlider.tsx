import React, { useState, useEffect } from 'react';
import { 
  Percent, 
  Coins, 
  Cpu, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface PromoSlide {
  id: number;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  actionText: string;
  actionTarget: string;
  icon: 'percent' | 'coins' | 'cpu';
}

const SLIDES: PromoSlide[] = [
  {
    id: 1,
    tag: 'LIMITED INCENTIVE',
    title: 'Zero Management Surcharge:',
    highlight: '0% Commission on PAMM Accounts',
    description: 'Deposit $1,000+ this quarter to lock in 100% net performance retention for 90 days.',
    actionText: 'Claim PAMM Offer',
    actionTarget: 'products',
    icon: 'percent'
  },
  {
    id: 2,
    tag: 'INSTANT ON-RAMP',
    title: 'Zero Blockchain Slippage:',
    highlight: 'USDT TRC-20 Instant Settlements',
    description: 'Automatic wallet credit in < 60 seconds with 0% gateway deposit fees on all stablecoin pairs.',
    actionText: 'Explore Funding',
    actionTarget: 'calculator',
    icon: 'coins'
  },
  {
    id: 3,
    tag: 'HFT INFRASTRUCTURE',
    title: 'Equinix LD4 Fiber:',
    highlight: '24/5 AI Algorithmic Execution',
    description: 'Proprietary Quantum Alpha-Grid EA deployed on London interbank liquidity nodes at 2ms latency.',
    actionText: 'View Live Telemetry',
    actionTarget: 'live-monitor',
    icon: 'cpu'
  }
];

export const PromoSlider: React.FC<{ onActionClick: (target: string) => void }> = ({ onActionClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = SLIDES[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-emerald-500/20 py-2 px-3 sm:px-6 text-xs overflow-hidden z-40 backdrop-blur-md">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-8 left-1/3 w-64 h-24 bg-emerald-500/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Auto-play indicator & Prev/Next buttons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            title={isPlaying ? 'Pause banner' : 'Resume banner'}
          >
            {isPlaying ? <Pause className="w-3 h-3 text-emerald-400" /> : <Play className="w-3 h-3 text-amber-400" />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Slide Content */}
        <div className="flex-1 flex items-center justify-center text-center overflow-hidden px-2">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center font-sans">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400 uppercase shrink-0">
              <Sparkles className="w-2.5 h-2.5" />
              {slide.tag}
            </span>
            <span className="text-slate-300 font-medium hidden md:inline">
              {slide.title}
            </span>
            <span className="text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-300">
              {slide.highlight}
            </span>
            <span className="text-slate-400 text-[11px] hidden lg:inline">
              — {slide.description}
            </span>
          </div>
        </div>

        {/* Right: Quick Action Link & Slide Indicators */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onActionClick(slide.actionTarget)}
            className="hidden sm:flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group"
          >
            <span>{slide.actionText}</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIdx(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIdx === idx ? 'w-4 bg-emerald-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
