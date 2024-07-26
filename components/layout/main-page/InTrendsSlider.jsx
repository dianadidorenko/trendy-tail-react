"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Link from "next/link";
import Button from "@/components/elements/Button";
import Loader from "@/components/Loader";
import SectionHeaders from "@/components/common/SectionHeaders";

const InTrendsSlider = ({ items }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [items]);

  return loading ? (
    <Loader />
  ) : (
    <section>
      <SectionHeaders mainHeader={"В тренді"} />

      <div className="mx-auto relative">
        <Swiper
          className="h-[450px] max-w-[1100px] mx-auto"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={20}
          //   autoplay={true}
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
        >
          {items.slice(0, 4).map((item, index) => (
            <SwiperSlide className="px-2" key={index + "swiper"}>
              <div className="max-w-[307px] mx-auto flex flex-col items-center justify-center gap-2 border border-gray-300 shadow-md dark:border-white p-6 rounded-[20px] hover:shadow-xl hover:dark:shadow-slate-600 hover:cursor-pointer transition-all duration-300">
                {item.images.slice(0, 1).map((image) => (
                  <Image
                    src={image}
                    width={150}
                    height={150}
                    alt={item.name}
                    key={item.name}
                    className="rounded-[20px] object-cover"
                  />
                ))}
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="flex gap-2">
                  {item.sizes.map((size, index) => (
                    <em key={index + "size"} className="text-[14px]">
                      {size}
                    </em>
                  ))}
                </div>
                <p className="flex gap-2 items-baseline">
                  від
                  <span className="text-2xl text-redColor">
                    {item.startingPrice}
                  </span>
                  ₴
                </p>

                <Link href={`/${item.urlName}`}>
                  <Button
                    text={"Перейти"}
                    containerStyles={"w-[120px] h-[45px]"}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InTrendsSlider;
