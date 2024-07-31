"use client";

import AboutUs from "@/components/layout/main-page/AboutUs";
import CatalogNav from "@/components/layout/main-page/CatalogNav";
import InTrendsSlider from "@/components/layout/main-page/InTrendsSlider";
import MainSlider from "@/components/layout/main-page/MainSlider";
import WelcomeTitle from "@/components/layout/main-page/WelcomeTitle";
import { items } from "@/items";

export default function Home() {
  return (
    <main>
      <WelcomeTitle />
      <MainSlider />
      <AboutUs />
      <CatalogNav />
      <InTrendsSlider items={items} />
    </main>
  );
}
