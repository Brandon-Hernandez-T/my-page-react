import React from 'react';
/** COMPONENTES EXTERNOS */
/** COMPONENTES INTERNOS */
import TodoItem from './TodoItem';
/** ESTILOS  */

const TodoList = ({ todos, toggleTodos }) => {

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodos={toggleTodos}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;