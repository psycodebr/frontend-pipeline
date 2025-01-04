import React, { useEffect, useState } from 'react';
import api from './services/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskForm refreshTasks={fetchTasks} />
            <TaskList tasks={tasks} refreshTasks={fetchTasks} />
        </div>
    );
};

export default App;
