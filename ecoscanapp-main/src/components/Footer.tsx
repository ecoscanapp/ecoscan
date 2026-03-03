import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-primary-foreground/80">
      <div className="container mx-auto py-10 sm:py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              Eco Scan
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Иновативно приложение за разделно събиране на отпадъци, задвижвано от изкуствен интелект.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#problem" className="hover:text-primary transition-colors">Проблемът</a></li>
              <li><a href="#solution" className="hover:text-primary transition-colors">Решението</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Как работи</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Функции</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Изтегли</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">За проекта</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">За нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика за поверителност</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия за ползване</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Контакти</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                contact@ecoscan.bg
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +359 88 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                София, България
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Eco Scan. Всички права запазени.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
