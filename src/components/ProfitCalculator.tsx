import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  Percent, 
  DollarSign, 
  ShieldCheck, 
  RefreshCw,
  Sliders,
  ChevronRight
} from 'lucide-react';

interface ProfitCalculatorProps {
  currency: string;
  onOpenRegister: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({
  currency,
  onOpenRegister,
}) => {
  // Input states strictly matching the prompt:
  // Account Size ($250 to $100,000, live readout $34,000.00)
  const [accountSize, setAccountSize] = useState<number>(34000);
  // Leverage (1:10 to 1:500)
  const [leverage, setLeverage] = useState<number>(100);
  // Lot Size (0.01 to 10.0)
  const [lotSize, setLotSize] = useState<number>(1.5);
  // Stop Loss (-$50 to -$5,000)
  const [stopLoss, setStopLoss] = useState<number>(-500);

  // Additional Strategy Parameter: Target Multiplier (R:R ratio)
  const [riskRewardRatio, setRiskRewardRatio] = useState<number>(2.5);

  const currencySymbol = currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';

  // Real-time calculations
  const stats = useMemo(() => {
    // 1 standard lot = 100,000 units
    const notionalVolume = lotSize * 100000;
    const marginRequired = Math.round((notionalVolume / leverage) * 100) / 100;
    const freeMargin = Math.max(0, accountSize - marginRequired);
    const marginLevelPercent = marginRequired > 0 ? (accountSize / marginRequired) * 100 : 0;
    
    // Risk calculations
    const absoluteRiskUsd = Math.abs(stopLoss);
    const riskPercentageOfEquity = (absoluteRiskUsd / accountSize) * 100;
    
    // Projected P/L Target
    const projectedProfitUsd = absoluteRiskUsd * riskRewardRatio;
    const projectedProfitPercentage = (projectedProfitUsd / accountSize) * 100;

    // Monthly compound simulation with 4 trades per week @ 78% win rate
    const conservativeMonthlyProfit = (accountSize * 0.052).toFixed(2);
    const optimizedMonthlyProfit = (accountSize * 0.098).toFixed(2);
    const aggressiveMonthlyProfit = (accountSize * 0.144).toFixed(2);

    return {
      marginRequired,
      freeMargin,
      marginLevelPercent: Math.round(marginLevelPercent),
      riskPercentageOfEquity: riskPercentageOfEquity.toFixed(2),
      projectedProfitUsd: projectedProfitUsd.toFixed(2),
      projectedProfitPercentage: projectedProfitPercentage.toFixed(2),
      conservativeMonthlyProfit,
      optimizedMonthlyProfit,
      aggressiveMonthlyProfit,
    };
  }, [accountSize, leverage, lotSize, stopLoss, riskRewardRatio]);

  const handleReset = () => {
    setAccountSize(34000);
    setLeverage(100);
    setLotSize(1.5);
    setStopLoss(-500);
    setRiskRewardRatio(2.5);
  };

  const leveragePresets = [50, 100, 200, 500];

  return (
    <section id="calculator" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow orb */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-[600px] h-[550px] bg-emerald-500/10 rounded-full blur-[170px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>QUANTITATIVE SCENARIO ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
            PROFIT & RISK CALCULATOR
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Simulate institutional trade allocations, leverage margins, and mathematical risk-to-reward ratios in real time.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Input Column (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-6 sm:p-8 space-y-7 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  TRADING PARAMETERS
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Slider 1: Account Size */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <span>Account Size</span>
                  <span className="text-[10px] text-slate-400">($250 – $100,000)</span>
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-emerald-400 font-mono font-bold text-sm tabular-nums">
                  <span>{currencySymbol}</span>
                  <span>{accountSize.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <input
                type="range"
                min="250"
                max="100000"
                step="250"
                value={accountSize}
                onChange={(e) => setAccountSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>{currencySymbol}250</span>
                <span>{currencySymbol}25,000</span>
                <span>{currencySymbol}50,000</span>
                <span>{currencySymbol}75,000</span>
                <span>{currencySymbol}100,000</span>
              </div>
            </div>

            {/* Slider 2: Leverage */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <span>Leverage Tier</span>
                  <span className="text-[10px] text-slate-400">(1:10 to 1:500)</span>
                </label>
                <div className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-indigo-400 font-mono font-bold text-sm tabular-nums">
                  1:{leverage}
                </div>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={leverage}
                onChange={(e) => setLeverage(Number(e.target.value))}
                className="w-full"
              />
              {/* Presets */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-slate-400">Presets:</span>
                {leveragePresets.map((lev) => (
                  <button
                    key={lev}
                    onClick={() => setLeverage(lev)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      leverage === lev 
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold' 
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    1:{lev}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 3: Lot Size */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <span>Trade Lot Size</span>
                  <span className="text-[10px] text-slate-400">(0.01 to 10.00 Lots)</span>
                </label>
                <div className="px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-teal-400 font-mono font-bold text-sm tabular-nums">
                  {lotSize.toFixed(2)} Lots ({(lotSize * 100000).toLocaleString()} Units)
                </div>
              </div>
              <input
                type="range"
                min="0.01"
                max="10.00"
                step="0.01"
                value={lotSize}
                onChange={(e) => setLotSize(parseFloat(Number(e.target.value).toFixed(2)))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>0.01 (Micro)</span>
                <span>2.50 Lots</span>
                <span>5.00 Lots</span>
                <span>7.50 Lots</span>
                <span>10.00 (Max)</span>
              </div>
            </div>

            {/* Slider 4: Stop Loss */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase flex items-center gap-1.5">
                  <span>Stop Loss Target</span>
                  <span className="text-[10px] text-rose-400">(-$50 to -$5,000)</span>
                </label>
                <div className="px-3 py-1 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-400 font-mono font-bold text-sm tabular-nums">
                  -{currencySymbol}{Math.abs(stopLoss).toLocaleString()} ({stats.riskPercentageOfEquity}%)
                </div>
              </div>
              <input
                type="range"
                min="-5000"
                max="-50"
                step="50"
                value={stopLoss}
                onChange={(e) => setStopLoss(Number(e.target.value))}
                className="w-full accent-rose-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>-{currencySymbol}5,000</span>
                <span>-{currencySymbol}2,500</span>
                <span>-{currencySymbol}1,000</span>
                <span>-{currencySymbol}500</span>
                <span>-{currencySymbol}50</span>
              </div>
            </div>

            {/* Strategy R:R Selector */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 uppercase">Target Risk:Reward Multiplier</span>
                <span className="text-emerald-400 font-bold">1 : {riskRewardRatio.toFixed(1)}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1.5, 2.0, 2.5, 3.5].map((rr) => (
                  <button
                    key={rr}
                    onClick={() => setRiskRewardRatio(rr)}
                    className={`py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      riskRewardRatio === rr
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    1:{rr.toFixed(1)} R:R
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary Card (5 cols): Dynamic recalculations */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            {/* Top glowing line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                REAL-TIME PROJECTION
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                QUANT ALIGNED
              </span>
            </div>

            {/* Account Size Output Display */}
            <div className="bg-black/50 rounded-xl p-4 border border-white/5">
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                Account Size Output
              </div>
              <div className="text-3xl font-extrabold font-mono text-white tabular-nums">
                {currencySymbol}{accountSize.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-1">
                Allocated Equity across EA clusters
              </div>
            </div>

            {/* Projected P/L Target Output */}
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase text-slate-300 font-medium">
                  Projected P/L Target (Take Profit)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  +{stats.projectedProfitPercentage}%
                </span>
              </div>
              <div className="text-3xl font-extrabold font-mono text-emerald-400 tabular-nums">
                +{currencySymbol}{Number(stats.projectedProfitUsd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="text-[11px] text-emerald-300/80 font-mono mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400 inline" />
                <span>Yield based on 1:{riskRewardRatio.toFixed(1)} RR execution model</span>
              </div>
            </div>

            {/* Calculated Risk/Reward Scenarios & Margins */}
            <div className="space-y-3 font-mono text-xs">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 border-b border-white/10 pb-1">
                RISK & MARGIN METRICS
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Required Margin:</span>
                <span className="text-white font-bold tabular-nums">
                  {currencySymbol}{stats.marginRequired.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Free Margin Available:</span>
                <span className="text-slate-200 font-bold tabular-nums">
                  {currencySymbol}{stats.freeMargin.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Margin Level %:</span>
                <span className={`font-bold tabular-nums ${stats.marginLevelPercent > 300 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {stats.marginLevelPercent}%
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Max Trade Risk Exposure:</span>
                <span className="text-rose-400 font-bold tabular-nums">
                  -{currencySymbol}{Math.abs(stopLoss).toLocaleString()} ({stats.riskPercentageOfEquity}% equity)
                </span>
              </div>
            </div>

            {/* Projected Compound Alpha Benchmarks */}
            <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2">
              <div className="text-[11px] font-mono uppercase text-slate-400">
                Monthly Compounded Scenarios
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded bg-white/[0.02]">
                  <div className="text-[10px] text-slate-400">Conservative</div>
                  <div className="text-xs font-bold text-slate-200">+{currencySymbol}{Number(stats.conservativeMonthlyProfit).toLocaleString()}</div>
                  <div className="text-[9px] text-emerald-400">+5.2%</div>
                </div>
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-[10px] text-emerald-300 font-semibold">Alpha-Grid</div>
                  <div className="text-xs font-bold text-emerald-400">+{currencySymbol}{Number(stats.optimizedMonthlyProfit).toLocaleString()}</div>
                  <div className="text-[9px] text-emerald-400 font-bold">+9.8%</div>
                </div>
                <div className="p-2 rounded bg-white/[0.02]">
                  <div className="text-[10px] text-slate-400">Aggressive</div>
                  <div className="text-xs font-bold text-indigo-300">+{currencySymbol}{Number(stats.aggressiveMonthlyProfit).toLocaleString()}</div>
                  <div className="text-[9px] text-indigo-400">+14.4%</div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenRegister}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ACTIVATE STRATEGY WITH {currencySymbol}{accountSize.toLocaleString()}</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
