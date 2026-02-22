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
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Решението</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Eco Scan — вашият еко асистент
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {solutions.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-5 sm:p-7 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group text-center h-full">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2 text-foreground">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
