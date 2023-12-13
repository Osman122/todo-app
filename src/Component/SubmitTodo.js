import React, { useState } from 'react';

function SubmitTodo({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() !== '') {
        addTodo(todo);
        setTodo('');
        }
    };

    return (
        <div style={{padding:"50px"}} >
        <form onSubmit={handleSubmit}>
        <input className='mx-3 px-5 py-3 '
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new todo"
        />
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 "
          type="submit">Add</button>
        </form>
        </div>
    );
}

export default SubmitTodo;