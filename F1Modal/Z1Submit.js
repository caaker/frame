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

      // dispatch({type: 'deleteArticle', index: index});

      dispatch({type: 'addArticle', new_article: response}); // add article works
    })
    .catch((error) => {
      console.log('fetch/POST error', error);
    });
};

exp.put = function(article_object, dispatch) {
  console.log(article_object);
  const options = {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(article_object)
  };
  fetch('/articles/put/' + encodeURIComponent(article_object._id), options)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      // console.log('DEBUG: /articles/put ', response); // update article ... does not return the article
      const send = {
        type: 'updateArticle',
        new_article: article_object,
        index: article_object.index
      }
      dispatch(send);
    })
    .catch((error) => {
      console.error('DEBUG: fetch/PUT error', error);
    });
};

export default exp;

