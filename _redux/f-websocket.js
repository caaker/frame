const WebSocket = (state = {socket: false, fingerprint: false}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'initializeWebSocket':
      newState.socket = action.socket;
      return newState;
  }
  return state;
};

export default {
  WebSocket
};

