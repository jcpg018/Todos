import React from 'react';

import './TodoSearch.css'
import { TodoContext } from './TodoContext';


function TodoSearch () {

 const { searchValue, setSearchValue } = React.useContext(TodoContext);

 const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

 return (

 <input placeholder="Cortar cebolla"  className='TodoSearch'  value={searchValue} onChange={onSearchValueChange} />
 )
}


export { TodoSearch };

// console.log('Escrobiste en el Todoseach');
// console.log(event); console.log(event.target)
 // console.log(event.target.value);

