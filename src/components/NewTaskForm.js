import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [details, setDetails] = useState("");

  function handleChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedCategory !== "All" && details.trim() !== "") {
      const newTask = {
        category: selectedCategory,
        details: details,
      };
      onTaskFormSubmit(newTask);
      setDetails("");
      setSelectedCategory("All"); 
    }
  }

  function handleInput(e) {
    setDetails(e.target.value);
  }

  return (
    <>
      <form className="new-task-form" onSubmit={handleSubmit}>
        <label>
          Details
          <input type="text" name="text" onChange={handleInput} value={details} />
        </label>
        <label>
          Category
          <select name="category" value={selectedCategory} onChange={handleChange}>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    </>
  );
}

export default NewTaskForm;
