import { Heart, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-pixel-black border-t-4 border-pixel-cyan overflow-hidden">
      {/* Stars */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="bg-pixel-yellow border-4 border-pixel-black inline-flex items-center justify-center w-16 h-16 mb-4 pixel-shadow">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="pixel-text text-lg text-pixel-cyan mb-3">EDUSWAP.AI</h3>
            <p className="text-xs text-pixel-white font-mono leading-relaxed">
              The ultimate skill-trading platform powered by AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="pixel-text text-sm text-pixel-yellow mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['ABOUT', 'HOW IT WORKS', 'SKILLS', 'LEADERBOARD', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-pixel-white hover:text-pixel-cyan transition-colors font-mono flex items-center gap-2">
                    <span className="w-2 h-2 bg-pixel-yellow border border-pixel-black"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="pixel-text text-sm text-pixel-cyan mb-4">CONNECT</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-12 h-12 bg-pixel-blue-dark border-4 border-pixel-blue hover:border-pixel-cyan flex items-center justify-center transition-colors pixel-shadow">
                <Twitter className="w-5 h-5 text-pixel-cyan" />
              </a>
              <a href="#" className="w-12 h-12 bg-pixel-blue-dark border-4 border-pixel-blue hover:border-pixel-yellow flex items-center justify-center transition-colors pixel-shadow">
                <Github className="w-5 h-5 text-pixel-yellow" />
              </a>
            </div>
            <div className="bg-pixel-black border-2 border-pixel-white px-3 py-2 inline-block">
              <p className="text-xs text-pixel-cyan font-mono">VERSION 1.0.0</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-pixel-yellow mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="pixel-text text-xs text-pixel-white flex items-center justify-center gap-2 flex-wrap mb-4">
            <span>MADE WITH</span>
            <Heart className="w-4 h-4 text-pixel-yellow animate-bounce-pixel" />
            <span>BY EDUSWAP.AI</span>
          </p>
          <p className="text-xs text-pixel-cyan font-mono">
            LEARN • TEACH • THRIVE
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-pixel-cyan border border-pixel-black"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-2 bg-pixel-yellow"></div>
    </footer>
  );
}
