import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, deleteAllTasks, updateTask } from '../redux/TodoSlice';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [editText, setEditText] = useState('');
  const [editTask, setEditTask] = useState(null); 

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todos.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDeleteAllTasks = () => {
    dispatch(deleteAllTasks());
  };

  const handleOpen = (task) => {
    setEditTask(task);  
    setEditText(task.text); 
  };

  const handleClose = () => {
    setEditTask(null);
    setEditText('');
  };

  const handleEditTask = () => {
    if (editText.trim()) {
      dispatch(updateTask({ id: editTask.id, text: editText }));
      handleClose();
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div style={{
      padding: '30px', maxWidth: '500px', margin: '100px auto', display: 'flex', flexDirection: 'column', gap: '30px', color: "white"
    }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>To-do List</h1>

      <TextField
        style={{ textAlign: 'center', color: 'black', backgroundColor: 'white', width: '100%' }}
        variant="outlined"
        label="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button color="white" onClick={handleAddTask} style={{ backgroundColor: '#69247C' }}>Add</Button>

      <div style={{ marginTop: '20px' }}>
        <Button color="white" onClick={handleDeleteAllTasks} style={{ backgroundColor: '#FF6347' }}>
          Delete All Tasks
        </Button>
      </div>

      <ul style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            <span>{task.text}</span>

            <div className="buttons">
              <Button color="secondary" onClick={() => handleDeleteTask(task.id)} style={{ backgroundColor: '#FF6347' }}>
                Delete
              </Button>

              <Button onClick={() => handleOpen(task)}>Edit</Button>
            </div>
          </li>
        ))}
      </ul>


      <Modal
        open={editTask !== null}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextField
            style={{ textAlign: 'center', color: 'black', backgroundColor: 'white', width: '100%' }}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            label="Edit Task"
          />
          <Button
            style={{ textAlign: 'center', color: 'black', backgroundColor: 'green', width: '100%', marginTop: "20px" }}
            onClick={handleEditTask}
          >
            Save Changes
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Todolist;
