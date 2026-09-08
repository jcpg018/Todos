import React from 'react';

import './TodosLoading.css'


function TodosLoading () {

 

 return (

   <div>

      <span className='LoadingTodo-container'></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>

   </div>
 )
}


export { TodosLoading };