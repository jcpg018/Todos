
import React from 'react';
import './createTodoButton.css';
import { TodoContext } from './TodoContext';

function CreateTodoButton() {

    const { setOpemModal } = React.useContext(TodoContext);


    const onClickButton = () => {

       setOpemModal((prevState) => !prevState);
    }

return (
  
    <button className='CreateTodoButton' onClick={onClickButton}>+</button>

);

};

export { CreateTodoButton };