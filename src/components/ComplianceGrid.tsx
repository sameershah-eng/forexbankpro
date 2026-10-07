import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  MapPin,
  Scale,
  Vault
} from 'lucide-react';

export const ComplianceGrid: React.FC = () => {
  const [copiedAustin, setCopiedAustin] = useState(false);
  const [copiedBVI, setCopiedBVI] = useState(false);

  const copyToClipboard = (text: string, type: 'austin' | 'bvi') => {
    navigator.clipboard.writeText(text);
    if (type === 'austin') {
      setCopiedAustin(true);
      setTimeout(() => setCopiedAustin(false), 2000);
    } else {
      setCopiedBVI(true);
      setTimeout(() => setCopiedBVI(false), 2000);
    }
  };

  const austinAddress = "100 Congress Avenue, Suite 2000, Austin, TX 78701, United States";
  const bviAddress = "Ritter House, Wickhams Cay II, Road Town, Tortola, VG1110, British Virgin Islands";

  return (
    <section id="funds-safety" className="py-20 md:py-28 bg-slate-950 relative border-t border-white/5">
      {/* Ambient background glow orb */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL INTEGRITY & GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase font-sans">
            REGULATORY COMPLIANCE & CAPITAL SAFETY
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Full jurisdictional transparency, segregated Tier-1 trust banking, and rigorous multi-agency regulatory governance.
          </p>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: BVI License Details */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Scale className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                JURISDICTIONAL OVERSIGHT
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                BVI FSC Regulatory Licensing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Forex Bank Pro Ltd. is authorized and regulated under the Securities and Investment Business Act (SIBA) by the British Virgin Islands Financial Services Commission.
              </p>

              {/* License Cards */}
              <div className="space-y-3 mb-6 font-mono">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">FSC Regulatory License No.</div>
                  <div className="text-base font-bold text-emerald-400">#1024298</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Category 1B & 2 (Dealing & Arranging Deals)</div>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                  <div className="text-[10px] text-slate-400 uppercase">BVI Corporate Registration No.</div>
                  <div className="text-base font-bold text-white">#010072121</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Good Standing Registry Verified</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict AML & CTF Tier-1 protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Annual independent statutory financial audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full SIBA capital adequacy adherence</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Status: <strong className="text-emerald-400">Fully Compliant</strong></span>
              <span>Auditor: <strong className="text-slate-200">BVI FSC Registry</strong></span>
            </div>
          </div>

          {/* Column 2: Office Addresses */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-1">
                PHYSICAL LOCATIONS
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Global Registered Offices
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Operating dual headquarters across premier financial hubs, facilitating worldwide institutional client coverage and tech infrastructure.
              </p>

              {/* Office 1: Austin, TX */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-4 group">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>AUSTIN, TEXAS (US OFFICE)</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(austinAddress, 'austin')}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy address"
                  >
                    {copiedAustin ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-xs text-slate-300 font-sans leading-relaxed">
                  100 Congress Avenue, Suite 2000,<br />
                  Austin, TX 78701, United States
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-2">
                  Role: Quantitative Engineering & AI Cluster Hub
                </div>
              </div>

              {/* Office 2: Tortola, BVI */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-4 group">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TORTOLA, BVI (HEAD OFFICE)</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bviAddress, 'bvi')}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy address"
                  >
                    {copiedBVI ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-xs text-slate-300 font-sans leading-relaxed">
                  Ritter House, Wickhams Cay II,<br />
                  Road Town, Tortola, VG1110, British Virgin Islands
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-2">
                  Role: Corporate Head Office & Global Treasury
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Jurisdictions: <strong className="text-slate-200">US & BVI</strong></span>
              <span>Support: <strong className="text-emerald-400">24/5 Institutional Desk</strong></span>
            </div>
          </div>

          {/* Column 3: Fund Segregation Policies & Capital Protection */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6">
                <Vault className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold mb-1">
                CAPITAL SAFEGUARDING
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Fund Segregation & Protection
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                All client funds are completely ring-fenced from operational capital, deposited strictly in designated trust accounts with premier credit institutions.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Tier-1 Banking Custodians</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Barclays Bank Plc (London) and JPMorgan Chase correspondent accounts.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Negative Balance Protection</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Guaranteed automatic liquidation stop prevents account balances from ever dropping below zero.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                  <Vault className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Lloyd's Indemnity Protection</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      Comprehensive civil liability & fidelity insurance policy coverage up to $1,000,000 per client.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Account Type: <strong className="text-slate-200">Statutory Trust</strong></span>
              <span>Protection: <strong className="text-emerald-400">100% Segregated</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
