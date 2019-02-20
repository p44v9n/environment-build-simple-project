import React from 'react';

const name = (props) => {
  return(
    <li>{ props.uName + ' ' + props.lName }</li>
  );
}

export default name;