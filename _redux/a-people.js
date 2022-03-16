const People = (state = {people: false}, action) => {
  let newState = { ...state };
  switch(action.type) {
    case 'initializePeople':
      newState.people = action.people;
      return newState;
    case 'addMessage':
      const clone = [...newState.people];
      clone.push(action.message);
      newState.people = clone;
      return newState;
  }
  return state;
};

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
  People,
  PeopleInput
};

