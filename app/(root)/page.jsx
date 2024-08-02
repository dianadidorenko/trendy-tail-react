"use client";

import CookieConsent from "@/components/CookieConsent";
import AboutUs from "@/components/layout/main-page/AboutUs";
import CatalogNav from "@/components/layout/main-page/CatalogNav";
import InTrendsSlider from "@/components/layout/main-page/InTrendsSlider";
import MainSlider from "@/components/layout/main-page/MainSlider";
import WelcomeTitle from "@/components/layout/main-page/WelcomeTitle";
import { items } from "@/items";

function Home() {
  return (
    <main>
      <WelcomeTitle />
      <MainSlider />
      <AboutUs />
      <CatalogNav />
      <InTrendsSlider items={items} />
      <CookieConsent />
    </main>
  );
}

export default Home;
