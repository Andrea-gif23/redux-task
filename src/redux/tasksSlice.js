import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], 
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload, 
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload); // Filtramos por ID
    },
  },
});


export const { addTask, deleteTask } = tasksSlice.actions;


export default tasksSlice.reducer;