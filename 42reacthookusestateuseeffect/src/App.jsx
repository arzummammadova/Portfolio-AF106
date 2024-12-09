import React, { useState } from 'react';
import styles from './App.module.css';
import Toastify from 'toastify-js';
import TaskList from './components/TaskList'; 

const App = () => {
  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(loadTasks());
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() === '') {
      Toastify({
        text: "Boş olmaz",
        duration: 2000,
        backgroundColor: "red",
      }).showToast();
      return;
    }
    const newTask = {
      id: Date.now(),
      completed: false,
      text: newTaskText.trim(),
    };
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    setNewTaskText('');
    Toastify({
      text: "Yeni tapşırıq əlavə olundu!",
      duration: 2000,
      backgroundColor: "green",
    }).showToast();
  };

  const clearAll = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
    Toastify({
      text: "Tapşırıqlar hamısı silindi",
      duration: 2000,
      backgroundColor: "green",
    }).showToast();
  };

  const completed = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const taskToDelete = tasks.find((task) => task.id === taskId);
    if (taskToDelete && taskToDelete.completed) {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      Toastify({
        text: "Tapşırıq silindi",
        duration: 2000,
        backgroundColor: "red",
      }).showToast();
    } else {
      Toastify({
        text: "Tamamlanmamış tapşırıq silinə bilməz",
        duration: 2000,
        backgroundColor: "yellow",
      }).showToast();
    }
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    const newTaskText = prompt("Edit task", taskToEdit.text);
    if (newTaskText === null || newTaskText.trim() === '') {
      Toastify({
        text: 'Task is empty',
        duration: 2000,
        backgroundColor: 'yellow',
      }).showToast();
      return;
    }
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newTaskText.trim() } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    Toastify({
      text: 'Task edited successfully',
      duration: 2000,
      backgroundColor: 'green',
    }).showToast();
  };

  return (
    <div className={styles.container}>
      <h1>To Do List</h1>
      <div className={styles.adding}>
        <input
          className={styles.addTask}
          type="text"
          placeholder="Add new task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <TaskList
        tasks={tasks}
        completed={completed}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <button onClick={clearAll}>Clear All Tasks</button>
    </div>
  );
};

export default App;
