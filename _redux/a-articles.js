import {initial_state, test_state, makeData, test} from './a-articles-aux';

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

const ArticleForm = (state = initial_state, action) => {
  switch(action.type) {
    case 'clearArticleForm':
      return initial_state;
    case 'testArticleForm':
      return test_state;
    case 'setArticleForm':
      return makeData(action.data);
    case 'updateArticleForm':
      let newState = { ...state };
      const name = action.data[0];
      const value = action.data[1];
      const valid = action.data[2];
      newState[name] = {value: value, valid: valid};
      newState.valid = test(newState);
      return newState;
  }
  return state;
};

const SearchInput = (state = {current: ''}, action) => {
  const newState = { ...state };
  switch(action.type) {
    case 'updateSearchInput':
      newState.current = action.current;
      return newState;
  }
  return state;
};

export default {
  Articles,
  ArticleForm,
  SearchInput
};
