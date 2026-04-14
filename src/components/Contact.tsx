"use client";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";
import { useLang } from "./LangProvider";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle script={t("contact.script")} title={t("contact.title")} desc={t("contact.desc")} />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-brown-deep mb-6">{t("contact.info")}</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] bg-gold/10 rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-deep mb-1">{t("contact.address")}</h4>
                  <p className="text-sm text-brown-medium/70 leading-relaxed">18 P. Lãn Ông, Phố cổ Hà Nội, Hoàn Kiếm, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] bg-gold/10 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-deep mb-1">{t("contact.hotline")}</h4>
                  <a href="tel:0357276916" className="text-sm text-gold-dark font-medium hover:underline">0357 276 916</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] bg-gold/10 rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-deep mb-1">Email</h4>
                  <a href="mailto:hoangvun168168@gmail.com" className="text-sm text-gold-dark font-medium hover:underline">hoangvun168168@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 min-w-[48px] bg-gold/10 rounded-full flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brown-deep mb-1">{t("contact.hours.label")}</h4>
                  <div className="text-sm text-brown-medium/70 space-y-0.5">
                    <p>{t("contact.hours.days")}</p>
                    <p className="font-semibold text-brown-deep">09:00 — 22:00</p>
                    <p className="text-xs text-gold-dark">{t("contact.hours.open")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
            <div className="flex border-b border-gold/10">
              <div className="flex-1 py-4 text-sm font-semibold text-center flex items-center justify-center gap-2 text-gold-dark border-b-2 border-gold bg-gold/5">
                <MapPinIcon className="w-4 h-4" />
                {t("contact.map.hn")}
              </div>
            </div>
            <div className="flex-1 min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d105.8470089!3d21.0365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abdc52711127%3A0x7b4f29fcb6c73f6e!2s18+P.+L%C3%A3n+%C3%94ng%2C+H%C3%A0ng+B%E1%BB%93%2C+Ho%C3%A0n+Ki%E1%BA%BFm%2C+H%C3%A0+N%E1%BB%99i!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
