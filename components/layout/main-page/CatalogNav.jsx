"use client";

import SectionHeaders from "@/components/common/SectionHeaders";
import Image from "next/image";
import Link from "next/link";

const CatalogNav = () => {
  return (
    <section className="pt-[50px] lg:pt-[70px]">
      <SectionHeaders mainHeader={"Каталог"} />
      <div className="container mx-auto my-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center justify-center hover:animate-swipe transition-all duration-300">
            <Link href={"/cloth?category=Одяг"} className="relative">
              <Image
                src={"/pages/main/catalog-nav/clothes.jpg"}
                width={280}
                height={167}
                alt="Одяг"
                className="xl:max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] text-white bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Одяг
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:animate-swipe transition-all duration-300">
            <Link href={"/beds?category=Ліжаки"} className="relative">
              <Image
                src={"/pages/main/catalog-nav/beds.jpg"}
                width={280}
                height={167}
                alt="Ліжаки"
                className="xl:max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] text-white bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Ліжаки
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:animate-swipe transition-all duration-300">
            <Link href={"/accessories?category=Аксесуари"} className="relative">
              <Image
                src={"/pages/main/catalog-nav/accessories.jpg"}
                width={280}
                height={167}
                alt="Аксесуари"
                className="lg:max-h-[138px] xl:max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] text-white bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Аксесуари
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center hover:animate-swipe transition-all duration-300">
            <Link
              href={"/carrying-bags?category=Сумки-переноски"}
              className="relative"
            >
              <Image
                src={"/pages/main/catalog-nav/carrying-bag.jpeg"}
                width={280}
                height={167}
                alt="Сумки-переноски"
                className="max-h-[187px] lg:max-h-[138px] xl:max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] text-white bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Сумки-переноски
              </p>
            </Link>
          </div>
          {/* <div className="flex items-center justify-center">
            <Link href={"/new?category=Новинки"} className="relative">
              <Image
                src={"/pages/main/catalog-nav/new.jpg"}
                width={280}
                height={167}
                alt="Новинки"
                className="max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Новинки
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/sale?category=Знижки"} className="relative">
              <Image
                src={"/pages/main/catalog-nav/sale.jpg"}
                width={280}
                height={167}
                alt="Знижки"
                className="max-h-[168px] object-cover rounded-xl shadow-md dark:shadow-slate-100"
              />
              <p className="absolute shadow-md text-[14px] bg-primary/60 dark:shadow-slate-300 uppercase left-4 top-4 z-10 px-2 py-1 border border-white rounded-md">
                Знижки
              </p>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CatalogNav;
