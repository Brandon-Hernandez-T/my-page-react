import React from 'react'

const TodoItem = ({ todo, toggleTodos }) => {

    const { id, task, completed } = todo

    const handleTodoClick = () => {
        toggleTodos(id);
    };

    return <li>
        <input type="checkbox" onChange={handleTodoClick} checked={completed} />
         {task}
    </li>
};

export default TodoItem;
