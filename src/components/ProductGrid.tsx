import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  BarChart3, 
  ArrowLeftRight, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldAlert, 
  Sliders,
  ExternalLink
} from 'lucide-react';

interface ProductItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  icon: 'ea' | 'pamm' | 'cfd' | 'raw';
  image: string;
  stats: { label: string; value: string }[];
  features: string[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'ea',
    title: 'Automated Expert Advisors (EAs)',
    badge: 'ALGORITHMIC',
    shortDesc: 'Automated quantitative strategy execution running 24/5 on ultra-low latency server grids with strict risk parameters.',
    fullDesc: 'Forex Bank Pro proprietary Expert Advisors utilize deep machine-learning feedback loops, dynamic vol-scaling, and micro-arbitrage. They monitor tick-by-tick order book depth to execute without psychological biases or emotional drawdown.',
    icon: 'ea',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Avg Win Rate', value: '78.4%' },
      { label: 'Max Drawdown Cap', value: '4.8%' },
    ],
    features: [
      'Self-calibrating stop-loss algorithms',
      'Ultra-fast MQL5 & Python API bridge',
      'Zero human emotion in trade entry',
      'Instant hedging & trailing triggers'
    ]
  },
  {
    id: 'pamm',
    title: 'PAMM Managed Accounts',
    badge: 'POOLED WEALTH',
    shortDesc: 'Pooled capital management with transparent performance fees and proportional allocation calculated per tick.',
    fullDesc: 'Our Percentage Allocation Management Module (PAMM) connects accredited investors and high-net-worth individuals directly to vetted institutional master traders. Capital remains strictly in your personal segregated account, protected by LPOA guidelines.',
    icon: 'pamm',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Managed AUM', value: '$84.2M' },
      { label: 'Avg Monthly Alpha', value: '+6.2%' },
      { label: 'Capital Lockup', value: '0 Days' },
    ],
    features: [
      'Proportional profit & risk distribution',
      'Full investor transparency & live equity readouts',
      'High-water mark protected fee structures',
      'Immediate deposit and withdrawal flexibility'
    ]
  },
  {
    id: 'cfd',
    title: 'Stock CFDs & Global Indices',
    badge: '1,200+ ASSETS',
    shortDesc: 'Direct market access to blue-chip global equities, technology benchmarks, commodities, and synthetic index baskets.',
    fullDesc: 'Trade contract-for-difference instruments with institutional margin requirements. Take long or short positions across US, European, and Asian equities with zero stamp duty and ultra-tight overnight financing rates.',
    icon: 'cfd',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Available Equities', value: '1,200+' },
      { label: 'Margin Req.', value: 'From 5%' },
      { label: 'Order Execution', value: '< 4ms' },
    ],
    features: [
      'Tech titans: AAPL, NVDA, TSLA, MSFT',
      'Global indices: NAS100, US30, GER40, UK100',
      'Dividend adjustment credit automation',
      'Zero clearing commission tiers'
    ]
  },
  {
    id: 'raw',
    title: 'Raw Spreads & DMA Routing',
    badge: 'FROM 0.0 PIPS',
    shortDesc: 'Direct-to-market interbank liquidity aggregated across 16 Tier-1 banks, delivering true raw spreads from 0.0 pips.',
    fullDesc: 'Experience zero-markup pricing directly from primary liquidity providers. Engineered specifically for high-frequency algorithmic EAs and professional scalpers demanding minimal friction and zero dealer intervention.',
    icon: 'raw',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'EUR/USD Spread', value: '0.0 Pips' },
      { label: 'Execution Fill', value: '100% DMA' },
      { label: 'Commission/Lot', value: '$2.50' },
    ],
    features: [
      'Equinix LD4 & NY4 cross-connect fiber',
      'Deep market depth level 2 visibility',
      'No dealing desk (NDD) / STP direct routing',
      'Negative balance guarantee included'
    ]
  }
];

interface ProductGridProps {
  onSelectProduct: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-black relative">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-semibold">
              CORE TRADING MODULES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
              ENGINEERED FOR INSTITUTIONAL VELOCITY
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm leading-relaxed">
            Multi-asset infrastructure built for quantitative rigor, algorithmic execution, and transparent capital custody.
          </p>
        </div>

        {/* 4-Card Horizontal Layout Grid with Rich Photographic Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => {
            return (
              <div
                key={prod.id}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/50"
              >
                {/* Media Image Background with Parallax/Zoom & Vignette Scrim */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Glassmorphic Dark Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
                  <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-emerald-950/20 transition-colors" />
                </div>

                {/* Top glow hover accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/0 group-hover:via-emerald-400/80 to-transparent transition-all duration-500 z-10" />

                <div className="relative z-10">
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-white/15 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all backdrop-blur-md shadow-lg">
                      {prod.icon === 'ea' && <Cpu className="w-6 h-6" />}
                      {prod.icon === 'pamm' && <Users className="w-6 h-6" />}
                      {prod.icon === 'cfd' && <BarChart3 className="w-6 h-6" />}
                      {prod.icon === 'raw' && <ArrowLeftRight className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors backdrop-blur-md">
                      {prod.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-200 transition-colors mb-3 leading-snug">
                    {prod.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300/90 leading-relaxed mb-6 font-sans">
                    {prod.shortDesc}
                  </p>

                  {/* Quick Stat Pill Bar */}
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-white/10">
                    {prod.stats.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="bg-black/60 rounded-xl p-2.5 border border-white/10 backdrop-blur-sm">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">{s.label}</div>
                        <div className="text-sm font-bold font-mono text-emerald-400 tabular-nums">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer Button */}
                <button
                  onClick={() => setActiveModalProduct(prod)}
                  className="relative z-10 w-full mt-2 py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-emerald-500 hover:text-slate-950 border border-white/15 hover:border-emerald-400 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer group-hover:border-emerald-500/40 backdrop-blur-sm"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for In-Depth Product Specs */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  {activeModalProduct.icon === 'ea' && <Cpu className="w-6 h-6" />}
                  {activeModalProduct.icon === 'pamm' && <Users className="w-6 h-6" />}
                  {activeModalProduct.icon === 'cfd' && <BarChart3 className="w-6 h-6" />}
                  {activeModalProduct.icon === 'raw' && <ArrowLeftRight className="w-6 h-6" />}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-emerald-400 font-semibold">
                    {activeModalProduct.badge} SPECIFICATIONS
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {activeModalProduct.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalProduct.fullDesc}
            </p>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activeModalProduct.stats.map((stat, i) => (
                <div key={i} className="rounded-xl bg-black/50 border border-white/10 p-3 text-center">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">{stat.label}</div>
                  <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-2 mb-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technical Highlights</div>
              {activeModalProduct.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onSelectProduct(activeModalProduct.id);
                  setActiveModalProduct(null);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer text-center"
              >
                Deploy Strategy on Account
              </button>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
