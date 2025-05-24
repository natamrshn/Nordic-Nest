// import React, { useState } from "react";
// import "rc-slider/assets/index.css";
// import Range from "rc-slider";
// import { 
//   button, 
//   buttonWrite, 
//   closeButton, 
//   filter, 
//   furnitureName, 
//   price, 
//   priceName, 
//   rangeStyles, 
//   sort, 
//   sortName, 
//   title, 
//   titlecontainer 
// } from "./filter.style";


// interface FurnitureItem {
//   id: number;
//   title: string;
// }
// interface DesingItem {
//   id: number;
//   title: string;
// }
// interface FilterProps {
//   categoryId:string,
//   furniture: FurnitureItem[],
//   design: DesingItem[],
//   onFilterChange: (filters: {
//     sortOrder: string;
//     selectedCategory: string;
//     selectedDesigns: string;
//     priceRange: [number, number];
//   }) => void;
//   onClose?: () => void;
// }

// const FilterComponent: React.FC<FilterProps> = ({categoryId, design, furniture, onFilterChange, onClose }) => {
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [selectedCategoryIndexes, setSelectedCategoryIndexes] = useState<number[]>([]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
//   const [selectedDesignIndexes, setSelectedDesignIndexes] = useState<number[]>([]);

//   const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSortOrder(e.target.value);
//   };

//   const toggleSelection = (id: number, setState: React.Dispatch<React.SetStateAction<number[]>>) => {
//     setState((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
//   };

  
//   const handleApplyFilters = () => {
//     const categoryIds = selectedCategoryIndexes.join(",");
//     const designIds = selectedDesignIndexes.join(",");

//     onFilterChange({
//       sortOrder,
//       selectedCategory: categoryIds,
//       selectedDesigns: designIds,
//       priceRange,
//     });
//     if (onClose) onClose();
//   };

//   const handleResetFilters = () => {
//     setSortOrder("asc");
//     setSelectedCategoryIndexes([]);
//     setPriceRange([0, 20000]);
//     const newSelectedCategory = furniture.join(",");
//     const newSelectedDesigns = design.join(",");
//     onFilterChange({
//       sortOrder: "asc",
//       selectedCategory: furniture.length > 0 ? newSelectedCategory : categoryId,
//       selectedDesigns: design.length > 0 ? newSelectedDesigns: "",
//       priceRange: [0, 20000],
//     });
//     if (onClose) onClose();
//   };

//   return (
//     <div className={filter}>
//       <div className={titlecontainer}>
//         <h3 className={title}>Filter</h3>
//         {onClose && (
//           <button onClick={onClose} className={closeButton}>
//             x
//           </button>
//         )}
//       </div>

//       <div className={sort}>
//         <div>
//           <label className={priceName}>Price</label>
//           <p className={price}>Price: {priceRange[0]}$ — {priceRange[1]}$</p>
//           <Range
//             className={rangeStyles}
//             range
//             min={0}
//             max={20000}
//             step={100}
//             value={priceRange}
//             onChange={(value) => {
//               if (Array.isArray(value)) {
//                 setPriceRange(value as [number, number]);
//               }
//             }}
//           />
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Sort by:</label>
//         <div>
//           <label className={sortName}>
//             <input type="radio" name="sort" value="asc" checked={sortOrder === "asc"} onChange={handleSortChange} />
//             Low to High
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="desc" checked={sortOrder === "desc"} onChange={handleSortChange} />
//             High to Low
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="bestsellers" checked={sortOrder === "bestsellers"} onChange={handleSortChange} />
//             Bestsellers
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="new" checked={sortOrder === "new"} onChange={handleSortChange} />
//             New in
//           </label>
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Furniture Type</label>
//         <div className={furnitureName}>
//           {furniture.map(({ id, title }) => (
//             <label className={sortName} key={id} style={{ display: "block" }}>
//               <input
//                 type="checkbox"
//                 checked={selectedCategoryIndexes.includes(id)}
//                 onChange={() => toggleSelection(id, setSelectedCategoryIndexes)}
//               />
//               {title}              
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Design Type</label>
//         <div className={furnitureName}>
//         {design.map(({ id, title }) => (
//           <label className={sortName} key={id} style={{ display: "block" }}>
//             <input
//               type="checkbox"
//               checked={selectedDesignIndexes.includes(id)}
//               onChange={() => toggleSelection(id, setSelectedDesignIndexes)}
//             />
//             {title}              
//           </label>
//         ))}
//         </div>
//       </div>

//       <div>
//         <button onClick={handleApplyFilters} className={button}>Submit</button>
//         <button onClick={handleResetFilters} className={buttonWrite}>Clear all</button>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;

// import React, { useState } from "react";
// import "rc-slider/assets/index.css";
// import Range from "rc-slider";
// import {
//   button,
//   buttonWrite,
//   closeButton,
//   filter,
//   furnitureName,
//   price,
//   priceName,
//   rangeStyles,
//   sort,
//   sortName,
//   title,
//   titlecontainer
// } from "./filter.style";

// interface FurnitureItem {
//   id: number;
//   title: string;
// }
// interface DesingItem {
//   id: number;
//   title: string;
// }
// interface FilterProps {
//   categoryId: string;
//   furniture: FurnitureItem[];
//   design: DesingItem[];
//   onFilterChange: (filters: {
//     sortOrder: string;
//     selectedCategory: string;
//     selectedDesigns: string;
//     priceRange: [number, number];
//   }) => void;
//   onClose?: () => void;
// }

// const FilterComponent: React.FC<FilterProps> = ({ categoryId, design, furniture, onFilterChange, onClose }) => {
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [selectedCategoryIndexes, setSelectedCategoryIndexes] = useState<number[]>([]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
//   const [selectedDesignIndexes, setSelectedDesignIndexes] = useState<number[]>([]);

//   const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSortOrder(e.target.value);
//   };

//   const toggleSelection = (id: number, setState: React.Dispatch<React.SetStateAction<number[]>>) => {
//     setState((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
//   };

//   const handleRemoveCategory = (indexToRemove: number) => {
//     const updated = [...selectedCategoryIndexes];
//     updated.splice(indexToRemove, 1);
//     setSelectedCategoryIndexes(updated);

//     onFilterChange({
//       sortOrder,
//       selectedCategory: updated.join(","),
//       selectedDesigns: selectedDesignIndexes.join(","),
//       priceRange
//     });
//   };

//   const handleRemoveDesign = (indexToRemove: number) => {
//     const updated = [...selectedDesignIndexes];
//     updated.splice(indexToRemove, 1);
//     setSelectedDesignIndexes(updated);

//     onFilterChange({
//       sortOrder,
//       selectedCategory: selectedCategoryIndexes.join(","),
//       selectedDesigns: updated.join(","),
//       priceRange
//     });
//   };

//   const handleApplyFilters = () => {
//     const selectedCategory = selectedCategoryIndexes.map(i => i.toString()).join(",");
//     const selectedDesigns = selectedDesignIndexes.map(i => i.toString()).join(",");

//     onFilterChange({
//       sortOrder,
//       selectedCategory,
//       selectedDesigns,
//       priceRange,
//     });

//     if (onClose) onClose();
//   };

//   const handleResetFilters = () => {
//     setSortOrder("asc");
//     setSelectedCategoryIndexes([]);
//     setSelectedDesignIndexes([]);
//     setPriceRange([0, 20000]);

//     onFilterChange({
//       sortOrder: "asc",
//       selectedCategory: "",
//       selectedDesigns: "",
//       priceRange: [0, 20000],
//     });

//     if (onClose) onClose();
//   };

//   return (
//     <div className={filter}>
//       <div className={titlecontainer}>
//         <h3 className={title}>Filter</h3>
//         {onClose && (
//           <button onClick={onClose} className={closeButton}>x</button>
//         )}
//       </div>

//       <div className={sort}>
//         <div>
//           <label className={priceName}>Price</label>
//           <p className={price}>Price: {priceRange[0]}$ — {priceRange[1]}$</p>
//           <Range
//             className={rangeStyles}
//             range
//             min={0}
//             max={20000}
//             step={100}
//             value={priceRange}
//             onChange={(value) => {
//               if (Array.isArray(value)) {
//                 setPriceRange(value as [number, number]);
//               }
//             }}
//           />
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Sort by:</label>
//         <div>
//           <label className={sortName}>
//             <input type="radio" name="sort" value="asc" checked={sortOrder === "asc"} onChange={handleSortChange} />
//             Low to High
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="desc" checked={sortOrder === "desc"} onChange={handleSortChange} />
//             High to Low
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="bestsellers" checked={sortOrder === "bestsellers"} onChange={handleSortChange} />
//             Bestsellers
//           </label>
//           <br />
//           <label className={sortName}>
//             <input type="radio" name="sort" value="new" checked={sortOrder === "new"} onChange={handleSortChange} />
//             New in
//           </label>
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Furniture Type</label>
//         <div className={furnitureName}>
//           {furniture.map(({ id, title }) => (
//             <label className={sortName} key={id} style={{ display: "block" }}>
//               <input
//                 type="checkbox"
//                 checked={selectedCategoryIndexes.includes(id)}
//                 onChange={() => toggleSelection(id, setSelectedCategoryIndexes)}
//               />
//               {title}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className={sort}>
//         <label>Design Type</label>
//         <div className={furnitureName}>
//           {design.map(({ id, title }, index) => (
//             <label className={sortName} key={id} style={{ display: "block" }}>
//               <input
//                 type="checkbox"
//                 checked={selectedDesignIndexes.includes(id)}
//                 onChange={() => toggleSelection(id, setSelectedDesignIndexes)}
//               />
//               {title}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div>
//         <button onClick={handleApplyFilters} className={button}>Submit</button>
//         <button onClick={handleResetFilters} className={buttonWrite}>Clear all</button>
//       </div>
//     </div>
//   );
// };

// export default FilterComponent;


import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Range from "rc-slider";
import {
  button,
  buttonWrite,
  closeButton,
  filter,
  furnitureName,
  price,
  priceName,
  rangeStyles,
  sort,
  sortName,
  title,
  titlecontainer
} from "./filter.style";

interface FurnitureItem {
  id: number;
  title: string;
}
interface DesingItem {
  id: number;
  title: string;
}
interface FilterProps {
  categoryId: string;
  furniture: FurnitureItem[];
  design: DesingItem[];
  onFilterChange: (filters: {
    sortOrder: string;
    selectedCategory: string;
    selectedDesigns: string;
    priceRange: [number, number];
  }) => void;
  onClose?: () => void;
}

const FilterComponent: React.FC<FilterProps> = ({ categoryId, design, furniture, onFilterChange, onClose }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategoryIndexes, setSelectedCategoryIndexes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedDesignIndexes, setSelectedDesignIndexes] = useState<number[]>([]);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortOrder(e.target.value);
  };

  const toggleSelection = (id: number, setState: React.Dispatch<React.SetStateAction<number[]>>) => {
    setState((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleRemoveFilter = (id: number, isCategory: boolean) => {
    if (isCategory) {
      const updated = selectedCategoryIndexes.filter(i => i !== id);
      setSelectedCategoryIndexes(updated);
      onFilterChange({
        sortOrder,
        selectedCategory: updated.join(","),
        selectedDesigns: selectedDesignIndexes.join(","),
        priceRange
      });
    } else {
      const updated = selectedDesignIndexes.filter(i => i !== id);
      setSelectedDesignIndexes(updated);
      onFilterChange({
        sortOrder,
        selectedCategory: selectedCategoryIndexes.join(","),
        selectedDesigns: updated.join(","),
        priceRange
      });
    }
  };

  const handleApplyFilters = () => {
    const selectedCategory = selectedCategoryIndexes.map(i => i.toString()).join(",");
    const selectedDesigns = selectedDesignIndexes.map(i => i.toString()).join(",");

    onFilterChange({
      sortOrder,
      selectedCategory,
      selectedDesigns,
      priceRange,
    });

    if (onClose) onClose();
  };

  const handleResetFilters = () => {
    setSortOrder("asc");
    setSelectedCategoryIndexes([]);
    setSelectedDesignIndexes([]);
    setPriceRange([0, 20000]);

    onFilterChange({
      sortOrder: "asc",
      selectedCategory: "",
      selectedDesigns: "",
      priceRange: [0, 20000],
    });

    if (onClose) onClose();
  };

  const renderActiveFilters = () => (
    <div>
      {selectedCategoryIndexes.map(id => {
        const item = furniture.find(f => f.id === id);
        return item ? (
          <div key={id} className={sortName}>
            {item.title} <button onClick={() => handleRemoveFilter(id, true)} className={closeButton}>x</button>
          </div>
        ) : null;
      })}
      {selectedDesignIndexes.map(id => {
        const item = design.find(d => d.id === id);
        return item ? (
          <div key={id} className={sortName}>
            {item.title} <button onClick={() => handleRemoveFilter(id, false)} className={closeButton}>x</button>
          </div>
        ) : null;
      })}
    </div>
  );

  return (
    <div className={filter}>
      <div className={titlecontainer}>
        <h3 className={title}>Filter</h3>
        {onClose && (
          <button onClick={onClose} className={closeButton}>x</button>
        )}
      </div>

      {renderActiveFilters()}

      <div className={sort}>
        <div>
          <label className={priceName}>Price</label>
          <p className={price}>Price: {priceRange[0]}$ — {priceRange[1]}$</p>
          <Range
            className={rangeStyles}
            range
            min={0}
            max={20000}
            step={100}
            value={priceRange}
            onChange={(value) => {
              if (Array.isArray(value)) {
                setPriceRange(value as [number, number]);
              }
            }}
          />
        </div>
      </div>

      <div className={sort}>
        <label>Sort by:</label>
        <div>
          <label className={sortName}>
            <input type="radio" name="sort" value="asc" checked={sortOrder === "asc"} onChange={handleSortChange} />
            Low to High
          </label>
          <br />
          <label className={sortName}>
            <input type="radio" name="sort" value="desc" checked={sortOrder === "desc"} onChange={handleSortChange} />
            High to Low
          </label>
          <br />
          <label className={sortName}>
            <input type="radio" name="sort" value="bestsellers" checked={sortOrder === "bestsellers"} onChange={handleSortChange} />
            Bestsellers
          </label>
          <br />
          <label className={sortName}>
            <input type="radio" name="sort" value="new" checked={sortOrder === "new"} onChange={handleSortChange} />
            New in
          </label>
        </div>
      </div>

      <div className={sort}>
        <label>Furniture Type</label>
        <div className={furnitureName}>
          {furniture.map(({ id, title }) => (
            <label className={sortName} key={id} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={selectedCategoryIndexes.includes(id)}
                onChange={() => toggleSelection(id, setSelectedCategoryIndexes)}
              />
              {title}
            </label>
          ))}
        </div>
      </div>

      <div className={sort}>
        <label>Design Type</label>
        <div className={furnitureName}>
          {design.map(({ id, title }) => (
            <label className={sortName} key={id} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={selectedDesignIndexes.includes(id)}
                onChange={() => toggleSelection(id, setSelectedDesignIndexes)}
              />
              {title}
            </label>
          ))}
        </div>
      </div>

      <div>
        <button onClick={handleApplyFilters} className={button}>Submit</button>
        <button onClick={handleResetFilters} className={buttonWrite}>Clear all</button>
      </div>
    </div>
  );
};

export default FilterComponent;
