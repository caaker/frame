import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFingerPrint, parseMessages } from './F1SocketFunctions.jsx';

export default () => {

  console.logD('DEBUG: L2 : F1-Socket ');
  const dispatch = useDispatch();
  const host = location.origin.replace(/^http/, 'ws');
  const socket = new WebSocket(host);
  dispatch({type: 'initializeWebSocket', socket: socket});

  // on open event sends a fingerprint to the server
  socket.addEventListener('open', (event) => {
    console.logD('DEBUG: WEBSOCKET: open: isReady: ' + (socket.readyState === 1), 'green');
    sendFingerPrint(socket);
  });

  socket.addEventListener('message', (event) => {
    let obj = parseMessages(event.data);
    console.logD('DEBUG: WEBSOCKET: message: ' + obj.type, 'green');

  });

  return null;

};
