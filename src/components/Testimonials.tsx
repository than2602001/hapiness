"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { useLang } from "./LangProvider";

export default function Testimonials() {
  const { t } = useLang();

  const reviews = [
    { text: t("testi.r1"), name: "Minh Anh", initial: "M" },
    { text: t("testi.r2"), name: "Thanh Trúc", initial: "T" },
    { text: t("testi.r3"), name: "Hoa Nguyễn", initial: "H" },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-brown-deep to-[#2A1A10] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(196,163,90,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="font-[family-name:var(--font-script)] text-xl text-gold block mb-2">{t("testi.script")}</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-white mb-4">{t("testi.title")}</h2>
          <p className="text-base text-white/50 max-w-xl mx-auto">{t("testi.desc")}</p>
          <div className="w-14 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/[0.06] backdrop-blur-md border border-gold/15 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 hover:border-gold/30 transition-all">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-gold" />
                ))}
              </div>
              <p className="text-sm text-white/85 leading-relaxed italic mb-6">&quot;{r.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-semibold text-sm">{r.initial}</div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-white/40">{t("testi.role")}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
