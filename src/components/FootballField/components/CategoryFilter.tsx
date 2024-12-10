// src/components/CategoryFilter.tsx

import React from "react";

interface CategoryFilterProps {
  categories: { name: string; color: string }[];
  activeCategories: Set<string>;
  onToggle: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategories,
  onToggle,
}) => {
  return (
    <div>
      <h3>Filtruj według kategorii:</h3>
      {categories.map((category) => (
        <label
          key={category.name}
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            checked={activeCategories.has(category.name)}
            onChange={() => onToggle(category.name)}
          />
          <span style={{ marginRight: "5px" }}>{category.name}</span>
          <span
            style={{
              display: "inline-block",
              width: "20px",
              height: "5px",
              backgroundColor: category.color,
              marginLeft: "5px",
            }}
          />
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
