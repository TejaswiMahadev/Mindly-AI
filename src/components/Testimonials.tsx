export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex",
      avatar: "👨‍💻",
      quote: "I swapped Python for Guitar and it was epic!",
      skill: "Python ⟷ Guitar",
      color: "bg-pixel-yellow"
    },
    {
      name: "Maya",
      avatar: "👩‍🎨",
      quote: "Mina found me my perfect learning buddy!",
      skill: "Design ⟷ Japanese",
      color: "bg-pixel-cyan"
    },
    {
      name: "Sam",
      avatar: "👨‍🎤",
      quote: "Best skill-swap platform ever! Level 50!",
      skill: "Music ⟷ Coding",
      color: "bg-pixel-yellow"
    }
  ];

  return (
    <section className="relative py-20 bg-pixel-blue overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-pixel-black border-4 border-pixel-yellow px-8 py-4 pixel-shadow mb-4">
            <h2 className="pixel-text text-2xl sm:text-4xl text-pixel-yellow">
              PLAYER REVIEWS
            </h2>
          </div>
          <p className="pixel-text text-xs sm:text-sm text-pixel-white mt-6">
            See what players are saying
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Speech Bubble */}
              <div className="bg-pixel-white border-4 border-pixel-black p-6 pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative">
                {/* Quote */}
                <p className="text-xs text-pixel-black font-mono mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Skill Badge */}
                <div className="inline-block bg-pixel-black border-2 border-pixel-blue px-3 py-1">
                  <span className="pixel-text text-xs text-pixel-cyan">{testimonial.skill}</span>
                </div>

                {/* Pointer */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-pixel-white border-b-4 border-r-4 border-pixel-black transform rotate-45"></div>
              </div>

              {/* Avatar Card */}
              <div className="mt-6 flex items-center gap-4">
                <div className={`${testimonial.color} w-16 h-16 border-4 border-pixel-black pixel-shadow flex items-center justify-center`}>
                  <span className="text-3xl">{testimonial.avatar}</span>
                </div>

                <div>
                  <div className="bg-pixel-black border-2 border-pixel-white px-3 py-1 mb-2">
                    <span className="pixel-text text-xs text-pixel-cyan">{testimonial.name}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-pixel-yellow border border-pixel-black"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* XP Bar */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-pixel-black border-4 border-pixel-white p-4 pixel-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="pixel-text text-xs text-pixel-cyan">COMMUNITY XP</span>
              <span className="pixel-text text-xs text-pixel-yellow">LEVEL 42</span>
            </div>
            <div className="h-6 bg-pixel-blue-dark border-2 border-pixel-blue relative overflow-hidden">
              <div className="absolute inset-0 bg-pixel-yellow border-r-4 border-pixel-black w-4/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="pixel-text text-xs text-pixel-black">85,420 / 100,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-pixel-yellow"></div>
    </section>
  );
}
