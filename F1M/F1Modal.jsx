import React                                from   'react';
import { useSelector, useDispatch }         from   'react-redux';

import './F1Modal.css';
import F1M1                                 from   '../F1M1/M1.jsx';

export default () => {

  const dispatch = useDispatch();
  const on = useSelector(state => state.Modal.on);
  console.logD('DEBUG: L2 : F1-Modal: on: ' + on);

  function offModalClick(event) {
    if(event.target.className === 'modal_hold onModal') {
      dispatch({type: 'toggleModalOff'});
      dispatch({type: 'clearArticleForm'});
    }
  }

  if(on === true) {
    document.body.classList.add('modal-on');
  } else {
    document.body.classList.remove('modal-on');
  }

  return (
    <div onClick={offModalClick} className = {on === true ? 'modal_hold onModal' : 'modal_hold offModal'}>
      <F1M1/>
    </div>
  );
};
