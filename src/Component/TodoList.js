import React from 'react';

function TodoList({ todos, deleteTodo }) {
    return (
        <ul >
        {todos.map((todo, index) => (
            <li style={{marginLeft:"500px", textAlign:"start", justifyContent:"center"}} key={index}>
            
            {todo}
            <button 
            className='btn btn-danger mx-5 my-2'
           onClick={() => deleteTodo(index)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}

export default TodoList;