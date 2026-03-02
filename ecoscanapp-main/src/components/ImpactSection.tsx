import { Users, Trash2, Flag, MapPin } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import FadeInSection from "./FadeInSection";

const stats = [
  { icon: Users, value: 10, suffix: "+", label: "Активни потребители" },
  { icon: Trash2, value: 2, suffix: " кг", label: "Събрани отпадъци" },
  { icon: Flag, value: 5, suffix: "", label: "Отчетени сигнали" },
  { icon: MapPin, value: 100, suffix: "+", label: "Покрити контейнери" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-primary">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary-foreground/70 font-semibold text-sm uppercase tracking-widest">Въздействие</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-primary-foreground">
              Нашето въздействие в номера
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-foreground mb-1">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-primary-foreground/70 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
