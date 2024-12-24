import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);  
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);  
    },
    deleteAllTasks: (state) => {
      state.tasks = [];  
    },
    updateTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = text;  
      }
    },
  },
});

export const { addTask, deleteTask, deleteAllTasks, updateTask } = todoSlice.actions;  
export default todoSlice.reducer;
