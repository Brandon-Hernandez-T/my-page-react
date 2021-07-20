import React, { useState, useRef } from 'react';
/** COMPONENTES EXTERNOS */
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
/** COMPONENTES INTERNOS */
import NavbarComponent from '../../Components/NavBar/NavbarComponent';
import TodoList from '../../Components/Task/TodoList';
/** ESTILOS  */

const Tareas = (props) => {

    const [tareasAgregadas, setTareasAgregadas] = useState([{
        id: 1,
        task: 'Tarea 1',
        completed: false
    }]);
    const todoTaskRef = useRef();

    const agregarFuncion = () => {
        const task = todoTaskRef.current.value;
        if (task === '') return;

        setTareasAgregadas((prevTodos) => {
            return [...prevTodos, { id: Math.random(), task, completed: false } ];
        })

        todoTaskRef.current.value = null;
    };

    const toggleTodos = (id) => {
        const newTodos = [...tareasAgregadas];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTareasAgregadas(newTodos);
    };

    const handleClearAll = () => {
        const newTodos = tareasAgregadas.filter((todo) => !todo.completed);
        setTareasAgregadas(newTodos);
    };

    return (
        <>
            <NavbarComponent
                props={props}
            />

            <TodoList
                todos={tareasAgregadas}
                toggleTodos={toggleTodos}
            />

            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
            <Button onClick={agregarFuncion} > Add </Button>
            <Button onClick={handleClearAll} > Delete </Button>
            <div>
                Te quedan {tareasAgregadas.filter((todo) => !todo.completed).length} tareas por terminar
            </div>

        </>
    )
};

export default Tareas;