import React from 'react';
import './M1FormButton.css';

export default (props) => {
  return (

    {props.config ? <button className="form_button">Update</button> : <button className="form_button">Add</button>}

  );
};
