"use client";
import Image from "next/image";
import { SparklesIcon, HeartIcon, HomeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useLang } from "./LangProvider";

export default function About() {
  const { t } = useLang();

  const features = [
    { icon: SparklesIcon, title: t("about.f1.title"), desc: t("about.f1.desc") },
    { icon: HeartIcon, title: t("about.f2.title"), desc: t("about.f2.desc") },
    { icon: HomeIcon, title: t("about.f3.title"), desc: t("about.f3.desc") },
    { icon: MapPinIcon, title: t("about.f4.title"), desc: t("about.f4.desc") },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-on-scroll">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
            <Image src="/images/eyelash/z7716345631811_be113c514dbd51c704c2aaf2a3617982.jpg" alt="Happiness Beauty salon" width={500} height={625} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 w-36 h-36 border-2 border-gold-light rounded-2xl -z-10" />
        </div>

        <div className="animate-on-scroll">
          <span className="font-[family-name:var(--font-script)] text-xl text-gold block mb-2">{t("about.script")}</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-brown-deep mb-5 leading-tight">
            {t("about.title1")}<br />{t("about.title2")}
          </h2>
          <p className="text-brown-medium/80 mb-4 leading-relaxed">{t("about.p1")}</p>
          <p className="text-brown-medium/80 mb-8 leading-relaxed">&quot;{t("about.p2")}&quot;</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <div className="w-10 h-10 min-w-[40px] bg-gold/10 rounded-full flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-deep">{f.title}</h4>
                  <p className="text-xs text-brown-medium/60 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
