"use client";

import { ChevronsUp } from "lucide-react";
import { useEffect, useState } from "react";

const Filter = ({
  items,
  selectedBrand,
  selectedCategory,
  selectedSeason,
  selectedType,
  handleBrandClick,
  handleCategoryClick,
  handleSeasonClick,
  handleTypeClick,
  priceRange,
  onPriceRangeChange,
  resetFilters,
}) => {
  // Находим уникальные категории
  const uniqueCategories = [...new Set(items.map((item) => item.categoryShow))];

  const uniqueSeasons = [
    ...new Set(
      items
        .map((item) => item.info.find((info) => info.season)?.season)
        .filter((season) => season !== undefined)
    ),
  ];

  const uniqueClothType = [
    ...new Set(
      items.map((item) => item.type).filter((type) => type !== undefined)
    ),
  ];

  const uniqueBrands = [...new Set(items.map((item) => item.info[0]?.brand))];

  const minPrice = Math.min(...items.map((item) => item.startingPrice));
  const maxPrice = Math.max(...items.map((item) => item.startingPrice));

  const handlePriceClick = (range) => {
    onPriceRangeChange(range);
  };

  const [otherFiltersOpen, setOtherFiltersOpen] = useState(false);

  // изменение элементов при уменьшении/увеличении окна
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-wrap gap-y-3 sm:gap-y-4 sm:border border-gray-200 p-1 rounded-[10px] w-full xsSm:grid xsSm:grid-cols-5 xs:gap-x-6 xs:justify-center xsSm:flex-row">
          <div className="flex flex-col gap-2 justify-center items-center">
            <select
              className="cursor-pointer text-[12px] sm:text-[14px] max-w-[90px] sm:min-w-[102px] sm:max-w-[102px] hover:text-darkBlueColor transition-all outline-none"
              onChange={(e) => handleCategoryClick(e.target.value)}
              value={selectedCategory || ""}
            >
              <option value="">Всі категорії</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <select
              className="cursor-pointer text-[12px] sm:text-[14px] max-w-[78px] sm:max-w-[87px] sm:min-w-[87px] hover:text-darkBlueColor transition-all outline-none"
              onChange={(e) => handleBrandClick(e.target.value)}
              value={selectedBrand || ""}
            >
              <option value="">Всі бренди</option>
              {uniqueBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <select
              className="cursor-pointer text-[12px] sm:text-[14px] max-w-[78px] sm:max-w-[87px] sm:min-w-[87px] hover:text-darkBlueColor transition-all outline-none"
              onChange={(e) => handleSeasonClick(e.target.value)}
              value={selectedSeason || ""}
            >
              <option value="">Всі сезони</option>
              {uniqueSeasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <select
              className="cursor-pointer text-[12px] sm:text-[14px] max-w-[66px] sm:max-w-[73px] sm:min-w-[73px] hover:text-darkBlueColor transition-all outline-none"
              onChange={(e) => handleTypeClick(e.target.value)}
              value={selectedType || ""}
            >
              <option value="">Всі типи</option>
              {uniqueClothType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <select
              className="cursor-pointer text-[12px] sm:text-[14px] max-w-[70px] sm:max-w-[70px] sm:min-w-[70px] hover:text-darkBlueColor transition-all outline-none"
              onChange={(e) => {
                const value = e.target.value;
                let range;
                switch (value) {
                  case "0-500":
                    range = [0, 500];
                    break;
                  case "501-1000":
                    range = [501, 1000];
                    break;
                  case "1001-1500":
                    range = [1001, 1500];
                    break;
                  case "1501-2000":
                    range = [1501, 2000];
                    break;
                  case "2001-max":
                    range = [2001, maxPrice];
                    break;
                  default:
                    range = [0, maxPrice];
                }
                handlePriceClick(range);
              }}
              value={
                priceRange[1] === maxPrice
                  ? `2001-max`
                  : `${priceRange[0]}-${priceRange[1]}`
              }
            >
              <option value="0-max">Всі ціни</option>
              <option value="0-500">Менше 500 грн</option>
              <option value="501-1000">501-1000 грн</option>
              <option value="1001-1500">1001-1500 грн</option>
              <option value="1501-2000">1501-2000 грн</option>
              <option value="2001-max">Вище 2001 грн</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-4 border border-gray-200 p-2 rounded-[10px] w-full md:min-w-[180px]">
          <div>
            <h2 className="font-bold text-[14px] sm:text-[16px] italic border pl-3 border-slate-400/50 shadow-sm shadow-slate-50 rounded-full">
              Категорія:
            </h2>
            <ul className="grid grid-cols-1 gap-1 pt-3">
              {uniqueCategories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor transition-all ${
                    selectedCategory === category
                      ? "bg-blue-100 rounded-sm text-accent"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[14px] sm:text-[16px] italic border pl-3 border-slate-400/50 shadow-sm shadow-slate-50 rounded-full">
              Бренд:
            </h2>
            <ul className="grid grid-cols-1 gap-1 pt-3">
              {uniqueBrands.map((brand) => (
                <li
                  key={brand}
                  className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                    selectedBrand === brand
                      ? "bg-blue-100 rounded-sm text-accent"
                      : ""
                  }`}
                  onClick={() => handleBrandClick(brand)}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {otherFiltersOpen === false && (
            <button
              className="px-4 py-2 bg-lightBlueColor text-white rounded text-sm sm:text-[14px]"
              onClick={() => setOtherFiltersOpen((prev) => !prev)}
            >
              Показати ще
            </button>
          )}

          {otherFiltersOpen && (
            <>
              <div>
                <h2 className="font-bold text-[14px] sm:text-[16px] italic border pl-3 border-slate-400/50 shadow-sm shadow-slate-50 rounded-full">
                  Сезон:
                </h2>
                <ul className="grid grid-cols-1 gap-1 pt-3">
                  {uniqueSeasons.map((season) => (
                    <li
                      key={season}
                      className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                        selectedSeason === season
                          ? "bg-blue-100 rounded-sm text-accent"
                          : ""
                      }`}
                      onClick={() => handleSeasonClick(season)}
                    >
                      {season}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-[14px] sm:text-[16px] italic border pl-3 border-slate-400/50 shadow-sm shadow-slate-50 rounded-full">
                  Тип одягу:
                </h2>
                <ul className="grid grid-cols-1 gap-1 pt-3">
                  {uniqueClothType.map((type) => (
                    <li
                      key={type}
                      className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                        selectedType === type
                          ? "bg-blue-100 rounded-sm text-accent"
                          : ""
                      }`}
                      onClick={() => handleTypeClick(type)}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-[14px] sm:text-[16px] italic border pl-3 border-slate-400/50 shadow-sm shadow-slate-50 rounded-full">
                  Ціна:
                </h2>
                <ul className="grid grid-cols-1 gap-1 pt-3">
                  <li
                    className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                      priceRange[1] === 500
                        ? "bg-blue-100 rounded-sm text-accent"
                        : ""
                    }`}
                    onClick={() => handlePriceClick([0, 500])}
                  >
                    Менше 500 грн
                  </li>
                  <li
                    className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                      priceRange[0] === 501 && priceRange[1] === 1000
                        ? "bg-blue-100 rounded-sm text-accent"
                        : ""
                    }`}
                    onClick={() => handlePriceClick([501, 1000])}
                  >
                    501-1000 грн
                  </li>
                  <li
                    className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                      priceRange[0] === 1001 && priceRange[1] === 1500
                        ? "bg-blue-100 rounded-sm text-accent"
                        : ""
                    }`}
                    onClick={() => handlePriceClick([1001, 1500])}
                  >
                    1001-1500 грн
                  </li>
                  <li
                    className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                      priceRange[0] === 1501 && priceRange[1] === 2000
                        ? "bg-blue-100 rounded-sm text-accent"
                        : ""
                    }`}
                    onClick={() => handlePriceClick([1501, 2000])}
                  >
                    1501-2000 грн
                  </li>
                  <li
                    className={`cursor-pointer text-[13px] sm:text-[14px] filter-li hover:text-darkBlueColor ${
                      priceRange[0] === 2001
                        ? "bg-blue-100 rounded-sm text-accent"
                        : ""
                    }`}
                    onClick={() => handlePriceClick([2001, maxPrice])}
                  >
                    Вище 2001 грн
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center">
                <button
                  className="lg:px-2 xl:px-4 py-2 bg-lightBlueColor text-white rounded text-sm sm:text-[14px]"
                  onClick={resetFilters}
                >
                  Сбросить фильтры
                </button>
                <button
                  className="text-[14px] flex items-center gap-1"
                  onClick={() => setOtherFiltersOpen((prev) => !prev)}
                >
                  Свернути <ChevronsUp size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Filter;
