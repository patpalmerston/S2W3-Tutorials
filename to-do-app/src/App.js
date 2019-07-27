
import React, {useState} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.scss';

function App() {
  const todosData = [
    {
      id: 1,
      text: 'Do something fun',
      isCompleted: false,
     
     },
    {
      id: 2,
      text: 'grow a pony tail',
      isCompleted: false,
     
     },
    {
      id: 3,
      text: 'go somewhere fancy',
      isCompleted: false,
     }
  ]

  const [todos, setTodos] = useState(todosData);


// lets build an add todo function
const addTodo = text => {
  const newTodos = [...todos, {text}]
  setTodos(newTodos)
}


  // state for the todofrom component
  const [value, setValue] = useState('');
  // handle submit for the todoform
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  // lets update existing items
  const completeTodo = index => {
    // console.log('index', index)
    const newTodos = todos.map((todo) => {
      if(todo.id === index) {
        return {...todo, isCompleted : true}
      }
      return todo
    })
  
    setTodos(newTodos);
  }

  // lets delete an item
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }
  

  // lets hard code an array of objects to display for our initial state
   

// console.log('todos', todos)
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo.text}
            id={todo.id}
            completeTodo={completeTodo}
            isCompleted={todo.isCompleted}
            removeTodo={removeTodo}
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


