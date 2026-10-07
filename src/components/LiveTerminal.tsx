import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Play, 
  Pause, 
  ChevronDown, 
  Download, 
  Trash2, 
  Zap, 
  CheckCircle, 
  ShieldAlert,
  Radio
} from 'lucide-react';
import { INITIAL_TRADES, TradeExecution, ASSET_PAIRS, STRATEGIES } from '../data/tradingData';

export const LiveTerminal: React.FC = () => {
  const [trades, setTrades] = useState<TradeExecution[]>(INITIAL_TRADES);
  const [scrollMode, setScrollMode] = useState<'Scrolling' | 'Paused'>('Scrolling');
  const [filterMode, setFilterMode] = useState<'All' | 'Profits' | 'Stops'>('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Dynamic simulation ticker: adds a new trade execution every 3.5 seconds when Scrolling
  useEffect(() => {
    if (scrollMode === 'Paused') return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const pair = ASSET_PAIRS[Math.floor(Math.random() * ASSET_PAIRS.length)];
      const strategy = STRATEGIES[Math.floor(Math.random() * STRATEGIES.length)];
      const isWin = Math.random() < 0.82; // 82% win rate as noted in live pill
      const lots = +(0.1 + Math.random() * 2.5).toFixed(2);
      
      const pnl = isWin 
        ? +(35 + Math.random() * 320).toFixed(2)
        : -+(30 + Math.random() * 120).toFixed(2);
      
      const pips = isWin 
        ? `+${(0.00040 + Math.random() * 0.00150).toFixed(5)}`
        : `-${(0.00030 + Math.random() * 0.00080).toFixed(5)}`;

      const newTrade: TradeExecution = {
        id: `TX-${Math.floor(10000 + Math.random() * 90000)}`,
        timestamp: timeStr,
        asset: pair,
        action: Math.random() > 0.5 ? 'BUY' : 'SELL',
        lots,
        openPrice: (1.08000 + Math.random() * 0.01).toFixed(5),
        closePrice: (1.08000 + Math.random() * 0.01).toFixed(5),
        pnlUsd: pnl,
        pnlPips: pips,
        strategy,
        status: isWin ? 'PROFIT_TAKE' : 'STOP_LOSS',
      };

      setTrades(prev => [newTrade, ...prev.slice(0, 49)]);
    }, 3200);

    return () => clearInterval(interval);
  }, [scrollMode]);

  const filteredTrades = trades.filter(t => {
    if (filterMode === 'Profits') return t.pnlUsd > 0;
    if (filterMode === 'Stops') return t.pnlUsd < 0;
    return true;
  });

  const clearLogs = () => {
    setTrades([]);
  };

  const exportLogs = () => {
    const textData = trades.map(t => 
      `${t.timestamp} [${t.id}] ${t.action} ${t.lots} lots ${t.asset} | PnL: ${t.pnlUsd >= 0 ? '+' : ''}$${t.pnlUsd} (${t.pnlPips}) | ${t.strategy}`
    ).join('\n');
    
    const blob = new Blob([textData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `forex-bank-pro-terminal-${Date.now()}.log`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="live-monitor" className="py-20 md:py-28 bg-black relative">
      {/* Background glow orb */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/10 rounded-full blur-[170px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                REAL-TIME TELEMETRY FEED
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
              AI AGENT LIVE MONITOR
            </h2>
          </div>

          {/* Controls: Mode dropdown, Filter, Pause/Resume, Clear */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-200 hover:border-emerald-500/40 transition-colors cursor-pointer"
              >
                <Radio className={`w-3.5 h-3.5 ${scrollMode === 'Scrolling' ? 'text-emerald-400 animate-pulse' : 'text-amber-400'}`} />
                <span>Mode: <strong className="text-white">{scrollMode}</strong></span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-xl bg-slate-900 border border-white/10 shadow-2xl py-1 z-50 font-mono text-xs">
                  <button
                    onClick={() => {
                      setScrollMode('Scrolling');
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-white/10 ${
                      scrollMode === 'Scrolling' ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-300'
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>Scrolling (Active)</span>
                  </button>
                  <button
                    onClick={() => {
                      setScrollMode('Paused');
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-white/10 ${
                      scrollMode === 'Paused' ? 'text-amber-400 font-bold bg-amber-500/10' : 'text-slate-300'
                    }`}
                  >
                    <Pause className="w-3 h-3" />
                    <span>Paused</span>
                  </button>
                </div>
              )}
            </div>

            {/* Filter pills */}
            <div className="flex items-center bg-slate-900/80 rounded-xl p-1 border border-white/10 text-xs font-mono">
              <button
                onClick={() => setFilterMode('All')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  filterMode === 'All' ? 'bg-white/10 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterMode('Profits')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  filterMode === 'Profits' ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-slate-400 hover:text-emerald-400'
                }`}
              >
                Profits Only
              </button>
              <button
                onClick={() => setFilterMode('Stops')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  filterMode === 'Stops' ? 'bg-rose-500/20 text-rose-400 font-bold' : 'text-slate-400 hover:text-rose-400'
                }`}
              >
                Stops
              </button>
            </div>

            {/* Action buttons */}
            <button
              onClick={exportLogs}
              title="Export Log File"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={clearLogs}
              title="Clear Terminal"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-rose-400 hover:border-rose-500/30 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Container: Dark monospace code box styled like a live execution log */}
        <div className="rounded-2xl bg-slate-950 border border-white/15 shadow-2xl overflow-hidden font-mono">
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">
                exec-node://equinix-ld4.forexbankpro.internal:9082
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="hidden sm:inline">
                Engine: <span className="text-emerald-400">Quantum Alpha-Grid v4.2</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                {filteredTrades.length} TICKS LOGGED
              </span>
            </div>
          </div>

          {/* Terminal Output Log Body */}
          <div className="p-4 sm:p-6 max-h-[460px] min-h-[360px] overflow-y-auto space-y-2 text-xs sm:text-[13px] leading-relaxed bg-black/90 scrollbar-thin scrollbar-thumb-white/10">
            {filteredTrades.length === 0 ? (
              <div className="py-16 text-center text-slate-500">
                [No executions recorded for the selected filter. Resuming feed...]
              </div>
            ) : (
              filteredTrades.map((t) => {
                const isPositive = t.pnlUsd >= 0;
                return (
                  <div
                    key={t.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 px-3 rounded-lg hover:bg-white/[0.03] transition-colors border-l-2 gap-1 sm:gap-4"
                    style={{
                      borderLeftColor: isPositive ? '#10b981' : '#f43f5e',
                    }}
                  >
                    {/* Timestamp & Execution Log Message */}
                    <div className="flex items-baseline gap-2.5 overflow-x-auto no-scrollbar">
                      <span className="text-slate-500 shrink-0 select-none">
                        {t.timestamp}
                      </span>
                      <span className="text-slate-400">
                        - Trade execution to bn <span className="text-slate-300 font-bold">SSD</span>:
                      </span>
                      <span className={isPositive ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                        {t.pnlPips}
                      </span>
                      <span className="text-slate-400">
                        as {t.lots.toFixed(2)} ({t.asset})
                      </span>
                    </div>

                    {/* Profit/Loss Trigger in Dynamic Emerald Green / Rose Red */}
                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                      <span className="text-[11px] text-slate-500 hidden md:inline">
                        [{t.strategy}]
                      </span>
                      <span
                        className={`font-bold tabular-nums px-2.5 py-0.5 rounded ${
                          isPositive
                            ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                            : 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
                        }`}
                      >
                        USDT {isPositive ? `+$${t.pnlUsd.toFixed(2)}` : `-$${Math.abs(t.pnlUsd).toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
            <div ref={terminalBottomRef} />
          </div>

          {/* Terminal Footer Telemetry Strip */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
            <div className="flex items-center gap-4">
              <span>HFT Core: <strong className="text-slate-200">NVDA TensorRT</strong></span>
              <span>Buffer Slip: <strong className="text-emerald-400">0.00000%</strong></span>
              <span className="hidden md:inline">Hash: <strong className="text-slate-400">sha256:d8a4f9...</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Socket Connected: Equinix LD4 (London)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
