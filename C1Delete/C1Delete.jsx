import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SVGDelete from '../C0Vectors/SVGDelete.jsx';

import './C1Delete.css';

export default (props) => {

  const dispatch = useDispatch();

  function verifyDelete() {
    const article = props.article;
    const id = encodeURIComponent(article._id);
    let yes = confirm('Are you sure you want to delete the article titled - ' + '\'' + article.title + '\'');
    if(!yes) {
      return;
    }
    deleteClientArticle(article.index);
    deleteServerArticle(id);
  }

  function deleteClientArticle(index) {
    dispatch({type: 'deleteArticle', index: index});
  }

  function deleteServerArticle(id) {
    const options = {
      headers: {'Content-Type': 'application/json'},
      method: 'DELETE'
    };
    fetch('/articles/delete/' + id, options )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log('DEBUG: /articles/delete ', response);
      })
      .catch((error) => {
        console.error('DEBUG: fetch/DELETE error', error);
      });
  }
  return <SVGDelete className='medd_delete' onClick={verifyDelete} />;
};
