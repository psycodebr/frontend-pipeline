import React from 'react';
import api from '../services/api';

const TaskList = ({ tasks, refreshTasks }) => {
    const handleDelete = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            refreshTasks(); // Atualiza a lista de tarefas
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button onClick={() => handleDelete(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
