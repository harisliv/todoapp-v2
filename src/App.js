import { useState } from 'react/cjs/react.development';
import './App.css';
import Form from './Form';

function App() {
  const [todos, setTodos] = useState([]);

  const formSubmitHandler = (input) => {
    setTodos(prev => prev.concat({
      id: Date.now(),
      content: input,
      completed: false
    }))
  }

  console.log(todos);

  return (
    <div className="App">
      <Form formSubmit={formSubmitHandler}/>
    </div>
  );
}

export default App;
