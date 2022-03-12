export const sendMessage = function (event) {
  const json_string = event.data;
  if(json_string) {
    let obj = JSON.parse(json_string);
    let message = 'L:' + obj.message;
    dispatch({type: 'addMessage', message: message});
  }
};

export const sendFingerPrint = function(socket) {
  sendType('fingerprint', window.navigator.userAgent, socket);
};

export const sendType = function(type, message, socket) {
  const send = {
    type: type,
    message: message
  };
  socket.send(JSON.stringify(send));
};

export default {sendMessage, sendFingerPrint, sendType};