import React, { useState, useRef } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ArrowRight 
} from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrading: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onStartTrading }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  const chapters = [
    { title: "01. Quantum AI Architecture", duration: "0:45", desc: "How Alpha-Grid EA processes tick order books in 2ms without emotional slippage." },
    { title: "02. Interbank Raw Liquidity", duration: "1:20", desc: "Aggregation across 16 Tier-1 liquidity providers from 0.0 pips on major pairs." },
    { title: "03. PAMM Pooled Capital", duration: "2:05", desc: "Proportional allocation, real-time client equity isolation, and zero lockups." },
    { title: "04. Fund Segregation & FSC", duration: "2:50", desc: "Custody with Barclays Bank Plc and Lloyd's indemnity protection policy." }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-5 py-3.5 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              FOREX BANK PRO // PLATFORM TOUR & QUANTITATIVE OVERVIEW
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Glass Vignette Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

          {/* Overlay Head-Up Display Overlay */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-black/60 px-3 py-1 rounded-full border border-emerald-500/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>ALGORITHM LIVE TESTBENCH: ACTIVE</span>
          </div>

          {/* Video Control Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-4 z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black text-white transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>
              <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                Chapter: <strong className="text-white">{chapters[activeChapter].title}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">1080p 60fps Equinix Stream</span>
              <button
                onClick={() => {
                  if (videoRef.current?.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                  }
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Chapters and Information Bar */}
        <div className="p-5 sm:p-6 bg-slate-950 flex-1 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-md'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400 mb-1">
                  <span>CHAPTER 0{idx + 1}</span>
                  <span>{ch.duration}</span>
                </div>
                <div className="text-xs font-bold text-white mb-1">{ch.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-2">{ch.desc}</div>
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full compliance verified by BVI Financial Services Commission</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300"
              >
                Close Video
              </button>
              <button
                onClick={() => {
                  onClose();
                  onStartTrading();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>Launch MT5 Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
