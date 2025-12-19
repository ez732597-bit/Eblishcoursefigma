import { CreditCard, Tag, BadgeCheck } from 'lucide-react';

export function Pricing() {
  const options = [
    {
      icon: Tag,
      title: 'Полный курс',
      price: '12 000 руб',
      description: '10 уроков',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400',
      featured: true
    },
    {
      icon: CreditCard,
      title: 'Абонемент',
      price: '1 300 руб',
      description: 'за урок',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      featured: false
    }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 
                        rounded-full border border-amber-500/20 mb-4">
            <span className="text-2xl">💳</span>
            <span className="text-amber-400">Стоимость</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
            Стоимость обучения
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className={`relative p-8 bg-gradient-to-br ${option.gradient} rounded-2xl backdrop-blur-sm 
                          border ${option.borderColor} hover:scale-105 transition-all duration-300
                          hover:shadow-xl hover:shadow-amber-500/10
                          ${option.featured ? 'md:scale-105 shadow-xl shadow-amber-500/20' : ''}`}
              >
                {option.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full 
                                  text-slate-900 flex items-center gap-1">
                      <BadgeCheck className="w-4 h-4" />
                      <span>Лучшее предложение</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center space-y-4 pt-4">
                  <div className={`inline-flex p-4 bg-slate-900/50 rounded-2xl border ${option.borderColor}`}>
                    <Icon className={`w-10 h-10 ${option.textColor}`} />
                  </div>
                  <h3 className={`text-2xl ${option.textColor}`}>
                    {option.title}
                  </h3>
                  <div className="py-4">
                    <div className="text-4xl md:text-5xl text-slate-200">
                      {option.price}
                    </div>
                    <p className="text-slate-400 mt-2">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Важная информация */}
        <div className="mt-12 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl 
                      border border-orange-500/30 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <p className="text-xl text-orange-400">
              📢 Набор открыт!
            </p>
            <p className="text-lg text-slate-300">
              Группы маленькие — максимум <span className="text-amber-400">6 детей</span>, чтобы каждый получил внимание.
            </p>
            <p className="text-lg text-orange-400">
              Места ограничены!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
