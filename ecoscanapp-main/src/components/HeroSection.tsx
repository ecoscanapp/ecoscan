import { Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Eco City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-24 sm:pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6 text-primary-foreground drop-shadow-lg">
            Сканирай. Рециклирай.
            <br />
            <span className="text-gradient">Спаси природата.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Eco Scan е мобилно приложение, което чрез AI анализира отпадъците,
            показва най-близкия контейнер и награждава потребителите за екологично
            поведение.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:opacity-90 transition-all hover:scale-105 eco-glow"
            >
              <Download className="w-5 h-5" />
              Изтегли APK
            </a>
            <a
              href="#problem"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-primary-foreground/25 transition-all"
            >
              Научи повече
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
