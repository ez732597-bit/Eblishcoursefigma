import { Plane, Globe, Sparkles } from 'lucide-react';

interface HeroProps {
  onEnroll: () => void;
}

export function Hero({ onEnroll }: HeroProps) {
  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Иконки */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border border-amber-500/30">
              <Plane className="w-8 h-8 text-amber-400" />
            </div>
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl backdrop-blur-sm border border-orange-500/30">
              <Sparkles className="w-8 h-8 text-orange-400" />
            </div>
          </div>

          {/* Заголовок */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 leading-tight">
              Английский для путешествий
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
            </p>
          </div>

          {/* Описание */}
          <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Этот курс научит вашего ребёнка <span className="text-cyan-400">реальному разговорному английскому</span>, 
            который пригодится в отпуске, поездках и будущих путешествиях!
          </p>

          {/* Кнопка CTA */}
          <div className="pt-6">
            <button
              onClick={onEnroll}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 
                       text-slate-900 rounded-xl overflow-hidden transition-all duration-300
                       hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Узнать подробнее
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 
                            opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
