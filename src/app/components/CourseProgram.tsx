import { 
  Plane, 
  Building, 
  Coffee, 
  MapPin, 
  AlertCircle, 
  Ticket, 
  MessageCircle, 
  Trophy 
} from 'lucide-react';

export function CourseProgram() {
  const modules = [
    {
      icon: Plane,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      benefit: 'Уверенность уже в первые часы за границей.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: Building,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      benefit: 'Практика вежливых фраз и повседневной лексики.',
      gradient: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Coffee,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      benefit: 'Развитие гастрономического словаря и уверенности в общении.',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: MapPin,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      benefit: 'Понимание устной речи и произношения в реальных ситуациях.',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400',
      borderColor: 'border-teal-500/30'
    },
    {
      icon: AlertCircle,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      benefit: 'Важные фразы, которые могут спасти отпуск.',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Ticket,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      benefit: 'Погружение в культурный контекст через язык.',
      gradient: 'from-amber-500/20 to-yellow-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/30'
    },
    {
      icon: MessageCircle,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      benefit: 'Игровая практика диалогов и неформального общения.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Trophy,
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      benefit: 'Развитие связной речи и творческого самовыражения.',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/30'
    }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 
                        rounded-full border border-amber-500/20 mb-4">
            <span className="text-2xl">📚</span>
            <span className="text-amber-400">Программа курса</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
            Программа курса
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br ${module.gradient} rounded-2xl backdrop-blur-sm 
                          border ${module.borderColor} hover:scale-105 transition-all duration-300
                          hover:shadow-xl hover:shadow-amber-500/10`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className={`text-xl md:text-2xl ${module.iconColor}`}>
                      {index + 1}. {module.title}
                    </h3>
                    <p className="text-slate-300">
                      {module.description}
                    </p>
                    <p className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 flex-shrink-0">👉</span>
                      <span>{module.benefit}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
