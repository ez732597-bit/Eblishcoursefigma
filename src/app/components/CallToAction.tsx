import { ArrowRight, Sparkles } from 'lucide-react';

interface CallToActionProps {
  onEnroll: () => void;
}

export function CallToAction({ onEnroll }: CallToActionProps) {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-12 md:p-16 bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-cyan-500/20 
                      rounded-3xl backdrop-blur-sm border border-amber-500/30 overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl" />
          
          {/* Контент */}
          <div className="relative text-center space-y-8">
            <div className="flex justify-center gap-2">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="w-8 h-8 text-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400">
              Готовы начать?
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, 
              где ваш ребёнок <span className="text-cyan-400">заговорит по-английски без страха!</span>
            </p>

            <div className="pt-6">
              <button
                onClick={onEnroll}
                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 
                         text-slate-900 rounded-2xl overflow-hidden transition-all duration-300
                         hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-110
                         transform-gpu"
              >
                <span className="relative z-10 flex items-center gap-3 text-xl">
                  Записаться на курс
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Дополнительная мотивация */}
            <div className="pt-8 space-y-2">
              <p className="text-slate-400">
                ✨ Первый шаг к уверенному общению в путешествиях
              </p>
              <p className="text-slate-500">
                🌍 Присоединяйтесь к нашим маленьким группам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
