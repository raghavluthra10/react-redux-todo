import './App.css';
import DisplayTasks from './components/displayTasks/DisplayTasks';
import InputTask from './components/inputTask/InputTask';


const tasks = [
  { task: 'task 1', id: 1 },
  { task: 'task 2', id: 2 },
  { task: 'task 3', id: 3 },
  { task: 'task 4', id: 4 },
]


function App() {
  return (
    <div className="App">
      <InputTask  />
      
      {tasks.map((task) => {
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
