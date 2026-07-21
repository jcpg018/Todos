import './TodoItem.css';

function TodoItem(props) {

return (
  <li className='TodoItem'>
     <span className= {`Icon Icon-ckeck    ${props.completed && 'Icon-ckeck--active' }`}>V</span>
     <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} `}        > {props.text} </p>
     <span className={`Icon Icon-delete`}>X</span>

  </li>

);

};

export { TodoItem };
