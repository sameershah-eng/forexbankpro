/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PromoSlider } from './components/PromoSlider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProfitCalculator } from './components/ProfitCalculator';
import { LiveTerminal } from './components/LiveTerminal';
import { ComplianceGrid } from './components/ComplianceGrid';
import { PartnershipSection } from './components/PartnershipSection';
import { Footer } from './components/Footer';
import { AuthModals } from './components/AuthModals';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [partnershipModalOpen, setPartnershipModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedLegalDoc, setSelectedLegalDoc] = useState<string | null>(null);

  const handleStartDemo = () => {
    setRegisterModalOpen(true);
  };

  const handleExploreAgents = () => {
    const el = document.getElementById('live-monitor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productId: string) => {
    setRegisterModalOpen(true);
  };

  const handlePromoAction = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setRegisterModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-black antialiased">
      {/* 1. Top Announcement Banner Slider */}
      <PromoSlider onActionClick={handlePromoAction} />

      {/* 2. Modern Glass Top Navbar with Live Status Bar */}
      <Navbar
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenVideoTour={() => setVideoModalOpen(true)}
        selectedCurrency={selectedCurrency}
        onSelectCurrency={setSelectedCurrency}
      />

      <main className="flex-1">
        {/* 3. Video-Enhanced Hero Section & Metrics Banner */}
        <Hero
          onStartDemo={handleStartDemo}
          onExploreAgents={handleExploreAgents}
          onOpenVideoTour={() => setVideoModalOpen(true)}
          currency={selectedCurrency}
        />

        {/* 4. Media-Rich Product & Module Feature Grid (4-Card Horizontal Layout) */}
        <ProductGrid
          onSelectProduct={handleSelectProduct}
        />

        {/* 5. Integrated Profit & Risk Calculator Component (2-Column Grid) */}
        <ProfitCalculator
          currency={selectedCurrency}
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* 6. AI Agent Live Terminal Feed */}
        <LiveTerminal />

        {/* 7. Regulatory Compliance & Capital Safety Grid (3-Column Layout) */}
        <ComplianceGrid />

        {/* Institutional Partnership Ecosystem */}
        <PartnershipSection
          onPartnerApply={() => setPartnershipModalOpen(true)}
        />
      </main>

      {/* 8. Multi-Column Glass Footer */}
      <Footer
        onOpenDoc={(title) => setSelectedLegalDoc(title)}
      />

      {/* Video Explainer Modal Player */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onStartTrading={() => {
          setVideoModalOpen(false);
          setRegisterModalOpen(true);
        }}
      />

      {/* Interactive Authentication & Regulatory Modals */}
      <AuthModals
        registerOpen={registerModalOpen}
        onCloseRegister={() => setRegisterModalOpen(false)}
        loginOpen={loginModalOpen}
        onCloseLogin={() => setLoginModalOpen(false)}
        docTitle={selectedLegalDoc}
        onCloseDoc={() => setSelectedLegalDoc(null)}
        partnershipOpen={partnershipModalOpen}
        onClosePartnership={() => setPartnershipModalOpen(false)}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
}
