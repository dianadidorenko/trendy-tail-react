"use client";

import { CartContext } from "@/lib/context/CartContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const tableLink = {
  target: "sizes",
  offset: -200,
};

const ProductDetails = ({
  id,
  itemName,
  productInfo,
  productSize,
  productPrices,
  startingPrice,
  productCategory,
  images,
}) => {
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState(productSize[0]);

  const [quantity, setQuantity] = useState(1);

  const [selectedPrice, setSelectedPrice] = useState(startingPrice);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  useEffect(() => {
    setTotalPrice(Number(selectedPrice * quantity));
  }, [selectedPrice, quantity]);

  return (
    <div className="flex flex-col gap-4 px-2 font-poppins">
      <div className="flex flex-col">
        <h1 className="font-orelegaOne text-primary dark:text-white text-[22px]">
          {itemName.name}
        </h1>

        <h2 className="pt-6">{itemName.description}</h2>

        {/* product description */}
        <div className="flex flex-col gap-2 pt-6 max-[360px]:text-[14px]">
          {productInfo.map((info, index) => (
            <div key={index}>
              {info.brand && (
                <div className="flex items-center gap-2">
                  <p>Бренд:</p>
                  <p className="font-bold">{info.brand}</p>
                </div>
              )}

              {info.material && (
                <div className="flex items-center gap-2">
                  <p>Матеріал:</p>
                  <p className="font-bold">{info.material}</p>
                </div>
              )}

              {info.season && (
                <div className="flex items-center gap-2">
                  <p>Сезон:</p>
                  <p className="font-bold">{info.season}</p>
                </div>
              )}

              {info.color && (
                <div className="flex items-center gap-2" key={index}>
                  <p>Колір:</p>
                  {info.color.map((colorSpecific, index) => (
                    <div
                      key={index}
                      className={`${colorSpecific} w-[30px] h-[30px] rounded-lg border border-gray-200 dark:border-white`}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* product sizes & price */}
        <div className="flex flex-col pt-6 max-[360px]:text-[14px]">
          <p className="pb-2">Розмір:</p>
          <div className="flex flex-col">
            <div className="flex gap-4 flex-wrap pb-4">
              {productSize.length > 0 &&
                productSize.map((size, sizeIndex) => (
                  <button
                    key={sizeIndex}
                    className={`font-bold px-2 p-2 min-w-[42px] max-w-[120px] text-center border-lightBlueColor border-2 rounded-lg cursor-pointer text-[15px] max-[360px]:text-[14px] ${
                      selectedSize === size
                        ? "bg-lightBlueColor text-white"
                        : "bg-white text-primary"
                    }`}
                    onClick={() => {
                      setSelectedSize(size);
                      handleClick(
                        size,
                        Object.values(productPrices[sizeIndex])[0]
                      );
                    }}
                  >
                    {size}
                  </button>
                ))}
            </div>

            {/* set sizes table */}
            {productCategory === "cloth" && (
              <div className="flex items-center gap-2 py-4">
                <ScrollLink
                  offset={tableLink.offset}
                  to={tableLink.target}
                  smooth
                  spy
                  className="underline text-gray-500 cursor-pointer hover:text-accent transition-all dark:text-white/90"
                >
                  Таблиця розмірів
                </ScrollLink>
                <Image
                  src="/catalogue-detail-item/sizes.svg"
                  alt="Розміри"
                  width={50}
                  height={50}
                />
              </div>
            )}
          </div>

          {selectedSize && selectedPrice !== null && (
            <div className="py-4">
              <span className="font-semibold text-[32px] text-redColor">
                <span>{quantity === 1 ? selectedPrice : totalPrice} ₴</span>
              </span>
            </div>
          )}
        </div>

        <button
          className="w-[150px] h-[45px] group relative cursor-pointer overflow-hidden bg-redColor p-2 rounded-full border-2 shadow-lg"
          onClick={() =>
            addToCart(
              id,
              itemName.name,
              selectedPrice,
              images[0],
              selectedSize,
              quantity
            )
          }
        >
          {/* animation */}
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#f04340] transition-all duration-500 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-white transition duration-500 group-hover:text-white">
            Купить
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
