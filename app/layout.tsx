// app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar"; // assumes correct path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
