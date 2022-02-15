import React from "react";
import { deleteTask } from "../../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const DisplayTasks = ({ todo, id }) => {
  // to read data from the store
  const { todos } = useSelector((state) => state.todos);

  // to dispatch actions we will use DISPATCH
  const dispatch = useDispatch();

  const deleteTaskFromReduxState = (e, id) => {
    dispatch(deleteTask(id));
  };

  const editTodo = (e, id) => {
    console.log("edit button is clicked!!", id);
  };

  return (
    <div className="displayTasks">
      <div>{todo}</div>
      <button onClick={(e) => deleteTaskFromReduxState(e, id)}>Delete</button>
      <button onClick={(e) => editTodo(e, id)}>Edit</button>
      <hr />
    </div>
  );
};

export default DisplayTasks;
