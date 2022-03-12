import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGHome from '../C0Vectors/SVGHome.jsx';

export default () => {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  function clicked() {
    dispatch({type: 'updateMenuPage', current: 'Articles' });
  }
  const classes = (page === 'Articles') ? 'apex-option apex-option-on' : 'apex-option';
  return (
    <div onClick={clicked} className={classes}>
      <SVGHome fontSize='30px'/>
    </div>
  );
};
