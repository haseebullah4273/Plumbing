import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { EmergencyBar } from './components/layout/EmergencyBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileCTA } from './components/layout/MobileCTA';
import { QuickQuoteModal } from './components/forms/QuickQuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { servicesData } from './data/services';

export default function App() {
  // Simple client-side router initialized from hash or default to '/'
  const getInitialRoute = (): PageRoute => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) {
      return hash as PageRoute;
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getInitialRoute);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | undefined>(undefined);

  // Sync with browser hash changes for back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        setCurrentRoute(hash as PageRoute);
      } else if (!hash) {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: PageRoute) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (category?: string) => {
    setSelectedServiceSlug(category);
    setIsQuoteModalOpen(true);
  };

  // Render current page
  const renderCurrentPage = () => {
    // 1. Home
    if (currentRoute === '/') {
      return (
        <HomePage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 2. Services Overview
    if (currentRoute === '/services') {
      return (
        <ServicesPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 3. Individual Service Detail Pages
    if (currentRoute.startsWith('/services/')) {
      const slug = currentRoute.replace('/services/', '');
      const matchedService = servicesData.find((s) => s.slug === slug);
      if (matchedService) {
        return (
          <ServiceDetailPage
            service={matchedService}
            navigate={navigate}
            onOpenRequestModal={handleOpenQuoteModal}
          />
        );
      }
      return (
        <NotFoundPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 4. About Us
    if (currentRoute === '/about') {
      return (
        <AboutPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 5. Reviews
    if (currentRoute === '/reviews') {
      return (
        <ReviewsPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 6. Service Areas
    if (currentRoute === '/service-areas') {
      return (
        <ServiceAreasPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 7. Contact
    if (currentRoute === '/contact') {
      return <ContactPage navigate={navigate} />;
    }

    // 8. FAQ
    if (currentRoute === '/faq') {
      return (
        <FaqPage
          navigate={navigate}
          onOpenRequestModal={handleOpenQuoteModal}
        />
      );
    }

    // 9. 404 Fallback
    return (
      <NotFoundPage
        navigate={navigate}
        onOpenRequestModal={handleOpenQuoteModal}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-slate-900 font-sans selection:bg-sky-200 selection:text-slate-900">
      {/* 1. Global Sticky Emergency Strip */}
      <EmergencyBar />

      {/* 2. Main Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        navigate={navigate}
        onOpenRequestModal={handleOpenQuoteModal}
      />

      {/* 3. Dynamic Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 4. Global Footer */}
      <Footer navigate={navigate} onOpenRequestModal={handleOpenQuoteModal} />

      {/* 5. Mobile Sticky CTA Bar */}
      <MobileCTA onOpenRequestModal={handleOpenQuoteModal} />

      {/* 6. Quick Quote & Service Request Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultCategory={selectedServiceSlug}
      />
    </div>
  );
}
