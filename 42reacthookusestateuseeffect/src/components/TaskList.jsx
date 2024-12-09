import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ tasks, completed, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task,index) => (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          completed={completed}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
