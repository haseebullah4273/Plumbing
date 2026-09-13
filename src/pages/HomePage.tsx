import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { ServicesSection } from '../components/home/ServicesSection';
import { ServicesInteractive } from '../components/home/ServicesInteractive';
import { EmergencyPlumbingBanner } from '../components/home/EmergencyPlumbingBanner';
import { HowItWorks } from '../components/home/HowItWorks';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { LocalSeoContent } from '../components/home/LocalSeoContent';
import { FullWidthCTA } from '../components/home/FullWidthCTA';
import { PageRoute } from '../types';

interface HomePageProps {
  navigate: (route: PageRoute) => void;
  onOpenRequestModal: (category?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onOpenRequestModal,
}) => {
  return (
    <div className="flex flex-col">
      {/* 1. Cinematic Hero Section with Floating Emergency Card */}
      <HeroSection
        onOpenRequestModal={() => onOpenRequestModal()}
        navigate={navigate}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Core Services Grid */}
      <ServicesSection
        navigate={navigate}
        onOpenRequestModal={onOpenRequestModal}
      />

      {/* 4. Interactive Desktop Service Deep-Dive */}
      <ServicesInteractive
        navigate={navigate}
        onOpenRequestModal={onOpenRequestModal}
      />

      {/* 5. Dramatic Dark Navy Emergency Section */}
      <EmergencyPlumbingBanner navigate={navigate} />

      {/* 6. How It Works (3 Steps with Progress Line) */}
      <HowItWorks onOpenRequestModal={() => onOpenRequestModal()} />

      {/* 7. Why Choose Us (Split Screen & Stats) */}
      <WhyChooseUs />

      {/* 8. Before & After Interactive Draggable Comparison Slider */}
      <BeforeAfterSlider />

      {/* 9. Reviews & Google Trust Section */}
      <TestimonialsCarousel navigate={navigate} />

      {/* 10. Local Plumbing Educational / SEO Guide */}
      <LocalSeoContent navigate={navigate} />

      {/* 12. Full Width High-Converting Bottom CTA */}
      <FullWidthCTA onOpenRequestModal={() => onOpenRequestModal()} />
    </div>
  );
};
