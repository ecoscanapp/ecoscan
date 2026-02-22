import { UserPlus, Camera, Cpu, Navigation, Star } from "lucide-react";
import FadeInSection from "./FadeInSection";
import phoneMockup from "@/assets/phone-mockup.png";

const steps = [
  { icon: UserPlus, label: "Регистрация", desc: "Създайте акаунт за секунди" },
  { icon: Camera, label: "Заснемане", desc: "Насочете камерата към отпадъка" },
  { icon: Cpu, label: "AI анализ", desc: "Моментално разпознаване" },
  { icon: Navigation, label: "Указания", desc: "Намерете правилния контейнер" },
  { icon: Star, label: "Награда", desc: "Получете точки и значки" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Как работи</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              5 лесни стъпки
            </h2>
          </div>
        </FadeInSection>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Phone mockup */}
          <FadeInSection className="flex-shrink-0">
            <div className="relative">
              <img
                src={phoneMockup}
                alt="Eco Scan App"
                className="w-64 md:w-72 animate-float drop-shadow-2xl"
              />
            </div>
          </FadeInSection>

          {/* Steps */}
          <div className="flex-1 space-y-6">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="flex items-start gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-foreground">{step.label}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
