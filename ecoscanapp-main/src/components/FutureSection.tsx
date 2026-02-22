import { Globe, QrCode, Building, Sparkles } from "lucide-react";
import FadeInSection from "./FadeInSection";

const plans = [
  { icon: Globe, title: "Нови градове", desc: "Разширяване на покритието към други градове в България и региона." },
  { icon: QrCode, title: "QR кодове", desc: "QR кодове върху контейнерите за моментална идентификация и насочване." },
  { icon: Building, title: "Партньорства", desc: "Сътрудничество с общини и организации за по-чиста среда." },
  { icon: Sparkles, title: "Нови AI функции", desc: "Разпознаване на повече материали и персонализирани съвети." },
];

const FutureSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Бъдеще</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Бъдещо развитие
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-card rounded-2xl p-5 sm:p-7 border border-border text-center hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2 text-foreground">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
