"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useLang } from "./LangProvider";
import {
  EyeIcon,
  PaintBrushIcon,
  HandRaisedIcon,
  BeakerIcon,
  SparklesIcon,
  SwatchIcon,
  ScissorsIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";

interface TabDef {
  id: string;
  label: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
}

const tabs: TabDef[] = [
  { id: "eyelashes", label: "Eyelashes", Icon: EyeIcon },
  { id: "brow", label: "Brow", Icon: PaintBrushIcon },
  { id: "massage", label: "Massage", Icon: HandRaisedIcon },
  { id: "wax", label: "Wax", Icon: BeakerIcon },
  { id: "nail-gel", label: "Nail Gel", Icon: SparklesIcon },
  { id: "normal-color", label: "Normal Color", Icon: SwatchIcon },
  { id: "nail-designs", label: "Nail Designs", Icon: ScissorsIcon },
  { id: "hair-face", label: "Hair & Face", Icon: UserIcon },
];

interface PriceItem {
  name: string;
  desc?: { vi: string; en: string };
  price: string;
}

interface ServiceData {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitleKey: string;
  items: PriceItem[];
}

const servicesData: Record<string, ServiceData> = {
  eyelashes: {
    Icon: EyeIcon,
    title: "Eyelashes",
    subtitleKey: "svc.eyelashes.sub",
    items: [
      { name: "Eyelash Lifting", desc: { vi: "Uốn mi tự nhiên", en: "Natural lash lift" }, price: "350.000₫" },
      { name: "Lash Tint", desc: { vi: "Nhuộm màu lông mi", en: "Lash tinting" }, price: "100.000₫" },
      { name: "Classic Eyelash", desc: { vi: "Nối mi tự nhiên", en: "Natural lash extensions" }, price: "400.000₫" },
      { name: "Design Eyelash", desc: { vi: "Nối mi thiết kế", en: "Design lash extensions" }, price: "500.000₫" },
      { name: "Volume Eyelash", desc: { vi: "Nối mi chùm dày", en: "Volume lash extensions" }, price: "600.000₫" },
      { name: "Removal", desc: { vi: "Tháo mi", en: "Lash removal" }, price: "100.000₫" },
    ],
  },
  brow: {
    Icon: PaintBrushIcon,
    title: "Brow",
    subtitleKey: "svc.brow.sub",
    items: [
      { name: "Brow Lamination", desc: { vi: "Định hình lông mày", en: "Brow shaping" }, price: "500.000₫" },
      { name: "Wax", desc: { vi: "Tẩy lông mày bằng sáp", en: "Brow waxing" }, price: "150.000₫" },
      { name: "Tint & Color", desc: { vi: "Nhuộm màu lông mày", en: "Brow tinting" }, price: "150.000₫" },
    ],
  },
  massage: {
    Icon: HandRaisedIcon,
    title: "Massage",
    subtitleKey: "svc.massage.sub",
    items: [
      { name: "Foot Massage", desc: { vi: "30' / 40' / 60'", en: "30 / 40 / 60 min" }, price: "200 / 250 / 350K" },
      { name: "Foot Soak + Scrub + Pedicure", desc: { vi: "Ngâm chân — Tẩy da chết — Chà gót — Nhặt da", en: "Foot soak — Exfoliation — Heel scrub — Pedicure" }, price: "350.000₫" },
      { name: "Neck & Shoulder", desc: { vi: "Massage cổ, vai, gáy — 30' / 45' / 60'", en: "Neck & shoulder — 30 / 45 / 60 min" }, price: "250 / 350 / 450K" },
      { name: "Body Massage", desc: { vi: "60' / 75' / 90'", en: "60 / 75 / 90 min" }, price: "450 / 550 / 650K" },
    ],
  },
  wax: {
    Icon: BeakerIcon,
    title: "Wax",
    subtitleKey: "svc.wax.sub",
    items: [
      { name: "Half / Full legs", desc: { vi: "Nửa chân / toàn bộ chân", en: "Half / full leg wax" }, price: "400 / 550K" },
      { name: "Half / Full arms", desc: { vi: "Nửa tay / toàn bộ tay", en: "Half / full arm wax" }, price: "300 / 450K" },
      { name: "Bikini / Full Bikini", price: "400 / 650K" },
      { name: "Chin / Upper lip", desc: { vi: "Cằm / Ria mép", en: "Chin / upper lip wax" }, price: "200.000₫" },
      { name: "Face", desc: { vi: "Tẩy lông mặt", en: "Facial hair removal" }, price: "300.000₫" },
      { name: "Armpit", desc: { vi: "Tẩy lông nách", en: "Underarm wax" }, price: "200.000₫" },
    ],
  },
  "nail-gel": {
    Icon: SparklesIcon,
    title: "Nail Gel",
    subtitleKey: "svc.nail-gel.sub",
    items: [
      { name: "Manicure / Pedicure only", desc: { vi: "Nhặt da tay / chân", en: "Nail grooming only" }, price: "150.000₫" },
      { name: "Manicure / Pedicure + Color", desc: { vi: "Sơn gel tay / chân", en: "Gel polish hands / feet" }, price: "300.000₫" },
      { name: "Gel color only", desc: { vi: "Sơn trơn", en: "Gel color only" }, price: "200.000₫" },
      { name: "Removal", desc: { vi: "Phá màu", en: "Gel removal" }, price: "100.000₫" },
    ],
  },
  "normal-color": {
    Icon: SwatchIcon,
    title: "Normal Color",
    subtitleKey: "svc.normal-color.sub",
    items: [
      { name: "Only color", desc: { vi: "Chỉ sơn màu", en: "Color only" }, price: "150.000₫" },
      { name: "Manicure / Pedicure + Color", desc: { vi: "Sơn thường tay / chân", en: "Regular polish hands / feet" }, price: "250.000₫" },
    ],
  },
  "nail-designs": {
    Icon: ScissorsIcon,
    title: "Nail Designs",
    subtitleKey: "svc.nail-designs.sub",
    items: [
      { name: "Fake nail + manicure + color", desc: { vi: "Úp, nhặt da, sơn", en: "Tip overlay, grooming, polish" }, price: "500.000₫" },
      { name: "Extension + manicure + color", desc: { vi: "Nối gel, nhặt da, sơn", en: "Gel extension, grooming, polish" }, price: "650.000₫" },
      { name: "Acrylic + manicure + color", desc: { vi: "Đắp bột, nhặt da, sơn", en: "Acrylic, grooming, polish" }, price: "900.000₫" },
      { name: "BIAB gel", desc: { vi: "Cứng móng tạo cầu", en: "Builder in a bottle" }, price: "400.000₫" },
      { name: "Cateyes gel", desc: { vi: "Sơn mắt mèo", en: "Cat-eye gel polish" }, price: "400.000₫" },
      { name: "Design per nail", desc: { vi: "Móng thiết kế / ngón", en: "Per nail design" }, price: "20 — 50K" },
      { name: "French / Ombre", desc: { vi: "Mỗi ngón", en: "Per nail" }, price: "15 — 30K" },
      { name: "Nail art design", desc: { vi: "Vẽ nghệ thuật / ngón", en: "Art design per nail" }, price: "20 — 100K" },
    ],
  },
  "hair-face": {
    Icon: UserIcon,
    title: "Hair & Face",
    subtitleKey: "svc.hair-face.sub",
    items: [
      { name: "Nourishing Shampoo", desc: { vi: "Gội đầu dưỡng sinh", en: "Nourishing shampoo" }, price: "250.000₫" },
      { name: "Wash & Dry", desc: { vi: "Gội và sấy", en: "Wash & blow dry" }, price: "150.000₫" },
      { name: "Straight Hair", desc: { vi: "Là tóc", en: "Hair straightening" }, price: "200.000₫" },
      { name: "Remove Makeup", desc: { vi: "Tẩy trang", en: "Makeup removal" }, price: "30.000₫" },
      { name: "Face Wash", desc: { vi: "Rửa mặt", en: "Face wash" }, price: "30.000₫" },
      { name: "Facial Exfoliation", desc: { vi: "Tẩy da chết mặt", en: "Facial exfoliation" }, price: "50.000₫" },
      { name: "Facial Mask", desc: { vi: "Đắp mặt nạ", en: "Facial mask" }, price: "50.000₫" },
      { name: "Facial Care", desc: { vi: "Chăm sóc da mặt toàn diện", en: "Full facial treatment" }, price: "300.000₫" },
    ],
  },
};

export default function Services() {
  const [active, setActive] = useState("eyelashes");
  const { lang, t } = useLang();
  const data = servicesData[active];

  return (
    <section id="services" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle
          script={t("services.script")}
          title={t("services.title")}
          desc={t("services.desc")}
        />

        <div className="mb-8 md:mb-10 -mx-4 md:mx-0">
          <div className="flex md:flex-wrap md:justify-center gap-2 px-4 md:px-0 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  active === tab.id
                    ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-[0_4px_24px_rgba(196,163,90,0.25)]"
                    : "bg-white text-brown-medium border border-gold/15 hover:border-gold/40"
                }`}
              >
                <tab.Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {data && (
          <div key={active} className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-md tab-panel-enter">
            <div className="bg-gradient-to-r from-gold to-gold-dark px-5 py-4 md:px-8 md:py-6 flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <data.Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white font-semibold truncate">{data.title}</h3>
                <p className="text-xs md:text-sm text-white/80 truncate">{t(data.subtitleKey)}</p>
              </div>
            </div>

            <div>
              {data.items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center px-5 py-3.5 md:px-8 md:py-4 border-b border-gold/8 last:border-b-0 hover:bg-gold/[0.03] transition-colors">
                  <div className="flex items-start justify-between gap-3 w-full sm:contents">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] md:text-sm font-medium text-brown-deep leading-snug">{item.name}</div>
                      {item.desc && (
                        <div className="text-[11px] md:text-xs text-brown-medium/50 mt-0.5 leading-snug">
                          {item.desc[lang]}
                        </div>
                      )}
                    </div>
                    <div className="price-dots hidden sm:block" />
                    <div className="font-[family-name:var(--font-heading)] text-sm md:text-base font-semibold text-gold-dark whitespace-nowrap shrink-0 mt-0.5 sm:mt-0">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
