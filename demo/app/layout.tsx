import type { Metadata } from "next";
import "./globals.css";
import "@townhall-gg/skeleton/styles.css";

export const metadata: Metadata = {
  title: "Skeleton Demo | @townhall-gg/skeleton",
  description: "Auto-skeleton loader - wrap your UI and it becomes a skeleton while loading",
  authors: [{ name: "Townhall", url: "https://townhall.gg" }],
  keywords: ["skeleton", "loader", "react", "loading", "placeholder", "auto-skeleton"],
  openGraph: {
    title: "Skeleton Demo | @townhall-gg/skeleton",
    description: "Auto-skeleton loader - wrap your UI and it becomes a skeleton while loading",
    url: "https://skeleton.townhall.gg",
    siteName: "Townhall Skeleton",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
