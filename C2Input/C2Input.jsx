import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './C1Input.css';

export default () => {

  const dispatch = useDispatch();
  const page = useSelector((state) => state.MenuPage.current);
  const search_current = useSelector((state) => state.SearchInput.current);
  const show_it = (page === 'Articles');
  const id = show_it ? 'left_input_show' : 'left_input_hide';

  function onChange(event) {
    dispatch({type: 'updateSearchInput', current: event.target.value});
  }

  return (
    <div className="apex-input-div">
      <input
        type="text"
        className="left_input"
        id={id}
        name="search"
        placeholder=" Search"
        value={search_current}
        onChange={onChange}
      />
    </div>
  );

};
