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
  const uniqueSeasons = [...new Set(items.map((item) => item.info[2]?.season))];
  const uniqueClothType = [...new Set(items.map((item) => item.type))];
  const uniqueBrands = [...new Set(items.map((item) => item.info[0]?.brand))];

  const minPrice = Math.min(...items.map((item) => item.startingPrice));
  const maxPrice = Math.max(...items.map((item) => item.startingPrice));

  const handlePriceClick = (range) => {
    onPriceRangeChange(range);
  };

  return (
    <div className="flex flex-col gap-y-4 w-[230px] border border-gray-200 p-2 rounded-[10px]">
      <div>
        <h2 className="font-bold text-[16px] italic border pl-3 border-slate-400 shadow-sm shadow-slate-50 rounded-full">
          Категорія:
        </h2>
        <ul className="flex flex-col gap-1 ml-4 pt-3">
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-[14px] ${
                selectedCategory === category ? "bg-blue-100" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-[16px] italic border pl-3 border-slate-400 shadow-sm shadow-slate-50 rounded-full">
          Бренд:
        </h2>
        <ul className="flex flex-col gap-1 ml-4 pt-3">
          {uniqueBrands.map((brand) => (
            <li
              key={brand}
              className={`cursor-pointer text-[14px] ${
                selectedBrand === brand ? "bg-blue-100" : ""
              }`}
              onClick={() => handleBrandClick(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-[16px] italic border pl-3 border-slate-400 shadow-sm shadow-slate-50 rounded-full">
          Сезон:
        </h2>
        <ul className="flex flex-col gap-1 ml-4 pt-3">
          {uniqueSeasons.map((season) => (
            <li
              key={season}
              className={`cursor-pointer text-[14px] ${
                selectedSeason === season ? "bg-blue-100" : ""
              }`}
              onClick={() => handleSeasonClick(season)}
            >
              {season}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-[16px] italic border pl-3 border-slate-400 shadow-sm shadow-slate-50 rounded-full">
          Тип одягу:
        </h2>
        <ul className="flex flex-col gap-1 ml-4 pt-3">
          {uniqueClothType.map((type) => (
            <li
              key={type}
              className={`cursor-pointer text-[14px] ${
                selectedType === type ? "bg-blue-100" : ""
              }`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-[16px] italic border pl-3 border-slate-400 shadow-sm shadow-slate-50 rounded-full">
          Ціна:
        </h2>
        <ul className="flex flex-col gap-1 ml-4 pt-3">
          <li
            className={`cursor-pointer text-[14px] ${
              priceRange[1] === 500 ? "bg-blue-100" : ""
            }`}
            onClick={() => handlePriceClick([0, 500])}
          >
            Менше 500 грн
          </li>
          <li
            className={`cursor-pointer text-[14px] ${
              priceRange[0] === 501 && priceRange[1] === 1000
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => handlePriceClick([501, 1000])}
          >
            501-1000 грн
          </li>
          <li
            className={`cursor-pointer text-[14px] ${
              priceRange[0] === 1001 && priceRange[1] === 1500
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => handlePriceClick([1001, 1500])}
          >
            1001-1500 грн
          </li>
          <li
            className={`cursor-pointer text-[14px] ${
              priceRange[0] === 1501 && priceRange[1] === 2000
                ? "bg-blue-100"
                : ""
            }`}
            onClick={() => handlePriceClick([1501, 2000])}
          >
            1501-2000 грн
          </li>
          <li
            className={`cursor-pointer text-[14px] ${
              priceRange[0] === 2001 ? "bg-blue-100" : ""
            }`}
            onClick={() => handlePriceClick([2001, maxPrice])}
          >
            Вище 2001 грн
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="px-4 py-2 bg-lightBlueColor text-white rounded"
          onClick={resetFilters}
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};

export default Filter;
