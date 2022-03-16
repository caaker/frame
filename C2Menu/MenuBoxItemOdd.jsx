import React from 'react';
import { useDispatch } from 'react-redux';

export default (props) => {
  const dispatch = useDispatch();
  function clickHandler() {

    dispatch({type: 'toggleOn'});

    // toggle the MenuPage off
    dispatch({type: 'toggleMenuPageOff'});
  }
  return (
    <span className="menu_holder" onClick={clickHandler}>
      {props.children}
      <p className='menu_name'>{props.name}</p>
    </span>
  );
};
