import React from 'react';

const name = (props) => {
  return(
    <li
     onClick={props.clicked} >
      { props.uName + ' ' + props.lName }
    </li>
  );
}

export default name;