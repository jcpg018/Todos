import React from 'react';
import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon}  from './DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {

return (
  <li className='TodoItem'>
    <CompleteIcon  completed={props.completed} onClick={props.onComplete}  />
   {  /* <span className= {`Icon Icon-ckeck    ${props.completed && 'Icon-ckeck--active' }`} onClick={props.onComplete} >V</span> */}

      <CompleteIcon  completed={props.completed} onClick={props.onComplete} />
     
     <p className={`TodoItem-p ${props.completed && 'TodoItem-p-complete'} `} > {props.text} </p>

     <DeleteIcon onDelete={props.onDelete} />
    {  /*  <span className="Icon Icon-delete"  onClick={props.onDelete} >X</span>*/ }

  </li>

);

};

export { TodoItem };
