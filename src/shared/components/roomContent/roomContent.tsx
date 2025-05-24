// import React, { useEffect, useState, useCallback } from "react";
// import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
// import { useProducts } from "~shared/hooks/usePoducts";
// import { ProductList } from "~shared/components/productList/productlist";

// import {
//   LeftPanelModal,
//   closeButton,
//   container,
//   description,
//   filter,
//   filterBlock,
//   filterChange,
//   filterContainer,
//   filterTitle,
//   furnitureContainer,
//   icon,
//   linkContainer,
//   title
// } from "./roomContent.content.style";

// import FilterComponent from "~shared/components/filter/filter";
// import FilterImg from '../../../assets/filter.png';
// import Modal from "../modal shop/modal";
// import { Category } from "~types/categories";

// interface RoomContentProps {
//   categories: Category[];
//   categoryId: string;
//   categoryTitle: string;
//   categoryDescription: string;
// }

// interface Furniture {
//   id: number;
//   title: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface Filters {
//   selectedDesigns: string;
//   selectedCategory: string;
//   sortOrder: string;
//   priceRange: [number, number];
// }

// const RoomContent: React.FC<RoomContentProps> = ({categories, categoryId, categoryTitle, categoryDescription }) => {
//   const [filters, setFilters] = useState<Filters>({
//     selectedCategory: categoryId,
//     selectedDesigns: "",  
//     sortOrder: "asc",
//     priceRange: [0, 20000]
//   });

//   const roomType = categories.filter(item => item.type ==='ROOM');
//   const furniture = categories.filter(item => item.type ==='TYPE');
//   const design = categories.filter(item => item.type ==='DESIGN');

//   const [activeCategoryIds, setActiveCategoryIds] = useState(categoryId);

//   useEffect(() => {
//     setActiveCategoryIds(filters.selectedCategory || categoryId);
//   }, [filters.selectedCategory, categoryId]);

//   const result = useProducts({ categoryIds: activeCategoryIds });
//   const products = result.products as Product[];

  
//   const { loading, hasMore, setPage } = result;

//   const [showFilters, setShowFilters] = useState(false);

//   const handleFilterChange = useCallback((newFilters: Filters) => {
//     setFilters({
//       selectedCategory: newFilters.selectedCategory,
//       selectedDesigns: newFilters.selectedDesigns,
//       priceRange: newFilters.priceRange,
//       sortOrder: newFilters.sortOrder
//     });
//   }, []);

//   const selectedDesignIds = filters.selectedDesigns.split(",").filter(Boolean);

//   const sortedProducts = [...products]
//     .filter(product =>
//       product.price >= filters.priceRange[0] &&
//       product.price <= filters.priceRange[1]
//     )

//     .sort((a, b) => {
//       if (filters.sortOrder === "asc") return a.price - b.price;
//       if (filters.sortOrder === "desc") return b.price - a.price;
//       if (filters.sortOrder === "alphabet") return a.name.localeCompare(b.name);
//       return 0;
//     });

//   const isPriceChanged = filters.priceRange[0] !== 0 || filters.priceRange[1] !== 20000;
//   const isSortOrderChanged = filters.sortOrder !== "asc";
//   const isCategoryChanged = filters.selectedCategory !== "";

//   const handleResetPrice = () => {
//     setFilters(prev => ({ ...prev, priceRange: [0, 20000] }));
//   };

//   const handleResetSortOrder = () => {
//     setFilters(prev => ({ ...prev, sortOrder: "asc" }));
//   };

//   const handleRemoveCategory = (indexToRemove: number) => {
//     const categories = filters.selectedCategory
//       .split(",")
//       .map(id => id.trim())
//       .filter(Boolean);
  
//     categories.splice(indexToRemove, 1); // видаляємо конкретну категорію
  
//     const newSelectedCategory = categories.join(","); // формуємо новий рядок


//     setFilters(prev => ({
//       ...prev,
//       selectedCategory: categories.length > 0 ? newSelectedCategory : categoryId
//     }));

//   };
  

//   const getSelectedCategoryTitles = (
//     selectedCategories: string,
//     furniture: Furniture[]
//   ): string[] => {
//     if (!selectedCategories) return [];

//     return selectedCategories
//       .split(",")
//       .map(id => id.trim())
//       .map(id => furniture.find(item => String(item.id) === id))
//       .filter(Boolean)
//       .map(item => item!.title);
//   };

