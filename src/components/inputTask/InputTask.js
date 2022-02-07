import React, { useState } from 'react';
import './InputTask.css';

const InputTask = () => {

    const [ todo, setTodo ] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        console.log('add todo button is working!!')
        console.log(todo);
    }; 

  return <form className="inputTask" onSubmit={addTodo} >

    <input className="inputTask__input" label="Enter todo..." value={todo} onChange={e => setTodo(e.target.value)} />

    <button  className="inputTask__button" type="submit" > Add </button>

  </form>;
};

export default InputTask;
