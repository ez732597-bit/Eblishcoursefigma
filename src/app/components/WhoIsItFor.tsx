import { Users } from 'lucide-react';

export function WhoIsItFor() {
  const groups = [
    {
      title: 'Первая группа',
      grade: '4–5 класс',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400'
    },
    {
      title: 'Вторая группа',
      grade: '6–8 класс',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400'
    }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 
                        rounded-full border border-amber-500/20 mb-4">
            <Users className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">Для кого курс</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
            Для кого курс
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br ${group.gradient} rounded-2xl backdrop-blur-sm 
                        border ${group.borderColor} hover:scale-105 transition-all duration-300
                        hover:shadow-xl hover:shadow-amber-500/20`}
            >
              <h3 className={`text-2xl md:text-3xl mb-2 ${group.textColor}`}>
                {group.title}
              </h3>
              <p className="text-xl text-slate-300">
                {group.grade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
