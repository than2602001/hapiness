"use client";
import { createContext, useContext, useState, useCallback } from "react";

export type Lang = "vi" | "en";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangCtx>({
  lang: "vi",
  toggle: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

/* ─────────── All translations ─────────── */
const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.about": { vi: "Giới thiệu", en: "About" },
  "nav.services": { vi: "Bảng giá", en: "Pricing" },
  "nav.gallery": { vi: "Mẫu Nail", en: "Nail Gallery" },
  "nav.eyelash": { vi: "Eyelash", en: "Eyelash" },
  "nav.testimonials": { vi: "Đánh giá", en: "Reviews" },
  "nav.book": { vi: "Đặt lịch", en: "Book Now" },

  // Hero
  "hero.badge": { vi: "Premium Beauty Salon", en: "Premium Beauty Salon" },
  "hero.title1": { vi: "Nâng tầm vẻ đẹp", en: "Elevate Your Beauty" },
  "hero.title2": { vi: "cùng", en: "with" },
  "hero.desc": {
    vi: "Trải nghiệm dịch vụ làm đẹp cao cấp — Nail Art, Eyelash Extension, Massage thư giãn và nhiều hơn nữa tại Happiness Beauty.",
    en: "Experience premium beauty services — Nail Art, Eyelash Extensions, Relaxing Massage and more at Happiness Beauty.",
  },
  "hero.cta1": { vi: "Đặt lịch ngay", en: "Book Now" },
  "hero.cta2": { vi: "Xem bảng giá →", en: "View Pricing →" },
  "hero.stat.branch": { vi: "Chi nhánh", en: "Branches" },
  "hero.stat.services": { vi: "Dịch vụ", en: "Services" },
  "hero.stat.clients": { vi: "Khách hàng", en: "Clients" },
  "hero.review": { vi: "Đánh giá Google Maps", en: "Google Maps Rating" },

  // About
  "about.script": { vi: "Về chúng tôi", en: "About Us" },
  "about.title1": { vi: "Happiness Beauty", en: "Happiness Beauty" },
  "about.title2": { vi: "Điểm đến làm đẹp lý tưởng", en: "Your Beauty Destination" },
  "about.p1": {
    vi: "Happiness Beauty tọa lạc tại trung tâm phố cổ Hà Nội, tự hào mang đến trải nghiệm làm đẹp chuyên nghiệp với đội ngũ nhân viên tận tâm và không gian sang trọng.",
    en: "Located in the heart of Hanoi's Old Quarter, Happiness Beauty proudly delivers professional beauty experiences with a dedicated team and luxurious atmosphere.",
  },
  "about.p2": {
    vi: 'Chúng tôi mong muốn trở thành "Nhà Nail", nơi mọi người giải tỏa sự mệt mỏi và tìm thấy niềm vui, sự sẻ chia thân tình.',
    en: 'We aspire to be your "Nail Home" — a place to unwind, find joy, and share warm moments with loved ones.',
  },
  "about.f1.title": { vi: "Chất lượng cao", en: "High Quality" },
  "about.f1.desc": { vi: "Sản phẩm chính hãng, kỹ thuật chuyên nghiệp", en: "Genuine products, professional techniques" },
  "about.f2.title": { vi: "Tận tâm phục vụ", en: "Dedicated Service" },
  "about.f2.desc": { vi: "Nhân viên thân thiện, tư vấn nhiệt tình", en: "Friendly staff, enthusiastic consultation" },
  "about.f3.title": { vi: "Không gian thoải mái", en: "Cozy Space" },
  "about.f3.desc": { vi: "Tiệm sạch sẽ, thoáng mát, xinh xắn", en: "Clean, airy, beautifully decorated salon" },
  "about.f4.title": { vi: "Vị trí trung tâm", en: "Central Location" },
  "about.f4.desc": { vi: "Phố cổ Hà Nội, Hoàn Kiếm", en: "Hanoi Old Quarter, Hoan Kiem" },

  // Services
  "services.script": { vi: "Dịch vụ & Bảng giá", en: "Services & Pricing" },
  "services.title": { vi: "Bảng Giá Dịch Vụ", en: "Service Price List" },
  "services.desc": {
    vi: "Đầy đủ dịch vụ làm đẹp từ Nail, Eyelash, Massage đến Hair & Skincare",
    en: "Complete beauty services from Nail, Eyelash, Massage to Hair & Skincare",
  },

  // Service subtitles
  "svc.eyelashes.sub": { vi: "Nối mi chuyên nghiệp — Tự nhiên & Đẹp", en: "Professional lash extensions — Natural & Beautiful" },
  "svc.brow.sub": { vi: "Định hình & chăm sóc lông mày", en: "Brow shaping & care" },
  "svc.massage.sub": { vi: "Thư giãn & giải tỏa mệt mỏi", en: "Relaxation & stress relief" },
  "svc.wax.sub": { vi: "Tẩy lông chuyên nghiệp, an toàn", en: "Professional & safe hair removal" },
  "svc.nail-gel.sub": { vi: "Sơn gel bền đẹp, bóng mịn", en: "Long-lasting gel polish, smooth & shiny" },
  "svc.normal-color.sub": { vi: "Sơn thường đa dạng màu sắc", en: "Regular polish in various colors" },
  "svc.nail-designs.sub": { vi: "Thiết kế nail nghệ thuật, độc đáo", en: "Artistic & unique nail designs" },
  "svc.hair-face.sub": { vi: "Chăm sóc tóc & da mặt toàn diện", en: "Complete hair & facial care" },

  // Gallery
  "gallery.script": { vi: "Tác phẩm của chúng tôi", en: "Our Work" },
  "gallery.title": { vi: "Mẫu Nail Xinh", en: "Beautiful Nail Designs" },
  "gallery.desc": { vi: "Bộ sưu tập thiết kế nail đẹp mắt tại Happiness Beauty", en: "A collection of stunning nail designs at Happiness Beauty" },

  // Eyelash
  "eyelash.script": { vi: "Lash Extension", en: "Lash Extension" },
  "eyelash.title": { vi: "Dịch Vụ Nối Mi", en: "Eyelash Extension Services" },
  "eyelash.desc": { vi: "Đôi mắt quyến rũ hơn với kỹ thuật nối mi chuyên nghiệp", en: "Captivating eyes with professional lash extension techniques" },

  // Eyelash card labels
  "eyelash.volume": { vi: "Nối mi chùm dày — 600.000₫", en: "Volume lash extensions — 600.000₫" },
  "eyelash.classic": { vi: "Nối mi tự nhiên — 400.000₫", en: "Natural lash extensions — 400.000₫" },
  "eyelash.design": { vi: "Nối mi thiết kế — 500.000₫", en: "Design lash extensions — 500.000₫" },
  "eyelash.result": { vi: "Kết quả tự nhiên, cuốn hút", en: "Natural, captivating results" },
  "eyelash.process.title": { vi: "Quy trình nối mi", en: "Extension Process" },
  "eyelash.process.desc": { vi: "Tỉ mỉ, chuyên nghiệp", en: "Meticulous & professional" },
  "eyelash.brow": { vi: "Định hình lông mày — 500.000₫", en: "Brow lamination — 500.000₫" },

  // Testimonials
  "testi.script": { vi: "Khách hàng nói gì", en: "What Clients Say" },
  "testi.title": { vi: "Cảm Nhận Khách Hàng", en: "Client Testimonials" },
  "testi.desc": { vi: "Hàng ngàn khách hàng đã tin tưởng và yêu thích dịch vụ của chúng tôi", en: "Thousands of clients trust and love our services" },
  "testi.role": { vi: "Khách hàng", en: "Client" },

  "testi.r1": {
    vi: "Dịch vụ rất ok, các bạn nhân viên dễ thương, quá hài lòng về dịch vụ. Sẽ ghé lại lần nữa!",
    en: "Great service, lovely staff, very satisfied. Will definitely come back!",
  },
  "testi.r2": {
    vi: "Dịch vụ ok lắm nha, mấy bạn nhẹ nhàng dễ thương làm rất cẩn thận, tư vấn tận tình. Ưng lắm!",
    en: "Amazing service! The staff are gentle, careful and give great advice. Loved it!",
  },
  "testi.r3": {
    vi: "Tiệm nail nhỏ xinh, thoáng mát sạch sẽ, nhân viên dễ thương tư vấn nhiệt tình. Mình sẽ quay lại!",
    en: "A cute little nail salon — clean, airy, with friendly staff. Will come back for sure!",
  },

  // Contact
  "contact.script": { vi: "Liên hệ đặt lịch", en: "Contact & Booking" },
  "contact.title": { vi: "Đặt Lịch & Liên Hệ", en: "Book & Contact Us" },
  "contact.desc": { vi: "Hãy liên hệ để được tư vấn và đặt lịch hẹn", en: "Contact us for consultation and appointments" },
  "contact.info": { vi: "Thông tin liên hệ", en: "Contact Info" },
  "contact.address": { vi: "Địa chỉ", en: "Address" },
  "contact.hotline": { vi: "Hotline đặt lịch", en: "Booking Hotline" },
  "contact.hours.label": { vi: "Giờ hoạt động", en: "Operating Hours" },
  "contact.hours.days": { vi: "Thứ Hai — Chủ Nhật", en: "Monday — Sunday" },
  "contact.hours.open": { vi: "Mở cửa mỗi ngày", en: "Open every day" },
  "contact.map.hn": { vi: "Hà Nội — Hoàn Kiếm", en: "Hanoi — Hoan Kiem" },

  // Footer
  "footer.desc": {
    vi: "Happiness Beauty — Điểm đến làm đẹp lý tưởng tại phố cổ Hà Nội. Nơi mọi người tìm thấy niềm vui và sự thư giãn.",
    en: "Happiness Beauty — Your ideal beauty destination in Hanoi Old Quarter. A place to find joy and relaxation.",
  },
  "footer.services": { vi: "Dịch Vụ", en: "Services" },
  "footer.links": { vi: "Liên kết", en: "Links" },
  "footer.hours": { vi: "Giờ hoạt động", en: "Hours" },
  "footer.hours.days": { vi: "Thứ 2 — Chủ nhật", en: "Mon — Sun" },
  "footer.hours.daily": { vi: "Phục vụ mọi ngày", en: "Open daily" },
  "footer.rights": { vi: "Tất cả quyền được bảo lưu.", en: "All rights reserved." },
};

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] ?? key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}
