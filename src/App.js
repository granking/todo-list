import React, { useState, useEffect } from 'react'
import './App.css';

//componentes
import Header from './Components/Header';
import Todos from './Components/Todos';
import Loader from './Components/Loader'

function App() {

  //hooks state
  const [dataApi, setDataApi] = useState([]);
  const [handleTypeTask, setHandleTypeTask] = useState('all');
  const [filterTaskData, setFilterTaskData] = useState([]);

  //hoks effect
  useEffect(() => {
    const handleDataApi = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const todos = result.slice(0, 20);
      setDataApi(todos);
    }
    handleDataApi();
  }, []);
  
  useEffect(() => {
    const filterTask = () => {
      console.log(handleTypeTask);
      switch (handleTypeTask) {
        case 'complete':
          setFilterTaskData(dataApi.filter(task => task.completed === true));
          break;
        case 'notcomplete' :
          setFilterTaskData(dataApi.filter(task => task.completed !== true));
          break;
        default:
          setFilterTaskData(dataApi);
          break;
      }
    }
    filterTask()
  }, [dataApi, handleTypeTask]);

  //funciones
  const handleCompleted = (id) => {
    setDataApi(dataApi.map(todos => todos.id === id ? {...todos, completed: !todos.completed} : todos))
  }

  console.log(handleTypeTask);
  console.log(filterTaskData)
  return (
    <div className="App">
      <Header setHandleTypeTask={setHandleTypeTask} />
      <div className="todos-container">
        {
          dataApi ? (
            filterTaskData.map(( todo, index ) => (
              <Todos
              key={index}
              title={todo.title}
              status={todo.completed}
              handleCompleted={handleCompleted}
              id={todo.id}
              />
            ))
            ) : (
              <Loader />
            )
        }
      </div>
    </div>
  );
}

export default App;
