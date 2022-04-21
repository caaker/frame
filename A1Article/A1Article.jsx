import './A1Article.css';
import React           from 'react';
import { useSelector } from 'react-redux';
import Article         from './Article.jsx';
import _arc            from '../../arc/arc.js';
import Search          from './Search.js';

export default () => {
  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);
  function makeArticles() {
    if(articles) {
      if(search) {
        articles = articles.filter((val) => {
          return Search(val, search);
        });
      }
      articles = articles.map((article, index) => {
        article.index = index;
        return <Article key={index} article={article}/>;
      });
      return articles;
    }
  }
  _arc.scrollToHash(4000);
  console.logD('DEBUG: L3 : F1-Page-Article ');
  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};
