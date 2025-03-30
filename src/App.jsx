import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from './redux/tasksSlice';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue)); 
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Lista de Tareas (Redux Toolkit)</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={handleAddTask}>Agregar</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;