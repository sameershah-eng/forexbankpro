import React from 'react';
import { 
  Handshake, 
  Percent, 
  Award, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface PartnershipProps {
  onPartnerApply: () => void;
}

export const PartnershipSection: React.FC<PartnershipProps> = ({ onPartnerApply }) => {
  return (
    <section id="partnership" className="py-20 md:py-28 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/10 p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-[130px]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <Handshake className="w-3.5 h-3.5" />
                <span>GLOBAL PARTNERSHIP ECOSYSTEM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
                INSTITUTIONAL IB & PAMM MANAGER PROGRAM
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Partner with Forex Bank Pro to access prime multi-tier revenue share models, direct sub-IB tracking, custom API integration, and bespoke liquidity pools for asset managers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Up to $18 per lot lifetime rebate payout</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Daily automated USDT TRC-20 settlements</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">High-converting multilingual marketing kits</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">Dedicated institutional partnership manager</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onPartnerApply}
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  Approval within 12 business hours
                </span>
              </div>
            </div>

            {/* Right Card: Tier Highlights */}
            <div className="lg:col-span-5 space-y-3 font-mono">
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">TIER 1 INTRODUCING BROKER</div>
                  <div className="text-lg font-bold text-white">$10 – $14 / Lot</div>
                  <div className="text-[11px] text-emerald-400">Volume: $10M - $50M/mo</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Percent className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-emerald-400 uppercase font-bold">PRIME MASTER PARTNER</div>
                  <div className="text-lg font-bold text-emerald-300">$18 / Lot + 50% Profit Share</div>
                  <div className="text-[11px] text-slate-300">Volume: $50M+/mo + PAMM</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">WHITE LABEL LIQUIDITY</div>
                  <div className="text-lg font-bold text-white">Full Turnkey MT5 / API</div>
                  <div className="text-[11px] text-indigo-400">Custom branded brokerage suite</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
