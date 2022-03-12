import './F1Modal.css';
import React                               from   'react';
import { useSelector, useDispatch }        from   'react-redux';

import F1ModalArticle                      from   '../F1ModalArticle/M1.jsx';

export default () => {

  const dispatch = useDispatch();
  const ModalOn = useSelector(state => state.Modal.on);
  const email = useSelector(state => state.User.current.email);

  function offModalClick(event) {
    if(event.target.className === 'modal_hold onModal') {
      dispatch({type: 'toggleModalOff'});
      dispatch({type: 'clearArticleForm'});
      dispatch({type: 'updateModalUserInput', current: {value: '', valid: false}});
    }
  }

  if(ModalOn === true) {
    document.body.classList.add('modal-on');
  } else {
    document.body.classList.remove('modal-on');
  }

  return (
    <div onClick={offModalClick} className = { ModalOn === true ? 'modal_hold onModal' : 'modal_hold offModal'}>
      {true && <F1ModalArticle/>}
    </div>
  );
};
