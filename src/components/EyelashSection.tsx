"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useLang } from "./LangProvider";

export default function EyelashSection() {
  const { t } = useLang();

  const eyelashItems = [
    { src: "/images/eyelash/z7716345643265_200d1bfd537ddf6587ef442b9e535274.jpg", title: "Volume Eyelash", desc: t("eyelash.volume") },
    { src: "/images/eyelash/z7716345648801_0a20547a387006cf92519ed5d605274e.jpg", title: "Classic Eyelash", desc: t("eyelash.classic") },
    { src: "/images/eyelash/z7716345650000_a7da01a894b993061b4b07af3e5c5831.jpg", title: "Design Eyelash", desc: t("eyelash.design") },
    { src: "/images/eyelash/z7716345656479_42a49fe8e267e8f54a6bda2a07a7c126.jpg", title: "Eyelash Extension", desc: t("eyelash.result") },
    { src: "/images/eyelash/z7716345631811_be113c514dbd51c704c2aaf2a3617982.jpg", title: t("eyelash.process.title"), desc: t("eyelash.process.desc") },
    { src: "/images/eyelash/z7716224562005_45455b10aeed35c0e62af786a62e6c07.jpg", title: "Brow Lamination", desc: t("eyelash.brow") },
  ];

  return (
    <section id="eyelash" className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle script={t("eyelash.script")} title={t("eyelash.title")} desc={t("eyelash.desc")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eyelashItems.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-400">
              <Image src={item.src} alt={item.title} width={400} height={533} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <h4 className="font-[family-name:var(--font-heading)] text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-white/85">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
