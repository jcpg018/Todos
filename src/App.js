//import logo from './platzi.webp';

import React from 'react';
import { TodoProvider, TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import {TodosLoading}  from './TodosLoading';
import {TodosError} from  './Todoserror';
import {EmptyTodos} from './EmptyTodos';




/* const defaulTodos = [

 {text: 'Cortar cebolla', completed: true},
 {text: 'Tomar el curso de Intro a React.js', completed: false},
 {text: 'Bailar salsa casino', completed: false},
 {text: 'OOOOOhhhh', completed: false},
 {text: 'usar estados derivados', completed: true},


] */

function AppUI ()  {

 const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
  } = React.useContext(TodoContext);




return (

 <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError />}
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {!loading && !searchedTodos.length && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );


}
function App() {

  return (               

         <TodoProvider>
            <AppUI/>
        </TodoProvider>
  )
     
   

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