


import React, { useState, useEffect } from "react";

export default function AddTask({ addTask, isEditing, saveTask, currentTaskRef }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isEditing) {
      setValue(currentTaskRef.current.title);
    }
  }, [isEditing, currentTaskRef]);

  const addItem = () => {
    if (isEditing) {
      saveTask(value);
    } else {
      addTask(value);
    }
    setValue('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addItem}>{isEditing ? "Save" : "Add"}</button>
    </div>
  );
}

