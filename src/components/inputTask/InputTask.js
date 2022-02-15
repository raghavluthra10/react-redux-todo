import React, { useState } from "react";
import "./InputTask.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../slices/todoSlice";

const InputTask = () => {
  // to read data from the store
  const { todos } = useSelector((state) => state.todos);

  // to dispatch actions we will use DISPATCH
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({ task: "", id: null });

  const addTodoToReduxState = (e) => {
    e.preventDefault();
    console.log("add todo button is working!!");
    dispatch(addTodo(todo));
  };

  return (
    <form className="inputTask" onSubmit={addTodoToReduxState}>
      <input
        className="inputTask__input"
        label="Enter todo..."
        value={todo.task}
        onChange={(e) =>
          setTodo({ task: e.target.value, id: todos.length + 1 })
        }
      />

      <button className="inputTask__button" type="submit">
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default InputTask;
