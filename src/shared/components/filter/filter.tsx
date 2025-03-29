import React, { useState } from "react";

const FilterComponent = ({ onFilterChange, categories }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onFilterChange({ sortOrder: e.target.value, selectedCategory, priceRange });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ sortOrder, selectedCategory: e.target.value, priceRange });
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
    onFilterChange({ sortOrder, selectedCategory, priceRange: newRange });
  };

  return (
    <div className="filter-container">
      <label>Sort by price:</label>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <label>Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        {categories.map((category) => (
            <option key={category.id} value={category.id}> 
            {category.title}
            </option>
        ))}
        </select>

      <label>Price range:</label>
      <input type="number" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} />
      -
      <input type="number" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} />
    </div>
  );
};

export default FilterComponent;
