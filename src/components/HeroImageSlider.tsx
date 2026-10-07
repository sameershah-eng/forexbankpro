import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';

interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  badge: string;
  image: string;
  glowColor: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'QUANTUM ALGORITHM CORE',
    title: 'Alpha-Grid EA v4.2 Live Neural Execution',
    subtitle: 'Autonomous sub-tick scalping analyzing 15,000 order book updates per second with zero emotional drawdown.',
    metric: '82.4%',
    metricLabel: 'Verified Win Rate (Last 90d)',
    badge: 'ACTIVE LIVE ENGINE',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1400&q=85',
    glowColor: 'emerald',
  },
  {
    id: 2,
    tag: 'INSTITUTIONAL LIQUIDITY',
    title: 'Equinix LD4 & NY4 Sub-Millisecond Routing',
    subtitle: 'Direct optical cross-connects streaming raw interbank spreads from 0.0 pips directly from Tier-1 liquidity providers.',
    metric: '1.8ms',
    metricLabel: 'Average Fill Latency',
    badge: '0.0 PIPS RAW SPREAD',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85',
    glowColor: 'indigo',
  },
  {
    id: 3,
    tag: 'PAMM WEALTH ACCUMULATION',
    title: 'Pooled Multi-Tier Capital Management',
    subtitle: 'High-water mark protected investment accounts with audited monthly alpha compounding and segregated trust banking.',
    metric: '$84.2M',
    metricLabel: 'Active Managed AUM',
    badge: 'ZERO CAPITAL LOCKUP',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=85',
    glowColor: 'teal',
  },
  {
    id: 4,
    tag: 'MULTI-ASSET DERIVATIVES',
    title: 'Over 1,200+ Global CFDs & Synthetic Baskets',
    subtitle: 'Seamlessly trade US Tech Equities, Global Indices, Forex Majors, and Gold with institutional leverage up to 1:500.',
    metric: '1:500',
    metricLabel: 'Maximum Flexible Leverage',
    badge: '1,200+ INSTRUMENTS',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1400&q=85',
    glowColor: 'amber',
  }
];

interface HeroImageSliderProps {
  onSlideAction: () => void;
}

export const HeroImageSlider: React.FC<HeroImageSliderProps> = ({ onSlideAction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-slide effect with progress tracking
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 5000;
    const stepTime = 50;
    const increment = (stepTime / intervalTime) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(progressTimer);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleSelectSlide = (idx: number) => {
    setProgress(0);
    setCurrentIndex(idx);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div 
      className="mt-12 w-full max-w-5xl mx-auto relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer ambient glow reacting to current slide */}
      <div 
        aria-hidden="true" 
        className={`pointer-events-none absolute -inset-1 rounded-3xl blur-2xl opacity-40 transition-all duration-700 ${
          currentSlide.glowColor === 'emerald' ? 'bg-emerald-500/30' :
          currentSlide.glowColor === 'indigo' ? 'bg-indigo-500/30' :
          currentSlide.glowColor === 'teal' ? 'bg-teal-500/30' : 'bg-amber-500/30'
        }`}
      />

      {/* Main Glassmorphic Sliding Banner Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Top subtle progress bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/10 z-30">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Sliding Card Frame */}
        <div className="relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] flex items-center overflow-hidden">
          {/* Animated Background Image with Ken-Burns scale effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105 animate-[pulse_6s_ease-in-out_infinite] transition-transform duration-1000 ease-out filter brightness-[0.45] contrast-[1.15]"
            />
            {/* Multiple Vignette Gradient Layers for maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
            {/* Ambient Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_60%)]" />
          </div>

          {/* Slide Content Overlay */}
          <div className="relative z-20 w-full p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
            <div>
              {/* Top Meta Tag & Live Status */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentSlide.tag}</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-mono text-xs font-medium backdrop-blur-md">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>{currentSlide.badge}</span>
                </span>
              </div>

              {/* Slide Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-2xl text-left leading-tight drop-shadow-md">
                {currentSlide.title}
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl text-left leading-relaxed drop-shadow-sm">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Bottom Row: Key Metric Callout & Action CTA */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              {/* Metric Box */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                    {currentSlide.metric}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {currentSlide.metricLabel}
                  </div>
                </div>
              </div>

              {/* Interactive Slide CTA Button */}
              <button
                onClick={onSlideAction}
                className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>ACTIVATE STRATEGY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Left & Right Interactive Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous animated slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-black text-white border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next animated slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-emerald-500 hover:text-black text-white border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Carousel Selector Thumbnails */}
        <div className="relative z-30 px-4 sm:px-6 py-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  currentIndex === idx
                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-bold'
                    : 'bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                <span className="hidden sm:inline">0{idx + 1}.</span>
                <span>{slide.tag.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-slate-400 shrink-0">
            Slide <span className="text-emerald-400 font-bold">{currentIndex + 1}</span> of {HERO_SLIDES.length}
          </div>
        </div>
      </div>
    </div>
  );
};
