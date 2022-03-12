import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './C3BarAdminDelete.css';

export default (props) => {

  const dispatch = useDispatch();

  function verifyDelete() {
    const data = props.data;
    const id = encodeURIComponent(data._id);
    let yes = confirm('Are you sure you want to delete the article titled - ' + '\'' + data.title + '\'');
    if(!yes) {
      return;
    }
    deleteClientArticle(data.index);
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

  return (
    <svg
      className = 'medd_delete'
      onClick={verifyDelete}
      xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/>
    </svg>
  );
};