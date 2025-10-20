import { Trophy, Users, Zap } from 'lucide-react';
import PixelButton from './PixelButton';

export default function JoinGame() {
  const leaderboard = [
    { rank: 1, name: "SkillMaster99", score: 9999, avatar: "👑" },
    { rank: 2, name: "CodeNinja", score: 8888, avatar: "🥷" },
    { rank: 3, name: "DesignWizard", score: 7777, avatar: "🧙" }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "PLAYERS" },
    { icon: <Zap className="w-6 h-6" />, value: "1M+", label: "SWAPS" },
    { icon: <Trophy className="w-6 h-6" />, value: "100K+", label: "MATCHES" }
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
              🎮 JOIN THE GAME
            </h2>
          </div>
          <p className="pixel-text text-xs sm:text-sm text-pixel-cyan mt-6">
            Start your learning adventure today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Leaderboard */}
          <div className="bg-pixel-black border-4 border-pixel-cyan p-6 pixel-shadow">
            <div className="bg-pixel-cyan border-b-4 border-pixel-blue-dark px-4 py-3 -mx-6 -mt-6 mb-6">
              <h3 className="pixel-text text-sm sm:text-lg text-pixel-black flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                TOP PLAYERS
              </h3>
            </div>

            <div className="space-y-4">
              {leaderboard.map((player) => (
                <div
                  key={player.rank}
                  className={`flex items-center gap-4 p-4 border-4 ${
                    player.rank === 1 ? 'border-pixel-yellow bg-pixel-yellow' :
                    player.rank === 2 ? 'border-pixel-white bg-pixel-white' :
                    'border-pixel-cyan bg-pixel-cyan'
                  } bg-opacity-20`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-12 h-12 ${
                      player.rank === 1 ? 'bg-pixel-yellow' :
                      player.rank === 2 ? 'bg-pixel-white' :
                      'bg-pixel-cyan'
                    } border-4 border-pixel-black flex items-center justify-center`}>
                      <span className="text-2xl">{player.avatar}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="pixel-text text-xs text-pixel-yellow">#{player.rank}</span>
                        <span className="pixel-text text-xs text-pixel-white">{player.name}</span>
                      </div>
                      <div className="h-3 bg-pixel-blue-dark border-2 border-pixel-blue relative overflow-hidden">
                        <div className="absolute inset-0 bg-pixel-yellow border-r-2 border-pixel-black" style={{ width: `${(player.score / 10000) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-pixel-black border-2 border-pixel-white px-3 py-1">
                    <span className="pixel-text text-xs text-pixel-cyan">{player.score.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <div className="inline-block bg-pixel-blue-dark border-2 border-pixel-blue px-4 py-2">
                <span className="pixel-text text-xs text-pixel-white">YOUR RANK: #???</span>
              </div>
            </div>
          </div>

          {/* Signup Area */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-pixel-black border-4 border-pixel-yellow p-4 pixel-shadow text-center">
                  <div className="flex justify-center mb-2 text-pixel-yellow">
                    {stat.icon}
                  </div>
                  <div className="pixel-text text-lg text-pixel-cyan mb-1">{stat.value}</div>
                  <div className="text-xs text-pixel-white font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sign Up Box */}
            <div className="bg-pixel-cyan border-4 border-pixel-black p-8 pixel-shadow">
              <div className="bg-pixel-black border-4 border-pixel-white p-6 mb-6">
                <h3 className="pixel-text text-sm sm:text-lg text-pixel-yellow mb-4 text-center">
                  READY TO PLAY?
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="pixel-text text-xs text-pixel-cyan mb-2 block">USERNAME</label>
                    <input
                      type="text"
                      placeholder="Enter name..."
                      className="w-full bg-pixel-blue-dark border-4 border-pixel-blue px-4 py-3 text-pixel-white font-mono focus:border-pixel-cyan focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="pixel-text text-xs text-pixel-cyan mb-2 block">EMAIL</label>
                    <input
                      type="email"
                      placeholder="you@game.com"
                      className="w-full bg-pixel-blue-dark border-4 border-pixel-blue px-4 py-3 text-pixel-white font-mono focus:border-pixel-cyan focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <PixelButton variant="primary" className="w-full justify-center">
                <span className="flex items-center gap-2">
                  <span>🎮</span>
                  <span>START PLAYING</span>
                </span>
              </PixelButton>

              <div className="mt-4 text-center">
                <p className="text-xs text-pixel-black font-mono">
                  Join now and get <span className="pixel-text text-pixel-yellow">500 XP</span> bonus!
                </p>
              </div>
            </div>

            {/* Mascot Mina */}
            <div className="mt-8 flex items-center gap-4 bg-pixel-black border-4 border-pixel-yellow p-4 pixel-shadow">
              <div className="w-16 h-16 bg-pixel-yellow border-4 border-pixel-black flex items-center justify-center animate-bounce-pixel">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-pixel-cyan font-mono leading-relaxed">
                  "Hi! I'm Mina, your AI guide. I can't wait to help you swap skills!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
