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



 function useLocalStorage(itemName, initialValue) {




   const [item, setItem] = React.useState(initialValue);

   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false)


   /////////////////////

  React.useEffect( () => {


    setTimeout( ()  =>   {
      try {

    const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;

     if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue;
       
  } else {
    parsedItem = JSON.parse(localStorageItem)

  }

  setItem(parsedItem);
  setLoading(false);
        
        
      } catch (err) {

        setError(err)
        
      }

    }, 1000);
 


  }, [itemName, initialValue]);

   /////////////////// 

    const saveItem = (newItem) => {

    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);

  }
     
  return {item, saveItem, loading, error};

 }

function App() {

  //const [todos, setTodos] = React.useState(defaulTodos);

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

//  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

 const [searchValue, setsearchValue]  = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  
  /* React.useEffect(() => {

     console.log(`Log 2`)

  }); */

/*  React.useEffect(() => {

     console.log(`Loggggggggggg 2`)

  }, []); */
/* 
 React.useEffect(() => {

     console.log(`Loggggggggggg 2`)

  }, [totalTodos]); */




  

  const searchedTodos = todos.filter( (todo) => {

      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
     
       return todoText.includes(searchText);

  })

  //console.log('Los usuarios buscan todos de ' + searchValue);




  const completeTodo = (text)  =>  {  
       const newTodos = [...todos];
       const todoIndex = newTodos.findIndex(
          
        (todo) =>  todo.text === text   

       )

       newTodos[todoIndex].completed = true; 
         saveTodos(newTodos)
  }

  const deleteTodo = (text)  =>  {  
       const newTodos = [...todos];
       const todoIndex = newTodos.findIndex(
          
        (todo) =>  todo.text === text   

       )

       newTodos.splice(todoIndex, 1);
         saveTodos(newTodos)
  }

  return (
           
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch  searchValue= {searchValue} setsearchValue= {setsearchValue} />
      <TodoList>
         {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        
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