import { Hero } from './components/Hero';
import { WhoIsItFor } from './components/WhoIsItFor';
import { CourseProgram } from './components/CourseProgram';
import { WhySpecial } from './components/WhySpecial';
import { TechRequirements } from './components/TechRequirements';
import { Schedule } from './components/Schedule';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';

export default function App() {
  const handleEnroll = () => {
    // Обработка записи на курс
    alert('Спасибо за интерес! Скоро с вами свяжутся.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Декоративный градиент на заднем плане */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/10 via-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Контент */}
      <div className="relative">
        <Hero onEnroll={handleEnroll} />
        <WhoIsItFor />
        <CourseProgram />
        <WhySpecial />
        <TechRequirements />
        <Schedule />
        <Pricing />
        <CallToAction onEnroll={handleEnroll} />
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Английский для путешествий. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
