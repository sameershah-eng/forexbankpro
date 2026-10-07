export interface TradeExecution {
  id: string;
  timestamp: string;
  asset: string;
  action: 'BUY' | 'SELL';
  lots: number;
  openPrice: string;
  closePrice: string;
  pnlUsd: number;
  pnlPips: string;
  strategy: string;
  status: 'PROFIT_TAKE' | 'STOP_LOSS' | 'TRAILING_HIT' | 'EXEC';
}

export const INITIAL_TRADES: TradeExecution[] = [
  {
    id: "TX-90412",
    timestamp: "03:39:53",
    asset: "EUR/USD",
    action: "BUY",
    lots: 1.25,
    openPrice: "1.08420",
    closePrice: "1.08500",
    pnlUsd: 200.00,
    pnlPips: "+0.00080",
    strategy: "Alpha-Grid EA v4",
    status: "PROFIT_TAKE",
  },
  {
    id: "TX-90411",
    timestamp: "03:38:19",
    asset: "XAU/USD",
    action: "BUY",
    lots: 0.50,
    openPrice: "2345.10",
    closePrice: "2349.80",
    pnlUsd: 235.00,
    pnlPips: "+4.70 pts",
    strategy: "Quantum Momentum",
    status: "PROFIT_TAKE",
  },
  {
    id: "TX-90410",
    timestamp: "03:36:45",
    asset: "GBP/JPY",
    action: "SELL",
    lots: 0.80,
    openPrice: "198.450",
    closePrice: "198.310",
    pnlUsd: 140.00,
    pnlPips: "+0.140",
    strategy: "Alpha-Grid EA v4",
    status: "PROFIT_TAKE",
  },
  {
    id: "TX-90409",
    timestamp: "03:35:02",
    asset: "USD/JPY",
    action: "SELL",
    lots: 1.00,
    openPrice: "155.620",
    closePrice: "155.710",
    pnlUsd: -90.00,
    pnlPips: "-0.090",
    strategy: "HFT Micro-Scalper",
    status: "STOP_LOSS",
  },
  {
    id: "TX-90408",
    timestamp: "03:33:14",
    asset: "BTC/USDT",
    action: "BUY",
    lots: 0.20,
    openPrice: "64820.00",
    closePrice: "65140.00",
    pnlUsd: 64.00,
    pnlPips: "+320.00",
    strategy: "Quantum Momentum",
    status: "PROFIT_TAKE",
  },
  {
    id: "TX-90407",
    timestamp: "03:31:58",
    asset: "USD/CAD",
    action: "BUY",
    lots: 1.50,
    openPrice: "1.36540",
    closePrice: "1.36625",
    pnlUsd: 127.50,
    pnlPips: "+0.00085",
    strategy: "Alpha-Grid EA v4",
    status: "TRAILING_HIT",
  },
  {
    id: "TX-90406",
    timestamp: "03:29:40",
    asset: "AUD/USD",
    action: "SELL",
    lots: 2.00,
    openPrice: "0.66210",
    closePrice: "0.66160",
    pnlUsd: 100.00,
    pnlPips: "+0.00050",
    strategy: "Alpha-Grid EA v4",
    status: "PROFIT_TAKE",
  },
  {
    id: "TX-90405",
    timestamp: "03:27:12",
    asset: "NAS100",
    action: "BUY",
    lots: 0.75,
    openPrice: "18220.00",
    closePrice: "18260.00",
    pnlUsd: 300.00,
    pnlPips: "+40.0 pts",
    strategy: "Deep Liquidity HFT",
    status: "PROFIT_TAKE",
  }
];

export const ASSET_PAIRS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "XAU/USD",
  "AUD/USD",
  "USD/CAD",
  "BTC/USDT",
  "NAS100",
  "GBP/JPY"
];

export const STRATEGIES = [
  "Alpha-Grid EA v4",
  "Quantum Momentum",
  "HFT Micro-Scalper",
  "Deep Liquidity HFT"
];
