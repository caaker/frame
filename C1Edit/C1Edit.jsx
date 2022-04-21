import './C1Edit.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import SVGEdit from '../C0Vectors/SVGEdit.jsx';

export default (props) => {

  const dispatch = useDispatch();
  function editClicked() {
    dispatch({type: 'toggleOn', config: true});
    dispatch({type: 'setArticleForm', data: props.article});
  }

  return <SVGEdit className='medd_edit' onClick={event => editClicked(event)} />
};