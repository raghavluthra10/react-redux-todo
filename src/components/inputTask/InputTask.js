import React, { useState } from 'react';
import './InputTask.css';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../../slices/todoSlice';

const InputTask = () => {

    const { updateTodo } = useSelector(state=> state);
    const dispatch = useDispatch();


    const [ todo, setTodo ] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        console.log('add todo button is working!!')
        // console.log(todo);

        // dispatch(addTodo(todo))

        // console.log(updateTodo)
    }; 

  return <form className="inputTask" onSubmit={addTodo} >

    <input className="inputTask__input" label="Enter todo..." value={todo} onChange={e => setTodo(e.target.value)} />

    <button  className="inputTask__button" type="submit" > Add </button>

  </form>;
};

export default InputTask;
