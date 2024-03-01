import React, { useReducer, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import "./components/SingleTodo";
import { todoReducer } from './components/todoReducer'; // Import the reducer and action type

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useReducer(todoReducer, []); // Use useReducer instead of useState

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if(todo) {
      dispatch({ type: 'addTodo', payload: todo }); // Dispatch the addTodo action
      setTodo("");
    }
  };

  return (
    <div className="App">
      <p><span className="heading">Ola mundo</span></p>

    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} dispatch={dispatch}/> {/* Pass dispatch to TodoList */}
    </div>
  );
}

export default App;