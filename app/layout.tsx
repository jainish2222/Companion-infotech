import { Providers } from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar"; // assumes correct path
import Footer from "@/components/home/Section9"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
