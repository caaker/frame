import {initial_state, test_state, makeData, test} from './a-articles-aux';

// holds json data for all articles, similar to digg.com or news.google.com
const Articles = (state = {articles: false}, action) => {
  let newState = { ...state };
  switch(action.type) {

    // called by initial page load by Data component - read them
    case 'initializeArticles':
      newState.articles = action.articles;
      return newState;

    // called by the delete SVG component - delete it
    case 'deleteArticle':
      const clone = [...newState.articles];
      clone.splice(action.index, 1);
      newState.articles = clone;
      return newState;

    // called by F1Modal Submission function - post it
    case 'addArticle':
      const clone1 = [...newState.articles];
      clone1.unshift(action.new_article);
      newState.articles = clone1;
      return newState;

    // called by F1Modal Submission function - update it
    case 'updateArticle':
      const clone2 = [...newState.articles];
      clone2.unshift(action.new_article);
      newState.articles = clone2;
      return newState;
  }

  // no change, return the previous state
  return state;
};


// controlled form holds data for the article modal
const ArticleForm = (state = initial_state, action) => {
  switch(action.type) {

    // when closing the modal or submitting the modal; reset the inputs
    case 'clearArticleForm':
      return initial_state;

    // implemented in M1Form
    case 'testArticleForm':
      return test_state;

    //  called by edit SVG component
    case 'setArticleForm':
      return makeData(action.data);

    // called in M1FormInputs; this is a controlled form and Z1AddDomain
    case 'updateArticleForm':
      let newState = { ...state };
      const name = action.data[0];
      const value = action.data[1];
      const valid = action.data[2];
      newState[name] = {value: value, valid: valid};
      newState.valid = test(newState);
      return newState;
  }

  // no change; return the previous state
  return state;
};

//
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
