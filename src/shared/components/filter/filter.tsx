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
interface FilterProps {
  furniture: FurnitureItem[]
  onFilterChange: (filters: {
    sortOrder: string;
    selectedCategory: string;
    priceRange: [number, number];
  }) => void;
  onClose?: () => void;
}

const FilterComponent: React.FC<FilterProps> = ({furniture, onFilterChange, onClose }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategoryIndexes, setSelectedCategoryIndexes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortOrder(e.target.value);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedCategoryIndexes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleApplyFilters = () => {
    const categoryIds = selectedCategoryIndexes.join(",");
    onFilterChange({
      sortOrder,
      selectedCategory: categoryIds,
      priceRange,
    });
    if (onClose) onClose();
  };

  const handleResetFilters = () => {
    setSortOrder("asc");
    setSelectedCategoryIndexes([]);
    setPriceRange([0, 20000]);
    onFilterChange({
      sortOrder: "asc",
      selectedCategory: "",
      priceRange: [0, 20000],
    });
    if (onClose) onClose();
  };

  return (
    <div className={filter}>
      <div className={titlecontainer}>
        <h3 className={title}>Filter</h3>
        {onClose && (
          <button onClick={onClose} className={closeButton}>
            x
          </button>
        )}
      </div>

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
                onChange={() => handleCheckboxChange(id)}
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
