"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useLang } from "./LangProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.eyelash"), href: "#eyelash" },
    { label: t("nav.testimonials"), href: "#testimonials" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-[#FFF8F0]/92 backdrop-blur-xl shadow-sm py-3"
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleClick("#home")} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-[family-name:var(--font-script)] text-2xl text-gold-dark leading-none">
                Happiness
              </div>
              <div className="text-[0.55rem] tracking-[4px] uppercase text-brown-medium">
                B E A U T Y
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-brown-medium hover:text-gold-dark transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all hover:after:w-full cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggle}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/25 text-xs font-semibold text-brown-medium hover:bg-gold/10 hover:border-gold/50 transition-all cursor-pointer"
              title={lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
            >
              <GlobeAltIcon className="w-3.5 h-3.5 text-gold-dark" />
              {lang === "vi" ? "EN" : "VI"}
            </button>

            <button
              onClick={() => handleClick("#contact")}
              className="px-7 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-white text-sm font-semibold rounded-full shadow-[0_4px_24px_rgba(196,163,90,0.25)] hover:shadow-[0_6px_30px_rgba(196,163,90,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {t("nav.book")}
            </button>
          </nav>

          {/* Mobile right buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full border border-gold/25 flex items-center justify-center text-[10px] font-bold text-brown-medium hover:bg-gold/10 transition-all cursor-pointer"
            >
              {lang === "vi" ? "EN" : "VI"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center z-[60] cursor-pointer"
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6 text-brown-deep" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-brown-deep" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-cream z-50 flex flex-col justify-center items-center gap-6 shadow-[-10px_0_40px_rgba(0,0,0,0.1)] transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="text-lg font-medium text-brown-medium hover:text-gold-dark transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => handleClick("#contact")}
          className="mt-4 px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold rounded-full cursor-pointer"
        >
          {t("nav.book")}
        </button>
      </nav>
    </>
  );
}
