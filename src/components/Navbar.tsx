import React, { useState } from 'react';
import { 
  Activity, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Zap, 
  Globe2,
  PlayCircle
} from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenLogin: () => void;
  onOpenVideoTour: () => void;
  selectedCurrency: string;
  onSelectCurrency: (currency: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegister,
  onOpenLogin,
  onOpenVideoTour,
  selectedCurrency,
  onSelectCurrency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const currencies = ['USD', 'EUR', 'GBP', 'USDT'];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/80 border-b border-white/10 transition-all">
      {/* Live Status Pill Top Bar Banner */}
      <div className="w-full bg-slate-950/90 border-b border-white/5 py-1.5 px-4 text-xs font-mono text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4 no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400 hidden sm:inline">Live AI Trading Agents Monitor</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <Zap className="w-3 h-3 inline text-emerald-400" />
              Alpha-Grid EA: ACTIVE
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Latency: <span className="text-emerald-400">122ms</span></span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Win rate: <span className="text-emerald-400 font-bold">82%</span></span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-400 shrink-0">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              BVI FSC Lic. #1024298
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">Barclays Segregated Trust</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Custom geometric logo mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-500 p-[1.5px] shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/25 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  FBP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                FOREX BANK PRO
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono font-medium -mt-1">
                Institutional Quantitative
              </span>
            </div>
          </a>
        </div>

        {/* Center Navigation Links matching the prompt wireframe */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => scrollToSection('our-system')}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Our System
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('funds-safety')}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Funds Safety
          </button>
          <button
            onClick={() => scrollToSection('partnership')}
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Partnership
          </button>
          <button
            onClick={onOpenVideoTour}
            className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <PlayCircle className="w-4 h-4 text-emerald-400" />
            <span>Media Center</span>
          </button>
        </nav>

        {/* Right Controls: Currency Selector & Auth Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-slate-200 transition-all cursor-pointer"
            >
              <Globe2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{selectedCurrency}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${currencyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-xl bg-slate-900 border border-white/10 shadow-2xl py-1 z-50 backdrop-blur-xl">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onSelectCurrency(curr);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-mono flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer ${
                      selectedCurrency === curr ? 'text-emerald-400 font-bold bg-emerald-500/10' : 'text-slate-300'
                    }`}
                  >
                    <span>{curr}</span>
                    {selectedCurrency === curr && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Register Button (Outline) */}
          <button
            onClick={onOpenRegister}
            className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all cursor-pointer"
          >
            REGISTER
          </button>

          {/* Login Button (Solid Primary) */}
          <button
            onClick={onOpenLogin}
            className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
          >
            LOGIN
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950"
          >
            LOGIN
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-sm">
            <button
              onClick={() => scrollToSection('our-system')}
              className="text-left py-2 text-slate-300 hover:text-emerald-400"
            >
              Our System
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-left py-2 text-slate-300 hover:text-emerald-400"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('funds-safety')}
              className="text-left py-2 text-slate-300 hover:text-emerald-400"
            >
              Funds Safety
            </button>
            <button
              onClick={() => scrollToSection('partnership')}
              className="text-left py-2 text-slate-300 hover:text-emerald-400"
            >
              Partnership
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVideoTour();
              }}
              className="text-left py-2 text-emerald-400 flex items-center gap-2"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Media Center (Video Tour)</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between py-1 text-xs text-slate-400 font-mono">
              <span>Account Currency</span>
              <div className="flex gap-1">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => onSelectCurrency(c)}
                    className={`px-2 py-1 rounded text-xs ${
                      selectedCurrency === c ? 'bg-emerald-500 text-black font-bold' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 font-semibold text-center text-xs tracking-wider"
            >
              REGISTER ACCOUNT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-center text-xs tracking-wider"
            >
              CLIENT LOGIN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
