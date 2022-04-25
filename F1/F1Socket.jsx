import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFingerPrint, parseMessages } from './F1SocketFunctions.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Socket ');
  const dispatch = useDispatch();

  const socket = new WebSocket(location.origin.replace(/^http/, 'ws'));
  dispatch({type: 'initializeWebSocket', socket: socket});

  socket.addEventListener('open', (event) => {
    console.logD('DEBUG: WEBSOCKET: open', 'green');
    sendFingerPrint(socket);
  });

  socket.addEventListener('message', (event) => {
    let obj = parseMessages(event.data);
    console.logD('DEBUG: WEBSOCKET: message', 'green');
  });

  socket.addEventListener('close', (event) => {
    console.logD('DEBUG: WEBSOCKET: closed clean:', 'green');
  });

  return null;

};













































/*


  // https://stackoverflow.com/questions/24213584/in-what-cases-will-a-websocket-close-event-tell-you-wasclean-is-false


*/