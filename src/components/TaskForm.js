import React, { useState } from 'react';
import api from '../services/api';

const TaskForm = ({ refreshTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/tasks', { title, description });
            setTitle('');
            setDescription('');
            refreshTasks(); // Atualiza a lista de tarefas
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Nova Tarefa</h2>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TaskForm;
