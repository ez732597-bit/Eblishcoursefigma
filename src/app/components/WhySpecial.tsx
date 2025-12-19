import { Star, MessageCircle, Trophy, Sparkles } from 'lucide-react';

export function WhySpecial() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Живая практическая речь',
      description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики. Все ситуации — из реальной жизни путешественника.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: Star,
      title: 'Интерактивные задания',
      description: 'Ролевые игры, аудиоситуации, мини-квесты — учёба превращается в увлекательное приключение.',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Trophy,
      title: 'Реальный результат',
      description: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс. Готовность к реальному общению.',
      gradient: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 
                        rounded-full border border-amber-500/20 mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">Особенности</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400 mb-4">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-8 bg-gradient-to-br ${feature.gradient} rounded-2xl backdrop-blur-sm 
                          border ${feature.borderColor} hover:scale-105 transition-all duration-300
                          hover:shadow-xl hover:shadow-amber-500/10`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 bg-slate-900/50 rounded-2xl border ${feature.borderColor}`}>
                    <Icon className={`w-10 h-10 ${feature.iconColor}`} />
                  </div>
                  <h3 className={`text-xl md:text-2xl ${feature.iconColor}`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
