import React from 'react';
import { Link } from "react-router-dom";

const name = (props) => {
  return(
    <li
     onClick={props.clicked} >
      <Link to={props.uName}>{ props.uName + ' ' + props.lName }</Link>
    </li>
  );
}

export default name;