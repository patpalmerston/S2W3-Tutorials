
import React, {useState} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.scss';

function App() {
  // state for the todofrom component
  const [value, setValue] = useState('');
  // handle submit for the todoform
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  // lets build an add todo function
  const addTodo = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

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
      <TodoForm
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
        addTodo={addTodo}
       />
      </div>
    </div>
  );
}

export default App;


