import React, { useEffect, useState } from "react";
// import { container, description, title, linkContainer } from "./roomContent.style";
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { useProducts } from "~shared/hooks/usePoducts";
import { ProductList } from "~shared/components/productList/productlist";

import { LeftPanelModal, closeButton, container, description, filter, filterBlock, filterChange, filterContainer, filterTitle, furnitureContainer, icon, linkContainer, title } from "./roomContent.content.style";
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
    // type: string;
    // imageUrl: string;
  }

const RoomContent: React.FC<RoomContentProps> = ({ categoryId, categoryTitle, categoryDescription }) => {
    const [furniture, setFurniture] = useState<Furniture[]>([]);
    const [filterParams, setFilterParams] = useState({ categoryIds: categoryId, maxPrice: 20000 });
    const [filters, setFilters] = useState({ selectedCategory: "",  sortOrder: 'asc',  priceRange: [0, 20000] });
    const { products, loading, hasMore, setPage } = useProducts({ categoryIds: filters.selectedCategory || categoryId });
  
  
    
   
    const [showFilters, setShowFilters] = useState(false);
    
  
    useEffect(() => {
      getCategoriesByType('TYPE')
        .then((data) => {
          setFurniture(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);;
  
    const handleFilterChange = (newFilters) => {
      const categoryIds = newFilters.selectedCategory || '1';
    
      setFilterParams({ categoryIds, maxPrice: newFilters.priceRange[1] });
    
      setFilters({
        selectedCategory: newFilters.selectedCategory,
        priceRange: newFilters.priceRange,
        sortOrder: newFilters.sortOrder, 
      });
    };
    
    
    const sortedProducts = [...products]
    .filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    )
    .sort((a, b) => {
      if (filters.sortOrder === "asc") {
        return a.price - b.price;
      } else if (filters.sortOrder === "desc") {
        return b.price - a.price;
      } else if (filters.sortOrder === "alphabet") {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });
  
    const isPriceChanged = filters.priceRange[0] !== 0 || filters.priceRange[1] !== 20000;
    const isSortOrderChanged = filters.sortOrder !== "asc";
    const isCategoryChanged = filters.selectedCategory !== ""; 
    const handleResetPrice = () => {
      setFilters(prev => ({ ...prev, priceRange: [0, 20000] }));
    };
    
    const handleResetSortOrder = () => {
      setFilters(prev => ({ ...prev, sortOrder: 'asc' }));
    };
  
   
    const handleRemoveCategory = (indexToRemove) => {
      const updatedCategories = Array.isArray(filters.selectedCategory)
        ? [...filters.selectedCategory]
        : filters.selectedCategory.split(',');
    
      updatedCategories.splice(indexToRemove, 1);
      console.log(updatedCategories," apd");
      const categoryIds = updatedCategories.join(',') === '' ? '1' : updatedCategories.join(',');
  
  
      
      setFilterParams({ categoryIds: categoryIds, maxPrice: 20000});
  
      console.log(filterParams);
      
      setFilters(prev => ({
        ...prev,
        selectedCategory: categoryIds
      }));
    };
  
    const getSelectedCategoryTitles = (selectedCategories, furniture) => {
      if (!selectedCategories) {
        console.log('⚠️ selectedCategories is empty:', selectedCategories);
        return [];
      }
    
      let categoriesArray = [];
    
      if (Array.isArray(selectedCategories)) {
        categoriesArray = selectedCategories;
      } else if (typeof selectedCategories === 'string') {
        categoriesArray = selectedCategories.split(',').map(item => item.trim());
      } else {
        categoriesArray = [selectedCategories];
      }
    
      const titles = categoriesArray.map(categoryId => {
        const category = furniture.find(item => String(item.id) === String(categoryId));
        return category ? category.title : '';
      }).filter(title => title);
    
      return titles;
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
                
                <button onClick={handleResetPrice} className={closeButton}>
                  x
                </button>
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
                <button onClick={handleResetSortOrder} className={closeButton}>
                  x
                </button>
              </div>
            )}
  
          {isCategoryChanged && (
            <div className={furnitureContainer}>
              {getSelectedCategoryTitles(filters.selectedCategory, furniture).map((title, index, arr) => (
                <div className={filterChange} key={index}>
                  {title}
                  <button 
                    onClick={() => handleRemoveCategory(index)} 
                    className={closeButton}
                  >
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
