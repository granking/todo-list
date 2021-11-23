import React, { useState, useEffect } from 'react'
import './App.css';

//componentes
import Header from './Components/Header';
import Todos from './Components/Todos'

function App() {

  //hooks state
  const [handleTypeTask, setHandleTypeTask] = useState("all");
  const [dataApi, setDataApi] = useState([]);

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

  return (
    <div className="App">
      <Header setHandleTypeTask={setHandleTypeTask} />
      <Todos />
    </div>
  );
}

export default App;
