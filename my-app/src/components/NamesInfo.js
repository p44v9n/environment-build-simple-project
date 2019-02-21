import React from 'react';

const namesInfo = (props) => {
  return(
    <div className="person-info">
      <h2>First Name: {props.fNmameInfo}</h2>
      <h2>Last Name: {props.lNameInfo}</h2>
      <h2>Age: {props.ageInfo}</h2>
      <h2>Nationality: {props.nationalityInfo}</h2>    
    </div>
  );
}

export default namesInfo;