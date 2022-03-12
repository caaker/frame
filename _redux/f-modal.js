const Modal = (state = { on: false, data: false }, action) => {
  const newState = { ...state };
  newState.config = action.config;
  switch(action.type) {
    case 'toggleOn':
      newState.on = true;
      return newState;
    case 'toggleModalOff':
      newState.on = false;
      return newState;
  }
  return state;
};

export default {
  Modal
};
