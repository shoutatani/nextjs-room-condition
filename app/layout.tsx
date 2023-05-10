import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "My room's air condition Data",
  description:
    "僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。",
  openGraph: {
    description:
      "僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。",
    title: "My room's air condition data",
    siteName: "My room's air condition data",
    type: "website",
    images:
      "https://my-room-condition.tan-shio.com/eye-catch-my-rooms-air-condition-data.png",
  },
  twitter: {
    card: "summary_large_image",
    creator: "shoutatani",
    title: "My room's air condition data",
    description:
      "僕のお部屋のCO2濃度, 大気圧, 湿度, 室温を表示する僕得アプリです。",
  },
  icons: "/favicon.ico",
  viewport: {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