//   const getSelectedDesignTitles = (
//     selectedDesigns: string,
//     designList: Furniture[]
//   ): string[] => {
//     if (!selectedDesigns) return [];
  
//     return selectedDesigns
//       .split(",")
//       .map(id => id.trim())
//       .map(id => designList.find(item => String(item.id) === id))
//       .filter(Boolean)
//       .map(item => item!.title);
//   };
  

//   const handleRemoveDesign = (indexToRemove: number) => {
//     const designs = filters.selectedDesigns
//       .split(",")
//       .map(id => id.trim())
//       .filter(Boolean);
  
//     designs.splice(indexToRemove, 1);
  
//     const newSelectedDesigns = designs.join(",");
  
//     setFilters(prev => ({
//       ...prev,
//       selectedDesigns: newSelectedDesigns
//     }));
//   };
  

//   return (
//     <section className={container}>
//       <h1 className={title}>{categoryTitle.toUpperCase()}</h1>
//       <div className={linkContainer}>
//         <div className={description}>
//           <p>{categoryDescription}</p>
//         </div>
//         <NavLinkComponent room={roomType}/>
//       </div>

//       <button className={filter} onClick={() => setShowFilters(!showFilters)}>
//         <div className={filterContainer}>
//           <img className={icon} src={FilterImg} alt="filter" />
//           <div className={filterTitle}>Filter</div>
//         </div>
//       </button>

//       <Modal isOpen={showFilters} positionClass={LeftPanelModal} onClose={() => setShowFilters(false)}>
//         <FilterComponent
//           categoryId={categoryId}
//           furniture={furniture}
//           design={design}
//           onFilterChange={handleFilterChange}
//           onClose={() => setShowFilters(false)}
//         />
//       </Modal>

//       {(isPriceChanged || isSortOrderChanged || isCategoryChanged) && (
//         <div className={filterContainer}>
//           {isPriceChanged && (
//             <div className={filterBlock}>
//               <strong>Price:</strong> {filters.priceRange[0]}$ — {filters.priceRange[1]}$
//               <button onClick={handleResetPrice} className={closeButton}>x</button>
//             </div>
//           )}

//           {isSortOrderChanged && (
//             <div className={filterBlock}>
//               <p className={filterChange}>
//                 {filters.sortOrder === "desc" && "High to Low"}
//                 {filters.sortOrder === "asc" && "Low to High"}
//                 {filters.sortOrder === "new" && "Новинки"}
//                 {filters.sortOrder === "bestsellers" && "Хіти продажу"}
//               </p>
//               <button onClick={handleResetSortOrder} className={closeButton}>x</button>
//             </div>
//           )}

