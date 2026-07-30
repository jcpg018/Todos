//import logo from './platzi.webp';

import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaulTodos = [

 {text: 'Cortar cebolla', completed: true},
 {text: 'Tomar el curso de Intro a React.js', completed: false},
 {text: 'Bailar salsa casino', completed: false},
 {text: 'OOOOOhhhh', completed: false},
 {text: 'usar estados derivados', completed: true},


]

function App() {

  const [todos, setTodos] = React.useState(defaulTodos);

 const [searchValue, setsearchValue]  = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( (todo) => {
     
       return todo.text.includes(searchValue)

  })

  console.log('Los usuarios buscan todos de ' + searchValue);



  return (
           
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch  searchValue= {searchValue} setsearchValue= {setsearchValue} />
      <TodoList>

        {searchedTodos.map(todo => (

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