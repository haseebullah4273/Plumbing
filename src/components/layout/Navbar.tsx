import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Wrench, 
  AlertTriangle, 
  Droplets, 
  Flame, 
  Search, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { PageRoute } from '../../types';
import { businessConfig } from '../../data/businessConfig';
import { servicesData } from '../../data/services';

interface NavbarProps {
  currentRoute: PageRoute;
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  navigate,
  onOpenRequestModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; isDropdown?: boolean }[] = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services', isDropdown: true },
    { label: 'About', route: '/about' },
    { label: 'Reviews', route: '/reviews' },
    { label: 'Service Areas', route: '/service-areas' },
    { label: 'FAQ', route: '/faq' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle': return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-4 h-4 text-sky-500" />;
      case 'Flame': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'Search': return <Search className="w-4 h-4 text-emerald-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-500" />;
      default: return <Wrench className="w-4 h-4 text-indigo-500" />;
    }
  };

  const isCurrentActive = (linkRoute: PageRoute) => {
    if (linkRoute === '/') return currentRoute === '/';
    return currentRoute.startsWith(linkRoute);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5EA8] rounded-lg p-1"
            id="navbar-logo-btn"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#073B6B] to-[#0D5EA8] text-white flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-200">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-[#0B172A] tracking-tight">
                  The Homist
                </span>
                <span className="text-xs uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  KARACHI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                PPR • PVC • GI Specialists • 24/7 Doorstep
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const active = isCurrentActive(item.route);

              if (item.isDropdown) {
                return (
                  <div
                    key={item.route}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('/services')}
                      className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-colors relative cursor-pointer ${
                        active ? 'text-[#0D5EA8]' : 'text-slate-700 hover:text-[#0D5EA8] hover:bg-slate-50'
                      }`}
                      id="nav-services-dropdown-btn"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#0D5EA8]' : 'text-slate-400'
                        }`}
                      />
                      {active && (
                        <motion.div
                          layoutId="navbar-active-indicator"
                          className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0D5EA8] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Services Dropdown Panel */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 mt-1 grid grid-cols-2 gap-2 z-50"
                        >
                          <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Core Plumbing Specialties
                            </span>
                            <button
                              onClick={() => handleNavClick('/services')}
                              className="text-xs font-semibold text-[#0D5EA8] hover:underline flex items-center gap-1"
                            >
                              View All Services <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          {servicesData.map((s) => (
                            <button
                              key={s.slug}
                              onClick={() => handleNavClick(`/services/${s.slug}` as PageRoute)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group cursor-pointer"
                            >
                              <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors mt-0.5">
                                {getServiceIcon(s.iconName)}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-slate-900 group-hover:text-[#0D5EA8] transition-colors flex items-center gap-1.5">
                                  <span>{s.title}</span>
                                  {s.isEmergency && (
                                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">
                                      24/7
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {s.shortDesc}
                                </p>
                              </div>
                            </button>
                          ))}

                          <div className="col-span-2 mt-2 pt-2.5 border-t border-slate-100 bg-slate-50 -mx-4 -mb-4 p-3.5 rounded-b-2xl flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                              <span>Need diagnostic advice or an estimate?</span>
                            </div>
                            <button
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                onOpenRequestModal();
                              }}
                              className="text-xs font-bold text-white bg-[#0D5EA8] hover:bg-[#073B6B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Request Fast Quote
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors relative cursor-pointer ${
                    active ? 'text-[#0D5EA8]' : 'text-slate-700 hover:text-[#0D5EA8] hover:bg-slate-50'
                  }`}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="navbar-active-indicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0D5EA8] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA: WhatsApp, Phone & Request Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all group"
              id="navbar-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={businessConfig.rawPhone}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-[#0D5EA8] hover:bg-blue-50/50 transition-all text-left group"
              id="navbar-phone-cta"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 fill-current animate-pulse-subtle" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                  24/7 Helpline
                </div>
                <div className="text-xs font-extrabold text-slate-900 tracking-tight">
                  {businessConfig.phone}
                </div>
              </div>
            </a>

            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5"
              id="navbar-whatsapp-cta-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp, Quick Phone & Hamburger Menu */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={businessConfig.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm"
              aria-label="Chat on WhatsApp"
              id="navbar-mobile-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <a
              href={businessConfig.rawEmergencyPhone}
              className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-sm"
              aria-label="Call emergency plumber now"
              id="navbar-mobile-call-btn"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              id="navbar-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-slate-200 bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                      isCurrentActive(item.route)
                        ? 'bg-blue-50 text-[#0D5EA8]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>

              {/* Mobile Sub-services list */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                  Emergency & Core Services
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {servicesData.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => handleNavClick(`/services/${s.slug}` as PageRoute)}
                      className="text-xs text-left p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 font-medium truncate cursor-pointer"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Bottom Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <a
                  href={businessConfig.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl shadow-sm transition-colors text-center text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp: {businessConfig.phone}</span>
                </a>

                <a
                  href={businessConfig.rawEmergencyPhone}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl shadow-sm transition-colors text-center text-sm"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Emergency Plumber: {businessConfig.emergencyPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
