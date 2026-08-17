//import logo from './platzi.webp';

import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



/* const defaulTodos = [

 {text: 'Cortar cebolla', completed: true},
 {text: 'Tomar el curso de Intro a React.js', completed: false},
 {text: 'Bailar salsa casino', completed: false},
 {text: 'OOOOOhhhh', completed: false},
 {text: 'usar estados derivados', completed: true},


] 

   localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos))  */

  // para borrar 

 /*  localStorage.removeItem('TODOS_V1'); */



function App() {

  //const [todos, setTodos] = React.useState(defaulTodos);

  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
      parsedTodos = [];
       
  } else {
    parsedTodos = JSON.parse(localStorageTodos)

  }


  const [todos, setTodos] = React.useState(parsedTodos);

 const [searchValue, setsearchValue]  = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( (todo) => {

      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
     
       return todoText.includes(searchText);

  })

  //console.log('Los usuarios buscan todos de ' + searchValue);


  const saveTodos = (newTodos) => {

    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    
    setTodos(newTodos);

  }

  const completeTodo = (text)  =>  {  
       const newTodos = [...todos];
       const todoIndex = newTodos.findIndex(
          
        (todo) =>  todo.text == text   

       )

       newTodos[todoIndex].completed = true; 
         saveTodos(newTodos)
  }

  const deleteTodo = (text)  =>  {  
       const newTodos = [...todos];
       const todoIndex = newTodos.findIndex(
          
        (todo) =>  todo.text == text   

       )

       newTodos.splice(todoIndex, 1);
         saveTodos(newTodos)
  }

  return (
           
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch  searchValue= {searchValue} setsearchValue= {setsearchValue} />
      <TodoList>

        {searchedTodos.map(todo => (

            <TodoItem  key={todo.text} text={todo.text} completed={todo.completed} onComplete={ () => completeTodo(todo.text)}  onDelete={() => deleteTodo(todo.text)} />


        ))}

      </TodoList>

      <CreateTodoButton />

      </>
     
    
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