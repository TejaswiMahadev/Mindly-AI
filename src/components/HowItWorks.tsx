import { Gamepad2, Bot, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "CHOOSE SKILLS",
      description: "Pick what you want to learn and teach",
      emoji: "🎮",
      color: "bg-pixel-yellow"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI MATCHING",
      description: "Mina finds your perfect buddy",
      emoji: "🤖",
      color: "bg-pixel-cyan"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "LEVEL UP",
      description: "Trade skills and earn rewards",
      emoji: "🏆",
      color: "bg-pixel-yellow"
    }
  ];

  return (
    <section className="relative py-20 bg-pixel-blue-dark overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pixel-yellow border-4 border-pixel-black px-8 py-4 pixel-shadow mb-4">
            <h2 className="pixel-text text-2xl sm:text-4xl text-pixel-black">
              HOW IT WORKS
            </h2>
          </div>
          <p className="pixel-text text-xs sm:text-sm text-pixel-cyan mt-6">
            Three steps to start your adventure
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connector Arrows */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 z-20">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-pixel-yellow border border-pixel-black"></div>
                    ))}
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-pixel-yellow"></div>
                  </div>
                </div>
              )}

              {/* Step Card */}
              <div className="bg-pixel-black border-4 border-pixel-white p-6 pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                {/* Level Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-pixel-yellow border-4 border-pixel-black flex items-center justify-center pixel-shadow">
                  <span className="pixel-text text-xl text-pixel-black">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`${step.color} border-4 border-pixel-black w-24 h-24 mx-auto mb-6 flex items-center justify-center pixel-shadow`}>
                  <span className="text-5xl">{step.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="pixel-text text-sm text-pixel-yellow mb-4 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-pixel-white text-center font-mono leading-relaxed">
                  {step.description}
                </p>

                {/* Pixel Decoration */}
                <div className="flex justify-center gap-2 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-pixel-cyan border border-pixel-black"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-pixel-cyan"></div>
    </section>
  );
}
