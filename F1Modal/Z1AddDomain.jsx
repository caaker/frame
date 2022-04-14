import URL from '../../arc/class.URL.js';

export default (name, value, dispatch) => {
  if(name === 'link') {
    const url = new URL(value);
    if(url.valid) {
      const send = ['domain', url.domain, true];
      dispatch({type: 'updateArticleForm', data: send});
    }
  }
};
