"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const regexName = /^[a-zA-Zа-яА-я]+$/;
    const regexEmail = /\w+@\w+\.\w+/;

    if (regexEmail.test(email)) {
      setEmail(email);
    } else {
      toast.error("Формат мейла повинен виглядати так - trendy@ukr.net");
    }

    if (text.length < 10) {
      toast.error("Повідомлення повинно містити мімінмум 10 літер");
    } else {
      setText(text);
    }

    if (regexName.test(name)) {
      setName(name);
    } else {
      toast.error("Введіть тільки літери");
    }
  };

  return (
    <footer className="flex flex-col gap-6 bg-lightBlueColor dark:bg-accent dark:text-white/80">
      <div className="flex flex-wrap xs:gap-x-8 xs:gap-y-6 xs:justify-center sm:items-start md:gap-x-16 xs:px-2 sm:px-4 md:px-5 lg:px-7">
        <div className="flex gap-2 flex-col items-center justify-between mid:justify-center">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Лого"
              width={70}
              height={97}
              className="xs:max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px]"
            />
          </Link>
          <p className="text-secondary text-center font-bold xs:text-xs">
            Тому що ми <br /> піклуємося про собак
          </p>
        </div>

        <nav className="flex gap-2 flex-col">
          <h2 className="xs:text-base pb-1 xs:text-center sm:text-start">
            Каталог
          </h2>
          <ul className="flex flex-wrap gap-2 xs:text-sm sm:flex-col xs:justify-center ">
            <li>
              <Link href={"/new"} className="dark:text-white/80">
                Новинки
              </Link>
            </li>
            <li>
              <Link href={"/accessories"} className="dark:text-white/80">
                Аксесуари
              </Link>
            </li>
            <li>
              <Link href={"/clothes"} className="dark:text-white/80">
                Одяг
              </Link>
            </li>
            <li>
              <Link href={"/carrying-bags"} className="dark:text-white/80">
                Сумки-переноски
              </Link>
            </li>
            <li>
              <Link href={"/beds"} className="dark:text-white/80">
                Ліжаки
              </Link>
            </li>
            <li>
              <Link href={"/sale"} className="dark:text-white/80">
                Знижки
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="flex gap-2 flex-col">
          <h2 className="xs:text-base pb-1 xs:text-center sm:text-start">
            Меню
          </h2>
          <ul className="flex flex-wrap gap-2 xs:text-sm sm:flex-col xs:justify-center">
            <li>
              <Link
                href={"/list?cat=all-products"}
                className="dark:text-white/80"
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link href={"/about-us"} className="dark:text-white/80">
                О нас
              </Link>
            </li>
            <li>
              <Link href={"/deloivery"} className="dark:text-white/80">
                Доставка і оплата
              </Link>
            </li>
            <li>
              <Link href={"/contacts"} className="dark:text-white/80">
                Контакти
              </Link>
            </li>
            <li>
              <Link href={"/reviews"} className="dark:text-white/80">
                Відгуки
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-y-2">
          <h2 className="xs:text-base pb-1">Зв’язатися з нами</h2>
          <form
            className="flex flex-col gap-y-1"
            onSubmit={(e) => handleChange(e)}
          >
            <label className="xs:text-sm">Ім'я</label>
            <input
              type="text"
              placeholder="Trendy"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="bg-white"
            />

            <label className="xs:text-sm">E-mail</label>
            <input
              type="email"
              placeholder="trendy@ukr.net"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
            <label className="xs:text-sm">Текст повідомлення</label>
            <input
              type="text"
              placeholder="Ваш текст"
              value={text}
              name="text"
              onChange={(e) => setText(e.target.value)}
              className="bg-white"
            />

            <button
              type="submit"
              className="rounded-md bg-darkBlueColor dark:bg-lightBlueColor text-white py-1 px-4 xs:text-[10px] sm:text-xs lg:text-sm mt-1"
            >
              Надіслати
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-3 xs:text-sm">
          <h2 className="xs:text-base pb-1">Наші контакти</h2>
          <Link href="tel:+380974379424" className="dark:text-white/80">
            Тел: +38 (097) 437 94 24
          </Link>
          <p className="dark:text-white/80">
            Графік роботи: Пн - Нд 9:00-19:00
          </p>
          <Link href="mailto:trendytail@ukr.net" className="dark:text-white/80">
            Пошта: trendytail@ukr.net
          </Link>
          <div className="flex gap-6 items-center justify-center">
            <Link href={"/"}>
              <Instagram className="dark:text-white/80" />
            </Link>
            <Link href={"/"}>
              <Facebook className="dark:text-white/80" />
            </Link>
            <Link href={"/"}>
              <Youtube className="dark:text-white/80" />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center border-t border-t-zinc-300 pt-[30px] xs:px-2 sm:px-4 md:px-5 lg:px-7 xs:text-xs sm:text-sm lg:text-base">
        TrendyTail © Copyright 2024 |<span> Всі права захищені</span>
      </p>
    </footer>
  );
}
