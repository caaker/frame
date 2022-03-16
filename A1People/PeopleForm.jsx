import './PeopleForm.css';
import React                          from   'react';
import { useSelector, useDispatch }   from   'react-redux';
import PeopleFormInput                from    './PeopleFormInput.jsx';

export default () => {

  const dispatch = useDispatch();
  const current = useSelector((state) => state.PeopleInput.current);
  const socket = useSelector((state) => state.WebSocket.socket);

  function onSend() {
    event.preventDefault();

    const messageServer = {
      type: 'echo',
      message: current,
      from: 'foo.com',
      to: 'moo.com'
    };

    // send message to the server and to redux
    socket.send(JSON.stringify(messageServer));
    dispatch({type: 'addMessage', message: messageServer});

    // controlled form, set to empty on send
    dispatch({type: 'updatePeopleInput', current: ''});
  }

  return (
    <div id="pdiv">
      <form id="pdiv-form"
        onSubmit={onSend}
        autoComplete="off"
      >
        <PeopleFormInput/>
      </form>
    </div>
  );
};
