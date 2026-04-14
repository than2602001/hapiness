"use client";
import { createContext, useContext, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface LightboxCtx {
  open: (images: string[], index: number) => void;
}

const LightboxContext = createContext<LightboxCtx>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((imgs: string[], i: number) => {
    setImages(imgs);
    setIndex(i);
    setIsOpen(true);
    document.body.classList.add("lightbox-active");
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("lightbox-active");
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close, prev, next]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/92 backdrop-blur-sm z-[10000] flex items-center justify-center"
          onClick={close}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 -left-14 md:-left-16 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 -right-14 md:-right-16 w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-gold transition-colors cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {images[index] && (
              <Image
                src={images[index]}
                alt="Gallery preview"
                width={800}
                height={1000}
                className="max-h-[85vh] w-auto rounded-xl shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export default function Lightbox() {
  return null; // Placeholder — actual lightbox is handled via LightboxProvider
}
