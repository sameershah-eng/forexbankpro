import React, { useState } from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Coins, 
  CreditCard, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  FileText
} from 'lucide-react';

interface FooterProps {
  onOpenDoc: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDoc }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 relative overflow-hidden text-slate-400 text-xs font-sans">
      {/* Upper Footer: Multi-Column Glass Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-xs text-emerald-400">
                  FBP
                </div>
              </div>
              <span className="font-sans font-extrabold text-base tracking-tight text-white">
                FOREX BANK PRO
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Next-generation institutional forex & CFD trading infrastructure. 
              Powered by quantum quantitative AI execution agents, segregated Tier-1 trust custody, 
              and raw interbank liquidity feeds.
            </p>

            <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1 font-mono text-[11px]">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>BVI FSC Authorized & Regulated</span>
              </div>
              <div className="text-slate-400">License #1024298 | BVI Reg #010072121</div>
            </div>
          </div>

          {/* Column 2: Sitemap (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              SITEMAP
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('our-system')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Our System
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Products & Modules
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calculator')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Profit & Risk Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('live-monitor')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  AI Agent Live Monitor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('funds-safety')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Funds Safety & Custody
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partnership')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  IB & PAMM Partnership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Documents (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              LEGAL DOCUMENTS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onOpenDoc('Terms of Business & Client Agreement')}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms of Business (Client Agreement)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenDoc('Full CFD & Leveraged Product Risk Disclosure')}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Risk Disclosure Notice</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenDoc('Anti-Money Laundering (AML) & KYC Policy')}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>AML & KYC Compliance Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenDoc('Best Execution & Slippage Policy')}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Order Best Execution Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenDoc('Privacy Policy & GDPR Compliance')}
                  className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Privacy Policy & Data Security</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment Badges & USDT TRC-20 (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              INSTANT SETTLEMENT METHODS
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Zero deposit commission with instant automated balance crediting via blockchain and banking networks.
            </p>

            {/* USDT TRC-20 Payment Badge */}
            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                  ₮
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400">USDT TRC-20</div>
                  <div className="text-[10px] text-slate-400">Fast Tron Network • 0% Fee</div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                VERIFIED
              </span>
            </div>

            {/* Secondary payment badges */}
            <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px] text-slate-300">
              <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
                USDT ERC20
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
                BTC Lightning
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-center">
                SWIFT Wire
              </div>
            </div>
          </div>
        </div>

        {/* Full CFD Risk Disclosure Statement Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-black/70 border border-white/10 text-[11px] leading-relaxed text-slate-400 space-y-2">
          <div className="font-mono font-bold text-slate-300 uppercase flex items-center gap-1.5 text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>FULL REGULATORY CFD RISK DISCLOSURE NOTICE</span>
          </div>
          <p>
            Contracts for Difference (CFDs) and Margin Forex Trading are complex financial instruments and carry a high level of risk due to leverage. Between 68% and 82% of retail investor accounts lose money when trading CFDs with providers. You should consider whether you understand how CFDs and algorithmic trading work, and whether you can afford to take the high risk of losing your invested capital. Forex Bank Pro does not issue investment advice, legal advice, or financial guarantees.
          </p>
          <p>
            Past performance of Expert Advisors (EAs) or PAMM fund managers is not indicative of future results. Forex Bank Pro Ltd. is registered in the British Virgin Islands (Registration #010072121) and licensed by the BVI FSC under License #1024298. Services are strictly not directed toward residents of the United States, North Korea, Iran, or jurisdictions where local distribution contradicts domestic financial statutes.
          </p>
        </div>
      </div>

      {/* Copyright Bar with Dynamic "Back to Top" Smooth-Scroll Button */}
      <div className="border-t border-white/10 bg-black/90 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
            © 2026 Forex Bank Pro Ltd. All rights reserved. FSC License No. #1024298.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500 hover:text-slate-950 border border-white/10 hover:border-emerald-400 text-xs font-mono font-semibold text-slate-300 transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
