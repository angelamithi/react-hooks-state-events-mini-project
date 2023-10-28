import React from "react";


function Task({singleTask,category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      
      <div className="text">{singleTask}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
