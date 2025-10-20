import { useState, useEffect } from 'react';
import PixelButton from './PixelButton';

interface SplashScreenProps {
  onGetStarted: () => void;
}

export default function SplashScreen({ onGetStarted }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pixel-blue">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 perspective-grid"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pixel-white animate-blink"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Decorative Pixel Dots */}
      <div className="absolute top-10 left-10">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-pixel-yellow border-2 border-pixel-black animate-blink" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>

      <div className="absolute top-10 right-10">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-pixel-cyan border-2 border-pixel-black animate-blink" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Mindly Logo */}
        <div className="mb-16 relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 blur-xl opacity-50">
            <h1 className="pixel-text text-6xl sm:text-8xl lg:text-9xl text-pixel-yellow">
              MINDLY
            </h1>
          </div>

          {/* Main Text with 3D Effect */}
          <div className="relative">
            <h1 className="pixel-text text-6xl sm:text-8xl lg:text-9xl leading-tight pixel-3d-text mb-4">
              MINDLY
            </h1>
          </div>

          {/* Subtitle Badge */}
          <div className="inline-block bg-pixel-black border-4 border-pixel-yellow px-6 py-3 pixel-shadow mt-6 animate-pulse-glow">
            <p className="pixel-text text-xs sm:text-sm text-pixel-cyan">
              POWERED BY AI
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="bg-pixel-black border-4 border-pixel-white p-6 pixel-shadow">
            <p className="pixel-text text-sm sm:text-base text-pixel-yellow mb-2">
              SWAP SKILLS
            </p>
            <p className="pixel-text text-sm sm:text-base text-pixel-cyan">
              LEVEL UP YOUR MIND
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mb-8">
          <PixelButton
            variant="primary"
            onClick={onGetStarted}
            className="text-lg px-12 py-6 animate-bounce-pixel"
          >
            <div className="flex items-center gap-4">
              <span>▶</span>
              <span>GET STARTED</span>
            </div>
          </PixelButton>
        </div>

        {/* Press Start Indicator */}
        <div className="animate-blink">
          <p className="pixel-text text-xs text-pixel-white">
            PRESS TO CONTINUE
          </p>
        </div>

        {/* Decorative Pixels */}
        <div className="mt-12 flex justify-center gap-3">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 border-2 border-pixel-black ${i % 2 === 0 ? 'bg-pixel-yellow' : 'bg-pixel-cyan'}`}
              style={{
                animation: 'bounce-pixel 1s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <div className="w-12 h-12 bg-pixel-yellow border-4 border-pixel-black pixel-shadow rotate-45"></div>
        <div className="w-12 h-12 bg-pixel-cyan border-4 border-pixel-black pixel-shadow"></div>
        <div className="w-12 h-12 bg-pixel-yellow border-4 border-pixel-black pixel-shadow rotate-45"></div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-pixel-white font-mono opacity-50">
          © 2025 MINDLY • ALL RIGHTS RESERVED
        </p>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-pixel-yellow"></div>
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-pixel-cyan"></div>
    </div>
  );
}
