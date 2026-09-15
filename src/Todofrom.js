import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoFrom.css';

function TodoForm ()  {

const [newTodoValue, setnewTodoValue] = React.useState('');

const {addTodo, setOpemModal} = React.useContext(TodoContext);

const onChange = (event) => {

 setnewTodoValue(event.target.value);

};


const onCancel = () => {

  setOpemModal(false);

};


const onSubmit = (event) => {

  event.preventDefault();
  if(newTodoValue.trim().length === 0) return;

  addTodo(newTodoValue);
  setOpemModal(false);
}


return (

   <form onSubmit={onSubmit}>

     <label>Escribe tu nuevo TODO</label>

     <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
        
     
     />


     <div className="TodoForm-buttonContainer">
      <button type="button"
              className="TodoForm-button TodoForm-button-cancel"
              onClick={onCancel}
                            
              >Cancelar</button>

        <button
           type="submit"
           className="TodoForm-button TodoForm-button--add"
        
        
        
        >Add</button>              
       
     </div>

   </form>

)

}

export {TodoForm};