"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { items } from "@/items";
import PagesCatalogNav from "@/components/layout/main-page/PagesCatalogNav";

const BedsPage = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // Фильтруем товары по выбранной категории
  const filteredItems = useMemo(() => {
    if (!category) return items;
    return items.filter((item) => item.categoryShow === category);
  }, [category]);

  return <PagesCatalogNav items={filteredItems} />;
};

export default BedsPage;
