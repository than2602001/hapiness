"use client";
import Image from "next/image";
import { SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import { useLang } from "./LangProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-rose-light">
      <div className="absolute -top-1/3 -right-1/5 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.1),transparent_70%)] animate-float" />
      <div className="absolute -bottom-1/4 -left-1/10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(232,181,184,0.15),transparent_70%)] animate-float [animation-direction:reverse]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-32">
        <div className="lg:pr-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gold/10 border border-gold/30 rounded-full text-xs font-medium text-gold-dark uppercase tracking-wider mb-6">
            <SparklesIcon className="w-3.5 h-3.5" />
            {t("hero.badge")}
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-brown-deep mb-5">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}{" "}
            <span className="font-[family-name:var(--font-script)] text-5xl md:text-6xl lg:text-7xl text-gold font-normal">
              Happiness
            </span>
          </h1>

          <p className="text-base md:text-lg text-brown-medium/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t("hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold rounded-full shadow-[0_4px_24px_rgba(196,163,90,0.3)] hover:shadow-[0_8px_35px_rgba(196,163,90,0.45)] hover:-translate-y-1 transition-all"
            >
              {t("hero.cta1")} <SparklesIcon className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-[1.5px] border-gold-light text-brown-deep font-semibold rounded-full hover:bg-gold hover:text-white hover:border-gold hover:-translate-y-1 transition-all"
            >
              {t("hero.cta2")}
            </a>
          </div>

          <div className="flex gap-10 mt-12 pt-8 border-t border-gold/20 justify-center lg:justify-start">
            {[
              { num: "2", label: t("hero.stat.branch") },
              { num: "8+", label: t("hero.stat.services") },
              { num: "39K+", label: t("hero.stat.clients") },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-gold-dark block">{s.num}</span>
                <span className="text-xs text-brown-medium/60 uppercase tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {[
              { src: "/images/nail/z7716345643375_ab4f6b8a294aa99fd27e0f7074087baa.jpg", alt: "Pink bow nail" },
              { src: "/images/eyelash/z7716345643265_200d1bfd537ddf6587ef442b9e535274.jpg", alt: "Eyelash", className: "mt-8" },
              { src: "/images/nail/z7716224562441_8f8ec4a75dd29d86a1fc6a526668877f.jpg", alt: "Tortoiseshell nail", className: "-mt-8" },
              { src: "/images/nail/z7716224563542_cdd2a9f4b7cf827a182e26df2e9444aa.jpg", alt: "White bow nail" },
            ].map((img, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden shadow-lg aspect-[3/4] group ${img.className || ""}`}>
                <Image src={img.src} alt={img.alt} width={300} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute bottom-5 -left-6 bg-white/90 backdrop-blur-lg px-5 py-3 rounded-xl shadow-md items-center gap-3 animate-float-card">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-light to-rose rounded-full flex items-center justify-center">
              <StarIcon className="w-5 h-5 text-gold-dark" />
            </div>
            <div>
              <div className="text-sm font-bold text-brown-deep">4.9 / 5.0</div>
              <div className="text-xs text-brown-medium/60">{t("hero.review")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
