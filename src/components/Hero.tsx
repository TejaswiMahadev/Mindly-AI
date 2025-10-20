import { Gamepad2, Zap } from 'lucide-react';
import PixelButton from './PixelButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pixel-blue">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30"></div>

      {/* Floating Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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

      {/* Floating Pixel Blocks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 2)}s`
            }}
          >
            <div className="w-8 h-8 bg-pixel-yellow border-4 border-pixel-black pixel-shadow"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title - Pixel Game Style */}
        <div className="mb-12">
          <h1 className="pixel-text text-4xl sm:text-6xl lg:text-7xl mb-2 leading-tight">
            <span className="inline-block text-pixel-blue text-outline-yellow mb-2">
              EDUSWAP
            </span>
          </h1>
          <h2 className="pixel-text text-3xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="inline-block text-pixel-yellow text-outline-black">
              .AI
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-8 bg-pixel-black border-4 border-pixel-yellow px-6 py-4 inline-block pixel-shadow">
          <p className="pixel-text text-xs sm:text-sm text-pixel-cyan leading-relaxed">
            SWAP SKILLS, NOT SCROLLS!
          </p>
        </div>

        {/* Description */}
        <p className="pixel-text text-xs text-pixel-white mb-12 max-w-2xl mx-auto leading-loose">
          Learn, teach, and level up with AI-powered skill trading
        </p>

        {/* Pixel Character Animation */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="w-16 h-16 bg-pixel-yellow border-4 border-pixel-black pixel-shadow flex items-center justify-center animate-bounce-pixel">
            <span className="text-3xl">👨</span>
          </div>

          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-pixel-cyan border-2 border-pixel-black"></div>
            ))}
          </div>

          <div className="w-12 h-12 bg-pixel-cyan border-4 border-pixel-black pixel-shadow flex items-center justify-center animate-pulse-glow">
            <span className="text-2xl">📚</span>
          </div>

          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-pixel-yellow border-2 border-pixel-black"></div>
            ))}
          </div>

          <div className="w-16 h-16 bg-pixel-yellow border-4 border-pixel-black pixel-shadow flex items-center justify-center animate-bounce-pixel" style={{ animationDelay: '0.3s' }}>
            <span className="text-3xl">👩</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <PixelButton variant="primary">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-5 h-5" />
              <span>START GAME</span>
            </div>
          </PixelButton>

          <PixelButton variant="secondary">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5" />
              <span>LOAD SKILLS</span>
            </div>
          </PixelButton>
        </div>

        {/* Score Display */}
        <div className="mt-12 inline-block bg-pixel-black border-4 border-pixel-white px-8 py-3 pixel-shadow">
          <p className="pixel-text text-xs text-pixel-yellow">
            PLAYERS: <span className="text-pixel-cyan">50,000+</span>
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-pixel-yellow"></div>
    </section>
  );
}
