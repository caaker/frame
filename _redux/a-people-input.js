const PeopleInput = (state = {current: ''}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'updatePeopleInput':
      newState.current = action.current;
      return newState;
  }
  return state;
};

export default {
  PeopleInput
};