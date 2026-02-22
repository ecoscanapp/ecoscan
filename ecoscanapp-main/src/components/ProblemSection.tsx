import { AlertTriangle, HelpCircle, Users } from "lucide-react";
import FadeInSection from "./FadeInSection";

const problems = [
  {
    icon: AlertTriangle,
    title: "Неправилно изхвърляне",
    desc: "Огромна част от отпадъците попадат в грешния контейнер, замърсявайки околната среда и затруднявайки рециклирането.",
  },
  {
    icon: HelpCircle,
    title: "Липса на информация",
    desc: "Повечето хора не знаят кой отпадък къде трябва да се изхвърли, нито къде са най-близките контейнери.",
  },
  {
    icon: Users,
    title: "Ниска ангажираност",
    desc: "Без мотивация и обратна връзка, гражданите рядко полагат усилия за правилно разделно събиране.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <FadeInSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Проблемът</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Защо рециклирането се проваля?
            </h2>
          </div>
        </FadeInSection>

        <div className="grid gap-5 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-border group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6 sm:w-7 sm:h-7 text-destructive" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{p.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
