"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { useLightbox } from "./Lightbox";
import { useLang } from "./LangProvider";

const nailImages = [
  { src: "/images/nail/z7716345643375_ab4f6b8a294aa99fd27e0f7074087baa.jpg", alt: "Pink bow nail" },
  { src: "/images/nail/z7716224562441_8f8ec4a75dd29d86a1fc6a526668877f.jpg", alt: "Tortoiseshell nails" },
  { src: "/images/nail/z7716224563542_cdd2a9f4b7cf827a182e26df2e9444aa.jpg", alt: "White bow nails" },
  { src: "/images/nail/z7716224561098_415fd81fe251af35ce3a3737ac234e8c.jpg", alt: "Black heart nail" },
  { src: "/images/nail/z7716224562135_9100ea09f7df6a37af5227fd49b3f1f3.jpg", alt: "Blue floral nails" },
  { src: "/images/nail/z7716224564651_c70ccd51ff0c535b7d5f96f01809a30d.jpg", alt: "Blue bow nails" },
  { src: "/images/nail/z7716224567183_407d3d41cad65c45d7c88679984819b8.jpg", alt: "Black french nails" },
  { src: "/images/nail/z7716224561088_c69da36b9d92154419104f5de231300a.jpg", alt: "Red ombre nails" },
  { src: "/images/nail/z7716345664503_0de1298ef549b445a18959e2f1a25329.jpg", alt: "Silver glitter nails" },
  { src: "/images/nail/z7716224565163_a13d1bece26d53cb905e671768589867.jpg", alt: "Navy blue nails" },
  { src: "/images/nail/z7716224567418_086ffdda1586130d5f75ce7040b328b0.jpg", alt: "Black satin bow" },
  { src: "/images/nail/z7716224567693_61f2f14207a921df35535b3ab34c04a1.jpg", alt: "Black bow tip nails" },
];

export default function Gallery() {
  const { open } = useLightbox();
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle script={t("gallery.script")} title={t("gallery.title")} desc={t("gallery.desc")} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {nailImages.map((img, i) => (
            <div
              key={i}
              onClick={() => open(nailImages.map(n => n.src), i)}
              className="gallery-item relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image src={img.src} alt={img.alt} width={300} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <span className="text-white text-2xl drop-shadow-lg">✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
