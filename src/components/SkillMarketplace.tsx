import { Code, Palette, Music, Cpu, Languages, Camera } from 'lucide-react';

export default function SkillMarketplace() {
  const skills = [
    { name: "AI & ML", icon: <Cpu className="w-6 h-6" />, emoji: "🧠", bg: "bg-pixel-yellow" },
    { name: "Design", icon: <Palette className="w-6 h-6" />, emoji: "🎨", bg: "bg-pixel-cyan" },
    { name: "Coding", icon: <Code className="w-6 h-6" />, emoji: "💻", bg: "bg-pixel-yellow" },
    { name: "Music", icon: <Music className="w-6 h-6" />, emoji: "🎵", bg: "bg-pixel-cyan" },
    { name: "Languages", icon: <Languages className="w-6 h-6" />, emoji: "🌍", bg: "bg-pixel-yellow" },
    { name: "Photo", icon: <Camera className="w-6 h-6" />, emoji: "📷", bg: "bg-pixel-cyan" }
  ];

  return (
    <section className="relative py-20 bg-pixel-black overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pixel-white animate-blink"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pixel-cyan border-4 border-pixel-black px-8 py-4 pixel-shadow mb-4">
            <h2 className="pixel-text text-2xl sm:text-4xl text-pixel-black">
              SKILL ARCADE
            </h2>
          </div>
          <p className="pixel-text text-xs sm:text-sm text-pixel-yellow mt-6">
            Browse skills and find your match
          </p>
        </div>

        {/* Arcade Cabinet Style */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top Border */}
          <div className="h-4 bg-pixel-yellow border-4 border-pixel-black mb-0"></div>

          {/* Skills Display */}
          <div className="bg-pixel-blue-dark border-x-4 border-pixel-black p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Skill Box */}
                  <div className={`${skill.bg} border-4 border-pixel-black w-full aspect-square flex items-center justify-center relative overflow-hidden group-hover:translate-x-1 group-hover:translate-y-1 transition-transform pixel-shadow group-hover:shadow-none`}>
                    <span className="text-5xl">{skill.emoji}</span>

                    {/* Shine */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-pixel-white border border-pixel-black"></div>
                  </div>

                  {/* Label */}
                  <div className="mt-3 text-center">
                    <div className="inline-block bg-pixel-black border-2 border-pixel-white px-3 py-2">
                      <span className="pixel-text text-xs text-pixel-cyan">{skill.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Border */}
          <div className="h-4 bg-pixel-yellow border-4 border-pixel-black mt-0"></div>
        </div>

        {/* Credits Display */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-pixel-black border-4 border-pixel-yellow px-6 py-3 pixel-shadow">
            <div className="w-8 h-8 bg-pixel-yellow border-2 border-pixel-white flex items-center justify-center">
              <span>💰</span>
            </div>
            <span className="pixel-text text-xs text-pixel-cyan">EARN CREDITS WITH EVERY SWAP!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
