import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  KeyRound, 
  Mail, 
  User, 
  Lock, 
  DollarSign, 
  ArrowRight,
  Copy,
  Check,
  FileText
} from 'lucide-react';

interface AuthModalsProps {
  registerOpen: boolean;
  onCloseRegister: () => void;
  loginOpen: boolean;
  onCloseLogin: () => void;
  docTitle: string | null;
  onCloseDoc: () => void;
  partnershipOpen: boolean;
  onClosePartnership: () => void;
  selectedCurrency: string;
}

export const AuthModals: React.FC<AuthModalsProps> = ({
  registerOpen,
  onCloseRegister,
  loginOpen,
  onCloseLogin,
  docTitle,
  onCloseDoc,
  partnershipOpen,
  onClosePartnership,
  selectedCurrency,
}) => {
  // Register state
  const [accountType, setAccountType] = useState<'LIVE' | 'DEMO'>('LIVE');
  const [regFullName, setRegFullName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPlatform, setRegPlatform] = useState('MetaTrader 5 (MT5)');
  const [regLeverage, setRegLeverage] = useState('1:100');
  const [regSuccess, setRegSuccess] = useState(false);
  const [generatedAccount, setGeneratedAccount] = useState<{ id: string; pass: string; server: string } | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [login2FA, setLogin2FA] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Partnership state
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerType, setPartnerType] = useState('Introducing Broker (IB)');
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regEmail) return;

    const accId = Math.floor(10000000 + Math.random() * 90000000).toString();
    const accPass = 'Fbp#' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedAccount({
      id: accId,
      pass: accPass,
      server: accountType === 'LIVE' ? 'ForexBankPro-Live01' : 'ForexBankPro-Demo01'
    });
    setRegSuccess(true);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSuccess(true);
  };

  return (
    <>
      {/* 1. Register Modal */}
      {registerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden font-sans">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />
            
            <button
              onClick={onCloseRegister}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!regSuccess ? (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    INSTITUTIONAL ONBOARDING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Create Trading Account
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Direct connection to Tier-1 interbank liquidity and automated AI execution engines.
                </p>

                {/* Account Type Selector (Live vs Demo) */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-black/60 rounded-xl border border-white/10 mb-5">
                  <button
                    type="button"
                    onClick={() => setAccountType('LIVE')}
                    className={`py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      accountType === 'LIVE'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    REAL LIVE ACCOUNT
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('DEMO')}
                    className={`py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      accountType === 'DEMO'
                        ? 'bg-white/15 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    TRADING DEMO ($50K)
                  </button>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Full Legal Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={regFullName}
                        onChange={(e) => setRegFullName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Work / Private Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="alex@institutional.com"
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Execution Platform
                      </label>
                      <select
                        value={regPlatform}
                        onChange={(e) => setRegPlatform(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
                      >
                        <option value="MetaTrader 5 (MT5)">MetaTrader 5 (MT5)</option>
                        <option value="cTrader DMA">cTrader DMA</option>
                        <option value="FIX API 4.4">FIX API 4.4 Bridge</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Max Account Leverage
                      </label>
                      <select
                        value={regLeverage}
                        onChange={(e) => setRegLeverage(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-400"
                      >
                        <option value="1:50">1:50 (Standard)</option>
                        <option value="1:100">1:100 (Balanced)</option>
                        <option value="1:200">1:200 (Pro)</option>
                        <option value="1:500">1:500 (Max Quant)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Base Currency: <strong className="text-emerald-400">{selectedCurrency}</strong></span>
                    <span>Min. Initial Deposit: <strong className="text-white">$250</strong></span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <span>{accountType === 'LIVE' ? 'CREATE LIVE TRADING ACCOUNT' : 'LAUNCH DEMO SIMULATOR'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              /* Success Credential View */
              <div className="text-center py-4 space-y-5 font-mono">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Account Provisioned!</h3>
                  <p className="text-xs text-slate-400">
                    Your institutional trading credentials have been created on the Equinix LD4 node.
                  </p>
                </div>

                {generatedAccount && (
                  <div className="p-4 rounded-xl bg-black/70 border border-emerald-500/30 text-left space-y-2 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Account Login ID:</span>
                      <span className="text-emerald-400 font-bold">{generatedAccount.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Master Password:</span>
                      <span className="text-white font-bold">{generatedAccount.pass}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Server Node:</span>
                      <span className="text-indigo-300 font-bold">{generatedAccount.server}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Platform:</span>
                      <span className="text-white">{regPlatform}</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (generatedAccount) {
                        navigator.clipboard.writeText(`Account ID: ${generatedAccount.id}\nPassword: ${generatedAccount.pass}\nServer: ${generatedAccount.server}`);
                        setCopiedId(true);
                        setTimeout(() => setCopiedId(false), 2000);
                      }
                    }}
                    className="flex-1 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-white hover:bg-white/5 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId ? 'Copied to Clipboard' : 'Copy Credentials'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setRegSuccess(false);
                      onCloseRegister();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden font-sans">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />

            <button
              onClick={onCloseLogin}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!loginSuccess ? (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <KeyRound className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    SECURE CLIENT PORTAL
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Client Account Login
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Access your portfolio, AI trading agents, and fund management.
                </p>

                <form onSubmit={handleLoginSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">
                      Trading Account ID / Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="client@forexbankpro.com or 8092144"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">
                      2FA Authenticator Code (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="6-digit code"
                      value={login2FA}
                      onChange={(e) => setLogin2FA(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-mono text-xs tracking-widest text-center"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded accent-emerald-500" />
                      <span>Remember session</span>
                    </label>
                    <button type="button" className="text-emerald-400 hover:underline">
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>SIGN IN TO PORTAL</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Authenticated Successfully</h3>
                <p className="text-xs text-slate-400">
                  Welcome back. Redirecting to your high-frequency execution dashboard...
                </p>
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-xs text-emerald-400">
                  Session Token: valid (24h) • IP Secured
                </div>
                <button
                  onClick={() => {
                    setLoginSuccess(false);
                    onCloseLogin();
                  }}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs cursor-pointer"
                >
                  Return to Main View
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Legal Document Viewer Modal */}
      {docTitle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col font-sans">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">{docTitle}</h3>
              </div>
              <button
                onClick={onCloseDoc}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed font-sans pr-2">
              <p>
                <strong>Forex Bank Pro Ltd.</strong> is licensed and regulated under the British Virgin Islands Financial Services Commission (FSC License #1024298, Registration #010072121) under the Securities and Investment Business Act (SIBA).
              </p>
              <h4 className="text-sm font-bold text-white uppercase font-mono">1. Scope of Agreement & Risk Acceptance</h4>
              <p>
                By opening a trading account, the Client confirms they have read, understood, and consented to the operational risk parameters governing over-the-counter margin foreign exchange, CFDs on equities, commodities, and index derivatives. Algorithmic trade execution algorithms operate according to quantitative parameters and do not guarantee profits.
              </p>
              <h4 className="text-sm font-bold text-white uppercase font-mono">2. Segregated Custody of Funds</h4>
              <p>
                All client funds are held strictly segregated from the Company's operational capital in designated statutory trust accounts with Tier-1 international credit institutions (including Barclays Bank Plc). In accordance with BVI regulatory guidelines, client funds cannot be used to pay creditors in the unlikely event of insolvency.
              </p>
              <h4 className="text-sm font-bold text-white uppercase font-mono">3. Negative Balance Guarantee</h4>
              <p>
                Retail and institutional clients are covered by an automated negative balance protection stop. Should unexpected market gaps or sovereign flash crashes occur, the client account balance will be normalized to zero at the expense of Forex Bank Pro liquidity reserves.
              </p>
              <h4 className="text-sm font-bold text-white uppercase font-mono">4. Anti-Money Laundering & KYC</h4>
              <p>
                In compliance with FATF and BVI FSC AML/CTF codes, all withdrawals are executed strictly to the originating deposit source in the verified account holder's name.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onCloseDoc}
                className="px-6 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Partnership Modal */}
      {partnershipOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden font-sans">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500" />

            <button
              onClick={onClosePartnership}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!partnerSuccess ? (
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Institutional Partnership
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Apply for Introducing Broker (IB), PAMM Master, or Liquidity White Label tiers.
                </p>

                <form onSubmit={handlePartnerSubmit} className="space-y-4 font-mono text-xs">
                  <div>
                    <label className="block text-slate-300 mb-1">Company / Representative Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Apex Quantitative Partners"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="partners@apexquant.com"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Partnership Category</label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Introducing Broker (IB)">Tier-1 Introducing Broker ($18/lot)</option>
                      <option value="PAMM Fund Manager">PAMM Fund Manager (50% Performance Share)</option>
                      <option value="White Label Brokerage">Full White Label MT5 / API</option>
                      <option value="Affiliate Network">Affiliate CPA Network</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Application Received</h3>
                <p className="text-xs text-slate-400">
                  Thank you, {partnerName}. A senior institutional partnership director will contact you via {partnerEmail} within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setPartnerSuccess(false);
                    onClosePartnership();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
