import './PeopleForm.css';
import React                          from   'react';
import { useSelector, useDispatch }   from   'react-redux';
import PeopleFormInput                from    './PeopleFormInput.jsx';

export default () => {

  const dispatch = useDispatch();
  const current = useSelector((state) => state.PeopleInput.current);
  const socket = useSelector((state) => state.WebSocket.socket);
  // const email = useSelector((state) => state.User.current.email);
  const email_from = 'test_from@test.com';
  const email_to = 'test_to@test.com';

  function onSend() {

    event.preventDefault();

    const messageServer = {
      type: 'echo',
      message: current,
      from: email_from,
      to: email_to
    };
    socket.send(JSON.stringify(messageServer));

    const messageRedux = 'R:' + current;
    if(messageRedux) {
      dispatch({type: 'addMessage', message: messageRedux});
    }

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
