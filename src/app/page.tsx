//page.tsx
'use client';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { useLoadingAnimation } from '@/hooks/useLoadingAnimation';
import { useMouseTracking } from '@/hooks/useMouseTracking';
import { Section } from '@/types';

// Components
import { LoadingScreen } from '@/components/Loading/LoadingScreen';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ProfileCard } from '@/components/Profile/ProfileCard';
import { NavigationMenu } from '@/components/Navigation/NavigationMenu';
import { SectionIndicator } from '@/components/Navigation/SectionIndicator';
import { About } from '@/components/Sections/About/About';
import { Projects } from '@/components/Sections/Projects/Projects';
import { Contact } from '@/components/Sections/Contact/Contact';

export default function Home() {
  // Refs
  const mainRef = useRef<HTMLDivElement>(null);

  // Custom hooks
  const { isLoading } = useLoadingAnimation();
  const { activeSection, isScrolled } = useScrollTracking();
  const mousePosition = useMouseTracking(mainRef);

  // Section change handler
  const handleSectionChange = (section: Section) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="relative min-h-screen">
          <ParticleBackground />
          {/* Interactive Background */}

          {/* Profile Card */}
          <ProfileCard isScrolled={isScrolled} />

          {/* Navigation */}
          <NavigationMenu 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
            isScrolled={isScrolled}
            isLandingVisible={!isScrolled}
          />
          
          {/* Mobile Navigation */}
          <motion.div className="lg:hidden">
            <SectionIndicator 
              activeSection={activeSection} 
              onSectionChange={handleSectionChange} 
              isLandingVisible={!isScrolled}
            />
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10">
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
      )}
    </AnimatePresence>
  );
}