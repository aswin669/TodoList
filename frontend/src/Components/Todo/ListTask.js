import React from "react";

export default function ListTask({ task, removeTasks, index, editTask }) {
  return (
    <li className="task-item">
      <span>{task.title}</span>
      <div className="button-container">
        <button onClick={editTask} className="edit-btn">Edit</button>
        <button onClick={() => removeTasks(index)} className="delete-btn">Delete</button>
      </div>
    </li>
  );
}
