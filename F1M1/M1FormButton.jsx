import React from 'react';
import './M1FormButton.css';

export default (props) => {
  if(props.config) {
    return <button className="form_button">Update</button>;
  } else {
    return <button className="form_button">Add</button>;
  }
};
