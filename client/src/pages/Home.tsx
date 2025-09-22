import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import UniversalDesignSection from '@/components/UniversalDesignSection';
import DaoGovernanceSection from '@/components/DaoGovernanceSection';
import TokenSystemSection from '@/components/TokenSystemSection';
import LegalFrameworkSection from '@/components/LegalFrameworkSection';
import RoadmapSection from '@/components/RoadmapSection';
import ImpactMetricsSection from '@/components/ImpactMetricsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="solution">
        <SolutionSection />
        <UniversalDesignSection />
        <DaoGovernanceSection />
      </div>
      <div id="tokens">
        <TokenSystemSection />
      </div>
      <LegalFrameworkSection />
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <div id="impact">
        <ImpactMetricsSection />
      </div>
      <Footer />
    </div>
  );
}