import React, { useState } from 'react';

import TodoList from './TodoList';
import SubmitTodo from './SubmitTodo';

    function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="mt-5 px-3 py-4 " style={{textAlign:"center", justifyContent:"center"}}>
        <h1 className="h1 display-1">Todo List</h1>
        <SubmitTodo addTodo={addTodo} />
        <div className="mt-5 px-3 py-4">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
        </div>
    );
}

export default Todo;