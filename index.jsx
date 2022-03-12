// React Modules
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

// Frame Modules - redux
import store        from './_redux/store';

// Frame Modules - top component
import F1           from './F1/F1.jsx';

console.logD('DEBUG: L0 : index.jsx ');
// console.logD('DEBUG: L0 : index.jsx ');


ReactDOM.render(
  <Provider store={store}>
    <F1></F1>
  </Provider>
  , document.getElementById('app'));