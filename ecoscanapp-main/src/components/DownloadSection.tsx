import { Download } from "lucide-react";
import FadeInSection from "./FadeInSection";

const DownloadSection = () => {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto relative z-10">
        <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Download className="w-10 h-10 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Изтегли Eco Scan APK сега
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              Започнете да рециклирате правилно още днес. Безплатно приложение, достъпно за Android.
            </p>

            <a
              href="https://github.com/mirn4o24/ecoscanapp-main/releases/download/v1.0/Eco_Scan.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold hover:opacity-90 transition-all hover:scale-105 eco-glow"
            >
              <Download className="w-6 h-6" />
              Download APK
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default DownloadSection;
