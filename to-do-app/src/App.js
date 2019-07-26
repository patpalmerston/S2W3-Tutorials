
import React, {useState} from 'react';
import Todo from './components/Todo';
import './App.scss';

function App() {
  // lets hard code an array of objects to display for our initial state
   const [todos, setTodos] = useState([
     {text: 'Do something fun'},
     {text: 'grow a pony tail'},
     {text: 'go somewhere fancy'}
   ]);

console.log('todos', todos)
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


