const User = (state = {current: false}, action) => {
  switch(action.type) {

    // called in initial page load
    case 'initializeUser':
      const newState = { ...state };
      newState.current = action.current;
      return newState;
  }
  return state;
};

export default {
  User
};
