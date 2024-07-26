"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import MobileNav from "./MobileNav";
import Nav from "./Nav";
import SettingsHeader from "./SettingsHeader";

export default function Header() {
  const path = usePathname();

  return (
    <>
      <header
        className={`sticky bg-white font-orelegaOne top-0 z-30 transition-all header flex items-center py-3 px-6 justify-between dark:bg-accent ${
          path === "/" &&
          " flex items-center py-3 justify-between px-6 max-[390px]:px-3 shadow-lg"
        }`}
      >
        <div className="flex items-center gap-10 max-[550px]:gap-4 max-[390px]:gap-2">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Лого"
              width={40}
              height={40}
              className="w-[40px]"
            />
          </Link>

          {/* dekstop menu */}
          <Nav
            containerStyles="hidden lg:flex items-center flex gap-10 max-[1024px]:gap-5 font-orelegaOne"
            linkStyles="relative text-primary dark:text-white/80 transition-all hover:text-orangeColor hover:dark:text-orangeColor"
            underlineStyles="absolute left-0 top-full h-[2px] bg-orangeColor w-full"
          />

          {/* mobile nav */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>

        <SettingsHeader
          containerStyles={"flex items-center gap-x-6"}
          linkStyles={
            "rounded-full border-2 border-orangeColor/50 dark:border-darkBlueColor p-2"
          }
        />
      </header>
    </>
  );
}
