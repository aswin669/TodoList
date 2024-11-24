import React, { useState, useRef } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import './todo.css';

export default function Todo() {
  const [task, setTask] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const currentTaskRef = useRef({});

  const addTask = (title) => {
    if (title.trim()) {
      setTask([...task, { title }]);
    }
  };

  const deleteTask = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  const editTask = (index) => {
    setIsEditing(true);
    currentTaskRef.current = { ...task[index], index };
  };

  const saveTask = (title) => {
    const updatedTasks = task.map((task, i) =>
      i === currentTaskRef.current.index ? { ...task, title } : task
    );
    setTask(updatedTasks);
    setIsEditing(false);
    currentTaskRef.current = {};
  };

  return (
    <div className="todo-box">
      <h1 className="todo-title">TODO LIST</h1>
      <AddTask 
        addTask={addTask} 
        isEditing={isEditing} 
        saveTask={saveTask} 
        currentTaskRef={currentTaskRef} 
      />
      <ul className="task-list">
        {task.map((tasks, index) => (
          <ListTask
            key={index}
            task={tasks}
            index={index}
            removeTasks={deleteTask}
            editTask={() => editTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}