//           {isCategoryChanged && (
//             <div className={furnitureContainer}>
//               {getSelectedCategoryTitles(filters.selectedCategory, furniture).map((title, index) => (
//                 <div className={filterChange} key={index}>
//                   {title}
//                   <button onClick={() => handleRemoveCategory(index)} className={closeButton}>
//                     x
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {filters.selectedDesigns && (
//             <div className={furnitureContainer}>
//               {getSelectedDesignTitles(filters.selectedDesigns, design).map((title, index) => (
//                 <div className={filterChange} key={index}>
//                   {title}
//                   <button onClick={() => handleRemoveDesign(index)} className={closeButton}>
//                     x
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       <ProductList
//         products={sortedProducts}
//         loading={loading}
//         hasMore={hasMore}
//         setPage={setPage}
//         category={categoryTitle}
//       />
//     </section>
//   );
// };

// export default RoomContent;


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
import Modal from "../modal shop/modal";
import { Category } from "~types/categories";

interface RoomContentProps {
  categories: Category[];
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
  selectedIds: string;
  sortOrder: string;
  priceRange: [number, number];
}

const RoomContent: React.FC<RoomContentProps> = ({ categories, categoryId, categoryTitle, categoryDescription }) => {
  const [filters, setFilters] = useState<Filters>({
    selectedIds: categoryId,
    sortOrder: "asc",
    priceRange: [0, 20000]
  });

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      selectedIds: categoryId
    }));
    console.log("console.log(furniture)", furniture);
  }, [categoryId]);
  
  const roomType = categories.filter(item => item.type === 'ROOM');
  const furniture = categories.filter(item => item.type === 'TYPE');
  const design = categories.filter(item => item.type === 'DESIGN');

  const [activeCategoryIds, setActiveCategoryIds] = useState(categoryId);

  useEffect(() => {
    setActiveCategoryIds(filters.selectedIds || categoryId);
  }, [filters.selectedIds, categoryId]);

  const result = useProducts({ categoryIds: activeCategoryIds });
  const products = result.products as Product[];

  const { loading, hasMore, setPage } = result;
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = useCallback((newFilters: {
    selectedCategory: string;
    selectedDesigns: string;
    sortOrder: string;
    priceRange: [number, number];
  }) => {
    const ids = [
      ...newFilters.selectedCategory.split(",").map(i => i.trim()),
      ...newFilters.selectedDesigns.split(",").map(i => i.trim())
    ].filter(Boolean).join(",");

    setFilters({
      selectedIds: ids,
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
  const isFilterChanged = filters.selectedIds.split(",").length > 1;

  const handleResetPrice = () => {
    setFilters(prev => ({ ...prev, priceRange: [0, 20000] }));
  };

  const handleResetSortOrder = () => {
    setFilters(prev => ({ ...prev, sortOrder: "asc" }));
  };

  // const handleRemoveFilter = (indexToRemove: number) => {
  //   const ids = filters.selectedIds
  //     .split(",")
  //     .map(id => id.trim())
  //     .filter(Boolean);

  //   ids.splice(indexToRemove, 1);

  //   setFilters(prev => ({
  //     ...prev,
  //     selectedIds: ids.join(",") || categoryId
  //   }));
  // };

  const allIds = filters.selectedIds.split(",").filter(Boolean);

// окремі ID по типу
const furnitureIds = allIds.filter(id => furniture.some(item => String(item.id) === id));
const designIds = allIds.filter(id => design.some(item => String(item.id) === id));


  const handleRemoveCategory = (indexToRemove: number, list: Furniture[]) => {
    const ids = filters.selectedIds
      .split(",")
      .map(id => id.trim())
      .filter(Boolean);
  
    // Доступні ID з відповідного списку (furniture або design)
    const filteredIds = ids.filter(id => list.some(item => String(item.id) === id));
  
    // Видаляємо конкретний елемент
    filteredIds.splice(indexToRemove, 1);
  
    // Об’єднуємо: все, що не належить до цього списку + оновлений список
    const remainingIds = ids.filter(id => !list.some(item => String(item.id) === id));
    const newSelectedIds = [...remainingIds, ...filteredIds].join(",");
  
    setFilters(prev => ({
      ...prev,
      selectedIds: newSelectedIds || categoryId
    }));
  };
  
  
  
  const getSelectedTitles = (selectedIds: string, list: Furniture[]) => {
    console.log(furniture);
    
    return selectedIds
      .split(",")
      .map(id => id.trim())
      .map(id => list.find(item => String(item.id) === id))
      .filter(Boolean)
      .map(item => item!.title);
  };

  const getActiveIds = filters.selectedIds.split(",").filter(Boolean);

  const activeCategoryTitles = getSelectedTitles(filters.selectedIds, furniture);
  const activeDesignTitles = getSelectedTitles(filters.selectedIds, design);

  const handleRemoveById = (idToRemove: string) => {
    const ids = filters.selectedIds
      .split(",")
      .map(id => id.trim())
      .filter(id => id !== idToRemove);
  
    setFilters(prev => ({
      ...prev,
      selectedIds: ids.length ? ids.join(",") : categoryId
    }));
  };
  
 

  return (
    <section className={container}>
      <h1 className={title}>{categoryTitle.toUpperCase()}</h1>
      <div className={linkContainer}>
        <div className={description}>
          <p>{categoryDescription}</p>
        </div>
        <NavLinkComponent room={roomType} />
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
          design={design}
          onFilterChange={handleFilterChange}
          onClose={() => setShowFilters(false)}
        />
      </Modal>

      {(isPriceChanged || isSortOrderChanged || isFilterChanged) && (
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

          {furnitureIds.map((id, index) => {
            const title = furniture.find(item => String(item.id) === id)?.title;
            return title ? (
              <div className={filterChange} key={`f-${id}`}>
                {title}
                <button
                  onClick={() => handleRemoveById(id)}
                  className={closeButton}
                >
                  x
                </button>
              </div>
            ) : null;
          })}

          {designIds.map((id, index) => {
            const title = design.find(item => String(item.id) === id)?.title;
            return title ? (
              <div className={filterChange} key={`d-${id}`}>
                {title}
                <button
                  onClick={() => handleRemoveById(id)}
                  className={closeButton}
                >
                  x
                </button>
              </div>
            ) : null;
          })}



  
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