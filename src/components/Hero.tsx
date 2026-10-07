import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layers,
  Play
} from 'lucide-react';
import { HeroImageSlider } from './HeroImageSlider';

interface HeroProps {
  onStartDemo: () => void;
  onExploreAgents: () => void;
  onOpenVideoTour: () => void;
  currency: string;
}

export const Hero: React.FC<HeroProps> = ({
  onStartDemo,
  onExploreAgents,
  onOpenVideoTour,
  currency,
}) => {
  const currencySymbol = currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';

  return (
    <section id="our-system" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-black">
      {/* Background HTML5 Looping Video Stream with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-25 filter blur-[0.5px]"
          poster="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark ambient gradients over video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/85 to-black backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)]" />
      </div>

      {/* Background Lighting: Subtle Ambient Radial Glow Orbs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-emerald-500/15 rounded-full blur-[140px] opacity-80 z-0"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-60 right-1/4 w-[500px] h-[400px] bg-indigo-600/15 rounded-full blur-[150px] opacity-70 z-0"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-96 left-1/4 w-[450px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] opacity-60 z-0"
      />

      {/* Grid line background overlay with subtle transparency */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] z-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Subtle pill tag above headline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-emerald-500/30 transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
            Plus Jakarta Sans <span className="text-slate-600">|</span> Forex Bank Pro
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
            v4.2 Engine
          </span>
        </div>

        {/* Central Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl text-balance leading-[1.08]">
          QUANTUM AI-DRIVEN <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-300">
            WEALTH ACCELERATION
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-3xl text-balance leading-relaxed">
          Pioneering institutional-grade algorithmic liquidity, automated strategy management, 
          and sub-millisecond execution. Harness deep quantitative modeling engineered for asymmetric upside 
          with rigorous capital protection.
        </p>

        {/* Primary Action Buttons + Glowing Video Tour Trigger */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreAgents}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Cpu className="w-4 h-4 text-slate-950" />
            <span>EXPLORE AI AGENTS</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onStartDemo}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-emerald-400/40 font-semibold text-sm tracking-wider uppercase backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>START TRADING DEMO</span>
          </button>

          <button
            onClick={onOpenVideoTour}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold text-sm tracking-wider uppercase backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-lg shadow-emerald-500/10"
          >
            <div className="w-5 h-5 rounded-full bg-emerald-400 text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
            </div>
            <span>WATCH PLATFORM TOUR</span>
          </button>
        </div>

        {/* Attention-Grabbing Hero Sliding Banner Animated Images */}
        <HeroImageSlider onSlideAction={onStartDemo} />

        {/* Horizontal Stat Ticker Card: 3-column glassmorphic stats bar */}
        <div className="mt-14 w-full max-w-4xl rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          {/* Subtle inner top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Stat 1: Min Deposit */}
            <div className="py-3 md:py-1 px-4 flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Min. Deposit
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums flex items-baseline gap-1">
                  <span>{currencySymbol}250</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">USD Base</span>
                </div>
              </div>
            </div>

            {/* Stat 2: Market Status */}
            <div className="py-3 md:py-1 px-4 flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-teal-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Market Status
                </div>
                <div className="text-2xl font-bold font-mono text-white flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400">OPEN 24/5</span>
                </div>
              </div>
            </div>

            {/* Stat 3: Execution Speed */}
            <div className="py-3 md:py-1 px-4 flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Execution Speed
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums flex items-baseline gap-1">
                  <span className="text-indigo-300">2ms</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">Equinix LD4 Fiber</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time trust ticker sub-strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Tier-1 Bank Segregation</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>$4.2B+ Monthly Cleared Volume</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-teal-400" />
            <span>Zero Slippage Routing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
