"use client";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ productMedia, itemName }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3 max-w-[410px]">
        <Image
          src={mainImage}
          width={410}
          height={500}
          objectFit="cover"
          alt={`${itemName}`}
          className="max-w-[500px] rounded-lg shadow-xl object-cover"
        />
        <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
          {productMedia.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={130}
              height={130}
              objectFit="cover"
              alt={`${itemName}`}
              className={`rounded-lg object-cover cursor-pointer ${
                mainImage === image ? "border-2 border-primary/40" : ""
              }`}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>

      {productMedia.length > 3 && (
        <div className="flex items-end justify-end ">
          <DoubleArrowRightIcon className="w-[35px] h-[35px] animate-swipe repeat-infinite border rounded-full border-gray-200 mt-1 py-2" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
