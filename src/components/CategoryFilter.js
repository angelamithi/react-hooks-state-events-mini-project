import React, { useState } from "react";

function CategoryFilter({ categories, originalTasks, setTasks }) {
  const [category, setCategory] = useState("All");

  function handleClick(selectedCategory) {
    setCategory(selectedCategory);
    const filteredTasks = selectedCategory === "All"
      ? originalTasks
      : originalTasks.filter((item) => item.category === selectedCategory);
    setTasks(filteredTasks);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat, index) => (
        <button
          key={index}
          className={category === cat ? "selected" : ""}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
