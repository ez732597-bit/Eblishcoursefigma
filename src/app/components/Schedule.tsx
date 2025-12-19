import { Clock, Calendar } from 'lucide-react';

export function Schedule() {
  const schedules = [
    {
      day: 'Четверг',
      time: '15:00 (МСК)',
      group: 'группа 4–5 класс',
      gradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400'
    },
    {
      day: 'Пятница',
      time: '15:30 (МСК)',
      group: 'группа 6–8 класс',
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
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400">Расписание</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
            Расписание занятий
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-br ${schedule.gradient} rounded-2xl backdrop-blur-sm 
                        border ${schedule.borderColor} hover:scale-105 transition-all duration-300
                        hover:shadow-xl hover:shadow-amber-500/10`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className={`w-6 h-6 ${schedule.textColor}`} />
                  <span className={`text-2xl ${schedule.textColor}`}>
                    {schedule.day}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className={`w-6 h-6 ${schedule.textColor}`} />
                  <span className="text-xl text-slate-300">
                    {schedule.time}
                  </span>
                </div>
                <p className="text-slate-400 pt-2">
                  {schedule.group}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}