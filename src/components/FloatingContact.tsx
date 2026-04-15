"use client";
import { useState } from "react";
import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-6 z-50 flex flex-col-reverse items-start gap-3">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
          open
            ? "bg-brown-deep rotate-90 scale-95"
            : "bg-gradient-to-br from-gold to-gold-dark hover:shadow-[0_6px_30px_rgba(196,163,90,0.5)] hover:-translate-y-1"
        }`}
        aria-label="Contact us"
      >
        {open ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Contact options */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Facebook Messenger */}
        <a
          href="https://m.me/happinessbeauty"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
        >
          <span className="hidden group-hover:block bg-white text-brown-deep text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-[fadeIn_0.2s_ease]">
            Facebook Messenger
          </span>
          <div className="w-12 h-12 rounded-full bg-[#0084FF] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_4px_20px_rgba(0,132,255,0.4)] transition-all">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.455-1.9c.92.256 1.896.394 2.867.394 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.076 12.449-2.55-2.724-4.98 2.724 5.476-5.813 2.613 2.724 4.916-2.724-5.475 5.813z"/>
            </svg>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/84357276916?text=Xin%20ch%C3%A0o%2C%20t%C3%B4i%20mu%E1%BB%91n%20%C4%91%E1%BA%B7t%20l%E1%BB%8Bch%20t%E1%BA%A1i%20Happiness%20Beauty"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
        >
          <span className="hidden group-hover:block bg-white text-brown-deep text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-[fadeIn_0.2s_ease]">
            WhatsApp
          </span>
          <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
