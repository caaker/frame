import URL                         from '../../arc/class.URL.js';

// import { useDispatch }             from 'react-redux'; // throws error, pass it in instead

export default (name, value, dispatch) => {
  if(name === 'link') {
    const url = new URL(value);
    if(url.valid) {
      const send = ['domain', url.domain, true];
      dispatch({type: 'updateArticleForm', data: send});
    }
  }
};
