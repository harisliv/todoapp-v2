import { useState } from 'react/cjs/react.development';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [todos, setTodos] = useState([]);

  const formSubmitHandler = (input) => {
    setTodos(prev => prev.concat({
      id: Math.floor(Math.random() * 10000),
      content: input,
      completed: false
    }))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, content) => {
    console.log(id)
    console.log(content)
  }


  return (
    <div className="App">
      <Form formSubmit={formSubmitHandler}/>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default App;
