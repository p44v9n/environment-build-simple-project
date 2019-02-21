import React from 'react';

const namesInfo = (props) => {
  return(
    <div className="person-info">
      <p>First Name: {props.fNmameInfo}</p>
      <p>Last Name: {props.lNameInfo}</p>
      <p>Age: {props.ageInfo}</p>
      <p>Nationality: {props.nationalityInfo}</p>    
    </div>
  );
}

export default namesInfo;