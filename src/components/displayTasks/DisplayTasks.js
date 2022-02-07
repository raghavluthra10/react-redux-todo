import React from 'react';

const DisplayTasks = ({ todo, id }) => {

    const deleteTodo = (e, id) => {
        console.log('delete button is clicked!!', id);
    };

    const editTodo = (e, id) => {
        console.log('edit button is clicked!!', id)
    };

  return <div className="displayTasks" >
      <div>
          {todo}
      </div>
      <button onClick={(e) => deleteTodo(e, id)} >
        Delete
      </button>
      <button onClick={(e) => editTodo(e, id)} >  
          Edit
      </button>
      <hr />
  </div>;
};

export default DisplayTasks;
