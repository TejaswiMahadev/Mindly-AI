import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onGetStarted: () => void;
}

export default function SplashScreen({ onGetStarted }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0066CC] via-[#0088FF] to-[#00AAFF]">
      {/* Subtle Grid Overlay on Top */}
      <div className="absolute inset-0 grid-overlay"></div>

      {/* 3D Perspective Grid Bottom */}
      <div className="absolute inset-0 perspective-grid-bottom"></div>

      {/* Floating Star Particles */}
      <div className="absolute top-8 left-8">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-yellow-400 animate-blink"></div>
          <div className="w-4 h-4 bg-yellow-400 animate-blink" style={{ animationDelay: '0.3s' }}></div>
        </div>
        <div className="w-4 h-4 bg-yellow-400 mt-2 animate-blink" style={{ animationDelay: '0.6s' }}></div>
      </div>

      <div className="absolute top-8 right-8">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-orange-500 animate-blink" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-orange-500 animate-blink" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="w-4 h-4 bg-orange-500 mt-2 ml-auto animate-blink" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Scattered Stars */}
      <div className="absolute top-20 left-1/4 w-6 h-6 star-plus text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}>✦</div>
      <div className="absolute top-32 right-1/4 w-6 h-6 star-plus text-orange-400 animate-pulse" style={{ animationDelay: '0.7s' }}>✦</div>
      <div className="absolute top-1/3 left-32 w-6 h-6 star-plus text-gray-300 animate-pulse" style={{ animationDelay: '0.3s' }}>✦</div>
      <div className="absolute bottom-1/3 right-32 w-6 h-6 star-plus text-yellow-500 animate-pulse" style={{ animationDelay: '0.9s' }}>✦</div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 star-plus text-yellow-400 animate-pulse" style={{ animationDelay: '1.1s' }}>✦</div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* MINDLY Text with Layered Effect */}
        <div className="relative mb-32">
          <h1 className="mindly-text">
            MINDLY
          </h1>
        </div>

        {/* Get Started Button */}
        <div className="relative inline-block">
          <button
            onClick={onGetStarted}
            className="get-started-button"
          >
            GET STARTED
          </button>

          {/* Loading Dots Below Button */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-yellow-400 animate-blink"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
