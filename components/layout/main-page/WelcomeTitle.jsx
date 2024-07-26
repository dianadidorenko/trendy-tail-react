"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import Button from "@/components/elements/Button";

export default function WelcomeTitle() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-center py-[70px] xs:py-[50px] xs:flex-col sm:flex-row gap-8">
          <motion.div
            className="flex"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={"/pages/main/01.png"}
              width={400}
              height={424}
              alt="Картинка"
              className="xs:max-w-[180px] lg:max-w-[250px] md:max-w-[200px]"
            />
          </motion.div>
          <div className="welcome-title xsSm:w-[470px] xs:w-[300px] xl:w-[690px] sm:max-w-none">
            <motion.h1
              className="text-lightBlueColor font-orelegaOne pb-3 sm:text-[30px] xs:text-[26px] md:text-[25px] xl:text-[40px]"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              Якісні зоотовари від виробника для ваших улюбленців
            </motion.h1>
            <motion.h2
              className="max-w-[470px] mx-auto pb-[30px] xs:pb-[20px] xs:text-[16px] text-[18px] text-gray-800 dark:text-white"
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              Онлайн магазин з продажу товарів для домашніх тварин з доставкою
              по всій Україні
            </motion.h2>
            <motion.div
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={"/catalogue"}
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Button text="Каталог" containerStyles="w-[150px] h-[45px]" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={"/pages/main/02.png"}
              width={388}
              height={424}
              alt="Картинка"
              className="xs:max-w-[180px] lg:max-w-[250px] md:max-w-[200px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
