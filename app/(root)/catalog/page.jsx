"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { items } from "@/items";
import PagesNav from "@/components/common/PagesNav";
import SectionHeaders from "@/components/common/SectionHeaders";
import CatalogCard from "@/components/layout/catalog/CatalogCard";
import CatalogSlider from "@/components/layout/catalog/CatalogSlider";
import Filter from "@/components/layout/catalog/Filter";

const ITEMS_PER_PAGE = 9;

const CatalogPage = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 2500]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesBrand = selectedBrand
        ? item.info[0]?.brand === selectedBrand
        : items;
      const matchesCategory = selectedCategory
        ? item.categoryShow === selectedCategory
        : items;
      const matchesSeason = selectedSeason
        ? item.info[2].season === selectedSeason
        : items;
      const matchesType = selectedType ? item.type === selectedType : items;
      const matchesPrice =
        item.startingPrice >= priceRange[0] &&
        item.startingPrice <= priceRange[1];
      return (
        matchesBrand &&
        matchesCategory &&
        matchesSeason &&
        matchesType &&
        matchesPrice
      );
    });
  }, [
    items,
    selectedBrand,
    selectedCategory,
    selectedSeason,
    selectedType,
    priceRange,
  ]);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // созависимая фильтрация
  // const handleFilterChange = (setter) => (value) => {
  //   setter(value);
  //   setCurrentPage(1);
  // };

  // const handlePriceRangeChange = (range) => {
  //   setPriceRange(range);
  //   setCurrentPage(1);
  // };
  // созависимая фильтрация

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
    setSelectedCategory(null);
    setSelectedSeason(null);
    setSelectedType(null);
    setPriceRange([0, 2500]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSelectedBrand(null);
    setSelectedSeason(null);
    setSelectedType(null);
    setPriceRange([0, 2500]);
  };

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setCurrentPage(1);
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSelectedType(null);
    setPriceRange([0, 2500]);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSelectedSeason(null);
    setPriceRange([0, 2500]);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
    setCurrentPage(1);
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSelectedSeason(null);
    setSelectedType(null);
  };

  const resetFilters = () => {
    setSelectedBrand(null);
    setCurrentPage(1);
    setSelectedCategory(null);
    setSelectedSeason(null);
    setSelectedType(null);
    setPriceRange([0, 2500]);
  };

  return (
    <section>
      <div className="container mx-auto">
        <PagesNav items={items} />

        <CatalogSlider />

        <SectionHeaders mainHeader={"Каталог"} />

        <motion.div
          className="flex flex-col justify-center gap-10 xs:px-0 xs2:pb-8 px-8 mx-auto relative"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {!items || items.length === 0 ? (
            <p>Не знайдено товар</p>
          ) : (
            <div className="flex items-center lg:items-start marker:justify-center lg:justify-between gap-4 sm:gap-10 py-8 flex-col lg:flex-row">
              <aside className="flex flex-col gap-4">
                <Filter
                  items={items}
                  selectedBrand={selectedBrand}
                  selectedCategory={selectedCategory}
                  selectedSeason={selectedSeason}
                  selectedType={selectedType}
                  priceRange={priceRange}
                  handleBrandClick={handleBrandClick}
                  handleCategoryClick={handleCategoryClick}
                  handleSeasonClick={handleSeasonClick}
                  handleTypeClick={handleTypeClick}
                  onPriceRangeChange={handlePriceRangeChange}
                  resetFilters={resetFilters}
                  // созависимая фильтрация
                  // items={items}
                  // selectedBrand={selectedBrand}
                  // selectedCategory={selectedCategory}
                  // selectedSeason={selectedSeason}
                  // selectedType={selectedType}
                  // priceRange={priceRange}
                  // handleBrandClick={handleFilterChange(setSelectedBrand)}
                  // handleCategoryClick={handleFilterChange(setSelectedCategory)}
                  // handleSeasonClick={handleFilterChange(setSelectedSeason)}
                  // handleTypeClick={handleFilterChange(setSelectedType)}
                  // onPriceRangeChange={handlePriceRangeChange}
                  // resetFilters={resetFilters}
                  // созависимая фильтрация
                />
              </aside>

              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {paginatedItems.length > 0 ? (
                    paginatedItems.map((item, index) => (
                      <CatalogCard key={index} item={item} />
                    ))
                  ) : (
                    <p>Не знайдено товар.</p>
                  )}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogPage;
