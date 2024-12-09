import React from 'react';
import styles from './TaskItem.module.css';


const TaskItem = ({ task, index,completed, deleteTask, editTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'green' : 'red' }}>
      {index+1}.{task.text}
      <div className="actions">
        <input type="checkbox" checked={task.completed} onChange={() => completed(task.id)} />
        <button className={styles.delete} onClick={() => deleteTask(task.id)}>Delete Task</button>
        <button className={styles.edit} onClick={() => editTask(task.id)}>Edit Task</button>
      </div>
    </li>
  );
};

export default TaskItem;
