import { applyMiddleware } from 'redux';

// store.getState() and action have useful information
const logger = store => next => action => {
  // console.logD('REDUX: action: ' + action.type, 'brown');
  next(action);
  // console.log('REDUX: state: ', store.getState());
};

const error = store => next => action => {
  try {
    next(action);
  } catch (error) {
    console.error('REDUX: MIDLEWARE: ERROR', error);
  }
};

export default applyMiddleware(logger, error);