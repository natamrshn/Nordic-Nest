import React, { useEffect, useState } from "react";
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { ProductList } from "~shared/components/productList/productlist";
import { useProducts } from "~shared/hooks/usePoducts";
import { container, description, linkContainer, title } from "./kitchen.content.style";
import FilterComponent from "~shared/components/filter/filter";
import { getAllCategories } from "~shared/services/categorios.service";

interface Category {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
}

export const KitchenContent: React.FC = () => {
  const { products, loading, hasMore, setPage } = useProducts('1');
  const [filters, setFilters] = useState({ sortOrder: "asc", selectedCategory: "", priceRange: [0, 10000] });
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllCategories()
      .then(setCategories)
      .catch(() => {
        setIsError(true);
        setCategories([]);
      })
    setIsLoading(false);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter(product => {
    const isInPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const isInCategory = filters.selectedCategory ? product.category === filters.selectedCategory : true;
    return isInPriceRange && isInCategory;
  });


  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filters.sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <section className={container}>
      <h1 className={title}>KITCHEN ACCESSORIES</h1> 
      <div className={linkContainer}>
        <div className={description}>
          <p>
            A thoughtfully designed and curated selection of modern and timeless 
            kitchen essentials, blending functionality with elegance. Each item is crafted to elevate 
            your culinary experience, bringing together heritage craftsmanship 
            and contemporary aesthetics.
          </p>
        </div>
        <NavLinkComponent />
      </div>
      <FilterComponent onFilterChange={handleFilterChange} categories={categories} />
      <ProductList 
        products={sortedProducts} 
        loading={loading} 
        hasMore={hasMore} 
        setPage={setPage} 
        category="Kitchen Room" 
      />
    </section>
  );
};

export default KitchenContent;
