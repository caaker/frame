import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFingerPrint } from './F1SocketFunctions.jsx';

export default () => {

  console.logD('DEBUG: L2 : F1-Socket ');
  const dispatch = useDispatch();

  const host = location.origin.replace(/^http/, 'ws');
  const socket = new WebSocket(host);

  dispatch({type: 'initializeWebSocket', socket: socket});

  socket.addEventListener('open', (event) => {
    console.logD('DEBUG: WEBSOCKET: open: ' + (socket.readyState === 1), 'red');
    sendFingerPrint(socket);
  });

  socket.addEventListener('close', (event) => {
    // console.log('DEBUG: websocket: close event:');
  });

  socket.addEventListener('message', (event) => {
    // console.log('DEBUG: websocket: message event:');
    parseMessages(event.data);
  });

  function parseMessages(json) {
    const obj = JSON.parse(json);
    if(obj.type === 'fingerprint') {
      dispatch({type:'fingerprint', fingerprint: obj});
      return;
    }
  }

  return null;
};
