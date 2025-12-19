import { Monitor, Headphones, Wifi, Video } from 'lucide-react';

export function TechRequirements() {
  const requirements = [
    {
      icon: Monitor,
      text: 'Стационарный компьютер или ноутбук с наушниками и микрофоном'
    },
    {
      icon: Wifi,
      text: 'Стабильный интернет'
    },
    {
      icon: Video,
      text: 'Zoom для онлайн-занятий'
    }
  ];

  return (
    <section className="relative py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 
                        rounded-full border border-amber-500/20 mb-4">
            <span className="text-2xl">💻</span>
            <span className="text-amber-400">Технические требования</span>
          </div>
          <h2 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-400">
            Что потребуется
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-amber-500/10 to-cyan-500/10 rounded-2xl backdrop-blur-sm 
                          border border-amber-500/20 hover:scale-105 transition-all duration-300
                          hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-500/30">
                    <Icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="text-slate-300">
                    {req.text}
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
