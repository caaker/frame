// frame
import Menu              from  './f-menu';
import User              from  './f-user';
import WebSocket         from  './f-websocket';
import Modal             from  './f-modal';

// app - 1
import Articles          from  './a-articles';

// app - 2
import PeopleInput       from  './a-people-input';
import People            from  './a-people';

const combiner = {

  // frame
  ...User,
  ...Menu,
  ...WebSocket,
  ...Modal,

  // app - 1
  ...PeopleInput,
  ...People,

  // app - 2
  ...Articles,

  // test

};

import {combineReducers} from 'redux';
export default combineReducers(combiner);

// deprecate
// ...Friends
