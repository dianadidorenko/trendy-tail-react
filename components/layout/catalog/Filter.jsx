"use client";

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

  return (
    <div className="flex flex-col gap-y-4 border border-gray-200 p-2 rounded-[10px] w-full min-w-[170px]">
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
        <ul className="grid grid-cols-1  gap-1 pt-3">
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
              priceRange[1] === 500 ? "bg-blue-100 rounded-sm text-accent" : ""
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
              priceRange[0] === 2001 ? "bg-blue-100 rounded-sm text-accent" : ""
            }`}
            onClick={() => handlePriceClick([2001, maxPrice])}
          >
            Вище 2001 грн
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-lightBlueColor text-white rounded text-sm sm:text-[14px]"
          onClick={resetFilters}
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};

export default Filter;
