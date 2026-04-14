import type { Metadata } from "next";
import { LightboxProvider } from "@/components/Lightbox";
import { LangProvider } from "@/components/LangProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happiness Beauty — Nail, Eyelash, Massage & Spa | Hà Nội",
  description: "Happiness Beauty - Dịch vụ Nail, Eyelash, Massage, Wax, Hair & Face chuyên nghiệp tại 18 P. Lãn Ông, Phố cổ Hà Nội. Đặt lịch: 0357 276 916",
  keywords: "nail, eyelash, massage, wax, beauty, spa, hà nội, hoàn kiếm, happiness beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LangProvider>
          <LightboxProvider>
            {children}
          </LightboxProvider>
        </LangProvider>
      </body>
    </html>
  );
}
