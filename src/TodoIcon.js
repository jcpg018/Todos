/*import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './TodoIcon.css';*/

// Mapeamos el tipo de ícono con su componente de react-icons
/*const iconTypes = {
  check: (color) => <FaCheck className="Icon-svg" color={color} />,
  delete: (color) => <FaTimes className="Icon-svg" color={color} />,
};

function TodoIcon({ type, color }) {
  return (
    <span className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}*/



//   para observar los iconos de la libreria
//export { TodoIcon };


/*import { FaBeer } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

function TodoIcon ({ type })  {
    if (type === 'check') {
        return <span className={`Icon Icon-svg Icon-${type}`}><FaReact /></span>;
    } else if (type === 'delete') {
        return <span className={`Icon Icon-svg Icon-${type}`}><FaBeer /></span>;
    }
    return null; // O un icono por defecto
};

export {TodoIcon};*/


import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './TodoIcon.css';

// Mapeamos el tipo de ícono sin hardcodear el color
const iconTypes = {
  check: <FaCheck className="Icon-svg Icon-svg-check" />,
  delete: <FaTimes className="Icon-svg Icon-svg-delete" />,
};

function TodoIcon({ type, onClick }) {
  return (
    <span 
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };