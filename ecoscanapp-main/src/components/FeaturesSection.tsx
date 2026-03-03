import { Brain, MapPin, BarChart3, Shield, Flag, Leaf } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  { icon: Brain, title: "Изкуствен интелект", desc: "Разпознаване на отпадъци в реално време с напреднали AI модели." },
  { icon: MapPin, title: "GPS и карта", desc: "Интерактивна карта с всички налични контейнери наблизо." },
  { icon: BarChart3, title: "Класация", desc: "Състезавайте се с други потребители и издигнете се в класацията." },
  { icon: Shield, title: "Админ панел", desc: "Мониторинг и управление на контейнери и сигнали от администратори." },
  { icon: Flag, title: "Докладване", desc: "Бързо и лесно подаване на сигнали за проблеми с отпадъците." },
  { icon: Leaf, title: "Еко статистика", desc: "Следете вашето екологично въздействие с детайлна статистика." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Функции</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Основни функционалности
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <FadeInSection key={i} delay={i * 80}>
              <div className="bg-card rounded-2xl p-4 sm:p-7 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group h-full min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-foreground">{f.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
