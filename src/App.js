import './App.css';
import DisplayTasks from './components/displayTasks/DisplayTasks';
import InputTask from './components/inputTask/InputTask';
import { useDispatch, useSelector } from "react-redux";


function App() {

  const { todos } = useSelector(state=> state.todos);

  return (
    <div className="App">
      <InputTask  />
      
      {todos.map((task) => {
        return <DisplayTasks 
          todo={task.task} 
          id={task.id}
          key={task.id}
        />
      })}

    </div>
  );
}

export default App;
