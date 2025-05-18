import React, { useEffect, useState, useCallback } from "react";
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { useProducts } from "~shared/hooks/usePoducts";
import { ProductList } from "~shared/components/productList/productlist";

import {
  LeftPanelModal,
  closeButton,
  container,
  description,
  filter,
  filterBlock,
  filterChange,
  filterContainer,
  filterTitle,
  furnitureContainer,
  icon,
  linkContainer,
  title
} from "./roomContent.content.style";

import FilterComponent from "~shared/components/filter/filter";
import FilterImg from '../../../assets/filter.png';
import { getCategoriesByType } from "~shared/services/categorios.service";
import Modal from "../modal shop/modal";

interface RoomContentProps {
  categoryId: string;
  categoryTitle: string;
  categoryDescription: string;
}

interface Furniture {
  id: number;
  title: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Filters {
  selectedCategory: string;
  sortOrder: string;
  priceRange: [number, number];
}

const RoomContent: React.FC<RoomContentProps> = ({ categoryId, categoryTitle, categoryDescription }) => {
  const [furniture, setFurniture] = useState<Furniture[]>([]);
  const [filters, setFilters] = useState<Filters>({
    selectedCategory: categoryId,
    sortOrder: "asc",
    priceRange: [0, 20000]
  });

  const [activeCategoryIds, setActiveCategoryIds] = useState(categoryId);

  useEffect(() => {
    setActiveCategoryIds(filters.selectedCategory || categoryId);
  }, [filters.selectedCategory, categoryId]);

  const result = useProducts({ categoryIds: activeCategoryIds });
  const products = result.products as Product[];

  
  const { loading, hasMore, setPage } = result;

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getCategoriesByType("TYPE")
      .then(setFurniture)
      .catch(console.error);
  }, []);

  const handleFilterChange = useCallback((newFilters: Filters) => {
    setFilters({
      selectedCategory: newFilters.selectedCategory,
      priceRange: newFilters.priceRange,
      sortOrder: newFilters.sortOrder
    });
  }, []);

  const sortedProducts = [...products]
    .filter(product =>
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    )
    .sort((a, b) => {
      if (filters.sortOrder === "asc") return a.price - b.price;
      if (filters.sortOrder === "desc") return b.price - a.price;
      if (filters.sortOrder === "alphabet") return a.name.localeCompare(b.name);
      return 0;
    });

  const isPriceChanged = filters.priceRange[0] !== 0 || filters.priceRange[1] !== 20000;
  const isSortOrderChanged = filters.sortOrder !== "asc";
  const isCategoryChanged = filters.selectedCategory !== "";

  const handleResetPrice = () => {
    setFilters(prev => ({ ...prev, priceRange: [0, 20000] }));
  };

  const handleResetSortOrder = () => {
    setFilters(prev => ({ ...prev, sortOrder: "asc" }));
  };

  const handleRemoveCategory = (indexToRemove: number) => {
    const categories = filters.selectedCategory
      .split(",")
      .map(id => id.trim())
      .filter(Boolean);
  
    categories.splice(indexToRemove, 1); // видаляємо конкретну категорію
  
    const newSelectedCategory = categories.join(","); // формуємо новий рядок


    setFilters(prev => ({
      ...prev,
      selectedCategory: categories.length > 0 ? newSelectedCategory : categoryId
    }));

  };
  

  const getSelectedCategoryTitles = (
    selectedCategories: string,
    furniture: Furniture[]
  ): string[] => {
    if (!selectedCategories) return [];

    return selectedCategories
      .split(",")
      .map(id => id.trim())
      .map(id => furniture.find(item => String(item.id) === id))
      .filter(Boolean)
      .map(item => item!.title);
  };

  return (
    <section className={container}>
      <h1 className={title}>{categoryTitle.toUpperCase()}</h1>
      <div className={linkContainer}>
        <div className={description}>
          <p>{categoryDescription}</p>
        </div>
        <NavLinkComponent />
      </div>

      <button className={filter} onClick={() => setShowFilters(!showFilters)}>
        <div className={filterContainer}>
          <img className={icon} src={FilterImg} alt="filter" />
          <div className={filterTitle}>Filter</div>
        </div>
      </button>

      <Modal isOpen={showFilters} positionClass={LeftPanelModal} onClose={() => setShowFilters(false)}>
        <FilterComponent
          categoryId={categoryId}
          furniture={furniture}
          onFilterChange={handleFilterChange}
          onClose={() => setShowFilters(false)}
        />
      </Modal>

      {(isPriceChanged || isSortOrderChanged || isCategoryChanged) && (
        <div className={filterContainer}>
          {isPriceChanged && (
            <div className={filterBlock}>
              <strong>Price:</strong> {filters.priceRange[0]}$ — {filters.priceRange[1]}$
              <button onClick={handleResetPrice} className={closeButton}>x</button>
            </div>
          )}

          {isSortOrderChanged && (
            <div className={filterBlock}>
              <p className={filterChange}>
                {filters.sortOrder === "desc" && "High to Low"}
                {filters.sortOrder === "asc" && "Low to High"}
                {filters.sortOrder === "new" && "Новинки"}
                {filters.sortOrder === "bestsellers" && "Хіти продажу"}
              </p>
              <button onClick={handleResetSortOrder} className={closeButton}>x</button>
            </div>
          )}

          {isCategoryChanged && (
            <div className={furnitureContainer}>
              {getSelectedCategoryTitles(filters.selectedCategory, furniture).map((title, index) => (
                <div className={filterChange} key={index}>
                  {title}
                  <button onClick={() => handleRemoveCategory(index)} className={closeButton}>
                    x
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <ProductList
        products={sortedProducts}
        loading={loading}
        hasMore={hasMore}
        setPage={setPage}
        category={categoryTitle}
      />
    </section>
  );
};

export default RoomContent;
