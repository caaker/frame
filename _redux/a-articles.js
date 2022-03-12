// state.articles holds an array of all articles
const Articles = (state = {articles: false}, action) => {

  let newState = { ...state };

  switch(action.type) {

    case 'initializeArticles':
      newState.articles = action.articles;
      return newState;

    case 'deleteArticle':
      const clone = [...newState.articles];
      clone.splice(action.index, 1);
      newState.articles = clone;
      return newState;

    case 'addArticle':
      const clone1 = [...newState.articles];
      clone1.unshift(action.new_article);
      newState.articles = clone1;
      return newState;

    case 'updateArticle':
  }

  return state;

};

export default {
  Articles
};