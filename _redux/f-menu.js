// Articles, People
const MenuPage = (state = {current: 'Articles', on: false}, action) => {
  const newState = { ...state };
  switch(action.type) {

    case 'updateMenuPage':
      newState.current = action.current;
      return newState;

    case 'toggleMenuPageOff':
      if(newState.on === true) {
        newState.on = false;
        return newState;
      }
      return state;
    case 'toggleMenuPage':
      newState.on = !state.on;
      return newState;
  }
  return state;
};

export default {
  MenuPage
};
