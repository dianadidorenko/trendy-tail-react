import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./Nav";
import Socials from "./Socials";
import SettingsHeader from "./SettingsHeader";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt="Лого"
                width={40}
                height={40}
                className="w-[60px]"
              />
            </Link>
            <Nav
              containerStyles={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-lg"}
            />
          </div>

          <Socials
            containerStyles={"flex items-center gap-x-4"}
            iconStyles={"text-2xl"}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
