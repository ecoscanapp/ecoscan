import { Brain, MapPin, Trophy, Flag } from "lucide-react";
import FadeInSection from "./FadeInSection";

const solutions = [
  {
    icon: Brain,
    title: "AI разпознаване на отпадъци",
    desc: "Насочете камерата към отпадъка и AI ще разпознае от какъв тип е и къде трябва да се изхвърли.",
  },
  {
    icon: MapPin,
    title: "Карта с контейнери",
    desc: "GPS базирана карта показва най-близките контейнери за всеки тип отпадък в реално време.",
  },
  {
    icon: Trophy,
    title: "Точки, нива и значки",
    desc: "Печелете точки за всяко правилно рециклиране, качвайте ниво и отключвайте значки.",
  },
  {
    icon: Flag,
    title: "Докладване на проблеми",
    desc: "Сигнализирайте за пълни контейнери, нелегални сметища или повредена инфраструктура.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest">
              Решението
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 text-foreground px-2">
              Eco Scan — вашият еко асистент
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {solutions.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-foreground text-center">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                  {s.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
