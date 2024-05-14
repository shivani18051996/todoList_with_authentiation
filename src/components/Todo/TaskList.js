import React, { useState } from "react";
import "./TaskList.css"; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (task) { 
      setTasks((prev) => [...prev, { id: new Date().getTime(), task }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };



  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit" className="todo-button">Add Task</button>
      </form>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            {task.task}
            <button onClick={() => deleteTask(task.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
