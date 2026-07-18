//import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';


const defaulTodos = [

 {text: 'Cortar cebolla', completed: true},
 {text: 'Tomar el curso de Intro a React.js', completed: false},
 {text: 'Bailar salsa casino', completed: false},
 {text: 'OOOOOhhhh', completed: false},


]

function App() {
  return (
           
    <React.Fragment>
      <TodoCounter completed={10} total={25} />
      <TodoSearch />
      <TodoList>

        {defaulTodos.map(todo => (

            <TodoItem  key={todo.text} text={todo.text} completed={todo.completed}  />

        ))}

      </TodoList>

      <CreateTodoButton />

      </React.Fragment>
     
    
  );
}




export default App;
/*      <div className="App">
      <TodoCounter completed={10} total={25} />
      <TodoSearch />
      <TodoList>

      <TodoItem />
      <TodoItem />
      <TodoItem />


      </TodoList>

      <CreateTodoButton />
     
    </div>*/