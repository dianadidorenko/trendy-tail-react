import { Orelega_One, Poppins } from "next/font/google";

import "../globals.css";

import Header from "../../components/common/Header";
import { ThemeProvider } from "../../components/ThemeProvider";
import CartProvider from "@/lib/context/CartContext";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const popins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

const orelegaOne = Orelega_One({
  subsets: ["latin"],
  variable: "--font-orelegaOne",
  weight: ["400"],
});

export const metadata = {
  title: "Trendy Tail Store",
  description: "Trendy Tail Store - Ecommerce",
};

function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${popins.className} ${orelegaOne.className} font-poppins`}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <ClerkProvider>
              <ToasterProvider />
              <Header />
              {children}
              <Footer />
            </ClerkProvider>
          </ThemeProvider>
        </body>
      </html>
    </CartProvider>
  );
}

export default RootLayout;
