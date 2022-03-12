import './PeopleFormInput.css';
import React                          from   'react';
import { useSelector, useDispatch }   from   'react-redux';

export default () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.PeopleInput.current);

  function onChange(event) {
    dispatch({type: 'updatePeopleInput', current: event.target.value});
  };

  return (
    <input
      type='text'
      id="pdiv-form-input"
      value={current}
      onChange={onChange}
      type="text"
      placeholder="message"
      name="link"
    />

  );
};