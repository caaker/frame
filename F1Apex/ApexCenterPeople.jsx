import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGPeople from '../C0Vectors/SVGPeople.jsx';

export default () => {
  const dispatch = useDispatch();
  const page = useSelector( state => state.MenuPage.current );
  function clicked() {
    dispatch({type: 'updateMenuPage', current: 'People' });
  }
  const style = (page === 'People') ? 'apex-option apex-option-on' : 'apex-option';
  return (
    <div onClick={clicked} className={style}>
      <SVGPeople fontSize='30px'/>
    </div>
  );
};
