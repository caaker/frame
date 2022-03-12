import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGUser from '../C0Vectors/SVGUser.jsx';

export default () => {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  function clicked() {
    dispatch({type: 'updateMenuPage', current: 'User' });
  }
  const style = (page === 'User') ? 'apex-option apex-option-on' : 'apex-option';
  return (
    <div onClick={clicked} className={style}>
      <SVGUser fontSize='30px'/>
    </div>
  );
};
