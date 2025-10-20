import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SkillMarketplace from './components/SkillMarketplace';
import Testimonials from './components/Testimonials';
import JoinGame from './components/JoinGame';
import Footer from './components/Footer';

function App() {
  const [showMainSite, setShowMainSite] = useState(false);

  if (!showMainSite) {
    return <SplashScreen onGetStarted={() => setShowMainSite(true)} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <HowItWorks />
      <SkillMarketplace />
      <Testimonials />
      <JoinGame />
      <Footer />
    </div>
  );
}

export default App;
