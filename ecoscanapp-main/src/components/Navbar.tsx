import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Проблемът", href: "#problem" },
  { label: "Решението", href: "#solution" },
  { label: "Как работи", href: "#how-it-works" },
  { label: "Функции", href: "#features" },
  { label: "Въздействие", href: "#impact" },
  { label: "Изтегли", href: "#download" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between py-3 sm:py-4">
        <a href="#" className="flex items-center gap-2 text-primary font-bold text-xl sm:text-2xl flex-shrink-0">
          <Leaf className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="whitespace-nowrap">Eco Scan</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            className="bg-primary text-primary-foreground px-4 lg:px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Изтегли APK
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-base font-semibold text-center hover:opacity-90 transition-opacity mt-2"
            >
              Изтегли APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
