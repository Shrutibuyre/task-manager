// App.js

import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './index.css'; // Import your CSS file

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
