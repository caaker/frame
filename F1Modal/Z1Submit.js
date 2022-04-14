const exp = {};

exp.post = function(state, dispatch) {
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(state)
  };
  fetch('/articles/add', options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('DEBUG: /articles/add ', response);
      dispatch({type: 'addArticle', new_article: response});
    })
    .catch((error) => {
      console.log('fetch/POST error', error);
    });
};

exp.put_old = function(state) {
  let _id = encodeURIComponent(state._id);
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(state)
  };
  fetch('/links/put/' + _id, options )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('DEBUG: /links/put ', response);
    })
    .catch((error) => {
      console.error('DEBUG: fetch/PUT error', error);
    });
};

export default exp;

