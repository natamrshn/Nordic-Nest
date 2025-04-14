import React, { useState } from "react";
const furniture = ["Lighting",
  "Sofas",
 " Sliding Wardrobes",
  'Tables',
  'Chairs',
 ' Headboards & Beds',
'  Cabionets & Sideboards'];

const FilterComponent = ({ onFilterChange}) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [priceRange, setPriceRange] = useState<number>(2000);

  // const handlePriceChange = (value: number, index: number) => {
  //   setPriceRange((prev) => {
  //     const updated = [...prev] as [number, number];
  //     updated[index] = value;
  //     if (updated[0] > updated[1]) {
  //       [updated[0], updated[1]] = [updated[1], updated[0]];
  //     }
  //     return updated;
  //   });
  // };
  
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 1500]);

const handlePriceChange = (value: number, index: number) => {
  setPriceRange((prev) => {
    const updated: [number, number] = [...prev];
    updated[index] = value;

    // Гарантуємо, що мін не перевищує макс
    if (updated[0] > updated[1]) {
      [updated[0], updated[1]] = [updated[1], updated[0]];
    }

    return updated;
  });
};



  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    onFilterChange({ sortOrder: e.target.value, selectedCategory, priceRange });
  };

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (type: string) => {
    setSelectedCategories((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };



  return (
    <div className="filter-container">
      Filter
      <label>Price range: {priceRange[0]} - {priceRange[1]}</label>
      <div>
      <label>Max Price: {priceRange}</label>
      <label>Price range: {priceRange[0]} - {priceRange[1]}</label>
<div>
  <input
    type="range"
    min={20}
    max={2000}
    step={10}
    value={priceRange[0]}
    onChange={(e) => handlePriceChange(Number(e.target.value), 0)}
  />
  <input
    type="range"
    min={20}
    max={2000}
    step={10}
    value={priceRange[1]}
    onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
  />
</div>


        {/* <input
          type="range"
          min="20"
          max="2000"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
        /> */}
      </div>

    <label>Sort by:</label>
<div onChange={handleSortChange}>
  <label>
    <input
      type="radio"
      name="sort"
      value="asc"
      checked={sortOrder === "asc"}
    />
    Low to High
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="sort"
      value="desc"
      checked={sortOrder === "desc"}
    />
    High to Low
  </label>
  <br />
  <label>
    <input
      type="radio"
      name="sort"
      value="bestsellers"
      checked={sortOrder === "bestsellers"}
    />
    Bestsellers
  </label>
  <br />
    <label>
      <input
        type="radio"
        name="sort"
        value="new"
        checked={sortOrder === "new"}
      />
      New In
    </label>
  </div>

      <label>Furniture Type:</label>
      <div>
        {furniture.map((type, index) => (
          <label key={index} style={{ display: "block" }}>
            <input
              type="checkbox"
              value={type}
              checked={selectedCategories.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            {type}
          </label>
        ))}
      </div>     
    </div>
  );
};

export default FilterComponent;
